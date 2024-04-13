import { Enum, GetEnum, Binary, SS58String, ResultPayload } from "@polkadot-api/client";
type AnonymousEnum<T extends {}> = T & {
    __anonymous: true;
};
type IEnum<T extends {}> = Enum<{
    [K in keyof T & string]: {
        type: K;
        value: T[K];
    };
}[keyof T & string]>;
type MyTuple<T> = [T, ...T[]];
type SeparateUndefined<T> = undefined extends T ? undefined | Exclude<T, undefined> : T;
type Anonymize<T> = SeparateUndefined<T extends string | number | bigint | boolean | void | undefined | null | symbol | Binary | Uint8Array | Enum<{
    type: string;
    value: any;
}> ? T : T extends AnonymousEnum<infer V> ? IEnum<V> : T extends MyTuple<any> ? {
    [K in keyof T]: T[K];
} : T extends [] ? [] : T extends Array<infer A> ? Array<A> : {
    [K in keyof T & string]: T[K];
}>;
export type I5sesotjlssv2d = {
    nonce: number;
    consumers: number;
    providers: number;
    sufficients: number;
    data: Anonymize<I1q8tnt1cluu5j>;
};
export type I1q8tnt1cluu5j = {
    free: bigint;
    reserved: bigint;
    frozen: bigint;
    flags: bigint;
};
export type Iffmde3ekjedi9 = {
    normal: Anonymize<I4q39t5hn830vp>;
    operational: Anonymize<I4q39t5hn830vp>;
    mandatory: Anonymize<I4q39t5hn830vp>;
};
export type I4q39t5hn830vp = {
    ref_time: bigint;
    proof_size: bigint;
};
export type Idin6nhq46lvdj = Array<DigestItem>;
export type DigestItem = Enum<{
    type: "PreRuntime";
    value: Anonymize<Idhk5e7nto8mrb>;
} | {
    type: "Consensus";
    value: Anonymize<Idhk5e7nto8mrb>;
} | {
    type: "Seal";
    value: Anonymize<Idhk5e7nto8mrb>;
} | {
    type: "Other";
    value: Anonymize<Binary>;
} | {
    type: "RuntimeEnvironmentUpdated";
    value: undefined;
}>;
export declare const DigestItem: GetEnum<DigestItem>;
export type Idhk5e7nto8mrb = [Binary, Binary];
export type Iav1fkj39ai0lr = Array<Anonymize<I2s0spoacio2qd>>;
export type I2s0spoacio2qd = {
    phase: Phase;
    event: Anonymize<I90b5dvk8dn9qn>;
    topics: Anonymize<Idhnf6rtqoslea>;
};
export type Phase = Enum<{
    type: "ApplyExtrinsic";
    value: Anonymize<number>;
} | {
    type: "Finalization";
    value: undefined;
} | {
    type: "Initialization";
    value: undefined;
}>;
export declare const Phase: GetEnum<Phase>;
export type I90b5dvk8dn9qn = AnonymousEnum<{
    "System": Anonymize<PalletEvent>;
    "Scheduler": Anonymize<SchedulerEvent>;
    "Preimage": Anonymize<PreimageEvent>;
    "Indices": Anonymize<IndicesEvent>;
    "Balances": Anonymize<BalancesEvent>;
    "TransactionPayment": Anonymize<TransactionPaymentEvent>;
    "Staking": Anonymize<StakingEvent>;
    "Offences": Anonymize<OffencesEvent>;
    "Session": Anonymize<SessionEvent>;
    "Grandpa": Anonymize<GrandpaEvent>;
    "ImOnline": Anonymize<ImOnlineEvent>;
    "Treasury": Anonymize<I7pitd9gb68o89>;
    "ConvictionVoting": Anonymize<ConvictionVotingEvent>;
    "Referenda": Anonymize<ReferendaEvent>;
    "Whitelist": Anonymize<WhitelistEvent>;
    "Claims": Anonymize<CommonClaimsEvent>;
    "Vesting": Anonymize<VestingEvent>;
    "Utility": Anonymize<UtilityEvent>;
    "Identity": Anonymize<IdentityEvent>;
    "Proxy": Anonymize<ProxyEvent>;
    "Multisig": Anonymize<MultisigEvent>;
    "Bounties": Anonymize<Iei6k1tdcht3q>;
    "ChildBounties": Anonymize<ChildBountiesEvent>;
    "ElectionProviderMultiPhase": Anonymize<ElectionProviderMultiPhaseEvent>;
    "VoterList": Anonymize<BagsListEvent>;
    "NominationPools": Anonymize<Id4j84j1rd7upd>;
    "FastUnstake": Anonymize<FastUnstakeEvent>;
    "ParaInclusion": Anonymize<ParachainsInclusionEvent>;
    "Paras": Anonymize<ParachainsParasEvent>;
    "Hrmp": Anonymize<PolkadotRuntimeParachainsHrmpEvent>;
    "ParasDisputes": Anonymize<ParachainsDisputesEvent>;
    "Registrar": Anonymize<CommonParasRegistrarEvent>;
    "Slots": Anonymize<CommonSlotsEvent>;
    "Auctions": Anonymize<CommonAuctionsEvent>;
    "Crowdloan": Anonymize<CommonCrowdloanEvent>;
    "XcmPallet": Anonymize<XcmEvent>;
    "MessageQueue": Anonymize<MessageQueueEvent>;
    "AssetRate": Anonymize<I1vmo9hpn12j0l>;
}>;
export type PalletEvent = Enum<{
    type: "ExtrinsicSuccess";
    value: Anonymize<Iede1ukavoderd>;
} | {
    type: "ExtrinsicFailed";
    value: Anonymize<Iennefu6o2bgdm>;
} | {
    type: "CodeUpdated";
    value: undefined;
} | {
    type: "NewAccount";
    value: Anonymize<Icbccs0ug47ilf>;
} | {
    type: "KilledAccount";
    value: Anonymize<Icbccs0ug47ilf>;
} | {
    type: "Remarked";
    value: Anonymize<Ieob37pbjnvmkj>;
}>;
export declare const PalletEvent: GetEnum<PalletEvent>;
export type Iede1ukavoderd = {
    dispatch_info: Anonymize<Ia2iiohca2et6f>;
};
export type Ia2iiohca2et6f = {
    weight: Anonymize<I4q39t5hn830vp>;
    class: DispatchClass;
    pays_fee: DispatchPays;
};
export type DispatchClass = Enum<{
    type: "Normal";
    value: undefined;
} | {
    type: "Operational";
    value: undefined;
} | {
    type: "Mandatory";
    value: undefined;
}>;
export declare const DispatchClass: GetEnum<DispatchClass>;
export type DispatchPays = Enum<{
    type: "Yes";
    value: undefined;
} | {
    type: "No";
    value: undefined;
}>;
export declare const DispatchPays: GetEnum<DispatchPays>;
export type Iennefu6o2bgdm = {
    dispatch_error: DispatchError;
    dispatch_info: Anonymize<Ia2iiohca2et6f>;
};
export type DispatchError = Enum<{
    type: "Other";
    value: undefined;
} | {
    type: "CannotLookup";
    value: undefined;
} | {
    type: "BadOrigin";
    value: undefined;
} | {
    type: "Module";
    value: Anonymize<I9mtpf03dt7lqs>;
} | {
    type: "ConsumerRemaining";
    value: undefined;
} | {
    type: "NoProviders";
    value: undefined;
} | {
    type: "TooManyConsumers";
    value: undefined;
} | {
    type: "Token";
    value: Anonymize<TokenError>;
} | {
    type: "Arithmetic";
    value: Anonymize<ArithmeticError>;
} | {
    type: "Transactional";
    value: Anonymize<TransactionalError>;
} | {
    type: "Exhausted";
    value: undefined;
} | {
    type: "Corruption";
    value: undefined;
} | {
    type: "Unavailable";
    value: undefined;
} | {
    type: "RootNotAllowed";
    value: undefined;
}>;
export declare const DispatchError: GetEnum<DispatchError>;
export type I9mtpf03dt7lqs = {
    index: number;
    error: Binary;
};
export type TokenError = Enum<{
    type: "FundsUnavailable";
    value: undefined;
} | {
    type: "OnlyProvider";
    value: undefined;
} | {
    type: "BelowMinimum";
    value: undefined;
} | {
    type: "CannotCreate";
    value: undefined;
} | {
    type: "UnknownAsset";
    value: undefined;
} | {
    type: "Frozen";
    value: undefined;
} | {
    type: "Unsupported";
    value: undefined;
} | {
    type: "CannotCreateHold";
    value: undefined;
} | {
    type: "NotExpendable";
    value: undefined;
} | {
    type: "Blocked";
    value: undefined;
}>;
export declare const TokenError: GetEnum<TokenError>;
export type ArithmeticError = Enum<{
    type: "Underflow";
    value: undefined;
} | {
    type: "Overflow";
    value: undefined;
} | {
    type: "DivisionByZero";
    value: undefined;
}>;
export declare const ArithmeticError: GetEnum<ArithmeticError>;
export type TransactionalError = Enum<{
    type: "LimitReached";
    value: undefined;
} | {
    type: "NoLayer";
    value: undefined;
}>;
export declare const TransactionalError: GetEnum<TransactionalError>;
export type Icbccs0ug47ilf = {
    account: SS58String;
};
export type Ieob37pbjnvmkj = {
    sender: SS58String;
    hash: Binary;
};
export type SchedulerEvent = Enum<{
    type: "Scheduled";
    value: Anonymize<I5n4sebgkfr760>;
} | {
    type: "Canceled";
    value: Anonymize<I5n4sebgkfr760>;
} | {
    type: "Dispatched";
    value: Anonymize<Idv8erd9m7jvse>;
} | {
    type: "CallUnavailable";
    value: Anonymize<Ibkv7dijodoblp>;
} | {
    type: "PeriodicFailed";
    value: Anonymize<Ibkv7dijodoblp>;
} | {
    type: "PermanentlyOverweight";
    value: Anonymize<Ibkv7dijodoblp>;
}>;
export declare const SchedulerEvent: GetEnum<SchedulerEvent>;
export type I5n4sebgkfr760 = {
    when: number;
    index: number;
};
export type Idv8erd9m7jvse = {
    task: Anonymize<I5g2vv0ckl2m8b>;
    id: Anonymize<I17k3ujudqd5df>;
    result: Anonymize<Idtdr91jmq5g4i>;
};
export type I5g2vv0ckl2m8b = [number, number];
export type I17k3ujudqd5df = Binary | undefined;
export type Idtdr91jmq5g4i = ResultPayload<undefined, DispatchError>;
export type Ibkv7dijodoblp = {
    task: Anonymize<I5g2vv0ckl2m8b>;
    id: Anonymize<I17k3ujudqd5df>;
};
export type PreimageEvent = Enum<{
    type: "Noted";
    value: Anonymize<Id9d48vaes3c53>;
} | {
    type: "Requested";
    value: Anonymize<Id9d48vaes3c53>;
} | {
    type: "Cleared";
    value: Anonymize<Id9d48vaes3c53>;
}>;
export declare const PreimageEvent: GetEnum<PreimageEvent>;
export type Id9d48vaes3c53 = {
    hash: Binary;
};
export type IndicesEvent = Enum<{
    type: "IndexAssigned";
    value: Anonymize<Ia1u3jll6a06ae>;
} | {
    type: "IndexFreed";
    value: Anonymize<I666bl2fqjkejo>;
} | {
    type: "IndexFrozen";
    value: Anonymize<Ia1u3jll6a06ae>;
}>;
export declare const IndicesEvent: GetEnum<IndicesEvent>;
export type Ia1u3jll6a06ae = {
    who: SS58String;
    index: number;
};
export type I666bl2fqjkejo = {
    index: number;
};
export type BalancesEvent = Enum<{
    type: "Endowed";
    value: Anonymize<Icv68aq8841478>;
} | {
    type: "DustLost";
    value: Anonymize<Ic262ibdoec56a>;
} | {
    type: "Transfer";
    value: Anonymize<Iflcfm9b6nlmdd>;
} | {
    type: "BalanceSet";
    value: Anonymize<Ijrsf4mnp3eka>;
} | {
    type: "Reserved";
    value: Anonymize<Id5fm4p8lj5qgi>;
} | {
    type: "Unreserved";
    value: Anonymize<Id5fm4p8lj5qgi>;
} | {
    type: "ReserveRepatriated";
    value: Anonymize<Idm5rqp3duosod>;
} | {
    type: "Deposit";
    value: Anonymize<Id5fm4p8lj5qgi>;
} | {
    type: "Withdraw";
    value: Anonymize<Id5fm4p8lj5qgi>;
} | {
    type: "Slashed";
    value: Anonymize<Id5fm4p8lj5qgi>;
} | {
    type: "Minted";
    value: Anonymize<Id5fm4p8lj5qgi>;
} | {
    type: "Burned";
    value: Anonymize<Id5fm4p8lj5qgi>;
} | {
    type: "Suspended";
    value: Anonymize<Id5fm4p8lj5qgi>;
} | {
    type: "Restored";
    value: Anonymize<Id5fm4p8lj5qgi>;
} | {
    type: "Upgraded";
    value: Anonymize<I4cbvqmqadhrea>;
} | {
    type: "Issued";
    value: Anonymize<I3qt1hgg4djhgb>;
} | {
    type: "Rescinded";
    value: Anonymize<I3qt1hgg4djhgb>;
} | {
    type: "Locked";
    value: Anonymize<Id5fm4p8lj5qgi>;
} | {
    type: "Unlocked";
    value: Anonymize<Id5fm4p8lj5qgi>;
} | {
    type: "Frozen";
    value: Anonymize<Id5fm4p8lj5qgi>;
} | {
    type: "Thawed";
    value: Anonymize<Id5fm4p8lj5qgi>;
}>;
export declare const BalancesEvent: GetEnum<BalancesEvent>;
export type Icv68aq8841478 = {
    account: SS58String;
    free_balance: bigint;
};
export type Ic262ibdoec56a = {
    account: SS58String;
    amount: bigint;
};
export type Iflcfm9b6nlmdd = {
    from: SS58String;
    to: SS58String;
    amount: bigint;
};
export type Ijrsf4mnp3eka = {
    who: SS58String;
    free: bigint;
};
export type Id5fm4p8lj5qgi = {
    who: SS58String;
    amount: bigint;
};
export type Idm5rqp3duosod = {
    from: SS58String;
    to: SS58String;
    amount: bigint;
    destination_status: BalanceStatus;
};
export type BalanceStatus = Enum<{
    type: "Free";
    value: undefined;
} | {
    type: "Reserved";
    value: undefined;
}>;
export declare const BalanceStatus: GetEnum<BalanceStatus>;
export type I4cbvqmqadhrea = {
    who: SS58String;
};
export type I3qt1hgg4djhgb = {
    amount: bigint;
};
export type TransactionPaymentEvent = Enum<{
    type: "TransactionFeePaid";
    value: Anonymize<Ier2cke86dqbr2>;
}>;
export declare const TransactionPaymentEvent: GetEnum<TransactionPaymentEvent>;
export type Ier2cke86dqbr2 = {
    who: SS58String;
    actual_fee: bigint;
    tip: bigint;
};
export type StakingEvent = Enum<{
    type: "EraPaid";
    value: Anonymize<I1au3fq4n84nv3>;
} | {
    type: "Rewarded";
    value: Anonymize<I5j22i27djc5r4>;
} | {
    type: "Slashed";
    value: Anonymize<Idnak900lt5lm8>;
} | {
    type: "SlashReported";
    value: Anonymize<I27n7lbd66730p>;
} | {
    type: "OldSlashingReportDiscarded";
    value: Anonymize<I2hq50pu2kdjpo>;
} | {
    type: "StakersElected";
    value: undefined;
} | {
    type: "Bonded";
    value: Anonymize<Ifk8eme5o7mukf>;
} | {
    type: "Unbonded";
    value: Anonymize<Ifk8eme5o7mukf>;
} | {
    type: "Withdrawn";
    value: Anonymize<Ifk8eme5o7mukf>;
} | {
    type: "Kicked";
    value: Anonymize<Iau4cgm6ih61cf>;
} | {
    type: "StakingElectionFailed";
    value: undefined;
} | {
    type: "Chilled";
    value: Anonymize<Idl3umm12u5pa>;
} | {
    type: "PayoutStarted";
    value: Anonymize<I6ir616rur362k>;
} | {
    type: "ValidatorPrefsSet";
    value: Anonymize<Ic19as7nbst738>;
} | {
    type: "SnapshotVotersSizeExceeded";
    value: Anonymize<I54umskavgc9du>;
} | {
    type: "SnapshotTargetsSizeExceeded";
    value: Anonymize<I54umskavgc9du>;
} | {
    type: "ForceEra";
    value: Anonymize<I43l31t29k2o0p>;
}>;
export declare const StakingEvent: GetEnum<StakingEvent>;
export type I1au3fq4n84nv3 = {
    era_index: number;
    validator_payout: bigint;
    remainder: bigint;
};
export type I5j22i27djc5r4 = {
    stash: SS58String;
    dest: StakingRewardDestination;
    amount: bigint;
};
export type StakingRewardDestination = Enum<{
    type: "Staked";
    value: undefined;
} | {
    type: "Stash";
    value: undefined;
} | {
    type: "Controller";
    value: undefined;
} | {
    type: "Account";
    value: Anonymize<SS58String>;
} | {
    type: "None";
    value: undefined;
}>;
export declare const StakingRewardDestination: GetEnum<StakingRewardDestination>;
export type Idnak900lt5lm8 = {
    staker: SS58String;
    amount: bigint;
};
export type I27n7lbd66730p = {
    validator: SS58String;
    fraction: number;
    slash_era: number;
};
export type I2hq50pu2kdjpo = {
    session_index: number;
};
export type Ifk8eme5o7mukf = {
    stash: SS58String;
    amount: bigint;
};
export type Iau4cgm6ih61cf = {
    nominator: SS58String;
    stash: SS58String;
};
export type Idl3umm12u5pa = {
    stash: SS58String;
};
export type I6ir616rur362k = {
    era_index: number;
    validator_stash: SS58String;
};
export type Ic19as7nbst738 = {
    stash: SS58String;
    prefs: Anonymize<I9o7ssi9vmhmgr>;
};
export type I9o7ssi9vmhmgr = {
    commission: number;
    blocked: boolean;
};
export type I54umskavgc9du = {
    size: number;
};
export type I43l31t29k2o0p = {
    mode: StakingForcing;
};
export type StakingForcing = Enum<{
    type: "NotForcing";
    value: undefined;
} | {
    type: "ForceNew";
    value: undefined;
} | {
    type: "ForceNone";
    value: undefined;
} | {
    type: "ForceAlways";
    value: undefined;
}>;
export declare const StakingForcing: GetEnum<StakingForcing>;
export type OffencesEvent = Enum<{
    type: "Offence";
    value: Anonymize<I41n4hddrgegvb>;
}>;
export declare const OffencesEvent: GetEnum<OffencesEvent>;
export type I41n4hddrgegvb = {
    kind: Binary;
    timeslot: Binary;
};
export type SessionEvent = Enum<{
    type: "NewSession";
    value: Anonymize<I2hq50pu2kdjpo>;
}>;
export declare const SessionEvent: GetEnum<SessionEvent>;
export type GrandpaEvent = Enum<{
    type: "NewAuthorities";
    value: Anonymize<Ib31jedabim0q7>;
} | {
    type: "Paused";
    value: undefined;
} | {
    type: "Resumed";
    value: undefined;
}>;
export declare const GrandpaEvent: GetEnum<GrandpaEvent>;
export type Ib31jedabim0q7 = {
    authority_set: Anonymize<I2qinct8jq4bqe>;
};
export type I2qinct8jq4bqe = Array<Anonymize<I3iuggguvi9njj>>;
export type I3iuggguvi9njj = [Binary, bigint];
export type ImOnlineEvent = Enum<{
    type: "HeartbeatReceived";
    value: Anonymize<I93nne97c4i0sr>;
} | {
    type: "AllGood";
    value: undefined;
} | {
    type: "SomeOffline";
    value: Anonymize<I311vp8270bfmr>;
}>;
export declare const ImOnlineEvent: GetEnum<ImOnlineEvent>;
export type I93nne97c4i0sr = {
    authority_id: Binary;
};
export type I311vp8270bfmr = {
    offline: Anonymize<I67ag5q10ogtvt>;
};
export type I67ag5q10ogtvt = Array<Anonymize<Idi27pva6ajg4>>;
export type Idi27pva6ajg4 = [SS58String, Anonymize<Ifekshcrgkl12g>];
export type Ifekshcrgkl12g = {
    total: bigint;
    own: bigint;
    others: Anonymize<I252o97fo263q7>;
};
export type I252o97fo263q7 = Array<Anonymize<I91eao91fmce8>>;
export type I91eao91fmce8 = {
    who: SS58String;
    value: bigint;
};
export type I7pitd9gb68o89 = AnonymousEnum<{
    "Proposed": Anonymize<I44hc4lgsn4o1j>;
    "Spending": Anonymize<I8iksqi3eani0a>;
    "Awarded": Anonymize<I16enopmju1p0q>;
    "Rejected": Anonymize<Ifgqhle2413de7>;
    "Burnt": Anonymize<I43kq8qudg7pq9>;
    "Rollover": Anonymize<I76riseemre533>;
    "Deposit": Anonymize<Ie5v6njpckr05b>;
    "SpendApproved": Anonymize<I38bmcrmh852rk>;
    "UpdatedInactive": Anonymize<I4hcillge8de5f>;
    "AssetSpendApproved": Anonymize<Iblqf6usek6oij>;
    "AssetSpendVoided": Anonymize<I666bl2fqjkejo>;
    "Paid": Anonymize<Iek7v4hrgnq6iv>;
    "PaymentFailed": Anonymize<Iek7v4hrgnq6iv>;
    "SpendProcessed": Anonymize<I666bl2fqjkejo>;
}>;
export type I44hc4lgsn4o1j = {
    proposal_index: number;
};
export type I8iksqi3eani0a = {
    budget_remaining: bigint;
};
export type I16enopmju1p0q = {
    proposal_index: number;
    award: bigint;
    account: SS58String;
};
export type Ifgqhle2413de7 = {
    proposal_index: number;
    slashed: bigint;
};
export type I43kq8qudg7pq9 = {
    burnt_funds: bigint;
};
export type I76riseemre533 = {
    rollover_balance: bigint;
};
export type Ie5v6njpckr05b = {
    value: bigint;
};
export type I38bmcrmh852rk = {
    proposal_index: number;
    amount: bigint;
    beneficiary: SS58String;
};
export type I4hcillge8de5f = {
    reactivated: bigint;
    deactivated: bigint;
};
export type Iblqf6usek6oij = {
    index: number;
    asset_kind: Anonymize<I32r9skkupsthv>;
    amount: bigint;
    beneficiary: XcmVersionedMultiLocation;
    valid_from: number;
    expire_at: number;
};
export type I32r9skkupsthv = AnonymousEnum<{
    "V3": Anonymize<I30in122a9nnlb>;
}>;
export type I30in122a9nnlb = {
    location: Anonymize<I43cmiele6sevi>;
    asset_id: XcmV3MultiassetAssetId;
};
export type I43cmiele6sevi = {
    parents: number;
    interior: XcmV3Junctions;
};
export type XcmV3Junctions = Enum<{
    type: "Here";
    value: undefined;
} | {
    type: "X1";
    value: Anonymize<XcmV3Junction>;
} | {
    type: "X2";
    value: Anonymize<I3n3hua43f17d>;
} | {
    type: "X3";
    value: Anonymize<I9tnbt1qa8ct9f>;
} | {
    type: "X4";
    value: Anonymize<Ifjp4mk1rg8qmc>;
} | {
    type: "X5";
    value: Anonymize<I3e9mll436gmnq>;
} | {
    type: "X6";
    value: Anonymize<Ibigks25jpj2f1>;
} | {
    type: "X7";
    value: Anonymize<I9pffrtiap54jf>;
} | {
    type: "X8";
    value: Anonymize<I5fuv9qoo4lgrf>;
}>;
export declare const XcmV3Junctions: GetEnum<XcmV3Junctions>;
export type XcmV3Junction = Enum<{
    type: "Parachain";
    value: Anonymize<number>;
} | {
    type: "AccountId32";
    value: Anonymize<I6i61tqvseg382>;
} | {
    type: "AccountIndex64";
    value: Anonymize<Iufr71iing6fs>;
} | {
    type: "AccountKey20";
    value: Anonymize<I192a40lbldnho>;
} | {
    type: "PalletInstance";
    value: Anonymize<number>;
} | {
    type: "GeneralIndex";
    value: Anonymize<bigint>;
} | {
    type: "GeneralKey";
    value: Anonymize<Ic1rqnlu0a9i3k>;
} | {
    type: "OnlyChild";
    value: undefined;
} | {
    type: "Plurality";
    value: Anonymize<Ibb5u0oo9gtas>;
} | {
    type: "GlobalConsensus";
    value: Anonymize<XcmV3JunctionNetworkId>;
}>;
export declare const XcmV3Junction: GetEnum<XcmV3Junction>;
export type I6i61tqvseg382 = {
    network: Anonymize<I5r47nbqpq4gc3>;
    id: Binary;
};
export type I5r47nbqpq4gc3 = XcmV3JunctionNetworkId | undefined;
export type XcmV3JunctionNetworkId = Enum<{
    type: "ByGenesis";
    value: Anonymize<Binary>;
} | {
    type: "ByFork";
    value: Anonymize<I83hg7ig5d74ok>;
} | {
    type: "Polkadot";
    value: undefined;
} | {
    type: "Kusama";
    value: undefined;
} | {
    type: "Westend";
    value: undefined;
} | {
    type: "Rococo";
    value: undefined;
} | {
    type: "Wococo";
    value: undefined;
} | {
    type: "Ethereum";
    value: Anonymize<I623eo8t3jrbeo>;
} | {
    type: "BitcoinCore";
    value: undefined;
} | {
    type: "BitcoinCash";
    value: undefined;
}>;
export declare const XcmV3JunctionNetworkId: GetEnum<XcmV3JunctionNetworkId>;
export type I83hg7ig5d74ok = {
    block_number: bigint;
    block_hash: Binary;
};
export type I623eo8t3jrbeo = {
    chain_id: bigint;
};
export type Iufr71iing6fs = {
    network: Anonymize<I5r47nbqpq4gc3>;
    index: bigint;
};
export type I192a40lbldnho = {
    network: Anonymize<I5r47nbqpq4gc3>;
    key: Binary;
};
export type Ic1rqnlu0a9i3k = {
    length: number;
    data: Binary;
};
export type Ibb5u0oo9gtas = {
    id: XcmV3JunctionBodyId;
    part: XcmV3JunctionBodyPart;
};
export type XcmV3JunctionBodyId = Enum<{
    type: "Unit";
    value: undefined;
} | {
    type: "Moniker";
    value: Anonymize<Binary>;
} | {
    type: "Index";
    value: Anonymize<number>;
} | {
    type: "Executive";
    value: undefined;
} | {
    type: "Technical";
    value: undefined;
} | {
    type: "Legislative";
    value: undefined;
} | {
    type: "Judicial";
    value: undefined;
} | {
    type: "Defense";
    value: undefined;
} | {
    type: "Administration";
    value: undefined;
} | {
    type: "Treasury";
    value: undefined;
}>;
export declare const XcmV3JunctionBodyId: GetEnum<XcmV3JunctionBodyId>;
export type XcmV3JunctionBodyPart = Enum<{
    type: "Voice";
    value: undefined;
} | {
    type: "Members";
    value: Anonymize<Iafscmv8tjf0ou>;
} | {
    type: "Fraction";
    value: Anonymize<Idif02efq16j92>;
} | {
    type: "AtLeastProportion";
    value: Anonymize<Idif02efq16j92>;
} | {
    type: "MoreThanProportion";
    value: Anonymize<Idif02efq16j92>;
}>;
export declare const XcmV3JunctionBodyPart: GetEnum<XcmV3JunctionBodyPart>;
export type Iafscmv8tjf0ou = {
    count: number;
};
export type Idif02efq16j92 = {
    nom: number;
    denom: number;
};
export type I3n3hua43f17d = [XcmV3Junction, XcmV3Junction];
export type I9tnbt1qa8ct9f = [XcmV3Junction, XcmV3Junction, XcmV3Junction];
export type Ifjp4mk1rg8qmc = [XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction];
export type I3e9mll436gmnq = [XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction];
export type Ibigks25jpj2f1 = [XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction];
export type I9pffrtiap54jf = [XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction];
export type I5fuv9qoo4lgrf = [XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction];
export type XcmV3MultiassetAssetId = Enum<{
    type: "Concrete";
    value: Anonymize<I43cmiele6sevi>;
} | {
    type: "Abstract";
    value: Anonymize<Binary>;
}>;
export declare const XcmV3MultiassetAssetId: GetEnum<XcmV3MultiassetAssetId>;
export type XcmVersionedMultiLocation = Enum<{
    type: "V2";
    value: Anonymize<Ibki0d249v3ojt>;
} | {
    type: "V3";
    value: Anonymize<I43cmiele6sevi>;
}>;
export declare const XcmVersionedMultiLocation: GetEnum<XcmVersionedMultiLocation>;
export type Ibki0d249v3ojt = {
    parents: number;
    interior: XcmV2MultilocationJunctions;
};
export type XcmV2MultilocationJunctions = Enum<{
    type: "Here";
    value: undefined;
} | {
    type: "X1";
    value: Anonymize<XcmV2Junction>;
} | {
    type: "X2";
    value: Anonymize<I4jsker1kbjfdl>;
} | {
    type: "X3";
    value: Anonymize<I13maq674kd1pa>;
} | {
    type: "X4";
    value: Anonymize<Id88bctcqlqla7>;
} | {
    type: "X5";
    value: Anonymize<I3d9nac7g0r3eq>;
} | {
    type: "X6";
    value: Anonymize<I5q5ti9n9anvcm>;
} | {
    type: "X7";
    value: Anonymize<I1famu3nq9knji>;
} | {
    type: "X8";
    value: Anonymize<Idlq59tbqpri0l>;
}>;
export declare const XcmV2MultilocationJunctions: GetEnum<XcmV2MultilocationJunctions>;
export type XcmV2Junction = Enum<{
    type: "Parachain";
    value: Anonymize<number>;
} | {
    type: "AccountId32";
    value: Anonymize<I92r3c354plrou>;
} | {
    type: "AccountIndex64";
    value: Anonymize<I1i2pf35t6tqc0>;
} | {
    type: "AccountKey20";
    value: Anonymize<I9llkpmu569f8r>;
} | {
    type: "PalletInstance";
    value: Anonymize<number>;
} | {
    type: "GeneralIndex";
    value: Anonymize<bigint>;
} | {
    type: "GeneralKey";
    value: Anonymize<Binary>;
} | {
    type: "OnlyChild";
    value: undefined;
} | {
    type: "Plurality";
    value: Anonymize<Icud1kgafcboq0>;
}>;
export declare const XcmV2Junction: GetEnum<XcmV2Junction>;
export type I92r3c354plrou = {
    network: XcmV2NetworkId;
    id: Binary;
};
export type XcmV2NetworkId = Enum<{
    type: "Any";
    value: undefined;
} | {
    type: "Named";
    value: Anonymize<Binary>;
} | {
    type: "Polkadot";
    value: undefined;
} | {
    type: "Kusama";
    value: undefined;
}>;
export declare const XcmV2NetworkId: GetEnum<XcmV2NetworkId>;
export type I1i2pf35t6tqc0 = {
    network: XcmV2NetworkId;
    index: bigint;
};
export type I9llkpmu569f8r = {
    network: XcmV2NetworkId;
    key: Binary;
};
export type Icud1kgafcboq0 = {
    id: XcmV2BodyId;
    part: XcmV3JunctionBodyPart;
};
export type XcmV2BodyId = Enum<{
    type: "Unit";
    value: undefined;
} | {
    type: "Named";
    value: Anonymize<Binary>;
} | {
    type: "Index";
    value: Anonymize<number>;
} | {
    type: "Executive";
    value: undefined;
} | {
    type: "Technical";
    value: undefined;
} | {
    type: "Legislative";
    value: undefined;
} | {
    type: "Judicial";
    value: undefined;
} | {
    type: "Defense";
    value: undefined;
} | {
    type: "Administration";
    value: undefined;
} | {
    type: "Treasury";
    value: undefined;
}>;
export declare const XcmV2BodyId: GetEnum<XcmV2BodyId>;
export type I4jsker1kbjfdl = [XcmV2Junction, XcmV2Junction];
export type I13maq674kd1pa = [XcmV2Junction, XcmV2Junction, XcmV2Junction];
export type Id88bctcqlqla7 = [XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction];
export type I3d9nac7g0r3eq = [XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction];
export type I5q5ti9n9anvcm = [XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction];
export type I1famu3nq9knji = [XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction];
export type Idlq59tbqpri0l = [XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction];
export type Iek7v4hrgnq6iv = {
    index: number;
    payment_id: bigint;
};
export type ConvictionVotingEvent = Enum<{
    type: "Delegated";
    value: Anonymize<Ic5oktqtdlvdvq>;
} | {
    type: "Undelegated";
    value: Anonymize<SS58String>;
}>;
export declare const ConvictionVotingEvent: GetEnum<ConvictionVotingEvent>;
export type Ic5oktqtdlvdvq = [SS58String, SS58String];
export type ReferendaEvent = Enum<{
    type: "Submitted";
    value: Anonymize<Idhr9v8mlnjej>;
} | {
    type: "DecisionDepositPlaced";
    value: Anonymize<I62nte77gksm0f>;
} | {
    type: "DecisionDepositRefunded";
    value: Anonymize<I62nte77gksm0f>;
} | {
    type: "DepositSlashed";
    value: Anonymize<Id5fm4p8lj5qgi>;
} | {
    type: "DecisionStarted";
    value: Anonymize<I932allgc83a4a>;
} | {
    type: "ConfirmStarted";
    value: Anonymize<I666bl2fqjkejo>;
} | {
    type: "ConfirmAborted";
    value: Anonymize<I666bl2fqjkejo>;
} | {
    type: "Confirmed";
    value: Anonymize<Ilhp45uime5tp>;
} | {
    type: "Approved";
    value: Anonymize<I666bl2fqjkejo>;
} | {
    type: "Rejected";
    value: Anonymize<Ilhp45uime5tp>;
} | {
    type: "TimedOut";
    value: Anonymize<Ilhp45uime5tp>;
} | {
    type: "Cancelled";
    value: Anonymize<Ilhp45uime5tp>;
} | {
    type: "Killed";
    value: Anonymize<Ilhp45uime5tp>;
} | {
    type: "SubmissionDepositRefunded";
    value: Anonymize<I62nte77gksm0f>;
} | {
    type: "MetadataSet";
    value: Anonymize<I50aq0q2l1cdkr>;
} | {
    type: "MetadataCleared";
    value: Anonymize<I50aq0q2l1cdkr>;
}>;
export declare const ReferendaEvent: GetEnum<ReferendaEvent>;
export type Idhr9v8mlnjej = {
    index: number;
    track: number;
    proposal: PreimagesBounded;
};
export type PreimagesBounded = Enum<{
    type: "Legacy";
    value: Anonymize<Id9d48vaes3c53>;
} | {
    type: "Inline";
    value: Anonymize<Binary>;
} | {
    type: "Lookup";
    value: Anonymize<Ie4qb7tq0r9uel>;
}>;
export declare const PreimagesBounded: GetEnum<PreimagesBounded>;
export type Ie4qb7tq0r9uel = {
    hash: Binary;
    len: number;
};
export type I62nte77gksm0f = {
    index: number;
    who: SS58String;
    amount: bigint;
};
export type I932allgc83a4a = {
    index: number;
    track: number;
    proposal: PreimagesBounded;
    tally: Anonymize<Ifsk7cbmtit1jd>;
};
export type Ifsk7cbmtit1jd = {
    ayes: bigint;
    nays: bigint;
    support: bigint;
};
export type Ilhp45uime5tp = {
    index: number;
    tally: Anonymize<Ifsk7cbmtit1jd>;
};
export type I50aq0q2l1cdkr = {
    index: number;
    hash: Binary;
};
export type WhitelistEvent = Enum<{
    type: "CallWhitelisted";
    value: Anonymize<I8413rb6im3iko>;
} | {
    type: "WhitelistedCallRemoved";
    value: Anonymize<I8413rb6im3iko>;
} | {
    type: "WhitelistedCallDispatched";
    value: Anonymize<I7b8pe56shlide>;
}>;
export declare const WhitelistEvent: GetEnum<WhitelistEvent>;
export type I8413rb6im3iko = {
    call_hash: Binary;
};
export type I7b8pe56shlide = {
    call_hash: Binary;
    result: Anonymize<Idurpak8qagatr>;
};
export type Idurpak8qagatr = ResultPayload<Anonymize<I42817lesmslbu>, Anonymize<I9jhevvtlg11ei>>;
export type I42817lesmslbu = {
    actual_weight: Anonymize<Iasb8k6ash5mjn>;
    pays_fee: DispatchPays;
};
export type Iasb8k6ash5mjn = Anonymize<I4q39t5hn830vp> | undefined;
export type I9jhevvtlg11ei = {
    post_info: Anonymize<I42817lesmslbu>;
    error: DispatchError;
};
export type CommonClaimsEvent = Enum<{
    type: "Claimed";
    value: Anonymize<Idhjiuhlaei3db>;
}>;
export declare const CommonClaimsEvent: GetEnum<CommonClaimsEvent>;
export type Idhjiuhlaei3db = {
    who: SS58String;
    ethereum_address: Binary;
    amount: bigint;
};
export type VestingEvent = Enum<{
    type: "VestingUpdated";
    value: Anonymize<Ievr89968437gm>;
} | {
    type: "VestingCompleted";
    value: Anonymize<Icbccs0ug47ilf>;
}>;
export declare const VestingEvent: GetEnum<VestingEvent>;
export type Ievr89968437gm = {
    account: SS58String;
    unvested: bigint;
};
export type UtilityEvent = Enum<{
    type: "BatchInterrupted";
    value: Anonymize<I6tn8e5lqr339o>;
} | {
    type: "BatchCompleted";
    value: undefined;
} | {
    type: "BatchCompletedWithErrors";
    value: undefined;
} | {
    type: "ItemCompleted";
    value: undefined;
} | {
    type: "ItemFailed";
    value: Anonymize<I11lb9o37qkk4f>;
} | {
    type: "DispatchedAs";
    value: Anonymize<Ie5i8qqljk3tjb>;
}>;
export declare const UtilityEvent: GetEnum<UtilityEvent>;
export type I6tn8e5lqr339o = {
    index: number;
    error: DispatchError;
};
export type I11lb9o37qkk4f = {
    error: DispatchError;
};
export type Ie5i8qqljk3tjb = {
    result: Anonymize<Idtdr91jmq5g4i>;
};
export type IdentityEvent = Enum<{
    type: "IdentitySet";
    value: Anonymize<I4cbvqmqadhrea>;
} | {
    type: "IdentityCleared";
    value: Anonymize<Iep1lmt6q3s6r3>;
} | {
    type: "IdentityKilled";
    value: Anonymize<Iep1lmt6q3s6r3>;
} | {
    type: "JudgementRequested";
    value: Anonymize<I1fac16213rie2>;
} | {
    type: "JudgementUnrequested";
    value: Anonymize<I1fac16213rie2>;
} | {
    type: "JudgementGiven";
    value: Anonymize<Ifjt77oc391o43>;
} | {
    type: "RegistrarAdded";
    value: Anonymize<Itvt1jsipv0lc>;
} | {
    type: "SubIdentityAdded";
    value: Anonymize<Ick3mveut33f44>;
} | {
    type: "SubIdentityRemoved";
    value: Anonymize<Ick3mveut33f44>;
} | {
    type: "SubIdentityRevoked";
    value: Anonymize<Ick3mveut33f44>;
}>;
export declare const IdentityEvent: GetEnum<IdentityEvent>;
export type Iep1lmt6q3s6r3 = {
    who: SS58String;
    deposit: bigint;
};
export type I1fac16213rie2 = {
    who: SS58String;
    registrar_index: number;
};
export type Ifjt77oc391o43 = {
    target: SS58String;
    registrar_index: number;
};
export type Itvt1jsipv0lc = {
    registrar_index: number;
};
export type Ick3mveut33f44 = {
    sub: SS58String;
    main: SS58String;
    deposit: bigint;
};
export type ProxyEvent = Enum<{
    type: "ProxyExecuted";
    value: Anonymize<Ie5i8qqljk3tjb>;
} | {
    type: "PureCreated";
    value: Anonymize<I180p9c978rp4d>;
} | {
    type: "Announced";
    value: Anonymize<Idbjbboh0q507r>;
} | {
    type: "ProxyAdded";
    value: Anonymize<I94ud6o1n6v0n8>;
} | {
    type: "ProxyRemoved";
    value: Anonymize<I94ud6o1n6v0n8>;
}>;
export declare const ProxyEvent: GetEnum<ProxyEvent>;
export type I180p9c978rp4d = {
    pure: SS58String;
    who: SS58String;
    proxy_type: ProxyType;
    disambiguation_index: number;
};
export type ProxyType = Enum<{
    type: "Any";
    value: undefined;
} | {
    type: "NonTransfer";
    value: undefined;
} | {
    type: "Governance";
    value: undefined;
} | {
    type: "Staking";
    value: undefined;
} | {
    type: "IdentityJudgement";
    value: undefined;
} | {
    type: "CancelProxy";
    value: undefined;
} | {
    type: "Auction";
    value: undefined;
} | {
    type: "NominationPools";
    value: undefined;
}>;
export declare const ProxyType: GetEnum<ProxyType>;
export type Idbjbboh0q507r = {
    real: SS58String;
    proxy: SS58String;
    call_hash: Binary;
};
export type I94ud6o1n6v0n8 = {
    delegator: SS58String;
    delegatee: SS58String;
    proxy_type: ProxyType;
    delay: number;
};
export type MultisigEvent = Enum<{
    type: "NewMultisig";
    value: Anonymize<Ibvv58de7m7rsi>;
} | {
    type: "MultisigApproval";
    value: Anonymize<I4uo2dg1jvbdtg>;
} | {
    type: "MultisigExecuted";
    value: Anonymize<Ifbo6gts4g8u33>;
} | {
    type: "MultisigCancelled";
    value: Anonymize<I82jp3a00f0f8k>;
}>;
export declare const MultisigEvent: GetEnum<MultisigEvent>;
export type Ibvv58de7m7rsi = {
    approving: SS58String;
    multisig: SS58String;
    call_hash: Binary;
};
export type I4uo2dg1jvbdtg = {
    approving: SS58String;
    timepoint: Anonymize<Itvprrpb0nm3o>;
    multisig: SS58String;
    call_hash: Binary;
};
export type Itvprrpb0nm3o = {
    height: number;
    index: number;
};
export type Ifbo6gts4g8u33 = {
    approving: SS58String;
    timepoint: Anonymize<Itvprrpb0nm3o>;
    multisig: SS58String;
    call_hash: Binary;
    result: Anonymize<Idtdr91jmq5g4i>;
};
export type I82jp3a00f0f8k = {
    cancelling: SS58String;
    timepoint: Anonymize<Itvprrpb0nm3o>;
    multisig: SS58String;
    call_hash: Binary;
};
export type Iei6k1tdcht3q = AnonymousEnum<{
    "BountyProposed": Anonymize<I666bl2fqjkejo>;
    "BountyRejected": Anonymize<Id9idaj83175f9>;
    "BountyBecameActive": Anonymize<I666bl2fqjkejo>;
    "BountyAwarded": Anonymize<Ie1semicfuv5uu>;
    "BountyClaimed": Anonymize<If25fjs9o37co1>;
    "BountyCanceled": Anonymize<I666bl2fqjkejo>;
    "BountyExtended": Anonymize<I666bl2fqjkejo>;
    "BountyApproved": Anonymize<I666bl2fqjkejo>;
    "CuratorProposed": Anonymize<I70sc1pdo8vtos>;
    "CuratorUnassigned": Anonymize<Ia9p5bg6p18r0i>;
    "CuratorAccepted": Anonymize<I70sc1pdo8vtos>;
}>;
export type Id9idaj83175f9 = {
    index: number;
    bond: bigint;
};
export type Ie1semicfuv5uu = {
    index: number;
    beneficiary: SS58String;
};
export type If25fjs9o37co1 = {
    index: number;
    payout: bigint;
    beneficiary: SS58String;
};
export type I70sc1pdo8vtos = {
    bounty_id: number;
    curator: SS58String;
};
export type Ia9p5bg6p18r0i = {
    bounty_id: number;
};
export type ChildBountiesEvent = Enum<{
    type: "Added";
    value: Anonymize<I60p8l86a8cm59>;
} | {
    type: "Awarded";
    value: Anonymize<I3m3sk2lgcabvp>;
} | {
    type: "Claimed";
    value: Anonymize<I5pf572duh4oeg>;
} | {
    type: "Canceled";
    value: Anonymize<I60p8l86a8cm59>;
}>;
export declare const ChildBountiesEvent: GetEnum<ChildBountiesEvent>;
export type I60p8l86a8cm59 = {
    index: number;
    child_index: number;
};
export type I3m3sk2lgcabvp = {
    index: number;
    child_index: number;
    beneficiary: SS58String;
};
export type I5pf572duh4oeg = {
    index: number;
    child_index: number;
    payout: bigint;
    beneficiary: SS58String;
};
export type ElectionProviderMultiPhaseEvent = Enum<{
    type: "SolutionStored";
    value: Anonymize<I5an5igf3n0vgh>;
} | {
    type: "ElectionFinalized";
    value: Anonymize<I1rd7gkt317ndg>;
} | {
    type: "ElectionFailed";
    value: undefined;
} | {
    type: "Rewarded";
    value: Anonymize<I7j4m7a3pkvsf4>;
} | {
    type: "Slashed";
    value: Anonymize<I7j4m7a3pkvsf4>;
} | {
    type: "PhaseTransitioned";
    value: Anonymize<Icrg5eih8vnokr>;
}>;
export declare const ElectionProviderMultiPhaseEvent: GetEnum<ElectionProviderMultiPhaseEvent>;
export type I5an5igf3n0vgh = {
    compute: ElectionProviderMultiPhaseElectionCompute;
    origin: Anonymize<Ihfphjolmsqq1>;
    prev_ejected: boolean;
};
export type ElectionProviderMultiPhaseElectionCompute = Enum<{
    type: "OnChain";
    value: undefined;
} | {
    type: "Signed";
    value: undefined;
} | {
    type: "Unsigned";
    value: undefined;
} | {
    type: "Fallback";
    value: undefined;
} | {
    type: "Emergency";
    value: undefined;
}>;
export declare const ElectionProviderMultiPhaseElectionCompute: GetEnum<ElectionProviderMultiPhaseElectionCompute>;
export type Ihfphjolmsqq1 = SS58String | undefined;
export type I1rd7gkt317ndg = {
    compute: ElectionProviderMultiPhaseElectionCompute;
    score: Anonymize<I8s6n43okuj2b1>;
};
export type I8s6n43okuj2b1 = {
    minimal_stake: bigint;
    sum_stake: bigint;
    sum_stake_squared: bigint;
};
export type I7j4m7a3pkvsf4 = {
    account: SS58String;
    value: bigint;
};
export type Icrg5eih8vnokr = {
    from: ElectionProviderMultiPhasePhase;
    to: ElectionProviderMultiPhasePhase;
    round: number;
};
export type ElectionProviderMultiPhasePhase = Enum<{
    type: "Off";
    value: undefined;
} | {
    type: "Signed";
    value: undefined;
} | {
    type: "Unsigned";
    value: Anonymize<I38fu9hj3b9un7>;
} | {
    type: "Emergency";
    value: undefined;
}>;
export declare const ElectionProviderMultiPhasePhase: GetEnum<ElectionProviderMultiPhasePhase>;
export type I38fu9hj3b9un7 = [boolean, number];
export type BagsListEvent = Enum<{
    type: "Rebagged";
    value: Anonymize<I37454vatvmm1l>;
} | {
    type: "ScoreUpdated";
    value: Anonymize<Iblau1qa7u7fet>;
}>;
export declare const BagsListEvent: GetEnum<BagsListEvent>;
export type I37454vatvmm1l = {
    who: SS58String;
    from: bigint;
    to: bigint;
};
export type Iblau1qa7u7fet = {
    who: SS58String;
    new_score: bigint;
};
export type Id4j84j1rd7upd = AnonymousEnum<{
    "Created": Anonymize<I1ti389kf8t6oi>;
    "Bonded": Anonymize<If4nnre373amul>;
    "PaidOut": Anonymize<I55kbor0ocqk6h>;
    "Unbonded": Anonymize<Idsj9cg7j96kpc>;
    "Withdrawn": Anonymize<Ido4u9drncfaml>;
    "Destroyed": Anonymize<I931cottvong90>;
    "StateChanged": Anonymize<I2inhcpqb4h0bg>;
    "MemberRemoved": Anonymize<I7vqogd77mmdlm>;
    "RolesUpdated": Anonymize<I6mik29s5073td>;
    "PoolSlashed": Anonymize<I2m0sqmb75cnpb>;
    "UnbondingPoolSlashed": Anonymize<I49agc5b62mehu>;
    "PoolCommissionUpdated": Anonymize<Iatq9jda4hq6pg>;
    "PoolMaxCommissionUpdated": Anonymize<I8cbluptqo8kbp>;
    "PoolCommissionChangeRateUpdated": Anonymize<I81cc4plffa1dm>;
    "PoolCommissionClaimed": Anonymize<I2g87evcjlgmqi>;
    "MinBalanceDeficitAdjusted": Anonymize<Ieg1oc56mamrl5>;
    "MinBalanceExcessAdjusted": Anonymize<Ieg1oc56mamrl5>;
}>;
export type I1ti389kf8t6oi = {
    depositor: SS58String;
    pool_id: number;
};
export type If4nnre373amul = {
    member: SS58String;
    pool_id: number;
    bonded: bigint;
    joined: boolean;
};
export type I55kbor0ocqk6h = {
    member: SS58String;
    pool_id: number;
    payout: bigint;
};
export type Idsj9cg7j96kpc = {
    member: SS58String;
    pool_id: number;
    balance: bigint;
    points: bigint;
    era: number;
};
export type Ido4u9drncfaml = {
    member: SS58String;
    pool_id: number;
    balance: bigint;
    points: bigint;
};
export type I931cottvong90 = {
    pool_id: number;
};
export type I2inhcpqb4h0bg = {
    pool_id: number;
    new_state: NominationPoolsPoolState;
};
export type NominationPoolsPoolState = Enum<{
    type: "Open";
    value: undefined;
} | {
    type: "Blocked";
    value: undefined;
} | {
    type: "Destroying";
    value: undefined;
}>;
export declare const NominationPoolsPoolState: GetEnum<NominationPoolsPoolState>;
export type I7vqogd77mmdlm = {
    pool_id: number;
    member: SS58String;
};
export type I6mik29s5073td = {
    root: Anonymize<Ihfphjolmsqq1>;
    bouncer: Anonymize<Ihfphjolmsqq1>;
    nominator: Anonymize<Ihfphjolmsqq1>;
};
export type I2m0sqmb75cnpb = {
    pool_id: number;
    balance: bigint;
};
export type I49agc5b62mehu = {
    pool_id: number;
    era: number;
    balance: bigint;
};
export type Iatq9jda4hq6pg = {
    pool_id: number;
    current: Anonymize<Ie8iutm7u02lmj>;
};
export type Ie8iutm7u02lmj = Anonymize<I7svnfko10tq2e> | undefined;
export type I7svnfko10tq2e = [number, SS58String];
export type I8cbluptqo8kbp = {
    pool_id: number;
    max_commission: number;
};
export type I81cc4plffa1dm = {
    pool_id: number;
    change_rate: Anonymize<Ibqul338t9c1ll>;
};
export type Ibqul338t9c1ll = {
    max_increase: number;
    min_delay: number;
};
export type I2g87evcjlgmqi = {
    pool_id: number;
    commission: bigint;
};
export type Ieg1oc56mamrl5 = {
    amount: bigint;
    pool_id: number;
};
export type FastUnstakeEvent = Enum<{
    type: "Unstaked";
    value: Anonymize<Iag2vtju06tj0k>;
} | {
    type: "Slashed";
    value: Anonymize<Ifk8eme5o7mukf>;
} | {
    type: "BatchChecked";
    value: Anonymize<Ic0he9tlf9ll0u>;
} | {
    type: "BatchFinished";
    value: Anonymize<I54umskavgc9du>;
} | {
    type: "InternalError";
    value: undefined;
}>;
export declare const FastUnstakeEvent: GetEnum<FastUnstakeEvent>;
export type Iag2vtju06tj0k = {
    stash: SS58String;
    result: Anonymize<Idtdr91jmq5g4i>;
};
export type Ic0he9tlf9ll0u = {
    eras: Anonymize<Icgljjb6j82uhn>;
};
export type Icgljjb6j82uhn = Array<number>;
export type ParachainsInclusionEvent = Enum<{
    type: "CandidateBacked";
    value: Anonymize<Ieno5vn1m65ng2>;
} | {
    type: "CandidateIncluded";
    value: Anonymize<Ieno5vn1m65ng2>;
} | {
    type: "CandidateTimedOut";
    value: Anonymize<Ievbvtucck5gnq>;
} | {
    type: "UpwardMessagesReceived";
    value: Anonymize<Ic8i89mfkmn3n7>;
}>;
export declare const ParachainsInclusionEvent: GetEnum<ParachainsInclusionEvent>;
export type Ieno5vn1m65ng2 = [Anonymize<I4vjld3472quct>, Binary, number, number];
export type I4vjld3472quct = {
    descriptor: Anonymize<Ib2u20s6roco9i>;
    commitments_hash: Binary;
};
export type Ib2u20s6roco9i = {
    para_id: number;
    relay_parent: Binary;
    collator: Binary;
    persisted_validation_data_hash: Binary;
    pov_hash: Binary;
    erasure_root: Binary;
    signature: Binary;
    para_head: Binary;
    validation_code_hash: Binary;
};
export type Ievbvtucck5gnq = [Anonymize<I4vjld3472quct>, Binary, number];
export type Ic8i89mfkmn3n7 = {
    from: number;
    count: number;
};
export type ParachainsParasEvent = Enum<{
    type: "CurrentCodeUpdated";
    value: Anonymize<number>;
} | {
    type: "CurrentHeadUpdated";
    value: Anonymize<number>;
} | {
    type: "CodeUpgradeScheduled";
    value: Anonymize<number>;
} | {
    type: "NewHeadNoted";
    value: Anonymize<number>;
} | {
    type: "ActionQueued";
    value: Anonymize<I5g2vv0ckl2m8b>;
} | {
    type: "PvfCheckStarted";
    value: Anonymize<I64gm4hrq7urum>;
} | {
    type: "PvfCheckAccepted";
    value: Anonymize<I64gm4hrq7urum>;
} | {
    type: "PvfCheckRejected";
    value: Anonymize<I64gm4hrq7urum>;
}>;
export declare const ParachainsParasEvent: GetEnum<ParachainsParasEvent>;
export type I64gm4hrq7urum = [Binary, number];
export type PolkadotRuntimeParachainsHrmpEvent = Enum<{
    type: "OpenChannelRequested";
    value: Anonymize<Id2bej717ckub0>;
} | {
    type: "OpenChannelCanceled";
    value: Anonymize<I545vo2e86o5i4>;
} | {
    type: "OpenChannelAccepted";
    value: Anonymize<I50mrcbubp554e>;
} | {
    type: "ChannelClosed";
    value: Anonymize<I545vo2e86o5i4>;
} | {
    type: "HrmpChannelForceOpened";
    value: Anonymize<Id2bej717ckub0>;
} | {
    type: "HrmpSystemChannelOpened";
    value: Anonymize<Id2bej717ckub0>;
} | {
    type: "OpenChannelDepositsUpdated";
    value: Anonymize<I50mrcbubp554e>;
}>;
export declare const PolkadotRuntimeParachainsHrmpEvent: GetEnum<PolkadotRuntimeParachainsHrmpEvent>;
export type Id2bej717ckub0 = {
    sender: number;
    recipient: number;
    proposed_max_capacity: number;
    proposed_max_message_size: number;
};
export type I545vo2e86o5i4 = {
    by_parachain: number;
    channel_id: Anonymize<I50mrcbubp554e>;
};
export type I50mrcbubp554e = {
    sender: number;
    recipient: number;
};
export type ParachainsDisputesEvent = Enum<{
    type: "DisputeInitiated";
    value: Anonymize<I3o099fcusuh31>;
} | {
    type: "DisputeConcluded";
    value: Anonymize<Ifr2e7vm3bun8k>;
} | {
    type: "Revert";
    value: Anonymize<number>;
}>;
export declare const ParachainsDisputesEvent: GetEnum<ParachainsDisputesEvent>;
export type I3o099fcusuh31 = [Binary, ParachainsDisputesDisputeLocation];
export type ParachainsDisputesDisputeLocation = Enum<{
    type: "Local";
    value: undefined;
} | {
    type: "Remote";
    value: undefined;
}>;
export declare const ParachainsDisputesDisputeLocation: GetEnum<ParachainsDisputesDisputeLocation>;
export type Ifr2e7vm3bun8k = [Binary, ParachainsDisputesDisputeResult];
export type ParachainsDisputesDisputeResult = Enum<{
    type: "Valid";
    value: undefined;
} | {
    type: "Invalid";
    value: undefined;
}>;
export declare const ParachainsDisputesDisputeResult: GetEnum<ParachainsDisputesDisputeResult>;
export type CommonParasRegistrarEvent = Enum<{
    type: "Registered";
    value: Anonymize<Ibs22tt76qp5bi>;
} | {
    type: "Deregistered";
    value: Anonymize<I37r4bdai8o9mp>;
} | {
    type: "Reserved";
    value: Anonymize<Idn2ghub1o4i40>;
} | {
    type: "Swapped";
    value: Anonymize<I48u78djt89dod>;
}>;
export declare const CommonParasRegistrarEvent: GetEnum<CommonParasRegistrarEvent>;
export type Ibs22tt76qp5bi = {
    para_id: number;
    manager: SS58String;
};
export type I37r4bdai8o9mp = {
    para_id: number;
};
export type Idn2ghub1o4i40 = {
    para_id: number;
    who: SS58String;
};
export type I48u78djt89dod = {
    para_id: number;
    other_id: number;
};
export type CommonSlotsEvent = Enum<{
    type: "NewLeasePeriod";
    value: Anonymize<Ib85m5kfbepu2t>;
} | {
    type: "Leased";
    value: Anonymize<Idaml5bdhsfcsl>;
}>;
export declare const CommonSlotsEvent: GetEnum<CommonSlotsEvent>;
export type Ib85m5kfbepu2t = {
    lease_period: number;
};
export type Idaml5bdhsfcsl = {
    para_id: number;
    leaser: SS58String;
    period_begin: number;
    period_count: number;
    extra_reserved: bigint;
    total_amount: bigint;
};
export type CommonAuctionsEvent = Enum<{
    type: "AuctionStarted";
    value: Anonymize<Ieec0cu336gteb>;
} | {
    type: "AuctionClosed";
    value: Anonymize<I815d5k4ij85nv>;
} | {
    type: "Reserved";
    value: Anonymize<Ifi98fgi9o46v7>;
} | {
    type: "Unreserved";
    value: Anonymize<Ic0oj9tok33uap>;
} | {
    type: "ReserveConfiscated";
    value: Anonymize<I3tdutpfjuk32j>;
} | {
    type: "BidAccepted";
    value: Anonymize<I1esdujrkdacpb>;
} | {
    type: "WinningOffset";
    value: Anonymize<I9g1d820jf9m2s>;
}>;
export declare const CommonAuctionsEvent: GetEnum<CommonAuctionsEvent>;
export type Ieec0cu336gteb = {
    auction_index: number;
    lease_period: number;
    ending: number;
};
export type I815d5k4ij85nv = {
    auction_index: number;
};
export type Ifi98fgi9o46v7 = {
    bidder: SS58String;
    extra_reserved: bigint;
    total_amount: bigint;
};
export type Ic0oj9tok33uap = {
    bidder: SS58String;
    amount: bigint;
};
export type I3tdutpfjuk32j = {
    para_id: number;
    leaser: SS58String;
    amount: bigint;
};
export type I1esdujrkdacpb = {
    bidder: SS58String;
    para_id: number;
    amount: bigint;
    first_slot: number;
    last_slot: number;
};
export type I9g1d820jf9m2s = {
    auction_index: number;
    block_number: number;
};
export type CommonCrowdloanEvent = Enum<{
    type: "Created";
    value: Anonymize<I37r4bdai8o9mp>;
} | {
    type: "Contributed";
    value: Anonymize<I8ve4g3egaln6a>;
} | {
    type: "Withdrew";
    value: Anonymize<I8ve4g3egaln6a>;
} | {
    type: "PartiallyRefunded";
    value: Anonymize<I37r4bdai8o9mp>;
} | {
    type: "AllRefunded";
    value: Anonymize<I37r4bdai8o9mp>;
} | {
    type: "Dissolved";
    value: Anonymize<I37r4bdai8o9mp>;
} | {
    type: "HandleBidResult";
    value: Anonymize<If9e3ujpsfl4g7>;
} | {
    type: "Edited";
    value: Anonymize<I37r4bdai8o9mp>;
} | {
    type: "MemoUpdated";
    value: Anonymize<If4hvqaeoqq5us>;
} | {
    type: "AddedToNewRaise";
    value: Anonymize<I37r4bdai8o9mp>;
}>;
export declare const CommonCrowdloanEvent: GetEnum<CommonCrowdloanEvent>;
export type I8ve4g3egaln6a = {
    who: SS58String;
    fund_index: number;
    amount: bigint;
};
export type If9e3ujpsfl4g7 = {
    para_id: number;
    result: Anonymize<Idtdr91jmq5g4i>;
};
export type If4hvqaeoqq5us = {
    who: SS58String;
    para_id: number;
    memo: Binary;
};
export type XcmEvent = Enum<{
    type: "Attempted";
    value: Anonymize<I4e7dkr4hrus3u>;
} | {
    type: "Sent";
    value: Anonymize<Ia5b8kts5gt3p5>;
} | {
    type: "UnexpectedResponse";
    value: Anonymize<Ise9r0vrat2m6>;
} | {
    type: "ResponseReady";
    value: Anonymize<I7kkbgm2llu2o3>;
} | {
    type: "Notified";
    value: Anonymize<I2uqmls7kcdnii>;
} | {
    type: "NotifyOverweight";
    value: Anonymize<Idg69klialbkb8>;
} | {
    type: "NotifyDispatchError";
    value: Anonymize<I2uqmls7kcdnii>;
} | {
    type: "NotifyDecodeFailed";
    value: Anonymize<I2uqmls7kcdnii>;
} | {
    type: "InvalidResponder";
    value: Anonymize<I9j133okge3c2>;
} | {
    type: "InvalidResponderVersion";
    value: Anonymize<Ise9r0vrat2m6>;
} | {
    type: "ResponseTaken";
    value: Anonymize<I30pg328m00nr3>;
} | {
    type: "AssetsTrapped";
    value: Anonymize<I5qm1bvb2j3ap2>;
} | {
    type: "VersionChangeNotified";
    value: Anonymize<I95aqmsd6gjmqs>;
} | {
    type: "SupportedVersionChanged";
    value: Anonymize<I732o5n04n5ohg>;
} | {
    type: "NotifyTargetSendFail";
    value: Anonymize<Iarlf7ddo81fm5>;
} | {
    type: "NotifyTargetMigrationFail";
    value: Anonymize<Ie9bjgclf7vho0>;
} | {
    type: "InvalidQuerierVersion";
    value: Anonymize<Ise9r0vrat2m6>;
} | {
    type: "InvalidQuerier";
    value: Anonymize<I7dm0nb8u3g2hv>;
} | {
    type: "VersionNotifyStarted";
    value: Anonymize<I5pnf8l8c1nkfk>;
} | {
    type: "VersionNotifyRequested";
    value: Anonymize<I5pnf8l8c1nkfk>;
} | {
    type: "VersionNotifyUnrequested";
    value: Anonymize<I5pnf8l8c1nkfk>;
} | {
    type: "FeesPaid";
    value: Anonymize<Ibknqphki4flb3>;
} | {
    type: "AssetsClaimed";
    value: Anonymize<I5qm1bvb2j3ap2>;
}>;
export declare const XcmEvent: GetEnum<XcmEvent>;
export type I4e7dkr4hrus3u = {
    outcome: XcmV3TraitsOutcome;
};
export type XcmV3TraitsOutcome = Enum<{
    type: "Complete";
    value: Anonymize<I4q39t5hn830vp>;
} | {
    type: "Incomplete";
    value: Anonymize<Ilcvm3kc2hvtg>;
} | {
    type: "Error";
    value: Anonymize<XcmV3TraitsError>;
}>;
export declare const XcmV3TraitsOutcome: GetEnum<XcmV3TraitsOutcome>;
export type Ilcvm3kc2hvtg = [Anonymize<I4q39t5hn830vp>, XcmV3TraitsError];
export type XcmV3TraitsError = Enum<{
    type: "Overflow";
    value: undefined;
} | {
    type: "Unimplemented";
    value: undefined;
} | {
    type: "UntrustedReserveLocation";
    value: undefined;
} | {
    type: "UntrustedTeleportLocation";
    value: undefined;
} | {
    type: "LocationFull";
    value: undefined;
} | {
    type: "LocationNotInvertible";
    value: undefined;
} | {
    type: "BadOrigin";
    value: undefined;
} | {
    type: "InvalidLocation";
    value: undefined;
} | {
    type: "AssetNotFound";
    value: undefined;
} | {
    type: "FailedToTransactAsset";
    value: undefined;
} | {
    type: "NotWithdrawable";
    value: undefined;
} | {
    type: "LocationCannotHold";
    value: undefined;
} | {
    type: "ExceedsMaxMessageSize";
    value: undefined;
} | {
    type: "DestinationUnsupported";
    value: undefined;
} | {
    type: "Transport";
    value: undefined;
} | {
    type: "Unroutable";
    value: undefined;
} | {
    type: "UnknownClaim";
    value: undefined;
} | {
    type: "FailedToDecode";
    value: undefined;
} | {
    type: "MaxWeightInvalid";
    value: undefined;
} | {
    type: "NotHoldingFees";
    value: undefined;
} | {
    type: "TooExpensive";
    value: undefined;
} | {
    type: "Trap";
    value: Anonymize<bigint>;
} | {
    type: "ExpectationFalse";
    value: undefined;
} | {
    type: "PalletNotFound";
    value: undefined;
} | {
    type: "NameMismatch";
    value: undefined;
} | {
    type: "VersionIncompatible";
    value: undefined;
} | {
    type: "HoldingWouldOverflow";
    value: undefined;
} | {
    type: "ExportError";
    value: undefined;
} | {
    type: "ReanchorFailed";
    value: undefined;
} | {
    type: "NoDeal";
    value: undefined;
} | {
    type: "FeesNotMet";
    value: undefined;
} | {
    type: "LockError";
    value: undefined;
} | {
    type: "NoPermission";
    value: undefined;
} | {
    type: "Unanchored";
    value: undefined;
} | {
    type: "NotDepositable";
    value: undefined;
} | {
    type: "UnhandledXcmVersion";
    value: undefined;
} | {
    type: "WeightLimitReached";
    value: Anonymize<I4q39t5hn830vp>;
} | {
    type: "Barrier";
    value: undefined;
} | {
    type: "WeightNotComputable";
    value: undefined;
} | {
    type: "ExceedsStackLimit";
    value: undefined;
}>;
export declare const XcmV3TraitsError: GetEnum<XcmV3TraitsError>;
export type Ia5b8kts5gt3p5 = {
    origin: Anonymize<I43cmiele6sevi>;
    destination: Anonymize<I43cmiele6sevi>;
    message: Anonymize<I8l0577387vghn>;
    message_id: Binary;
};
export type I8l0577387vghn = Array<XcmV3Instruction>;
export type XcmV3Instruction = Enum<{
    type: "WithdrawAsset";
    value: Anonymize<Id7mn3j3ge1h6a>;
} | {
    type: "ReserveAssetDeposited";
    value: Anonymize<Id7mn3j3ge1h6a>;
} | {
    type: "ReceiveTeleportedAsset";
    value: Anonymize<Id7mn3j3ge1h6a>;
} | {
    type: "QueryResponse";
    value: Anonymize<I3hin12hf9pma8>;
} | {
    type: "TransferAsset";
    value: Anonymize<Ibseg27e15rt5b>;
} | {
    type: "TransferReserveAsset";
    value: Anonymize<I8nsq83051h7s5>;
} | {
    type: "Transact";
    value: Anonymize<I4sfmje1omkmem>;
} | {
    type: "HrmpNewChannelOpenRequest";
    value: Anonymize<I5uhhrjqfuo4e5>;
} | {
    type: "HrmpChannelAccepted";
    value: Anonymize<Ifij4jam0o7sub>;
} | {
    type: "HrmpChannelClosing";
    value: Anonymize<Ieeb4svd9i8fji>;
} | {
    type: "ClearOrigin";
    value: undefined;
} | {
    type: "DescendOrigin";
    value: Anonymize<XcmV3Junctions>;
} | {
    type: "ReportError";
    value: Anonymize<I40u32g7uv47fo>;
} | {
    type: "DepositAsset";
    value: Anonymize<I92hs9ri8pep98>;
} | {
    type: "DepositReserveAsset";
    value: Anonymize<Ifu4iibn44bata>;
} | {
    type: "ExchangeAsset";
    value: Anonymize<I5v4cm31o1r5t1>;
} | {
    type: "InitiateReserveWithdraw";
    value: Anonymize<Ick8rmedif57q9>;
} | {
    type: "InitiateTeleport";
    value: Anonymize<Ifu4iibn44bata>;
} | {
    type: "ReportHolding";
    value: Anonymize<Icvkurqgno3h7q>;
} | {
    type: "BuyExecution";
    value: Anonymize<I8nq35nm53n6bc>;
} | {
    type: "RefundSurplus";
    value: undefined;
} | {
    type: "SetErrorHandler";
    value: Anonymize<I8l0577387vghn>;
} | {
    type: "SetAppendix";
    value: Anonymize<I8l0577387vghn>;
} | {
    type: "ClearError";
    value: undefined;
} | {
    type: "ClaimAsset";
    value: Anonymize<I8uojukg6cvq81>;
} | {
    type: "Trap";
    value: Anonymize<bigint>;
} | {
    type: "SubscribeVersion";
    value: Anonymize<Ieprdqqu7ildvr>;
} | {
    type: "UnsubscribeVersion";
    value: undefined;
} | {
    type: "BurnAsset";
    value: Anonymize<Id7mn3j3ge1h6a>;
} | {
    type: "ExpectAsset";
    value: Anonymize<Id7mn3j3ge1h6a>;
} | {
    type: "ExpectOrigin";
    value: Anonymize<I74hapqfd00s9i>;
} | {
    type: "ExpectError";
    value: Anonymize<I8j770n2arfq59>;
} | {
    type: "ExpectTransactStatus";
    value: Anonymize<XcmV3MaybeErrorCode>;
} | {
    type: "QueryPallet";
    value: Anonymize<Ie3fdn0i40ahq2>;
} | {
    type: "ExpectPallet";
    value: Anonymize<Id7mf37dkpgfjs>;
} | {
    type: "ReportTransactStatus";
    value: Anonymize<I40u32g7uv47fo>;
} | {
    type: "ClearTransactStatus";
    value: undefined;
} | {
    type: "UniversalOrigin";
    value: Anonymize<XcmV3Junction>;
} | {
    type: "ExportMessage";
    value: Anonymize<I7uretqff9fvu>;
} | {
    type: "LockAsset";
    value: Anonymize<I5e83tpl0q5jq0>;
} | {
    type: "UnlockAsset";
    value: Anonymize<Iffpr1249pemri>;
} | {
    type: "NoteUnlockable";
    value: Anonymize<I5jls3ar3odglq>;
} | {
    type: "RequestUnlock";
    value: Anonymize<I7cfckcbgdvb8j>;
} | {
    type: "SetFeesMode";
    value: Anonymize<I4nae9rsql8fa7>;
} | {
    type: "SetTopic";
    value: Anonymize<Binary>;
} | {
    type: "ClearTopic";
    value: undefined;
} | {
    type: "AliasOrigin";
    value: Anonymize<I43cmiele6sevi>;
} | {
    type: "UnpaidExecution";
    value: Anonymize<Ifq797dv2t3djd>;
}>;
export declare const XcmV3Instruction: GetEnum<XcmV3Instruction>;
export type Id7mn3j3ge1h6a = Array<Anonymize<I9epi5ni2mqt8s>>;
export type I9epi5ni2mqt8s = {
    id: XcmV3MultiassetAssetId;
    fun: XcmV3MultiassetFungibility;
};
export type XcmV3MultiassetFungibility = Enum<{
    type: "Fungible";
    value: Anonymize<bigint>;
} | {
    type: "NonFungible";
    value: Anonymize<XcmV3MultiassetAssetInstance>;
}>;
export declare const XcmV3MultiassetFungibility: GetEnum<XcmV3MultiassetFungibility>;
export type XcmV3MultiassetAssetInstance = Enum<{
    type: "Undefined";
    value: undefined;
} | {
    type: "Index";
    value: Anonymize<bigint>;
} | {
    type: "Array4";
    value: Anonymize<Binary>;
} | {
    type: "Array8";
    value: Anonymize<Binary>;
} | {
    type: "Array16";
    value: Anonymize<Binary>;
} | {
    type: "Array32";
    value: Anonymize<Binary>;
}>;
export declare const XcmV3MultiassetAssetInstance: GetEnum<XcmV3MultiassetAssetInstance>;
export type I3hin12hf9pma8 = {
    query_id: bigint;
    response: XcmV3Response;
    max_weight: Anonymize<I4q39t5hn830vp>;
    querier: Anonymize<I74hapqfd00s9i>;
};
export type XcmV3Response = Enum<{
    type: "Null";
    value: undefined;
} | {
    type: "Assets";
    value: Anonymize<Id7mn3j3ge1h6a>;
} | {
    type: "ExecutionResult";
    value: Anonymize<I8j770n2arfq59>;
} | {
    type: "Version";
    value: Anonymize<number>;
} | {
    type: "PalletsInfo";
    value: Anonymize<I599u7h20b52at>;
} | {
    type: "DispatchResult";
    value: Anonymize<XcmV3MaybeErrorCode>;
}>;
export declare const XcmV3Response: GetEnum<XcmV3Response>;
export type I8j770n2arfq59 = Anonymize<Ibgcthk0mc326i> | undefined;
export type Ibgcthk0mc326i = [number, XcmV3TraitsError];
export type I599u7h20b52at = Array<Anonymize<Ift5r9b1bvoh16>>;
export type Ift5r9b1bvoh16 = {
    index: number;
    name: Binary;
    module_name: Binary;
    major: number;
    minor: number;
    patch: number;
};
export type XcmV3MaybeErrorCode = Enum<{
    type: "Success";
    value: undefined;
} | {
    type: "Error";
    value: Anonymize<Binary>;
} | {
    type: "TruncatedError";
    value: Anonymize<Binary>;
}>;
export declare const XcmV3MaybeErrorCode: GetEnum<XcmV3MaybeErrorCode>;
export type I74hapqfd00s9i = Anonymize<I43cmiele6sevi> | undefined;
export type Ibseg27e15rt5b = {
    assets: Anonymize<Id7mn3j3ge1h6a>;
    beneficiary: Anonymize<I43cmiele6sevi>;
};
export type I8nsq83051h7s5 = {
    assets: Anonymize<Id7mn3j3ge1h6a>;
    dest: Anonymize<I43cmiele6sevi>;
    xcm: Anonymize<I8l0577387vghn>;
};
export type I4sfmje1omkmem = {
    origin_kind: XcmV2OriginKind;
    require_weight_at_most: Anonymize<I4q39t5hn830vp>;
    call: Binary;
};
export type XcmV2OriginKind = Enum<{
    type: "Native";
    value: undefined;
} | {
    type: "SovereignAccount";
    value: undefined;
} | {
    type: "Superuser";
    value: undefined;
} | {
    type: "Xcm";
    value: undefined;
}>;
export declare const XcmV2OriginKind: GetEnum<XcmV2OriginKind>;
export type I5uhhrjqfuo4e5 = {
    sender: number;
    max_message_size: number;
    max_capacity: number;
};
export type Ifij4jam0o7sub = {
    recipient: number;
};
export type Ieeb4svd9i8fji = {
    initiator: number;
    sender: number;
    recipient: number;
};
export type I40u32g7uv47fo = {
    destination: Anonymize<I43cmiele6sevi>;
    query_id: bigint;
    max_weight: Anonymize<I4q39t5hn830vp>;
};
export type I92hs9ri8pep98 = {
    assets: XcmV3MultiAssetFilter;
    beneficiary: Anonymize<I43cmiele6sevi>;
};
export type XcmV3MultiAssetFilter = Enum<{
    type: "Definite";
    value: Anonymize<Id7mn3j3ge1h6a>;
} | {
    type: "Wild";
    value: Anonymize<XcmV3WildMultiAsset>;
}>;
export declare const XcmV3MultiAssetFilter: GetEnum<XcmV3MultiAssetFilter>;
export type XcmV3WildMultiAsset = Enum<{
    type: "All";
    value: undefined;
} | {
    type: "AllOf";
    value: Anonymize<Ikhntpa3k1bng>;
} | {
    type: "AllCounted";
    value: Anonymize<number>;
} | {
    type: "AllOfCounted";
    value: Anonymize<I8ef6ldr28dcsm>;
}>;
export declare const XcmV3WildMultiAsset: GetEnum<XcmV3WildMultiAsset>;
export type Ikhntpa3k1bng = {
    id: XcmV3MultiassetAssetId;
    fun: XcmV2MultiassetWildFungibility;
};
export type XcmV2MultiassetWildFungibility = Enum<{
    type: "Fungible";
    value: undefined;
} | {
    type: "NonFungible";
    value: undefined;
}>;
export declare const XcmV2MultiassetWildFungibility: GetEnum<XcmV2MultiassetWildFungibility>;
export type I8ef6ldr28dcsm = {
    id: XcmV3MultiassetAssetId;
    fun: XcmV2MultiassetWildFungibility;
    count: number;
};
export type Ifu4iibn44bata = {
    assets: XcmV3MultiAssetFilter;
    dest: Anonymize<I43cmiele6sevi>;
    xcm: Anonymize<I8l0577387vghn>;
};
export type I5v4cm31o1r5t1 = {
    give: XcmV3MultiAssetFilter;
    want: Anonymize<Id7mn3j3ge1h6a>;
    maximal: boolean;
};
export type Ick8rmedif57q9 = {
    assets: XcmV3MultiAssetFilter;
    reserve: Anonymize<I43cmiele6sevi>;
    xcm: Anonymize<I8l0577387vghn>;
};
export type Icvkurqgno3h7q = {
    response_info: Anonymize<I40u32g7uv47fo>;
    assets: XcmV3MultiAssetFilter;
};
export type I8nq35nm53n6bc = {
    fees: Anonymize<I9epi5ni2mqt8s>;
    weight_limit: XcmV3WeightLimit;
};
export type XcmV3WeightLimit = Enum<{
    type: "Unlimited";
    value: undefined;
} | {
    type: "Limited";
    value: Anonymize<I4q39t5hn830vp>;
}>;
export declare const XcmV3WeightLimit: GetEnum<XcmV3WeightLimit>;
export type I8uojukg6cvq81 = {
    assets: Anonymize<Id7mn3j3ge1h6a>;
    ticket: Anonymize<I43cmiele6sevi>;
};
export type Ieprdqqu7ildvr = {
    query_id: bigint;
    max_response_weight: Anonymize<I4q39t5hn830vp>;
};
export type Ie3fdn0i40ahq2 = {
    module_name: Binary;
    response_info: Anonymize<I40u32g7uv47fo>;
};
export type Id7mf37dkpgfjs = {
    index: number;
    name: Binary;
    module_name: Binary;
    crate_major: number;
    min_crate_minor: number;
};
export type I7uretqff9fvu = {
    network: XcmV3JunctionNetworkId;
    destination: XcmV3Junctions;
    xcm: Anonymize<I8l0577387vghn>;
};
export type I5e83tpl0q5jq0 = {
    asset: Anonymize<I9epi5ni2mqt8s>;
    unlocker: Anonymize<I43cmiele6sevi>;
};
export type Iffpr1249pemri = {
    asset: Anonymize<I9epi5ni2mqt8s>;
    target: Anonymize<I43cmiele6sevi>;
};
export type I5jls3ar3odglq = {
    asset: Anonymize<I9epi5ni2mqt8s>;
    owner: Anonymize<I43cmiele6sevi>;
};
export type I7cfckcbgdvb8j = {
    asset: Anonymize<I9epi5ni2mqt8s>;
    locker: Anonymize<I43cmiele6sevi>;
};
export type I4nae9rsql8fa7 = {
    jit_withdraw: boolean;
};
export type Ifq797dv2t3djd = {
    weight_limit: XcmV3WeightLimit;
    check_origin: Anonymize<I74hapqfd00s9i>;
};
export type Ise9r0vrat2m6 = {
    origin: Anonymize<I43cmiele6sevi>;
    query_id: bigint;
};
export type I7kkbgm2llu2o3 = {
    query_id: bigint;
    response: XcmV3Response;
};
export type I2uqmls7kcdnii = {
    query_id: bigint;
    pallet_index: number;
    call_index: number;
};
export type Idg69klialbkb8 = {
    query_id: bigint;
    pallet_index: number;
    call_index: number;
    actual_weight: Anonymize<I4q39t5hn830vp>;
    max_budgeted_weight: Anonymize<I4q39t5hn830vp>;
};
export type I9j133okge3c2 = {
    origin: Anonymize<I43cmiele6sevi>;
    query_id: bigint;
    expected_location: Anonymize<I74hapqfd00s9i>;
};
export type I30pg328m00nr3 = {
    query_id: bigint;
};
export type I5qm1bvb2j3ap2 = {
    hash: Binary;
    origin: Anonymize<I43cmiele6sevi>;
    assets: XcmVersionedMultiAssets;
};
export type XcmVersionedMultiAssets = Enum<{
    type: "V2";
    value: Anonymize<Ia3ggl9eghkufh>;
} | {
    type: "V3";
    value: Anonymize<Id7mn3j3ge1h6a>;
}>;
export declare const XcmVersionedMultiAssets: GetEnum<XcmVersionedMultiAssets>;
export type Ia3ggl9eghkufh = Array<Anonymize<I16mc4mv5bb0qd>>;
export type I16mc4mv5bb0qd = {
    id: XcmV2MultiassetAssetId;
    fun: XcmV2MultiassetFungibility;
};
export type XcmV2MultiassetAssetId = Enum<{
    type: "Concrete";
    value: Anonymize<Ibki0d249v3ojt>;
} | {
    type: "Abstract";
    value: Anonymize<Binary>;
}>;
export declare const XcmV2MultiassetAssetId: GetEnum<XcmV2MultiassetAssetId>;
export type XcmV2MultiassetFungibility = Enum<{
    type: "Fungible";
    value: Anonymize<bigint>;
} | {
    type: "NonFungible";
    value: Anonymize<XcmV2MultiassetAssetInstance>;
}>;
export declare const XcmV2MultiassetFungibility: GetEnum<XcmV2MultiassetFungibility>;
export type XcmV2MultiassetAssetInstance = Enum<{
    type: "Undefined";
    value: undefined;
} | {
    type: "Index";
    value: Anonymize<bigint>;
} | {
    type: "Array4";
    value: Anonymize<Binary>;
} | {
    type: "Array8";
    value: Anonymize<Binary>;
} | {
    type: "Array16";
    value: Anonymize<Binary>;
} | {
    type: "Array32";
    value: Anonymize<Binary>;
} | {
    type: "Blob";
    value: Anonymize<Binary>;
}>;
export declare const XcmV2MultiassetAssetInstance: GetEnum<XcmV2MultiassetAssetInstance>;
export type I95aqmsd6gjmqs = {
    destination: Anonymize<I43cmiele6sevi>;
    result: number;
    cost: Anonymize<Id7mn3j3ge1h6a>;
    message_id: Binary;
};
export type I732o5n04n5ohg = {
    location: Anonymize<I43cmiele6sevi>;
    version: number;
};
export type Iarlf7ddo81fm5 = {
    location: Anonymize<I43cmiele6sevi>;
    query_id: bigint;
    error: XcmV3TraitsError;
};
export type Ie9bjgclf7vho0 = {
    location: XcmVersionedMultiLocation;
    query_id: bigint;
};
export type I7dm0nb8u3g2hv = {
    origin: Anonymize<I43cmiele6sevi>;
    query_id: bigint;
    expected_querier: Anonymize<I43cmiele6sevi>;
    maybe_actual_querier: Anonymize<I74hapqfd00s9i>;
};
export type I5pnf8l8c1nkfk = {
    destination: Anonymize<I43cmiele6sevi>;
    cost: Anonymize<Id7mn3j3ge1h6a>;
    message_id: Binary;
};
export type Ibknqphki4flb3 = {
    paying: Anonymize<I43cmiele6sevi>;
    fees: Anonymize<Id7mn3j3ge1h6a>;
};
export type MessageQueueEvent = Enum<{
    type: "ProcessingFailed";
    value: Anonymize<I6ian27okrbc15>;
} | {
    type: "Processed";
    value: Anonymize<I74b8cu68dfbfr>;
} | {
    type: "OverweightEnqueued";
    value: Anonymize<Iacc6dee8ffsrh>;
} | {
    type: "PageReaped";
    value: Anonymize<Ielsom2b1kkdm6>;
}>;
export declare const MessageQueueEvent: GetEnum<MessageQueueEvent>;
export type I6ian27okrbc15 = {
    id: Binary;
    origin: ParachainsInclusionAggregateMessageOrigin;
    error: ProcessMessageError;
};
export type ParachainsInclusionAggregateMessageOrigin = Enum<{
    type: "Ump";
    value: Anonymize<ParachainsInclusionUmpQueueId>;
}>;
export declare const ParachainsInclusionAggregateMessageOrigin: GetEnum<ParachainsInclusionAggregateMessageOrigin>;
export type ParachainsInclusionUmpQueueId = Enum<{
    type: "Para";
    value: Anonymize<number>;
}>;
export declare const ParachainsInclusionUmpQueueId: GetEnum<ParachainsInclusionUmpQueueId>;
export type ProcessMessageError = Enum<{
    type: "BadFormat";
    value: undefined;
} | {
    type: "Corrupt";
    value: undefined;
} | {
    type: "Unsupported";
    value: undefined;
} | {
    type: "Overweight";
    value: Anonymize<I4q39t5hn830vp>;
} | {
    type: "Yield";
    value: undefined;
}>;
export declare const ProcessMessageError: GetEnum<ProcessMessageError>;
export type I74b8cu68dfbfr = {
    id: Binary;
    origin: ParachainsInclusionAggregateMessageOrigin;
    weight_used: Anonymize<I4q39t5hn830vp>;
    success: boolean;
};
export type Iacc6dee8ffsrh = {
    id: Binary;
    origin: ParachainsInclusionAggregateMessageOrigin;
    page_index: number;
    message_index: number;
};
export type Ielsom2b1kkdm6 = {
    origin: ParachainsInclusionAggregateMessageOrigin;
    index: number;
};
export type I1vmo9hpn12j0l = AnonymousEnum<{
    "AssetRateCreated": Anonymize<I16soggnee6qrb>;
    "AssetRateRemoved": Anonymize<Ifvnf1s3g2lg8u>;
    "AssetRateUpdated": Anonymize<Iedcb9b2srjfp0>;
}>;
export type I16soggnee6qrb = {
    asset_kind: Anonymize<I32r9skkupsthv>;
    rate: bigint;
};
export type Ifvnf1s3g2lg8u = {
    asset_kind: Anonymize<I32r9skkupsthv>;
};
export type Iedcb9b2srjfp0 = {
    asset_kind: Anonymize<I32r9skkupsthv>;
    old: bigint;
    new: bigint;
};
export type Idhnf6rtqoslea = Array<Binary>;
export type Iep4uo61810hfs = Array<Anonymize<I5g2vv0ckl2m8b>>;
export type Ieniouoqkq4icf = {
    spec_version: number;
    spec_name: string;
};
export type Iddofueil04dld = Array<Anonymize<I1n29q4mt87e84>>;
export type I1n29q4mt87e84 = Anonymize<I7p2g4213d2vvu> | undefined;
export type I7p2g4213d2vvu = {
    maybe_id: Anonymize<I17k3ujudqd5df>;
    priority: number;
    call: PreimagesBounded;
    maybe_periodic: Anonymize<I34gtdjipdmjpt>;
    origin: PolkadotRuntimeOriginCaller;
};
export type I34gtdjipdmjpt = Anonymize<I5g2vv0ckl2m8b> | undefined;
export type PolkadotRuntimeOriginCaller = Enum<{
    type: "system";
    value: Anonymize<DispatchRawOrigin>;
} | {
    type: "Origins";
    value: Anonymize<GovernanceOrigin>;
} | {
    type: "ParachainsOrigin";
    value: Anonymize<ParachainsOrigin>;
} | {
    type: "XcmPallet";
    value: Anonymize<XcmPalletOrigin>;
} | {
    type: "Void";
    value: Anonymize<undefined>;
}>;
export declare const PolkadotRuntimeOriginCaller: GetEnum<PolkadotRuntimeOriginCaller>;
export type DispatchRawOrigin = Enum<{
    type: "Root";
    value: undefined;
} | {
    type: "Signed";
    value: Anonymize<SS58String>;
} | {
    type: "None";
    value: undefined;
}>;
export declare const DispatchRawOrigin: GetEnum<DispatchRawOrigin>;
export type GovernanceOrigin = Enum<{
    type: "StakingAdmin";
    value: undefined;
} | {
    type: "Treasurer";
    value: undefined;
} | {
    type: "FellowshipAdmin";
    value: undefined;
} | {
    type: "GeneralAdmin";
    value: undefined;
} | {
    type: "AuctionAdmin";
    value: undefined;
} | {
    type: "LeaseAdmin";
    value: undefined;
} | {
    type: "ReferendumCanceller";
    value: undefined;
} | {
    type: "ReferendumKiller";
    value: undefined;
} | {
    type: "SmallTipper";
    value: undefined;
} | {
    type: "BigTipper";
    value: undefined;
} | {
    type: "SmallSpender";
    value: undefined;
} | {
    type: "MediumSpender";
    value: undefined;
} | {
    type: "BigSpender";
    value: undefined;
} | {
    type: "WhitelistedCaller";
    value: undefined;
}>;
export declare const GovernanceOrigin: GetEnum<GovernanceOrigin>;
export type ParachainsOrigin = Enum<{
    type: "Parachain";
    value: Anonymize<number>;
}>;
export declare const ParachainsOrigin: GetEnum<ParachainsOrigin>;
export type XcmPalletOrigin = Enum<{
    type: "Xcm";
    value: Anonymize<I43cmiele6sevi>;
} | {
    type: "Response";
    value: Anonymize<I43cmiele6sevi>;
}>;
export declare const XcmPalletOrigin: GetEnum<XcmPalletOrigin>;
export type PreimageRequestStatus = Enum<{
    type: "Unrequested";
    value: Anonymize<I5jej6bvdjrisr>;
} | {
    type: "Requested";
    value: Anonymize<Is7sg1rr9u2nm>;
}>;
export declare const PreimageRequestStatus: GetEnum<PreimageRequestStatus>;
export type I5jej6bvdjrisr = {
    deposit: Anonymize<I95l2k9b1re95f>;
    len: number;
};
export type I95l2k9b1re95f = [SS58String, bigint];
export type Is7sg1rr9u2nm = {
    deposit: Anonymize<I92hdo1clkbp4g>;
    count: number;
    len: Anonymize<I4arjljr6dpflb>;
};
export type I92hdo1clkbp4g = Anonymize<I95l2k9b1re95f> | undefined;
export type I4arjljr6dpflb = number | undefined;
export type PreimageRequestStatus1 = Enum<{
    type: "Unrequested";
    value: Anonymize<Idvcv8961o32th>;
} | {
    type: "Requested";
    value: Anonymize<In82i9avte5re>;
}>;
export declare const PreimageRequestStatus1: GetEnum<PreimageRequestStatus1>;
export type Idvcv8961o32th = {
    ticket: Anonymize<I95l2k9b1re95f>;
    len: number;
};
export type In82i9avte5re = {
    maybe_ticket: Anonymize<I92hdo1clkbp4g>;
    count: number;
    maybe_len: Anonymize<I4arjljr6dpflb>;
};
export type BabeDigestsNextConfigDescriptor = Enum<{
    type: "V1";
    value: Anonymize<Idkva8q2m9meg0>;
}>;
export declare const BabeDigestsNextConfigDescriptor: GetEnum<BabeDigestsNextConfigDescriptor>;
export type Idkva8q2m9meg0 = {
    c: Anonymize<I2j729bmgsdiuo>;
    allowed_slots: BabeAllowedSlots;
};
export type I2j729bmgsdiuo = [bigint, bigint];
export type BabeAllowedSlots = Enum<{
    type: "PrimarySlots";
    value: undefined;
} | {
    type: "PrimaryAndSecondaryPlainSlots";
    value: undefined;
} | {
    type: "PrimaryAndSecondaryVRFSlots";
    value: undefined;
}>;
export declare const BabeAllowedSlots: GetEnum<BabeAllowedSlots>;
export type I5o0h2ngv65fpq = BabeDigestsPreDigest | undefined;
export type BabeDigestsPreDigest = Enum<{
    type: "Primary";
    value: Anonymize<I7u2rr2qf89ek5>;
} | {
    type: "SecondaryPlain";
    value: Anonymize<Ieiaevc5q41ard>;
} | {
    type: "SecondaryVRF";
    value: Anonymize<I7u2rr2qf89ek5>;
}>;
export declare const BabeDigestsPreDigest: GetEnum<BabeDigestsPreDigest>;
export type I7u2rr2qf89ek5 = {
    authority_index: number;
    slot: bigint;
    vrf_signature: Anonymize<Iam4jhuje8i9kk>;
};
export type Iam4jhuje8i9kk = {
    output: Binary;
    proof: Binary;
};
export type Ieiaevc5q41ard = {
    authority_index: number;
    slot: bigint;
};
export type Ifip05kcrl65am = Array<Anonymize<I6cs1itejju2vv>>;
export type I6cs1itejju2vv = [bigint, number];
export type Iff9heri56m1mb = [SS58String, bigint, boolean];
export type Ibtifm27unhnjf = Array<Anonymize<I5b29v4qfq4tu7>>;
export type I5b29v4qfq4tu7 = {
    id: Binary;
    amount: bigint;
    reasons: BalancesTypesReasons;
};
export type BalancesTypesReasons = Enum<{
    type: "Fee";
    value: undefined;
} | {
    type: "Misc";
    value: undefined;
} | {
    type: "All";
    value: undefined;
}>;
export declare const BalancesTypesReasons: GetEnum<BalancesTypesReasons>;
export type Iactubn52acokl = Array<Anonymize<I32btm6htd9bck>>;
export type I32btm6htd9bck = {
    id: Binary;
    amount: bigint;
};
export type I233put12fltor = Array<Anonymize<I2g6pdv83dq8hk>>;
export type I2g6pdv83dq8hk = {
    id: WestendRuntimeRuntimeHoldReason;
    amount: bigint;
};
export type WestendRuntimeRuntimeHoldReason = Enum<{
    type: "Preimage";
    value: Anonymize<PreimagePalletHoldReason>;
}>;
export declare const WestendRuntimeRuntimeHoldReason: GetEnum<WestendRuntimeRuntimeHoldReason>;
export type PreimagePalletHoldReason = Enum<{
    type: "Preimage";
    value: undefined;
}>;
export declare const PreimagePalletHoldReason: GetEnum<PreimagePalletHoldReason>;
export type Icqu54ik1fbovu = Array<Anonymize<I6nlcdgcjnohed>>;
export type I6nlcdgcjnohed = {
    id: WestendRuntimeRuntimeFreezeReason;
    amount: bigint;
};
export type WestendRuntimeRuntimeFreezeReason = Enum<{
    type: "NominationPools";
    value: Anonymize<NominationPoolsPalletFreezeReason>;
}>;
export declare const WestendRuntimeRuntimeFreezeReason: GetEnum<WestendRuntimeRuntimeFreezeReason>;
export type NominationPoolsPalletFreezeReason = Enum<{
    type: "PoolMinBalance";
    value: undefined;
}>;
export declare const NominationPoolsPalletFreezeReason: GetEnum<NominationPoolsPalletFreezeReason>;
export type TransactionPaymentReleases = Enum<{
    type: "V1Ancient";
    value: undefined;
} | {
    type: "V2";
    value: undefined;
}>;
export declare const TransactionPaymentReleases: GetEnum<TransactionPaymentReleases>;
export type Ia2lhg7l2hilo3 = Array<SS58String>;
export type I21nedsp35hoih = {
    stash: SS58String;
    total: bigint;
    active: bigint;
    unlocking: Anonymize<I9nc4v1upo2c8e>;
    claimed_rewards: Anonymize<Icgljjb6j82uhn>;
};
export type I9nc4v1upo2c8e = Array<Anonymize<I3niuuk38q4krr>>;
export type I3niuuk38q4krr = {
    value: bigint;
    era: number;
};
export type Ic3m9d6tdl6gi2 = {
    targets: Anonymize<Ia2lhg7l2hilo3>;
    submitted_in: number;
    suppressed: boolean;
};
export type Ib3j7gb0jgs38u = {
    index: number;
    start: Anonymize<I35p85j063s0il>;
};
export type I35p85j063s0il = bigint | undefined;
export type Iff9p3c7k6pfoi = {
    total: number;
    individual: Anonymize<I205qrookusi3d>;
};
export type I205qrookusi3d = Array<Anonymize<I6ouflveob4eli>>;
export type I6ouflveob4eli = [SS58String, number];
export type Iafq6t4rgheait = Array<Anonymize<Ifedledo2fog34>>;
export type Ifedledo2fog34 = {
    validator: SS58String;
    own: bigint;
    others: Anonymize<Iba9inugg1atvo>;
    reporters: Anonymize<Ia2lhg7l2hilo3>;
    payout: bigint;
};
export type Iba9inugg1atvo = Array<Anonymize<I95l2k9b1re95f>>;
export type I4ojmnsk1dchql = [number, bigint];
export type Iinkhfdlka9ch = {
    span_index: number;
    last_start: number;
    last_nonzero_slash: number;
    prior: Anonymize<Icgljjb6j82uhn>;
};
export type I2kj4j6mp68hf8 = {
    slashed: bigint;
    paid_out: bigint;
};
export type Ia9ek8s49lerat = Array<Anonymize<I39p6ln31i4n46>>;
export type I39p6ln31i4n46 = [number, boolean];
export type I2bqvqrg0sbrdj = {
    offender: Anonymize<Idi27pva6ajg4>;
    reporters: Anonymize<Ia2lhg7l2hilo3>;
};
export type Iasase33a12046 = [Binary, Binary];
export type I6gic9mme18mpd = Array<Anonymize<Idp8pf1r5mria2>>;
export type Idp8pf1r5mria2 = [SS58String, Anonymize<I4g61cdhi06s1m>];
export type I4g61cdhi06s1m = {
    grandpa: Binary;
    babe: Binary;
    im_online: Binary;
    para_validator: Binary;
    para_assignment: Binary;
    authority_discovery: Binary;
    beefy: Binary;
};
export type GrandpaStoredState = Enum<{
    type: "Live";
    value: undefined;
} | {
    type: "PendingPause";
    value: Anonymize<Ib95oqfalvjqfe>;
} | {
    type: "Paused";
    value: undefined;
} | {
    type: "PendingResume";
    value: Anonymize<Ib95oqfalvjqfe>;
}>;
export declare const GrandpaStoredState: GetEnum<GrandpaStoredState>;
export type Ib95oqfalvjqfe = {
    scheduled_at: number;
    delay: number;
};
export type Ibu50q5vhsfq5e = {
    scheduled_at: number;
    delay: number;
    next_authorities: Anonymize<I2qinct8jq4bqe>;
    forced: Anonymize<I4arjljr6dpflb>;
};
export type Iegmj7n48sc3am = {
    proposer: SS58String;
    value: bigint;
    beneficiary: SS58String;
    bond: bigint;
};
export type Ie05qfg5feue1l = {
    asset_kind: Anonymize<I32r9skkupsthv>;
    amount: bigint;
    beneficiary: XcmVersionedMultiLocation;
    valid_from: number;
    expire_at: number;
    status: TreasuryPaymentState;
};
export type TreasuryPaymentState = Enum<{
    type: "Pending";
    value: undefined;
} | {
    type: "Attempted";
    value: Anonymize<I4ov6e94l79mbg>;
} | {
    type: "Failed";
    value: undefined;
}>;
export declare const TreasuryPaymentState: GetEnum<TreasuryPaymentState>;
export type I4ov6e94l79mbg = {
    id: bigint;
};
export type ConvictionVotingVoteVoting = Enum<{
    type: "Casting";
    value: Anonymize<If52hjr5c5nrc5>;
} | {
    type: "Delegating";
    value: Anonymize<I77dj6ku8n5d58>;
}>;
export declare const ConvictionVotingVoteVoting: GetEnum<ConvictionVotingVoteVoting>;
export type If52hjr5c5nrc5 = {
    votes: Anonymize<I42jj1su7asrm9>;
    delegations: Anonymize<I538qha8r4j3ii>;
    prior: Anonymize<I4ojmnsk1dchql>;
};
export type I42jj1su7asrm9 = Array<Anonymize<I7mk5ivue8lr2m>>;
export type I7mk5ivue8lr2m = [number, ConvictionVotingVoteAccountVote];
export type ConvictionVotingVoteAccountVote = Enum<{
    type: "Standard";
    value: Anonymize<Ib024p97ls1cla>;
} | {
    type: "Split";
    value: Anonymize<I5pi71t9bosoiv>;
} | {
    type: "SplitAbstain";
    value: Anonymize<I89irppcaqmf1i>;
}>;
export declare const ConvictionVotingVoteAccountVote: GetEnum<ConvictionVotingVoteAccountVote>;
export type Ib024p97ls1cla = {
    vote: number;
    balance: bigint;
};
export type I5pi71t9bosoiv = {
    aye: bigint;
    nay: bigint;
};
export type I89irppcaqmf1i = {
    aye: bigint;
    nay: bigint;
    abstain: bigint;
};
export type I538qha8r4j3ii = {
    votes: bigint;
    capital: bigint;
};
export type I77dj6ku8n5d58 = {
    balance: bigint;
    target: SS58String;
    conviction: VotingConviction;
    delegations: Anonymize<I538qha8r4j3ii>;
    prior: Anonymize<I4ojmnsk1dchql>;
};
export type VotingConviction = Enum<{
    type: "None";
    value: undefined;
} | {
    type: "Locked1x";
    value: undefined;
} | {
    type: "Locked2x";
    value: undefined;
} | {
    type: "Locked3x";
    value: undefined;
} | {
    type: "Locked4x";
    value: undefined;
} | {
    type: "Locked5x";
    value: undefined;
} | {
    type: "Locked6x";
    value: undefined;
}>;
export declare const VotingConviction: GetEnum<VotingConviction>;
export type If9jidduiuq7vv = Array<Anonymize<I4ojmnsk1dchql>>;
export type ReferendaTypesReferendumInfo = Enum<{
    type: "Ongoing";
    value: Anonymize<Iec63114qk6dsm>;
} | {
    type: "Approved";
    value: Anonymize<Ini94eljn5lj8>;
} | {
    type: "Rejected";
    value: Anonymize<Ini94eljn5lj8>;
} | {
    type: "Cancelled";
    value: Anonymize<Ini94eljn5lj8>;
} | {
    type: "TimedOut";
    value: Anonymize<Ini94eljn5lj8>;
} | {
    type: "Killed";
    value: Anonymize<number>;
}>;
export declare const ReferendaTypesReferendumInfo: GetEnum<ReferendaTypesReferendumInfo>;
export type Iec63114qk6dsm = {
    track: number;
    origin: PolkadotRuntimeOriginCaller;
    proposal: PreimagesBounded;
    enactment: TraitsScheduleDispatchTime;
    submitted: number;
    submission_deposit: Anonymize<Id5fm4p8lj5qgi>;
    decision_deposit: Anonymize<Ibd24caul84kv2>;
    deciding: Anonymize<Ibcbcndfmk0jd9>;
    tally: Anonymize<Ifsk7cbmtit1jd>;
    in_queue: boolean;
    alarm: Anonymize<I653443ft89b0e>;
};
export type TraitsScheduleDispatchTime = Enum<{
    type: "At";
    value: Anonymize<number>;
} | {
    type: "After";
    value: Anonymize<number>;
}>;
export declare const TraitsScheduleDispatchTime: GetEnum<TraitsScheduleDispatchTime>;
export type Ibd24caul84kv2 = Anonymize<Id5fm4p8lj5qgi> | undefined;
export type Ibcbcndfmk0jd9 = Anonymize<I4a0pk3ivg0trh> | undefined;
export type I4a0pk3ivg0trh = {
    since: number;
    confirming: Anonymize<I4arjljr6dpflb>;
};
export type I653443ft89b0e = Anonymize<I52d1f0503mqv7> | undefined;
export type I52d1f0503mqv7 = [number, Anonymize<I5g2vv0ckl2m8b>];
export type Ini94eljn5lj8 = [number, Anonymize<Ibd24caul84kv2>, Anonymize<Ibd24caul84kv2>];
export type I2phecamkn3pej = [bigint, bigint, number];
export type ClaimsStatementKind = Enum<{
    type: "Regular";
    value: undefined;
} | {
    type: "Saft";
    value: undefined;
}>;
export declare const ClaimsStatementKind: GetEnum<ClaimsStatementKind>;
export type Ifble4juuml5ig = Array<Anonymize<I4aro1m78pdrtt>>;
export type I4aro1m78pdrtt = {
    locked: bigint;
    per_block: bigint;
    starting_block: number;
};
export type VestingReleases = Enum<{
    type: "V0";
    value: undefined;
} | {
    type: "V1";
    value: undefined;
}>;
export declare const VestingReleases: GetEnum<VestingReleases>;
export type I60cr97f9of5s5 = {
    judgements: Anonymize<I8lr6mvrp6262n>;
    deposit: bigint;
    info: Anonymize<I939m6d6t3dsgm>;
};
export type I8lr6mvrp6262n = Array<Anonymize<Icjt4rtq0era77>>;
export type Icjt4rtq0era77 = [number, IdentityJudgement];
export type IdentityJudgement = Enum<{
    type: "Unknown";
    value: undefined;
} | {
    type: "FeePaid";
    value: Anonymize<bigint>;
} | {
    type: "Reasonable";
    value: undefined;
} | {
    type: "KnownGood";
    value: undefined;
} | {
    type: "OutOfDate";
    value: undefined;
} | {
    type: "LowQuality";
    value: undefined;
} | {
    type: "Erroneous";
    value: undefined;
}>;
export declare const IdentityJudgement: GetEnum<IdentityJudgement>;
export type I939m6d6t3dsgm = {
    additional: Anonymize<I33d2rrv01sdlq>;
    display: IdentityTypesData;
    legal: IdentityTypesData;
    web: IdentityTypesData;
    riot: IdentityTypesData;
    email: IdentityTypesData;
    pgp_fingerprint: Anonymize<I9k5avl0v1ch15>;
    image: IdentityTypesData;
    twitter: IdentityTypesData;
};
export type I33d2rrv01sdlq = Array<Anonymize<I22blct134ortt>>;
export type I22blct134ortt = [IdentityTypesData, IdentityTypesData];
export type IdentityTypesData = Enum<{
    type: "None";
    value: undefined;
} | {
    type: "Raw0";
    value: Anonymize<Binary>;
} | {
    type: "Raw1";
    value: Anonymize<Binary>;
} | {
    type: "Raw2";
    value: Anonymize<Binary>;
} | {
    type: "Raw3";
    value: Anonymize<Binary>;
} | {
    type: "Raw4";
    value: Anonymize<Binary>;
} | {
    type: "Raw5";
    value: Anonymize<Binary>;
} | {
    type: "Raw6";
    value: Anonymize<Binary>;
} | {
    type: "Raw7";
    value: Anonymize<Binary>;
} | {
    type: "Raw8";
    value: Anonymize<Binary>;
} | {
    type: "Raw9";
    value: Anonymize<Binary>;
} | {
    type: "Raw10";
    value: Anonymize<Binary>;
} | {
    type: "Raw11";
    value: Anonymize<Binary>;
} | {
    type: "Raw12";
    value: Anonymize<Binary>;
} | {
    type: "Raw13";
    value: Anonymize<Binary>;
} | {
    type: "Raw14";
    value: Anonymize<Binary>;
} | {
    type: "Raw15";
    value: Anonymize<Binary>;
} | {
    type: "Raw16";
    value: Anonymize<Binary>;
} | {
    type: "Raw17";
    value: Anonymize<Binary>;
} | {
    type: "Raw18";
    value: Anonymize<Binary>;
} | {
    type: "Raw19";
    value: Anonymize<Binary>;
} | {
    type: "Raw20";
    value: Anonymize<Binary>;
} | {
    type: "Raw21";
    value: Anonymize<Binary>;
} | {
    type: "Raw22";
    value: Anonymize<Binary>;
} | {
    type: "Raw23";
    value: Anonymize<Binary>;
} | {
    type: "Raw24";
    value: Anonymize<Binary>;
} | {
    type: "Raw25";
    value: Anonymize<Binary>;
} | {
    type: "Raw26";
    value: Anonymize<Binary>;
} | {
    type: "Raw27";
    value: Anonymize<Binary>;
} | {
    type: "Raw28";
    value: Anonymize<Binary>;
} | {
    type: "Raw29";
    value: Anonymize<Binary>;
} | {
    type: "Raw30";
    value: Anonymize<Binary>;
} | {
    type: "Raw31";
    value: Anonymize<Binary>;
} | {
    type: "Raw32";
    value: Anonymize<Binary>;
} | {
    type: "BlakeTwo256";
    value: Anonymize<Binary>;
} | {
    type: "Sha256";
    value: Anonymize<Binary>;
} | {
    type: "Keccak256";
    value: Anonymize<Binary>;
} | {
    type: "ShaThree256";
    value: Anonymize<Binary>;
}>;
export declare const IdentityTypesData: GetEnum<IdentityTypesData>;
export type I9k5avl0v1ch15 = Binary | undefined;
export type Ib22937a5d3pt0 = [SS58String, IdentityTypesData];
export type I4nfjdef0ibh44 = [bigint, Anonymize<Ia2lhg7l2hilo3>];
export type I74af64m08r6as = Array<Anonymize<I48v3sekdprq30>>;
export type I48v3sekdprq30 = Anonymize<Icj8lp9f0lq0bm> | undefined;
export type Icj8lp9f0lq0bm = {
    account: SS58String;
    fee: bigint;
    fields: bigint;
};
export type If0n3k77qd4p7k = [Anonymize<Id1245cgi7butj>, bigint];
export type Id1245cgi7butj = Array<Anonymize<Ic03hb2bbrcdle>>;
export type Ic03hb2bbrcdle = {
    delegate: SS58String;
    proxy_type: ProxyType;
    delay: number;
};
export type I3tjio59962rg2 = [Anonymize<I99svmvk5amkcq>, bigint];
export type I99svmvk5amkcq = Array<Anonymize<I5gk1hg65t79fm>>;
export type I5gk1hg65t79fm = {
    real: SS58String;
    call_hash: Binary;
    height: number;
};
export type Iag146hmjgqfgj = {
    when: Anonymize<Itvprrpb0nm3o>;
    deposit: bigint;
    depositor: SS58String;
    approvals: Anonymize<Ia2lhg7l2hilo3>;
};
export type I73gble6tmb52f = [SS58String, Binary];
export type Ic28sp53lp2v4a = {
    proposer: SS58String;
    value: bigint;
    fee: bigint;
    curator_deposit: bigint;
    bond: bigint;
    status: BountiesBountyStatus;
};
export type BountiesBountyStatus = Enum<{
    type: "Proposed";
    value: undefined;
} | {
    type: "Approved";
    value: undefined;
} | {
    type: "Funded";
    value: undefined;
} | {
    type: "CuratorProposed";
    value: Anonymize<I846573mdj1pfn>;
} | {
    type: "Active";
    value: Anonymize<I5s3sqq6r9nt63>;
} | {
    type: "PendingPayout";
    value: Anonymize<I4aulgjqrdphrm>;
}>;
export declare const BountiesBountyStatus: GetEnum<BountiesBountyStatus>;
export type I846573mdj1pfn = {
    curator: SS58String;
};
export type I5s3sqq6r9nt63 = {
    curator: SS58String;
    update_due: number;
};
export type I4aulgjqrdphrm = {
    curator: SS58String;
    beneficiary: SS58String;
    unlock_at: number;
};
export type Idvn49j11itec9 = {
    parent_bounty: number;
    value: bigint;
    fee: bigint;
    curator_deposit: bigint;
    status: ChildBountyStatus;
};
export type ChildBountyStatus = Enum<{
    type: "Added";
    value: undefined;
} | {
    type: "CuratorProposed";
    value: Anonymize<I846573mdj1pfn>;
} | {
    type: "Active";
    value: Anonymize<I846573mdj1pfn>;
} | {
    type: "PendingPayout";
    value: Anonymize<I4aulgjqrdphrm>;
}>;
export declare const ChildBountyStatus: GetEnum<ChildBountyStatus>;
export type Ia5nfh4hon3go3 = {
    supports: Anonymize<I4bboqsv44evel>;
    score: Anonymize<I8s6n43okuj2b1>;
    compute: ElectionProviderMultiPhaseElectionCompute;
};
export type I4bboqsv44evel = Array<Anonymize<Ib5vlbiqndekn9>>;
export type Ib5vlbiqndekn9 = [SS58String, Anonymize<I7qb1luldf1jtf>];
export type I7qb1luldf1jtf = {
    total: bigint;
    voters: Anonymize<Iba9inugg1atvo>;
};
export type Ia7o65280hur3p = {
    voters: Anonymize<I9cpogojpnsq8h>;
    targets: Anonymize<Ia2lhg7l2hilo3>;
};
export type I9cpogojpnsq8h = Array<Anonymize<I6dvmrbp80vk5k>>;
export type I6dvmrbp80vk5k = [SS58String, bigint, Anonymize<Ia2lhg7l2hilo3>];
export type Iasd2iat48n080 = {
    voters: number;
    targets: number;
};
export type Ic8d01sg6acf60 = Array<Anonymize<Ie663uperueqm5>>;
export type Ie663uperueqm5 = [Anonymize<I8s6n43okuj2b1>, number, number];
export type Irl37q7erstrb = {
    who: SS58String;
    deposit: bigint;
    raw_solution: Anonymize<I7je4n92ump862>;
    call_fee: bigint;
};
export type I7je4n92ump862 = {
    solution: Anonymize<I1nvcsqg39g26j>;
    score: Anonymize<I8s6n43okuj2b1>;
    round: number;
};
export type I1nvcsqg39g26j = {
    votes1: Anonymize<Iep4uo61810hfs>;
    votes2: Anonymize<Ickjq69hlul8c3>;
    votes3: Anonymize<Icf645ln9bi1bj>;
    votes4: Anonymize<I8nospv7k5s457>;
    votes5: Anonymize<Iig9pofg77rah>;
    votes6: Anonymize<Irttjt9tghoc0>;
    votes7: Anonymize<I3o5epjr2va0dl>;
    votes8: Anonymize<I1gfnebceebqb5>;
    votes9: Anonymize<Ibo38fh2dhj4it>;
    votes10: Anonymize<Id4gvspmdh8h9l>;
    votes11: Anonymize<I5be3ho5m1r68a>;
    votes12: Anonymize<I7s2sh7cpuv56r>;
    votes13: Anonymize<I5fq8855gfhmlo>;
    votes14: Anonymize<I4mvok713k4g7o>;
    votes15: Anonymize<I90tu9lmjmhfhd>;
    votes16: Anonymize<I3cqaev9m4hn9m>;
};
export type Ickjq69hlul8c3 = Array<Anonymize<I4l2a0q04ni20o>>;
export type I4l2a0q04ni20o = [number, Anonymize<I5g2vv0ckl2m8b>, number];
export type Icf645ln9bi1bj = Array<Anonymize<Iamqg950vpqsp8>>;
export type Iamqg950vpqsp8 = [number, Anonymize<Iffarf0mj066h7>, number];
export type Iffarf0mj066h7 = Array<Anonymize<I5g2vv0ckl2m8b>>;
export type I8nospv7k5s457 = Array<Anonymize<Ifr1o6ri1uf2of>>;
export type Ifr1o6ri1uf2of = [number, Anonymize<I33ipki9g5n04l>, number];
export type I33ipki9g5n04l = Array<Anonymize<I5g2vv0ckl2m8b>>;
export type Iig9pofg77rah = Array<Anonymize<I4gus921fjj8lq>>;
export type I4gus921fjj8lq = [number, Anonymize<If6gr8nt3vreg9>, number];
export type If6gr8nt3vreg9 = Array<Anonymize<I5g2vv0ckl2m8b>>;
export type Irttjt9tghoc0 = Array<Anonymize<I9h1lfefrjrss8>>;
export type I9h1lfefrjrss8 = [number, Anonymize<I8kcfo1iikpfd7>, number];
export type I8kcfo1iikpfd7 = Array<Anonymize<I5g2vv0ckl2m8b>>;
export type I3o5epjr2va0dl = Array<Anonymize<I85q51vkapcmho>>;
export type I85q51vkapcmho = [number, Anonymize<I829dlpp8f7vhg>, number];
export type I829dlpp8f7vhg = Array<Anonymize<I5g2vv0ckl2m8b>>;
export type I1gfnebceebqb5 = Array<Anonymize<I9kgeuvub0nepg>>;
export type I9kgeuvub0nepg = [number, Anonymize<Ie65d4ts6gb5rk>, number];
export type Ie65d4ts6gb5rk = Array<Anonymize<I5g2vv0ckl2m8b>>;
export type Ibo38fh2dhj4it = Array<Anonymize<Ipcskss5flcis>>;
export type Ipcskss5flcis = [number, Anonymize<I45nria0sqoino>, number];
export type I45nria0sqoino = Array<Anonymize<I5g2vv0ckl2m8b>>;
export type Id4gvspmdh8h9l = Array<Anonymize<Ifdgh79k56960e>>;
export type Ifdgh79k56960e = [number, Anonymize<Ie8fi1901h656e>, number];
export type Ie8fi1901h656e = Array<Anonymize<I5g2vv0ckl2m8b>>;
export type I5be3ho5m1r68a = Array<Anonymize<I5n2npru4pt8nc>>;
export type I5n2npru4pt8nc = [number, Anonymize<I1ap4gedi13j9r>, number];
export type I1ap4gedi13j9r = Array<Anonymize<I5g2vv0ckl2m8b>>;
export type I7s2sh7cpuv56r = Array<Anonymize<I2udmq2v26rio>>;
export type I2udmq2v26rio = [number, Anonymize<I5vtd36r5b6fss>, number];
export type I5vtd36r5b6fss = Array<Anonymize<I5g2vv0ckl2m8b>>;
export type I5fq8855gfhmlo = Array<Anonymize<Id2nvrmi6cagga>>;
export type Id2nvrmi6cagga = [number, Anonymize<Iee99h3pht9j20>, number];
export type Iee99h3pht9j20 = Array<Anonymize<I5g2vv0ckl2m8b>>;
export type I4mvok713k4g7o = Array<Anonymize<I2ajtdvlncoqrd>>;
export type I2ajtdvlncoqrd = [number, Anonymize<I3lmls9cse1mcr>, number];
export type I3lmls9cse1mcr = Array<Anonymize<I5g2vv0ckl2m8b>>;
export type I90tu9lmjmhfhd = Array<Anonymize<Ifn0i2gsu8pkck>>;
export type Ifn0i2gsu8pkck = [number, Anonymize<Ia1o13i3p2r7gm>, number];
export type Ia1o13i3p2r7gm = Array<Anonymize<I5g2vv0ckl2m8b>>;
export type I3cqaev9m4hn9m = Array<Anonymize<Icrp3ubf87cjna>>;
export type Icrp3ubf87cjna = [number, Anonymize<I8c5gqvfaedv6e>, number];
export type I8c5gqvfaedv6e = Array<Anonymize<I5g2vv0ckl2m8b>>;
export type Ic5t26f9cp3tvk = {
    id: SS58String;
    prev: Anonymize<Ihfphjolmsqq1>;
    next: Anonymize<Ihfphjolmsqq1>;
    bag_upper: bigint;
    score: bigint;
};
export type I39k39h6vu4hbq = {
    head: Anonymize<Ihfphjolmsqq1>;
    tail: Anonymize<Ihfphjolmsqq1>;
};
export type Idphjddn2h69vc = {
    pool_id: number;
    points: bigint;
    last_recorded_reward_counter: bigint;
    unbonding_eras: Anonymize<If9jidduiuq7vv>;
};
export type I13ttsmlfr8g52 = {
    commission: Anonymize<I30ffej1k6vjpu>;
    member_counter: number;
    points: bigint;
    roles: Anonymize<Ia8iksu9hedf5n>;
    state: NominationPoolsPoolState;
};
export type I30ffej1k6vjpu = {
    current: Anonymize<Ie8iutm7u02lmj>;
    max: Anonymize<I4arjljr6dpflb>;
    change_rate: Anonymize<I7hapkpc6mcou7>;
    throttle_from: Anonymize<I4arjljr6dpflb>;
};
export type I7hapkpc6mcou7 = Anonymize<Ibqul338t9c1ll> | undefined;
export type Ia8iksu9hedf5n = {
    depositor: SS58String;
    root: Anonymize<Ihfphjolmsqq1>;
    nominator: Anonymize<Ihfphjolmsqq1>;
    bouncer: Anonymize<Ihfphjolmsqq1>;
};
export type If6qa32dj75gu1 = {
    last_recorded_reward_counter: bigint;
    last_recorded_total_payouts: bigint;
    total_rewards_claimed: bigint;
    total_commission_pending: bigint;
    total_commission_claimed: bigint;
};
export type I7oo2mprv1qd1s = {
    no_era: Anonymize<I4h0cfnkiqrna6>;
    with_era: Anonymize<I48jqs22bfh5as>;
};
export type I4h0cfnkiqrna6 = {
    points: bigint;
    balance: bigint;
};
export type I48jqs22bfh5as = Array<Anonymize<Ifp6metskahp08>>;
export type Ifp6metskahp08 = [number, Anonymize<I4h0cfnkiqrna6>];
export type NominationPoolsClaimPermission = Enum<{
    type: "Permissioned";
    value: undefined;
} | {
    type: "PermissionlessCompound";
    value: undefined;
} | {
    type: "PermissionlessWithdraw";
    value: undefined;
} | {
    type: "PermissionlessAll";
    value: undefined;
}>;
export declare const NominationPoolsClaimPermission: GetEnum<NominationPoolsClaimPermission>;
export type I2eh80qovrl7h2 = {
    stashes: Anonymize<Iba9inugg1atvo>;
    checked: Anonymize<Icgljjb6j82uhn>;
};
export type Ia2hpj72knb2q9 = {
    max_code_size: number;
    max_head_data_size: number;
    max_upward_queue_count: number;
    max_upward_queue_size: number;
    max_upward_message_size: number;
    max_upward_message_num_per_candidate: number;
    hrmp_max_message_num_per_candidate: number;
    validation_upgrade_cooldown: number;
    validation_upgrade_delay: number;
    async_backing_params: Anonymize<Iavuvfkop6318c>;
    max_pov_size: number;
    max_downward_message_size: number;
    hrmp_max_parachain_outbound_channels: number;
    hrmp_sender_deposit: bigint;
    hrmp_recipient_deposit: bigint;
    hrmp_channel_max_capacity: number;
    hrmp_channel_max_total_size: number;
    hrmp_max_parachain_inbound_channels: number;
    hrmp_channel_max_message_size: number;
    executor_params: Anonymize<I6sbufrhmgqdb6>;
    code_retention_period: number;
    on_demand_cores: number;
    on_demand_retries: number;
    on_demand_queue_max_size: number;
    on_demand_target_queue_utilization: number;
    on_demand_fee_variability: number;
    on_demand_base_fee: bigint;
    on_demand_ttl: number;
    group_rotation_frequency: number;
    paras_availability_period: number;
    scheduling_lookahead: number;
    max_validators_per_core: Anonymize<I4arjljr6dpflb>;
    max_validators: Anonymize<I4arjljr6dpflb>;
    dispute_period: number;
    dispute_post_conclusion_acceptance_period: number;
    no_show_slots: number;
    n_delay_tranches: number;
    zeroth_delay_tranche_width: number;
    needed_approvals: number;
    relay_vrf_modulo_samples: number;
    pvf_voting_ttl: number;
    minimum_validation_upgrade_delay: number;
    minimum_backing_votes: number;
};
export type Iavuvfkop6318c = {
    max_candidate_depth: number;
    allowed_ancestry_len: number;
};
export type I6sbufrhmgqdb6 = Array<PolkadotPrimitivesV5ExecutorParam>;
export type PolkadotPrimitivesV5ExecutorParam = Enum<{
    type: "MaxMemoryPages";
    value: Anonymize<number>;
} | {
    type: "StackLogicalMax";
    value: Anonymize<number>;
} | {
    type: "StackNativeMax";
    value: Anonymize<number>;
} | {
    type: "PrecheckingMaxMemory";
    value: Anonymize<bigint>;
} | {
    type: "PvfPrepTimeout";
    value: Anonymize<Iekilhq74ak677>;
} | {
    type: "PvfExecTimeout";
    value: Anonymize<I3fsjjoj6u1h98>;
} | {
    type: "WasmExtBulkMemory";
    value: undefined;
}>;
export declare const PolkadotPrimitivesV5ExecutorParam: GetEnum<PolkadotPrimitivesV5ExecutorParam>;
export type Iekilhq74ak677 = [PolkadotPrimitivesV5PvfPrepTimeoutKind, bigint];
export type PolkadotPrimitivesV5PvfPrepTimeoutKind = Enum<{
    type: "Precheck";
    value: undefined;
} | {
    type: "Lenient";
    value: undefined;
}>;
export declare const PolkadotPrimitivesV5PvfPrepTimeoutKind: GetEnum<PolkadotPrimitivesV5PvfPrepTimeoutKind>;
export type I3fsjjoj6u1h98 = [PolkadotPrimitivesV5PvfExecTimeoutKind, bigint];
export type PolkadotPrimitivesV5PvfExecTimeoutKind = Enum<{
    type: "Backing";
    value: undefined;
} | {
    type: "Approval";
    value: undefined;
}>;
export declare const PolkadotPrimitivesV5PvfExecTimeoutKind: GetEnum<PolkadotPrimitivesV5PvfExecTimeoutKind>;
export type Ies9ffs3ho1o06 = Array<Anonymize<If7itfec5udsb7>>;
export type If7itfec5udsb7 = [number, Anonymize<Ia2hpj72knb2q9>];
export type I663ddds93n8hc = {
    buffer: Anonymize<Idm6djpsp7gtcm>;
    latest_number: number;
};
export type Idm6djpsp7gtcm = Array<Anonymize<Idc5h3lsmctk6r>>;
export type Idc5h3lsmctk6r = [Binary, Binary];
export type I78e99376i3249 = {
    bitfield: {
        bytes: Uint8Array;
        bitsLen: number;
    };
    submitted_at: number;
};
export type Ic4ms979ng98e4 = {
    core: number;
    hash: Binary;
    descriptor: Anonymize<Ib2u20s6roco9i>;
    availability_votes: {
        bytes: Uint8Array;
        bitsLen: number;
    };
    backers: {
        bytes: Uint8Array;
        bitsLen: number;
    };
    relay_parent_number: number;
    backed_in_number: number;
    backing_group: number;
};
export type Ic1d4u2opv3fst = {
    upward_messages: Anonymize<Itom7fk49o0c9>;
    horizontal_messages: Anonymize<I6r5cbv8ttrb09>;
    new_validation_code: Anonymize<Iabpgqcjikia83>;
    head_data: Binary;
    processed_downward_messages: number;
    hrmp_watermark: number;
};
export type Itom7fk49o0c9 = Array<Binary>;
export type I6r5cbv8ttrb09 = Array<Anonymize<I958l48g4qg5rf>>;
export type I958l48g4qg5rf = {
    recipient: number;
    data: Binary;
};
export type Iabpgqcjikia83 = Binary | undefined;
export type I3qttgoifdk5v6 = {
    session: number;
    backing_validators_per_candidate: Anonymize<Ibabtlc0psj69a>;
    disputes: Anonymize<I65nq8pomrmfij>;
};
export type Ibabtlc0psj69a = Array<Anonymize<I2sj9sob0g74s5>>;
export type I2sj9sob0g74s5 = [Anonymize<I4vjld3472quct>, Anonymize<Icl1tha16t1g7m>];
export type Icl1tha16t1g7m = Array<Anonymize<I63c844nk8i073>>;
export type I63c844nk8i073 = [number, PolkadotPrimitivesV5ValidityAttestation];
export type PolkadotPrimitivesV5ValidityAttestation = Enum<{
    type: "Implicit";
    value: Anonymize<Binary>;
} | {
    type: "Explicit";
    value: Anonymize<Binary>;
}>;
export declare const PolkadotPrimitivesV5ValidityAttestation: GetEnum<PolkadotPrimitivesV5ValidityAttestation>;
export type I65nq8pomrmfij = Array<Anonymize<I23k12glbhqmf9>>;
export type I23k12glbhqmf9 = {
    candidate_hash: Binary;
    session: number;
    statements: Anonymize<I7ceopstr9sdg3>;
};
export type I7ceopstr9sdg3 = Array<Anonymize<I7lb7fdn2b9rgb>>;
export type I7lb7fdn2b9rgb = [PolkadotPrimitivesV5DisputeStatement, number, Binary];
export type PolkadotPrimitivesV5DisputeStatement = Enum<{
    type: "Valid";
    value: Anonymize<PolkadotPrimitivesV5ValidDisputeStatementKind>;
} | {
    type: "Invalid";
    value: Anonymize<PolkadotPrimitivesV5InvalidDisputeStatementKind>;
}>;
export declare const PolkadotPrimitivesV5DisputeStatement: GetEnum<PolkadotPrimitivesV5DisputeStatement>;
export type PolkadotPrimitivesV5ValidDisputeStatementKind = Enum<{
    type: "Explicit";
    value: undefined;
} | {
    type: "BackingSeconded";
    value: Anonymize<Binary>;
} | {
    type: "BackingValid";
    value: Anonymize<Binary>;
} | {
    type: "ApprovalChecking";
    value: undefined;
}>;
export declare const PolkadotPrimitivesV5ValidDisputeStatementKind: GetEnum<PolkadotPrimitivesV5ValidDisputeStatementKind>;
export type PolkadotPrimitivesV5InvalidDisputeStatementKind = Enum<{
    type: "Explicit";
    value: undefined;
}>;
export declare const PolkadotPrimitivesV5InvalidDisputeStatementKind: GetEnum<PolkadotPrimitivesV5InvalidDisputeStatementKind>;
export type Iarlj3qd8u1v13 = Array<Anonymize<Icgljjb6j82uhn>>;
export type In9ekmba4m5ft = Array<PolkadotPrimitivesV5CoreOccupied>;
export type PolkadotPrimitivesV5CoreOccupied = Enum<{
    type: "Free";
    value: undefined;
} | {
    type: "Paras";
    value: Anonymize<I7kvbv2iq0pupl>;
}>;
export declare const PolkadotPrimitivesV5CoreOccupied: GetEnum<PolkadotPrimitivesV5CoreOccupied>;
export type I7kvbv2iq0pupl = {
    assignment: number;
    availability_timeouts: number;
    ttl: number;
};
export type Ievsccbpmuhatk = Array<Anonymize<Iabtbb330q3t3q>>;
export type Iabtbb330q3t3q = [number, Anonymize<Icsuua8kklr5k2>];
export type Icsuua8kklr5k2 = Array<Anonymize<I9b8vdn68or1nt>>;
export type I9b8vdn68or1nt = Anonymize<I7kvbv2iq0pupl> | undefined;
export type Iaja1oeag5u4b3 = {
    votes_accept: {
        bytes: Uint8Array;
        bitsLen: number;
    };
    votes_reject: {
        bytes: Uint8Array;
        bitsLen: number;
    };
    age: number;
    created_at: number;
    causes: Anonymize<Ia0a9586d8d811>;
};
export type Ia0a9586d8d811 = Array<PolkadotRuntimeParachainsParasPvfCheckCause>;
export type PolkadotRuntimeParachainsParasPvfCheckCause = Enum<{
    type: "Onboarding";
    value: Anonymize<number>;
} | {
    type: "Upgrade";
    value: Anonymize<Ic9rr4c78iumk2>;
}>;
export declare const PolkadotRuntimeParachainsParasPvfCheckCause: GetEnum<PolkadotRuntimeParachainsParasPvfCheckCause>;
export type Ic9rr4c78iumk2 = {
    id: number;
    included_at: number;
    set_go_ahead: DispatchPays;
};
export type ParachainsParasParaLifecycle = Enum<{
    type: "Onboarding";
    value: undefined;
} | {
    type: "Parathread";
    value: undefined;
} | {
    type: "Parachain";
    value: undefined;
} | {
    type: "UpgradingParathread";
    value: undefined;
} | {
    type: "DowngradingParachain";
    value: undefined;
} | {
    type: "OffboardingParathread";
    value: undefined;
} | {
    type: "OffboardingParachain";
    value: undefined;
}>;
export declare const ParachainsParasParaLifecycle: GetEnum<ParachainsParasParaLifecycle>;
export type I79cs1p3m59mo7 = {
    upgrade_times: Anonymize<I2v6n2k262gqsq>;
    last_pruned: Anonymize<I4arjljr6dpflb>;
};
export type I2v6n2k262gqsq = Array<Anonymize<Ioham9r6hhu19>>;
export type Ioham9r6hhu19 = {
    expected_at: number;
    activated_at: number;
};
export type PolkadotPrimitivesV5UpgradeGoAhead = Enum<{
    type: "Abort";
    value: undefined;
} | {
    type: "GoAhead";
    value: undefined;
}>;
export declare const PolkadotPrimitivesV5UpgradeGoAhead: GetEnum<PolkadotPrimitivesV5UpgradeGoAhead>;
export type PolkadotPrimitivesV5UpgradeRestriction = Enum<{
    type: "Present";
    value: undefined;
}>;
export declare const PolkadotPrimitivesV5UpgradeRestriction: GetEnum<PolkadotPrimitivesV5UpgradeRestriction>;
export type I2duhnt686rv0q = {
    genesis_head: Binary;
    validation_code: Binary;
    para_kind: boolean;
};
export type I14hoekog5s49k = Array<Anonymize<I36mfku1ea0i8t>>;
export type I36mfku1ea0i8t = {
    validators: Anonymize<Idhnf6rtqoslea>;
    queued: Anonymize<Idhnf6rtqoslea>;
    session_index: number;
};
export type I6ljjd4b5fa4ov = Array<Anonymize<I60847k37jfcc6>>;
export type I60847k37jfcc6 = {
    sent_at: number;
    msg: Binary;
};
export type Ibhmrlkcu01imb = {
    confirmed: boolean;
    _age: number;
    sender_deposit: bigint;
    max_message_size: number;
    max_capacity: number;
    max_total_size: number;
};
export type Id43g4eveajpkl = Array<Anonymize<I50mrcbubp554e>>;
export type I6u4labiv1bntm = {
    max_capacity: number;
    max_total_size: number;
    max_message_size: number;
    msg_count: number;
    total_size: number;
    mqc_head: Anonymize<I17k3ujudqd5df>;
    sender_deposit: bigint;
    recipient_deposit: bigint;
};
export type Iev3u09i2vqn93 = Array<Anonymize<I409qo0sfkbh16>>;
export type I409qo0sfkbh16 = {
    sent_at: number;
    data: Binary;
};
export type I9olhgo2o08h7b = Array<Anonymize<I8pg2rpr4ldgp9>>;
export type I8pg2rpr4ldgp9 = [number, Anonymize<Icgljjb6j82uhn>];
export type I7k9oi9p83j43l = {
    active_validator_indices: Anonymize<Icgljjb6j82uhn>;
    random_seed: Binary;
    dispute_period: number;
    validators: Anonymize<Idhnf6rtqoslea>;
    discovery_keys: Anonymize<Idhnf6rtqoslea>;
    assignment_keys: Anonymize<Idhnf6rtqoslea>;
    validator_groups: Anonymize<Iarlj3qd8u1v13>;
    n_cores: number;
    zeroth_delay_tranche_width: number;
    relay_vrf_modulo_samples: number;
    n_delay_tranches: number;
    no_show_slots: number;
    needed_approvals: number;
};
export type I87u7jalc0lhah = {
    validators_for: {
        bytes: Uint8Array;
        bitsLen: number;
    };
    validators_against: {
        bytes: Uint8Array;
        bitsLen: number;
    };
    start: number;
    concluded_at: Anonymize<I4arjljr6dpflb>;
};
export type If89923vhoiaim = [number, Binary];
export type I3g2jv3qmtkrbe = {
    keys: Anonymize<I93ssha9egqq23>;
    kind: PolkadotPrimitivesV5SlashingSlashingOffenceKind;
};
export type I93ssha9egqq23 = Array<Anonymize<If89923vhoiaim>>;
export type PolkadotPrimitivesV5SlashingSlashingOffenceKind = Enum<{
    type: "ForInvalid";
    value: undefined;
} | {
    type: "AgainstValid";
    value: undefined;
}>;
export declare const PolkadotPrimitivesV5SlashingSlashingOffenceKind: GetEnum<PolkadotPrimitivesV5SlashingSlashingOffenceKind>;
export type I3av628q6dt6mq = {
    manager: SS58String;
    deposit: bigint;
    locked: Anonymize<I8ie0dco0kcuq5>;
};
export type I8ie0dco0kcuq5 = boolean | undefined;
export type Ifmaahl40gom3g = Array<Anonymize<I92hdo1clkbp4g>>;
export type I70iuri2ilha1f = Array<Anonymize<I1qlf98109qt29>>;
export type I1qlf98109qt29 = Anonymize<I7fcree6lak6uv> | undefined;
export type I7fcree6lak6uv = [SS58String, number, bigint];
export type I2neqklu8gtd27 = {
    depositor: SS58String;
    verifier: Anonymize<I8t18p6mokc3s4>;
    deposit: bigint;
    raised: bigint;
    end: number;
    cap: bigint;
    last_contribution: CommonCrowdloanLastContribution;
    first_period: number;
    last_period: number;
    fund_index: number;
};
export type I8t18p6mokc3s4 = MultiSigner | undefined;
export type MultiSigner = Enum<{
    type: "Ed25519";
    value: Anonymize<Binary>;
} | {
    type: "Sr25519";
    value: Anonymize<Binary>;
} | {
    type: "Ecdsa";
    value: Anonymize<Binary>;
}>;
export declare const MultiSigner: GetEnum<MultiSigner>;
export type CommonCrowdloanLastContribution = Enum<{
    type: "Never";
    value: undefined;
} | {
    type: "PreEnding";
    value: Anonymize<number>;
} | {
    type: "Ending";
    value: Anonymize<number>;
}>;
export declare const CommonCrowdloanLastContribution: GetEnum<CommonCrowdloanLastContribution>;
export type XcmPalletQueryStatus = Enum<{
    type: "Pending";
    value: Anonymize<Ichb9e5l86b18e>;
} | {
    type: "VersionNotifier";
    value: Anonymize<I3mn2je4qtr2lg>;
} | {
    type: "Ready";
    value: Anonymize<I7p4s7atk8cdq4>;
}>;
export declare const XcmPalletQueryStatus: GetEnum<XcmPalletQueryStatus>;
export type Ichb9e5l86b18e = {
    responder: XcmVersionedMultiLocation;
    maybe_match_querier: Anonymize<Iffpe9i5dcgbrq>;
    maybe_notify: Anonymize<I34gtdjipdmjpt>;
    timeout: number;
};
export type Iffpe9i5dcgbrq = XcmVersionedMultiLocation | undefined;
export type I3mn2je4qtr2lg = {
    origin: XcmVersionedMultiLocation;
    is_active: boolean;
};
export type I7p4s7atk8cdq4 = {
    response: XcmVersionedResponse;
    at: number;
};
export type XcmVersionedResponse = Enum<{
    type: "V2";
    value: Anonymize<XcmV2Response>;
} | {
    type: "V3";
    value: Anonymize<XcmV3Response>;
}>;
export declare const XcmVersionedResponse: GetEnum<XcmVersionedResponse>;
export type XcmV2Response = Enum<{
    type: "Null";
    value: undefined;
} | {
    type: "Assets";
    value: Anonymize<Ia3ggl9eghkufh>;
} | {
    type: "ExecutionResult";
    value: Anonymize<I17i9gqt27hetc>;
} | {
    type: "Version";
    value: Anonymize<number>;
}>;
export declare const XcmV2Response: GetEnum<XcmV2Response>;
export type I17i9gqt27hetc = Anonymize<I8l8ileau3j9jv> | undefined;
export type I8l8ileau3j9jv = [number, XcmV2TraitsError];
export type XcmV2TraitsError = Enum<{
    type: "Overflow";
    value: undefined;
} | {
    type: "Unimplemented";
    value: undefined;
} | {
    type: "UntrustedReserveLocation";
    value: undefined;
} | {
    type: "UntrustedTeleportLocation";
    value: undefined;
} | {
    type: "MultiLocationFull";
    value: undefined;
} | {
    type: "MultiLocationNotInvertible";
    value: undefined;
} | {
    type: "BadOrigin";
    value: undefined;
} | {
    type: "InvalidLocation";
    value: undefined;
} | {
    type: "AssetNotFound";
    value: undefined;
} | {
    type: "FailedToTransactAsset";
    value: undefined;
} | {
    type: "NotWithdrawable";
    value: undefined;
} | {
    type: "LocationCannotHold";
    value: undefined;
} | {
    type: "ExceedsMaxMessageSize";
    value: undefined;
} | {
    type: "DestinationUnsupported";
    value: undefined;
} | {
    type: "Transport";
    value: undefined;
} | {
    type: "Unroutable";
    value: undefined;
} | {
    type: "UnknownClaim";
    value: undefined;
} | {
    type: "FailedToDecode";
    value: undefined;
} | {
    type: "MaxWeightInvalid";
    value: undefined;
} | {
    type: "NotHoldingFees";
    value: undefined;
} | {
    type: "TooExpensive";
    value: undefined;
} | {
    type: "Trap";
    value: Anonymize<bigint>;
} | {
    type: "UnhandledXcmVersion";
    value: undefined;
} | {
    type: "WeightLimitReached";
    value: Anonymize<bigint>;
} | {
    type: "Barrier";
    value: undefined;
} | {
    type: "WeightNotComputable";
    value: undefined;
}>;
export declare const XcmV2TraitsError: GetEnum<XcmV2TraitsError>;
export type I46ggargfeekkj = [number, XcmVersionedMultiLocation];
export type I7vlvrrl2pnbgk = [bigint, Anonymize<I4q39t5hn830vp>, number];
export type Ibdqc639q3ofe0 = Array<Anonymize<I2tguvlrf6n4ik>>;
export type I2tguvlrf6n4ik = [XcmVersionedMultiLocation, number];
export type XcmPalletVersionMigrationStage = Enum<{
    type: "MigrateSupportedVersion";
    value: undefined;
} | {
    type: "MigrateVersionNotifiers";
    value: undefined;
} | {
    type: "NotifyCurrentTargets";
    value: Anonymize<Iabpgqcjikia83>;
} | {
    type: "MigrateAndNotifyOldTargets";
    value: undefined;
}>;
export declare const XcmPalletVersionMigrationStage: GetEnum<XcmPalletVersionMigrationStage>;
export type Iaaeqd8puo95gs = {
    amount: bigint;
    owner: XcmVersionedMultiLocation;
    locker: XcmVersionedMultiLocation;
    consumers: Anonymize<I48jka0f0ufl6q>;
};
export type I48jka0f0ufl6q = Array<Anonymize<I2jndntq8n8661>>;
export type I2jndntq8n8661 = [undefined, bigint];
export type I61vn4ct4e1jjd = [number, SS58String, XcmVersionedAssetId];
export type XcmVersionedAssetId = Enum<{
    type: "V3";
    value: Anonymize<XcmV3MultiassetAssetId>;
}>;
export declare const XcmVersionedAssetId: GetEnum<XcmVersionedAssetId>;
export type I64u7pb324isgb = Array<Anonymize<Ifk51k72g143a3>>;
export type Ifk51k72g143a3 = [bigint, XcmVersionedMultiLocation];
export type Ic9ppo8st33eqb = {
    begin: number;
    end: number;
    count: number;
    ready_neighbours: Anonymize<Iav3cdf9g9n9fp>;
    message_count: bigint;
    size: bigint;
};
export type Iav3cdf9g9n9fp = Anonymize<I4b0p76ud6qst3> | undefined;
export type I4b0p76ud6qst3 = {
    prev: ParachainsInclusionAggregateMessageOrigin;
    next: ParachainsInclusionAggregateMessageOrigin;
};
export type I53esa2ms463bk = {
    remaining: number;
    remaining_size: number;
    first_index: number;
    first: number;
    last: number;
    heap: Binary;
};
export type Ibg270mmpf1f2q = [ParachainsInclusionAggregateMessageOrigin, number];
export type Ie5mvl0hn85mkc = Array<Binary>;
export type I3qm5u05tioq05 = {
    id: bigint;
    len: number;
    keyset_commitment: Binary;
};
export type In7a38730s6qs = {
    base_block: Anonymize<I4q39t5hn830vp>;
    max_block: Anonymize<I4q39t5hn830vp>;
    per_class: Anonymize<I79te2qqsklnbd>;
};
export type I79te2qqsklnbd = {
    normal: Anonymize<Ia78ef0a3p5958>;
    operational: Anonymize<Ia78ef0a3p5958>;
    mandatory: Anonymize<Ia78ef0a3p5958>;
};
export type Ia78ef0a3p5958 = {
    base_extrinsic: Anonymize<I4q39t5hn830vp>;
    max_extrinsic: Anonymize<Iasb8k6ash5mjn>;
    max_total: Anonymize<Iasb8k6ash5mjn>;
    reserved: Anonymize<Iasb8k6ash5mjn>;
};
export type If15el53dd76v9 = {
    normal: number;
    operational: number;
    mandatory: number;
};
export type I9s0ave7t0vnrk = {
    read: bigint;
    write: bigint;
};
export type Ib5fo0fakl8rog = {
    spec_name: string;
    impl_name: string;
    authoring_version: number;
    spec_version: number;
    impl_version: number;
    apis: Anonymize<I1st1p92iu8h7e>;
    transaction_version: number;
    state_version: number;
};
export type I1st1p92iu8h7e = Array<Anonymize<If6q1i5gkbpmkc>>;
export type If6q1i5gkbpmkc = [Binary, number];
export type Ibafpkl9hhno69 = Array<Anonymize<Ida9vhl30l98p4>>;
export type Ida9vhl30l98p4 = [number, Anonymize<I6s1tg2sl5nvmp>];
export type I6s1tg2sl5nvmp = {
    name: string;
    max_deciding: number;
    decision_deposit: bigint;
    prepare_period: number;
    decision_period: number;
    confirm_period: number;
    min_enactment_period: number;
    min_approval: ReferendaTypesCurve;
    min_support: ReferendaTypesCurve;
};
export type ReferendaTypesCurve = Enum<{
    type: "LinearDecreasing";
    value: Anonymize<Idcpso832hml3u>;
} | {
    type: "SteppedDecreasing";
    value: Anonymize<I5qiv0grkufa8l>;
} | {
    type: "Reciprocal";
    value: Anonymize<I58l93su2gte4i>;
}>;
export declare const ReferendaTypesCurve: GetEnum<ReferendaTypesCurve>;
export type Idcpso832hml3u = {
    length: number;
    floor: number;
    ceil: number;
};
export type I5qiv0grkufa8l = {
    begin: number;
    end: number;
    step: number;
    period: number;
};
export type I58l93su2gte4i = {
    factor: bigint;
    x_offset: bigint;
    y_offset: bigint;
};
export type Iafqnechp3omqg = Array<bigint>;
export type SystemPalletCall = Enum<{
    type: "remark";
    value: Anonymize<I8ofcg5rbj0g2c>;
} | {
    type: "set_heap_pages";
    value: Anonymize<I4adgbll7gku4i>;
} | {
    type: "set_code";
    value: Anonymize<I6pjjpfvhvcfru>;
} | {
    type: "set_code_without_checks";
    value: Anonymize<I6pjjpfvhvcfru>;
} | {
    type: "set_storage";
    value: Anonymize<I8qrhskdehbu57>;
} | {
    type: "kill_storage";
    value: Anonymize<I39uah9nss64h9>;
} | {
    type: "kill_prefix";
    value: Anonymize<Ik64dknsq7k08>;
} | {
    type: "remark_with_event";
    value: Anonymize<I8ofcg5rbj0g2c>;
}>;
export declare const SystemPalletCall: GetEnum<SystemPalletCall>;
export type I8ofcg5rbj0g2c = {
    remark: Binary;
};
export type I4adgbll7gku4i = {
    pages: bigint;
};
export type I6pjjpfvhvcfru = {
    code: Binary;
};
export type I8qrhskdehbu57 = {
    items: Anonymize<I5g1ftt6bt65bl>;
};
export type I5g1ftt6bt65bl = Array<Anonymize<Ief9tkec59fktv>>;
export type Ief9tkec59fktv = [Binary, Binary];
export type I39uah9nss64h9 = {
    keys: Anonymize<Itom7fk49o0c9>;
};
export type Ik64dknsq7k08 = {
    prefix: Binary;
    subkeys: number;
};
export type I1abrp8gjcpfc = AnonymousEnum<{
    "schedule": Anonymize<I3qt1iclgnlpc3>;
    "cancel": Anonymize<I5n4sebgkfr760>;
    "schedule_named": Anonymize<Ie7cb775si1ku8>;
    "cancel_named": Anonymize<Idsdstalforb09>;
    "schedule_after": Anonymize<I6rb3dbq8mv545>;
    "schedule_named_after": Anonymize<I90bto8860mivd>;
}>;
export type I3qt1iclgnlpc3 = {
    when: number;
    maybe_periodic: Anonymize<I34gtdjipdmjpt>;
    priority: number;
    call: Anonymize<I8e6un4uk1q07c>;
};
export type I8e6un4uk1q07c = AnonymousEnum<{
    "System": Anonymize<SystemPalletCall>;
    "Scheduler": Anonymize<I1abrp8gjcpfc>;
    "Preimage": Anonymize<PreimagePalletCall>;
    "Babe": Anonymize<BabePalletCall>;
    "Timestamp": Anonymize<TimestampPalletCall>;
    "Indices": Anonymize<IndicesPalletCall>;
    "Balances": Anonymize<Ibf8j84ii3a3kr>;
    "Staking": Anonymize<StakingPalletCall>;
    "Session": Anonymize<I454da453jskvn>;
    "Grandpa": Anonymize<GrandpaPalletCall>;
    "ImOnline": Anonymize<ImOnlinePalletCall>;
    "Treasury": Anonymize<Ibiic8ba5o502g>;
    "ConvictionVoting": Anonymize<ConvictionVotingPalletCall>;
    "Referenda": Anonymize<ReferendaPalletCall>;
    "Whitelist": Anonymize<I51p8lm6kqdnho>;
    "Claims": Anonymize<ClaimsPalletCall>;
    "Vesting": Anonymize<VestingPalletCall>;
    "Utility": Anonymize<Iap9gdffi2u6nu>;
    "Identity": Anonymize<IdentityPalletCall>;
    "Proxy": Anonymize<Idedbf4rqpdmri>;
    "Multisig": Anonymize<Idd2oimlrnr76q>;
    "Bounties": Anonymize<BountiesPalletCall>;
    "ChildBounties": Anonymize<ChildBountiesPalletCall>;
    "ElectionProviderMultiPhase": Anonymize<ElectionProviderMultiPhasePalletCall>;
    "VoterList": Anonymize<BagsListPalletCall>;
    "NominationPools": Anonymize<I29f4027kh5dho>;
    "FastUnstake": Anonymize<FastUnstakePalletCall>;
    "Configuration": Anonymize<ParachainsConfigurationPalletCall>;
    "ParasShared": Anonymize<undefined>;
    "ParaInclusion": Anonymize<undefined>;
    "ParaInherent": Anonymize<ParachainsParasInherentPalletCall>;
    "Paras": Anonymize<ParachainsParasPalletCall>;
    "Initializer": Anonymize<ParachainsInitializerPalletCall>;
    "Hrmp": Anonymize<PolkadotRuntimeParachainsHrmpPalletCall>;
    "ParasDisputes": Anonymize<ParachainsDisputesPalletCall>;
    "ParasSlashing": Anonymize<ParachainsDisputesSlashingPalletCall>;
    "Registrar": Anonymize<CommonParasRegistrarPalletCall>;
    "Slots": Anonymize<CommonSlotsPalletCall>;
    "Auctions": Anonymize<CommonAuctionsPalletCall>;
    "Crowdloan": Anonymize<CommonCrowdloanPalletCall>;
    "XcmPallet": Anonymize<XcmPalletCall>;
    "MessageQueue": Anonymize<MessageQueuePalletCall>;
    "AssetRate": Anonymize<I2gv42mnmfo4fm>;
    "Beefy": Anonymize<BeefyPalletCall>;
}>;
export type PreimagePalletCall = Enum<{
    type: "note_preimage";
    value: Anonymize<I82nfqfkd48n10>;
} | {
    type: "unnote_preimage";
    value: Anonymize<Id9d48vaes3c53>;
} | {
    type: "request_preimage";
    value: Anonymize<Id9d48vaes3c53>;
} | {
    type: "unrequest_preimage";
    value: Anonymize<Id9d48vaes3c53>;
} | {
    type: "ensure_updated";
    value: Anonymize<Idaor7tajt0l3k>;
}>;
export declare const PreimagePalletCall: GetEnum<PreimagePalletCall>;
export type I82nfqfkd48n10 = {
    bytes: Binary;
};
export type Idaor7tajt0l3k = {
    hashes: Anonymize<Idhnf6rtqoslea>;
};
export type BabePalletCall = Enum<{
    type: "report_equivocation";
    value: Anonymize<I7mmbgd20nut80>;
} | {
    type: "report_equivocation_unsigned";
    value: Anonymize<I7mmbgd20nut80>;
} | {
    type: "plan_config_change";
    value: Anonymize<I2dcpbss9027dl>;
}>;
export declare const BabePalletCall: GetEnum<BabePalletCall>;
export type I7mmbgd20nut80 = {
    equivocation_proof: Anonymize<I7bek4s9acs8nl>;
    key_owner_proof: Anonymize<I3ia7aufsoj0l1>;
};
export type I7bek4s9acs8nl = {
    offender: Binary;
    slot: bigint;
    first_header: Anonymize<I6t1nedlt7mobn>;
    second_header: Anonymize<I6t1nedlt7mobn>;
};
export type I6t1nedlt7mobn = {
    parent_hash: Binary;
    number: number;
    state_root: Binary;
    extrinsics_root: Binary;
    digest: Anonymize<Idin6nhq46lvdj>;
};
export type I3ia7aufsoj0l1 = {
    session: number;
    trie_nodes: Anonymize<Itom7fk49o0c9>;
    validator_count: number;
};
export type I2dcpbss9027dl = {
    config: BabeDigestsNextConfigDescriptor;
};
export type TimestampPalletCall = Enum<{
    type: "set";
    value: Anonymize<Idcr6u6361oad9>;
}>;
export declare const TimestampPalletCall: GetEnum<TimestampPalletCall>;
export type Idcr6u6361oad9 = {
    now: bigint;
};
export type IndicesPalletCall = Enum<{
    type: "claim";
    value: Anonymize<I666bl2fqjkejo>;
} | {
    type: "transfer";
    value: Anonymize<Idge7gk9m5car0>;
} | {
    type: "free";
    value: Anonymize<I666bl2fqjkejo>;
} | {
    type: "force_transfer";
    value: Anonymize<I34pbimt2i69v7>;
} | {
    type: "freeze";
    value: Anonymize<I666bl2fqjkejo>;
}>;
export declare const IndicesPalletCall: GetEnum<IndicesPalletCall>;
export type Idge7gk9m5car0 = {
    index: number;
    new: MultiAddress;
};
export type MultiAddress = Enum<{
    type: "Id";
    value: Anonymize<SS58String>;
} | {
    type: "Index";
    value: Anonymize<number>;
} | {
    type: "Raw";
    value: Anonymize<Binary>;
} | {
    type: "Address32";
    value: Anonymize<Binary>;
} | {
    type: "Address20";
    value: Anonymize<Binary>;
}>;
export declare const MultiAddress: GetEnum<MultiAddress>;
export type I34pbimt2i69v7 = {
    new: MultiAddress;
    index: number;
    freeze: boolean;
};
export type Ibf8j84ii3a3kr = AnonymousEnum<{
    "transfer_allow_death": Anonymize<Ien6q0lasi0m7i>;
    "force_transfer": Anonymize<Icacgruoo9j3r2>;
    "transfer_keep_alive": Anonymize<Ien6q0lasi0m7i>;
    "transfer_all": Anonymize<I7dgmo7im9hljo>;
    "force_unreserve": Anonymize<Iargojp1sv9icj>;
    "upgrade_accounts": Anonymize<Ibmr18suc9ikh9>;
    "force_set_balance": Anonymize<Ie0io91hk7pejj>;
}>;
export type Ien6q0lasi0m7i = {
    dest: MultiAddress;
    value: bigint;
};
export type Icacgruoo9j3r2 = {
    source: MultiAddress;
    dest: MultiAddress;
    value: bigint;
};
export type I7dgmo7im9hljo = {
    dest: MultiAddress;
    keep_alive: boolean;
};
export type Iargojp1sv9icj = {
    who: MultiAddress;
    amount: bigint;
};
export type Ibmr18suc9ikh9 = {
    who: Anonymize<Ia2lhg7l2hilo3>;
};
export type Ie0io91hk7pejj = {
    who: MultiAddress;
    new_free: bigint;
};
export type StakingPalletCall = Enum<{
    type: "bond";
    value: Anonymize<I9f7ms9viml8of>;
} | {
    type: "bond_extra";
    value: Anonymize<I564va64vtidbq>;
} | {
    type: "unbond";
    value: Anonymize<Ie5v6njpckr05b>;
} | {
    type: "withdraw_unbonded";
    value: Anonymize<I328av3j0bgmjb>;
} | {
    type: "validate";
    value: Anonymize<I4tuqm9ato907i>;
} | {
    type: "nominate";
    value: Anonymize<I5n9nf1mhg26dt>;
} | {
    type: "chill";
    value: undefined;
} | {
    type: "set_payee";
    value: Anonymize<Ida5hg7geddnc7>;
} | {
    type: "set_controller";
    value: undefined;
} | {
    type: "set_validator_count";
    value: Anonymize<I3vh014cqgmrfd>;
} | {
    type: "increase_validator_count";
    value: Anonymize<Ifhs60omlhvt3>;
} | {
    type: "scale_validator_count";
    value: Anonymize<If34udpd5e57vi>;
} | {
    type: "force_no_eras";
    value: undefined;
} | {
    type: "force_new_era";
    value: undefined;
} | {
    type: "set_invulnerables";
    value: Anonymize<I39t01nnod9109>;
} | {
    type: "force_unstake";
    value: Anonymize<Ie5vbnd9198quk>;
} | {
    type: "force_new_era_always";
    value: undefined;
} | {
    type: "cancel_deferred_slash";
    value: Anonymize<I3h6murn8bd4v5>;
} | {
    type: "payout_stakers";
    value: Anonymize<I6k6jf8ncesuu3>;
} | {
    type: "rebond";
    value: Anonymize<Ie5v6njpckr05b>;
} | {
    type: "reap_stash";
    value: Anonymize<Ie5vbnd9198quk>;
} | {
    type: "kick";
    value: Anonymize<I2j5nkj9u94qun>;
} | {
    type: "set_staking_configs";
    value: Anonymize<I9nfsuc9smbmvv>;
} | {
    type: "chill_other";
    value: Anonymize<I3v6ks33uluhnj>;
} | {
    type: "force_apply_min_commission";
    value: Anonymize<I5ont0141q9ss5>;
} | {
    type: "set_min_commission";
    value: Anonymize<I3vh014cqgmrfd>;
}>;
export declare const StakingPalletCall: GetEnum<StakingPalletCall>;
export type I9f7ms9viml8of = {
    value: bigint;
    payee: StakingRewardDestination;
};
export type I564va64vtidbq = {
    max_additional: bigint;
};
export type I328av3j0bgmjb = {
    num_slashing_spans: number;
};
export type I4tuqm9ato907i = {
    prefs: Anonymize<I9o7ssi9vmhmgr>;
};
export type I5n9nf1mhg26dt = {
    targets: Anonymize<I65ih42boctoq4>;
};
export type I65ih42boctoq4 = Array<MultiAddress>;
export type Ida5hg7geddnc7 = {
    payee: StakingRewardDestination;
};
export type I3vh014cqgmrfd = {
    new: number;
};
export type Ifhs60omlhvt3 = {
    additional: number;
};
export type If34udpd5e57vi = {
    factor: number;
};
export type I39t01nnod9109 = {
    invulnerables: Anonymize<Ia2lhg7l2hilo3>;
};
export type Ie5vbnd9198quk = {
    stash: SS58String;
    num_slashing_spans: number;
};
export type I3h6murn8bd4v5 = {
    era: number;
    slash_indices: Anonymize<Icgljjb6j82uhn>;
};
export type I6k6jf8ncesuu3 = {
    validator_stash: SS58String;
    era: number;
};
export type I2j5nkj9u94qun = {
    who: Anonymize<I65ih42boctoq4>;
};
export type I9nfsuc9smbmvv = {
    min_nominator_bond: StakingPalletConfigOp;
    min_validator_bond: StakingPalletConfigOp;
    max_nominator_count: StakingPalletConfigOp1;
    max_validator_count: StakingPalletConfigOp1;
    chill_threshold: StakingPalletConfigOp1;
    min_commission: StakingPalletConfigOp1;
};
export type StakingPalletConfigOp = Enum<{
    type: "Noop";
    value: undefined;
} | {
    type: "Set";
    value: Anonymize<bigint>;
} | {
    type: "Remove";
    value: undefined;
}>;
export declare const StakingPalletConfigOp: GetEnum<StakingPalletConfigOp>;
export type StakingPalletConfigOp1 = Enum<{
    type: "Noop";
    value: undefined;
} | {
    type: "Set";
    value: Anonymize<number>;
} | {
    type: "Remove";
    value: undefined;
}>;
export declare const StakingPalletConfigOp1: GetEnum<StakingPalletConfigOp1>;
export type I3v6ks33uluhnj = {
    controller: SS58String;
};
export type I5ont0141q9ss5 = {
    validator_stash: SS58String;
};
export type I454da453jskvn = AnonymousEnum<{
    "set_keys": Anonymize<Ifu2fv3jk8vbos>;
    "purge_keys": undefined;
}>;
export type Ifu2fv3jk8vbos = {
    keys: Anonymize<I4g61cdhi06s1m>;
    proof: Binary;
};
export type GrandpaPalletCall = Enum<{
    type: "report_equivocation";
    value: Anonymize<I4kjek1q6rj24q>;
} | {
    type: "report_equivocation_unsigned";
    value: Anonymize<I4kjek1q6rj24q>;
} | {
    type: "note_stalled";
    value: Anonymize<I2hviml3snvhhn>;
}>;
export declare const GrandpaPalletCall: GetEnum<GrandpaPalletCall>;
export type I4kjek1q6rj24q = {
    equivocation_proof: Anonymize<I95fr9lj1pb8v8>;
    key_owner_proof: Anonymize<I3ia7aufsoj0l1>;
};
export type I95fr9lj1pb8v8 = {
    set_id: bigint;
    equivocation: GrandpaEquivocation;
};
export type GrandpaEquivocation = Enum<{
    type: "Prevote";
    value: Anonymize<Igd938ojs7e2l>;
} | {
    type: "Precommit";
    value: Anonymize<Igd938ojs7e2l>;
}>;
export declare const GrandpaEquivocation: GetEnum<GrandpaEquivocation>;
export type Igd938ojs7e2l = {
    round_number: bigint;
    identity: Binary;
    first: Anonymize<I8f8rup5807mac>;
    second: Anonymize<I8f8rup5807mac>;
};
export type I8f8rup5807mac = [Anonymize<I11vulp7gu5007>, Binary];
export type I11vulp7gu5007 = {
    target_hash: Binary;
    target_number: number;
};
export type I2hviml3snvhhn = {
    delay: number;
    best_finalized_block_number: number;
};
export type ImOnlinePalletCall = Enum<{
    type: "heartbeat";
    value: Anonymize<Ifgbq9oil78ogk>;
}>;
export declare const ImOnlinePalletCall: GetEnum<ImOnlinePalletCall>;
export type Ifgbq9oil78ogk = {
    heartbeat: Anonymize<I7a9s2tcf2ejdv>;
    signature: Binary;
};
export type I7a9s2tcf2ejdv = {
    block_number: number;
    session_index: number;
    authority_index: number;
    validators_len: number;
};
export type Ibiic8ba5o502g = AnonymousEnum<{
    "propose_spend": Anonymize<I5c883qnnqciv8>;
    "reject_proposal": Anonymize<Icm9m0qeemu66d>;
    "approve_proposal": Anonymize<Icm9m0qeemu66d>;
    "spend_local": Anonymize<Idpn74s0i9cdvp>;
    "remove_approval": Anonymize<Icm9m0qeemu66d>;
    "spend": Anonymize<I815t7ta25e227>;
    "payout": Anonymize<I666bl2fqjkejo>;
    "check_status": Anonymize<I666bl2fqjkejo>;
    "void_spend": Anonymize<I666bl2fqjkejo>;
}>;
export type I5c883qnnqciv8 = {
    value: bigint;
    beneficiary: MultiAddress;
};
export type Icm9m0qeemu66d = {
    proposal_id: number;
};
export type Idpn74s0i9cdvp = {
    amount: bigint;
    beneficiary: MultiAddress;
};
export type I815t7ta25e227 = {
    asset_kind: Anonymize<I32r9skkupsthv>;
    amount: bigint;
    beneficiary: XcmVersionedMultiLocation;
    valid_from: Anonymize<I4arjljr6dpflb>;
};
export type ConvictionVotingPalletCall = Enum<{
    type: "vote";
    value: Anonymize<Idnsr2pndm36h0>;
} | {
    type: "delegate";
    value: Anonymize<Id7ut33dljf52c>;
} | {
    type: "undelegate";
    value: Anonymize<I8steo882k7qns>;
} | {
    type: "unlock";
    value: Anonymize<I1vc8h4t228bot>;
} | {
    type: "remove_vote";
    value: Anonymize<I5f178ab6b89t3>;
} | {
    type: "remove_other_vote";
    value: Anonymize<I5fak1u82ohqtm>;
}>;
export declare const ConvictionVotingPalletCall: GetEnum<ConvictionVotingPalletCall>;
export type Idnsr2pndm36h0 = {
    poll_index: number;
    vote: ConvictionVotingVoteAccountVote;
};
export type Id7ut33dljf52c = {
    class: number;
    to: MultiAddress;
    conviction: VotingConviction;
    balance: bigint;
};
export type I8steo882k7qns = {
    class: number;
};
export type I1vc8h4t228bot = {
    class: number;
    target: MultiAddress;
};
export type I5f178ab6b89t3 = {
    class: Anonymize<I4arjljr6dpflb>;
    index: number;
};
export type I5fak1u82ohqtm = {
    target: MultiAddress;
    class: number;
    index: number;
};
export type ReferendaPalletCall = Enum<{
    type: "submit";
    value: Anonymize<I86t0cca08a1h1>;
} | {
    type: "place_decision_deposit";
    value: Anonymize<I666bl2fqjkejo>;
} | {
    type: "refund_decision_deposit";
    value: Anonymize<I666bl2fqjkejo>;
} | {
    type: "cancel";
    value: Anonymize<I666bl2fqjkejo>;
} | {
    type: "kill";
    value: Anonymize<I666bl2fqjkejo>;
} | {
    type: "nudge_referendum";
    value: Anonymize<I666bl2fqjkejo>;
} | {
    type: "one_fewer_deciding";
    value: Anonymize<Icbio0e1f0034b>;
} | {
    type: "refund_submission_deposit";
    value: Anonymize<I666bl2fqjkejo>;
} | {
    type: "set_metadata";
    value: Anonymize<Ifml0k0sf0mu2g>;
}>;
export declare const ReferendaPalletCall: GetEnum<ReferendaPalletCall>;
export type I86t0cca08a1h1 = {
    proposal_origin: PolkadotRuntimeOriginCaller;
    proposal: PreimagesBounded;
    enactment_moment: TraitsScheduleDispatchTime;
};
export type Icbio0e1f0034b = {
    track: number;
};
export type Ifml0k0sf0mu2g = {
    index: number;
    maybe_hash: Anonymize<I17k3ujudqd5df>;
};
export type I51p8lm6kqdnho = AnonymousEnum<{
    "whitelist_call": Anonymize<I8413rb6im3iko>;
    "remove_whitelisted_call": Anonymize<I8413rb6im3iko>;
    "dispatch_whitelisted_call": Anonymize<Id3s9pakjjc472>;
    "dispatch_whitelisted_call_with_preimage": Anonymize<Idf7eras2rn4rj>;
}>;
export type Id3s9pakjjc472 = {
    call_hash: Binary;
    call_encoded_len: number;
    call_weight_witness: Anonymize<I4q39t5hn830vp>;
};
export type Idf7eras2rn4rj = {
    call: Anonymize<I8e6un4uk1q07c>;
};
export type ClaimsPalletCall = Enum<{
    type: "claim";
    value: Anonymize<I1u3s4gbjnre15>;
} | {
    type: "mint_claim";
    value: Anonymize<I20qiajmn4c5d4>;
} | {
    type: "claim_attest";
    value: Anonymize<Ie3aplba76d794>;
} | {
    type: "attest";
    value: Anonymize<I1ntko0oih7v1a>;
} | {
    type: "move_claim";
    value: Anonymize<I193pigt6gtjff>;
}>;
export declare const ClaimsPalletCall: GetEnum<ClaimsPalletCall>;
export type I1u3s4gbjnre15 = {
    dest: SS58String;
    ethereum_signature: Binary;
};
export type I20qiajmn4c5d4 = {
    who: Binary;
    value: bigint;
    vesting_schedule: Anonymize<I70kqehrkegc98>;
    statement: Anonymize<I6rcr4im2g3gv9>;
};
export type I70kqehrkegc98 = Anonymize<I2phecamkn3pej> | undefined;
export type I6rcr4im2g3gv9 = ClaimsStatementKind | undefined;
export type Ie3aplba76d794 = {
    dest: SS58String;
    ethereum_signature: Binary;
    statement: Binary;
};
export type I1ntko0oih7v1a = {
    statement: Binary;
};
export type I193pigt6gtjff = {
    old: Binary;
    new: Binary;
    maybe_preclaim: Anonymize<Ihfphjolmsqq1>;
};
export type VestingPalletCall = Enum<{
    type: "vest";
    value: undefined;
} | {
    type: "vest_other";
    value: Anonymize<I29er5j74l8bu>;
} | {
    type: "vested_transfer";
    value: Anonymize<I9l9kkok4o3ekh>;
} | {
    type: "force_vested_transfer";
    value: Anonymize<I50ve0bbda0j1r>;
} | {
    type: "merge_schedules";
    value: Anonymize<Ict9ivhr2c5hv0>;
}>;
export declare const VestingPalletCall: GetEnum<VestingPalletCall>;
export type I29er5j74l8bu = {
    target: MultiAddress;
};
export type I9l9kkok4o3ekh = {
    target: MultiAddress;
    schedule: Anonymize<I4aro1m78pdrtt>;
};
export type I50ve0bbda0j1r = {
    source: MultiAddress;
    target: MultiAddress;
    schedule: Anonymize<I4aro1m78pdrtt>;
};
export type Ict9ivhr2c5hv0 = {
    schedule1_index: number;
    schedule2_index: number;
};
export type Iap9gdffi2u6nu = AnonymousEnum<{
    "batch": Anonymize<Id8ilk50mukg0o>;
    "as_derivative": Anonymize<Ie36meht90lrma>;
    "batch_all": Anonymize<Id8ilk50mukg0o>;
    "dispatch_as": Anonymize<Ibb7qiar2nh5rh>;
    "force_batch": Anonymize<Id8ilk50mukg0o>;
    "with_weight": Anonymize<I6c37kkkbmesra>;
}>;
export type Id8ilk50mukg0o = {
    calls: Anonymize<I1bfn7sbvfvk3t>;
};
export type I1bfn7sbvfvk3t = Array<Anonymize<I8e6un4uk1q07c>>;
export type Ie36meht90lrma = {
    index: number;
    call: Anonymize<I8e6un4uk1q07c>;
};
export type Ibb7qiar2nh5rh = {
    as_origin: PolkadotRuntimeOriginCaller;
    call: Anonymize<I8e6un4uk1q07c>;
};
export type I6c37kkkbmesra = {
    call: Anonymize<I8e6un4uk1q07c>;
    weight: Anonymize<I4q39t5hn830vp>;
};
export type IdentityPalletCall = Enum<{
    type: "add_registrar";
    value: Anonymize<Ibsu2pfvipmui6>;
} | {
    type: "set_identity";
    value: Anonymize<I621gpns74tp1f>;
} | {
    type: "set_subs";
    value: Anonymize<I5100vdjbepcoj>;
} | {
    type: "clear_identity";
    value: undefined;
} | {
    type: "request_judgement";
    value: Anonymize<I9l2s4klu0831o>;
} | {
    type: "cancel_request";
    value: Anonymize<I2ctrt5nqb8o7c>;
} | {
    type: "set_fee";
    value: Anonymize<I711qahikocb1c>;
} | {
    type: "set_account_id";
    value: Anonymize<Idge7gk9m5car0>;
} | {
    type: "set_fields";
    value: Anonymize<Id6gojh30v9ib2>;
} | {
    type: "provide_judgement";
    value: Anonymize<I2g5s5rvm0mfuf>;
} | {
    type: "kill_identity";
    value: Anonymize<I29er5j74l8bu>;
} | {
    type: "add_sub";
    value: Anonymize<Iclf5v4qsadc12>;
} | {
    type: "rename_sub";
    value: Anonymize<Iclf5v4qsadc12>;
} | {
    type: "remove_sub";
    value: Anonymize<Ifcc5t6ed1elfd>;
} | {
    type: "quit_sub";
    value: undefined;
}>;
export declare const IdentityPalletCall: GetEnum<IdentityPalletCall>;
export type Ibsu2pfvipmui6 = {
    account: MultiAddress;
};
export type I621gpns74tp1f = {
    info: Anonymize<I939m6d6t3dsgm>;
};
export type I5100vdjbepcoj = {
    subs: Anonymize<I47e5e4dh41s5v>;
};
export type I47e5e4dh41s5v = Array<Anonymize<Ib22937a5d3pt0>>;
export type I9l2s4klu0831o = {
    reg_index: number;
    max_fee: bigint;
};
export type I2ctrt5nqb8o7c = {
    reg_index: number;
};
export type I711qahikocb1c = {
    index: number;
    fee: bigint;
};
export type Id6gojh30v9ib2 = {
    index: number;
    fields: bigint;
};
export type I2g5s5rvm0mfuf = {
    reg_index: number;
    target: MultiAddress;
    judgement: IdentityJudgement;
    identity: Binary;
};
export type Iclf5v4qsadc12 = {
    sub: MultiAddress;
    data: IdentityTypesData;
};
export type Ifcc5t6ed1elfd = {
    sub: MultiAddress;
};
export type Idedbf4rqpdmri = AnonymousEnum<{
    "proxy": Anonymize<I55q6ritdd2v83>;
    "add_proxy": Anonymize<Iaaog12m0bl04j>;
    "remove_proxy": Anonymize<Iaaog12m0bl04j>;
    "remove_proxies": undefined;
    "create_pure": Anonymize<I6l2ag419uso4i>;
    "kill_pure": Anonymize<I7304brn0jssvr>;
    "announce": Anonymize<Id3bpmvju2iqi5>;
    "remove_announcement": Anonymize<Id3bpmvju2iqi5>;
    "reject_announcement": Anonymize<Ietdab69eu3c4e>;
    "proxy_announced": Anonymize<Ic91pvvaf9eh9k>;
}>;
export type I55q6ritdd2v83 = {
    real: MultiAddress;
    force_proxy_type: Anonymize<Idrnto663vhd97>;
    call: Anonymize<I8e6un4uk1q07c>;
};
export type Idrnto663vhd97 = ProxyType | undefined;
export type Iaaog12m0bl04j = {
    delegate: MultiAddress;
    proxy_type: ProxyType;
    delay: number;
};
export type I6l2ag419uso4i = {
    proxy_type: ProxyType;
    delay: number;
    index: number;
};
export type I7304brn0jssvr = {
    spawner: MultiAddress;
    proxy_type: ProxyType;
    index: number;
    height: number;
    ext_index: number;
};
export type Id3bpmvju2iqi5 = {
    real: MultiAddress;
    call_hash: Binary;
};
export type Ietdab69eu3c4e = {
    delegate: MultiAddress;
    call_hash: Binary;
};
export type Ic91pvvaf9eh9k = {
    delegate: MultiAddress;
    real: MultiAddress;
    force_proxy_type: Anonymize<Idrnto663vhd97>;
    call: Anonymize<I8e6un4uk1q07c>;
};
export type Idd2oimlrnr76q = AnonymousEnum<{
    "as_multi_threshold_1": Anonymize<I9qeq6jurh88f2>;
    "as_multi": Anonymize<I8aql6ho3v5akd>;
    "approve_as_multi": Anonymize<I349bg0i7n8ohu>;
    "cancel_as_multi": Anonymize<I8plicv234mqe5>;
}>;
export type I9qeq6jurh88f2 = {
    other_signatories: Anonymize<Ia2lhg7l2hilo3>;
    call: Anonymize<I8e6un4uk1q07c>;
};
export type I8aql6ho3v5akd = {
    threshold: number;
    other_signatories: Anonymize<Ia2lhg7l2hilo3>;
    maybe_timepoint: Anonymize<I95jfd8j5cr5eh>;
    call: Anonymize<I8e6un4uk1q07c>;
    max_weight: Anonymize<I4q39t5hn830vp>;
};
export type I95jfd8j5cr5eh = Anonymize<Itvprrpb0nm3o> | undefined;
export type I349bg0i7n8ohu = {
    threshold: number;
    other_signatories: Anonymize<Ia2lhg7l2hilo3>;
    maybe_timepoint: Anonymize<I95jfd8j5cr5eh>;
    call_hash: Binary;
    max_weight: Anonymize<I4q39t5hn830vp>;
};
export type I8plicv234mqe5 = {
    threshold: number;
    other_signatories: Anonymize<Ia2lhg7l2hilo3>;
    timepoint: Anonymize<Itvprrpb0nm3o>;
    call_hash: Binary;
};
export type BountiesPalletCall = Enum<{
    type: "propose_bounty";
    value: Anonymize<I2a839vbf5817q>;
} | {
    type: "approve_bounty";
    value: Anonymize<Ia9p5bg6p18r0i>;
} | {
    type: "propose_curator";
    value: Anonymize<I86gbm3avnuhcj>;
} | {
    type: "unassign_curator";
    value: Anonymize<Ia9p5bg6p18r0i>;
} | {
    type: "accept_curator";
    value: Anonymize<Ia9p5bg6p18r0i>;
} | {
    type: "award_bounty";
    value: Anonymize<I9khudebied2et>;
} | {
    type: "claim_bounty";
    value: Anonymize<Ia9p5bg6p18r0i>;
} | {
    type: "close_bounty";
    value: Anonymize<Ia9p5bg6p18r0i>;
} | {
    type: "extend_bounty_expiry";
    value: Anonymize<I90n6nnkpdahrh>;
}>;
export declare const BountiesPalletCall: GetEnum<BountiesPalletCall>;
export type I2a839vbf5817q = {
    value: bigint;
    description: Binary;
};
export type I86gbm3avnuhcj = {
    bounty_id: number;
    curator: MultiAddress;
    fee: bigint;
};
export type I9khudebied2et = {
    bounty_id: number;
    beneficiary: MultiAddress;
};
export type I90n6nnkpdahrh = {
    bounty_id: number;
    remark: Binary;
};
export type ChildBountiesPalletCall = Enum<{
    type: "add_child_bounty";
    value: Anonymize<I8mk5kjgn02hi8>;
} | {
    type: "propose_curator";
    value: Anonymize<I113qogfj9ii7a>;
} | {
    type: "accept_curator";
    value: Anonymize<I2gr10p66od9ch>;
} | {
    type: "unassign_curator";
    value: Anonymize<I2gr10p66od9ch>;
} | {
    type: "award_child_bounty";
    value: Anonymize<I6okbrc1o6b331>;
} | {
    type: "claim_child_bounty";
    value: Anonymize<I2gr10p66od9ch>;
} | {
    type: "close_child_bounty";
    value: Anonymize<I2gr10p66od9ch>;
}>;
export declare const ChildBountiesPalletCall: GetEnum<ChildBountiesPalletCall>;
export type I8mk5kjgn02hi8 = {
    parent_bounty_id: number;
    value: bigint;
    description: Binary;
};
export type I113qogfj9ii7a = {
    parent_bounty_id: number;
    child_bounty_id: number;
    curator: MultiAddress;
    fee: bigint;
};
export type I2gr10p66od9ch = {
    parent_bounty_id: number;
    child_bounty_id: number;
};
export type I6okbrc1o6b331 = {
    parent_bounty_id: number;
    child_bounty_id: number;
    beneficiary: MultiAddress;
};
export type ElectionProviderMultiPhasePalletCall = Enum<{
    type: "submit_unsigned";
    value: Anonymize<I31k9f0jol8ko4>;
} | {
    type: "set_minimum_untrusted_score";
    value: Anonymize<I80q14um2s2ckg>;
} | {
    type: "set_emergency_election_result";
    value: Anonymize<I5qs1t1erfi7u8>;
} | {
    type: "submit";
    value: Anonymize<I9et13knvdvgpb>;
} | {
    type: "governance_fallback";
    value: Anonymize<Ifsme8miqq9006>;
}>;
export declare const ElectionProviderMultiPhasePalletCall: GetEnum<ElectionProviderMultiPhasePalletCall>;
export type I31k9f0jol8ko4 = {
    raw_solution: Anonymize<I7je4n92ump862>;
    witness: Anonymize<Iasd2iat48n080>;
};
export type I80q14um2s2ckg = {
    maybe_next_score: Anonymize<Iaebc5kcl654ln>;
};
export type Iaebc5kcl654ln = Anonymize<I8s6n43okuj2b1> | undefined;
export type I5qs1t1erfi7u8 = {
    supports: Anonymize<I4bboqsv44evel>;
};
export type I9et13knvdvgpb = {
    raw_solution: Anonymize<I7je4n92ump862>;
};
export type Ifsme8miqq9006 = {
    maybe_max_voters: Anonymize<I4arjljr6dpflb>;
    maybe_max_targets: Anonymize<I4arjljr6dpflb>;
};
export type BagsListPalletCall = Enum<{
    type: "rebag";
    value: Anonymize<Iqk00vc9d6173>;
} | {
    type: "put_in_front_of";
    value: Anonymize<Idg844jjtqnc9b>;
} | {
    type: "put_in_front_of_other";
    value: Anonymize<Ic87kbtabpr82b>;
}>;
export declare const BagsListPalletCall: GetEnum<BagsListPalletCall>;
export type Iqk00vc9d6173 = {
    dislocated: MultiAddress;
};
export type Idg844jjtqnc9b = {
    lighter: MultiAddress;
};
export type Ic87kbtabpr82b = {
    heavier: MultiAddress;
    lighter: MultiAddress;
};
export type I29f4027kh5dho = AnonymousEnum<{
    "join": Anonymize<Ieg1oc56mamrl5>;
    "bond_extra": Anonymize<Ifi2b6p41bfb97>;
    "claim_payout": undefined;
    "unbond": Anonymize<Itveli0chegtk>;
    "pool_withdraw_unbonded": Anonymize<I36uoc8t9liv80>;
    "withdraw_unbonded": Anonymize<I1u21ookp1djj3>;
    "create": Anonymize<If5k9orpn9fi43>;
    "create_with_pool_id": Anonymize<I1hlpf8ergrg8k>;
    "nominate": Anonymize<I47a2tsd2o2b1c>;
    "set_state": Anonymize<Ibat0jog71khv5>;
    "set_metadata": Anonymize<I4ihj26hl75e5p>;
    "set_configs": Anonymize<I2rqmn40aam5hg>;
    "update_roles": Anonymize<I3cvu4kn8n81uv>;
    "chill": Anonymize<I931cottvong90>;
    "bond_extra_other": Anonymize<I6l7t90ftdbsr6>;
    "set_claim_permission": Anonymize<Icbgkt7i4ps8kc>;
    "claim_payout_other": Anonymize<I40s11r8nagn2g>;
    "set_commission": Anonymize<I6bjj87fr5g9nl>;
    "set_commission_max": Anonymize<I8cbluptqo8kbp>;
    "set_commission_change_rate": Anonymize<I81cc4plffa1dm>;
    "claim_commission": Anonymize<I931cottvong90>;
    "adjust_pool_deposit": Anonymize<I931cottvong90>;
}>;
export type Ifi2b6p41bfb97 = {
    extra: NominationPoolsBondExtra;
};
export type NominationPoolsBondExtra = Enum<{
    type: "FreeBalance";
    value: Anonymize<bigint>;
} | {
    type: "Rewards";
    value: undefined;
}>;
export declare const NominationPoolsBondExtra: GetEnum<NominationPoolsBondExtra>;
export type Itveli0chegtk = {
    member_account: MultiAddress;
    unbonding_points: bigint;
};
export type I36uoc8t9liv80 = {
    pool_id: number;
    num_slashing_spans: number;
};
export type I1u21ookp1djj3 = {
    member_account: MultiAddress;
    num_slashing_spans: number;
};
export type If5k9orpn9fi43 = {
    amount: bigint;
    root: MultiAddress;
    nominator: MultiAddress;
    bouncer: MultiAddress;
};
export type I1hlpf8ergrg8k = {
    amount: bigint;
    root: MultiAddress;
    nominator: MultiAddress;
    bouncer: MultiAddress;
    pool_id: number;
};
export type I47a2tsd2o2b1c = {
    pool_id: number;
    validators: Anonymize<Ia2lhg7l2hilo3>;
};
export type Ibat0jog71khv5 = {
    pool_id: number;
    state: NominationPoolsPoolState;
};
export type I4ihj26hl75e5p = {
    pool_id: number;
    metadata: Binary;
};
export type I2rqmn40aam5hg = {
    min_join_bond: StakingPalletConfigOp;
    min_create_bond: StakingPalletConfigOp;
    max_pools: StakingPalletConfigOp1;
    max_members: StakingPalletConfigOp1;
    max_members_per_pool: StakingPalletConfigOp1;
    global_max_commission: StakingPalletConfigOp1;
};
export type I3cvu4kn8n81uv = {
    pool_id: number;
    new_root: NominationPoolsConfigOp;
    new_nominator: NominationPoolsConfigOp;
    new_bouncer: NominationPoolsConfigOp;
};
export type NominationPoolsConfigOp = Enum<{
    type: "Noop";
    value: undefined;
} | {
    type: "Set";
    value: Anonymize<SS58String>;
} | {
    type: "Remove";
    value: undefined;
}>;
export declare const NominationPoolsConfigOp: GetEnum<NominationPoolsConfigOp>;
export type I6l7t90ftdbsr6 = {
    member: MultiAddress;
    extra: NominationPoolsBondExtra;
};
export type Icbgkt7i4ps8kc = {
    permission: NominationPoolsClaimPermission;
};
export type I40s11r8nagn2g = {
    other: SS58String;
};
export type I6bjj87fr5g9nl = {
    pool_id: number;
    new_commission: Anonymize<Ie8iutm7u02lmj>;
};
export type FastUnstakePalletCall = Enum<{
    type: "register_fast_unstake";
    value: undefined;
} | {
    type: "deregister";
    value: undefined;
} | {
    type: "control";
    value: Anonymize<I9j0ul7nh7b8jv>;
}>;
export declare const FastUnstakePalletCall: GetEnum<FastUnstakePalletCall>;
export type I9j0ul7nh7b8jv = {
    eras_to_check: number;
};
export type ParachainsConfigurationPalletCall = Enum<{
    type: "set_validation_upgrade_cooldown";
    value: Anonymize<I3vh014cqgmrfd>;
} | {
    type: "set_validation_upgrade_delay";
    value: Anonymize<I3vh014cqgmrfd>;
} | {
    type: "set_code_retention_period";
    value: Anonymize<I3vh014cqgmrfd>;
} | {
    type: "set_max_code_size";
    value: Anonymize<I3vh014cqgmrfd>;
} | {
    type: "set_max_pov_size";
    value: Anonymize<I3vh014cqgmrfd>;
} | {
    type: "set_max_head_data_size";
    value: Anonymize<I3vh014cqgmrfd>;
} | {
    type: "set_on_demand_cores";
    value: Anonymize<I3vh014cqgmrfd>;
} | {
    type: "set_on_demand_retries";
    value: Anonymize<I3vh014cqgmrfd>;
} | {
    type: "set_group_rotation_frequency";
    value: Anonymize<I3vh014cqgmrfd>;
} | {
    type: "set_paras_availability_period";
    value: Anonymize<I3vh014cqgmrfd>;
} | {
    type: "set_scheduling_lookahead";
    value: Anonymize<I3vh014cqgmrfd>;
} | {
    type: "set_max_validators_per_core";
    value: Anonymize<Id581arok0b1nj>;
} | {
    type: "set_max_validators";
    value: Anonymize<Id581arok0b1nj>;
} | {
    type: "set_dispute_period";
    value: Anonymize<I3vh014cqgmrfd>;
} | {
    type: "set_dispute_post_conclusion_acceptance_period";
    value: Anonymize<I3vh014cqgmrfd>;
} | {
    type: "set_no_show_slots";
    value: Anonymize<I3vh014cqgmrfd>;
} | {
    type: "set_n_delay_tranches";
    value: Anonymize<I3vh014cqgmrfd>;
} | {
    type: "set_zeroth_delay_tranche_width";
    value: Anonymize<I3vh014cqgmrfd>;
} | {
    type: "set_needed_approvals";
    value: Anonymize<I3vh014cqgmrfd>;
} | {
    type: "set_relay_vrf_modulo_samples";
    value: Anonymize<I3vh014cqgmrfd>;
} | {
    type: "set_max_upward_queue_count";
    value: Anonymize<I3vh014cqgmrfd>;
} | {
    type: "set_max_upward_queue_size";
    value: Anonymize<I3vh014cqgmrfd>;
} | {
    type: "set_max_downward_message_size";
    value: Anonymize<I3vh014cqgmrfd>;
} | {
    type: "set_max_upward_message_size";
    value: Anonymize<I3vh014cqgmrfd>;
} | {
    type: "set_max_upward_message_num_per_candidate";
    value: Anonymize<I3vh014cqgmrfd>;
} | {
    type: "set_hrmp_open_request_ttl";
    value: Anonymize<I3vh014cqgmrfd>;
} | {
    type: "set_hrmp_sender_deposit";
    value: Anonymize<I9jsikd1ghmc7l>;
} | {
    type: "set_hrmp_recipient_deposit";
    value: Anonymize<I9jsikd1ghmc7l>;
} | {
    type: "set_hrmp_channel_max_capacity";
    value: Anonymize<I3vh014cqgmrfd>;
} | {
    type: "set_hrmp_channel_max_total_size";
    value: Anonymize<I3vh014cqgmrfd>;
} | {
    type: "set_hrmp_max_parachain_inbound_channels";
    value: Anonymize<I3vh014cqgmrfd>;
} | {
    type: "set_hrmp_channel_max_message_size";
    value: Anonymize<I3vh014cqgmrfd>;
} | {
    type: "set_hrmp_max_parachain_outbound_channels";
    value: Anonymize<I3vh014cqgmrfd>;
} | {
    type: "set_hrmp_max_message_num_per_candidate";
    value: Anonymize<I3vh014cqgmrfd>;
} | {
    type: "set_pvf_voting_ttl";
    value: Anonymize<I3vh014cqgmrfd>;
} | {
    type: "set_minimum_validation_upgrade_delay";
    value: Anonymize<I3vh014cqgmrfd>;
} | {
    type: "set_bypass_consistency_check";
    value: Anonymize<I2f6mha3v4ooda>;
} | {
    type: "set_async_backing_params";
    value: Anonymize<Iasqjdhasi408s>;
} | {
    type: "set_executor_params";
    value: Anonymize<Iehb5cb6rp4k2p>;
} | {
    type: "set_on_demand_base_fee";
    value: Anonymize<I9jsikd1ghmc7l>;
} | {
    type: "set_on_demand_fee_variability";
    value: Anonymize<I3vh014cqgmrfd>;
} | {
    type: "set_on_demand_queue_max_size";
    value: Anonymize<I3vh014cqgmrfd>;
} | {
    type: "set_on_demand_target_queue_utilization";
    value: Anonymize<I3vh014cqgmrfd>;
} | {
    type: "set_on_demand_ttl";
    value: Anonymize<I3vh014cqgmrfd>;
} | {
    type: "set_minimum_backing_votes";
    value: Anonymize<I3vh014cqgmrfd>;
}>;
export declare const ParachainsConfigurationPalletCall: GetEnum<ParachainsConfigurationPalletCall>;
export type Id581arok0b1nj = {
    new: Anonymize<I4arjljr6dpflb>;
};
export type I9jsikd1ghmc7l = {
    new: bigint;
};
export type I2f6mha3v4ooda = {
    new: boolean;
};
export type Iasqjdhasi408s = {
    new: Anonymize<Iavuvfkop6318c>;
};
export type Iehb5cb6rp4k2p = {
    new: Anonymize<I6sbufrhmgqdb6>;
};
export type ParachainsParasInherentPalletCall = Enum<{
    type: "enter";
    value: Anonymize<I6uj8ujct0o4v7>;
}>;
export declare const ParachainsParasInherentPalletCall: GetEnum<ParachainsParasInherentPalletCall>;
export type I6uj8ujct0o4v7 = {
    data: Anonymize<Ieal73d05pk7dg>;
};
export type Ieal73d05pk7dg = {
    bitfields: Anonymize<I429k1bjdoi8o7>;
    backed_candidates: Anonymize<I2dmlgatlidtsb>;
    disputes: Anonymize<I65nq8pomrmfij>;
    parent_header: Anonymize<I6t1nedlt7mobn>;
};
export type I429k1bjdoi8o7 = Array<Anonymize<Ie6rq4t789eicm>>;
export type Ie6rq4t789eicm = {
    payload: {
        bytes: Uint8Array;
        bitsLen: number;
    };
    validator_index: number;
    signature: Binary;
};
export type I2dmlgatlidtsb = Array<Anonymize<I2f1tpeknmk3ja>>;
export type I2f1tpeknmk3ja = {
    candidate: Anonymize<Iedmhjqij0hr8g>;
    validity_votes: Anonymize<Ibq6bocu5i9pjs>;
    validator_indices: {
        bytes: Uint8Array;
        bitsLen: number;
    };
};
export type Iedmhjqij0hr8g = {
    descriptor: Anonymize<Ib2u20s6roco9i>;
    commitments: Anonymize<Ic1d4u2opv3fst>;
};
export type Ibq6bocu5i9pjs = Array<PolkadotPrimitivesV5ValidityAttestation>;
export type ParachainsParasPalletCall = Enum<{
    type: "force_set_current_code";
    value: Anonymize<I1k3urvkqqshbc>;
} | {
    type: "force_set_current_head";
    value: Anonymize<I2ff0ffsh15vej>;
} | {
    type: "force_schedule_code_upgrade";
    value: Anonymize<I1orfg86bkg123>;
} | {
    type: "force_note_new_head";
    value: Anonymize<I2ff0ffsh15vej>;
} | {
    type: "force_queue_action";
    value: Anonymize<Iaus4cb3drhu9q>;
} | {
    type: "add_trusted_validation_code";
    value: Anonymize<Ivnsat10lv9d6>;
} | {
    type: "poke_unused_validation_code";
    value: Anonymize<Ifqm1da2k7es4d>;
} | {
    type: "include_pvf_check_statement";
    value: Anonymize<I4aouqiv2fh67c>;
} | {
    type: "force_set_most_recent_context";
    value: Anonymize<I9tmok5kceg2bg>;
}>;
export declare const ParachainsParasPalletCall: GetEnum<ParachainsParasPalletCall>;
export type I1k3urvkqqshbc = {
    para: number;
    new_code: Binary;
};
export type I2ff0ffsh15vej = {
    para: number;
    new_head: Binary;
};
export type I1orfg86bkg123 = {
    para: number;
    new_code: Binary;
    relay_parent_number: number;
};
export type Iaus4cb3drhu9q = {
    para: number;
};
export type Ivnsat10lv9d6 = {
    validation_code: Binary;
};
export type Ifqm1da2k7es4d = {
    validation_code_hash: Binary;
};
export type I4aouqiv2fh67c = {
    stmt: Anonymize<I3h1ccufdk38ej>;
    signature: Binary;
};
export type I3h1ccufdk38ej = {
    accept: boolean;
    subject: Binary;
    session_index: number;
    validator_index: number;
};
export type I9tmok5kceg2bg = {
    para: number;
    context: number;
};
export type ParachainsInitializerPalletCall = Enum<{
    type: "force_approve";
    value: Anonymize<I85icj2qbjeqbe>;
}>;
export declare const ParachainsInitializerPalletCall: GetEnum<ParachainsInitializerPalletCall>;
export type I85icj2qbjeqbe = {
    up_to: number;
};
export type PolkadotRuntimeParachainsHrmpPalletCall = Enum<{
    type: "hrmp_init_open_channel";
    value: Anonymize<Ibuhbp68e6tkct>;
} | {
    type: "hrmp_accept_open_channel";
    value: Anonymize<Idrevppfiubhve>;
} | {
    type: "hrmp_close_channel";
    value: Anonymize<I9s2h36kr71vk9>;
} | {
    type: "force_clean_hrmp";
    value: Anonymize<I4lkbiubo9ogq9>;
} | {
    type: "force_process_hrmp_open";
    value: Anonymize<Id1baei7m8gkhk>;
} | {
    type: "force_process_hrmp_close";
    value: Anonymize<Id1baei7m8gkhk>;
} | {
    type: "hrmp_cancel_open_request";
    value: Anonymize<I96ftepqm4vs7m>;
} | {
    type: "force_open_hrmp_channel";
    value: Anonymize<Ic3430470j4mbv>;
} | {
    type: "establish_system_channel";
    value: Anonymize<I50mrcbubp554e>;
} | {
    type: "poke_channel_deposits";
    value: Anonymize<I50mrcbubp554e>;
}>;
export declare const PolkadotRuntimeParachainsHrmpPalletCall: GetEnum<PolkadotRuntimeParachainsHrmpPalletCall>;
export type Ibuhbp68e6tkct = {
    recipient: number;
    proposed_max_capacity: number;
    proposed_max_message_size: number;
};
export type Idrevppfiubhve = {
    sender: number;
};
export type I9s2h36kr71vk9 = {
    channel_id: Anonymize<I50mrcbubp554e>;
};
export type I4lkbiubo9ogq9 = {
    para: number;
    num_inbound: number;
    num_outbound: number;
};
export type Id1baei7m8gkhk = {
    channels: number;
};
export type I96ftepqm4vs7m = {
    channel_id: Anonymize<I50mrcbubp554e>;
    open_requests: number;
};
export type Ic3430470j4mbv = {
    sender: number;
    recipient: number;
    max_capacity: number;
    max_message_size: number;
};
export type ParachainsDisputesPalletCall = Enum<{
    type: "force_unfreeze";
    value: undefined;
}>;
export declare const ParachainsDisputesPalletCall: GetEnum<ParachainsDisputesPalletCall>;
export type ParachainsDisputesSlashingPalletCall = Enum<{
    type: "report_dispute_lost_unsigned";
    value: Anonymize<I1ur1874hp9ar5>;
}>;
export declare const ParachainsDisputesSlashingPalletCall: GetEnum<ParachainsDisputesSlashingPalletCall>;
export type I1ur1874hp9ar5 = {
    dispute_proof: Anonymize<Iag14tqe65tvpf>;
    key_owner_proof: Anonymize<I3ia7aufsoj0l1>;
};
export type Iag14tqe65tvpf = {
    time_slot: Anonymize<Ib0p1u8q0nho37>;
    kind: PolkadotPrimitivesV5SlashingSlashingOffenceKind;
    validator_index: number;
    validator_id: Binary;
};
export type Ib0p1u8q0nho37 = {
    session_index: number;
    candidate_hash: Binary;
};
export type CommonParasRegistrarPalletCall = Enum<{
    type: "register";
    value: Anonymize<I7mf0sij342109>;
} | {
    type: "force_register";
    value: Anonymize<Ibvirp862qkkup>;
} | {
    type: "deregister";
    value: Anonymize<Ic5b47dj4coa3r>;
} | {
    type: "swap";
    value: Anonymize<Idehabrqi23sc0>;
} | {
    type: "remove_lock";
    value: Anonymize<Iaus4cb3drhu9q>;
} | {
    type: "reserve";
    value: undefined;
} | {
    type: "add_lock";
    value: Anonymize<Iaus4cb3drhu9q>;
} | {
    type: "schedule_code_upgrade";
    value: Anonymize<I1k3urvkqqshbc>;
} | {
    type: "set_current_head";
    value: Anonymize<I2ff0ffsh15vej>;
}>;
export declare const CommonParasRegistrarPalletCall: GetEnum<CommonParasRegistrarPalletCall>;
export type I7mf0sij342109 = {
    id: number;
    genesis_head: Binary;
    validation_code: Binary;
};
export type Ibvirp862qkkup = {
    who: SS58String;
    deposit: bigint;
    id: number;
    genesis_head: Binary;
    validation_code: Binary;
};
export type Ic5b47dj4coa3r = {
    id: number;
};
export type Idehabrqi23sc0 = {
    id: number;
    other: number;
};
export type CommonSlotsPalletCall = Enum<{
    type: "force_lease";
    value: Anonymize<Idfpo6162k0hq>;
} | {
    type: "clear_all_leases";
    value: Anonymize<Iaus4cb3drhu9q>;
} | {
    type: "trigger_onboard";
    value: Anonymize<Iaus4cb3drhu9q>;
}>;
export declare const CommonSlotsPalletCall: GetEnum<CommonSlotsPalletCall>;
export type Idfpo6162k0hq = {
    para: number;
    leaser: SS58String;
    amount: bigint;
    period_begin: number;
    period_count: number;
};
export type CommonAuctionsPalletCall = Enum<{
    type: "new_auction";
    value: Anonymize<I19hvnphoaj44l>;
} | {
    type: "bid";
    value: Anonymize<I1ng31ej27mh4k>;
} | {
    type: "cancel_auction";
    value: undefined;
}>;
export declare const CommonAuctionsPalletCall: GetEnum<CommonAuctionsPalletCall>;
export type I19hvnphoaj44l = {
    duration: number;
    lease_period_index: number;
};
export type I1ng31ej27mh4k = {
    para: number;
    auction_index: number;
    first_slot: number;
    last_slot: number;
    amount: bigint;
};
export type CommonCrowdloanPalletCall = Enum<{
    type: "create";
    value: Anonymize<I3js6c9fubdele>;
} | {
    type: "contribute";
    value: Anonymize<I6n5jj22t7mm7i>;
} | {
    type: "withdraw";
    value: Anonymize<Ia1u3jll6a06ae>;
} | {
    type: "refund";
    value: Anonymize<I666bl2fqjkejo>;
} | {
    type: "dissolve";
    value: Anonymize<I666bl2fqjkejo>;
} | {
    type: "edit";
    value: Anonymize<I3js6c9fubdele>;
} | {
    type: "add_memo";
    value: Anonymize<I7cl9esn1l72m7>;
} | {
    type: "poke";
    value: Anonymize<I666bl2fqjkejo>;
} | {
    type: "contribute_all";
    value: Anonymize<I3k27o64k49es2>;
}>;
export declare const CommonCrowdloanPalletCall: GetEnum<CommonCrowdloanPalletCall>;
export type I3js6c9fubdele = {
    index: number;
    cap: bigint;
    first_period: number;
    last_period: number;
    end: number;
    verifier: Anonymize<I8t18p6mokc3s4>;
};
export type I6n5jj22t7mm7i = {
    index: number;
    value: bigint;
    signature: Anonymize<I7us28h09nc5sv>;
};
export type I7us28h09nc5sv = MultiSignature | undefined;
export type MultiSignature = Enum<{
    type: "Ed25519";
    value: Anonymize<Binary>;
} | {
    type: "Sr25519";
    value: Anonymize<Binary>;
} | {
    type: "Ecdsa";
    value: Anonymize<Binary>;
}>;
export declare const MultiSignature: GetEnum<MultiSignature>;
export type I7cl9esn1l72m7 = {
    index: number;
    memo: Binary;
};
export type I3k27o64k49es2 = {
    index: number;
    signature: Anonymize<I7us28h09nc5sv>;
};
export type XcmPalletCall = Enum<{
    type: "send";
    value: Anonymize<Icvpjofp09bmlh>;
} | {
    type: "teleport_assets";
    value: Anonymize<Ieeis6pj62kiu4>;
} | {
    type: "reserve_transfer_assets";
    value: Anonymize<Ieeis6pj62kiu4>;
} | {
    type: "execute";
    value: Anonymize<I53e0mdinhcvpm>;
} | {
    type: "force_xcm_version";
    value: Anonymize<I732o5n04n5ohg>;
} | {
    type: "force_default_xcm_version";
    value: Anonymize<Ic76kfh5ebqkpl>;
} | {
    type: "force_subscribe_version_notify";
    value: Anonymize<I3pog27ittgi9g>;
} | {
    type: "force_unsubscribe_version_notify";
    value: Anonymize<I3pog27ittgi9g>;
} | {
    type: "limited_reserve_transfer_assets";
    value: Anonymize<Ifcceq8taolrca>;
} | {
    type: "limited_teleport_assets";
    value: Anonymize<Ifcceq8taolrca>;
} | {
    type: "force_suspension";
    value: Anonymize<Ibgm4rnf22lal1>;
}>;
export declare const XcmPalletCall: GetEnum<XcmPalletCall>;
export type Icvpjofp09bmlh = {
    dest: XcmVersionedMultiLocation;
    message: XcmVersionedXcm;
};
export type XcmVersionedXcm = Enum<{
    type: "V2";
    value: Anonymize<I797ibmv93o8n9>;
} | {
    type: "V3";
    value: Anonymize<I8l0577387vghn>;
}>;
export declare const XcmVersionedXcm: GetEnum<XcmVersionedXcm>;
export type I797ibmv93o8n9 = Array<XcmV2Instruction>;
export type XcmV2Instruction = Enum<{
    type: "WithdrawAsset";
    value: Anonymize<Ia3ggl9eghkufh>;
} | {
    type: "ReserveAssetDeposited";
    value: Anonymize<Ia3ggl9eghkufh>;
} | {
    type: "ReceiveTeleportedAsset";
    value: Anonymize<Ia3ggl9eghkufh>;
} | {
    type: "QueryResponse";
    value: Anonymize<I7adp6ofrfskbq>;
} | {
    type: "TransferAsset";
    value: Anonymize<I55b7rvmacg132>;
} | {
    type: "TransferReserveAsset";
    value: Anonymize<I87p6gu1rs00b9>;
} | {
    type: "Transact";
    value: Anonymize<I61kq38r93nm9u>;
} | {
    type: "HrmpNewChannelOpenRequest";
    value: Anonymize<I5uhhrjqfuo4e5>;
} | {
    type: "HrmpChannelAccepted";
    value: Anonymize<Ifij4jam0o7sub>;
} | {
    type: "HrmpChannelClosing";
    value: Anonymize<Ieeb4svd9i8fji>;
} | {
    type: "ClearOrigin";
    value: undefined;
} | {
    type: "DescendOrigin";
    value: Anonymize<XcmV2MultilocationJunctions>;
} | {
    type: "ReportError";
    value: Anonymize<I99o59cf77uo81>;
} | {
    type: "DepositAsset";
    value: Anonymize<I2fdiqplld7l4b>;
} | {
    type: "DepositReserveAsset";
    value: Anonymize<I4e86ltq2coupq>;
} | {
    type: "ExchangeAsset";
    value: Anonymize<I8i9t5akp4s2qr>;
} | {
    type: "InitiateReserveWithdraw";
    value: Anonymize<I3rvvq2i351pp4>;
} | {
    type: "InitiateTeleport";
    value: Anonymize<I2eh04tsbsec6v>;
} | {
    type: "QueryHolding";
    value: Anonymize<Iih6kp60v9gan>;
} | {
    type: "BuyExecution";
    value: Anonymize<I2u6ut68eoldqa>;
} | {
    type: "RefundSurplus";
    value: undefined;
} | {
    type: "SetErrorHandler";
    value: Anonymize<I797ibmv93o8n9>;
} | {
    type: "SetAppendix";
    value: Anonymize<I797ibmv93o8n9>;
} | {
    type: "ClearError";
    value: undefined;
} | {
    type: "ClaimAsset";
    value: Anonymize<I60l7lelr2s5kd>;
} | {
    type: "Trap";
    value: Anonymize<bigint>;
} | {
    type: "SubscribeVersion";
    value: Anonymize<Ido2s48ntevurj>;
} | {
    type: "UnsubscribeVersion";
    value: undefined;
}>;
export declare const XcmV2Instruction: GetEnum<XcmV2Instruction>;
export type I7adp6ofrfskbq = {
    query_id: bigint;
    response: XcmV2Response;
    max_weight: bigint;
};
export type I55b7rvmacg132 = {
    assets: Anonymize<Ia3ggl9eghkufh>;
    beneficiary: Anonymize<Ibki0d249v3ojt>;
};
export type I87p6gu1rs00b9 = {
    assets: Anonymize<Ia3ggl9eghkufh>;
    dest: Anonymize<Ibki0d249v3ojt>;
    xcm: Anonymize<I797ibmv93o8n9>;
};
export type I61kq38r93nm9u = {
    origin_type: XcmV2OriginKind;
    require_weight_at_most: bigint;
    call: Binary;
};
export type I99o59cf77uo81 = {
    query_id: bigint;
    dest: Anonymize<Ibki0d249v3ojt>;
    max_response_weight: bigint;
};
export type I2fdiqplld7l4b = {
    assets: XcmV2MultiAssetFilter;
    max_assets: number;
    beneficiary: Anonymize<Ibki0d249v3ojt>;
};
export type XcmV2MultiAssetFilter = Enum<{
    type: "Definite";
    value: Anonymize<Ia3ggl9eghkufh>;
} | {
    type: "Wild";
    value: Anonymize<XcmV2MultiassetWildMultiAsset>;
}>;
export declare const XcmV2MultiAssetFilter: GetEnum<XcmV2MultiAssetFilter>;
export type XcmV2MultiassetWildMultiAsset = Enum<{
    type: "All";
    value: undefined;
} | {
    type: "AllOf";
    value: Anonymize<I96k6616d81u1u>;
}>;
export declare const XcmV2MultiassetWildMultiAsset: GetEnum<XcmV2MultiassetWildMultiAsset>;
export type I96k6616d81u1u = {
    id: XcmV2MultiassetAssetId;
    fun: XcmV2MultiassetWildFungibility;
};
export type I4e86ltq2coupq = {
    assets: XcmV2MultiAssetFilter;
    max_assets: number;
    dest: Anonymize<Ibki0d249v3ojt>;
    xcm: Anonymize<I797ibmv93o8n9>;
};
export type I8i9t5akp4s2qr = {
    give: XcmV2MultiAssetFilter;
    receive: Anonymize<Ia3ggl9eghkufh>;
};
export type I3rvvq2i351pp4 = {
    assets: XcmV2MultiAssetFilter;
    reserve: Anonymize<Ibki0d249v3ojt>;
    xcm: Anonymize<I797ibmv93o8n9>;
};
export type I2eh04tsbsec6v = {
    assets: XcmV2MultiAssetFilter;
    dest: Anonymize<Ibki0d249v3ojt>;
    xcm: Anonymize<I797ibmv93o8n9>;
};
export type Iih6kp60v9gan = {
    query_id: bigint;
    dest: Anonymize<Ibki0d249v3ojt>;
    assets: XcmV2MultiAssetFilter;
    max_response_weight: bigint;
};
export type I2u6ut68eoldqa = {
    fees: Anonymize<I16mc4mv5bb0qd>;
    weight_limit: XcmV2WeightLimit;
};
export type XcmV2WeightLimit = Enum<{
    type: "Unlimited";
    value: undefined;
} | {
    type: "Limited";
    value: Anonymize<bigint>;
}>;
export declare const XcmV2WeightLimit: GetEnum<XcmV2WeightLimit>;
export type I60l7lelr2s5kd = {
    assets: Anonymize<Ia3ggl9eghkufh>;
    ticket: Anonymize<Ibki0d249v3ojt>;
};
export type Ido2s48ntevurj = {
    query_id: bigint;
    max_response_weight: bigint;
};
export type Ieeis6pj62kiu4 = {
    dest: XcmVersionedMultiLocation;
    beneficiary: XcmVersionedMultiLocation;
    assets: XcmVersionedMultiAssets;
    fee_asset_item: number;
};
export type I53e0mdinhcvpm = {
    message: XcmVersionedXcm1;
    max_weight: Anonymize<I4q39t5hn830vp>;
};
export type XcmVersionedXcm1 = Enum<{
    type: "V2";
    value: Anonymize<I6gdh0i5feh6sm>;
} | {
    type: "V3";
    value: Anonymize<I3f103a4f7tafe>;
}>;
export declare const XcmVersionedXcm1: GetEnum<XcmVersionedXcm1>;
export type I6gdh0i5feh6sm = Array<XcmV2Instruction1>;
export type XcmV2Instruction1 = Enum<{
    type: "WithdrawAsset";
    value: Anonymize<Ia3ggl9eghkufh>;
} | {
    type: "ReserveAssetDeposited";
    value: Anonymize<Ia3ggl9eghkufh>;
} | {
    type: "ReceiveTeleportedAsset";
    value: Anonymize<Ia3ggl9eghkufh>;
} | {
    type: "QueryResponse";
    value: Anonymize<I7adp6ofrfskbq>;
} | {
    type: "TransferAsset";
    value: Anonymize<I55b7rvmacg132>;
} | {
    type: "TransferReserveAsset";
    value: Anonymize<I87p6gu1rs00b9>;
} | {
    type: "Transact";
    value: Anonymize<I61kq38r93nm9u>;
} | {
    type: "HrmpNewChannelOpenRequest";
    value: Anonymize<I5uhhrjqfuo4e5>;
} | {
    type: "HrmpChannelAccepted";
    value: Anonymize<Ifij4jam0o7sub>;
} | {
    type: "HrmpChannelClosing";
    value: Anonymize<Ieeb4svd9i8fji>;
} | {
    type: "ClearOrigin";
    value: undefined;
} | {
    type: "DescendOrigin";
    value: Anonymize<XcmV2MultilocationJunctions>;
} | {
    type: "ReportError";
    value: Anonymize<I99o59cf77uo81>;
} | {
    type: "DepositAsset";
    value: Anonymize<I2fdiqplld7l4b>;
} | {
    type: "DepositReserveAsset";
    value: Anonymize<I4e86ltq2coupq>;
} | {
    type: "ExchangeAsset";
    value: Anonymize<I8i9t5akp4s2qr>;
} | {
    type: "InitiateReserveWithdraw";
    value: Anonymize<I3rvvq2i351pp4>;
} | {
    type: "InitiateTeleport";
    value: Anonymize<I2eh04tsbsec6v>;
} | {
    type: "QueryHolding";
    value: Anonymize<Iih6kp60v9gan>;
} | {
    type: "BuyExecution";
    value: Anonymize<I2u6ut68eoldqa>;
} | {
    type: "RefundSurplus";
    value: undefined;
} | {
    type: "SetErrorHandler";
    value: Anonymize<I6gdh0i5feh6sm>;
} | {
    type: "SetAppendix";
    value: Anonymize<I6gdh0i5feh6sm>;
} | {
    type: "ClearError";
    value: undefined;
} | {
    type: "ClaimAsset";
    value: Anonymize<I60l7lelr2s5kd>;
} | {
    type: "Trap";
    value: Anonymize<bigint>;
} | {
    type: "SubscribeVersion";
    value: Anonymize<Ido2s48ntevurj>;
} | {
    type: "UnsubscribeVersion";
    value: undefined;
}>;
export declare const XcmV2Instruction1: GetEnum<XcmV2Instruction1>;
export type I3f103a4f7tafe = Array<XcmV3Instruction1>;
export type XcmV3Instruction1 = Enum<{
    type: "WithdrawAsset";
    value: Anonymize<Id7mn3j3ge1h6a>;
} | {
    type: "ReserveAssetDeposited";
    value: Anonymize<Id7mn3j3ge1h6a>;
} | {
    type: "ReceiveTeleportedAsset";
    value: Anonymize<Id7mn3j3ge1h6a>;
} | {
    type: "QueryResponse";
    value: Anonymize<I3hin12hf9pma8>;
} | {
    type: "TransferAsset";
    value: Anonymize<Ibseg27e15rt5b>;
} | {
    type: "TransferReserveAsset";
    value: Anonymize<I8nsq83051h7s5>;
} | {
    type: "Transact";
    value: Anonymize<I4sfmje1omkmem>;
} | {
    type: "HrmpNewChannelOpenRequest";
    value: Anonymize<I5uhhrjqfuo4e5>;
} | {
    type: "HrmpChannelAccepted";
    value: Anonymize<Ifij4jam0o7sub>;
} | {
    type: "HrmpChannelClosing";
    value: Anonymize<Ieeb4svd9i8fji>;
} | {
    type: "ClearOrigin";
    value: undefined;
} | {
    type: "DescendOrigin";
    value: Anonymize<XcmV3Junctions>;
} | {
    type: "ReportError";
    value: Anonymize<I40u32g7uv47fo>;
} | {
    type: "DepositAsset";
    value: Anonymize<I92hs9ri8pep98>;
} | {
    type: "DepositReserveAsset";
    value: Anonymize<Ifu4iibn44bata>;
} | {
    type: "ExchangeAsset";
    value: Anonymize<I5v4cm31o1r5t1>;
} | {
    type: "InitiateReserveWithdraw";
    value: Anonymize<Ick8rmedif57q9>;
} | {
    type: "InitiateTeleport";
    value: Anonymize<Ifu4iibn44bata>;
} | {
    type: "ReportHolding";
    value: Anonymize<Icvkurqgno3h7q>;
} | {
    type: "BuyExecution";
    value: Anonymize<I8nq35nm53n6bc>;
} | {
    type: "RefundSurplus";
    value: undefined;
} | {
    type: "SetErrorHandler";
    value: Anonymize<I3f103a4f7tafe>;
} | {
    type: "SetAppendix";
    value: Anonymize<I3f103a4f7tafe>;
} | {
    type: "ClearError";
    value: undefined;
} | {
    type: "ClaimAsset";
    value: Anonymize<I8uojukg6cvq81>;
} | {
    type: "Trap";
    value: Anonymize<bigint>;
} | {
    type: "SubscribeVersion";
    value: Anonymize<Ieprdqqu7ildvr>;
} | {
    type: "UnsubscribeVersion";
    value: undefined;
} | {
    type: "BurnAsset";
    value: Anonymize<Id7mn3j3ge1h6a>;
} | {
    type: "ExpectAsset";
    value: Anonymize<Id7mn3j3ge1h6a>;
} | {
    type: "ExpectOrigin";
    value: Anonymize<I74hapqfd00s9i>;
} | {
    type: "ExpectError";
    value: Anonymize<I8j770n2arfq59>;
} | {
    type: "ExpectTransactStatus";
    value: Anonymize<XcmV3MaybeErrorCode>;
} | {
    type: "QueryPallet";
    value: Anonymize<Ie3fdn0i40ahq2>;
} | {
    type: "ExpectPallet";
    value: Anonymize<Id7mf37dkpgfjs>;
} | {
    type: "ReportTransactStatus";
    value: Anonymize<I40u32g7uv47fo>;
} | {
    type: "ClearTransactStatus";
    value: undefined;
} | {
    type: "UniversalOrigin";
    value: Anonymize<XcmV3Junction>;
} | {
    type: "ExportMessage";
    value: Anonymize<I7uretqff9fvu>;
} | {
    type: "LockAsset";
    value: Anonymize<I5e83tpl0q5jq0>;
} | {
    type: "UnlockAsset";
    value: Anonymize<Iffpr1249pemri>;
} | {
    type: "NoteUnlockable";
    value: Anonymize<I5jls3ar3odglq>;
} | {
    type: "RequestUnlock";
    value: Anonymize<I7cfckcbgdvb8j>;
} | {
    type: "SetFeesMode";
    value: Anonymize<I4nae9rsql8fa7>;
} | {
    type: "SetTopic";
    value: Anonymize<Binary>;
} | {
    type: "ClearTopic";
    value: undefined;
} | {
    type: "AliasOrigin";
    value: Anonymize<I43cmiele6sevi>;
} | {
    type: "UnpaidExecution";
    value: Anonymize<Ifq797dv2t3djd>;
}>;
export declare const XcmV3Instruction1: GetEnum<XcmV3Instruction1>;
export type Ic76kfh5ebqkpl = {
    maybe_xcm_version: Anonymize<I4arjljr6dpflb>;
};
export type I3pog27ittgi9g = {
    location: XcmVersionedMultiLocation;
};
export type Ifcceq8taolrca = {
    dest: XcmVersionedMultiLocation;
    beneficiary: XcmVersionedMultiLocation;
    assets: XcmVersionedMultiAssets;
    fee_asset_item: number;
    weight_limit: XcmV3WeightLimit;
};
export type Ibgm4rnf22lal1 = {
    suspended: boolean;
};
export type MessageQueuePalletCall = Enum<{
    type: "reap_page";
    value: Anonymize<I3f1tq7m3kurig>;
} | {
    type: "execute_overweight";
    value: Anonymize<Ifhnflnkf9f278>;
}>;
export declare const MessageQueuePalletCall: GetEnum<MessageQueuePalletCall>;
export type I3f1tq7m3kurig = {
    message_origin: ParachainsInclusionAggregateMessageOrigin;
    page_index: number;
};
export type Ifhnflnkf9f278 = {
    message_origin: ParachainsInclusionAggregateMessageOrigin;
    page: number;
    index: number;
    weight_limit: Anonymize<I4q39t5hn830vp>;
};
export type I2gv42mnmfo4fm = AnonymousEnum<{
    "create": Anonymize<I16soggnee6qrb>;
    "update": Anonymize<I16soggnee6qrb>;
    "remove": Anonymize<Ifvnf1s3g2lg8u>;
}>;
export type BeefyPalletCall = Enum<{
    type: "report_equivocation";
    value: Anonymize<I894urueu7skf3>;
} | {
    type: "report_equivocation_unsigned";
    value: Anonymize<I894urueu7skf3>;
} | {
    type: "set_new_genesis";
    value: Anonymize<Iemqna2uucuei9>;
}>;
export declare const BeefyPalletCall: GetEnum<BeefyPalletCall>;
export type I894urueu7skf3 = {
    equivocation_proof: Anonymize<I6lgkrki6lhal>;
    key_owner_proof: Anonymize<I3ia7aufsoj0l1>;
};
export type I6lgkrki6lhal = {
    first: Anonymize<Ifukb31gb9emjd>;
    second: Anonymize<Ifukb31gb9emjd>;
};
export type Ifukb31gb9emjd = {
    commitment: Anonymize<Ie28rq7o91tbl9>;
    id: Binary;
    signature: Binary;
};
export type Ie28rq7o91tbl9 = {
    payload: Anonymize<I2eg8oaov5ur5b>;
    block_number: number;
    validator_set_id: bigint;
};
export type I2eg8oaov5ur5b = Array<Anonymize<Id6fv7d28ees54>>;
export type Id6fv7d28ees54 = [Binary, Binary];
export type Iemqna2uucuei9 = {
    delay_in_blocks: number;
};
export type Ie7cb775si1ku8 = {
    id: Binary;
    when: number;
    maybe_periodic: Anonymize<I34gtdjipdmjpt>;
    priority: number;
    call: Anonymize<I8e6un4uk1q07c>;
};
export type Idsdstalforb09 = {
    id: Binary;
};
export type I6rb3dbq8mv545 = {
    after: number;
    maybe_periodic: Anonymize<I34gtdjipdmjpt>;
    priority: number;
    call: Anonymize<I8e6un4uk1q07c>;
};
export type I90bto8860mivd = {
    id: Binary;
    after: number;
    maybe_periodic: Anonymize<I34gtdjipdmjpt>;
    priority: number;
    call: Anonymize<I8e6un4uk1q07c>;
};
export type PalletError = Enum<{
    type: "InvalidSpecName";
    value: undefined;
} | {
    type: "SpecVersionNeedsToIncrease";
    value: undefined;
} | {
    type: "FailedToExtractRuntimeVersion";
    value: undefined;
} | {
    type: "NonDefaultComposite";
    value: undefined;
} | {
    type: "NonZeroRefCount";
    value: undefined;
} | {
    type: "CallFiltered";
    value: undefined;
}>;
export declare const PalletError: GetEnum<PalletError>;
export type SchedulerPalletError = Enum<{
    type: "FailedToSchedule";
    value: undefined;
} | {
    type: "NotFound";
    value: undefined;
} | {
    type: "TargetBlockNumberInPast";
    value: undefined;
} | {
    type: "RescheduleNoChange";
    value: undefined;
} | {
    type: "Named";
    value: undefined;
}>;
export declare const SchedulerPalletError: GetEnum<SchedulerPalletError>;
export type PreimagePalletError = Enum<{
    type: "TooBig";
    value: undefined;
} | {
    type: "AlreadyNoted";
    value: undefined;
} | {
    type: "NotAuthorized";
    value: undefined;
} | {
    type: "NotNoted";
    value: undefined;
} | {
    type: "Requested";
    value: undefined;
} | {
    type: "NotRequested";
    value: undefined;
} | {
    type: "TooMany";
    value: undefined;
} | {
    type: "TooFew";
    value: undefined;
}>;
export declare const PreimagePalletError: GetEnum<PreimagePalletError>;
export type BabePalletError = Enum<{
    type: "InvalidEquivocationProof";
    value: undefined;
} | {
    type: "InvalidKeyOwnershipProof";
    value: undefined;
} | {
    type: "DuplicateOffenceReport";
    value: undefined;
} | {
    type: "InvalidConfiguration";
    value: undefined;
}>;
export declare const BabePalletError: GetEnum<BabePalletError>;
export type IndicesPalletError = Enum<{
    type: "NotAssigned";
    value: undefined;
} | {
    type: "NotOwner";
    value: undefined;
} | {
    type: "InUse";
    value: undefined;
} | {
    type: "NotTransfer";
    value: undefined;
} | {
    type: "Permanent";
    value: undefined;
}>;
export declare const IndicesPalletError: GetEnum<IndicesPalletError>;
export type BalancesPalletError = Enum<{
    type: "VestingBalance";
    value: undefined;
} | {
    type: "LiquidityRestrictions";
    value: undefined;
} | {
    type: "InsufficientBalance";
    value: undefined;
} | {
    type: "ExistentialDeposit";
    value: undefined;
} | {
    type: "Expendability";
    value: undefined;
} | {
    type: "ExistingVestingSchedule";
    value: undefined;
} | {
    type: "DeadAccount";
    value: undefined;
} | {
    type: "TooManyReserves";
    value: undefined;
} | {
    type: "TooManyHolds";
    value: undefined;
} | {
    type: "TooManyFreezes";
    value: undefined;
}>;
export declare const BalancesPalletError: GetEnum<BalancesPalletError>;
export type StakingPalletError = Enum<{
    type: "NotController";
    value: undefined;
} | {
    type: "NotStash";
    value: undefined;
} | {
    type: "AlreadyBonded";
    value: undefined;
} | {
    type: "AlreadyPaired";
    value: undefined;
} | {
    type: "EmptyTargets";
    value: undefined;
} | {
    type: "DuplicateIndex";
    value: undefined;
} | {
    type: "InvalidSlashIndex";
    value: undefined;
} | {
    type: "InsufficientBond";
    value: undefined;
} | {
    type: "NoMoreChunks";
    value: undefined;
} | {
    type: "NoUnlockChunk";
    value: undefined;
} | {
    type: "FundedTarget";
    value: undefined;
} | {
    type: "InvalidEraToReward";
    value: undefined;
} | {
    type: "InvalidNumberOfNominations";
    value: undefined;
} | {
    type: "NotSortedAndUnique";
    value: undefined;
} | {
    type: "AlreadyClaimed";
    value: undefined;
} | {
    type: "IncorrectHistoryDepth";
    value: undefined;
} | {
    type: "IncorrectSlashingSpans";
    value: undefined;
} | {
    type: "BadState";
    value: undefined;
} | {
    type: "TooManyTargets";
    value: undefined;
} | {
    type: "BadTarget";
    value: undefined;
} | {
    type: "CannotChillOther";
    value: undefined;
} | {
    type: "TooManyNominators";
    value: undefined;
} | {
    type: "TooManyValidators";
    value: undefined;
} | {
    type: "CommissionTooLow";
    value: undefined;
} | {
    type: "BoundNotMet";
    value: undefined;
}>;
export declare const StakingPalletError: GetEnum<StakingPalletError>;
export type SessionPalletError = Enum<{
    type: "InvalidProof";
    value: undefined;
} | {
    type: "NoAssociatedValidatorId";
    value: undefined;
} | {
    type: "DuplicatedKey";
    value: undefined;
} | {
    type: "NoKeys";
    value: undefined;
} | {
    type: "NoAccount";
    value: undefined;
}>;
export declare const SessionPalletError: GetEnum<SessionPalletError>;
export type GrandpaPalletError = Enum<{
    type: "PauseFailed";
    value: undefined;
} | {
    type: "ResumeFailed";
    value: undefined;
} | {
    type: "ChangePending";
    value: undefined;
} | {
    type: "TooSoon";
    value: undefined;
} | {
    type: "InvalidKeyOwnershipProof";
    value: undefined;
} | {
    type: "InvalidEquivocationProof";
    value: undefined;
} | {
    type: "DuplicateOffenceReport";
    value: undefined;
}>;
export declare const GrandpaPalletError: GetEnum<GrandpaPalletError>;
export type ImOnlinePalletError = Enum<{
    type: "InvalidKey";
    value: undefined;
} | {
    type: "DuplicatedHeartbeat";
    value: undefined;
}>;
export declare const ImOnlinePalletError: GetEnum<ImOnlinePalletError>;
export type TreasuryPalletError = Enum<{
    type: "InsufficientProposersBalance";
    value: undefined;
} | {
    type: "InvalidIndex";
    value: undefined;
} | {
    type: "TooManyApprovals";
    value: undefined;
} | {
    type: "InsufficientPermission";
    value: undefined;
} | {
    type: "ProposalNotApproved";
    value: undefined;
} | {
    type: "FailedToConvertBalance";
    value: undefined;
} | {
    type: "SpendExpired";
    value: undefined;
} | {
    type: "EarlyPayout";
    value: undefined;
} | {
    type: "AlreadyAttempted";
    value: undefined;
} | {
    type: "PayoutError";
    value: undefined;
} | {
    type: "NotAttempted";
    value: undefined;
} | {
    type: "Inconclusive";
    value: undefined;
}>;
export declare const TreasuryPalletError: GetEnum<TreasuryPalletError>;
export type ConvictionVotingPalletError = Enum<{
    type: "NotOngoing";
    value: undefined;
} | {
    type: "NotVoter";
    value: undefined;
} | {
    type: "NoPermission";
    value: undefined;
} | {
    type: "NoPermissionYet";
    value: undefined;
} | {
    type: "AlreadyDelegating";
    value: undefined;
} | {
    type: "AlreadyVoting";
    value: undefined;
} | {
    type: "InsufficientFunds";
    value: undefined;
} | {
    type: "NotDelegating";
    value: undefined;
} | {
    type: "Nonsense";
    value: undefined;
} | {
    type: "MaxVotesReached";
    value: undefined;
} | {
    type: "ClassNeeded";
    value: undefined;
} | {
    type: "BadClass";
    value: undefined;
}>;
export declare const ConvictionVotingPalletError: GetEnum<ConvictionVotingPalletError>;
export type ReferendaPalletError = Enum<{
    type: "NotOngoing";
    value: undefined;
} | {
    type: "HasDeposit";
    value: undefined;
} | {
    type: "BadTrack";
    value: undefined;
} | {
    type: "Full";
    value: undefined;
} | {
    type: "QueueEmpty";
    value: undefined;
} | {
    type: "BadReferendum";
    value: undefined;
} | {
    type: "NothingToDo";
    value: undefined;
} | {
    type: "NoTrack";
    value: undefined;
} | {
    type: "Unfinished";
    value: undefined;
} | {
    type: "NoPermission";
    value: undefined;
} | {
    type: "NoDeposit";
    value: undefined;
} | {
    type: "BadStatus";
    value: undefined;
} | {
    type: "PreimageNotExist";
    value: undefined;
}>;
export declare const ReferendaPalletError: GetEnum<ReferendaPalletError>;
export type WhitelistPalletError = Enum<{
    type: "UnavailablePreImage";
    value: undefined;
} | {
    type: "UndecodableCall";
    value: undefined;
} | {
    type: "InvalidCallWeightWitness";
    value: undefined;
} | {
    type: "CallIsNotWhitelisted";
    value: undefined;
} | {
    type: "CallAlreadyWhitelisted";
    value: undefined;
}>;
export declare const WhitelistPalletError: GetEnum<WhitelistPalletError>;
export type CommonClaimsPalletError = Enum<{
    type: "InvalidEthereumSignature";
    value: undefined;
} | {
    type: "SignerHasNoClaim";
    value: undefined;
} | {
    type: "SenderHasNoClaim";
    value: undefined;
} | {
    type: "PotUnderflow";
    value: undefined;
} | {
    type: "InvalidStatement";
    value: undefined;
} | {
    type: "VestedBalanceExists";
    value: undefined;
}>;
export declare const CommonClaimsPalletError: GetEnum<CommonClaimsPalletError>;
export type VestingPalletError = Enum<{
    type: "NotVesting";
    value: undefined;
} | {
    type: "AtMaxVestingSchedules";
    value: undefined;
} | {
    type: "AmountLow";
    value: undefined;
} | {
    type: "ScheduleIndexOutOfBounds";
    value: undefined;
} | {
    type: "InvalidScheduleParams";
    value: undefined;
}>;
export declare const VestingPalletError: GetEnum<VestingPalletError>;
export type UtilityPalletError = Enum<{
    type: "TooManyCalls";
    value: undefined;
}>;
export declare const UtilityPalletError: GetEnum<UtilityPalletError>;
export type IdentityPalletError = Enum<{
    type: "TooManySubAccounts";
    value: undefined;
} | {
    type: "NotFound";
    value: undefined;
} | {
    type: "NotNamed";
    value: undefined;
} | {
    type: "EmptyIndex";
    value: undefined;
} | {
    type: "FeeChanged";
    value: undefined;
} | {
    type: "NoIdentity";
    value: undefined;
} | {
    type: "StickyJudgement";
    value: undefined;
} | {
    type: "JudgementGiven";
    value: undefined;
} | {
    type: "InvalidJudgement";
    value: undefined;
} | {
    type: "InvalidIndex";
    value: undefined;
} | {
    type: "InvalidTarget";
    value: undefined;
} | {
    type: "TooManyFields";
    value: undefined;
} | {
    type: "TooManyRegistrars";
    value: undefined;
} | {
    type: "AlreadyClaimed";
    value: undefined;
} | {
    type: "NotSub";
    value: undefined;
} | {
    type: "NotOwned";
    value: undefined;
} | {
    type: "JudgementForDifferentIdentity";
    value: undefined;
} | {
    type: "JudgementPaymentFailed";
    value: undefined;
}>;
export declare const IdentityPalletError: GetEnum<IdentityPalletError>;
export type ProxyPalletError = Enum<{
    type: "TooMany";
    value: undefined;
} | {
    type: "NotFound";
    value: undefined;
} | {
    type: "NotProxy";
    value: undefined;
} | {
    type: "Unproxyable";
    value: undefined;
} | {
    type: "Duplicate";
    value: undefined;
} | {
    type: "NoPermission";
    value: undefined;
} | {
    type: "Unannounced";
    value: undefined;
} | {
    type: "NoSelfProxy";
    value: undefined;
}>;
export declare const ProxyPalletError: GetEnum<ProxyPalletError>;
export type MultisigPalletError = Enum<{
    type: "MinimumThreshold";
    value: undefined;
} | {
    type: "AlreadyApproved";
    value: undefined;
} | {
    type: "NoApprovalsNeeded";
    value: undefined;
} | {
    type: "TooFewSignatories";
    value: undefined;
} | {
    type: "TooManySignatories";
    value: undefined;
} | {
    type: "SignatoriesOutOfOrder";
    value: undefined;
} | {
    type: "SenderInSignatories";
    value: undefined;
} | {
    type: "NotFound";
    value: undefined;
} | {
    type: "NotOwner";
    value: undefined;
} | {
    type: "NoTimepoint";
    value: undefined;
} | {
    type: "WrongTimepoint";
    value: undefined;
} | {
    type: "UnexpectedTimepoint";
    value: undefined;
} | {
    type: "MaxWeightTooLow";
    value: undefined;
} | {
    type: "AlreadyStored";
    value: undefined;
}>;
export declare const MultisigPalletError: GetEnum<MultisigPalletError>;
export type BountiesPalletError = Enum<{
    type: "InsufficientProposersBalance";
    value: undefined;
} | {
    type: "InvalidIndex";
    value: undefined;
} | {
    type: "ReasonTooBig";
    value: undefined;
} | {
    type: "UnexpectedStatus";
    value: undefined;
} | {
    type: "RequireCurator";
    value: undefined;
} | {
    type: "InvalidValue";
    value: undefined;
} | {
    type: "InvalidFee";
    value: undefined;
} | {
    type: "PendingPayout";
    value: undefined;
} | {
    type: "Premature";
    value: undefined;
} | {
    type: "HasActiveChildBounty";
    value: undefined;
} | {
    type: "TooManyQueued";
    value: undefined;
}>;
export declare const BountiesPalletError: GetEnum<BountiesPalletError>;
export type ChildBountiesPalletError = Enum<{
    type: "ParentBountyNotActive";
    value: undefined;
} | {
    type: "InsufficientBountyBalance";
    value: undefined;
} | {
    type: "TooManyChildBounties";
    value: undefined;
}>;
export declare const ChildBountiesPalletError: GetEnum<ChildBountiesPalletError>;
export type ElectionProviderMultiPhasePalletError = Enum<{
    type: "PreDispatchEarlySubmission";
    value: undefined;
} | {
    type: "PreDispatchWrongWinnerCount";
    value: undefined;
} | {
    type: "PreDispatchWeakSubmission";
    value: undefined;
} | {
    type: "SignedQueueFull";
    value: undefined;
} | {
    type: "SignedCannotPayDeposit";
    value: undefined;
} | {
    type: "SignedInvalidWitness";
    value: undefined;
} | {
    type: "SignedTooMuchWeight";
    value: undefined;
} | {
    type: "OcwCallWrongEra";
    value: undefined;
} | {
    type: "MissingSnapshotMetadata";
    value: undefined;
} | {
    type: "InvalidSubmissionIndex";
    value: undefined;
} | {
    type: "CallNotAllowed";
    value: undefined;
} | {
    type: "FallbackFailed";
    value: undefined;
} | {
    type: "BoundNotMet";
    value: undefined;
} | {
    type: "TooManyWinners";
    value: undefined;
}>;
export declare const ElectionProviderMultiPhasePalletError: GetEnum<ElectionProviderMultiPhasePalletError>;
export type BagsListPalletError = Enum<{
    type: "List";
    value: Anonymize<BagsListListListError>;
}>;
export declare const BagsListPalletError: GetEnum<BagsListPalletError>;
export type BagsListListListError = Enum<{
    type: "Duplicate";
    value: undefined;
} | {
    type: "NotHeavier";
    value: undefined;
} | {
    type: "NotInSameBag";
    value: undefined;
} | {
    type: "NodeNotFound";
    value: undefined;
}>;
export declare const BagsListListListError: GetEnum<BagsListListListError>;
export type NominationPoolsPalletError = Enum<{
    type: "PoolNotFound";
    value: undefined;
} | {
    type: "PoolMemberNotFound";
    value: undefined;
} | {
    type: "RewardPoolNotFound";
    value: undefined;
} | {
    type: "SubPoolsNotFound";
    value: undefined;
} | {
    type: "AccountBelongsToOtherPool";
    value: undefined;
} | {
    type: "FullyUnbonding";
    value: undefined;
} | {
    type: "MaxUnbondingLimit";
    value: undefined;
} | {
    type: "CannotWithdrawAny";
    value: undefined;
} | {
    type: "MinimumBondNotMet";
    value: undefined;
} | {
    type: "OverflowRisk";
    value: undefined;
} | {
    type: "NotDestroying";
    value: undefined;
} | {
    type: "NotNominator";
    value: undefined;
} | {
    type: "NotKickerOrDestroying";
    value: undefined;
} | {
    type: "NotOpen";
    value: undefined;
} | {
    type: "MaxPools";
    value: undefined;
} | {
    type: "MaxPoolMembers";
    value: undefined;
} | {
    type: "CanNotChangeState";
    value: undefined;
} | {
    type: "DoesNotHavePermission";
    value: undefined;
} | {
    type: "MetadataExceedsMaxLen";
    value: undefined;
} | {
    type: "Defensive";
    value: Anonymize<NominationPoolsPalletDefensiveError>;
} | {
    type: "PartialUnbondNotAllowedPermissionlessly";
    value: undefined;
} | {
    type: "MaxCommissionRestricted";
    value: undefined;
} | {
    type: "CommissionExceedsMaximum";
    value: undefined;
} | {
    type: "CommissionExceedsGlobalMaximum";
    value: undefined;
} | {
    type: "CommissionChangeThrottled";
    value: undefined;
} | {
    type: "CommissionChangeRateNotAllowed";
    value: undefined;
} | {
    type: "NoPendingCommission";
    value: undefined;
} | {
    type: "NoCommissionCurrentSet";
    value: undefined;
} | {
    type: "PoolIdInUse";
    value: undefined;
} | {
    type: "InvalidPoolId";
    value: undefined;
} | {
    type: "BondExtraRestricted";
    value: undefined;
} | {
    type: "NothingToAdjust";
    value: undefined;
}>;
export declare const NominationPoolsPalletError: GetEnum<NominationPoolsPalletError>;
export type NominationPoolsPalletDefensiveError = Enum<{
    type: "NotEnoughSpaceInUnbondPool";
    value: undefined;
} | {
    type: "PoolNotFound";
    value: undefined;
} | {
    type: "RewardPoolNotFound";
    value: undefined;
} | {
    type: "SubPoolsNotFound";
    value: undefined;
} | {
    type: "BondedStashKilledPrematurely";
    value: undefined;
}>;
export declare const NominationPoolsPalletDefensiveError: GetEnum<NominationPoolsPalletDefensiveError>;
export type FastUnstakePalletError = Enum<{
    type: "NotController";
    value: undefined;
} | {
    type: "AlreadyQueued";
    value: undefined;
} | {
    type: "NotFullyBonded";
    value: undefined;
} | {
    type: "NotQueued";
    value: undefined;
} | {
    type: "AlreadyHead";
    value: undefined;
} | {
    type: "CallNotAllowed";
    value: undefined;
}>;
export declare const FastUnstakePalletError: GetEnum<FastUnstakePalletError>;
export type ParachainsConfigurationPalletError = Enum<{
    type: "InvalidNewValue";
    value: undefined;
}>;
export declare const ParachainsConfigurationPalletError: GetEnum<ParachainsConfigurationPalletError>;
export type ParachainsInclusionPalletError = Enum<{
    type: "UnsortedOrDuplicateValidatorIndices";
    value: undefined;
} | {
    type: "UnsortedOrDuplicateDisputeStatementSet";
    value: undefined;
} | {
    type: "UnsortedOrDuplicateBackedCandidates";
    value: undefined;
} | {
    type: "UnexpectedRelayParent";
    value: undefined;
} | {
    type: "WrongBitfieldSize";
    value: undefined;
} | {
    type: "BitfieldAllZeros";
    value: undefined;
} | {
    type: "BitfieldDuplicateOrUnordered";
    value: undefined;
} | {
    type: "ValidatorIndexOutOfBounds";
    value: undefined;
} | {
    type: "InvalidBitfieldSignature";
    value: undefined;
} | {
    type: "UnscheduledCandidate";
    value: undefined;
} | {
    type: "CandidateScheduledBeforeParaFree";
    value: undefined;
} | {
    type: "ScheduledOutOfOrder";
    value: undefined;
} | {
    type: "HeadDataTooLarge";
    value: undefined;
} | {
    type: "PrematureCodeUpgrade";
    value: undefined;
} | {
    type: "NewCodeTooLarge";
    value: undefined;
} | {
    type: "DisallowedRelayParent";
    value: undefined;
} | {
    type: "InvalidAssignment";
    value: undefined;
} | {
    type: "InvalidGroupIndex";
    value: undefined;
} | {
    type: "InsufficientBacking";
    value: undefined;
} | {
    type: "InvalidBacking";
    value: undefined;
} | {
    type: "NotCollatorSigned";
    value: undefined;
} | {
    type: "ValidationDataHashMismatch";
    value: undefined;
} | {
    type: "IncorrectDownwardMessageHandling";
    value: undefined;
} | {
    type: "InvalidUpwardMessages";
    value: undefined;
} | {
    type: "HrmpWatermarkMishandling";
    value: undefined;
} | {
    type: "InvalidOutboundHrmp";
    value: undefined;
} | {
    type: "InvalidValidationCodeHash";
    value: undefined;
} | {
    type: "ParaHeadMismatch";
    value: undefined;
} | {
    type: "BitfieldReferencesFreedCore";
    value: undefined;
}>;
export declare const ParachainsInclusionPalletError: GetEnum<ParachainsInclusionPalletError>;
export type ParachainsParasInherentPalletError = Enum<{
    type: "TooManyInclusionInherents";
    value: undefined;
} | {
    type: "InvalidParentHeader";
    value: undefined;
} | {
    type: "CandidateConcludedInvalid";
    value: undefined;
} | {
    type: "InherentOverweight";
    value: undefined;
} | {
    type: "DisputeStatementsUnsortedOrDuplicates";
    value: undefined;
} | {
    type: "DisputeInvalid";
    value: undefined;
}>;
export declare const ParachainsParasInherentPalletError: GetEnum<ParachainsParasInherentPalletError>;
export type ParachainsParasPalletError = Enum<{
    type: "NotRegistered";
    value: undefined;
} | {
    type: "CannotOnboard";
    value: undefined;
} | {
    type: "CannotOffboard";
    value: undefined;
} | {
    type: "CannotUpgrade";
    value: undefined;
} | {
    type: "CannotDowngrade";
    value: undefined;
} | {
    type: "PvfCheckStatementStale";
    value: undefined;
} | {
    type: "PvfCheckStatementFuture";
    value: undefined;
} | {
    type: "PvfCheckValidatorIndexOutOfBounds";
    value: undefined;
} | {
    type: "PvfCheckInvalidSignature";
    value: undefined;
} | {
    type: "PvfCheckDoubleVote";
    value: undefined;
} | {
    type: "PvfCheckSubjectInvalid";
    value: undefined;
} | {
    type: "CannotUpgradeCode";
    value: undefined;
}>;
export declare const ParachainsParasPalletError: GetEnum<ParachainsParasPalletError>;
export type PolkadotRuntimeParachainsHrmpPalletError = Enum<{
    type: "OpenHrmpChannelToSelf";
    value: undefined;
} | {
    type: "OpenHrmpChannelInvalidRecipient";
    value: undefined;
} | {
    type: "OpenHrmpChannelZeroCapacity";
    value: undefined;
} | {
    type: "OpenHrmpChannelCapacityExceedsLimit";
    value: undefined;
} | {
    type: "OpenHrmpChannelZeroMessageSize";
    value: undefined;
} | {
    type: "OpenHrmpChannelMessageSizeExceedsLimit";
    value: undefined;
} | {
    type: "OpenHrmpChannelAlreadyExists";
    value: undefined;
} | {
    type: "OpenHrmpChannelAlreadyRequested";
    value: undefined;
} | {
    type: "OpenHrmpChannelLimitExceeded";
    value: undefined;
} | {
    type: "AcceptHrmpChannelDoesntExist";
    value: undefined;
} | {
    type: "AcceptHrmpChannelAlreadyConfirmed";
    value: undefined;
} | {
    type: "AcceptHrmpChannelLimitExceeded";
    value: undefined;
} | {
    type: "CloseHrmpChannelUnauthorized";
    value: undefined;
} | {
    type: "CloseHrmpChannelDoesntExist";
    value: undefined;
} | {
    type: "CloseHrmpChannelAlreadyUnderway";
    value: undefined;
} | {
    type: "CancelHrmpOpenChannelUnauthorized";
    value: undefined;
} | {
    type: "OpenHrmpChannelDoesntExist";
    value: undefined;
} | {
    type: "OpenHrmpChannelAlreadyConfirmed";
    value: undefined;
} | {
    type: "WrongWitness";
    value: undefined;
} | {
    type: "ChannelCreationNotAuthorized";
    value: undefined;
}>;
export declare const PolkadotRuntimeParachainsHrmpPalletError: GetEnum<PolkadotRuntimeParachainsHrmpPalletError>;
export type ParachainsDisputesPalletError = Enum<{
    type: "DuplicateDisputeStatementSets";
    value: undefined;
} | {
    type: "AncientDisputeStatement";
    value: undefined;
} | {
    type: "ValidatorIndexOutOfBounds";
    value: undefined;
} | {
    type: "InvalidSignature";
    value: undefined;
} | {
    type: "DuplicateStatement";
    value: undefined;
} | {
    type: "SingleSidedDispute";
    value: undefined;
} | {
    type: "MaliciousBacker";
    value: undefined;
} | {
    type: "MissingBackingVotes";
    value: undefined;
} | {
    type: "UnconfirmedDispute";
    value: undefined;
}>;
export declare const ParachainsDisputesPalletError: GetEnum<ParachainsDisputesPalletError>;
export type ParachainsDisputesSlashingPalletError = Enum<{
    type: "InvalidKeyOwnershipProof";
    value: undefined;
} | {
    type: "InvalidSessionIndex";
    value: undefined;
} | {
    type: "InvalidCandidateHash";
    value: undefined;
} | {
    type: "InvalidValidatorIndex";
    value: undefined;
} | {
    type: "ValidatorIndexIdMismatch";
    value: undefined;
} | {
    type: "DuplicateSlashingReport";
    value: undefined;
}>;
export declare const ParachainsDisputesSlashingPalletError: GetEnum<ParachainsDisputesSlashingPalletError>;
export type CommonParasRegistrarPalletError = Enum<{
    type: "NotRegistered";
    value: undefined;
} | {
    type: "AlreadyRegistered";
    value: undefined;
} | {
    type: "NotOwner";
    value: undefined;
} | {
    type: "CodeTooLarge";
    value: undefined;
} | {
    type: "HeadDataTooLarge";
    value: undefined;
} | {
    type: "NotParachain";
    value: undefined;
} | {
    type: "NotParathread";
    value: undefined;
} | {
    type: "CannotDeregister";
    value: undefined;
} | {
    type: "CannotDowngrade";
    value: undefined;
} | {
    type: "CannotUpgrade";
    value: undefined;
} | {
    type: "ParaLocked";
    value: undefined;
} | {
    type: "NotReserved";
    value: undefined;
} | {
    type: "EmptyCode";
    value: undefined;
} | {
    type: "CannotSwap";
    value: undefined;
}>;
export declare const CommonParasRegistrarPalletError: GetEnum<CommonParasRegistrarPalletError>;
export type CommonSlotsPalletError = Enum<{
    type: "ParaNotOnboarding";
    value: undefined;
} | {
    type: "LeaseError";
    value: undefined;
}>;
export declare const CommonSlotsPalletError: GetEnum<CommonSlotsPalletError>;
export type CommonAuctionsPalletError = Enum<{
    type: "AuctionInProgress";
    value: undefined;
} | {
    type: "LeasePeriodInPast";
    value: undefined;
} | {
    type: "ParaNotRegistered";
    value: undefined;
} | {
    type: "NotCurrentAuction";
    value: undefined;
} | {
    type: "NotAuction";
    value: undefined;
} | {
    type: "AuctionEnded";
    value: undefined;
} | {
    type: "AlreadyLeasedOut";
    value: undefined;
}>;
export declare const CommonAuctionsPalletError: GetEnum<CommonAuctionsPalletError>;
export type CommonCrowdloanPalletError = Enum<{
    type: "FirstPeriodInPast";
    value: undefined;
} | {
    type: "FirstPeriodTooFarInFuture";
    value: undefined;
} | {
    type: "LastPeriodBeforeFirstPeriod";
    value: undefined;
} | {
    type: "LastPeriodTooFarInFuture";
    value: undefined;
} | {
    type: "CannotEndInPast";
    value: undefined;
} | {
    type: "EndTooFarInFuture";
    value: undefined;
} | {
    type: "Overflow";
    value: undefined;
} | {
    type: "ContributionTooSmall";
    value: undefined;
} | {
    type: "InvalidParaId";
    value: undefined;
} | {
    type: "CapExceeded";
    value: undefined;
} | {
    type: "ContributionPeriodOver";
    value: undefined;
} | {
    type: "InvalidOrigin";
    value: undefined;
} | {
    type: "NotParachain";
    value: undefined;
} | {
    type: "LeaseActive";
    value: undefined;
} | {
    type: "BidOrLeaseActive";
    value: undefined;
} | {
    type: "FundNotEnded";
    value: undefined;
} | {
    type: "NoContributions";
    value: undefined;
} | {
    type: "NotReadyToDissolve";
    value: undefined;
} | {
    type: "InvalidSignature";
    value: undefined;
} | {
    type: "MemoTooLarge";
    value: undefined;
} | {
    type: "AlreadyInNewRaise";
    value: undefined;
} | {
    type: "VrfDelayInProgress";
    value: undefined;
} | {
    type: "NoLeasePeriod";
    value: undefined;
}>;
export declare const CommonCrowdloanPalletError: GetEnum<CommonCrowdloanPalletError>;
export type XcmPalletError = Enum<{
    type: "Unreachable";
    value: undefined;
} | {
    type: "SendFailure";
    value: undefined;
} | {
    type: "Filtered";
    value: undefined;
} | {
    type: "UnweighableMessage";
    value: undefined;
} | {
    type: "DestinationNotInvertible";
    value: undefined;
} | {
    type: "Empty";
    value: undefined;
} | {
    type: "CannotReanchor";
    value: undefined;
} | {
    type: "TooManyAssets";
    value: undefined;
} | {
    type: "InvalidOrigin";
    value: undefined;
} | {
    type: "BadVersion";
    value: undefined;
} | {
    type: "BadLocation";
    value: undefined;
} | {
    type: "NoSubscription";
    value: undefined;
} | {
    type: "AlreadySubscribed";
    value: undefined;
} | {
    type: "InvalidAsset";
    value: undefined;
} | {
    type: "LowBalance";
    value: undefined;
} | {
    type: "TooManyLocks";
    value: undefined;
} | {
    type: "AccountNotSovereign";
    value: undefined;
} | {
    type: "FeesNotMet";
    value: undefined;
} | {
    type: "LockNotFound";
    value: undefined;
} | {
    type: "InUse";
    value: undefined;
}>;
export declare const XcmPalletError: GetEnum<XcmPalletError>;
export type MessageQueuePalletError = Enum<{
    type: "NotReapable";
    value: undefined;
} | {
    type: "NoPage";
    value: undefined;
} | {
    type: "NoMessage";
    value: undefined;
} | {
    type: "AlreadyProcessed";
    value: undefined;
} | {
    type: "Queued";
    value: undefined;
} | {
    type: "InsufficientWeight";
    value: undefined;
} | {
    type: "TemporarilyUnprocessable";
    value: undefined;
} | {
    type: "QueuePaused";
    value: undefined;
}>;
export declare const MessageQueuePalletError: GetEnum<MessageQueuePalletError>;
export type Ibsq79g5dg0tkf = AnonymousEnum<{
    "UnknownAssetKind": undefined;
    "AlreadyExists": undefined;
}>;
export type Ia4jqf401148a4 = {
    header: Anonymize<I6t1nedlt7mobn>;
    extrinsics: Anonymize<Itom7fk49o0c9>;
};
export type I132412t2eshc6 = ResultPayload<Anonymize<Idtdr91jmq5g4i>, TransactionValidityError>;
export type TransactionValidityError = Enum<{
    type: "Invalid";
    value: Anonymize<TransactionValidityInvalidTransaction>;
} | {
    type: "Unknown";
    value: Anonymize<TransactionValidityUnknownTransaction>;
}>;
export declare const TransactionValidityError: GetEnum<TransactionValidityError>;
export type TransactionValidityInvalidTransaction = Enum<{
    type: "Call";
    value: undefined;
} | {
    type: "Payment";
    value: undefined;
} | {
    type: "Future";
    value: undefined;
} | {
    type: "Stale";
    value: undefined;
} | {
    type: "BadProof";
    value: undefined;
} | {
    type: "AncientBirthBlock";
    value: undefined;
} | {
    type: "ExhaustsResources";
    value: undefined;
} | {
    type: "Custom";
    value: Anonymize<number>;
} | {
    type: "BadMandatory";
    value: undefined;
} | {
    type: "MandatoryValidation";
    value: undefined;
} | {
    type: "BadSigner";
    value: undefined;
}>;
export declare const TransactionValidityInvalidTransaction: GetEnum<TransactionValidityInvalidTransaction>;
export type TransactionValidityUnknownTransaction = Enum<{
    type: "CannotLookup";
    value: undefined;
} | {
    type: "NoUnsignedValidator";
    value: undefined;
} | {
    type: "Custom";
    value: Anonymize<number>;
}>;
export declare const TransactionValidityUnknownTransaction: GetEnum<TransactionValidityUnknownTransaction>;
export type If39abi8floaaf = Array<Anonymize<I1kbn2golmm2dm>>;
export type I1kbn2golmm2dm = [Binary, Binary];
export type Ibcdj0j79gq1uo = {
    okay: boolean;
    fatal_error: boolean;
    errors: Anonymize<If39abi8floaaf>;
};
export type TransactionValidityTransactionSource = Enum<{
    type: "InBlock";
    value: undefined;
} | {
    type: "Local";
    value: undefined;
} | {
    type: "External";
    value: undefined;
}>;
export declare const TransactionValidityTransactionSource: GetEnum<TransactionValidityTransactionSource>;
export type I6d9lhhdri071p = ResultPayload<Anonymize<I6g5lcd9vf2cr0>, TransactionValidityError>;
export type I6g5lcd9vf2cr0 = {
    priority: bigint;
    requires: Anonymize<Itom7fk49o0c9>;
    provides: Anonymize<Itom7fk49o0c9>;
    longevity: bigint;
    propagate: boolean;
};
export type I5985kfq7sspta = [Anonymize<Iarlj3qd8u1v13>, Anonymize<I94uslvmqboam8>];
export type I94uslvmqboam8 = {
    session_start_block: number;
    group_rotation_frequency: number;
    now: number;
};
export type I8a7gsn4nh0gne = Array<PolkadotPrimitivesV5CoreState>;
export type PolkadotPrimitivesV5CoreState = Enum<{
    type: "Occupied";
    value: Anonymize<Iedrr54lmrujd0>;
} | {
    type: "Scheduled";
    value: Anonymize<Ij0oq61lvrdfj>;
} | {
    type: "Free";
    value: undefined;
}>;
export declare const PolkadotPrimitivesV5CoreState: GetEnum<PolkadotPrimitivesV5CoreState>;
export type Iedrr54lmrujd0 = {
    next_up_on_available: Anonymize<I4j5il5p7i6los>;
    occupied_since: number;
    time_out_at: number;
    next_up_on_time_out: Anonymize<I4j5il5p7i6los>;
    availability: {
        bytes: Uint8Array;
        bitsLen: number;
    };
    group_responsible: number;
    candidate_hash: Binary;
    candidate_descriptor: Anonymize<Ib2u20s6roco9i>;
};
export type I4j5il5p7i6los = Anonymize<Ij0oq61lvrdfj> | undefined;
export type Ij0oq61lvrdfj = {
    para_id: number;
    collator: Anonymize<I17k3ujudqd5df>;
};
export type PolkadotPrimitivesV5OccupiedCoreAssumption = Enum<{
    type: "Included";
    value: undefined;
} | {
    type: "TimedOut";
    value: undefined;
} | {
    type: "Free";
    value: undefined;
}>;
export declare const PolkadotPrimitivesV5OccupiedCoreAssumption: GetEnum<PolkadotPrimitivesV5OccupiedCoreAssumption>;
export type I3gq2gui038qt = Anonymize<I5r8ef6aie125l> | undefined;
export type I5r8ef6aie125l = {
    parent_head: Binary;
    relay_parent_number: number;
    relay_parent_storage_root: Binary;
    max_pov_size: number;
};
export type Ic7as9gfl5utn9 = Anonymize<I9rov8gdjkv3b9> | undefined;
export type I9rov8gdjkv3b9 = [Anonymize<I5r8ef6aie125l>, Binary];
export type I2914et6njplkd = Anonymize<Iedmhjqij0hr8g> | undefined;
export type Ianqtalutublq5 = Array<PolkadotPrimitivesV5CandidateEvent>;
export type PolkadotPrimitivesV5CandidateEvent = Enum<{
    type: "CandidateBacked";
    value: Anonymize<Ieno5vn1m65ng2>;
} | {
    type: "CandidateIncluded";
    value: Anonymize<Ieno5vn1m65ng2>;
} | {
    type: "CandidateTimedOut";
    value: Anonymize<Ievbvtucck5gnq>;
}>;
export declare const PolkadotPrimitivesV5CandidateEvent: GetEnum<PolkadotPrimitivesV5CandidateEvent>;
export type I2pf0b05mc7sdr = Array<Anonymize<I9hvej6h53dqj0>>;
export type I9hvej6h53dqj0 = [number, Anonymize<Iev3u09i2vqn93>];
export type Ibfq7qcjfd788c = Anonymize<I3qttgoifdk5v6> | undefined;
export type I5537sfe0t0708 = Anonymize<I7k9oi9p83j43l> | undefined;
export type I8bqhj6psoqsin = Array<Anonymize<Irsmd7gp7po60>>;
export type Irsmd7gp7po60 = [number, Binary, Anonymize<I87u7jalc0lhah>];
export type I1b0210m3f090j = Anonymize<I6sbufrhmgqdb6> | undefined;
export type Icqsglphsrpv5 = Array<Anonymize<I5ork0l271qluj>>;
export type I5ork0l271qluj = [number, Binary, Anonymize<I3g2jv3qmtkrbe>];
export type I4gc64ora0pbbf = Anonymize<I53uro0ns8ba5b> | undefined;
export type I53uro0ns8ba5b = {
    constraints: Anonymize<I269u13ficnsd5>;
    pending_availability: Anonymize<Ic05b0cuggt8lp>;
};
export type I269u13ficnsd5 = {
    min_relay_parent_number: number;
    max_pov_size: number;
    max_code_size: number;
    ump_remaining: number;
    ump_remaining_bytes: number;
    max_ump_num_per_candidate: number;
    dmp_remaining_messages: Anonymize<Icgljjb6j82uhn>;
    hrmp_inbound: Anonymize<Icgljjb6j82uhn>;
    hrmp_channels_out: Anonymize<I1ilbeu6195gbh>;
    max_hrmp_num_per_candidate: number;
    required_parent: Binary;
    validation_code_hash: Binary;
    upgrade_restriction: Anonymize<Id34bi0o1gnln9>;
    future_validation_code: Anonymize<I7r2laa851pa4v>;
};
export type I1ilbeu6195gbh = Array<Anonymize<If6i47cerum785>>;
export type If6i47cerum785 = [number, Anonymize<Ifq5eqaefrc6it>];
export type Ifq5eqaefrc6it = {
    bytes_remaining: number;
    messages_remaining: number;
};
export type Id34bi0o1gnln9 = PolkadotPrimitivesV5UpgradeRestriction | undefined;
export type I7r2laa851pa4v = Anonymize<If89923vhoiaim> | undefined;
export type Ic05b0cuggt8lp = Array<Anonymize<Ids4u62ll2l1p4>>;
export type Ids4u62ll2l1p4 = {
    candidate_hash: Binary;
    descriptor: Anonymize<Ib2u20s6roco9i>;
    commitments: Anonymize<Ic1d4u2opv3fst>;
    relay_parent_number: number;
    max_pov_size: number;
};
export type I71rr2d0kb0iu3 = Anonymize<I17bb7o70l1ke3> | undefined;
export type I17bb7o70l1ke3 = {
    validators: Anonymize<Ie5mvl0hn85mkc>;
    id: bigint;
};
export type I7m8g2583l7nbe = ResultPayload<Binary, MmrPrimitivesError>;
export type MmrPrimitivesError = Enum<{
    type: "InvalidNumericOp";
    value: undefined;
} | {
    type: "Push";
    value: undefined;
} | {
    type: "GetRoot";
    value: undefined;
} | {
    type: "Commit";
    value: undefined;
} | {
    type: "GenerateProof";
    value: undefined;
} | {
    type: "Verify";
    value: undefined;
} | {
    type: "LeafNotFound";
    value: undefined;
} | {
    type: "PalletNotIncluded";
    value: undefined;
} | {
    type: "InvalidLeafIndex";
    value: undefined;
} | {
    type: "InvalidBestKnownBlock";
    value: undefined;
}>;
export declare const MmrPrimitivesError: GetEnum<MmrPrimitivesError>;
export type I256gkugrgtccq = ResultPayload<bigint, MmrPrimitivesError>;
export type I32e5ntud5fl8i = ResultPayload<Anonymize<If93480lp8rssc>, MmrPrimitivesError>;
export type If93480lp8rssc = [Anonymize<Itom7fk49o0c9>, Anonymize<I2ij509mgq3dve>];
export type I2ij509mgq3dve = {
    leaf_indices: Anonymize<Iafqnechp3omqg>;
    leaf_count: bigint;
    items: Anonymize<Idhnf6rtqoslea>;
};
export type I9lnenfklcdre = ResultPayload<undefined, MmrPrimitivesError>;
export type Iap4lrotpgmqpv = {
    slot_duration: bigint;
    epoch_length: bigint;
    c: Anonymize<I2j729bmgsdiuo>;
    authorities: Anonymize<I2qinct8jq4bqe>;
    randomness: Binary;
    allowed_slots: BabeAllowedSlots;
};
export type I6sbl80o3jmgfd = {
    epoch_index: bigint;
    start_slot: bigint;
    duration: bigint;
    authorities: Anonymize<I2qinct8jq4bqe>;
    randomness: Binary;
    config: Anonymize<Idkva8q2m9meg0>;
};
export type I96ok5o1k21bpi = Anonymize<I4gkfq1hbsjrle> | undefined;
export type I4gkfq1hbsjrle = Array<Anonymize<I3dmbm7ul207u0>>;
export type I3dmbm7ul207u0 = [Binary, Binary];
export type I5r4utvvlnltpd = {
    weight: Anonymize<I4q39t5hn830vp>;
    class: DispatchClass;
    partial_fee: bigint;
};
export type Iei2mvq0mjvt81 = {
    inclusion_fee: Anonymize<Id37fum600qfau>;
    tip: bigint;
};
export type Id37fum600qfau = Anonymize<I246faqtjrsnee> | undefined;
export type I246faqtjrsnee = {
    base_fee: bigint;
    len_fee: bigint;
    adjusted_weight_fee: bigint;
};
export type I9q9lvv0h98nhk = ResultPayload<undefined, string>;
export type I83463s35303v1 = Array<Anonymize<I14igbjnpgprl>>;
export type I14igbjnpgprl = {
    phase: Phase;
    event: Anonymize<Ia995bs1bmuj2>;
    topics: Anonymize<Idhnf6rtqoslea>;
};
export type Ia995bs1bmuj2 = AnonymousEnum<{
    "System": Anonymize<PalletEvent>;
    "ParachainSystem": Anonymize<Iav0g2u30ljnec>;
    "Balances": Anonymize<BalancesEvent>;
    "TransactionPayment": Anonymize<TransactionPaymentEvent>;
    "CollatorSelection": Anonymize<I2k46ltub59oi1>;
    "Session": Anonymize<SessionEvent>;
    "XcmpQueue": Anonymize<I94qdlrjig0c73>;
    "PolkadotXcm": Anonymize<XcmEvent>;
    "CumulusXcm": Anonymize<I8l8o4l0arhl3h>;
    "DmpQueue": Anonymize<Idq1303hvl1nc4>;
    "Utility": Anonymize<UtilityEvent>;
    "Multisig": Anonymize<MultisigEvent>;
    "Proxy": Anonymize<Icj87v4275cv2i>;
    "Preimage": Anonymize<PreimageEvent>;
    "Scheduler": Anonymize<SchedulerEvent>;
    "AssetRate": Anonymize<I1vmo9hpn12j0l>;
    "Alliance": Anonymize<I161a920rkel0k>;
    "AllianceMotion": Anonymize<I1vbihr52k60m7>;
    "FellowshipCollective": Anonymize<Iamuv128aro2dd>;
    "FellowshipReferenda": Anonymize<Idun3t58do26lr>;
    "FellowshipCore": Anonymize<I30o7lqe3qslhr>;
    "FellowshipSalary": Anonymize<Ieckfurourds1u>;
    "FellowshipTreasury": Anonymize<I7pitd9gb68o89>;
}>;
export type Iav0g2u30ljnec = AnonymousEnum<{
    "ValidationFunctionStored": undefined;
    "ValidationFunctionApplied": Anonymize<Idd7hd99u0ho0n>;
    "ValidationFunctionDiscarded": undefined;
    "UpgradeAuthorized": Anonymize<I6a5n5ij3gomuo>;
    "DownwardMessagesReceived": Anonymize<Iafscmv8tjf0ou>;
    "DownwardMessagesProcessed": Anonymize<I7a3a6ua4hud3s>;
    "UpwardMessageSent": Anonymize<I4n7056p1k6c8b>;
}>;
export type Idd7hd99u0ho0n = {
    relay_chain_block_num: number;
};
export type I6a5n5ij3gomuo = {
    code_hash: Binary;
};
export type I7a3a6ua4hud3s = {
    weight_used: Anonymize<I4q39t5hn830vp>;
    dmq_head: Binary;
};
export type I4n7056p1k6c8b = {
    message_hash: Anonymize<I17k3ujudqd5df>;
};
export type I2k46ltub59oi1 = AnonymousEnum<{
    "NewInvulnerables": Anonymize<I39t01nnod9109>;
    "InvulnerableAdded": Anonymize<I6v8sm60vvkmk7>;
    "InvulnerableRemoved": Anonymize<I6v8sm60vvkmk7>;
    "NewDesiredCandidates": Anonymize<I1qmtmbe5so8r3>;
    "NewCandidacyBond": Anonymize<Ih99m6ehpcar7>;
    "CandidateAdded": Anonymize<Idgorhsbgdq2ap>;
    "CandidateRemoved": Anonymize<I6v8sm60vvkmk7>;
    "InvalidInvulnerableSkipped": Anonymize<I6v8sm60vvkmk7>;
}>;
export type I6v8sm60vvkmk7 = {
    account_id: SS58String;
};
export type I1qmtmbe5so8r3 = {
    desired_candidates: number;
};
export type Ih99m6ehpcar7 = {
    bond_amount: bigint;
};
export type Idgorhsbgdq2ap = {
    account_id: SS58String;
    deposit: bigint;
};
export type I94qdlrjig0c73 = AnonymousEnum<{
    "Success": Anonymize<I7nj4acpodcef4>;
    "Fail": Anonymize<I3n8ln6mqdfgb8>;
    "BadVersion": Anonymize<I2vo9trn8nhllu>;
    "BadFormat": Anonymize<I2vo9trn8nhllu>;
    "XcmpMessageSent": Anonymize<I2vo9trn8nhllu>;
    "OverweightEnqueued": Anonymize<If8b64mo2bodj0>;
    "OverweightServiced": Anonymize<Icu5p58ltu1veo>;
}>;
export type I7nj4acpodcef4 = {
    message_hash: Binary;
    message_id: Binary;
    weight: Anonymize<I4q39t5hn830vp>;
};
export type I3n8ln6mqdfgb8 = {
    message_hash: Binary;
    message_id: Binary;
    error: XcmV3TraitsError;
    weight: Anonymize<I4q39t5hn830vp>;
};
export type I2vo9trn8nhllu = {
    message_hash: Binary;
};
export type If8b64mo2bodj0 = {
    sender: number;
    sent_at: number;
    index: bigint;
    required: Anonymize<I4q39t5hn830vp>;
};
export type Icu5p58ltu1veo = {
    index: bigint;
    used: Anonymize<I4q39t5hn830vp>;
};
export type I8l8o4l0arhl3h = AnonymousEnum<{
    "InvalidFormat": Anonymize<Binary>;
    "UnsupportedVersion": Anonymize<Binary>;
    "ExecutedDownward": Anonymize<Id0ii3t0e6fgob>;
}>;
export type Id0ii3t0e6fgob = [Binary, XcmV3TraitsOutcome];
export type Idq1303hvl1nc4 = AnonymousEnum<{
    "InvalidFormat": Anonymize<I2vo9trn8nhllu>;
    "UnsupportedVersion": Anonymize<I2vo9trn8nhllu>;
    "ExecutedDownward": Anonymize<I6mr530l14uapg>;
    "WeightExhausted": Anonymize<I2ds5dc604t7si>;
    "OverweightEnqueued": Anonymize<Idqsknek3bsc0s>;
    "OverweightServiced": Anonymize<Ise9gq7rqlnvm>;
    "MaxMessagesExhausted": Anonymize<I2vo9trn8nhllu>;
}>;
export type I6mr530l14uapg = {
    message_hash: Binary;
    message_id: Binary;
    outcome: XcmV3TraitsOutcome;
};
export type I2ds5dc604t7si = {
    message_hash: Binary;
    message_id: Binary;
    remaining_weight: Anonymize<I4q39t5hn830vp>;
    required_weight: Anonymize<I4q39t5hn830vp>;
};
export type Idqsknek3bsc0s = {
    message_hash: Binary;
    message_id: Binary;
    overweight_index: bigint;
    required_weight: Anonymize<I4q39t5hn830vp>;
};
export type Ise9gq7rqlnvm = {
    overweight_index: bigint;
    weight_used: Anonymize<I4q39t5hn830vp>;
};
export type Icj87v4275cv2i = AnonymousEnum<{
    "ProxyExecuted": Anonymize<Ie5i8qqljk3tjb>;
    "PureCreated": Anonymize<I29pqkr7dgifjk>;
    "Announced": Anonymize<Idbjbboh0q507r>;
    "ProxyAdded": Anonymize<I88knav8fvi1c3>;
    "ProxyRemoved": Anonymize<I88knav8fvi1c3>;
}>;
export type I29pqkr7dgifjk = {
    pure: SS58String;
    who: SS58String;
    proxy_type: Anonymize<I8k0tmogb6ghe3>;
    disambiguation_index: number;
};
export type I8k0tmogb6ghe3 = AnonymousEnum<{
    "Any": undefined;
    "NonTransfer": undefined;
    "CancelProxy": undefined;
    "Collator": undefined;
    "Alliance": undefined;
    "Fellowship": undefined;
}>;
export type I88knav8fvi1c3 = {
    delegator: SS58String;
    delegatee: SS58String;
    proxy_type: Anonymize<I8k0tmogb6ghe3>;
    delay: number;
};
export type I161a920rkel0k = AnonymousEnum<{
    "NewRuleSet": Anonymize<I2dgasao7pteq7>;
    "Announced": Anonymize<I56f2tlouivnqg>;
    "AnnouncementRemoved": Anonymize<I56f2tlouivnqg>;
    "MembersInitialized": Anonymize<Ia61kag3grdevk>;
    "NewAllyJoined": Anonymize<I79vua51vqq0mc>;
    "AllyElevated": Anonymize<I3trq1j79d9t1e>;
    "MemberRetirementPeriodStarted": Anonymize<Ie3gphha4ejh40>;
    "MemberRetired": Anonymize<Iafhd8kv029rqj>;
    "MemberKicked": Anonymize<I2mcnoj31i9be1>;
    "UnscrupulousItemAdded": Anonymize<I2t3hu6k5vesjh>;
    "UnscrupulousItemRemoved": Anonymize<I2t3hu6k5vesjh>;
    "AllianceDisbanded": Anonymize<I9dapsurd7u7ga>;
    "FellowAbdicated": Anonymize<I8uij7nmvtb96e>;
}>;
export type I2dgasao7pteq7 = {
    rule: Anonymize<I2h4fuon2pnvcd>;
};
export type I2h4fuon2pnvcd = {
    version: VestingReleases;
    codec: bigint;
    hash: Anonymize<I9bur55h8pu69f>;
};
export type I9bur55h8pu69f = {
    code: bigint;
    digest: Binary;
};
export type I56f2tlouivnqg = {
    announcement: Anonymize<I2h4fuon2pnvcd>;
};
export type Ia61kag3grdevk = {
    fellows: Anonymize<Ia2lhg7l2hilo3>;
    allies: Anonymize<Ia2lhg7l2hilo3>;
};
export type I79vua51vqq0mc = {
    ally: SS58String;
    nominator: Anonymize<Ihfphjolmsqq1>;
    reserved: Anonymize<I35p85j063s0il>;
};
export type I3trq1j79d9t1e = {
    ally: SS58String;
};
export type Ie3gphha4ejh40 = {
    member: SS58String;
};
export type Iafhd8kv029rqj = {
    member: SS58String;
    unreserved: Anonymize<I35p85j063s0il>;
};
export type I2mcnoj31i9be1 = {
    member: SS58String;
    slashed: Anonymize<I35p85j063s0il>;
};
export type I2t3hu6k5vesjh = {
    items: Anonymize<I8dfugdiaudbhc>;
};
export type I8dfugdiaudbhc = Array<Anonymize<I4os7gbpuhftoj>>;
export type I4os7gbpuhftoj = AnonymousEnum<{
    "AccountId": Anonymize<SS58String>;
    "Website": Anonymize<Binary>;
}>;
export type I9dapsurd7u7ga = {
    fellow_members: number;
    ally_members: number;
    unreserved: number;
};
export type I8uij7nmvtb96e = {
    fellow: SS58String;
};
export type I1vbihr52k60m7 = AnonymousEnum<{
    "Proposed": Anonymize<I1kjs4f71ca3ei>;
    "Voted": Anonymize<I866j5fp50ebq9>;
    "Approved": Anonymize<Icraueddqmudct>;
    "Disapproved": Anonymize<Icraueddqmudct>;
    "Executed": Anonymize<I3vvd0fdlc9ji8>;
    "MemberExecuted": Anonymize<I3vvd0fdlc9ji8>;
    "Closed": Anonymize<I8jvf1ugsdsqum>;
}>;
export type I1kjs4f71ca3ei = {
    account: SS58String;
    proposal_index: number;
    proposal_hash: Binary;
    threshold: number;
};
export type I866j5fp50ebq9 = {
    account: SS58String;
    proposal_hash: Binary;
    voted: boolean;
    yes: number;
    no: number;
};
export type Icraueddqmudct = {
    proposal_hash: Binary;
};
export type I3vvd0fdlc9ji8 = {
    proposal_hash: Binary;
    result: Anonymize<Idtdr91jmq5g4i>;
};
export type I8jvf1ugsdsqum = {
    proposal_hash: Binary;
    yes: number;
    no: number;
};
export type Iamuv128aro2dd = AnonymousEnum<{
    "MemberAdded": Anonymize<I4cbvqmqadhrea>;
    "RankChanged": Anonymize<Im1pm2vf6llcn>;
    "MemberRemoved": Anonymize<Im1pm2vf6llcn>;
    "Voted": Anonymize<I31vg1u4v55v90>;
}>;
export type Im1pm2vf6llcn = {
    who: SS58String;
    rank: number;
};
export type I31vg1u4v55v90 = {
    who: SS58String;
    poll: number;
    vote: Anonymize<I996080trg6urn>;
    tally: Anonymize<I6d634btv7misu>;
};
export type I996080trg6urn = AnonymousEnum<{
    "Aye": Anonymize<number>;
    "Nay": Anonymize<number>;
}>;
export type I6d634btv7misu = {
    bare_ayes: number;
    ayes: number;
    nays: number;
};
export type Idun3t58do26lr = AnonymousEnum<{
    "Submitted": Anonymize<Idhr9v8mlnjej>;
    "DecisionDepositPlaced": Anonymize<I62nte77gksm0f>;
    "DecisionDepositRefunded": Anonymize<I62nte77gksm0f>;
    "DepositSlashed": Anonymize<Id5fm4p8lj5qgi>;
    "DecisionStarted": Anonymize<Iuu6tledtt64n>;
    "ConfirmStarted": Anonymize<I666bl2fqjkejo>;
    "ConfirmAborted": Anonymize<I666bl2fqjkejo>;
    "Confirmed": Anonymize<I27notaksll8qt>;
    "Approved": Anonymize<I666bl2fqjkejo>;
    "Rejected": Anonymize<I27notaksll8qt>;
    "TimedOut": Anonymize<I27notaksll8qt>;
    "Cancelled": Anonymize<I27notaksll8qt>;
    "Killed": Anonymize<I27notaksll8qt>;
    "SubmissionDepositRefunded": Anonymize<I62nte77gksm0f>;
    "MetadataSet": Anonymize<I50aq0q2l1cdkr>;
    "MetadataCleared": Anonymize<I50aq0q2l1cdkr>;
}>;
export type Iuu6tledtt64n = {
    index: number;
    track: number;
    proposal: PreimagesBounded;
    tally: Anonymize<I6d634btv7misu>;
};
export type I27notaksll8qt = {
    index: number;
    tally: Anonymize<I6d634btv7misu>;
};
export type I30o7lqe3qslhr = AnonymousEnum<{
    "ParamsChanged": Anonymize<I875hrun7fs7ik>;
    "ActiveChanged": Anonymize<I9j3uq1uk06oju>;
    "Inducted": Anonymize<I4cbvqmqadhrea>;
    "Offboarded": Anonymize<I4cbvqmqadhrea>;
    "Promoted": Anonymize<I5kpe8b2kedtqn>;
    "Demoted": Anonymize<I5kpe8b2kedtqn>;
    "Proven": Anonymize<Ic79d2eioda33s>;
    "Requested": Anonymize<Ien2galqubjs1f>;
    "EvidenceJudged": Anonymize<Id07di6ikhd4im>;
    "Imported": Anonymize<Im1pm2vf6llcn>;
}>;
export type I875hrun7fs7ik = {
    params: Anonymize<Iec4blde7bc1ai>;
};
export type Iec4blde7bc1ai = {
    active_salary: Anonymize<Ibtvjpjqeoogob>;
    passive_salary: Anonymize<Ibtvjpjqeoogob>;
    demotion_period: Anonymize<Icfg51km2igile>;
    min_promotion_period: Anonymize<Icfg51km2igile>;
    offboard_timeout: number;
};
export type Ibtvjpjqeoogob = Array<bigint>;
export type Icfg51km2igile = Array<number>;
export type I9j3uq1uk06oju = {
    who: SS58String;
    is_active: boolean;
};
export type I5kpe8b2kedtqn = {
    who: SS58String;
    to_rank: number;
};
export type Ic79d2eioda33s = {
    who: SS58String;
    at_rank: number;
};
export type Ien2galqubjs1f = {
    who: SS58String;
    wish: Anonymize<I3q2oeu462si80>;
};
export type I3q2oeu462si80 = AnonymousEnum<{
    "Retention": undefined;
    "Promotion": undefined;
}>;
export type Id07di6ikhd4im = {
    who: SS58String;
    wish: Anonymize<I3q2oeu462si80>;
    evidence: Binary;
    old_rank: number;
    new_rank: Anonymize<I4arjljr6dpflb>;
};
export type Ieckfurourds1u = AnonymousEnum<{
    "Inducted": Anonymize<I4cbvqmqadhrea>;
    "Registered": Anonymize<Id5fm4p8lj5qgi>;
    "Paid": Anonymize<I4vcrhqupmee7p>;
    "CycleStarted": Anonymize<I666bl2fqjkejo>;
}>;
export type I4vcrhqupmee7p = {
    who: SS58String;
    beneficiary: SS58String;
    amount: bigint;
    id: bigint;
};
export type I6f7juk1vj8fiq = Array<Anonymize<I8ajtuet8esesv>>;
export type I8ajtuet8esesv = {
    used_bandwidth: Anonymize<Ieafp1gui1o4cl>;
    para_head_hash: Anonymize<I17k3ujudqd5df>;
    consumed_go_ahead_signal: Anonymize<Ie1vdku2j6ccvj>;
};
export type Ieafp1gui1o4cl = {
    ump_msg_count: number;
    ump_total_bytes: number;
    hrmp_outgoing: Anonymize<I68brng9hc4b57>;
};
export type I68brng9hc4b57 = Array<Anonymize<I2hfpgo4vigap7>>;
export type I2hfpgo4vigap7 = [number, Anonymize<I37lfg356jmoof>];
export type I37lfg356jmoof = {
    msg_count: number;
    total_bytes: number;
};
export type Ie1vdku2j6ccvj = PolkadotPrimitivesV5UpgradeGoAhead | undefined;
export type Iamnn769l033b4 = {
    used_bandwidth: Anonymize<Ieafp1gui1o4cl>;
    hrmp_watermark: Anonymize<I4arjljr6dpflb>;
    consumed_go_ahead_signal: Anonymize<Ie1vdku2j6ccvj>;
};
export type I8gicq33tfu7j1 = {
    dmq_mqc_head: Binary;
    relay_dispatch_queue_remaining_capacity: Anonymize<I3j1v1c2btq4bd>;
    ingress_channels: Anonymize<I90nfahji0n33j>;
    egress_channels: Anonymize<I90nfahji0n33j>;
};
export type I3j1v1c2btq4bd = {
    remaining_count: number;
    remaining_size: number;
};
export type I90nfahji0n33j = Array<Anonymize<Iemudar0nobhvs>>;
export type Iemudar0nobhvs = [number, Anonymize<I5q7ff8kblv2cn>];
export type I5q7ff8kblv2cn = {
    max_capacity: number;
    max_total_size: number;
    max_message_size: number;
    msg_count: number;
    total_size: number;
    mqc_head: Anonymize<I17k3ujudqd5df>;
};
export type I4iumukclgj8ej = {
    max_code_size: number;
    max_head_data_size: number;
    max_upward_queue_count: number;
    max_upward_queue_size: number;
    max_upward_message_size: number;
    max_upward_message_num_per_candidate: number;
    hrmp_max_message_num_per_candidate: number;
    validation_upgrade_cooldown: number;
    validation_upgrade_delay: number;
    async_backing_params: Anonymize<Iavuvfkop6318c>;
};
export type Ib3qt1mgvgmbgi = {
    code_hash: Binary;
    check_version: boolean;
};
export type I3fe7nt2ne6qtf = Array<Anonymize<I7qdm60946h5u9>>;
export type I7qdm60946h5u9 = {
    id: undefined;
    amount: bigint;
};
export type Ifi4da1gej1fri = Array<Anonymize<Iep1lmt6q3s6r3>>;
export type I9our4clsjkim0 = Array<Anonymize<I73gble6tmb52f>>;
export type I1imu1nmuvsfjb = Array<Anonymize<Ifqaq2umctvajg>>;
export type Ifqaq2umctvajg = {
    sender: number;
    state: Anonymize<Iafdd71v7fmmtg>;
    message_metadata: Anonymize<Iffef4jcdngnuk>;
};
export type Iafdd71v7fmmtg = AnonymousEnum<{
    "Ok": undefined;
    "Suspended": undefined;
}>;
export type Iffef4jcdngnuk = Array<Anonymize<I3n2gg5r6bbqh>>;
export type I3n2gg5r6bbqh = [number, Anonymize<Iaacmm7vkdld2p>];
export type Iaacmm7vkdld2p = AnonymousEnum<{
    "ConcatenatedVersionedXcm": undefined;
    "ConcatenatedEncodedBlob": undefined;
    "Signals": undefined;
}>;
export type I1mse8p8gvh143 = Array<Anonymize<Ittnsbm78tol1>>;
export type Ittnsbm78tol1 = {
    recipient: number;
    state: Anonymize<Iafdd71v7fmmtg>;
    signals_exist: boolean;
    first_index: number;
    last_index: number;
};
export type Ie0cpusdmler9p = {
    suspend_threshold: number;
    drop_threshold: number;
    resume_threshold: number;
    threshold_weight: Anonymize<I4q39t5hn830vp>;
    weight_restrict_decay: Anonymize<I4q39t5hn830vp>;
    xcmp_max_individual_weight: Anonymize<I4q39t5hn830vp>;
};
export type I6o3vavku3vjsk = [number, number, Binary];
export type Iepvrcsdbii2qt = {
    begin_used: number;
    end_used: number;
    overweight_count: bigint;
};
export type I82vjkits3vc46 = Array<Anonymize<Icp9h5ma02v1rg>>;
export type Icp9h5ma02v1rg = [number, Binary];
export type I3q5rcchchf9rk = [Anonymize<Iblglcb8lvk4oe>, bigint];
export type Iblglcb8lvk4oe = Array<Anonymize<Idt29nhp4akcai>>;
export type Idt29nhp4akcai = {
    delegate: SS58String;
    proxy_type: Anonymize<I8k0tmogb6ghe3>;
    delay: number;
};
export type I6peuma3nc745n = Array<Anonymize<I670r2ob4sj8hu>>;
export type I670r2ob4sj8hu = Anonymize<Ie2gltbg8d8j19> | undefined;
export type Ie2gltbg8d8j19 = {
    maybe_id: Anonymize<I17k3ujudqd5df>;
    priority: number;
    call: PreimagesBounded;
    maybe_periodic: Anonymize<I34gtdjipdmjpt>;
    origin: Anonymize<I9bh0vct59h14t>;
};
export type I9bh0vct59h14t = AnonymousEnum<{
    "system": Anonymize<DispatchRawOrigin>;
    "PolkadotXcm": Anonymize<XcmPalletOrigin>;
    "CumulusXcm": Anonymize<Ierdca6i2vfk3r>;
    "AllianceMotion": Anonymize<Ie2q2hj5a7i6lj>;
    "FellowshipOrigins": Anonymize<If8chu9bqmrgof>;
    "Void": Anonymize<undefined>;
}>;
export type Ierdca6i2vfk3r = AnonymousEnum<{
    "Relay": undefined;
    "SiblingParachain": Anonymize<number>;
}>;
export type Ie2q2hj5a7i6lj = AnonymousEnum<{
    "Members": Anonymize<I5g2vv0ckl2m8b>;
    "Member": Anonymize<SS58String>;
    "_Phantom": undefined;
}>;
export type If8chu9bqmrgof = AnonymousEnum<{
    "Members": undefined;
    "Fellowship2Dan": undefined;
    "Fellows": undefined;
    "Architects": undefined;
    "Fellowship5Dan": undefined;
    "Fellowship6Dan": undefined;
    "Masters": undefined;
    "Fellowship8Dan": undefined;
    "Fellowship9Dan": undefined;
    "RetainAt1Dan": undefined;
    "RetainAt2Dan": undefined;
    "RetainAt3Dan": undefined;
    "RetainAt4Dan": undefined;
    "RetainAt5Dan": undefined;
    "RetainAt6Dan": undefined;
    "PromoteTo1Dan": undefined;
    "PromoteTo2Dan": undefined;
    "PromoteTo3Dan": undefined;
    "PromoteTo4Dan": undefined;
    "PromoteTo5Dan": undefined;
    "PromoteTo6Dan": undefined;
}>;
export type I4495bvn4ld72n = Array<Anonymize<I2h4fuon2pnvcd>>;
export type I4jb9st4l6tk5c = AnonymousEnum<{
    "Fellow": undefined;
    "Ally": undefined;
    "Retiring": undefined;
}>;
export type Iemfe4sq56o6e4 = AnonymousEnum<{
    "System": Anonymize<SystemPalletCall>;
    "ParachainSystem": Anonymize<Ia0jlnena5ajog>;
    "Timestamp": Anonymize<TimestampPalletCall>;
    "Balances": Anonymize<Ibf8j84ii3a3kr>;
    "CollatorSelection": Anonymize<Idicb249fns7nd>;
    "Session": Anonymize<I3v8vq7j9grsdj>;
    "XcmpQueue": Anonymize<Iemk8msmejs2tt>;
    "PolkadotXcm": Anonymize<XcmPalletCall>;
    "DmpQueue": Anonymize<I3lfpt1qictomp>;
    "Utility": Anonymize<I7gnf7s3d3k2ad>;
    "Multisig": Anonymize<I3tqe3oba73g5u>;
    "Proxy": Anonymize<I2omo4t6ijsqv9>;
    "Preimage": Anonymize<PreimagePalletCall>;
    "Scheduler": Anonymize<I1t55sj4n68ir7>;
    "AssetRate": Anonymize<I2gv42mnmfo4fm>;
    "Alliance": Anonymize<I4dj5fq0vuce5f>;
    "AllianceMotion": Anonymize<Iaeodfvhdurd0m>;
    "FellowshipCollective": Anonymize<Icmhm0ltnbo68o>;
    "FellowshipReferenda": Anonymize<Ic6ta9rbvda359>;
    "FellowshipCore": Anonymize<I9jibh2vviov6r>;
    "FellowshipSalary": Anonymize<I4q4hnej6fbpd2>;
    "FellowshipTreasury": Anonymize<Ibiic8ba5o502g>;
}>;
export type Ia0jlnena5ajog = AnonymousEnum<{
    "set_validation_data": Anonymize<I68js79djhsbni>;
    "sudo_send_upward_message": Anonymize<Ifpj261e8s63m3>;
    "authorize_upgrade": Anonymize<Ib3qt1mgvgmbgi>;
    "enact_authorized_upgrade": Anonymize<I6pjjpfvhvcfru>;
}>;
export type I68js79djhsbni = {
    data: Anonymize<Icj9r7l64kc5ku>;
};
export type Icj9r7l64kc5ku = {
    validation_data: Anonymize<I5r8ef6aie125l>;
    relay_chain_state: Anonymize<Itom7fk49o0c9>;
    downward_messages: Anonymize<I6ljjd4b5fa4ov>;
    horizontal_messages: Anonymize<I2pf0b05mc7sdr>;
};
export type Ifpj261e8s63m3 = {
    message: Binary;
};
export type Idicb249fns7nd = AnonymousEnum<{
    "set_invulnerables": Anonymize<Ifccifqltb5obi>;
    "set_desired_candidates": Anonymize<Iadtsfv699cq8b>;
    "set_candidacy_bond": Anonymize<Ialpmgmhr3gk5r>;
    "register_as_candidate": undefined;
    "leave_intent": undefined;
    "add_invulnerable": Anonymize<I4cbvqmqadhrea>;
    "remove_invulnerable": Anonymize<I4cbvqmqadhrea>;
}>;
export type Ifccifqltb5obi = {
    new: Anonymize<Ia2lhg7l2hilo3>;
};
export type Iadtsfv699cq8b = {
    max: number;
};
export type Ialpmgmhr3gk5r = {
    bond: bigint;
};
export type I3v8vq7j9grsdj = AnonymousEnum<{
    "set_keys": Anonymize<Ivojoo8sbcs0m>;
    "purge_keys": undefined;
}>;
export type Ivojoo8sbcs0m = {
    keys: Binary;
    proof: Binary;
};
export type Iemk8msmejs2tt = AnonymousEnum<{
    "service_overweight": Anonymize<Iab1retd4gg4q1>;
    "suspend_xcm_execution": undefined;
    "resume_xcm_execution": undefined;
    "update_suspend_threshold": Anonymize<I3vh014cqgmrfd>;
    "update_drop_threshold": Anonymize<I3vh014cqgmrfd>;
    "update_resume_threshold": Anonymize<I3vh014cqgmrfd>;
    "update_threshold_weight": Anonymize<I2tni7rrb2buqm>;
    "update_weight_restrict_decay": Anonymize<I2tni7rrb2buqm>;
    "update_xcmp_max_individual_weight": Anonymize<I2tni7rrb2buqm>;
}>;
export type Iab1retd4gg4q1 = {
    index: bigint;
    weight_limit: Anonymize<I4q39t5hn830vp>;
};
export type I2tni7rrb2buqm = {
    new: Anonymize<I4q39t5hn830vp>;
};
export type I3lfpt1qictomp = AnonymousEnum<{
    "service_overweight": Anonymize<Iab1retd4gg4q1>;
}>;
export type I7gnf7s3d3k2ad = AnonymousEnum<{
    "batch": Anonymize<Id0f4f8p846e4o>;
    "as_derivative": Anonymize<Idkn325fta6i3i>;
    "batch_all": Anonymize<Id0f4f8p846e4o>;
    "dispatch_as": Anonymize<Iq7iccc2hfumf>;
    "force_batch": Anonymize<Id0f4f8p846e4o>;
    "with_weight": Anonymize<I1654abd13olpl>;
}>;
export type Id0f4f8p846e4o = {
    calls: Anonymize<Icisr24p9t87t1>;
};
export type Icisr24p9t87t1 = Array<Anonymize<Iemfe4sq56o6e4>>;
export type Idkn325fta6i3i = {
    index: number;
    call: Anonymize<Iemfe4sq56o6e4>;
};
export type Iq7iccc2hfumf = {
    as_origin: Anonymize<I9bh0vct59h14t>;
    call: Anonymize<Iemfe4sq56o6e4>;
};
export type I1654abd13olpl = {
    call: Anonymize<Iemfe4sq56o6e4>;
    weight: Anonymize<I4q39t5hn830vp>;
};
export type I3tqe3oba73g5u = AnonymousEnum<{
    "as_multi_threshold_1": Anonymize<Idbktfo7cbj1un>;
    "as_multi": Anonymize<I1nc4131phq95n>;
    "approve_as_multi": Anonymize<I349bg0i7n8ohu>;
    "cancel_as_multi": Anonymize<I8plicv234mqe5>;
}>;
export type Idbktfo7cbj1un = {
    other_signatories: Anonymize<Ia2lhg7l2hilo3>;
    call: Anonymize<Iemfe4sq56o6e4>;
};
export type I1nc4131phq95n = {
    threshold: number;
    other_signatories: Anonymize<Ia2lhg7l2hilo3>;
    maybe_timepoint: Anonymize<I95jfd8j5cr5eh>;
    call: Anonymize<Iemfe4sq56o6e4>;
    max_weight: Anonymize<I4q39t5hn830vp>;
};
export type I2omo4t6ijsqv9 = AnonymousEnum<{
    "proxy": Anonymize<I8mlu7201qva4e>;
    "add_proxy": Anonymize<I490uvap9onp3g>;
    "remove_proxy": Anonymize<I490uvap9onp3g>;
    "remove_proxies": undefined;
    "create_pure": Anonymize<I8v053pd8im1d3>;
    "kill_pure": Anonymize<Ibnon1qvc1ro8>;
    "announce": Anonymize<Id3bpmvju2iqi5>;
    "remove_announcement": Anonymize<Id3bpmvju2iqi5>;
    "reject_announcement": Anonymize<Ietdab69eu3c4e>;
    "proxy_announced": Anonymize<I6ckidq7jkqmnt>;
}>;
export type I8mlu7201qva4e = {
    real: MultiAddress;
    force_proxy_type: Anonymize<Idptk7eektb0sj>;
    call: Anonymize<Iemfe4sq56o6e4>;
};
export type Idptk7eektb0sj = Anonymize<I8k0tmogb6ghe3> | undefined;
export type I490uvap9onp3g = {
    delegate: MultiAddress;
    proxy_type: Anonymize<I8k0tmogb6ghe3>;
    delay: number;
};
export type I8v053pd8im1d3 = {
    proxy_type: Anonymize<I8k0tmogb6ghe3>;
    delay: number;
    index: number;
};
export type Ibnon1qvc1ro8 = {
    spawner: MultiAddress;
    proxy_type: Anonymize<I8k0tmogb6ghe3>;
    index: number;
    height: number;
    ext_index: number;
};
export type I6ckidq7jkqmnt = {
    delegate: MultiAddress;
    real: MultiAddress;
    force_proxy_type: Anonymize<Idptk7eektb0sj>;
    call: Anonymize<Iemfe4sq56o6e4>;
};
export type I1t55sj4n68ir7 = AnonymousEnum<{
    "schedule": Anonymize<I1qkfnm7irt5un>;
    "cancel": Anonymize<I5n4sebgkfr760>;
    "schedule_named": Anonymize<Icu99suj4go17>;
    "cancel_named": Anonymize<Idsdstalforb09>;
    "schedule_after": Anonymize<I6eugra8pivgrs>;
    "schedule_named_after": Anonymize<I11o2rsm65pn9o>;
}>;
export type I1qkfnm7irt5un = {
    when: number;
    maybe_periodic: Anonymize<I34gtdjipdmjpt>;
    priority: number;
    call: Anonymize<Iemfe4sq56o6e4>;
};
export type Icu99suj4go17 = {
    id: Binary;
    when: number;
    maybe_periodic: Anonymize<I34gtdjipdmjpt>;
    priority: number;
    call: Anonymize<Iemfe4sq56o6e4>;
};
export type I6eugra8pivgrs = {
    after: number;
    maybe_periodic: Anonymize<I34gtdjipdmjpt>;
    priority: number;
    call: Anonymize<Iemfe4sq56o6e4>;
};
export type I11o2rsm65pn9o = {
    id: Binary;
    after: number;
    maybe_periodic: Anonymize<I34gtdjipdmjpt>;
    priority: number;
    call: Anonymize<Iemfe4sq56o6e4>;
};
export type I4dj5fq0vuce5f = AnonymousEnum<{
    "propose": Anonymize<Iklhae5b9b3k8>;
    "vote": Anonymize<I4ncel23eptqai>;
    "init_members": Anonymize<Ia61kag3grdevk>;
    "disband": Anonymize<Icq0crsj7vrl4j>;
    "set_rule": Anonymize<I2dgasao7pteq7>;
    "announce": Anonymize<I56f2tlouivnqg>;
    "remove_announcement": Anonymize<I56f2tlouivnqg>;
    "join_alliance": undefined;
    "nominate_ally": Anonymize<I2nmm2fprtp4kl>;
    "elevate_ally": Anonymize<I5vno9afhrn994>;
    "give_retirement_notice": undefined;
    "retire": undefined;
    "kick_member": Anonymize<I2nmm2fprtp4kl>;
    "add_unscrupulous_items": Anonymize<I2t3hu6k5vesjh>;
    "remove_unscrupulous_items": Anonymize<I2t3hu6k5vesjh>;
    "close": Anonymize<Ic3aqnecvctqmc>;
    "abdicate_fellow_status": undefined;
}>;
export type Iklhae5b9b3k8 = {
    threshold: number;
    proposal: Anonymize<Iemfe4sq56o6e4>;
    length_bound: number;
};
export type I4ncel23eptqai = {
    proposal: Binary;
    index: number;
    approve: boolean;
};
export type Icq0crsj7vrl4j = {
    witness: Anonymize<Iel452dii9cd5a>;
};
export type Iel452dii9cd5a = {
    fellow_members: number;
    ally_members: number;
};
export type I2nmm2fprtp4kl = {
    who: MultiAddress;
};
export type I5vno9afhrn994 = {
    ally: MultiAddress;
};
export type Ic3aqnecvctqmc = {
    proposal_hash: Binary;
    index: number;
    proposal_weight_bound: Anonymize<I4q39t5hn830vp>;
    length_bound: number;
};
export type Iaeodfvhdurd0m = AnonymousEnum<{
    "set_members": Anonymize<I38jfk5li8iang>;
    "execute": Anonymize<I8jhljjof4f7u2>;
    "propose": Anonymize<Iklhae5b9b3k8>;
    "vote": Anonymize<I4ncel23eptqai>;
    "disapprove_proposal": Anonymize<Icraueddqmudct>;
    "close": Anonymize<Ic3aqnecvctqmc>;
}>;
export type I38jfk5li8iang = {
    new_members: Anonymize<Ia2lhg7l2hilo3>;
    prime: Anonymize<Ihfphjolmsqq1>;
    old_count: number;
};
export type I8jhljjof4f7u2 = {
    proposal: Anonymize<Iemfe4sq56o6e4>;
    length_bound: number;
};
export type Icmhm0ltnbo68o = AnonymousEnum<{
    "add_member": Anonymize<I2nmm2fprtp4kl>;
    "promote_member": Anonymize<I2nmm2fprtp4kl>;
    "demote_member": Anonymize<I2nmm2fprtp4kl>;
    "remove_member": Anonymize<I8c23ih8fpmjma>;
    "vote": Anonymize<I8bvk21lpmah75>;
    "cleanup_poll": Anonymize<I449n3riv6jbum>;
}>;
export type I8c23ih8fpmjma = {
    who: MultiAddress;
    min_rank: number;
};
export type I8bvk21lpmah75 = {
    poll: number;
    aye: boolean;
};
export type I449n3riv6jbum = {
    poll_index: number;
    max: number;
};
export type Ic6ta9rbvda359 = AnonymousEnum<{
    "submit": Anonymize<Ihqgnavvsqvf8>;
    "place_decision_deposit": Anonymize<I666bl2fqjkejo>;
    "refund_decision_deposit": Anonymize<I666bl2fqjkejo>;
    "cancel": Anonymize<I666bl2fqjkejo>;
    "kill": Anonymize<I666bl2fqjkejo>;
    "nudge_referendum": Anonymize<I666bl2fqjkejo>;
    "one_fewer_deciding": Anonymize<Icbio0e1f0034b>;
    "refund_submission_deposit": Anonymize<I666bl2fqjkejo>;
    "set_metadata": Anonymize<Ifml0k0sf0mu2g>;
}>;
export type Ihqgnavvsqvf8 = {
    proposal_origin: Anonymize<I9bh0vct59h14t>;
    proposal: PreimagesBounded;
    enactment_moment: TraitsScheduleDispatchTime;
};
export type I9jibh2vviov6r = AnonymousEnum<{
    "bump": Anonymize<I4cbvqmqadhrea>;
    "set_params": Anonymize<I875hrun7fs7ik>;
    "set_active": Anonymize<I27vrusv8rgd90>;
    "approve": Anonymize<Ic79d2eioda33s>;
    "induct": Anonymize<I4cbvqmqadhrea>;
    "promote": Anonymize<I5kpe8b2kedtqn>;
    "offboard": Anonymize<I4cbvqmqadhrea>;
    "submit_evidence": Anonymize<Iegaehkdq4ofh>;
    "import": undefined;
}>;
export type I27vrusv8rgd90 = {
    is_active: boolean;
};
export type Iegaehkdq4ofh = {
    wish: Anonymize<I3q2oeu462si80>;
    evidence: Binary;
};
export type I4q4hnej6fbpd2 = AnonymousEnum<{
    "init": undefined;
    "bump": undefined;
    "induct": undefined;
    "register": undefined;
    "payout": undefined;
    "payout_other": Anonymize<I8ligieds2efci>;
    "check_payment": undefined;
}>;
export type I8ligieds2efci = {
    beneficiary: SS58String;
};
export type I99bb69usss9gs = {
    index: number;
    threshold: number;
    ayes: Anonymize<Ia2lhg7l2hilo3>;
    nays: Anonymize<Ia2lhg7l2hilo3>;
    end: number;
};
export type I92r5g26hdf8cj = AnonymousEnum<{
    "Ongoing": Anonymize<I2022ns7ihn6rb>;
    "Approved": Anonymize<Ini94eljn5lj8>;
    "Rejected": Anonymize<Ini94eljn5lj8>;
    "Cancelled": Anonymize<Ini94eljn5lj8>;
    "TimedOut": Anonymize<Ini94eljn5lj8>;
    "Killed": Anonymize<number>;
}>;
export type I2022ns7ihn6rb = {
    track: number;
    origin: Anonymize<I9bh0vct59h14t>;
    proposal: PreimagesBounded;
    enactment: TraitsScheduleDispatchTime;
    submitted: number;
    submission_deposit: Anonymize<Id5fm4p8lj5qgi>;
    decision_deposit: Anonymize<Ibd24caul84kv2>;
    deciding: Anonymize<Ibcbcndfmk0jd9>;
    tally: Anonymize<I6d634btv7misu>;
    in_queue: boolean;
    alarm: Anonymize<I653443ft89b0e>;
};
export type Iq1c24rdj7v7p = {
    is_active: boolean;
    last_promotion: number;
    last_proof: number;
};
export type I3vo1s729tgvdr = [Anonymize<I3q2oeu462si80>, Binary];
export type Idg0lipm04tfnv = {
    cycle_index: number;
    cycle_start: number;
    budget: bigint;
    total_registrations: bigint;
    total_unregistered_paid: bigint;
};
export type Iesbdiip9d834l = {
    last_active: number;
    status: Anonymize<I8qc820ce7irh5>;
};
export type I8qc820ce7irh5 = AnonymousEnum<{
    "Nothing": undefined;
    "Registered": Anonymize<bigint>;
    "Attempted": Anonymize<I5a45jvuoo0vk0>;
}>;
export type I5a45jvuoo0vk0 = {
    registered: Anonymize<I35p85j063s0il>;
    id: bigint;
    amount: bigint;
};
export type I9vapnho0vb2oi = AnonymousEnum<{
    "OverlappingUpgrades": undefined;
    "ProhibitedByPolkadot": undefined;
    "TooBig": undefined;
    "ValidationDataNotAvailable": undefined;
    "HostConfigurationNotAvailable": undefined;
    "NotScheduled": undefined;
    "NothingAuthorized": undefined;
    "Unauthorized": undefined;
}>;
export type I3la0pignkgcnh = AnonymousEnum<{
    "TooManyCandidates": undefined;
    "TooFewEligibleCollators": undefined;
    "AlreadyCandidate": undefined;
    "NotCandidate": undefined;
    "TooManyInvulnerables": undefined;
    "AlreadyInvulnerable": undefined;
    "NotInvulnerable": undefined;
    "NoAssociatedValidatorId": undefined;
    "ValidatorNotRegistered": undefined;
}>;
export type I76qm6phqhi8t1 = AnonymousEnum<{
    "FailedToSend": undefined;
    "BadXcmOrigin": undefined;
    "BadXcm": undefined;
    "BadOverweightIndex": undefined;
    "WeightOverLimit": undefined;
}>;
export type Iah28jd3h6cvoq = AnonymousEnum<{
    "Unknown": undefined;
    "OverLimit": undefined;
}>;
export type I6ffs21sce8k9v = AnonymousEnum<{
    "AllianceNotYetInitialized": undefined;
    "AllianceAlreadyInitialized": undefined;
    "AlreadyMember": undefined;
    "NotMember": undefined;
    "NotAlly": undefined;
    "NoVotingRights": undefined;
    "AlreadyElevated": undefined;
    "AlreadyUnscrupulous": undefined;
    "AccountNonGrata": undefined;
    "NotListedAsUnscrupulous": undefined;
    "TooManyUnscrupulousItems": undefined;
    "TooLongWebsiteUrl": undefined;
    "InsufficientFunds": undefined;
    "WithoutIdentityDisplayAndWebsite": undefined;
    "WithoutGoodIdentityJudgement": undefined;
    "MissingProposalHash": undefined;
    "MissingAnnouncement": undefined;
    "TooManyMembers": undefined;
    "TooManyAnnouncements": undefined;
    "BadWitness": undefined;
    "AlreadyRetiring": undefined;
    "RetirementNoticeNotGiven": undefined;
    "RetirementPeriodNotPassed": undefined;
    "FellowsMissing": undefined;
}>;
export type I2v429r3n29sol = AnonymousEnum<{
    "NotMember": undefined;
    "DuplicateProposal": undefined;
    "ProposalMissing": undefined;
    "WrongIndex": undefined;
    "DuplicateVote": undefined;
    "AlreadyInitialized": undefined;
    "TooEarly": undefined;
    "TooManyProposals": undefined;
    "WrongProposalWeight": undefined;
    "WrongProposalLength": undefined;
    "PrimeAccountNotMember": undefined;
}>;
export type Ieflugds8c68lj = AnonymousEnum<{
    "AlreadyMember": undefined;
    "NotMember": undefined;
    "NotPolling": undefined;
    "Ongoing": undefined;
    "NoneRemaining": undefined;
    "Corruption": undefined;
    "RankTooLow": undefined;
    "InvalidWitness": undefined;
    "NoPermission": undefined;
}>;
export type I354hr86g27ob4 = AnonymousEnum<{
    "Unranked": undefined;
    "Ranked": undefined;
    "UnexpectedRank": undefined;
    "InvalidRank": undefined;
    "NoPermission": undefined;
    "NothingDoing": undefined;
    "AlreadyInducted": undefined;
    "NotTracked": undefined;
    "TooSoon": undefined;
}>;
export type I8c780nscvtp0n = AnonymousEnum<{
    "AlreadyStarted": undefined;
    "NotMember": undefined;
    "AlreadyInducted": undefined;
    "NotInducted": undefined;
    "NoClaim": undefined;
    "ClaimZero": undefined;
    "TooLate": undefined;
    "TooEarly": undefined;
    "NotYet": undefined;
    "NotStarted": undefined;
    "Bankrupt": undefined;
    "PayError": undefined;
    "Inconclusive": undefined;
    "NotCurrent": undefined;
}>;
export {};
