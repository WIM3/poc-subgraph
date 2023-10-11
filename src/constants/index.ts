import { Address, TypedMap } from "@graphprotocol/graph-ts"

export const Network = "optimism-goerli"
export const ChainId = "420"
export const Version = "2.4.3"

export const USDCAddress = Address.fromString("0xe5e0DE0ABfEc2FFFaC167121E51d7D8f57C8D9bC")
export const QuoteTokenAddress = Address.fromString("0xA77A1064e9A14f8E78A7ACE7079b87d27Dc7305b")

export const baseTokenSymbolMap = new TypedMap<Address, string>()
baseTokenSymbolMap.set(Address.fromString("0xd46537fb8607071fD20754f8886696bB3B6763C5"), "vETH")

export const collateralMap = new TypedMap<Address, TypedMap<string, string>>()

export const USDC = new TypedMap<string, string>()
USDC.set("name", "USD Coin")
USDC.set("symbol", "USDC")
USDC.set("decimals", "6")
collateralMap.set(Address.fromString("0xe5e0DE0ABfEc2FFFaC167121E51d7D8f57C8D9bC"), USDC)

export const TestUSDT = new TypedMap<string, string>()
TestUSDT.set("name", "Test Tether")
TestUSDT.set("symbol", "TestUSDT")
TestUSDT.set("decimals", "6")
collateralMap.set(Address.fromString("0x3DB9224ae32D8f1c825fCA9138bb21d4983F42c6"), TestUSDT)

export const TestWBTC = new TypedMap<string, string>()
TestWBTC.set("name", "Test Wrapped BTC")
TestWBTC.set("symbol", "TestWBTC")
TestWBTC.set("decimals", "8")
collateralMap.set(Address.fromString("0x648FD1C74213F3B7Bb14B2D7C38bF062C8dfB4F9"), TestWBTC)

export const WETH = new TypedMap<string, string>()
WETH.set("name", "Wrapped Ether")
WETH.set("symbol", "WETH")
WETH.set("decimals", "18")
collateralMap.set(Address.fromString("0x4200000000000000000000000000000000000006"), WETH)

export const FRAX = new TypedMap<string, string>()
FRAX.set("name", "Frax")
FRAX.set("symbol", "FRAX")
FRAX.set("decimals", "18")
collateralMap.set(Address.fromString("0x320B88D360660F81615930f41028aE6359F825Ce"), FRAX)

export const USDT = new TypedMap<string, string>()
USDT.set("name", "USDT")
USDT.set("symbol", "USDT")
USDT.set("decimals", "6")
collateralMap.set(Address.fromString("0x9E16Fc70FAb64414C59E7423d494f8E9Ba5632A5"), USDT)

