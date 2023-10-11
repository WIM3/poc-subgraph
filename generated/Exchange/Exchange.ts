// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AccountBalanceChanged extends ethereum.Event {
  get params(): AccountBalanceChanged__Params {
    return new AccountBalanceChanged__Params(this);
  }
}

export class AccountBalanceChanged__Params {
  _event: AccountBalanceChanged;

  constructor(event: AccountBalanceChanged) {
    this._event = event;
  }

  get accountBalance(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class ClearingHouseChanged extends ethereum.Event {
  get params(): ClearingHouseChanged__Params {
    return new ClearingHouseChanged__Params(this);
  }
}

export class ClearingHouseChanged__Params {
  _event: ClearingHouseChanged;

  constructor(event: ClearingHouseChanged) {
    this._event = event;
  }

  get clearingHouse(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class FundingUpdated extends ethereum.Event {
  get params(): FundingUpdated__Params {
    return new FundingUpdated__Params(this);
  }
}

export class FundingUpdated__Params {
  _event: FundingUpdated;

  constructor(event: FundingUpdated) {
    this._event = event;
  }

  get baseToken(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get markTwap(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get indexTwap(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class MaxTickCrossedWithinBlockChanged extends ethereum.Event {
  get params(): MaxTickCrossedWithinBlockChanged__Params {
    return new MaxTickCrossedWithinBlockChanged__Params(this);
  }
}

export class MaxTickCrossedWithinBlockChanged__Params {
  _event: MaxTickCrossedWithinBlockChanged;

  constructor(event: MaxTickCrossedWithinBlockChanged) {
    this._event = event;
  }

  get baseToken(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get maxTickCrossedWithinBlock(): i32 {
    return this._event.parameters[1].value.toI32();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Exchange__getPnlToBeRealizedInputParamsStruct extends ethereum.Tuple {
  get trader(): Address {
    return this[0].toAddress();
  }

  get baseToken(): Address {
    return this[1].toAddress();
  }

  get base(): BigInt {
    return this[2].toBigInt();
  }

  get quote(): BigInt {
    return this[3].toBigInt();
  }
}

export class Exchange__settleFundingResultFundingGrowthGlobalStruct extends ethereum.Tuple {
  get twPremiumX96(): BigInt {
    return this[0].toBigInt();
  }

  get twPremiumDivBySqrtPriceX96(): BigInt {
    return this[1].toBigInt();
  }
}

export class Exchange__settleFundingResult {
  value0: BigInt;
  value1: Exchange__settleFundingResultFundingGrowthGlobalStruct;

  constructor(
    value0: BigInt,
    value1: Exchange__settleFundingResultFundingGrowthGlobalStruct
  ) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromSignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromTuple(this.value1));
    return map;
  }

  getFundingPayment(): BigInt {
    return this.value0;
  }

  getFundingGrowthGlobal(): Exchange__settleFundingResultFundingGrowthGlobalStruct {
    return this.value1;
  }
}

export class Exchange__swapResultValue0Struct extends ethereum.Tuple {
  get base(): BigInt {
    return this[0].toBigInt();
  }

  get quote(): BigInt {
    return this[1].toBigInt();
  }

  get exchangedPositionSize(): BigInt {
    return this[2].toBigInt();
  }

  get exchangedPositionNotional(): BigInt {
    return this[3].toBigInt();
  }

  get fee(): BigInt {
    return this[4].toBigInt();
  }

  get insuranceFundFee(): BigInt {
    return this[5].toBigInt();
  }

  get pnlToBeRealized(): BigInt {
    return this[6].toBigInt();
  }

  get sqrtPriceAfterX96(): BigInt {
    return this[7].toBigInt();
  }

  get tick(): i32 {
    return this[8].toI32();
  }

  get isPartialClose(): boolean {
    return this[9].toBoolean();
  }
}

export class Exchange__swapInputParamsStruct extends ethereum.Tuple {
  get trader(): Address {
    return this[0].toAddress();
  }

  get baseToken(): Address {
    return this[1].toAddress();
  }

  get isBaseToQuote(): boolean {
    return this[2].toBoolean();
  }

  get isExactInput(): boolean {
    return this[3].toBoolean();
  }

  get isClose(): boolean {
    return this[4].toBoolean();
  }

  get amount(): BigInt {
    return this[5].toBigInt();
  }

  get sqrtPriceLimitX96(): BigInt {
    return this[6].toBigInt();
  }
}

export class Exchange extends ethereum.SmartContract {
  static bind(address: Address): Exchange {
    return new Exchange("Exchange", address);
  }

  candidate(): Address {
    let result = super.call("candidate", "candidate():(address)", []);

    return result[0].toAddress();
  }

  try_candidate(): ethereum.CallResult<Address> {
    let result = super.tryCall("candidate", "candidate():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getAccountBalance(): Address {
    let result = super.call(
      "getAccountBalance",
      "getAccountBalance():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_getAccountBalance(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getAccountBalance",
      "getAccountBalance():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getAllPendingFundingPayment(trader: Address): BigInt {
    let result = super.call(
      "getAllPendingFundingPayment",
      "getAllPendingFundingPayment(address):(int256)",
      [ethereum.Value.fromAddress(trader)]
    );

    return result[0].toBigInt();
  }

  try_getAllPendingFundingPayment(
    trader: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getAllPendingFundingPayment",
      "getAllPendingFundingPayment(address):(int256)",
      [ethereum.Value.fromAddress(trader)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getClearingHouse(): Address {
    let result = super.call(
      "getClearingHouse",
      "getClearingHouse():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_getClearingHouse(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getClearingHouse",
      "getClearingHouse():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getClearingHouseConfig(): Address {
    let result = super.call(
      "getClearingHouseConfig",
      "getClearingHouseConfig():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_getClearingHouseConfig(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getClearingHouseConfig",
      "getClearingHouseConfig():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getMarketRegistry(): Address {
    let result = super.call(
      "getMarketRegistry",
      "getMarketRegistry():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_getMarketRegistry(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getMarketRegistry",
      "getMarketRegistry():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getMaxTickCrossedWithinBlock(baseToken: Address): i32 {
    let result = super.call(
      "getMaxTickCrossedWithinBlock",
      "getMaxTickCrossedWithinBlock(address):(uint24)",
      [ethereum.Value.fromAddress(baseToken)]
    );

    return result[0].toI32();
  }

  try_getMaxTickCrossedWithinBlock(
    baseToken: Address
  ): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "getMaxTickCrossedWithinBlock",
      "getMaxTickCrossedWithinBlock(address):(uint24)",
      [ethereum.Value.fromAddress(baseToken)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  getOrderBook(): Address {
    let result = super.call("getOrderBook", "getOrderBook():(address)", []);

    return result[0].toAddress();
  }

  try_getOrderBook(): ethereum.CallResult<Address> {
    let result = super.tryCall("getOrderBook", "getOrderBook():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getPendingFundingPayment(trader: Address, baseToken: Address): BigInt {
    let result = super.call(
      "getPendingFundingPayment",
      "getPendingFundingPayment(address,address):(int256)",
      [
        ethereum.Value.fromAddress(trader),
        ethereum.Value.fromAddress(baseToken)
      ]
    );

    return result[0].toBigInt();
  }

  try_getPendingFundingPayment(
    trader: Address,
    baseToken: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getPendingFundingPayment",
      "getPendingFundingPayment(address,address):(int256)",
      [
        ethereum.Value.fromAddress(trader),
        ethereum.Value.fromAddress(baseToken)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getPnlToBeRealized(
    params: Exchange__getPnlToBeRealizedInputParamsStruct
  ): BigInt {
    let result = super.call(
      "getPnlToBeRealized",
      "getPnlToBeRealized((address,address,int256,int256)):(int256)",
      [ethereum.Value.fromTuple(params)]
    );

    return result[0].toBigInt();
  }

  try_getPnlToBeRealized(
    params: Exchange__getPnlToBeRealizedInputParamsStruct
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getPnlToBeRealized",
      "getPnlToBeRealized((address,address,int256,int256)):(int256)",
      [ethereum.Value.fromTuple(params)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getSqrtMarkTwapX96(baseToken: Address, twapInterval: BigInt): BigInt {
    let result = super.call(
      "getSqrtMarkTwapX96",
      "getSqrtMarkTwapX96(address,uint32):(uint160)",
      [
        ethereum.Value.fromAddress(baseToken),
        ethereum.Value.fromUnsignedBigInt(twapInterval)
      ]
    );

    return result[0].toBigInt();
  }

  try_getSqrtMarkTwapX96(
    baseToken: Address,
    twapInterval: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getSqrtMarkTwapX96",
      "getSqrtMarkTwapX96(address,uint32):(uint160)",
      [
        ethereum.Value.fromAddress(baseToken),
        ethereum.Value.fromUnsignedBigInt(twapInterval)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isOverPriceSpread(baseToken: Address): boolean {
    let result = super.call(
      "isOverPriceSpread",
      "isOverPriceSpread(address):(bool)",
      [ethereum.Value.fromAddress(baseToken)]
    );

    return result[0].toBoolean();
  }

  try_isOverPriceSpread(baseToken: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isOverPriceSpread",
      "isOverPriceSpread(address):(bool)",
      [ethereum.Value.fromAddress(baseToken)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  settleFunding(
    trader: Address,
    baseToken: Address
  ): Exchange__settleFundingResult {
    let result = super.call(
      "settleFunding",
      "settleFunding(address,address):(int256,(int256,int256))",
      [
        ethereum.Value.fromAddress(trader),
        ethereum.Value.fromAddress(baseToken)
      ]
    );

    return new Exchange__settleFundingResult(
      result[0].toBigInt(),
      changetype<Exchange__settleFundingResultFundingGrowthGlobalStruct>(
        result[1].toTuple()
      )
    );
  }

  try_settleFunding(
    trader: Address,
    baseToken: Address
  ): ethereum.CallResult<Exchange__settleFundingResult> {
    let result = super.tryCall(
      "settleFunding",
      "settleFunding(address,address):(int256,(int256,int256))",
      [
        ethereum.Value.fromAddress(trader),
        ethereum.Value.fromAddress(baseToken)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Exchange__settleFundingResult(
        value[0].toBigInt(),
        changetype<Exchange__settleFundingResultFundingGrowthGlobalStruct>(
          value[1].toTuple()
        )
      )
    );
  }

  swap(
    params: Exchange__swapInputParamsStruct
  ): Exchange__swapResultValue0Struct {
    let result = super.call(
      "swap",
      "swap((address,address,bool,bool,bool,uint256,uint160)):((uint256,uint256,int256,int256,uint256,uint256,int256,uint256,int24,bool))",
      [ethereum.Value.fromTuple(params)]
    );

    return changetype<Exchange__swapResultValue0Struct>(result[0].toTuple());
  }

  try_swap(
    params: Exchange__swapInputParamsStruct
  ): ethereum.CallResult<Exchange__swapResultValue0Struct> {
    let result = super.tryCall(
      "swap",
      "swap((address,address,bool,bool,bool,uint256,uint160)):((uint256,uint256,int256,int256,uint256,uint256,int256,uint256,int24,bool))",
      [ethereum.Value.fromTuple(params)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<Exchange__swapResultValue0Struct>(value[0].toTuple())
    );
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get marketRegistryArg(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get orderBookArg(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get clearingHouseConfigArg(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetAccountBalanceCall extends ethereum.Call {
  get inputs(): SetAccountBalanceCall__Inputs {
    return new SetAccountBalanceCall__Inputs(this);
  }

  get outputs(): SetAccountBalanceCall__Outputs {
    return new SetAccountBalanceCall__Outputs(this);
  }
}

export class SetAccountBalanceCall__Inputs {
  _call: SetAccountBalanceCall;

  constructor(call: SetAccountBalanceCall) {
    this._call = call;
  }

  get accountBalanceArg(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetAccountBalanceCall__Outputs {
  _call: SetAccountBalanceCall;

  constructor(call: SetAccountBalanceCall) {
    this._call = call;
  }
}

export class SetClearingHouseCall extends ethereum.Call {
  get inputs(): SetClearingHouseCall__Inputs {
    return new SetClearingHouseCall__Inputs(this);
  }

  get outputs(): SetClearingHouseCall__Outputs {
    return new SetClearingHouseCall__Outputs(this);
  }
}

export class SetClearingHouseCall__Inputs {
  _call: SetClearingHouseCall;

  constructor(call: SetClearingHouseCall) {
    this._call = call;
  }

  get clearingHouseArg(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetClearingHouseCall__Outputs {
  _call: SetClearingHouseCall;

  constructor(call: SetClearingHouseCall) {
    this._call = call;
  }
}

export class SetMaxTickCrossedWithinBlockCall extends ethereum.Call {
  get inputs(): SetMaxTickCrossedWithinBlockCall__Inputs {
    return new SetMaxTickCrossedWithinBlockCall__Inputs(this);
  }

  get outputs(): SetMaxTickCrossedWithinBlockCall__Outputs {
    return new SetMaxTickCrossedWithinBlockCall__Outputs(this);
  }
}

export class SetMaxTickCrossedWithinBlockCall__Inputs {
  _call: SetMaxTickCrossedWithinBlockCall;

  constructor(call: SetMaxTickCrossedWithinBlockCall) {
    this._call = call;
  }

  get baseToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get maxTickCrossedWithinBlock(): i32 {
    return this._call.inputValues[1].value.toI32();
  }
}

export class SetMaxTickCrossedWithinBlockCall__Outputs {
  _call: SetMaxTickCrossedWithinBlockCall;

  constructor(call: SetMaxTickCrossedWithinBlockCall) {
    this._call = call;
  }
}

export class SetOwnerCall extends ethereum.Call {
  get inputs(): SetOwnerCall__Inputs {
    return new SetOwnerCall__Inputs(this);
  }

  get outputs(): SetOwnerCall__Outputs {
    return new SetOwnerCall__Outputs(this);
  }
}

export class SetOwnerCall__Inputs {
  _call: SetOwnerCall;

  constructor(call: SetOwnerCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetOwnerCall__Outputs {
  _call: SetOwnerCall;

  constructor(call: SetOwnerCall) {
    this._call = call;
  }
}

export class SettleFundingCall extends ethereum.Call {
  get inputs(): SettleFundingCall__Inputs {
    return new SettleFundingCall__Inputs(this);
  }

  get outputs(): SettleFundingCall__Outputs {
    return new SettleFundingCall__Outputs(this);
  }
}

export class SettleFundingCall__Inputs {
  _call: SettleFundingCall;

  constructor(call: SettleFundingCall) {
    this._call = call;
  }

  get trader(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get baseToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class SettleFundingCall__Outputs {
  _call: SettleFundingCall;

  constructor(call: SettleFundingCall) {
    this._call = call;
  }

  get fundingPayment(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }

  get fundingGrowthGlobal(): SettleFundingCallFundingGrowthGlobalStruct {
    return changetype<SettleFundingCallFundingGrowthGlobalStruct>(
      this._call.outputValues[1].value.toTuple()
    );
  }
}

export class SettleFundingCallFundingGrowthGlobalStruct extends ethereum.Tuple {
  get twPremiumX96(): BigInt {
    return this[0].toBigInt();
  }

  get twPremiumDivBySqrtPriceX96(): BigInt {
    return this[1].toBigInt();
  }
}

export class SwapCall extends ethereum.Call {
  get inputs(): SwapCall__Inputs {
    return new SwapCall__Inputs(this);
  }

  get outputs(): SwapCall__Outputs {
    return new SwapCall__Outputs(this);
  }
}

export class SwapCall__Inputs {
  _call: SwapCall;

  constructor(call: SwapCall) {
    this._call = call;
  }

  get params(): SwapCallParamsStruct {
    return changetype<SwapCallParamsStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }
}

export class SwapCall__Outputs {
  _call: SwapCall;

  constructor(call: SwapCall) {
    this._call = call;
  }

  get value0(): SwapCallValue0Struct {
    return changetype<SwapCallValue0Struct>(
      this._call.outputValues[0].value.toTuple()
    );
  }
}

export class SwapCallParamsStruct extends ethereum.Tuple {
  get trader(): Address {
    return this[0].toAddress();
  }

  get baseToken(): Address {
    return this[1].toAddress();
  }

  get isBaseToQuote(): boolean {
    return this[2].toBoolean();
  }

  get isExactInput(): boolean {
    return this[3].toBoolean();
  }

  get isClose(): boolean {
    return this[4].toBoolean();
  }

  get amount(): BigInt {
    return this[5].toBigInt();
  }

  get sqrtPriceLimitX96(): BigInt {
    return this[6].toBigInt();
  }
}

export class SwapCallValue0Struct extends ethereum.Tuple {
  get base(): BigInt {
    return this[0].toBigInt();
  }

  get quote(): BigInt {
    return this[1].toBigInt();
  }

  get exchangedPositionSize(): BigInt {
    return this[2].toBigInt();
  }

  get exchangedPositionNotional(): BigInt {
    return this[3].toBigInt();
  }

  get fee(): BigInt {
    return this[4].toBigInt();
  }

  get insuranceFundFee(): BigInt {
    return this[5].toBigInt();
  }

  get pnlToBeRealized(): BigInt {
    return this[6].toBigInt();
  }

  get sqrtPriceAfterX96(): BigInt {
    return this[7].toBigInt();
  }

  get tick(): i32 {
    return this[8].toI32();
  }

  get isPartialClose(): boolean {
    return this[9].toBoolean();
  }
}

export class UniswapV3SwapCallbackCall extends ethereum.Call {
  get inputs(): UniswapV3SwapCallbackCall__Inputs {
    return new UniswapV3SwapCallbackCall__Inputs(this);
  }

  get outputs(): UniswapV3SwapCallbackCall__Outputs {
    return new UniswapV3SwapCallbackCall__Outputs(this);
  }
}

export class UniswapV3SwapCallbackCall__Inputs {
  _call: UniswapV3SwapCallbackCall;

  constructor(call: UniswapV3SwapCallbackCall) {
    this._call = call;
  }

  get amount0Delta(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get amount1Delta(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class UniswapV3SwapCallbackCall__Outputs {
  _call: UniswapV3SwapCallbackCall;

  constructor(call: UniswapV3SwapCallbackCall) {
    this._call = call;
  }
}

export class UpdateOwnerCall extends ethereum.Call {
  get inputs(): UpdateOwnerCall__Inputs {
    return new UpdateOwnerCall__Inputs(this);
  }

  get outputs(): UpdateOwnerCall__Outputs {
    return new UpdateOwnerCall__Outputs(this);
  }
}

export class UpdateOwnerCall__Inputs {
  _call: UpdateOwnerCall;

  constructor(call: UpdateOwnerCall) {
    this._call = call;
  }
}

export class UpdateOwnerCall__Outputs {
  _call: UpdateOwnerCall;

  constructor(call: UpdateOwnerCall) {
    this._call = call;
  }
}
