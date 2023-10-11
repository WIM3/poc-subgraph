import { Address, TypedMap } from "@graphprotocol/graph-ts"

export const Network = "optimism-goerli"
export const ChainId = "420"
export const Version = "2.4.3"

export const USDCAddress = Address.fromString("0xe5e0DE0ABfEc2FFFaC167121E51d7D8f57C8D9bC")
export const QuoteTokenAddress = Address.fromString("0xF1c771713B94d57A1fbb22ddc67920458C455b41")

export const baseTokenSymbolMap = new TypedMap<Address, string>()
baseTokenSymbolMap.set(Address.fromString("0x8aDaDACfdBd44070Ab2C131B5c229ef1108a0A5b"), "vAAVE")
baseTokenSymbolMap.set(Address.fromString("0xc5e41879045be3714Bb53b8678F911A8465637c5"), "vAPE")
baseTokenSymbolMap.set(Address.fromString("0x204Ff742d3861c5F5003EB89c852348F11A81d7c"), "vAVAX")
baseTokenSymbolMap.set(Address.fromString("0x0F7786d5669aF06A92f6aE468Fd9c2D839e5e5FA"), "vBTC")
baseTokenSymbolMap.set(Address.fromString("0x3131E84A7F7F3448321c569826727EE061992b8b"), "vDOGE2")
baseTokenSymbolMap.set(Address.fromString("0x7Ef6FA5Cf6d70B349A3cac2B24Ab381c8549040c"), "vDOGE3")
baseTokenSymbolMap.set(Address.fromString("0xCD357f38313E10F7B015f8be248fFe3963b8Bb67"), "vDOGE")
baseTokenSymbolMap.set(Address.fromString("0x60A233b9b94c67e94e0a269429Fb40004D4BA494"), "vETH")
baseTokenSymbolMap.set(Address.fromString("0x2c3F47dde4978bC3459401Ec7e9371834465d9d3"), "vLINK")
baseTokenSymbolMap.set(Address.fromString("0x77c2136c7f88645aE48cfFDCAa1A30bb8b7639F0"), "vMATIC")
baseTokenSymbolMap.set(Address.fromString("0xF02E22DaB456DA50D9824165bBAC5aE1738dCae3"), "vSOL")
baseTokenSymbolMap.set(Address.fromString("0x36ac509E004D2AC5632465206aC7E3eF23B8113f"), "vUNI")

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

