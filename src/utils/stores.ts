import { Address, BigInt, ethereum } from "@graphprotocol/graph-ts"
import {
    Maker,
    Market,
    OpenOrder,
    Protocol,
    ProtocolEventInfo,
    ProtocolTokenBalance,
    Token,
    Trader,
    TraderMarket,
    TraderTokenBalance,
} from "../../generated/schema"
import { ChainId, Network, Version } from "../constants"
import { fetchTokenDecimals, fetchTokenName, fetchTokenSymbol } from "../utils/token"
import { ADDRESS_ZERO, BD_ZERO, BI_ZERO } from "./numbers"

const SECONDS_IN_A_DAY = 86400

export function getBlockNumberLogIndex(event: ethereum.Event): BigInt {
    // NOTE:
    // after bedrock upgrade, the current gasLimit per block is 25M
    // the maximum amount of tx per block is 25M / 21K ~= 1190.48
    // (the minimum gas usage of tx is 21K)
    // and assume the maximum amount of event log per tx is 1000
    // so we set the maximum value of event.logIndex is 10M
    // (Based on ether.js documentation, the index of this log across all logs in the entire block.)
    return event.block.number.times(BigInt.fromI32(10_000_000)).plus(event.logIndex)
}

const protocolId = "perpetual-protocol"
const protocolEventInfoId = "protocol-event-info"

export function getOrCreateProtocol(): Protocol {
    // NOTE: if we're using grafting, it will not go to the "create" part
    // since the protocol already exists
    // for constants that might change per deployments, for instance, protocol.contractVersion,
    // we need to update it in one of event handlers
    let protocol = Protocol.load(protocolId)
    if (!protocol) {
        protocol = new Protocol(protocolId)
        protocol.network = Network
        protocol.chainId = ChainId
        protocol.contractVersion = Version
        protocol.publicMarketCount = BI_ZERO
        protocol.tradingFee = BD_ZERO
        protocol.tradingVolume = BD_ZERO
        protocol.totalSettlementTokenBalance = BD_ZERO
        protocol.totalSettledBadDebt = BD_ZERO
        protocol.totalRepaid = BD_ZERO
        protocol.insuranceFundFeeDistributionThreshold = BD_ZERO
        protocol.insuranceFundFeeDistributionTotalAmount = BD_ZERO
        protocol.blockNumber = BI_ZERO
        protocol.timestamp = BI_ZERO
        protocol.save()
    }
    return protocol
}

export function getOrCreateProtocolEventInfo(): ProtocolEventInfo {
    let protocolEventInfo = ProtocolEventInfo.load(protocolEventInfoId)
    if (!protocolEventInfo) {
        protocolEventInfo = new ProtocolEventInfo(protocolEventInfoId)
        protocolEventInfo.totalEventCount = BI_ZERO
        protocolEventInfo.lastProcessedEventName = ""
        protocolEventInfo.save()
    }
    return protocolEventInfo
}

export function formatMarketId(baseToken: Address): string {
    return baseToken.toHexString()
}

export function getOrCreateMarket(baseToken: Address): Market {
    const marketId = formatMarketId(baseToken)
    let market = Market.load(marketId)
    if (!market) {
        market = new Market(marketId)
        market.baseToken = Address.fromString(ADDRESS_ZERO)
        market.quoteToken = Address.fromString(ADDRESS_ZERO)
        market.pool = Address.fromString(ADDRESS_ZERO)
        market.feeRatio = BD_ZERO
        market.tradingFee = BD_ZERO
        market.tradingVolume = BD_ZERO
        market.blockNumberAdded = BI_ZERO
        market.timestampAdded = BI_ZERO
        market.blockNumber = BI_ZERO
        market.timestamp = BI_ZERO
        market.save()
    }
    return market
}

export function formatTraderId(trader: Address): string {
    return trader.toHexString()
}

export function getOrCreateTrader(traderAddr: Address): Trader {
    const traderId = formatTraderId(traderAddr)
    let trader = Trader.load(traderId)
    if (!trader) {
        trader = new Trader(traderId)
        trader.settlementTokenBalance = BD_ZERO
        trader.tradingVolume = BD_ZERO
        trader.realizedPnl = BD_ZERO
        trader.fundingPayment = BD_ZERO
        trader.tradingFee = BD_ZERO
        trader.liquidationFee = BD_ZERO
        trader.makerFee = BD_ZERO
        trader.totalPnl = BD_ZERO
        trader.blockNumber = BI_ZERO
        trader.timestamp = BI_ZERO
        trader.save()
    }
    return trader
}

export function formatTraderMarketId(trader: Address, baseToken: Address): string {
    return `${trader.toHexString()}-${baseToken.toHexString()}`
}

export function getOrCreateTraderMarket(traderAddr: Address, baseToken: Address): TraderMarket {
    const id = formatTraderMarketId(traderAddr, baseToken)
    let traderMarket = TraderMarket.load(id)
    if (!traderMarket) {
        traderMarket = new TraderMarket(id)
        traderMarket.trader = traderAddr
        traderMarket.baseToken = baseToken
        traderMarket.takerPositionSize = BD_ZERO
        traderMarket.openNotional = BD_ZERO
        traderMarket.entryPrice = BD_ZERO
        traderMarket.tradingVolume = BD_ZERO
        traderMarket.realizedPnl = BD_ZERO
        traderMarket.fundingPayment = BD_ZERO
        traderMarket.tradingFee = BD_ZERO
        traderMarket.liquidationFee = BD_ZERO
        traderMarket.makerFee = BD_ZERO
        traderMarket.blockNumber = BI_ZERO
        traderMarket.timestamp = BI_ZERO
        traderMarket.traderRef = formatTraderId(traderAddr)
        traderMarket.marketRef = formatMarketId(baseToken)
        traderMarket.save()
    }
    return traderMarket
}

function formatMakerId(makerAddr: Address): string {
    return makerAddr.toHexString()
}

export function getOrCreateMaker(makerAddr: Address): Maker {
    const makerId = formatMakerId(makerAddr)
    let maker = Maker.load(makerId)
    if (!maker) {
        maker = new Maker(makerId)
        maker.blockNumber = BI_ZERO
        maker.timestamp = BI_ZERO
        maker.collectedFee = BD_ZERO
        maker.save()
    }
    return maker
}

function formatOpenOrderId(makerAddr: Address, baseToken: Address, lowerTick: BigInt, upperTick: BigInt): string {
    return `${makerAddr.toHexString()}-${baseToken.toHexString()}-${lowerTick.toString()}-${upperTick.toString()}`
}

export function getOrCreateOpenOrder(
    makerAddr: Address,
    baseToken: Address,
    lowerTick: BigInt,
    upperTick: BigInt,
): OpenOrder {
    const openOrderId = formatOpenOrderId(makerAddr, baseToken, lowerTick, upperTick)
    let openOrder = OpenOrder.load(openOrderId)
    if (!openOrder) {
        openOrder = new OpenOrder(openOrderId)
        openOrder.maker = makerAddr
        openOrder.baseToken = baseToken
        openOrder.lowerTick = lowerTick
        openOrder.upperTick = upperTick
        openOrder.liquidity = BI_ZERO
        openOrder.collectedFee = BD_ZERO
        openOrder.collectedFeeInThisLifecycle = BD_ZERO
        openOrder.blockNumber = BI_ZERO
        openOrder.timestamp = BI_ZERO
        openOrder.makerRef = formatMakerId(makerAddr)
        openOrder.save()
    }
    return openOrder
}

export function formatTokenId(tokenAddr: Address): string {
    return tokenAddr.toHexString()
}

export function getOrCreateToken(tokenAddr: Address): Token {
    const tokenId = formatTokenId(tokenAddr)
    let token = Token.load(tokenId)
    if (!token) {
        token = new Token(tokenId)
        token.name = fetchTokenName(tokenAddr)
        token.symbol = fetchTokenSymbol(tokenAddr)
        token.decimals = fetchTokenDecimals(tokenAddr)
        token.save()
    }
    return token
}

export function formatTraderTokenBalanceId(traderAddr: Address, tokenAddr: Address): string {
    return `${traderAddr.toHexString()}-${tokenAddr.toHexString()}`
}

export function getOrCreateTraderTokenBalance(traderAddr: Address, tokenAddr: Address): TraderTokenBalance {
    const traderTokenBalanceId = formatTraderTokenBalanceId(traderAddr, tokenAddr)
    let tokenBalance = TraderTokenBalance.load(traderTokenBalanceId)
    if (!tokenBalance) {
        tokenBalance = new TraderTokenBalance(traderTokenBalanceId)
        tokenBalance.amount = BD_ZERO
        tokenBalance.trader = formatTraderId(traderAddr)
        tokenBalance.token = formatTokenId(tokenAddr)
        tokenBalance.save()
    }
    return tokenBalance
}

export function formatProtocolTokenBalanceId(tokenAddr: Address): string {
    return tokenAddr.toHexString()
}

export function getOrCreateProtocolTokenBalance(tokenAddr: Address): ProtocolTokenBalance {
    const protocolTokenBalanceId = formatProtocolTokenBalanceId(tokenAddr)
    let tokenBalance = ProtocolTokenBalance.load(protocolTokenBalanceId)
    if (!tokenBalance) {
        tokenBalance = new ProtocolTokenBalance(protocolTokenBalanceId)
        tokenBalance.amount = BD_ZERO
        tokenBalance.protocol = protocolId
        tokenBalance.token = formatTokenId(tokenAddr)
        tokenBalance.save()
    }
    return tokenBalance
}



export function removeAddressFromList(addresses: string[], addressToRemove: string): string[] {
    let spliceIndex = -1
    for (let i = 0; i < addresses.length; ++i) {
        if (addressToRemove == addresses[i]) {
            spliceIndex = i
        }
    }
    if (spliceIndex > -1) {
        addresses.splice(spliceIndex, 1)
    }
    return addresses
}

