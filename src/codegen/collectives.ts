import {StorageDescriptor, PlainDescriptor, AssetDescriptor, TxDescriptor, RuntimeDescriptor, Enum, _Enum, QueryFromDescriptors, TxFromDescriptors, EventsFromDescriptors, ErrorsFromDescriptors, ConstFromDescriptors, SS58String, Binary} from "@polkadot-api/client";
  import {I5sesotjlssv2d, Iffmde3ekjedi9, Idin6nhq46lvdj, I83463s35303v1, Iep4uo61810hfs, Ieniouoqkq4icf, Phase, I6f7juk1vj8fiq, Iamnn769l033b4, I5r8ef6aie125l, Id34bi0o1gnln9, Ie1vdku2j6ccvj, Itom7fk49o0c9, I8gicq33tfu7j1, I4iumukclgj8ej, I93ssha9egqq23, I6r5cbv8ttrb09, I4q39t5hn830vp, Ib3qt1mgvgmbgi, I1q8tnt1cluu5j, Ibtifm27unhnjf, Iactubn52acokl, I233put12fltor, I3fe7nt2ne6qtf, TransactionPaymentReleases, Ia2lhg7l2hilo3, Ifi4da1gej1fri, I9our4clsjkim0, Icgljjb6j82uhn, Idhk5e7nto8mrb, Idhnf6rtqoslea, I6cs1itejju2vv, I1imu1nmuvsfjb, I5g2vv0ckl2m8b, I1mse8p8gvh143, Ie0cpusdmler9p, I6o3vavku3vjsk, XcmPalletQueryStatus, I46ggargfeekkj, I7vlvrrl2pnbgk, Ibdqc639q3ofe0, XcmPalletVersionMigrationStage, Iaaeqd8puo95gs, I61vn4ct4e1jjd, I64u7pb324isgb, Iepvrcsdbii2qt, I82vjkits3vc46, Icp9h5ma02v1rg, Iag146hmjgqfgj, I73gble6tmb52f, I3q5rcchchf9rk, I3tjio59962rg2, PreimageRequestStatus, PreimageRequestStatus1, I64gm4hrq7urum, I6peuma3nc745n, I32r9skkupsthv, I2h4fuon2pnvcd, I4495bvn4ld72n, I4jb9st4l6tk5c, Iemfe4sq56o6e4, I99bb69usss9gs, I7svnfko10tq2e, I996080trg6urn, I92r5g26hdf8cj, Iec4blde7bc1ai, Iq1c24rdj7v7p, I3vo1s729tgvdr, Idg0lipm04tfnv, Iesbdiip9d834l, Iegmj7n48sc3am, Ie05qfg5feue1l, In7a38730s6qs, If15el53dd76v9, I9s0ave7t0vnrk, Ib5fo0fakl8rog, Ibafpkl9hhno69, I35p85j063s0il, I8ofcg5rbj0g2c, I4adgbll7gku4i, I6pjjpfvhvcfru, I8qrhskdehbu57, I39uah9nss64h9, Ik64dknsq7k08, I68js79djhsbni, Ifpj261e8s63m3, Idcr6u6361oad9, Ien6q0lasi0m7i, Icacgruoo9j3r2, I7dgmo7im9hljo, Iargojp1sv9icj, Ibmr18suc9ikh9, Ie0io91hk7pejj, Ifccifqltb5obi, Iadtsfv699cq8b, Ialpmgmhr3gk5r, I4cbvqmqadhrea, Ivojoo8sbcs0m, Iab1retd4gg4q1, I3vh014cqgmrfd, I2tni7rrb2buqm, Icvpjofp09bmlh, Ieeis6pj62kiu4, I53e0mdinhcvpm, I732o5n04n5ohg, Ic76kfh5ebqkpl, I3pog27ittgi9g, Ifcceq8taolrca, Ibgm4rnf22lal1, Id0f4f8p846e4o, Idkn325fta6i3i, Iq7iccc2hfumf, I1654abd13olpl, Idbktfo7cbj1un, I1nc4131phq95n, I349bg0i7n8ohu, I8plicv234mqe5, I8mlu7201qva4e, I490uvap9onp3g, I8v053pd8im1d3, Ibnon1qvc1ro8, Id3bpmvju2iqi5, Ietdab69eu3c4e, I6ckidq7jkqmnt, I82nfqfkd48n10, Id9d48vaes3c53, Idaor7tajt0l3k, I1qkfnm7irt5un, I5n4sebgkfr760, Icu99suj4go17, Idsdstalforb09, I6eugra8pivgrs, I11o2rsm65pn9o, I16soggnee6qrb, Ifvnf1s3g2lg8u, Iklhae5b9b3k8, I4ncel23eptqai, Ia61kag3grdevk, Icq0crsj7vrl4j, I2dgasao7pteq7, I56f2tlouivnqg, I2nmm2fprtp4kl, I5vno9afhrn994, I2t3hu6k5vesjh, Ic3aqnecvctqmc, I38jfk5li8iang, I8jhljjof4f7u2, Icraueddqmudct, I8c23ih8fpmjma, I8bvk21lpmah75, I449n3riv6jbum, Ihqgnavvsqvf8, I666bl2fqjkejo, Icbio0e1f0034b, Ifml0k0sf0mu2g, I875hrun7fs7ik, I27vrusv8rgd90, Ic79d2eioda33s, I5kpe8b2kedtqn, Iegaehkdq4ofh, I8ligieds2efci, I5c883qnnqciv8, Icm9m0qeemu66d, Idpn74s0i9cdvp, I815t7ta25e227, Iede1ukavoderd, Iennefu6o2bgdm, Icbccs0ug47ilf, Ieob37pbjnvmkj, Idd7hd99u0ho0n, I6a5n5ij3gomuo, Iafscmv8tjf0ou, I7a3a6ua4hud3s, I4n7056p1k6c8b, Icv68aq8841478, Ic262ibdoec56a, Iflcfm9b6nlmdd, Ijrsf4mnp3eka, Id5fm4p8lj5qgi, Idm5rqp3duosod, I3qt1hgg4djhgb, Ier2cke86dqbr2, I39t01nnod9109, I6v8sm60vvkmk7, I1qmtmbe5so8r3, Ih99m6ehpcar7, Idgorhsbgdq2ap, I2hq50pu2kdjpo, I7nj4acpodcef4, I3n8ln6mqdfgb8, I2vo9trn8nhllu, If8b64mo2bodj0, Icu5p58ltu1veo, I4e7dkr4hrus3u, Ia5b8kts5gt3p5, Ise9r0vrat2m6, I7kkbgm2llu2o3, I2uqmls7kcdnii, Idg69klialbkb8, I9j133okge3c2, I30pg328m00nr3, I5qm1bvb2j3ap2, I95aqmsd6gjmqs, Iarlf7ddo81fm5, Ie9bjgclf7vho0, I7dm0nb8u3g2hv, I5pnf8l8c1nkfk, Ibknqphki4flb3, Id0ii3t0e6fgob, I6mr530l14uapg, I2ds5dc604t7si, Idqsknek3bsc0s, Ise9gq7rqlnvm, I6tn8e5lqr339o, I11lb9o37qkk4f, Ie5i8qqljk3tjb, Ibvv58de7m7rsi, I4uo2dg1jvbdtg, Ifbo6gts4g8u33, I82jp3a00f0f8k, I29pqkr7dgifjk, Idbjbboh0q507r, I88knav8fvi1c3, Idv8erd9m7jvse, Ibkv7dijodoblp, Iedcb9b2srjfp0, I79vua51vqq0mc, I3trq1j79d9t1e, Ie3gphha4ejh40, Iafhd8kv029rqj, I2mcnoj31i9be1, I9dapsurd7u7ga, I8uij7nmvtb96e, I1kjs4f71ca3ei, I866j5fp50ebq9, I3vvd0fdlc9ji8, I8jvf1ugsdsqum, Im1pm2vf6llcn, I31vg1u4v55v90, Idhr9v8mlnjej, I62nte77gksm0f, Iuu6tledtt64n, I27notaksll8qt, I50aq0q2l1cdkr, I9j3uq1uk06oju, Ien2galqubjs1f, Id07di6ikhd4im, I4vcrhqupmee7p, I44hc4lgsn4o1j, I8iksqi3eani0a, I16enopmju1p0q, Ifgqhle2413de7, I43kq8qudg7pq9, I76riseemre533, Ie5v6njpckr05b, I38bmcrmh852rk, I4hcillge8de5f, Iblqf6usek6oij, Iek7v4hrgnq6iv, Ia4jqf401148a4, I6t1nedlt7mobn, Iabpgqcjikia83, I132412t2eshc6, If39abi8floaaf, Ibcdj0j79gq1uo, TransactionValidityTransactionSource, I6d9lhhdri071p, I96ok5o1k21bpi, I5r4utvvlnltpd, Iei2mvq0mjvt81, Ic1d4u2opv3fst, I9q9lvv0h98nhk} from "./common-types";

  const checksums = import("./checksums.json").then(module => 'default' in module ? module.default : module);
  

type AnonymousEnum<T extends {}> = T & {
  __anonymous: true
}

type IEnum<T extends {}> = Enum<{
  [K in keyof T & string]: { type: K, value: T[K] }
}[keyof T & string]>

type MyTuple<T> = [T, ...T[]]

type SeparateUndefined<T> = undefined extends T
  ? undefined | Exclude<T, undefined>
  : T

type Anonymize<T> = SeparateUndefined<
  T extends
    | string
    | number
    | bigint
    | boolean
    | void
    | undefined
    | null
    | symbol
    | Binary
    | Uint8Array
    | Enum<{ type: string; value: any }>
    ? T
    : T extends AnonymousEnum<infer V>
      ? IEnum<V>
      : T extends MyTuple<any>
        ? {
            [K in keyof T]: T[K]
          }
        : T extends []
          ? []
          : T extends Array<infer A>
            ? Array<A>
            : {
                [K in keyof T & string]: T[K]
              }
>

const stg_System_Account: StorageDescriptor<[Key: SS58String], Anonymize<I5sesotjlssv2d>, false> = 0 as StorageDescriptor<[Key: SS58String], Anonymize<I5sesotjlssv2d>, false>;
const stg_System_ExtrinsicCount: StorageDescriptor<[], number, true> = 1 as StorageDescriptor<[], number, true>;
const stg_System_BlockWeight: StorageDescriptor<[], Anonymize<Iffmde3ekjedi9>, false> = 2 as StorageDescriptor<[], Anonymize<Iffmde3ekjedi9>, false>;
const stg_System_AllExtrinsicsLen: StorageDescriptor<[], number, true> = 1 as StorageDescriptor<[], number, true>;
const stg_System_BlockHash: StorageDescriptor<[Key: number], Binary, false> = 3 as StorageDescriptor<[Key: number], Binary, false>;
const stg_System_ExtrinsicData: StorageDescriptor<[Key: number], Binary, false> = 4 as StorageDescriptor<[Key: number], Binary, false>;
const stg_System_Number: StorageDescriptor<[], number, false> = 1 as StorageDescriptor<[], number, false>;
const stg_System_ParentHash: StorageDescriptor<[], Binary, false> = 5 as StorageDescriptor<[], Binary, false>;
const stg_System_Digest: StorageDescriptor<[], Anonymize<Idin6nhq46lvdj>, false> = 6 as StorageDescriptor<[], Anonymize<Idin6nhq46lvdj>, false>;
const stg_System_Events: StorageDescriptor<[], Anonymize<I83463s35303v1>, false> = 1191 as StorageDescriptor<[], Anonymize<I83463s35303v1>, false>;
const stg_System_EventCount: StorageDescriptor<[], number, false> = 1 as StorageDescriptor<[], number, false>;
const stg_System_EventTopics: StorageDescriptor<[Key: Binary], Anonymize<Iep4uo61810hfs>, false> = 8 as StorageDescriptor<[Key: Binary], Anonymize<Iep4uo61810hfs>, false>;
const stg_System_LastRuntimeUpgrade: StorageDescriptor<[], Anonymize<Ieniouoqkq4icf>, true> = 9 as StorageDescriptor<[], Anonymize<Ieniouoqkq4icf>, true>;
const stg_System_UpgradedToU32RefCount: StorageDescriptor<[], boolean, false> = 10 as StorageDescriptor<[], boolean, false>;
const stg_System_UpgradedToTripleRefCount: StorageDescriptor<[], boolean, false> = 10 as StorageDescriptor<[], boolean, false>;
const stg_System_ExecutionPhase: StorageDescriptor<[], Phase, true> = 11 as StorageDescriptor<[], Phase, true>;
const stg_ParachainSystem_UnincludedSegment: StorageDescriptor<[], Anonymize<I6f7juk1vj8fiq>, false> = 1192 as StorageDescriptor<[], Anonymize<I6f7juk1vj8fiq>, false>;
const stg_ParachainSystem_AggregatedUnincludedSegment: StorageDescriptor<[], Anonymize<Iamnn769l033b4>, true> = 1193 as StorageDescriptor<[], Anonymize<Iamnn769l033b4>, true>;
const stg_ParachainSystem_PendingValidationCode: StorageDescriptor<[], Binary, false> = 201 as StorageDescriptor<[], Binary, false>;
const stg_ParachainSystem_NewValidationCode: StorageDescriptor<[], Binary, true> = 201 as StorageDescriptor<[], Binary, true>;
const stg_ParachainSystem_ValidationData: StorageDescriptor<[], Anonymize<I5r8ef6aie125l>, true> = 1146 as StorageDescriptor<[], Anonymize<I5r8ef6aie125l>, true>;
const stg_ParachainSystem_DidSetValidationCode: StorageDescriptor<[], boolean, false> = 10 as StorageDescriptor<[], boolean, false>;
const stg_ParachainSystem_LastRelayChainBlockNumber: StorageDescriptor<[], number, false> = 1 as StorageDescriptor<[], number, false>;
const stg_ParachainSystem_UpgradeRestrictionSignal: StorageDescriptor<[], Anonymize<Id34bi0o1gnln9>, false> = 1166 as StorageDescriptor<[], Anonymize<Id34bi0o1gnln9>, false>;
const stg_ParachainSystem_UpgradeGoAhead: StorageDescriptor<[], Anonymize<Ie1vdku2j6ccvj>, false> = 1194 as StorageDescriptor<[], Anonymize<Ie1vdku2j6ccvj>, false>;
const stg_ParachainSystem_RelayStateProof: StorageDescriptor<[], Anonymize<Itom7fk49o0c9>, true> = 699 as StorageDescriptor<[], Anonymize<Itom7fk49o0c9>, true>;
const stg_ParachainSystem_RelevantMessagingState: StorageDescriptor<[], Anonymize<I8gicq33tfu7j1>, true> = 1195 as StorageDescriptor<[], Anonymize<I8gicq33tfu7j1>, true>;
const stg_ParachainSystem_HostConfiguration: StorageDescriptor<[], Anonymize<I4iumukclgj8ej>, true> = 1196 as StorageDescriptor<[], Anonymize<I4iumukclgj8ej>, true>;
const stg_ParachainSystem_LastDmqMqcHead: StorageDescriptor<[], Binary, false> = 5 as StorageDescriptor<[], Binary, false>;
const stg_ParachainSystem_LastHrmpMqcHeads: StorageDescriptor<[], Anonymize<I93ssha9egqq23>, false> = 1091 as StorageDescriptor<[], Anonymize<I93ssha9egqq23>, false>;
const stg_ParachainSystem_ProcessedDownwardMessages: StorageDescriptor<[], number, false> = 1 as StorageDescriptor<[], number, false>;
const stg_ParachainSystem_HrmpWatermark: StorageDescriptor<[], number, false> = 1 as StorageDescriptor<[], number, false>;
const stg_ParachainSystem_HrmpOutboundMessages: StorageDescriptor<[], Anonymize<I6r5cbv8ttrb09>, false> = 884 as StorageDescriptor<[], Anonymize<I6r5cbv8ttrb09>, false>;
const stg_ParachainSystem_UpwardMessages: StorageDescriptor<[], Anonymize<Itom7fk49o0c9>, false> = 699 as StorageDescriptor<[], Anonymize<Itom7fk49o0c9>, false>;
const stg_ParachainSystem_PendingUpwardMessages: StorageDescriptor<[], Anonymize<Itom7fk49o0c9>, false> = 699 as StorageDescriptor<[], Anonymize<Itom7fk49o0c9>, false>;
const stg_ParachainSystem_UpwardDeliveryFeeFactor: StorageDescriptor<[], bigint, false> = 44 as StorageDescriptor<[], bigint, false>;
const stg_ParachainSystem_AnnouncedHrmpMessagesPerCandidate: StorageDescriptor<[], number, false> = 1 as StorageDescriptor<[], number, false>;
const stg_ParachainSystem_ReservedXcmpWeightOverride: StorageDescriptor<[], Anonymize<I4q39t5hn830vp>, true> = 29 as StorageDescriptor<[], Anonymize<I4q39t5hn830vp>, true>;
const stg_ParachainSystem_ReservedDmpWeightOverride: StorageDescriptor<[], Anonymize<I4q39t5hn830vp>, true> = 29 as StorageDescriptor<[], Anonymize<I4q39t5hn830vp>, true>;
const stg_ParachainSystem_AuthorizedUpgrade: StorageDescriptor<[], Anonymize<Ib3qt1mgvgmbgi>, true> = 1197 as StorageDescriptor<[], Anonymize<Ib3qt1mgvgmbgi>, true>;
const stg_ParachainSystem_CustomValidationHeadData: StorageDescriptor<[], Binary, true> = 201 as StorageDescriptor<[], Binary, true>;
const stg_Timestamp_Now: StorageDescriptor<[], bigint, false> = 44 as StorageDescriptor<[], bigint, false>;
const stg_Timestamp_DidUpdate: StorageDescriptor<[], boolean, false> = 10 as StorageDescriptor<[], boolean, false>;
const stg_ParachainInfo_ParachainId: StorageDescriptor<[], number, false> = 1 as StorageDescriptor<[], number, false>;
const stg_Balances_TotalIssuance: StorageDescriptor<[], bigint, false> = 44 as StorageDescriptor<[], bigint, false>;
const stg_Balances_InactiveIssuance: StorageDescriptor<[], bigint, false> = 44 as StorageDescriptor<[], bigint, false>;
const stg_Balances_Account: StorageDescriptor<[Key: SS58String], Anonymize<I1q8tnt1cluu5j>, false> = 61 as StorageDescriptor<[Key: SS58String], Anonymize<I1q8tnt1cluu5j>, false>;
const stg_Balances_Locks: StorageDescriptor<[Key: SS58String], Anonymize<Ibtifm27unhnjf>, false> = 62 as StorageDescriptor<[Key: SS58String], Anonymize<Ibtifm27unhnjf>, false>;
const stg_Balances_Reserves: StorageDescriptor<[Key: SS58String], Anonymize<Iactubn52acokl>, false> = 63 as StorageDescriptor<[Key: SS58String], Anonymize<Iactubn52acokl>, false>;
const stg_Balances_Holds: StorageDescriptor<[Key: SS58String], Anonymize<I233put12fltor>, false> = 64 as StorageDescriptor<[Key: SS58String], Anonymize<I233put12fltor>, false>;
const stg_Balances_Freezes: StorageDescriptor<[Key: SS58String], Anonymize<I3fe7nt2ne6qtf>, false> = 1205 as StorageDescriptor<[Key: SS58String], Anonymize<I3fe7nt2ne6qtf>, false>;
const stg_TransactionPayment_NextFeeMultiplier: StorageDescriptor<[], bigint, false> = 44 as StorageDescriptor<[], bigint, false>;
const stg_TransactionPayment_StorageVersion: StorageDescriptor<[], TransactionPaymentReleases, false> = 80 as StorageDescriptor<[], TransactionPaymentReleases, false>;
const stg_Authorship_Author: StorageDescriptor<[], SS58String, true> = 82 as StorageDescriptor<[], SS58String, true>;
const stg_CollatorSelection_Invulnerables: StorageDescriptor<[], Anonymize<Ia2lhg7l2hilo3>, false> = 83 as StorageDescriptor<[], Anonymize<Ia2lhg7l2hilo3>, false>;
const stg_CollatorSelection_Candidates: StorageDescriptor<[], Anonymize<Ifi4da1gej1fri>, false> = 1206 as StorageDescriptor<[], Anonymize<Ifi4da1gej1fri>, false>;
const stg_CollatorSelection_LastAuthoredBlock: StorageDescriptor<[Key: SS58String], number, false> = 309 as StorageDescriptor<[Key: SS58String], number, false>;
const stg_CollatorSelection_DesiredCandidates: StorageDescriptor<[], number, false> = 1 as StorageDescriptor<[], number, false>;
const stg_CollatorSelection_CandidacyBond: StorageDescriptor<[], bigint, false> = 44 as StorageDescriptor<[], bigint, false>;
const stg_Session_Validators: StorageDescriptor<[], Anonymize<Ia2lhg7l2hilo3>, false> = 83 as StorageDescriptor<[], Anonymize<Ia2lhg7l2hilo3>, false>;
const stg_Session_CurrentIndex: StorageDescriptor<[], number, false> = 1 as StorageDescriptor<[], number, false>;
const stg_Session_QueuedChanged: StorageDescriptor<[], boolean, false> = 10 as StorageDescriptor<[], boolean, false>;
const stg_Session_QueuedKeys: StorageDescriptor<[], Anonymize<I9our4clsjkim0>, false> = 1214 as StorageDescriptor<[], Anonymize<I9our4clsjkim0>, false>;
const stg_Session_DisabledValidators: StorageDescriptor<[], Anonymize<Icgljjb6j82uhn>, false> = 137 as StorageDescriptor<[], Anonymize<Icgljjb6j82uhn>, false>;
const stg_Session_NextKeys: StorageDescriptor<[Key: SS58String], Binary, true> = 1215 as StorageDescriptor<[Key: SS58String], Binary, true>;
const stg_Session_KeyOwner: StorageDescriptor<[Key: Anonymize<Idhk5e7nto8mrb>], SS58String, true> = 139 as StorageDescriptor<[Key: Anonymize<Idhk5e7nto8mrb>], SS58String, true>;
const stg_Aura_Authorities: StorageDescriptor<[], Anonymize<Idhnf6rtqoslea>, false> = 147 as StorageDescriptor<[], Anonymize<Idhnf6rtqoslea>, false>;
const stg_Aura_CurrentSlot: StorageDescriptor<[], bigint, false> = 44 as StorageDescriptor<[], bigint, false>;
const stg_AuraExt_Authorities: StorageDescriptor<[], Anonymize<Idhnf6rtqoslea>, false> = 147 as StorageDescriptor<[], Anonymize<Idhnf6rtqoslea>, false>;
const stg_AuraExt_SlotInfo: StorageDescriptor<[], Anonymize<I6cs1itejju2vv>, true> = 937 as StorageDescriptor<[], Anonymize<I6cs1itejju2vv>, true>;
const stg_XcmpQueue_InboundXcmpStatus: StorageDescriptor<[], Anonymize<I1imu1nmuvsfjb>, false> = 1217 as StorageDescriptor<[], Anonymize<I1imu1nmuvsfjb>, false>;
const stg_XcmpQueue_InboundXcmpMessages: StorageDescriptor<Anonymize<I5g2vv0ckl2m8b>, Binary, false> = 1218 as StorageDescriptor<Anonymize<I5g2vv0ckl2m8b>, Binary, false>;
const stg_XcmpQueue_OutboundXcmpStatus: StorageDescriptor<[], Anonymize<I1mse8p8gvh143>, false> = 1219 as StorageDescriptor<[], Anonymize<I1mse8p8gvh143>, false>;
const stg_XcmpQueue_OutboundXcmpMessages: StorageDescriptor<Anonymize<I5g2vv0ckl2m8b>, Binary, false> = 1218 as StorageDescriptor<Anonymize<I5g2vv0ckl2m8b>, Binary, false>;
const stg_XcmpQueue_SignalMessages: StorageDescriptor<[Key: number], Binary, false> = 4 as StorageDescriptor<[Key: number], Binary, false>;
const stg_XcmpQueue_QueueConfig: StorageDescriptor<[], Anonymize<Ie0cpusdmler9p>, false> = 1220 as StorageDescriptor<[], Anonymize<Ie0cpusdmler9p>, false>;
const stg_XcmpQueue_Overweight: StorageDescriptor<[Key: bigint], Anonymize<I6o3vavku3vjsk>, true> = 1221 as StorageDescriptor<[Key: bigint], Anonymize<I6o3vavku3vjsk>, true>;
const stg_XcmpQueue_CounterForOverweight: StorageDescriptor<[], number, false> = 1 as StorageDescriptor<[], number, false>;
const stg_XcmpQueue_OverweightCount: StorageDescriptor<[], bigint, false> = 44 as StorageDescriptor<[], bigint, false>;
const stg_XcmpQueue_QueueSuspended: StorageDescriptor<[], boolean, false> = 10 as StorageDescriptor<[], boolean, false>;
const stg_XcmpQueue_DeliveryFeeFactor: StorageDescriptor<[Key: number], bigint, false> = 93 as StorageDescriptor<[Key: number], bigint, false>;
const stg_PolkadotXcm_QueryCounter: StorageDescriptor<[], bigint, false> = 44 as StorageDescriptor<[], bigint, false>;
const stg_PolkadotXcm_Queries: StorageDescriptor<[Key: bigint], XcmPalletQueryStatus, true> = 450 as StorageDescriptor<[Key: bigint], XcmPalletQueryStatus, true>;
const stg_PolkadotXcm_AssetTraps: StorageDescriptor<[Key: Binary], number, false> = 376 as StorageDescriptor<[Key: Binary], number, false>;
const stg_PolkadotXcm_SafeXcmVersion: StorageDescriptor<[], number, true> = 1 as StorageDescriptor<[], number, true>;
const stg_PolkadotXcm_SupportedVersion: StorageDescriptor<Anonymize<I46ggargfeekkj>, number, true> = 451 as StorageDescriptor<Anonymize<I46ggargfeekkj>, number, true>;
const stg_PolkadotXcm_VersionNotifiers: StorageDescriptor<Anonymize<I46ggargfeekkj>, bigint, true> = 452 as StorageDescriptor<Anonymize<I46ggargfeekkj>, bigint, true>;
const stg_PolkadotXcm_VersionNotifyTargets: StorageDescriptor<Anonymize<I46ggargfeekkj>, Anonymize<I7vlvrrl2pnbgk>, true> = 453 as StorageDescriptor<Anonymize<I46ggargfeekkj>, Anonymize<I7vlvrrl2pnbgk>, true>;
const stg_PolkadotXcm_VersionDiscoveryQueue: StorageDescriptor<[], Anonymize<Ibdqc639q3ofe0>, false> = 454 as StorageDescriptor<[], Anonymize<Ibdqc639q3ofe0>, false>;
const stg_PolkadotXcm_CurrentMigration: StorageDescriptor<[], XcmPalletVersionMigrationStage, true> = 455 as StorageDescriptor<[], XcmPalletVersionMigrationStage, true>;
const stg_PolkadotXcm_RemoteLockedFungibles: StorageDescriptor<Anonymize<I61vn4ct4e1jjd>, Anonymize<Iaaeqd8puo95gs>, true> = 456 as StorageDescriptor<Anonymize<I61vn4ct4e1jjd>, Anonymize<Iaaeqd8puo95gs>, true>;
const stg_PolkadotXcm_LockedFungibles: StorageDescriptor<[Key: SS58String], Anonymize<I64u7pb324isgb>, true> = 457 as StorageDescriptor<[Key: SS58String], Anonymize<I64u7pb324isgb>, true>;
const stg_PolkadotXcm_XcmExecutionSuspended: StorageDescriptor<[], boolean, false> = 10 as StorageDescriptor<[], boolean, false>;
const stg_DmpQueue_Configuration: StorageDescriptor<[], Anonymize<I4q39t5hn830vp>, false> = 29 as StorageDescriptor<[], Anonymize<I4q39t5hn830vp>, false>;
const stg_DmpQueue_PageIndex: StorageDescriptor<[], Anonymize<Iepvrcsdbii2qt>, false> = 1231 as StorageDescriptor<[], Anonymize<Iepvrcsdbii2qt>, false>;
const stg_DmpQueue_Pages: StorageDescriptor<[Key: number], Anonymize<I82vjkits3vc46>, false> = 1232 as StorageDescriptor<[Key: number], Anonymize<I82vjkits3vc46>, false>;
const stg_DmpQueue_Overweight: StorageDescriptor<[Key: bigint], Anonymize<Icp9h5ma02v1rg>, true> = 1233 as StorageDescriptor<[Key: bigint], Anonymize<Icp9h5ma02v1rg>, true>;
const stg_DmpQueue_CounterForOverweight: StorageDescriptor<[], number, false> = 1 as StorageDescriptor<[], number, false>;
const stg_Multisig_Multisigs: StorageDescriptor<Anonymize<I73gble6tmb52f>, Anonymize<Iag146hmjgqfgj>, true> = 253 as StorageDescriptor<Anonymize<I73gble6tmb52f>, Anonymize<Iag146hmjgqfgj>, true>;
const stg_Proxy_Proxies: StorageDescriptor<[Key: SS58String], Anonymize<I3q5rcchchf9rk>, false> = 1244 as StorageDescriptor<[Key: SS58String], Anonymize<I3q5rcchchf9rk>, false>;
const stg_Proxy_Announcements: StorageDescriptor<[Key: SS58String], Anonymize<I3tjio59962rg2>, false> = 242 as StorageDescriptor<[Key: SS58String], Anonymize<I3tjio59962rg2>, false>;
const stg_Preimage_StatusFor: StorageDescriptor<[Key: Binary], PreimageRequestStatus, true> = 38 as StorageDescriptor<[Key: Binary], PreimageRequestStatus, true>;
const stg_Preimage_RequestStatusFor: StorageDescriptor<[Key: Binary], PreimageRequestStatus1, true> = 39 as StorageDescriptor<[Key: Binary], PreimageRequestStatus1, true>;
const stg_Preimage_PreimageFor: StorageDescriptor<[Key: Anonymize<I64gm4hrq7urum>], Binary, true> = 40 as StorageDescriptor<[Key: Anonymize<I64gm4hrq7urum>], Binary, true>;
const stg_Scheduler_IncompleteSince: StorageDescriptor<[], number, true> = 1 as StorageDescriptor<[], number, true>;
const stg_Scheduler_Agenda: StorageDescriptor<[Key: number], Anonymize<I6peuma3nc745n>, false> = 1252 as StorageDescriptor<[Key: number], Anonymize<I6peuma3nc745n>, false>;
const stg_Scheduler_Lookup: StorageDescriptor<[Key: Binary], Anonymize<I5g2vv0ckl2m8b>, true> = 28 as StorageDescriptor<[Key: Binary], Anonymize<I5g2vv0ckl2m8b>, true>;
const stg_AssetRate_ConversionRateToNative: StorageDescriptor<[Key: Anonymize<I32r9skkupsthv>], bigint, true> = 491 as StorageDescriptor<[Key: Anonymize<I32r9skkupsthv>], bigint, true>;
const stg_Alliance_Rule: StorageDescriptor<[], Anonymize<I2h4fuon2pnvcd>, true> = 1257 as StorageDescriptor<[], Anonymize<I2h4fuon2pnvcd>, true>;
const stg_Alliance_Announcements: StorageDescriptor<[], Anonymize<I4495bvn4ld72n>, false> = 1258 as StorageDescriptor<[], Anonymize<I4495bvn4ld72n>, false>;
const stg_Alliance_DepositOf: StorageDescriptor<[Key: SS58String], bigint, true> = 344 as StorageDescriptor<[Key: SS58String], bigint, true>;
const stg_Alliance_Members: StorageDescriptor<[Key: Anonymize<I4jb9st4l6tk5c>], Anonymize<Ia2lhg7l2hilo3>, false> = 1259 as StorageDescriptor<[Key: Anonymize<I4jb9st4l6tk5c>], Anonymize<Ia2lhg7l2hilo3>, false>;
const stg_Alliance_RetiringMembers: StorageDescriptor<[Key: SS58String], number, true> = 309 as StorageDescriptor<[Key: SS58String], number, true>;
const stg_Alliance_UnscrupulousAccounts: StorageDescriptor<[], Anonymize<Ia2lhg7l2hilo3>, false> = 83 as StorageDescriptor<[], Anonymize<Ia2lhg7l2hilo3>, false>;
const stg_Alliance_UnscrupulousWebsites: StorageDescriptor<[], Anonymize<Itom7fk49o0c9>, false> = 699 as StorageDescriptor<[], Anonymize<Itom7fk49o0c9>, false>;
const stg_AllianceMotion_Proposals: StorageDescriptor<[], Anonymize<Idhnf6rtqoslea>, false> = 147 as StorageDescriptor<[], Anonymize<Idhnf6rtqoslea>, false>;
const stg_AllianceMotion_ProposalOf: StorageDescriptor<[Key: Binary], Anonymize<Iemfe4sq56o6e4>, true> = 1277 as StorageDescriptor<[Key: Binary], Anonymize<Iemfe4sq56o6e4>, true>;
const stg_AllianceMotion_Voting: StorageDescriptor<[Key: Binary], Anonymize<I99bb69usss9gs>, true> = 1278 as StorageDescriptor<[Key: Binary], Anonymize<I99bb69usss9gs>, true>;
const stg_AllianceMotion_ProposalCount: StorageDescriptor<[], number, false> = 1 as StorageDescriptor<[], number, false>;
const stg_AllianceMotion_Members: StorageDescriptor<[], Anonymize<Ia2lhg7l2hilo3>, false> = 83 as StorageDescriptor<[], Anonymize<Ia2lhg7l2hilo3>, false>;
const stg_AllianceMotion_Prime: StorageDescriptor<[], SS58String, true> = 82 as StorageDescriptor<[], SS58String, true>;
const stg_FellowshipCollective_MemberCount: StorageDescriptor<[Key: number], number, false> = 90 as StorageDescriptor<[Key: number], number, false>;
const stg_FellowshipCollective_Members: StorageDescriptor<[Key: SS58String], number, true> = 309 as StorageDescriptor<[Key: SS58String], number, true>;
const stg_FellowshipCollective_IdToIndex: StorageDescriptor<Anonymize<I7svnfko10tq2e>, number, true> = 149 as StorageDescriptor<Anonymize<I7svnfko10tq2e>, number, true>;
const stg_FellowshipCollective_IndexToId: StorageDescriptor<Anonymize<I5g2vv0ckl2m8b>, SS58String, true> = 1286 as StorageDescriptor<Anonymize<I5g2vv0ckl2m8b>, SS58String, true>;
const stg_FellowshipCollective_Voting: StorageDescriptor<Anonymize<I7svnfko10tq2e>, Anonymize<I996080trg6urn>, true> = 1287 as StorageDescriptor<Anonymize<I7svnfko10tq2e>, Anonymize<I996080trg6urn>, true>;
const stg_FellowshipCollective_VotingCleanup: StorageDescriptor<[Key: number], Binary, true> = 4 as StorageDescriptor<[Key: number], Binary, true>;
const stg_FellowshipReferenda_ReferendumCount: StorageDescriptor<[], number, false> = 1 as StorageDescriptor<[], number, false>;
const stg_FellowshipReferenda_ReferendumInfoFor: StorageDescriptor<[Key: number], Anonymize<I92r5g26hdf8cj>, true> = 1293 as StorageDescriptor<[Key: number], Anonymize<I92r5g26hdf8cj>, true>;
const stg_FellowshipReferenda_TrackQueue: StorageDescriptor<[Key: number], Anonymize<Iep4uo61810hfs>, false> = 1294 as StorageDescriptor<[Key: number], Anonymize<Iep4uo61810hfs>, false>;
const stg_FellowshipReferenda_DecidingCount: StorageDescriptor<[Key: number], number, false> = 90 as StorageDescriptor<[Key: number], number, false>;
const stg_FellowshipReferenda_MetadataOf: StorageDescriptor<[Key: number], Binary, true> = 3 as StorageDescriptor<[Key: number], Binary, true>;
const stg_FellowshipCore_Params: StorageDescriptor<[], Anonymize<Iec4blde7bc1ai>, false> = 1298 as StorageDescriptor<[], Anonymize<Iec4blde7bc1ai>, false>;
const stg_FellowshipCore_Member: StorageDescriptor<[Key: SS58String], Anonymize<Iq1c24rdj7v7p>, true> = 1299 as StorageDescriptor<[Key: SS58String], Anonymize<Iq1c24rdj7v7p>, true>;
const stg_FellowshipCore_MemberEvidence: StorageDescriptor<[Key: SS58String], Anonymize<I3vo1s729tgvdr>, true> = 1300 as StorageDescriptor<[Key: SS58String], Anonymize<I3vo1s729tgvdr>, true>;
const stg_FellowshipSalary_Status: StorageDescriptor<[], Anonymize<Idg0lipm04tfnv>, true> = 1309 as StorageDescriptor<[], Anonymize<Idg0lipm04tfnv>, true>;
const stg_FellowshipSalary_Claimant: StorageDescriptor<[Key: SS58String], Anonymize<Iesbdiip9d834l>, true> = 1310 as StorageDescriptor<[Key: SS58String], Anonymize<Iesbdiip9d834l>, true>;
const stg_FellowshipTreasury_ProposalCount: StorageDescriptor<[], number, false> = 1 as StorageDescriptor<[], number, false>;
const stg_FellowshipTreasury_Proposals: StorageDescriptor<[Key: number], Anonymize<Iegmj7n48sc3am>, true> = 153 as StorageDescriptor<[Key: number], Anonymize<Iegmj7n48sc3am>, true>;
const stg_FellowshipTreasury_Deactivated: StorageDescriptor<[], bigint, false> = 44 as StorageDescriptor<[], bigint, false>;
const stg_FellowshipTreasury_Approvals: StorageDescriptor<[], Anonymize<Icgljjb6j82uhn>, false> = 137 as StorageDescriptor<[], Anonymize<Icgljjb6j82uhn>, false>;
const stg_FellowshipTreasury_SpendCount: StorageDescriptor<[], number, false> = 1 as StorageDescriptor<[], number, false>;
const stg_FellowshipTreasury_Spends: StorageDescriptor<[Key: number], Anonymize<Ie05qfg5feue1l>, true> = 154 as StorageDescriptor<[Key: number], Anonymize<Ie05qfg5feue1l>, true>;
const call_System_remark: TxDescriptor<Anonymize<I8ofcg5rbj0g2c>> = 16 as TxDescriptor<Anonymize<I8ofcg5rbj0g2c>>;
const call_System_set_heap_pages: TxDescriptor<Anonymize<I4adgbll7gku4i>> = 17 as TxDescriptor<Anonymize<I4adgbll7gku4i>>;
const call_System_set_code: TxDescriptor<Anonymize<I6pjjpfvhvcfru>> = 18 as TxDescriptor<Anonymize<I6pjjpfvhvcfru>>;
const call_System_set_code_without_checks: TxDescriptor<Anonymize<I6pjjpfvhvcfru>> = 18 as TxDescriptor<Anonymize<I6pjjpfvhvcfru>>;
const call_System_set_storage: TxDescriptor<Anonymize<I8qrhskdehbu57>> = 19 as TxDescriptor<Anonymize<I8qrhskdehbu57>>;
const call_System_kill_storage: TxDescriptor<Anonymize<I39uah9nss64h9>> = 20 as TxDescriptor<Anonymize<I39uah9nss64h9>>;
const call_System_kill_prefix: TxDescriptor<Anonymize<Ik64dknsq7k08>> = 21 as TxDescriptor<Anonymize<Ik64dknsq7k08>>;
const call_System_remark_with_event: TxDescriptor<Anonymize<I8ofcg5rbj0g2c>> = 16 as TxDescriptor<Anonymize<I8ofcg5rbj0g2c>>;
const call_ParachainSystem_set_validation_data: TxDescriptor<Anonymize<I68js79djhsbni>> = 1198 as TxDescriptor<Anonymize<I68js79djhsbni>>;
const call_ParachainSystem_sudo_send_upward_message: TxDescriptor<Anonymize<Ifpj261e8s63m3>> = 1199 as TxDescriptor<Anonymize<Ifpj261e8s63m3>>;
const call_ParachainSystem_authorize_upgrade: TxDescriptor<Anonymize<Ib3qt1mgvgmbgi>> = 1197 as TxDescriptor<Anonymize<Ib3qt1mgvgmbgi>>;
const call_ParachainSystem_enact_authorized_upgrade: TxDescriptor<Anonymize<I6pjjpfvhvcfru>> = 18 as TxDescriptor<Anonymize<I6pjjpfvhvcfru>>;
const call_Timestamp_set: TxDescriptor<Anonymize<Idcr6u6361oad9>> = 55 as TxDescriptor<Anonymize<Idcr6u6361oad9>>;
const call_Balances_transfer_allow_death: TxDescriptor<Anonymize<Ien6q0lasi0m7i>> = 66 as TxDescriptor<Anonymize<Ien6q0lasi0m7i>>;
const call_Balances_force_transfer: TxDescriptor<Anonymize<Icacgruoo9j3r2>> = 67 as TxDescriptor<Anonymize<Icacgruoo9j3r2>>;
const call_Balances_transfer_keep_alive: TxDescriptor<Anonymize<Ien6q0lasi0m7i>> = 66 as TxDescriptor<Anonymize<Ien6q0lasi0m7i>>;
const call_Balances_transfer_all: TxDescriptor<Anonymize<I7dgmo7im9hljo>> = 68 as TxDescriptor<Anonymize<I7dgmo7im9hljo>>;
const call_Balances_force_unreserve: TxDescriptor<Anonymize<Iargojp1sv9icj>> = 69 as TxDescriptor<Anonymize<Iargojp1sv9icj>>;
const call_Balances_upgrade_accounts: TxDescriptor<Anonymize<Ibmr18suc9ikh9>> = 70 as TxDescriptor<Anonymize<Ibmr18suc9ikh9>>;
const call_Balances_force_set_balance: TxDescriptor<Anonymize<Ie0io91hk7pejj>> = 71 as TxDescriptor<Anonymize<Ie0io91hk7pejj>>;
const call_CollatorSelection_set_invulnerables: TxDescriptor<Anonymize<Ifccifqltb5obi>> = 1207 as TxDescriptor<Anonymize<Ifccifqltb5obi>>;
const call_CollatorSelection_set_desired_candidates: TxDescriptor<Anonymize<Iadtsfv699cq8b>> = 1208 as TxDescriptor<Anonymize<Iadtsfv699cq8b>>;
const call_CollatorSelection_set_candidacy_bond: TxDescriptor<Anonymize<Ialpmgmhr3gk5r>> = 1209 as TxDescriptor<Anonymize<Ialpmgmhr3gk5r>>;
const call_CollatorSelection_register_as_candidate: TxDescriptor<undefined> = 24 as TxDescriptor<undefined>;
const call_CollatorSelection_leave_intent: TxDescriptor<undefined> = 24 as TxDescriptor<undefined>;
const call_CollatorSelection_add_invulnerable: TxDescriptor<Anonymize<I4cbvqmqadhrea>> = 78 as TxDescriptor<Anonymize<I4cbvqmqadhrea>>;
const call_CollatorSelection_remove_invulnerable: TxDescriptor<Anonymize<I4cbvqmqadhrea>> = 78 as TxDescriptor<Anonymize<I4cbvqmqadhrea>>;
const call_Session_set_keys: TxDescriptor<Anonymize<Ivojoo8sbcs0m>> = 1216 as TxDescriptor<Anonymize<Ivojoo8sbcs0m>>;
const call_Session_purge_keys: TxDescriptor<undefined> = 24 as TxDescriptor<undefined>;
const call_XcmpQueue_service_overweight: TxDescriptor<Anonymize<Iab1retd4gg4q1>> = 1222 as TxDescriptor<Anonymize<Iab1retd4gg4q1>>;
const call_XcmpQueue_suspend_xcm_execution: TxDescriptor<undefined> = 24 as TxDescriptor<undefined>;
const call_XcmpQueue_resume_xcm_execution: TxDescriptor<undefined> = 24 as TxDescriptor<undefined>;
const call_XcmpQueue_update_suspend_threshold: TxDescriptor<Anonymize<I3vh014cqgmrfd>> = 110 as TxDescriptor<Anonymize<I3vh014cqgmrfd>>;
const call_XcmpQueue_update_drop_threshold: TxDescriptor<Anonymize<I3vh014cqgmrfd>> = 110 as TxDescriptor<Anonymize<I3vh014cqgmrfd>>;
const call_XcmpQueue_update_resume_threshold: TxDescriptor<Anonymize<I3vh014cqgmrfd>> = 110 as TxDescriptor<Anonymize<I3vh014cqgmrfd>>;
const call_XcmpQueue_update_threshold_weight: TxDescriptor<Anonymize<I2tni7rrb2buqm>> = 1223 as TxDescriptor<Anonymize<I2tni7rrb2buqm>>;
const call_XcmpQueue_update_weight_restrict_decay: TxDescriptor<Anonymize<I2tni7rrb2buqm>> = 1223 as TxDescriptor<Anonymize<I2tni7rrb2buqm>>;
const call_XcmpQueue_update_xcmp_max_individual_weight: TxDescriptor<Anonymize<I2tni7rrb2buqm>> = 1223 as TxDescriptor<Anonymize<I2tni7rrb2buqm>>;
const call_PolkadotXcm_send: TxDescriptor<Anonymize<Icvpjofp09bmlh>> = 458 as TxDescriptor<Anonymize<Icvpjofp09bmlh>>;
const call_PolkadotXcm_teleport_assets: TxDescriptor<Anonymize<Ieeis6pj62kiu4>> = 459 as TxDescriptor<Anonymize<Ieeis6pj62kiu4>>;
const call_PolkadotXcm_reserve_transfer_assets: TxDescriptor<Anonymize<Ieeis6pj62kiu4>> = 459 as TxDescriptor<Anonymize<Ieeis6pj62kiu4>>;
const call_PolkadotXcm_execute: TxDescriptor<Anonymize<I53e0mdinhcvpm>> = 460 as TxDescriptor<Anonymize<I53e0mdinhcvpm>>;
const call_PolkadotXcm_force_xcm_version: TxDescriptor<Anonymize<I732o5n04n5ohg>> = 461 as TxDescriptor<Anonymize<I732o5n04n5ohg>>;
const call_PolkadotXcm_force_default_xcm_version: TxDescriptor<Anonymize<Ic76kfh5ebqkpl>> = 462 as TxDescriptor<Anonymize<Ic76kfh5ebqkpl>>;
const call_PolkadotXcm_force_subscribe_version_notify: TxDescriptor<Anonymize<I3pog27ittgi9g>> = 463 as TxDescriptor<Anonymize<I3pog27ittgi9g>>;
const call_PolkadotXcm_force_unsubscribe_version_notify: TxDescriptor<Anonymize<I3pog27ittgi9g>> = 463 as TxDescriptor<Anonymize<I3pog27ittgi9g>>;
const call_PolkadotXcm_limited_reserve_transfer_assets: TxDescriptor<Anonymize<Ifcceq8taolrca>> = 464 as TxDescriptor<Anonymize<Ifcceq8taolrca>>;
const call_PolkadotXcm_limited_teleport_assets: TxDescriptor<Anonymize<Ifcceq8taolrca>> = 464 as TxDescriptor<Anonymize<Ifcceq8taolrca>>;
const call_PolkadotXcm_force_suspension: TxDescriptor<Anonymize<Ibgm4rnf22lal1>> = 465 as TxDescriptor<Anonymize<Ibgm4rnf22lal1>>;
const call_DmpQueue_service_overweight: TxDescriptor<Anonymize<Iab1retd4gg4q1>> = 1222 as TxDescriptor<Anonymize<Iab1retd4gg4q1>>;
const call_Utility_batch: TxDescriptor<Anonymize<Id0f4f8p846e4o>> = 1238 as TxDescriptor<Anonymize<Id0f4f8p846e4o>>;
const call_Utility_as_derivative: TxDescriptor<Anonymize<Idkn325fta6i3i>> = 1239 as TxDescriptor<Anonymize<Idkn325fta6i3i>>;
const call_Utility_batch_all: TxDescriptor<Anonymize<Id0f4f8p846e4o>> = 1238 as TxDescriptor<Anonymize<Id0f4f8p846e4o>>;
const call_Utility_dispatch_as: TxDescriptor<Anonymize<Iq7iccc2hfumf>> = 1240 as TxDescriptor<Anonymize<Iq7iccc2hfumf>>;
const call_Utility_force_batch: TxDescriptor<Anonymize<Id0f4f8p846e4o>> = 1238 as TxDescriptor<Anonymize<Id0f4f8p846e4o>>;
const call_Utility_with_weight: TxDescriptor<Anonymize<I1654abd13olpl>> = 1241 as TxDescriptor<Anonymize<I1654abd13olpl>>;
const call_Multisig_as_multi_threshold_1: TxDescriptor<Anonymize<Idbktfo7cbj1un>> = 1242 as TxDescriptor<Anonymize<Idbktfo7cbj1un>>;
const call_Multisig_as_multi: TxDescriptor<Anonymize<I1nc4131phq95n>> = 1243 as TxDescriptor<Anonymize<I1nc4131phq95n>>;
const call_Multisig_approve_as_multi: TxDescriptor<Anonymize<I349bg0i7n8ohu>> = 256 as TxDescriptor<Anonymize<I349bg0i7n8ohu>>;
const call_Multisig_cancel_as_multi: TxDescriptor<Anonymize<I8plicv234mqe5>> = 257 as TxDescriptor<Anonymize<I8plicv234mqe5>>;
const call_Proxy_proxy: TxDescriptor<Anonymize<I8mlu7201qva4e>> = 1245 as TxDescriptor<Anonymize<I8mlu7201qva4e>>;
const call_Proxy_add_proxy: TxDescriptor<Anonymize<I490uvap9onp3g>> = 1246 as TxDescriptor<Anonymize<I490uvap9onp3g>>;
const call_Proxy_remove_proxy: TxDescriptor<Anonymize<I490uvap9onp3g>> = 1246 as TxDescriptor<Anonymize<I490uvap9onp3g>>;
const call_Proxy_remove_proxies: TxDescriptor<undefined> = 24 as TxDescriptor<undefined>;
const call_Proxy_create_pure: TxDescriptor<Anonymize<I8v053pd8im1d3>> = 1247 as TxDescriptor<Anonymize<I8v053pd8im1d3>>;
const call_Proxy_kill_pure: TxDescriptor<Anonymize<Ibnon1qvc1ro8>> = 1248 as TxDescriptor<Anonymize<Ibnon1qvc1ro8>>;
const call_Proxy_announce: TxDescriptor<Anonymize<Id3bpmvju2iqi5>> = 247 as TxDescriptor<Anonymize<Id3bpmvju2iqi5>>;
const call_Proxy_remove_announcement: TxDescriptor<Anonymize<Id3bpmvju2iqi5>> = 247 as TxDescriptor<Anonymize<Id3bpmvju2iqi5>>;
const call_Proxy_reject_announcement: TxDescriptor<Anonymize<Ietdab69eu3c4e>> = 248 as TxDescriptor<Anonymize<Ietdab69eu3c4e>>;
const call_Proxy_proxy_announced: TxDescriptor<Anonymize<I6ckidq7jkqmnt>> = 1249 as TxDescriptor<Anonymize<I6ckidq7jkqmnt>>;
const call_Preimage_note_preimage: TxDescriptor<Anonymize<I82nfqfkd48n10>> = 41 as TxDescriptor<Anonymize<I82nfqfkd48n10>>;
const call_Preimage_unnote_preimage: TxDescriptor<Anonymize<Id9d48vaes3c53>> = 42 as TxDescriptor<Anonymize<Id9d48vaes3c53>>;
const call_Preimage_request_preimage: TxDescriptor<Anonymize<Id9d48vaes3c53>> = 42 as TxDescriptor<Anonymize<Id9d48vaes3c53>>;
const call_Preimage_unrequest_preimage: TxDescriptor<Anonymize<Id9d48vaes3c53>> = 42 as TxDescriptor<Anonymize<Id9d48vaes3c53>>;
const call_Preimage_ensure_updated: TxDescriptor<Anonymize<Idaor7tajt0l3k>> = 43 as TxDescriptor<Anonymize<Idaor7tajt0l3k>>;
const call_Scheduler_schedule: TxDescriptor<Anonymize<I1qkfnm7irt5un>> = 1253 as TxDescriptor<Anonymize<I1qkfnm7irt5un>>;
const call_Scheduler_cancel: TxDescriptor<Anonymize<I5n4sebgkfr760>> = 31 as TxDescriptor<Anonymize<I5n4sebgkfr760>>;
const call_Scheduler_schedule_named: TxDescriptor<Anonymize<Icu99suj4go17>> = 1254 as TxDescriptor<Anonymize<Icu99suj4go17>>;
const call_Scheduler_cancel_named: TxDescriptor<Anonymize<Idsdstalforb09>> = 33 as TxDescriptor<Anonymize<Idsdstalforb09>>;
const call_Scheduler_schedule_after: TxDescriptor<Anonymize<I6eugra8pivgrs>> = 1255 as TxDescriptor<Anonymize<I6eugra8pivgrs>>;
const call_Scheduler_schedule_named_after: TxDescriptor<Anonymize<I11o2rsm65pn9o>> = 1256 as TxDescriptor<Anonymize<I11o2rsm65pn9o>>;
const call_AssetRate_create: TxDescriptor<Anonymize<I16soggnee6qrb>> = 492 as TxDescriptor<Anonymize<I16soggnee6qrb>>;
const call_AssetRate_update: TxDescriptor<Anonymize<I16soggnee6qrb>> = 492 as TxDescriptor<Anonymize<I16soggnee6qrb>>;
const call_AssetRate_remove: TxDescriptor<Anonymize<Ifvnf1s3g2lg8u>> = 493 as TxDescriptor<Anonymize<Ifvnf1s3g2lg8u>>;
const call_Alliance_propose: TxDescriptor<Anonymize<Iklhae5b9b3k8>> = 1260 as TxDescriptor<Anonymize<Iklhae5b9b3k8>>;
const call_Alliance_vote: TxDescriptor<Anonymize<I4ncel23eptqai>> = 1261 as TxDescriptor<Anonymize<I4ncel23eptqai>>;
const call_Alliance_init_members: TxDescriptor<Anonymize<Ia61kag3grdevk>> = 1262 as TxDescriptor<Anonymize<Ia61kag3grdevk>>;
const call_Alliance_disband: TxDescriptor<Anonymize<Icq0crsj7vrl4j>> = 1263 as TxDescriptor<Anonymize<Icq0crsj7vrl4j>>;
const call_Alliance_set_rule: TxDescriptor<Anonymize<I2dgasao7pteq7>> = 1264 as TxDescriptor<Anonymize<I2dgasao7pteq7>>;
const call_Alliance_announce: TxDescriptor<Anonymize<I56f2tlouivnqg>> = 1265 as TxDescriptor<Anonymize<I56f2tlouivnqg>>;
const call_Alliance_remove_announcement: TxDescriptor<Anonymize<I56f2tlouivnqg>> = 1265 as TxDescriptor<Anonymize<I56f2tlouivnqg>>;
const call_Alliance_join_alliance: TxDescriptor<undefined> = 24 as TxDescriptor<undefined>;
const call_Alliance_nominate_ally: TxDescriptor<Anonymize<I2nmm2fprtp4kl>> = 1266 as TxDescriptor<Anonymize<I2nmm2fprtp4kl>>;
const call_Alliance_elevate_ally: TxDescriptor<Anonymize<I5vno9afhrn994>> = 1267 as TxDescriptor<Anonymize<I5vno9afhrn994>>;
const call_Alliance_give_retirement_notice: TxDescriptor<undefined> = 24 as TxDescriptor<undefined>;
const call_Alliance_retire: TxDescriptor<undefined> = 24 as TxDescriptor<undefined>;
const call_Alliance_kick_member: TxDescriptor<Anonymize<I2nmm2fprtp4kl>> = 1266 as TxDescriptor<Anonymize<I2nmm2fprtp4kl>>;
const call_Alliance_add_unscrupulous_items: TxDescriptor<Anonymize<I2t3hu6k5vesjh>> = 1268 as TxDescriptor<Anonymize<I2t3hu6k5vesjh>>;
const call_Alliance_remove_unscrupulous_items: TxDescriptor<Anonymize<I2t3hu6k5vesjh>> = 1268 as TxDescriptor<Anonymize<I2t3hu6k5vesjh>>;
const call_Alliance_close: TxDescriptor<Anonymize<Ic3aqnecvctqmc>> = 1269 as TxDescriptor<Anonymize<Ic3aqnecvctqmc>>;
const call_Alliance_abdicate_fellow_status: TxDescriptor<undefined> = 24 as TxDescriptor<undefined>;
const call_AllianceMotion_set_members: TxDescriptor<Anonymize<I38jfk5li8iang>> = 1279 as TxDescriptor<Anonymize<I38jfk5li8iang>>;
const call_AllianceMotion_execute: TxDescriptor<Anonymize<I8jhljjof4f7u2>> = 1280 as TxDescriptor<Anonymize<I8jhljjof4f7u2>>;
const call_AllianceMotion_propose: TxDescriptor<Anonymize<Iklhae5b9b3k8>> = 1260 as TxDescriptor<Anonymize<Iklhae5b9b3k8>>;
const call_AllianceMotion_vote: TxDescriptor<Anonymize<I4ncel23eptqai>> = 1261 as TxDescriptor<Anonymize<I4ncel23eptqai>>;
const call_AllianceMotion_disapprove_proposal: TxDescriptor<Anonymize<Icraueddqmudct>> = 1281 as TxDescriptor<Anonymize<Icraueddqmudct>>;
const call_AllianceMotion_close: TxDescriptor<Anonymize<Ic3aqnecvctqmc>> = 1269 as TxDescriptor<Anonymize<Ic3aqnecvctqmc>>;
const call_FellowshipCollective_add_member: TxDescriptor<Anonymize<I2nmm2fprtp4kl>> = 1266 as TxDescriptor<Anonymize<I2nmm2fprtp4kl>>;
const call_FellowshipCollective_promote_member: TxDescriptor<Anonymize<I2nmm2fprtp4kl>> = 1266 as TxDescriptor<Anonymize<I2nmm2fprtp4kl>>;
const call_FellowshipCollective_demote_member: TxDescriptor<Anonymize<I2nmm2fprtp4kl>> = 1266 as TxDescriptor<Anonymize<I2nmm2fprtp4kl>>;
const call_FellowshipCollective_remove_member: TxDescriptor<Anonymize<I8c23ih8fpmjma>> = 1288 as TxDescriptor<Anonymize<I8c23ih8fpmjma>>;
const call_FellowshipCollective_vote: TxDescriptor<Anonymize<I8bvk21lpmah75>> = 1289 as TxDescriptor<Anonymize<I8bvk21lpmah75>>;
const call_FellowshipCollective_cleanup_poll: TxDescriptor<Anonymize<I449n3riv6jbum>> = 1290 as TxDescriptor<Anonymize<I449n3riv6jbum>>;
const call_FellowshipReferenda_submit: TxDescriptor<Anonymize<Ihqgnavvsqvf8>> = 1295 as TxDescriptor<Anonymize<Ihqgnavvsqvf8>>;
const call_FellowshipReferenda_place_decision_deposit: TxDescriptor<Anonymize<I666bl2fqjkejo>> = 57 as TxDescriptor<Anonymize<I666bl2fqjkejo>>;
const call_FellowshipReferenda_refund_decision_deposit: TxDescriptor<Anonymize<I666bl2fqjkejo>> = 57 as TxDescriptor<Anonymize<I666bl2fqjkejo>>;
const call_FellowshipReferenda_cancel: TxDescriptor<Anonymize<I666bl2fqjkejo>> = 57 as TxDescriptor<Anonymize<I666bl2fqjkejo>>;
const call_FellowshipReferenda_kill: TxDescriptor<Anonymize<I666bl2fqjkejo>> = 57 as TxDescriptor<Anonymize<I666bl2fqjkejo>>;
const call_FellowshipReferenda_nudge_referendum: TxDescriptor<Anonymize<I666bl2fqjkejo>> = 57 as TxDescriptor<Anonymize<I666bl2fqjkejo>>;
const call_FellowshipReferenda_one_fewer_deciding: TxDescriptor<Anonymize<Icbio0e1f0034b>> = 185 as TxDescriptor<Anonymize<Icbio0e1f0034b>>;
const call_FellowshipReferenda_refund_submission_deposit: TxDescriptor<Anonymize<I666bl2fqjkejo>> = 57 as TxDescriptor<Anonymize<I666bl2fqjkejo>>;
const call_FellowshipReferenda_set_metadata: TxDescriptor<Anonymize<Ifml0k0sf0mu2g>> = 186 as TxDescriptor<Anonymize<Ifml0k0sf0mu2g>>;
const call_FellowshipCore_bump: TxDescriptor<Anonymize<I4cbvqmqadhrea>> = 78 as TxDescriptor<Anonymize<I4cbvqmqadhrea>>;
const call_FellowshipCore_set_params: TxDescriptor<Anonymize<I875hrun7fs7ik>> = 1301 as TxDescriptor<Anonymize<I875hrun7fs7ik>>;
const call_FellowshipCore_set_active: TxDescriptor<Anonymize<I27vrusv8rgd90>> = 1302 as TxDescriptor<Anonymize<I27vrusv8rgd90>>;
const call_FellowshipCore_approve: TxDescriptor<Anonymize<Ic79d2eioda33s>> = 1303 as TxDescriptor<Anonymize<Ic79d2eioda33s>>;
const call_FellowshipCore_induct: TxDescriptor<Anonymize<I4cbvqmqadhrea>> = 78 as TxDescriptor<Anonymize<I4cbvqmqadhrea>>;
const call_FellowshipCore_promote: TxDescriptor<Anonymize<I5kpe8b2kedtqn>> = 1304 as TxDescriptor<Anonymize<I5kpe8b2kedtqn>>;
const call_FellowshipCore_offboard: TxDescriptor<Anonymize<I4cbvqmqadhrea>> = 78 as TxDescriptor<Anonymize<I4cbvqmqadhrea>>;
const call_FellowshipCore_submit_evidence: TxDescriptor<Anonymize<Iegaehkdq4ofh>> = 1305 as TxDescriptor<Anonymize<Iegaehkdq4ofh>>;
const call_FellowshipCore_import: TxDescriptor<undefined> = 24 as TxDescriptor<undefined>;
const call_FellowshipSalary_init: TxDescriptor<undefined> = 24 as TxDescriptor<undefined>;
const call_FellowshipSalary_bump: TxDescriptor<undefined> = 24 as TxDescriptor<undefined>;
const call_FellowshipSalary_induct: TxDescriptor<undefined> = 24 as TxDescriptor<undefined>;
const call_FellowshipSalary_register: TxDescriptor<undefined> = 24 as TxDescriptor<undefined>;
const call_FellowshipSalary_payout: TxDescriptor<undefined> = 24 as TxDescriptor<undefined>;
const call_FellowshipSalary_payout_other: TxDescriptor<Anonymize<I8ligieds2efci>> = 1311 as TxDescriptor<Anonymize<I8ligieds2efci>>;
const call_FellowshipSalary_check_payment: TxDescriptor<undefined> = 24 as TxDescriptor<undefined>;
const call_FellowshipTreasury_propose_spend: TxDescriptor<Anonymize<I5c883qnnqciv8>> = 157 as TxDescriptor<Anonymize<I5c883qnnqciv8>>;
const call_FellowshipTreasury_reject_proposal: TxDescriptor<Anonymize<Icm9m0qeemu66d>> = 158 as TxDescriptor<Anonymize<Icm9m0qeemu66d>>;
const call_FellowshipTreasury_approve_proposal: TxDescriptor<Anonymize<Icm9m0qeemu66d>> = 158 as TxDescriptor<Anonymize<Icm9m0qeemu66d>>;
const call_FellowshipTreasury_spend_local: TxDescriptor<Anonymize<Idpn74s0i9cdvp>> = 159 as TxDescriptor<Anonymize<Idpn74s0i9cdvp>>;
const call_FellowshipTreasury_remove_approval: TxDescriptor<Anonymize<Icm9m0qeemu66d>> = 158 as TxDescriptor<Anonymize<Icm9m0qeemu66d>>;
const call_FellowshipTreasury_spend: TxDescriptor<Anonymize<I815t7ta25e227>> = 160 as TxDescriptor<Anonymize<I815t7ta25e227>>;
const call_FellowshipTreasury_payout: TxDescriptor<Anonymize<I666bl2fqjkejo>> = 57 as TxDescriptor<Anonymize<I666bl2fqjkejo>>;
const call_FellowshipTreasury_check_status: TxDescriptor<Anonymize<I666bl2fqjkejo>> = 57 as TxDescriptor<Anonymize<I666bl2fqjkejo>>;
const call_FellowshipTreasury_void_spend: TxDescriptor<Anonymize<I666bl2fqjkejo>> = 57 as TxDescriptor<Anonymize<I666bl2fqjkejo>>;
const evt_System_ExtrinsicSuccess: PlainDescriptor<Anonymize<Iede1ukavoderd>> = 22 as PlainDescriptor<Anonymize<Iede1ukavoderd>>;
const evt_System_ExtrinsicFailed: PlainDescriptor<Anonymize<Iennefu6o2bgdm>> = 23 as PlainDescriptor<Anonymize<Iennefu6o2bgdm>>;
const evt_System_CodeUpdated: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const evt_System_NewAccount: PlainDescriptor<Anonymize<Icbccs0ug47ilf>> = 25 as PlainDescriptor<Anonymize<Icbccs0ug47ilf>>;
const evt_System_KilledAccount: PlainDescriptor<Anonymize<Icbccs0ug47ilf>> = 25 as PlainDescriptor<Anonymize<Icbccs0ug47ilf>>;
const evt_System_Remarked: PlainDescriptor<Anonymize<Ieob37pbjnvmkj>> = 26 as PlainDescriptor<Anonymize<Ieob37pbjnvmkj>>;
const evt_ParachainSystem_ValidationFunctionStored: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const evt_ParachainSystem_ValidationFunctionApplied: PlainDescriptor<Anonymize<Idd7hd99u0ho0n>> = 1200 as PlainDescriptor<Anonymize<Idd7hd99u0ho0n>>;
const evt_ParachainSystem_ValidationFunctionDiscarded: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const evt_ParachainSystem_UpgradeAuthorized: PlainDescriptor<Anonymize<I6a5n5ij3gomuo>> = 1201 as PlainDescriptor<Anonymize<I6a5n5ij3gomuo>>;
const evt_ParachainSystem_DownwardMessagesReceived: PlainDescriptor<Anonymize<Iafscmv8tjf0ou>> = 1202 as PlainDescriptor<Anonymize<Iafscmv8tjf0ou>>;
const evt_ParachainSystem_DownwardMessagesProcessed: PlainDescriptor<Anonymize<I7a3a6ua4hud3s>> = 1203 as PlainDescriptor<Anonymize<I7a3a6ua4hud3s>>;
const evt_ParachainSystem_UpwardMessageSent: PlainDescriptor<Anonymize<I4n7056p1k6c8b>> = 1204 as PlainDescriptor<Anonymize<I4n7056p1k6c8b>>;
const evt_Balances_Endowed: PlainDescriptor<Anonymize<Icv68aq8841478>> = 72 as PlainDescriptor<Anonymize<Icv68aq8841478>>;
const evt_Balances_DustLost: PlainDescriptor<Anonymize<Ic262ibdoec56a>> = 73 as PlainDescriptor<Anonymize<Ic262ibdoec56a>>;
const evt_Balances_Transfer: PlainDescriptor<Anonymize<Iflcfm9b6nlmdd>> = 74 as PlainDescriptor<Anonymize<Iflcfm9b6nlmdd>>;
const evt_Balances_BalanceSet: PlainDescriptor<Anonymize<Ijrsf4mnp3eka>> = 75 as PlainDescriptor<Anonymize<Ijrsf4mnp3eka>>;
const evt_Balances_Reserved: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>> = 76 as PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
const evt_Balances_Unreserved: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>> = 76 as PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
const evt_Balances_ReserveRepatriated: PlainDescriptor<Anonymize<Idm5rqp3duosod>> = 77 as PlainDescriptor<Anonymize<Idm5rqp3duosod>>;
const evt_Balances_Deposit: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>> = 76 as PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
const evt_Balances_Withdraw: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>> = 76 as PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
const evt_Balances_Slashed: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>> = 76 as PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
const evt_Balances_Minted: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>> = 76 as PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
const evt_Balances_Burned: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>> = 76 as PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
const evt_Balances_Suspended: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>> = 76 as PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
const evt_Balances_Restored: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>> = 76 as PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
const evt_Balances_Upgraded: PlainDescriptor<Anonymize<I4cbvqmqadhrea>> = 78 as PlainDescriptor<Anonymize<I4cbvqmqadhrea>>;
const evt_Balances_Issued: PlainDescriptor<Anonymize<I3qt1hgg4djhgb>> = 79 as PlainDescriptor<Anonymize<I3qt1hgg4djhgb>>;
const evt_Balances_Rescinded: PlainDescriptor<Anonymize<I3qt1hgg4djhgb>> = 79 as PlainDescriptor<Anonymize<I3qt1hgg4djhgb>>;
const evt_Balances_Locked: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>> = 76 as PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
const evt_Balances_Unlocked: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>> = 76 as PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
const evt_Balances_Frozen: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>> = 76 as PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
const evt_Balances_Thawed: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>> = 76 as PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
const evt_TransactionPayment_TransactionFeePaid: PlainDescriptor<Anonymize<Ier2cke86dqbr2>> = 81 as PlainDescriptor<Anonymize<Ier2cke86dqbr2>>;
const evt_CollatorSelection_NewInvulnerables: PlainDescriptor<Anonymize<I39t01nnod9109>> = 113 as PlainDescriptor<Anonymize<I39t01nnod9109>>;
const evt_CollatorSelection_InvulnerableAdded: PlainDescriptor<Anonymize<I6v8sm60vvkmk7>> = 1210 as PlainDescriptor<Anonymize<I6v8sm60vvkmk7>>;
const evt_CollatorSelection_InvulnerableRemoved: PlainDescriptor<Anonymize<I6v8sm60vvkmk7>> = 1210 as PlainDescriptor<Anonymize<I6v8sm60vvkmk7>>;
const evt_CollatorSelection_NewDesiredCandidates: PlainDescriptor<Anonymize<I1qmtmbe5so8r3>> = 1211 as PlainDescriptor<Anonymize<I1qmtmbe5so8r3>>;
const evt_CollatorSelection_NewCandidacyBond: PlainDescriptor<Anonymize<Ih99m6ehpcar7>> = 1212 as PlainDescriptor<Anonymize<Ih99m6ehpcar7>>;
const evt_CollatorSelection_CandidateAdded: PlainDescriptor<Anonymize<Idgorhsbgdq2ap>> = 1213 as PlainDescriptor<Anonymize<Idgorhsbgdq2ap>>;
const evt_CollatorSelection_CandidateRemoved: PlainDescriptor<Anonymize<I6v8sm60vvkmk7>> = 1210 as PlainDescriptor<Anonymize<I6v8sm60vvkmk7>>;
const evt_CollatorSelection_InvalidInvulnerableSkipped: PlainDescriptor<Anonymize<I6v8sm60vvkmk7>> = 1210 as PlainDescriptor<Anonymize<I6v8sm60vvkmk7>>;
const evt_Session_NewSession: PlainDescriptor<Anonymize<I2hq50pu2kdjpo>> = 125 as PlainDescriptor<Anonymize<I2hq50pu2kdjpo>>;
const evt_XcmpQueue_Success: PlainDescriptor<Anonymize<I7nj4acpodcef4>> = 1224 as PlainDescriptor<Anonymize<I7nj4acpodcef4>>;
const evt_XcmpQueue_Fail: PlainDescriptor<Anonymize<I3n8ln6mqdfgb8>> = 1225 as PlainDescriptor<Anonymize<I3n8ln6mqdfgb8>>;
const evt_XcmpQueue_BadVersion: PlainDescriptor<Anonymize<I2vo9trn8nhllu>> = 1226 as PlainDescriptor<Anonymize<I2vo9trn8nhllu>>;
const evt_XcmpQueue_BadFormat: PlainDescriptor<Anonymize<I2vo9trn8nhllu>> = 1226 as PlainDescriptor<Anonymize<I2vo9trn8nhllu>>;
const evt_XcmpQueue_XcmpMessageSent: PlainDescriptor<Anonymize<I2vo9trn8nhllu>> = 1226 as PlainDescriptor<Anonymize<I2vo9trn8nhllu>>;
const evt_XcmpQueue_OverweightEnqueued: PlainDescriptor<Anonymize<If8b64mo2bodj0>> = 1227 as PlainDescriptor<Anonymize<If8b64mo2bodj0>>;
const evt_XcmpQueue_OverweightServiced: PlainDescriptor<Anonymize<Icu5p58ltu1veo>> = 1228 as PlainDescriptor<Anonymize<Icu5p58ltu1veo>>;
const evt_PolkadotXcm_Attempted: PlainDescriptor<Anonymize<I4e7dkr4hrus3u>> = 466 as PlainDescriptor<Anonymize<I4e7dkr4hrus3u>>;
const evt_PolkadotXcm_Sent: PlainDescriptor<Anonymize<Ia5b8kts5gt3p5>> = 467 as PlainDescriptor<Anonymize<Ia5b8kts5gt3p5>>;
const evt_PolkadotXcm_UnexpectedResponse: PlainDescriptor<Anonymize<Ise9r0vrat2m6>> = 468 as PlainDescriptor<Anonymize<Ise9r0vrat2m6>>;
const evt_PolkadotXcm_ResponseReady: PlainDescriptor<Anonymize<I7kkbgm2llu2o3>> = 469 as PlainDescriptor<Anonymize<I7kkbgm2llu2o3>>;
const evt_PolkadotXcm_Notified: PlainDescriptor<Anonymize<I2uqmls7kcdnii>> = 470 as PlainDescriptor<Anonymize<I2uqmls7kcdnii>>;
const evt_PolkadotXcm_NotifyOverweight: PlainDescriptor<Anonymize<Idg69klialbkb8>> = 471 as PlainDescriptor<Anonymize<Idg69klialbkb8>>;
const evt_PolkadotXcm_NotifyDispatchError: PlainDescriptor<Anonymize<I2uqmls7kcdnii>> = 470 as PlainDescriptor<Anonymize<I2uqmls7kcdnii>>;
const evt_PolkadotXcm_NotifyDecodeFailed: PlainDescriptor<Anonymize<I2uqmls7kcdnii>> = 470 as PlainDescriptor<Anonymize<I2uqmls7kcdnii>>;
const evt_PolkadotXcm_InvalidResponder: PlainDescriptor<Anonymize<I9j133okge3c2>> = 472 as PlainDescriptor<Anonymize<I9j133okge3c2>>;
const evt_PolkadotXcm_InvalidResponderVersion: PlainDescriptor<Anonymize<Ise9r0vrat2m6>> = 468 as PlainDescriptor<Anonymize<Ise9r0vrat2m6>>;
const evt_PolkadotXcm_ResponseTaken: PlainDescriptor<Anonymize<I30pg328m00nr3>> = 473 as PlainDescriptor<Anonymize<I30pg328m00nr3>>;
const evt_PolkadotXcm_AssetsTrapped: PlainDescriptor<Anonymize<I5qm1bvb2j3ap2>> = 474 as PlainDescriptor<Anonymize<I5qm1bvb2j3ap2>>;
const evt_PolkadotXcm_VersionChangeNotified: PlainDescriptor<Anonymize<I95aqmsd6gjmqs>> = 475 as PlainDescriptor<Anonymize<I95aqmsd6gjmqs>>;
const evt_PolkadotXcm_SupportedVersionChanged: PlainDescriptor<Anonymize<I732o5n04n5ohg>> = 461 as PlainDescriptor<Anonymize<I732o5n04n5ohg>>;
const evt_PolkadotXcm_NotifyTargetSendFail: PlainDescriptor<Anonymize<Iarlf7ddo81fm5>> = 476 as PlainDescriptor<Anonymize<Iarlf7ddo81fm5>>;
const evt_PolkadotXcm_NotifyTargetMigrationFail: PlainDescriptor<Anonymize<Ie9bjgclf7vho0>> = 477 as PlainDescriptor<Anonymize<Ie9bjgclf7vho0>>;
const evt_PolkadotXcm_InvalidQuerierVersion: PlainDescriptor<Anonymize<Ise9r0vrat2m6>> = 468 as PlainDescriptor<Anonymize<Ise9r0vrat2m6>>;
const evt_PolkadotXcm_InvalidQuerier: PlainDescriptor<Anonymize<I7dm0nb8u3g2hv>> = 478 as PlainDescriptor<Anonymize<I7dm0nb8u3g2hv>>;
const evt_PolkadotXcm_VersionNotifyStarted: PlainDescriptor<Anonymize<I5pnf8l8c1nkfk>> = 479 as PlainDescriptor<Anonymize<I5pnf8l8c1nkfk>>;
const evt_PolkadotXcm_VersionNotifyRequested: PlainDescriptor<Anonymize<I5pnf8l8c1nkfk>> = 479 as PlainDescriptor<Anonymize<I5pnf8l8c1nkfk>>;
const evt_PolkadotXcm_VersionNotifyUnrequested: PlainDescriptor<Anonymize<I5pnf8l8c1nkfk>> = 479 as PlainDescriptor<Anonymize<I5pnf8l8c1nkfk>>;
const evt_PolkadotXcm_FeesPaid: PlainDescriptor<Anonymize<Ibknqphki4flb3>> = 480 as PlainDescriptor<Anonymize<Ibknqphki4flb3>>;
const evt_PolkadotXcm_AssetsClaimed: PlainDescriptor<Anonymize<I5qm1bvb2j3ap2>> = 474 as PlainDescriptor<Anonymize<I5qm1bvb2j3ap2>>;
const evt_CumulusXcm_InvalidFormat: PlainDescriptor<Binary> = 1229 as PlainDescriptor<Binary>;
const evt_CumulusXcm_UnsupportedVersion: PlainDescriptor<Binary> = 1229 as PlainDescriptor<Binary>;
const evt_CumulusXcm_ExecutedDownward: PlainDescriptor<Anonymize<Id0ii3t0e6fgob>> = 1230 as PlainDescriptor<Anonymize<Id0ii3t0e6fgob>>;
const evt_DmpQueue_InvalidFormat: PlainDescriptor<Anonymize<I2vo9trn8nhllu>> = 1226 as PlainDescriptor<Anonymize<I2vo9trn8nhllu>>;
const evt_DmpQueue_UnsupportedVersion: PlainDescriptor<Anonymize<I2vo9trn8nhllu>> = 1226 as PlainDescriptor<Anonymize<I2vo9trn8nhllu>>;
const evt_DmpQueue_ExecutedDownward: PlainDescriptor<Anonymize<I6mr530l14uapg>> = 1234 as PlainDescriptor<Anonymize<I6mr530l14uapg>>;
const evt_DmpQueue_WeightExhausted: PlainDescriptor<Anonymize<I2ds5dc604t7si>> = 1235 as PlainDescriptor<Anonymize<I2ds5dc604t7si>>;
const evt_DmpQueue_OverweightEnqueued: PlainDescriptor<Anonymize<Idqsknek3bsc0s>> = 1236 as PlainDescriptor<Anonymize<Idqsknek3bsc0s>>;
const evt_DmpQueue_OverweightServiced: PlainDescriptor<Anonymize<Ise9gq7rqlnvm>> = 1237 as PlainDescriptor<Anonymize<Ise9gq7rqlnvm>>;
const evt_DmpQueue_MaxMessagesExhausted: PlainDescriptor<Anonymize<I2vo9trn8nhllu>> = 1226 as PlainDescriptor<Anonymize<I2vo9trn8nhllu>>;
const evt_Utility_BatchInterrupted: PlainDescriptor<Anonymize<I6tn8e5lqr339o>> = 219 as PlainDescriptor<Anonymize<I6tn8e5lqr339o>>;
const evt_Utility_BatchCompleted: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const evt_Utility_BatchCompletedWithErrors: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const evt_Utility_ItemCompleted: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const evt_Utility_ItemFailed: PlainDescriptor<Anonymize<I11lb9o37qkk4f>> = 220 as PlainDescriptor<Anonymize<I11lb9o37qkk4f>>;
const evt_Utility_DispatchedAs: PlainDescriptor<Anonymize<Ie5i8qqljk3tjb>> = 221 as PlainDescriptor<Anonymize<Ie5i8qqljk3tjb>>;
const evt_Multisig_NewMultisig: PlainDescriptor<Anonymize<Ibvv58de7m7rsi>> = 258 as PlainDescriptor<Anonymize<Ibvv58de7m7rsi>>;
const evt_Multisig_MultisigApproval: PlainDescriptor<Anonymize<I4uo2dg1jvbdtg>> = 259 as PlainDescriptor<Anonymize<I4uo2dg1jvbdtg>>;
const evt_Multisig_MultisigExecuted: PlainDescriptor<Anonymize<Ifbo6gts4g8u33>> = 260 as PlainDescriptor<Anonymize<Ifbo6gts4g8u33>>;
const evt_Multisig_MultisigCancelled: PlainDescriptor<Anonymize<I82jp3a00f0f8k>> = 261 as PlainDescriptor<Anonymize<I82jp3a00f0f8k>>;
const evt_Proxy_ProxyExecuted: PlainDescriptor<Anonymize<Ie5i8qqljk3tjb>> = 221 as PlainDescriptor<Anonymize<Ie5i8qqljk3tjb>>;
const evt_Proxy_PureCreated: PlainDescriptor<Anonymize<I29pqkr7dgifjk>> = 1250 as PlainDescriptor<Anonymize<I29pqkr7dgifjk>>;
const evt_Proxy_Announced: PlainDescriptor<Anonymize<Idbjbboh0q507r>> = 251 as PlainDescriptor<Anonymize<Idbjbboh0q507r>>;
const evt_Proxy_ProxyAdded: PlainDescriptor<Anonymize<I88knav8fvi1c3>> = 1251 as PlainDescriptor<Anonymize<I88knav8fvi1c3>>;
const evt_Proxy_ProxyRemoved: PlainDescriptor<Anonymize<I88knav8fvi1c3>> = 1251 as PlainDescriptor<Anonymize<I88knav8fvi1c3>>;
const evt_Preimage_Noted: PlainDescriptor<Anonymize<Id9d48vaes3c53>> = 42 as PlainDescriptor<Anonymize<Id9d48vaes3c53>>;
const evt_Preimage_Requested: PlainDescriptor<Anonymize<Id9d48vaes3c53>> = 42 as PlainDescriptor<Anonymize<Id9d48vaes3c53>>;
const evt_Preimage_Cleared: PlainDescriptor<Anonymize<Id9d48vaes3c53>> = 42 as PlainDescriptor<Anonymize<Id9d48vaes3c53>>;
const evt_Scheduler_Scheduled: PlainDescriptor<Anonymize<I5n4sebgkfr760>> = 31 as PlainDescriptor<Anonymize<I5n4sebgkfr760>>;
const evt_Scheduler_Canceled: PlainDescriptor<Anonymize<I5n4sebgkfr760>> = 31 as PlainDescriptor<Anonymize<I5n4sebgkfr760>>;
const evt_Scheduler_Dispatched: PlainDescriptor<Anonymize<Idv8erd9m7jvse>> = 36 as PlainDescriptor<Anonymize<Idv8erd9m7jvse>>;
const evt_Scheduler_CallUnavailable: PlainDescriptor<Anonymize<Ibkv7dijodoblp>> = 37 as PlainDescriptor<Anonymize<Ibkv7dijodoblp>>;
const evt_Scheduler_PeriodicFailed: PlainDescriptor<Anonymize<Ibkv7dijodoblp>> = 37 as PlainDescriptor<Anonymize<Ibkv7dijodoblp>>;
const evt_Scheduler_PermanentlyOverweight: PlainDescriptor<Anonymize<Ibkv7dijodoblp>> = 37 as PlainDescriptor<Anonymize<Ibkv7dijodoblp>>;
const evt_AssetRate_AssetRateCreated: PlainDescriptor<Anonymize<I16soggnee6qrb>> = 492 as PlainDescriptor<Anonymize<I16soggnee6qrb>>;
const evt_AssetRate_AssetRateRemoved: PlainDescriptor<Anonymize<Ifvnf1s3g2lg8u>> = 493 as PlainDescriptor<Anonymize<Ifvnf1s3g2lg8u>>;
const evt_AssetRate_AssetRateUpdated: PlainDescriptor<Anonymize<Iedcb9b2srjfp0>> = 494 as PlainDescriptor<Anonymize<Iedcb9b2srjfp0>>;
const evt_Alliance_NewRuleSet: PlainDescriptor<Anonymize<I2dgasao7pteq7>> = 1264 as PlainDescriptor<Anonymize<I2dgasao7pteq7>>;
const evt_Alliance_Announced: PlainDescriptor<Anonymize<I56f2tlouivnqg>> = 1265 as PlainDescriptor<Anonymize<I56f2tlouivnqg>>;
const evt_Alliance_AnnouncementRemoved: PlainDescriptor<Anonymize<I56f2tlouivnqg>> = 1265 as PlainDescriptor<Anonymize<I56f2tlouivnqg>>;
const evt_Alliance_MembersInitialized: PlainDescriptor<Anonymize<Ia61kag3grdevk>> = 1262 as PlainDescriptor<Anonymize<Ia61kag3grdevk>>;
const evt_Alliance_NewAllyJoined: PlainDescriptor<Anonymize<I79vua51vqq0mc>> = 1270 as PlainDescriptor<Anonymize<I79vua51vqq0mc>>;
const evt_Alliance_AllyElevated: PlainDescriptor<Anonymize<I3trq1j79d9t1e>> = 1271 as PlainDescriptor<Anonymize<I3trq1j79d9t1e>>;
const evt_Alliance_MemberRetirementPeriodStarted: PlainDescriptor<Anonymize<Ie3gphha4ejh40>> = 1272 as PlainDescriptor<Anonymize<Ie3gphha4ejh40>>;
const evt_Alliance_MemberRetired: PlainDescriptor<Anonymize<Iafhd8kv029rqj>> = 1273 as PlainDescriptor<Anonymize<Iafhd8kv029rqj>>;
const evt_Alliance_MemberKicked: PlainDescriptor<Anonymize<I2mcnoj31i9be1>> = 1274 as PlainDescriptor<Anonymize<I2mcnoj31i9be1>>;
const evt_Alliance_UnscrupulousItemAdded: PlainDescriptor<Anonymize<I2t3hu6k5vesjh>> = 1268 as PlainDescriptor<Anonymize<I2t3hu6k5vesjh>>;
const evt_Alliance_UnscrupulousItemRemoved: PlainDescriptor<Anonymize<I2t3hu6k5vesjh>> = 1268 as PlainDescriptor<Anonymize<I2t3hu6k5vesjh>>;
const evt_Alliance_AllianceDisbanded: PlainDescriptor<Anonymize<I9dapsurd7u7ga>> = 1275 as PlainDescriptor<Anonymize<I9dapsurd7u7ga>>;
const evt_Alliance_FellowAbdicated: PlainDescriptor<Anonymize<I8uij7nmvtb96e>> = 1276 as PlainDescriptor<Anonymize<I8uij7nmvtb96e>>;
const evt_AllianceMotion_Proposed: PlainDescriptor<Anonymize<I1kjs4f71ca3ei>> = 1282 as PlainDescriptor<Anonymize<I1kjs4f71ca3ei>>;
const evt_AllianceMotion_Voted: PlainDescriptor<Anonymize<I866j5fp50ebq9>> = 1283 as PlainDescriptor<Anonymize<I866j5fp50ebq9>>;
const evt_AllianceMotion_Approved: PlainDescriptor<Anonymize<Icraueddqmudct>> = 1281 as PlainDescriptor<Anonymize<Icraueddqmudct>>;
const evt_AllianceMotion_Disapproved: PlainDescriptor<Anonymize<Icraueddqmudct>> = 1281 as PlainDescriptor<Anonymize<Icraueddqmudct>>;
const evt_AllianceMotion_Executed: PlainDescriptor<Anonymize<I3vvd0fdlc9ji8>> = 1284 as PlainDescriptor<Anonymize<I3vvd0fdlc9ji8>>;
const evt_AllianceMotion_MemberExecuted: PlainDescriptor<Anonymize<I3vvd0fdlc9ji8>> = 1284 as PlainDescriptor<Anonymize<I3vvd0fdlc9ji8>>;
const evt_AllianceMotion_Closed: PlainDescriptor<Anonymize<I8jvf1ugsdsqum>> = 1285 as PlainDescriptor<Anonymize<I8jvf1ugsdsqum>>;
const evt_FellowshipCollective_MemberAdded: PlainDescriptor<Anonymize<I4cbvqmqadhrea>> = 78 as PlainDescriptor<Anonymize<I4cbvqmqadhrea>>;
const evt_FellowshipCollective_RankChanged: PlainDescriptor<Anonymize<Im1pm2vf6llcn>> = 1291 as PlainDescriptor<Anonymize<Im1pm2vf6llcn>>;
const evt_FellowshipCollective_MemberRemoved: PlainDescriptor<Anonymize<Im1pm2vf6llcn>> = 1291 as PlainDescriptor<Anonymize<Im1pm2vf6llcn>>;
const evt_FellowshipCollective_Voted: PlainDescriptor<Anonymize<I31vg1u4v55v90>> = 1292 as PlainDescriptor<Anonymize<I31vg1u4v55v90>>;
const evt_FellowshipReferenda_Submitted: PlainDescriptor<Anonymize<Idhr9v8mlnjej>> = 187 as PlainDescriptor<Anonymize<Idhr9v8mlnjej>>;
const evt_FellowshipReferenda_DecisionDepositPlaced: PlainDescriptor<Anonymize<I62nte77gksm0f>> = 188 as PlainDescriptor<Anonymize<I62nte77gksm0f>>;
const evt_FellowshipReferenda_DecisionDepositRefunded: PlainDescriptor<Anonymize<I62nte77gksm0f>> = 188 as PlainDescriptor<Anonymize<I62nte77gksm0f>>;
const evt_FellowshipReferenda_DepositSlashed: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>> = 76 as PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
const evt_FellowshipReferenda_DecisionStarted: PlainDescriptor<Anonymize<Iuu6tledtt64n>> = 1296 as PlainDescriptor<Anonymize<Iuu6tledtt64n>>;
const evt_FellowshipReferenda_ConfirmStarted: PlainDescriptor<Anonymize<I666bl2fqjkejo>> = 57 as PlainDescriptor<Anonymize<I666bl2fqjkejo>>;
const evt_FellowshipReferenda_ConfirmAborted: PlainDescriptor<Anonymize<I666bl2fqjkejo>> = 57 as PlainDescriptor<Anonymize<I666bl2fqjkejo>>;
const evt_FellowshipReferenda_Confirmed: PlainDescriptor<Anonymize<I27notaksll8qt>> = 1297 as PlainDescriptor<Anonymize<I27notaksll8qt>>;
const evt_FellowshipReferenda_Approved: PlainDescriptor<Anonymize<I666bl2fqjkejo>> = 57 as PlainDescriptor<Anonymize<I666bl2fqjkejo>>;
const evt_FellowshipReferenda_Rejected: PlainDescriptor<Anonymize<I27notaksll8qt>> = 1297 as PlainDescriptor<Anonymize<I27notaksll8qt>>;
const evt_FellowshipReferenda_TimedOut: PlainDescriptor<Anonymize<I27notaksll8qt>> = 1297 as PlainDescriptor<Anonymize<I27notaksll8qt>>;
const evt_FellowshipReferenda_Cancelled: PlainDescriptor<Anonymize<I27notaksll8qt>> = 1297 as PlainDescriptor<Anonymize<I27notaksll8qt>>;
const evt_FellowshipReferenda_Killed: PlainDescriptor<Anonymize<I27notaksll8qt>> = 1297 as PlainDescriptor<Anonymize<I27notaksll8qt>>;
const evt_FellowshipReferenda_SubmissionDepositRefunded: PlainDescriptor<Anonymize<I62nte77gksm0f>> = 188 as PlainDescriptor<Anonymize<I62nte77gksm0f>>;
const evt_FellowshipReferenda_MetadataSet: PlainDescriptor<Anonymize<I50aq0q2l1cdkr>> = 191 as PlainDescriptor<Anonymize<I50aq0q2l1cdkr>>;
const evt_FellowshipReferenda_MetadataCleared: PlainDescriptor<Anonymize<I50aq0q2l1cdkr>> = 191 as PlainDescriptor<Anonymize<I50aq0q2l1cdkr>>;
const evt_FellowshipCore_ParamsChanged: PlainDescriptor<Anonymize<I875hrun7fs7ik>> = 1301 as PlainDescriptor<Anonymize<I875hrun7fs7ik>>;
const evt_FellowshipCore_ActiveChanged: PlainDescriptor<Anonymize<I9j3uq1uk06oju>> = 1306 as PlainDescriptor<Anonymize<I9j3uq1uk06oju>>;
const evt_FellowshipCore_Inducted: PlainDescriptor<Anonymize<I4cbvqmqadhrea>> = 78 as PlainDescriptor<Anonymize<I4cbvqmqadhrea>>;
const evt_FellowshipCore_Offboarded: PlainDescriptor<Anonymize<I4cbvqmqadhrea>> = 78 as PlainDescriptor<Anonymize<I4cbvqmqadhrea>>;
const evt_FellowshipCore_Promoted: PlainDescriptor<Anonymize<I5kpe8b2kedtqn>> = 1304 as PlainDescriptor<Anonymize<I5kpe8b2kedtqn>>;
const evt_FellowshipCore_Demoted: PlainDescriptor<Anonymize<I5kpe8b2kedtqn>> = 1304 as PlainDescriptor<Anonymize<I5kpe8b2kedtqn>>;
const evt_FellowshipCore_Proven: PlainDescriptor<Anonymize<Ic79d2eioda33s>> = 1303 as PlainDescriptor<Anonymize<Ic79d2eioda33s>>;
const evt_FellowshipCore_Requested: PlainDescriptor<Anonymize<Ien2galqubjs1f>> = 1307 as PlainDescriptor<Anonymize<Ien2galqubjs1f>>;
const evt_FellowshipCore_EvidenceJudged: PlainDescriptor<Anonymize<Id07di6ikhd4im>> = 1308 as PlainDescriptor<Anonymize<Id07di6ikhd4im>>;
const evt_FellowshipCore_Imported: PlainDescriptor<Anonymize<Im1pm2vf6llcn>> = 1291 as PlainDescriptor<Anonymize<Im1pm2vf6llcn>>;
const evt_FellowshipSalary_Inducted: PlainDescriptor<Anonymize<I4cbvqmqadhrea>> = 78 as PlainDescriptor<Anonymize<I4cbvqmqadhrea>>;
const evt_FellowshipSalary_Registered: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>> = 76 as PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
const evt_FellowshipSalary_Paid: PlainDescriptor<Anonymize<I4vcrhqupmee7p>> = 1312 as PlainDescriptor<Anonymize<I4vcrhqupmee7p>>;
const evt_FellowshipSalary_CycleStarted: PlainDescriptor<Anonymize<I666bl2fqjkejo>> = 57 as PlainDescriptor<Anonymize<I666bl2fqjkejo>>;
const evt_FellowshipTreasury_Proposed: PlainDescriptor<Anonymize<I44hc4lgsn4o1j>> = 161 as PlainDescriptor<Anonymize<I44hc4lgsn4o1j>>;
const evt_FellowshipTreasury_Spending: PlainDescriptor<Anonymize<I8iksqi3eani0a>> = 162 as PlainDescriptor<Anonymize<I8iksqi3eani0a>>;
const evt_FellowshipTreasury_Awarded: PlainDescriptor<Anonymize<I16enopmju1p0q>> = 163 as PlainDescriptor<Anonymize<I16enopmju1p0q>>;
const evt_FellowshipTreasury_Rejected: PlainDescriptor<Anonymize<Ifgqhle2413de7>> = 164 as PlainDescriptor<Anonymize<Ifgqhle2413de7>>;
const evt_FellowshipTreasury_Burnt: PlainDescriptor<Anonymize<I43kq8qudg7pq9>> = 165 as PlainDescriptor<Anonymize<I43kq8qudg7pq9>>;
const evt_FellowshipTreasury_Rollover: PlainDescriptor<Anonymize<I76riseemre533>> = 166 as PlainDescriptor<Anonymize<I76riseemre533>>;
const evt_FellowshipTreasury_Deposit: PlainDescriptor<Anonymize<Ie5v6njpckr05b>> = 105 as PlainDescriptor<Anonymize<Ie5v6njpckr05b>>;
const evt_FellowshipTreasury_SpendApproved: PlainDescriptor<Anonymize<I38bmcrmh852rk>> = 167 as PlainDescriptor<Anonymize<I38bmcrmh852rk>>;
const evt_FellowshipTreasury_UpdatedInactive: PlainDescriptor<Anonymize<I4hcillge8de5f>> = 168 as PlainDescriptor<Anonymize<I4hcillge8de5f>>;
const evt_FellowshipTreasury_AssetSpendApproved: PlainDescriptor<Anonymize<Iblqf6usek6oij>> = 169 as PlainDescriptor<Anonymize<Iblqf6usek6oij>>;
const evt_FellowshipTreasury_AssetSpendVoided: PlainDescriptor<Anonymize<I666bl2fqjkejo>> = 57 as PlainDescriptor<Anonymize<I666bl2fqjkejo>>;
const evt_FellowshipTreasury_Paid: PlainDescriptor<Anonymize<Iek7v4hrgnq6iv>> = 170 as PlainDescriptor<Anonymize<Iek7v4hrgnq6iv>>;
const evt_FellowshipTreasury_PaymentFailed: PlainDescriptor<Anonymize<Iek7v4hrgnq6iv>> = 170 as PlainDescriptor<Anonymize<Iek7v4hrgnq6iv>>;
const evt_FellowshipTreasury_SpendProcessed: PlainDescriptor<Anonymize<I666bl2fqjkejo>> = 57 as PlainDescriptor<Anonymize<I666bl2fqjkejo>>;
const err_System_InvalidSpecName: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_System_SpecVersionNeedsToIncrease: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_System_FailedToExtractRuntimeVersion: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_System_NonDefaultComposite: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_System_NonZeroRefCount: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_System_CallFiltered: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_ParachainSystem_OverlappingUpgrades: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_ParachainSystem_ProhibitedByPolkadot: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_ParachainSystem_TooBig: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_ParachainSystem_ValidationDataNotAvailable: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_ParachainSystem_HostConfigurationNotAvailable: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_ParachainSystem_NotScheduled: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_ParachainSystem_NothingAuthorized: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_ParachainSystem_Unauthorized: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Balances_VestingBalance: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Balances_LiquidityRestrictions: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Balances_InsufficientBalance: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Balances_ExistentialDeposit: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Balances_Expendability: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Balances_ExistingVestingSchedule: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Balances_DeadAccount: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Balances_TooManyReserves: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Balances_TooManyHolds: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Balances_TooManyFreezes: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_CollatorSelection_TooManyCandidates: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_CollatorSelection_TooFewEligibleCollators: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_CollatorSelection_AlreadyCandidate: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_CollatorSelection_NotCandidate: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_CollatorSelection_TooManyInvulnerables: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_CollatorSelection_AlreadyInvulnerable: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_CollatorSelection_NotInvulnerable: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_CollatorSelection_NoAssociatedValidatorId: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_CollatorSelection_ValidatorNotRegistered: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Session_InvalidProof: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Session_NoAssociatedValidatorId: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Session_DuplicatedKey: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Session_NoKeys: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Session_NoAccount: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_XcmpQueue_FailedToSend: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_XcmpQueue_BadXcmOrigin: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_XcmpQueue_BadXcm: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_XcmpQueue_BadOverweightIndex: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_XcmpQueue_WeightOverLimit: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_PolkadotXcm_Unreachable: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_PolkadotXcm_SendFailure: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_PolkadotXcm_Filtered: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_PolkadotXcm_UnweighableMessage: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_PolkadotXcm_DestinationNotInvertible: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_PolkadotXcm_Empty: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_PolkadotXcm_CannotReanchor: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_PolkadotXcm_TooManyAssets: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_PolkadotXcm_InvalidOrigin: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_PolkadotXcm_BadVersion: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_PolkadotXcm_BadLocation: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_PolkadotXcm_NoSubscription: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_PolkadotXcm_AlreadySubscribed: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_PolkadotXcm_InvalidAsset: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_PolkadotXcm_LowBalance: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_PolkadotXcm_TooManyLocks: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_PolkadotXcm_AccountNotSovereign: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_PolkadotXcm_FeesNotMet: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_PolkadotXcm_LockNotFound: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_PolkadotXcm_InUse: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_DmpQueue_Unknown: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_DmpQueue_OverLimit: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Utility_TooManyCalls: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Multisig_MinimumThreshold: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Multisig_AlreadyApproved: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Multisig_NoApprovalsNeeded: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Multisig_TooFewSignatories: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Multisig_TooManySignatories: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Multisig_SignatoriesOutOfOrder: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Multisig_SenderInSignatories: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Multisig_NotFound: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Multisig_NotOwner: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Multisig_NoTimepoint: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Multisig_WrongTimepoint: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Multisig_UnexpectedTimepoint: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Multisig_MaxWeightTooLow: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Multisig_AlreadyStored: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Proxy_TooMany: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Proxy_NotFound: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Proxy_NotProxy: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Proxy_Unproxyable: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Proxy_Duplicate: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Proxy_NoPermission: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Proxy_Unannounced: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Proxy_NoSelfProxy: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Preimage_TooBig: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Preimage_AlreadyNoted: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Preimage_NotAuthorized: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Preimage_NotNoted: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Preimage_Requested: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Preimage_NotRequested: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Preimage_TooMany: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Preimage_TooFew: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Scheduler_FailedToSchedule: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Scheduler_NotFound: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Scheduler_TargetBlockNumberInPast: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Scheduler_RescheduleNoChange: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Scheduler_Named: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_AssetRate_UnknownAssetKind: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_AssetRate_AlreadyExists: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Alliance_AllianceNotYetInitialized: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Alliance_AllianceAlreadyInitialized: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Alliance_AlreadyMember: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Alliance_NotMember: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Alliance_NotAlly: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Alliance_NoVotingRights: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Alliance_AlreadyElevated: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Alliance_AlreadyUnscrupulous: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Alliance_AccountNonGrata: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Alliance_NotListedAsUnscrupulous: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Alliance_TooManyUnscrupulousItems: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Alliance_TooLongWebsiteUrl: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Alliance_InsufficientFunds: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Alliance_WithoutIdentityDisplayAndWebsite: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Alliance_WithoutGoodIdentityJudgement: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Alliance_MissingProposalHash: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Alliance_MissingAnnouncement: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Alliance_TooManyMembers: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Alliance_TooManyAnnouncements: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Alliance_BadWitness: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Alliance_AlreadyRetiring: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Alliance_RetirementNoticeNotGiven: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Alliance_RetirementPeriodNotPassed: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_Alliance_FellowsMissing: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_AllianceMotion_NotMember: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_AllianceMotion_DuplicateProposal: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_AllianceMotion_ProposalMissing: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_AllianceMotion_WrongIndex: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_AllianceMotion_DuplicateVote: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_AllianceMotion_AlreadyInitialized: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_AllianceMotion_TooEarly: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_AllianceMotion_TooManyProposals: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_AllianceMotion_WrongProposalWeight: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_AllianceMotion_WrongProposalLength: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_AllianceMotion_PrimeAccountNotMember: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipCollective_AlreadyMember: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipCollective_NotMember: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipCollective_NotPolling: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipCollective_Ongoing: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipCollective_NoneRemaining: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipCollective_Corruption: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipCollective_RankTooLow: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipCollective_InvalidWitness: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipCollective_NoPermission: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipReferenda_NotOngoing: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipReferenda_HasDeposit: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipReferenda_BadTrack: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipReferenda_Full: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipReferenda_QueueEmpty: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipReferenda_BadReferendum: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipReferenda_NothingToDo: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipReferenda_NoTrack: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipReferenda_Unfinished: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipReferenda_NoPermission: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipReferenda_NoDeposit: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipReferenda_BadStatus: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipReferenda_PreimageNotExist: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipCore_Unranked: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipCore_Ranked: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipCore_UnexpectedRank: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipCore_InvalidRank: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipCore_NoPermission: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipCore_NothingDoing: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipCore_AlreadyInducted: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipCore_NotTracked: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipCore_TooSoon: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipSalary_AlreadyStarted: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipSalary_NotMember: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipSalary_AlreadyInducted: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipSalary_NotInducted: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipSalary_NoClaim: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipSalary_ClaimZero: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipSalary_TooLate: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipSalary_TooEarly: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipSalary_NotYet: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipSalary_NotStarted: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipSalary_Bankrupt: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipSalary_PayError: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipSalary_Inconclusive: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipSalary_NotCurrent: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipTreasury_InsufficientProposersBalance: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipTreasury_InvalidIndex: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipTreasury_TooManyApprovals: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipTreasury_InsufficientPermission: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipTreasury_ProposalNotApproved: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipTreasury_FailedToConvertBalance: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipTreasury_SpendExpired: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipTreasury_EarlyPayout: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipTreasury_AlreadyAttempted: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipTreasury_PayoutError: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipTreasury_NotAttempted: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const err_FellowshipTreasury_Inconclusive: PlainDescriptor<undefined> = 24 as PlainDescriptor<undefined>;
const const_System_BlockWeights: PlainDescriptor<Anonymize<In7a38730s6qs>> = 12 as PlainDescriptor<Anonymize<In7a38730s6qs>>;
const const_System_BlockLength: PlainDescriptor<Anonymize<If15el53dd76v9>> = 13 as PlainDescriptor<Anonymize<If15el53dd76v9>>;
const const_System_BlockHashCount: PlainDescriptor<number> = 1 as PlainDescriptor<number>;
const const_System_DbWeight: PlainDescriptor<Anonymize<I9s0ave7t0vnrk>> = 14 as PlainDescriptor<Anonymize<I9s0ave7t0vnrk>>;
const const_System_Version: PlainDescriptor<Anonymize<Ib5fo0fakl8rog>> = 15 as PlainDescriptor<Anonymize<Ib5fo0fakl8rog>>;
const const_System_SS58Prefix: PlainDescriptor<number> = 1 as PlainDescriptor<number>;
const const_Timestamp_MinimumPeriod: PlainDescriptor<bigint> = 44 as PlainDescriptor<bigint>;
const const_Balances_ExistentialDeposit: PlainDescriptor<bigint> = 44 as PlainDescriptor<bigint>;
const const_Balances_MaxLocks: PlainDescriptor<number> = 1 as PlainDescriptor<number>;
const const_Balances_MaxReserves: PlainDescriptor<number> = 1 as PlainDescriptor<number>;
const const_Balances_MaxHolds: PlainDescriptor<number> = 1 as PlainDescriptor<number>;
const const_Balances_MaxFreezes: PlainDescriptor<number> = 1 as PlainDescriptor<number>;
const const_TransactionPayment_OperationalFeeMultiplier: PlainDescriptor<number> = 1 as PlainDescriptor<number>;
const const_Utility_batched_calls_limit: PlainDescriptor<number> = 1 as PlainDescriptor<number>;
const const_Multisig_DepositBase: PlainDescriptor<bigint> = 44 as PlainDescriptor<bigint>;
const const_Multisig_DepositFactor: PlainDescriptor<bigint> = 44 as PlainDescriptor<bigint>;
const const_Multisig_MaxSignatories: PlainDescriptor<number> = 1 as PlainDescriptor<number>;
const const_Proxy_ProxyDepositBase: PlainDescriptor<bigint> = 44 as PlainDescriptor<bigint>;
const const_Proxy_ProxyDepositFactor: PlainDescriptor<bigint> = 44 as PlainDescriptor<bigint>;
const const_Proxy_MaxProxies: PlainDescriptor<number> = 1 as PlainDescriptor<number>;
const const_Proxy_MaxPending: PlainDescriptor<number> = 1 as PlainDescriptor<number>;
const const_Proxy_AnnouncementDepositBase: PlainDescriptor<bigint> = 44 as PlainDescriptor<bigint>;
const const_Proxy_AnnouncementDepositFactor: PlainDescriptor<bigint> = 44 as PlainDescriptor<bigint>;
const const_Scheduler_MaximumWeight: PlainDescriptor<Anonymize<I4q39t5hn830vp>> = 29 as PlainDescriptor<Anonymize<I4q39t5hn830vp>>;
const const_Scheduler_MaxScheduledPerBlock: PlainDescriptor<number> = 1 as PlainDescriptor<number>;
const const_Alliance_MaxUnscrupulousItems: PlainDescriptor<number> = 1 as PlainDescriptor<number>;
const const_Alliance_MaxWebsiteUrlLength: PlainDescriptor<number> = 1 as PlainDescriptor<number>;
const const_Alliance_AllyDeposit: PlainDescriptor<bigint> = 44 as PlainDescriptor<bigint>;
const const_Alliance_MaxAnnouncementsCount: PlainDescriptor<number> = 1 as PlainDescriptor<number>;
const const_Alliance_MaxMembersCount: PlainDescriptor<number> = 1 as PlainDescriptor<number>;
const const_AllianceMotion_MaxProposalWeight: PlainDescriptor<Anonymize<I4q39t5hn830vp>> = 29 as PlainDescriptor<Anonymize<I4q39t5hn830vp>>;
const const_FellowshipReferenda_SubmissionDeposit: PlainDescriptor<bigint> = 44 as PlainDescriptor<bigint>;
const const_FellowshipReferenda_MaxQueued: PlainDescriptor<number> = 1 as PlainDescriptor<number>;
const const_FellowshipReferenda_UndecidingTimeout: PlainDescriptor<number> = 1 as PlainDescriptor<number>;
const const_FellowshipReferenda_AlarmInterval: PlainDescriptor<number> = 1 as PlainDescriptor<number>;
const const_FellowshipReferenda_Tracks: PlainDescriptor<Anonymize<Ibafpkl9hhno69>> = 183 as PlainDescriptor<Anonymize<Ibafpkl9hhno69>>;
const const_FellowshipCore_EvidenceSize: PlainDescriptor<number> = 1 as PlainDescriptor<number>;
const const_FellowshipSalary_RegistrationPeriod: PlainDescriptor<number> = 1 as PlainDescriptor<number>;
const const_FellowshipSalary_PayoutPeriod: PlainDescriptor<number> = 1 as PlainDescriptor<number>;
const const_FellowshipSalary_Budget: PlainDescriptor<bigint> = 44 as PlainDescriptor<bigint>;
const const_FellowshipTreasury_ProposalBond: PlainDescriptor<number> = 1 as PlainDescriptor<number>;
const const_FellowshipTreasury_ProposalBondMinimum: PlainDescriptor<bigint> = 44 as PlainDescriptor<bigint>;
const const_FellowshipTreasury_ProposalBondMaximum: PlainDescriptor<Anonymize<I35p85j063s0il>> = 155 as PlainDescriptor<Anonymize<I35p85j063s0il>>;
const const_FellowshipTreasury_SpendPeriod: PlainDescriptor<number> = 1 as PlainDescriptor<number>;
const const_FellowshipTreasury_Burn: PlainDescriptor<number> = 1 as PlainDescriptor<number>;
const const_FellowshipTreasury_PalletId: PlainDescriptor<Binary> = 156 as PlainDescriptor<Binary>;
const const_FellowshipTreasury_MaxApprovals: PlainDescriptor<number> = 1 as PlainDescriptor<number>;
const const_FellowshipTreasury_PayoutPeriod: PlainDescriptor<number> = 1 as PlainDescriptor<number>;
const runtime_AuraApi_slot_duration: RuntimeDescriptor<[], bigint> = 552 as RuntimeDescriptor<[], bigint>;
const runtime_AuraApi_authorities: RuntimeDescriptor<[], Anonymize<Idhnf6rtqoslea>> = 515 as RuntimeDescriptor<[], Anonymize<Idhnf6rtqoslea>>;
const runtime_Core_version: RuntimeDescriptor<[], Anonymize<Ib5fo0fakl8rog>> = 500 as RuntimeDescriptor<[], Anonymize<Ib5fo0fakl8rog>>;
const runtime_Core_execute_block: RuntimeDescriptor<[block: Anonymize<Ia4jqf401148a4>], undefined> = 501 as RuntimeDescriptor<[block: Anonymize<Ia4jqf401148a4>], undefined>;
const runtime_Core_initialize_block: RuntimeDescriptor<[header: Anonymize<I6t1nedlt7mobn>], undefined> = 502 as RuntimeDescriptor<[header: Anonymize<I6t1nedlt7mobn>], undefined>;
const runtime_Metadata_metadata: RuntimeDescriptor<[], Binary> = 503 as RuntimeDescriptor<[], Binary>;
const runtime_Metadata_metadata_at_version: RuntimeDescriptor<[version: number], Anonymize<Iabpgqcjikia83>> = 504 as RuntimeDescriptor<[version: number], Anonymize<Iabpgqcjikia83>>;
const runtime_Metadata_metadata_versions: RuntimeDescriptor<[], Anonymize<Icgljjb6j82uhn>> = 505 as RuntimeDescriptor<[], Anonymize<Icgljjb6j82uhn>>;
const runtime_BlockBuilder_apply_extrinsic: RuntimeDescriptor<[extrinsic: Binary], Anonymize<I132412t2eshc6>> = 506 as RuntimeDescriptor<[extrinsic: Binary], Anonymize<I132412t2eshc6>>;
const runtime_BlockBuilder_finalize_block: RuntimeDescriptor<[], Anonymize<I6t1nedlt7mobn>> = 507 as RuntimeDescriptor<[], Anonymize<I6t1nedlt7mobn>>;
const runtime_BlockBuilder_inherent_extrinsics: RuntimeDescriptor<[inherent: Anonymize<If39abi8floaaf>], Anonymize<Itom7fk49o0c9>> = 508 as RuntimeDescriptor<[inherent: Anonymize<If39abi8floaaf>], Anonymize<Itom7fk49o0c9>>;
const runtime_BlockBuilder_check_inherents: RuntimeDescriptor<[block: Anonymize<Ia4jqf401148a4>, data: Anonymize<If39abi8floaaf>], Anonymize<Ibcdj0j79gq1uo>> = 509 as RuntimeDescriptor<[block: Anonymize<Ia4jqf401148a4>, data: Anonymize<If39abi8floaaf>], Anonymize<Ibcdj0j79gq1uo>>;
const runtime_TaggedTransactionQueue_validate_transaction: RuntimeDescriptor<[source: TransactionValidityTransactionSource, tx: Binary, block_hash: Binary], Anonymize<I6d9lhhdri071p>> = 514 as RuntimeDescriptor<[source: TransactionValidityTransactionSource, tx: Binary, block_hash: Binary], Anonymize<I6d9lhhdri071p>>;
const runtime_OffchainWorkerApi_offchain_worker: RuntimeDescriptor<[header: Anonymize<I6t1nedlt7mobn>], undefined> = 502 as RuntimeDescriptor<[header: Anonymize<I6t1nedlt7mobn>], undefined>;
const runtime_SessionKeys_generate_session_keys: RuntimeDescriptor<[seed: Anonymize<Iabpgqcjikia83>], Binary> = 557 as RuntimeDescriptor<[seed: Anonymize<Iabpgqcjikia83>], Binary>;
const runtime_SessionKeys_decode_session_keys: RuntimeDescriptor<[encoded: Binary], Anonymize<I96ok5o1k21bpi>> = 558 as RuntimeDescriptor<[encoded: Binary], Anonymize<I96ok5o1k21bpi>>;
const runtime_AccountNonceApi_account_nonce: RuntimeDescriptor<[account: SS58String], number> = 559 as RuntimeDescriptor<[account: SS58String], number>;
const runtime_TransactionPaymentApi_query_info: RuntimeDescriptor<[uxt: Binary, len: number], Anonymize<I5r4utvvlnltpd>> = 560 as RuntimeDescriptor<[uxt: Binary, len: number], Anonymize<I5r4utvvlnltpd>>;
const runtime_TransactionPaymentApi_query_fee_details: RuntimeDescriptor<[uxt: Binary, len: number], Anonymize<Iei2mvq0mjvt81>> = 561 as RuntimeDescriptor<[uxt: Binary, len: number], Anonymize<Iei2mvq0mjvt81>>;
const runtime_TransactionPaymentApi_query_weight_to_fee: RuntimeDescriptor<[weight: Anonymize<I4q39t5hn830vp>], bigint> = 562 as RuntimeDescriptor<[weight: Anonymize<I4q39t5hn830vp>], bigint>;
const runtime_TransactionPaymentApi_query_length_to_fee: RuntimeDescriptor<[length: number], bigint> = 563 as RuntimeDescriptor<[length: number], bigint>;
const runtime_TransactionPaymentCallApi_query_call_info: RuntimeDescriptor<[call: Anonymize<Iemfe4sq56o6e4>, len: number], Anonymize<I5r4utvvlnltpd>> = 1313 as RuntimeDescriptor<[call: Anonymize<Iemfe4sq56o6e4>, len: number], Anonymize<I5r4utvvlnltpd>>;
const runtime_TransactionPaymentCallApi_query_call_fee_details: RuntimeDescriptor<[call: Anonymize<Iemfe4sq56o6e4>, len: number], Anonymize<Iei2mvq0mjvt81>> = 1314 as RuntimeDescriptor<[call: Anonymize<Iemfe4sq56o6e4>, len: number], Anonymize<Iei2mvq0mjvt81>>;
const runtime_TransactionPaymentCallApi_query_weight_to_fee: RuntimeDescriptor<[weight: Anonymize<I4q39t5hn830vp>], bigint> = 562 as RuntimeDescriptor<[weight: Anonymize<I4q39t5hn830vp>], bigint>;
const runtime_TransactionPaymentCallApi_query_length_to_fee: RuntimeDescriptor<[length: number], bigint> = 563 as RuntimeDescriptor<[length: number], bigint>;
const runtime_CollectCollationInfo_collect_collation_info: RuntimeDescriptor<[header: Anonymize<I6t1nedlt7mobn>], Anonymize<Ic1d4u2opv3fst>> = 1315 as RuntimeDescriptor<[header: Anonymize<I6t1nedlt7mobn>], Anonymize<Ic1d4u2opv3fst>>;
const runtime_GenesisBuilder_create_default_config: RuntimeDescriptor<[], Binary> = 503 as RuntimeDescriptor<[], Binary>;
const runtime_GenesisBuilder_build_config: RuntimeDescriptor<[json: Binary], Anonymize<I9q9lvv0h98nhk>> = 566 as RuntimeDescriptor<[json: Binary], Anonymize<I9q9lvv0h98nhk>>;

type IPallets = {System: [{

/**
 * The full account information for a particular account ID.
 */
Account: StorageDescriptor<[Key: SS58String], Anonymize<I5sesotjlssv2d>, false>,


/**
 * Total extrinsics count for the current block.
 */
ExtrinsicCount: StorageDescriptor<[], number, true>,


/**
 * The current weight for the block.
 */
BlockWeight: StorageDescriptor<[], Anonymize<Iffmde3ekjedi9>, false>,


/**
 * Total length (in bytes) for all extrinsics put together, for the current block.
 */
AllExtrinsicsLen: StorageDescriptor<[], number, true>,


/**
 * Map of block numbers to block hashes.
 */
BlockHash: StorageDescriptor<[Key: number], Binary, false>,


/**
 * Extrinsics data for the current block (maps an extrinsic's index to its data).
 */
ExtrinsicData: StorageDescriptor<[Key: number], Binary, false>,


/**
 * The current block number being processed. Set by `execute_block`.
 */
Number: StorageDescriptor<[], number, false>,


/**
 * Hash of the previous block.
 */
ParentHash: StorageDescriptor<[], Binary, false>,


/**
 * Digest of the current block, also part of the block header.
 */
Digest: StorageDescriptor<[], Anonymize<Idin6nhq46lvdj>, false>,


/**
 * Events deposited for the current block.
 *
 * NOTE: The item is unbound and should therefore never be read on chain.
 * It could otherwise inflate the PoV size of a block.
 *
 * Events have a large in-memory size. Box the events to not go out-of-memory
 * just in case someone still reads them from within the runtime.
 */
Events: StorageDescriptor<[], Anonymize<I83463s35303v1>, false>,


/**
 * The number of events in the `Events<T>` list.
 */
EventCount: StorageDescriptor<[], number, false>,


/**
 * Mapping between a topic (represented by T::Hash) and a vector of indexes
 * of events in the `<Events<T>>` list.
 *
 * All topic vectors have deterministic storage locations depending on the topic. This
 * allows light-clients to leverage the changes trie storage tracking mechanism and
 * in case of changes fetch the list of events of interest.
 *
 * The value has the type `(BlockNumberFor<T>, EventIndex)` because if we used only just
 * the `EventIndex` then in case if the topic has the same contents on the next block
 * no notification will be triggered thus the event might be lost.
 */
EventTopics: StorageDescriptor<[Key: Binary], Anonymize<Iep4uo61810hfs>, false>,


/**
 * Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
 */
LastRuntimeUpgrade: StorageDescriptor<[], Anonymize<Ieniouoqkq4icf>, true>,


/**
 * True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
 */
UpgradedToU32RefCount: StorageDescriptor<[], boolean, false>,


/**
 * True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
 * (default) if not.
 */
UpgradedToTripleRefCount: StorageDescriptor<[], boolean, false>,


/**
 * The execution phase of the block.
 */
ExecutionPhase: StorageDescriptor<[], Phase, true>}, {

/**
 *See [`Pallet::remark`].
 */
remark: TxDescriptor<Anonymize<I8ofcg5rbj0g2c>>,


/**
 *See [`Pallet::set_heap_pages`].
 */
set_heap_pages: TxDescriptor<Anonymize<I4adgbll7gku4i>>,


/**
 *See [`Pallet::set_code`].
 */
set_code: TxDescriptor<Anonymize<I6pjjpfvhvcfru>>,


/**
 *See [`Pallet::set_code_without_checks`].
 */
set_code_without_checks: TxDescriptor<Anonymize<I6pjjpfvhvcfru>>,


/**
 *See [`Pallet::set_storage`].
 */
set_storage: TxDescriptor<Anonymize<I8qrhskdehbu57>>,


/**
 *See [`Pallet::kill_storage`].
 */
kill_storage: TxDescriptor<Anonymize<I39uah9nss64h9>>,


/**
 *See [`Pallet::kill_prefix`].
 */
kill_prefix: TxDescriptor<Anonymize<Ik64dknsq7k08>>,


/**
 *See [`Pallet::remark_with_event`].
 */
remark_with_event: TxDescriptor<Anonymize<I8ofcg5rbj0g2c>>}, {

/**
 *An extrinsic completed successfully.
 */
ExtrinsicSuccess: PlainDescriptor<Anonymize<Iede1ukavoderd>>,


/**
 *An extrinsic failed.
 */
ExtrinsicFailed: PlainDescriptor<Anonymize<Iennefu6o2bgdm>>,


/**
 *`:code` was updated.
 */
CodeUpdated: PlainDescriptor<undefined>,


/**
 *A new account was created.
 */
NewAccount: PlainDescriptor<Anonymize<Icbccs0ug47ilf>>,


/**
 *An account was reaped.
 */
KilledAccount: PlainDescriptor<Anonymize<Icbccs0ug47ilf>>,


/**
 *On on-chain remark happened.
 */
Remarked: PlainDescriptor<Anonymize<Ieob37pbjnvmkj>>}, {

/**
 *The name of specification does not match between the current runtime
 *and the new runtime.
 */
InvalidSpecName: PlainDescriptor<undefined>,


/**
 *The specification version is not allowed to decrease between the current runtime
 *and the new runtime.
 */
SpecVersionNeedsToIncrease: PlainDescriptor<undefined>,


/**
 *Failed to extract the runtime version from the new runtime.
 *
 *Either calling `Core_version` or decoding `RuntimeVersion` failed.
 */
FailedToExtractRuntimeVersion: PlainDescriptor<undefined>,


/**
 *Suicide called when the account has non-default composite data.
 */
NonDefaultComposite: PlainDescriptor<undefined>,


/**
 *There is a non-zero reference count preventing the account from being purged.
 */
NonZeroRefCount: PlainDescriptor<undefined>,


/**
 *The origin filter prevent the call to be dispatched.
 */
CallFiltered: PlainDescriptor<undefined>}, {

/**
 * Block & extrinsics weights: base values and limits.
 */
BlockWeights: PlainDescriptor<Anonymize<In7a38730s6qs>>,


/**
 * The maximum length of a block (in bytes).
 */
BlockLength: PlainDescriptor<Anonymize<If15el53dd76v9>>,


/**
 * Maximum number of block number to block hash mappings to keep (oldest pruned first).
 */
BlockHashCount: PlainDescriptor<number>,


/**
 * The weight of runtime database operations the runtime can invoke.
 */
DbWeight: PlainDescriptor<Anonymize<I9s0ave7t0vnrk>>,


/**
 * Get the chain's current version.
 */
Version: PlainDescriptor<Anonymize<Ib5fo0fakl8rog>>,


/**
 * The designated SS58 prefix of this chain.
 *
 * This replaces the "ss58Format" property declared in the chain spec. Reason is
 * that the runtime should know about the prefix in order to make use of it as
 * an identifier of the chain.
 */
SS58Prefix: PlainDescriptor<number>}],
ParachainSystem: [{

/**
 * Latest included block descendants the runtime accepted. In other words, these are
 * ancestors of the currently executing block which have not been included in the observed
 * relay-chain state.
 *
 * The segment length is limited by the capacity returned from the [`ConsensusHook`] configured
 * in the pallet.
 */
UnincludedSegment: StorageDescriptor<[], Anonymize<I6f7juk1vj8fiq>, false>,


/**
 * Storage field that keeps track of bandwidth used by the unincluded segment along with the
 * latest HRMP watermark. Used for limiting the acceptance of new blocks with
 * respect to relay chain constraints.
 */
AggregatedUnincludedSegment: StorageDescriptor<[], Anonymize<Iamnn769l033b4>, true>,


/**
 * In case of a scheduled upgrade, this storage field contains the validation code to be
 * applied.
 *
 * As soon as the relay chain gives us the go-ahead signal, we will overwrite the
 * [`:code`][sp_core::storage::well_known_keys::CODE] which will result the next block process
 * with the new validation code. This concludes the upgrade process.
 */
PendingValidationCode: StorageDescriptor<[], Binary, false>,


/**
 * Validation code that is set by the parachain and is to be communicated to collator and
 * consequently the relay-chain.
 *
 * This will be cleared in `on_initialize` of each new block if no other pallet already set
 * the value.
 */
NewValidationCode: StorageDescriptor<[], Binary, true>,


/**
 * The [`PersistedValidationData`] set for this block.
 * This value is expected to be set only once per block and it's never stored
 * in the trie.
 */
ValidationData: StorageDescriptor<[], Anonymize<I5r8ef6aie125l>, true>,


/**
 * Were the validation data set to notify the relay chain?
 */
DidSetValidationCode: StorageDescriptor<[], boolean, false>,


/**
 * The relay chain block number associated with the last parachain block.
 *
 * This is updated in `on_finalize`.
 */
LastRelayChainBlockNumber: StorageDescriptor<[], number, false>,


/**
 * An option which indicates if the relay-chain restricts signalling a validation code upgrade.
 * In other words, if this is `Some` and [`NewValidationCode`] is `Some` then the produced
 * candidate will be invalid.
 *
 * This storage item is a mirror of the corresponding value for the current parachain from the
 * relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
 * set after the inherent.
 */
UpgradeRestrictionSignal: StorageDescriptor<[], Anonymize<Id34bi0o1gnln9>, false>,


/**
 * Optional upgrade go-ahead signal from the relay-chain.
 *
 * This storage item is a mirror of the corresponding value for the current parachain from the
 * relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
 * set after the inherent.
 */
UpgradeGoAhead: StorageDescriptor<[], Anonymize<Ie1vdku2j6ccvj>, false>,


/**
 * The state proof for the last relay parent block.
 *
 * This field is meant to be updated each block with the validation data inherent. Therefore,
 * before processing of the inherent, e.g. in `on_initialize` this data may be stale.
 *
 * This data is also absent from the genesis.
 */
RelayStateProof: StorageDescriptor<[], Anonymize<Itom7fk49o0c9>, true>,


/**
 * The snapshot of some state related to messaging relevant to the current parachain as per
 * the relay parent.
 *
 * This field is meant to be updated each block with the validation data inherent. Therefore,
 * before processing of the inherent, e.g. in `on_initialize` this data may be stale.
 *
 * This data is also absent from the genesis.
 */
RelevantMessagingState: StorageDescriptor<[], Anonymize<I8gicq33tfu7j1>, true>,


/**
 * The parachain host configuration that was obtained from the relay parent.
 *
 * This field is meant to be updated each block with the validation data inherent. Therefore,
 * before processing of the inherent, e.g. in `on_initialize` this data may be stale.
 *
 * This data is also absent from the genesis.
 */
HostConfiguration: StorageDescriptor<[], Anonymize<I4iumukclgj8ej>, true>,


/**
 * The last downward message queue chain head we have observed.
 *
 * This value is loaded before and saved after processing inbound downward messages carried
 * by the system inherent.
 */
LastDmqMqcHead: StorageDescriptor<[], Binary, false>,


/**
 * The message queue chain heads we have observed per each channel incoming channel.
 *
 * This value is loaded before and saved after processing inbound downward messages carried
 * by the system inherent.
 */
LastHrmpMqcHeads: StorageDescriptor<[], Anonymize<I93ssha9egqq23>, false>,


/**
 * Number of downward messages processed in a block.
 *
 * This will be cleared in `on_initialize` of each new block.
 */
ProcessedDownwardMessages: StorageDescriptor<[], number, false>,


/**
 * HRMP watermark that was set in a block.
 *
 * This will be cleared in `on_initialize` of each new block.
 */
HrmpWatermark: StorageDescriptor<[], number, false>,


/**
 * HRMP messages that were sent in a block.
 *
 * This will be cleared in `on_initialize` of each new block.
 */
HrmpOutboundMessages: StorageDescriptor<[], Anonymize<I6r5cbv8ttrb09>, false>,


/**
 * Upward messages that were sent in a block.
 *
 * This will be cleared in `on_initialize` of each new block.
 */
UpwardMessages: StorageDescriptor<[], Anonymize<Itom7fk49o0c9>, false>,


/**
 * Upward messages that are still pending and not yet send to the relay chain.
 */
PendingUpwardMessages: StorageDescriptor<[], Anonymize<Itom7fk49o0c9>, false>,


/**
 * The factor to multiply the base delivery fee by for UMP.
 */
UpwardDeliveryFeeFactor: StorageDescriptor<[], bigint, false>,


/**
 * The number of HRMP messages we observed in `on_initialize` and thus used that number for
 * announcing the weight of `on_initialize` and `on_finalize`.
 */
AnnouncedHrmpMessagesPerCandidate: StorageDescriptor<[], number, false>,


/**
 * The weight we reserve at the beginning of the block for processing XCMP messages. This
 * overrides the amount set in the Config trait.
 */
ReservedXcmpWeightOverride: StorageDescriptor<[], Anonymize<I4q39t5hn830vp>, true>,


/**
 * The weight we reserve at the beginning of the block for processing DMP messages. This
 * overrides the amount set in the Config trait.
 */
ReservedDmpWeightOverride: StorageDescriptor<[], Anonymize<I4q39t5hn830vp>, true>,


/**
 * The next authorized upgrade, if there is one.
 */
AuthorizedUpgrade: StorageDescriptor<[], Anonymize<Ib3qt1mgvgmbgi>, true>,


/**
 * A custom head data that should be returned as result of `validate_block`.
 *
 * See `Pallet::set_custom_validation_head_data` for more information.
 */
CustomValidationHeadData: StorageDescriptor<[], Binary, true>}, {

/**
 *See [`Pallet::set_validation_data`].
 */
set_validation_data: TxDescriptor<Anonymize<I68js79djhsbni>>,


/**
 *See [`Pallet::sudo_send_upward_message`].
 */
sudo_send_upward_message: TxDescriptor<Anonymize<Ifpj261e8s63m3>>,


/**
 *See [`Pallet::authorize_upgrade`].
 */
authorize_upgrade: TxDescriptor<Anonymize<Ib3qt1mgvgmbgi>>,


/**
 *See [`Pallet::enact_authorized_upgrade`].
 */
enact_authorized_upgrade: TxDescriptor<Anonymize<I6pjjpfvhvcfru>>}, {

/**
 *The validation function has been scheduled to apply.
 */
ValidationFunctionStored: PlainDescriptor<undefined>,


/**
 *The validation function was applied as of the contained relay chain block number.
 */
ValidationFunctionApplied: PlainDescriptor<Anonymize<Idd7hd99u0ho0n>>,


/**
 *The relay-chain aborted the upgrade process.
 */
ValidationFunctionDiscarded: PlainDescriptor<undefined>,


/**
 *An upgrade has been authorized.
 */
UpgradeAuthorized: PlainDescriptor<Anonymize<I6a5n5ij3gomuo>>,


/**
 *Some downward messages have been received and will be processed.
 */
DownwardMessagesReceived: PlainDescriptor<Anonymize<Iafscmv8tjf0ou>>,


/**
 *Downward messages were processed using the given weight.
 */
DownwardMessagesProcessed: PlainDescriptor<Anonymize<I7a3a6ua4hud3s>>,


/**
 *An upward message was sent to the relay chain.
 */
UpwardMessageSent: PlainDescriptor<Anonymize<I4n7056p1k6c8b>>}, {

/**
 *Attempt to upgrade validation function while existing upgrade pending.
 */
OverlappingUpgrades: PlainDescriptor<undefined>,


/**
 *Polkadot currently prohibits this parachain from upgrading its validation function.
 */
ProhibitedByPolkadot: PlainDescriptor<undefined>,


/**
 *The supplied validation function has compiled into a blob larger than Polkadot is
 *willing to run.
 */
TooBig: PlainDescriptor<undefined>,


/**
 *The inherent which supplies the validation data did not run this block.
 */
ValidationDataNotAvailable: PlainDescriptor<undefined>,


/**
 *The inherent which supplies the host configuration did not run this block.
 */
HostConfigurationNotAvailable: PlainDescriptor<undefined>,


/**
 *No validation function upgrade is currently scheduled.
 */
NotScheduled: PlainDescriptor<undefined>,


/**
 *No code upgrade has been authorized.
 */
NothingAuthorized: PlainDescriptor<undefined>,


/**
 *The given code upgrade has not been authorized.
 */
Unauthorized: PlainDescriptor<undefined>}, {}],
Timestamp: [{

/**
 * The current time for the current block.
 */
Now: StorageDescriptor<[], bigint, false>,


/**
 * Whether the timestamp has been updated in this block.
 *
 * This value is updated to `true` upon successful submission of a timestamp by a node.
 * It is then checked at the end of each block execution in the `on_finalize` hook.
 */
DidUpdate: StorageDescriptor<[], boolean, false>}, {

/**
 *See [`Pallet::set`].
 */
set: TxDescriptor<Anonymize<Idcr6u6361oad9>>}, {}, {}, {

/**
 * The minimum period between blocks.
 *
 * Be aware that this is different to the *expected* period that the block production
 * apparatus provides. Your chosen consensus system will generally work with this to
 * determine a sensible block time. For example, in the Aura pallet it will be double this
 * period on default settings.
 */
MinimumPeriod: PlainDescriptor<bigint>}],
ParachainInfo: [{

/**

 */
ParachainId: StorageDescriptor<[], number, false>}, {}, {}, {}, {}],
Balances: [{

/**
 * The total units issued in the system.
 */
TotalIssuance: StorageDescriptor<[], bigint, false>,


/**
 * The total units of outstanding deactivated balance in the system.
 */
InactiveIssuance: StorageDescriptor<[], bigint, false>,


/**
 * The Balances pallet example of storing the balance of an account.
 *
 * # Example
 *
 * ```nocompile
 *  impl pallet_balances::Config for Runtime {
 *    type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
 *  }
 * ```
 *
 * You can also store the balance of an account in the `System` pallet.
 *
 * # Example
 *
 * ```nocompile
 *  impl pallet_balances::Config for Runtime {
 *   type AccountStore = System
 *  }
 * ```
 *
 * But this comes with tradeoffs, storing account balances in the system pallet stores
 * `frame_system` data alongside the account data contrary to storing account balances in the
 * `Balances` pallet, which uses a `StorageMap` to store balances data only.
 * NOTE: This is only used in the case that this pallet is used to store balances.
 */
Account: StorageDescriptor<[Key: SS58String], Anonymize<I1q8tnt1cluu5j>, false>,


/**
 * Any liquidity locks on some account balances.
 * NOTE: Should only be accessed when setting, changing and freeing a lock.
 */
Locks: StorageDescriptor<[Key: SS58String], Anonymize<Ibtifm27unhnjf>, false>,


/**
 * Named reserves on some account balances.
 */
Reserves: StorageDescriptor<[Key: SS58String], Anonymize<Iactubn52acokl>, false>,


/**
 * Holds on account balances.
 */
Holds: StorageDescriptor<[Key: SS58String], Anonymize<I233put12fltor>, false>,


/**
 * Freeze locks on account balances.
 */
Freezes: StorageDescriptor<[Key: SS58String], Anonymize<I3fe7nt2ne6qtf>, false>}, {

/**
 *See [`Pallet::transfer_allow_death`].
 */
transfer_allow_death: TxDescriptor<Anonymize<Ien6q0lasi0m7i>>,


/**
 *See [`Pallet::force_transfer`].
 */
force_transfer: TxDescriptor<Anonymize<Icacgruoo9j3r2>>,


/**
 *See [`Pallet::transfer_keep_alive`].
 */
transfer_keep_alive: TxDescriptor<Anonymize<Ien6q0lasi0m7i>>,


/**
 *See [`Pallet::transfer_all`].
 */
transfer_all: TxDescriptor<Anonymize<I7dgmo7im9hljo>>,


/**
 *See [`Pallet::force_unreserve`].
 */
force_unreserve: TxDescriptor<Anonymize<Iargojp1sv9icj>>,


/**
 *See [`Pallet::upgrade_accounts`].
 */
upgrade_accounts: TxDescriptor<Anonymize<Ibmr18suc9ikh9>>,


/**
 *See [`Pallet::force_set_balance`].
 */
force_set_balance: TxDescriptor<Anonymize<Ie0io91hk7pejj>>}, {

/**
 *An account was created with some free balance.
 */
Endowed: PlainDescriptor<Anonymize<Icv68aq8841478>>,


/**
 *An account was removed whose balance was non-zero but below ExistentialDeposit,
 *resulting in an outright loss.
 */
DustLost: PlainDescriptor<Anonymize<Ic262ibdoec56a>>,


/**
 *Transfer succeeded.
 */
Transfer: PlainDescriptor<Anonymize<Iflcfm9b6nlmdd>>,


/**
 *A balance was set by root.
 */
BalanceSet: PlainDescriptor<Anonymize<Ijrsf4mnp3eka>>,


/**
 *Some balance was reserved (moved from free to reserved).
 */
Reserved: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>,


/**
 *Some balance was unreserved (moved from reserved to free).
 */
Unreserved: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>,


/**
 *Some balance was moved from the reserve of the first account to the second account.
 *Final argument indicates the destination balance type.
 */
ReserveRepatriated: PlainDescriptor<Anonymize<Idm5rqp3duosod>>,


/**
 *Some amount was deposited (e.g. for transaction fees).
 */
Deposit: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>,


/**
 *Some amount was withdrawn from the account (e.g. for transaction fees).
 */
Withdraw: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>,


/**
 *Some amount was removed from the account (e.g. for misbehavior).
 */
Slashed: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>,


/**
 *Some amount was minted into an account.
 */
Minted: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>,


/**
 *Some amount was burned from an account.
 */
Burned: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>,


/**
 *Some amount was suspended from an account (it can be restored later).
 */
Suspended: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>,


/**
 *Some amount was restored into an account.
 */
Restored: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>,


/**
 *An account was upgraded.
 */
Upgraded: PlainDescriptor<Anonymize<I4cbvqmqadhrea>>,


/**
 *Total issuance was increased by `amount`, creating a credit to be balanced.
 */
Issued: PlainDescriptor<Anonymize<I3qt1hgg4djhgb>>,


/**
 *Total issuance was decreased by `amount`, creating a debt to be balanced.
 */
Rescinded: PlainDescriptor<Anonymize<I3qt1hgg4djhgb>>,


/**
 *Some balance was locked.
 */
Locked: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>,


/**
 *Some balance was unlocked.
 */
Unlocked: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>,


/**
 *Some balance was frozen.
 */
Frozen: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>,


/**
 *Some balance was thawed.
 */
Thawed: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>}, {

/**
 *Vesting balance too high to send value.
 */
VestingBalance: PlainDescriptor<undefined>,


/**
 *Account liquidity restrictions prevent withdrawal.
 */
LiquidityRestrictions: PlainDescriptor<undefined>,


/**
 *Balance too low to send value.
 */
InsufficientBalance: PlainDescriptor<undefined>,


/**
 *Value too low to create account due to existential deposit.
 */
ExistentialDeposit: PlainDescriptor<undefined>,


/**
 *Transfer/payment would kill account.
 */
Expendability: PlainDescriptor<undefined>,


/**
 *A vesting schedule already exists for this account.
 */
ExistingVestingSchedule: PlainDescriptor<undefined>,


/**
 *Beneficiary account must pre-exist.
 */
DeadAccount: PlainDescriptor<undefined>,


/**
 *Number of named reserves exceed `MaxReserves`.
 */
TooManyReserves: PlainDescriptor<undefined>,


/**
 *Number of holds exceed `MaxHolds`.
 */
TooManyHolds: PlainDescriptor<undefined>,


/**
 *Number of freezes exceed `MaxFreezes`.
 */
TooManyFreezes: PlainDescriptor<undefined>}, {

/**
 * The minimum amount required to keep an account open. MUST BE GREATER THAN ZERO!
 *
 * If you *really* need it to be zero, you can enable the feature `insecure_zero_ed` for
 * this pallet. However, you do so at your own risk: this will open up a major DoS vector.
 * In case you have multiple sources of provider references, you may also get unexpected
 * behaviour if you set this to zero.
 *
 * Bottom line: Do yourself a favour and make it at least one!
 */
ExistentialDeposit: PlainDescriptor<bigint>,


/**
 * The maximum number of locks that should exist on an account.
 * Not strictly enforced, but used for weight estimation.
 */
MaxLocks: PlainDescriptor<number>,


/**
 * The maximum number of named reserves that can exist on an account.
 */
MaxReserves: PlainDescriptor<number>,


/**
 * The maximum number of holds that can exist on an account at any time.
 */
MaxHolds: PlainDescriptor<number>,


/**
 * The maximum number of individual freeze locks that can exist on an account at any time.
 */
MaxFreezes: PlainDescriptor<number>}],
TransactionPayment: [{

/**

 */
NextFeeMultiplier: StorageDescriptor<[], bigint, false>,


/**

 */
StorageVersion: StorageDescriptor<[], TransactionPaymentReleases, false>}, {}, {

/**
 *A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
 *has been paid by `who`.
 */
TransactionFeePaid: PlainDescriptor<Anonymize<Ier2cke86dqbr2>>}, {}, {

/**
 * A fee mulitplier for `Operational` extrinsics to compute "virtual tip" to boost their
 * `priority`
 *
 * This value is multipled by the `final_fee` to obtain a "virtual tip" that is later
 * added to a tip component in regular `priority` calculations.
 * It means that a `Normal` transaction can front-run a similarly-sized `Operational`
 * extrinsic (with no tip), by including a tip value greater than the virtual tip.
 *
 * ```rust,ignore
 * // For `Normal`
 * let priority = priority_calc(tip);
 *
 * // For `Operational`
 * let virtual_tip = (inclusion_fee + tip) * OperationalFeeMultiplier;
 * let priority = priority_calc(tip + virtual_tip);
 * ```
 *
 * Note that since we use `final_fee` the multiplier applies also to the regular `tip`
 * sent with the transaction. So, not only does the transaction get a priority bump based
 * on the `inclusion_fee`, but we also amplify the impact of tips applied to `Operational`
 * transactions.
 */
OperationalFeeMultiplier: PlainDescriptor<number>}],
Authorship: [{

/**
 * Author of current block.
 */
Author: StorageDescriptor<[], SS58String, true>}, {}, {}, {}, {}],
CollatorSelection: [{

/**
 * The invulnerable, permissioned collators. This list must be sorted.
 */
Invulnerables: StorageDescriptor<[], Anonymize<Ia2lhg7l2hilo3>, false>,


/**
 * The (community, limited) collation candidates. `Candidates` and `Invulnerables` should be
 * mutually exclusive.
 */
Candidates: StorageDescriptor<[], Anonymize<Ifi4da1gej1fri>, false>,


/**
 * Last block authored by collator.
 */
LastAuthoredBlock: StorageDescriptor<[Key: SS58String], number, false>,


/**
 * Desired number of candidates.
 *
 * This should ideally always be less than [`Config::MaxCandidates`] for weights to be correct.
 */
DesiredCandidates: StorageDescriptor<[], number, false>,


/**
 * Fixed amount to deposit to become a collator.
 *
 * When a collator calls `leave_intent` they immediately receive the deposit back.
 */
CandidacyBond: StorageDescriptor<[], bigint, false>}, {

/**
 *See [`Pallet::set_invulnerables`].
 */
set_invulnerables: TxDescriptor<Anonymize<Ifccifqltb5obi>>,


/**
 *See [`Pallet::set_desired_candidates`].
 */
set_desired_candidates: TxDescriptor<Anonymize<Iadtsfv699cq8b>>,


/**
 *See [`Pallet::set_candidacy_bond`].
 */
set_candidacy_bond: TxDescriptor<Anonymize<Ialpmgmhr3gk5r>>,


/**
 *See [`Pallet::register_as_candidate`].
 */
register_as_candidate: TxDescriptor<undefined>,


/**
 *See [`Pallet::leave_intent`].
 */
leave_intent: TxDescriptor<undefined>,


/**
 *See [`Pallet::add_invulnerable`].
 */
add_invulnerable: TxDescriptor<Anonymize<I4cbvqmqadhrea>>,


/**
 *See [`Pallet::remove_invulnerable`].
 */
remove_invulnerable: TxDescriptor<Anonymize<I4cbvqmqadhrea>>}, {

/**
 *New Invulnerables were set.
 */
NewInvulnerables: PlainDescriptor<Anonymize<I39t01nnod9109>>,


/**
 *A new Invulnerable was added.
 */
InvulnerableAdded: PlainDescriptor<Anonymize<I6v8sm60vvkmk7>>,


/**
 *An Invulnerable was removed.
 */
InvulnerableRemoved: PlainDescriptor<Anonymize<I6v8sm60vvkmk7>>,


/**
 *The number of desired candidates was set.
 */
NewDesiredCandidates: PlainDescriptor<Anonymize<I1qmtmbe5so8r3>>,


/**
 *The candidacy bond was set.
 */
NewCandidacyBond: PlainDescriptor<Anonymize<Ih99m6ehpcar7>>,


/**
 *A new candidate joined.
 */
CandidateAdded: PlainDescriptor<Anonymize<Idgorhsbgdq2ap>>,


/**
 *A candidate was removed.
 */
CandidateRemoved: PlainDescriptor<Anonymize<I6v8sm60vvkmk7>>,


/**
 *An account was unable to be added to the Invulnerables because they did not have keys
 *registered. Other Invulnerables may have been set.
 */
InvalidInvulnerableSkipped: PlainDescriptor<Anonymize<I6v8sm60vvkmk7>>}, {

/**
 *The pallet has too many candidates.
 */
TooManyCandidates: PlainDescriptor<undefined>,


/**
 *Leaving would result in too few candidates.
 */
TooFewEligibleCollators: PlainDescriptor<undefined>,


/**
 *Account is already a candidate.
 */
AlreadyCandidate: PlainDescriptor<undefined>,


/**
 *Account is not a candidate.
 */
NotCandidate: PlainDescriptor<undefined>,


/**
 *There are too many Invulnerables.
 */
TooManyInvulnerables: PlainDescriptor<undefined>,


/**
 *Account is already an Invulnerable.
 */
AlreadyInvulnerable: PlainDescriptor<undefined>,


/**
 *Account is not an Invulnerable.
 */
NotInvulnerable: PlainDescriptor<undefined>,


/**
 *Account has no associated validator ID.
 */
NoAssociatedValidatorId: PlainDescriptor<undefined>,


/**
 *Validator ID is not yet registered.
 */
ValidatorNotRegistered: PlainDescriptor<undefined>}, {}],
Session: [{

/**
 * The current set of validators.
 */
Validators: StorageDescriptor<[], Anonymize<Ia2lhg7l2hilo3>, false>,


/**
 * Current index of the session.
 */
CurrentIndex: StorageDescriptor<[], number, false>,


/**
 * True if the underlying economic identities or weighting behind the validators
 * has changed in the queued validator set.
 */
QueuedChanged: StorageDescriptor<[], boolean, false>,


/**
 * The queued keys for the next session. When the next session begins, these keys
 * will be used to determine the validator's session keys.
 */
QueuedKeys: StorageDescriptor<[], Anonymize<I9our4clsjkim0>, false>,


/**
 * Indices of disabled validators.
 *
 * The vec is always kept sorted so that we can find whether a given validator is
 * disabled using binary search. It gets cleared when `on_session_ending` returns
 * a new set of identities.
 */
DisabledValidators: StorageDescriptor<[], Anonymize<Icgljjb6j82uhn>, false>,


/**
 * The next session keys for a validator.
 */
NextKeys: StorageDescriptor<[Key: SS58String], Binary, true>,


/**
 * The owner of a key. The key is the `KeyTypeId` + the encoded key.
 */
KeyOwner: StorageDescriptor<[Key: Anonymize<Idhk5e7nto8mrb>], SS58String, true>}, {

/**
 *See [`Pallet::set_keys`].
 */
set_keys: TxDescriptor<Anonymize<Ivojoo8sbcs0m>>,


/**
 *See [`Pallet::purge_keys`].
 */
purge_keys: TxDescriptor<undefined>}, {

/**
 *New session has happened. Note that the argument is the session index, not the
 *block number as the type might suggest.
 */
NewSession: PlainDescriptor<Anonymize<I2hq50pu2kdjpo>>}, {

/**
 *Invalid ownership proof.
 */
InvalidProof: PlainDescriptor<undefined>,


/**
 *No associated validator ID for account.
 */
NoAssociatedValidatorId: PlainDescriptor<undefined>,


/**
 *Registered duplicate key.
 */
DuplicatedKey: PlainDescriptor<undefined>,


/**
 *No keys are associated with this account.
 */
NoKeys: PlainDescriptor<undefined>,


/**
 *Key setting account is not live, so it's impossible to associate keys.
 */
NoAccount: PlainDescriptor<undefined>}, {}],
Aura: [{

/**
 * The current authority set.
 */
Authorities: StorageDescriptor<[], Anonymize<Idhnf6rtqoslea>, false>,


/**
 * The current slot of this block.
 *
 * This will be set in `on_initialize`.
 */
CurrentSlot: StorageDescriptor<[], bigint, false>}, {}, {}, {}, {}],
AuraExt: [{

/**
 * Serves as cache for the authorities.
 *
 * The authorities in AuRa are overwritten in `on_initialize` when we switch to a new session,
 * but we require the old authorities to verify the seal when validating a PoV. This will
 * always be updated to the latest AuRa authorities in `on_finalize`.
 */
Authorities: StorageDescriptor<[], Anonymize<Idhnf6rtqoslea>, false>,


/**
 * Current slot paired with a number of authored blocks.
 *
 * Updated on each block initialization.
 */
SlotInfo: StorageDescriptor<[], Anonymize<I6cs1itejju2vv>, true>}, {}, {}, {}, {}],
XcmpQueue: [{

/**
 * Status of the inbound XCMP channels.
 */
InboundXcmpStatus: StorageDescriptor<[], Anonymize<I1imu1nmuvsfjb>, false>,


/**
 * Inbound aggregate XCMP messages. It can only be one per ParaId/block.
 */
InboundXcmpMessages: StorageDescriptor<Anonymize<I5g2vv0ckl2m8b>, Binary, false>,


/**
 * The non-empty XCMP channels in order of becoming non-empty, and the index of the first
 * and last outbound message. If the two indices are equal, then it indicates an empty
 * queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
 * than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
 * case of the need to send a high-priority signal message this block.
 * The bool is true if there is a signal message waiting to be sent.
 */
OutboundXcmpStatus: StorageDescriptor<[], Anonymize<I1mse8p8gvh143>, false>,


/**
 * The messages outbound in a given XCMP channel.
 */
OutboundXcmpMessages: StorageDescriptor<Anonymize<I5g2vv0ckl2m8b>, Binary, false>,


/**
 * Any signal messages waiting to be sent.
 */
SignalMessages: StorageDescriptor<[Key: number], Binary, false>,


/**
 * The configuration which controls the dynamics of the outbound queue.
 */
QueueConfig: StorageDescriptor<[], Anonymize<Ie0cpusdmler9p>, false>,


/**
 * The messages that exceeded max individual message weight budget.
 *
 * These message stay in this storage map until they are manually dispatched via
 * `service_overweight`.
 */
Overweight: StorageDescriptor<[Key: bigint], Anonymize<I6o3vavku3vjsk>, true>,


/**
 *Counter for the related counted storage map
 */
CounterForOverweight: StorageDescriptor<[], number, false>,


/**
 * The number of overweight messages ever recorded in `Overweight`. Also doubles as the next
 * available free overweight index.
 */
OverweightCount: StorageDescriptor<[], bigint, false>,


/**
 * Whether or not the XCMP queue is suspended from executing incoming XCMs or not.
 */
QueueSuspended: StorageDescriptor<[], boolean, false>,


/**
 * The factor to multiply the base delivery fee by.
 */
DeliveryFeeFactor: StorageDescriptor<[Key: number], bigint, false>}, {

/**
 *See [`Pallet::service_overweight`].
 */
service_overweight: TxDescriptor<Anonymize<Iab1retd4gg4q1>>,


/**
 *See [`Pallet::suspend_xcm_execution`].
 */
suspend_xcm_execution: TxDescriptor<undefined>,


/**
 *See [`Pallet::resume_xcm_execution`].
 */
resume_xcm_execution: TxDescriptor<undefined>,


/**
 *See [`Pallet::update_suspend_threshold`].
 */
update_suspend_threshold: TxDescriptor<Anonymize<I3vh014cqgmrfd>>,


/**
 *See [`Pallet::update_drop_threshold`].
 */
update_drop_threshold: TxDescriptor<Anonymize<I3vh014cqgmrfd>>,


/**
 *See [`Pallet::update_resume_threshold`].
 */
update_resume_threshold: TxDescriptor<Anonymize<I3vh014cqgmrfd>>,


/**
 *See [`Pallet::update_threshold_weight`].
 */
update_threshold_weight: TxDescriptor<Anonymize<I2tni7rrb2buqm>>,


/**
 *See [`Pallet::update_weight_restrict_decay`].
 */
update_weight_restrict_decay: TxDescriptor<Anonymize<I2tni7rrb2buqm>>,


/**
 *See [`Pallet::update_xcmp_max_individual_weight`].
 */
update_xcmp_max_individual_weight: TxDescriptor<Anonymize<I2tni7rrb2buqm>>}, {

/**
 *Some XCM was executed ok.
 */
Success: PlainDescriptor<Anonymize<I7nj4acpodcef4>>,


/**
 *Some XCM failed.
 */
Fail: PlainDescriptor<Anonymize<I3n8ln6mqdfgb8>>,


/**
 *Bad XCM version used.
 */
BadVersion: PlainDescriptor<Anonymize<I2vo9trn8nhllu>>,


/**
 *Bad XCM format used.
 */
BadFormat: PlainDescriptor<Anonymize<I2vo9trn8nhllu>>,


/**
 *An HRMP message was sent to a sibling parachain.
 */
XcmpMessageSent: PlainDescriptor<Anonymize<I2vo9trn8nhllu>>,


/**
 *An XCM exceeded the individual message weight budget.
 */
OverweightEnqueued: PlainDescriptor<Anonymize<If8b64mo2bodj0>>,


/**
 *An XCM from the overweight queue was executed with the given actual weight used.
 */
OverweightServiced: PlainDescriptor<Anonymize<Icu5p58ltu1veo>>}, {

/**
 *Failed to send XCM message.
 */
FailedToSend: PlainDescriptor<undefined>,


/**
 *Bad XCM origin.
 */
BadXcmOrigin: PlainDescriptor<undefined>,


/**
 *Bad XCM data.
 */
BadXcm: PlainDescriptor<undefined>,


/**
 *Bad overweight index.
 */
BadOverweightIndex: PlainDescriptor<undefined>,


/**
 *Provided weight is possibly not enough to execute the message.
 */
WeightOverLimit: PlainDescriptor<undefined>}, {}],
PolkadotXcm: [{

/**
 * The latest available query index.
 */
QueryCounter: StorageDescriptor<[], bigint, false>,


/**
 * The ongoing queries.
 */
Queries: StorageDescriptor<[Key: bigint], XcmPalletQueryStatus, true>,


/**
 * The existing asset traps.
 *
 * Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
 * times this pair has been trapped (usually just 1 if it exists at all).
 */
AssetTraps: StorageDescriptor<[Key: Binary], number, false>,


/**
 * Default version to encode XCM when latest version of destination is unknown. If `None`,
 * then the destinations whose XCM version is unknown are considered unreachable.
 */
SafeXcmVersion: StorageDescriptor<[], number, true>,


/**
 * The Latest versions that we know various locations support.
 */
SupportedVersion: StorageDescriptor<Anonymize<I46ggargfeekkj>, number, true>,


/**
 * All locations that we have requested version notifications from.
 */
VersionNotifiers: StorageDescriptor<Anonymize<I46ggargfeekkj>, bigint, true>,


/**
 * The target locations that are subscribed to our version changes, as well as the most recent
 * of our versions we informed them of.
 */
VersionNotifyTargets: StorageDescriptor<Anonymize<I46ggargfeekkj>, Anonymize<I7vlvrrl2pnbgk>, true>,


/**
 * Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
 * the `u32` counter is the number of times that a send to the destination has been attempted,
 * which is used as a prioritization.
 */
VersionDiscoveryQueue: StorageDescriptor<[], Anonymize<Ibdqc639q3ofe0>, false>,


/**
 * The current migration's stage, if any.
 */
CurrentMigration: StorageDescriptor<[], XcmPalletVersionMigrationStage, true>,


/**
 * Fungible assets which we know are locked on a remote chain.
 */
RemoteLockedFungibles: StorageDescriptor<Anonymize<I61vn4ct4e1jjd>, Anonymize<Iaaeqd8puo95gs>, true>,


/**
 * Fungible assets which we know are locked on this chain.
 */
LockedFungibles: StorageDescriptor<[Key: SS58String], Anonymize<I64u7pb324isgb>, true>,


/**
 * Global suspension state of the XCM executor.
 */
XcmExecutionSuspended: StorageDescriptor<[], boolean, false>}, {

/**
 *See [`Pallet::send`].
 */
send: TxDescriptor<Anonymize<Icvpjofp09bmlh>>,


/**
 *See [`Pallet::teleport_assets`].
 */
teleport_assets: TxDescriptor<Anonymize<Ieeis6pj62kiu4>>,


/**
 *See [`Pallet::reserve_transfer_assets`].
 */
reserve_transfer_assets: TxDescriptor<Anonymize<Ieeis6pj62kiu4>>,


/**
 *See [`Pallet::execute`].
 */
execute: TxDescriptor<Anonymize<I53e0mdinhcvpm>>,


/**
 *See [`Pallet::force_xcm_version`].
 */
force_xcm_version: TxDescriptor<Anonymize<I732o5n04n5ohg>>,


/**
 *See [`Pallet::force_default_xcm_version`].
 */
force_default_xcm_version: TxDescriptor<Anonymize<Ic76kfh5ebqkpl>>,


/**
 *See [`Pallet::force_subscribe_version_notify`].
 */
force_subscribe_version_notify: TxDescriptor<Anonymize<I3pog27ittgi9g>>,


/**
 *See [`Pallet::force_unsubscribe_version_notify`].
 */
force_unsubscribe_version_notify: TxDescriptor<Anonymize<I3pog27ittgi9g>>,


/**
 *See [`Pallet::limited_reserve_transfer_assets`].
 */
limited_reserve_transfer_assets: TxDescriptor<Anonymize<Ifcceq8taolrca>>,


/**
 *See [`Pallet::limited_teleport_assets`].
 */
limited_teleport_assets: TxDescriptor<Anonymize<Ifcceq8taolrca>>,


/**
 *See [`Pallet::force_suspension`].
 */
force_suspension: TxDescriptor<Anonymize<Ibgm4rnf22lal1>>}, {

/**
 *Execution of an XCM message was attempted.
 */
Attempted: PlainDescriptor<Anonymize<I4e7dkr4hrus3u>>,


/**
 *A XCM message was sent.
 */
Sent: PlainDescriptor<Anonymize<Ia5b8kts5gt3p5>>,


/**
 *Query response received which does not match a registered query. This may be because a
 *matching query was never registered, it may be because it is a duplicate response, or
 *because the query timed out.
 */
UnexpectedResponse: PlainDescriptor<Anonymize<Ise9r0vrat2m6>>,


/**
 *Query response has been received and is ready for taking with `take_response`. There is
 *no registered notification call.
 */
ResponseReady: PlainDescriptor<Anonymize<I7kkbgm2llu2o3>>,


/**
 *Query response has been received and query is removed. The registered notification has
 *been dispatched and executed successfully.
 */
Notified: PlainDescriptor<Anonymize<I2uqmls7kcdnii>>,


/**
 *Query response has been received and query is removed. The registered notification
 *could not be dispatched because the dispatch weight is greater than the maximum weight
 *originally budgeted by this runtime for the query result.
 */
NotifyOverweight: PlainDescriptor<Anonymize<Idg69klialbkb8>>,


/**
 *Query response has been received and query is removed. There was a general error with
 *dispatching the notification call.
 */
NotifyDispatchError: PlainDescriptor<Anonymize<I2uqmls7kcdnii>>,


/**
 *Query response has been received and query is removed. The dispatch was unable to be
 *decoded into a `Call`; this might be due to dispatch function having a signature which
 *is not `(origin, QueryId, Response)`.
 */
NotifyDecodeFailed: PlainDescriptor<Anonymize<I2uqmls7kcdnii>>,


/**
 *Expected query response has been received but the origin location of the response does
 *not match that expected. The query remains registered for a later, valid, response to
 *be received and acted upon.
 */
InvalidResponder: PlainDescriptor<Anonymize<I9j133okge3c2>>,


/**
 *Expected query response has been received but the expected origin location placed in
 *storage by this runtime previously cannot be decoded. The query remains registered.
 *
 *This is unexpected (since a location placed in storage in a previously executing
 *runtime should be readable prior to query timeout) and dangerous since the possibly
 *valid response will be dropped. Manual governance intervention is probably going to be
 *needed.
 */
InvalidResponderVersion: PlainDescriptor<Anonymize<Ise9r0vrat2m6>>,


/**
 *Received query response has been read and removed.
 */
ResponseTaken: PlainDescriptor<Anonymize<I30pg328m00nr3>>,


/**
 *Some assets have been placed in an asset trap.
 */
AssetsTrapped: PlainDescriptor<Anonymize<I5qm1bvb2j3ap2>>,


/**
 *An XCM version change notification message has been attempted to be sent.
 *
 *The cost of sending it (borne by the chain) is included.
 */
VersionChangeNotified: PlainDescriptor<Anonymize<I95aqmsd6gjmqs>>,


/**
 *The supported version of a location has been changed. This might be through an
 *automatic notification or a manual intervention.
 */
SupportedVersionChanged: PlainDescriptor<Anonymize<I732o5n04n5ohg>>,


/**
 *A given location which had a version change subscription was dropped owing to an error
 *sending the notification to it.
 */
NotifyTargetSendFail: PlainDescriptor<Anonymize<Iarlf7ddo81fm5>>,


/**
 *A given location which had a version change subscription was dropped owing to an error
 *migrating the location to our new XCM format.
 */
NotifyTargetMigrationFail: PlainDescriptor<Anonymize<Ie9bjgclf7vho0>>,


/**
 *Expected query response has been received but the expected querier location placed in
 *storage by this runtime previously cannot be decoded. The query remains registered.
 *
 *This is unexpected (since a location placed in storage in a previously executing
 *runtime should be readable prior to query timeout) and dangerous since the possibly
 *valid response will be dropped. Manual governance intervention is probably going to be
 *needed.
 */
InvalidQuerierVersion: PlainDescriptor<Anonymize<Ise9r0vrat2m6>>,


/**
 *Expected query response has been received but the querier location of the response does
 *not match the expected. The query remains registered for a later, valid, response to
 *be received and acted upon.
 */
InvalidQuerier: PlainDescriptor<Anonymize<I7dm0nb8u3g2hv>>,


/**
 *A remote has requested XCM version change notification from us and we have honored it.
 *A version information message is sent to them and its cost is included.
 */
VersionNotifyStarted: PlainDescriptor<Anonymize<I5pnf8l8c1nkfk>>,


/**
 *We have requested that a remote chain send us XCM version change notifications.
 */
VersionNotifyRequested: PlainDescriptor<Anonymize<I5pnf8l8c1nkfk>>,


/**
 *We have requested that a remote chain stops sending us XCM version change
 *notifications.
 */
VersionNotifyUnrequested: PlainDescriptor<Anonymize<I5pnf8l8c1nkfk>>,


/**
 *Fees were paid from a location for an operation (often for using `SendXcm`).
 */
FeesPaid: PlainDescriptor<Anonymize<Ibknqphki4flb3>>,


/**
 *Some assets have been claimed from an asset trap
 */
AssetsClaimed: PlainDescriptor<Anonymize<I5qm1bvb2j3ap2>>}, {

/**
 *The desired destination was unreachable, generally because there is a no way of routing
 *to it.
 */
Unreachable: PlainDescriptor<undefined>,


/**
 *There was some other issue (i.e. not to do with routing) in sending the message.
 *Perhaps a lack of space for buffering the message.
 */
SendFailure: PlainDescriptor<undefined>,


/**
 *The message execution fails the filter.
 */
Filtered: PlainDescriptor<undefined>,


/**
 *The message's weight could not be determined.
 */
UnweighableMessage: PlainDescriptor<undefined>,


/**
 *The destination `MultiLocation` provided cannot be inverted.
 */
DestinationNotInvertible: PlainDescriptor<undefined>,


/**
 *The assets to be sent are empty.
 */
Empty: PlainDescriptor<undefined>,


/**
 *Could not re-anchor the assets to declare the fees for the destination chain.
 */
CannotReanchor: PlainDescriptor<undefined>,


/**
 *Too many assets have been attempted for transfer.
 */
TooManyAssets: PlainDescriptor<undefined>,


/**
 *Origin is invalid for sending.
 */
InvalidOrigin: PlainDescriptor<undefined>,


/**
 *The version of the `Versioned` value used is not able to be interpreted.
 */
BadVersion: PlainDescriptor<undefined>,


/**
 *The given location could not be used (e.g. because it cannot be expressed in the
 *desired version of XCM).
 */
BadLocation: PlainDescriptor<undefined>,


/**
 *The referenced subscription could not be found.
 */
NoSubscription: PlainDescriptor<undefined>,


/**
 *The location is invalid since it already has a subscription from us.
 */
AlreadySubscribed: PlainDescriptor<undefined>,


/**
 *Invalid asset for the operation.
 */
InvalidAsset: PlainDescriptor<undefined>,


/**
 *The owner does not own (all) of the asset that they wish to do the operation on.
 */
LowBalance: PlainDescriptor<undefined>,


/**
 *The asset owner has too many locks on the asset.
 */
TooManyLocks: PlainDescriptor<undefined>,


/**
 *The given account is not an identifiable sovereign account for any location.
 */
AccountNotSovereign: PlainDescriptor<undefined>,


/**
 *The operation required fees to be paid which the initiator could not meet.
 */
FeesNotMet: PlainDescriptor<undefined>,


/**
 *A remote lock with the corresponding data could not be found.
 */
LockNotFound: PlainDescriptor<undefined>,


/**
 *The unlock operation cannot succeed because there are still consumers of the lock.
 */
InUse: PlainDescriptor<undefined>}, {}],
CumulusXcm: [{}, {}, {

/**
 *Downward message is invalid XCM.
 *\[ id \]
 */
InvalidFormat: PlainDescriptor<Binary>,


/**
 *Downward message is unsupported version of XCM.
 *\[ id \]
 */
UnsupportedVersion: PlainDescriptor<Binary>,


/**
 *Downward message executed with the given outcome.
 *\[ id, outcome \]
 */
ExecutedDownward: PlainDescriptor<Anonymize<Id0ii3t0e6fgob>>}, {}, {}],
DmpQueue: [{

/**
 * The configuration.
 */
Configuration: StorageDescriptor<[], Anonymize<I4q39t5hn830vp>, false>,


/**
 * The page index.
 */
PageIndex: StorageDescriptor<[], Anonymize<Iepvrcsdbii2qt>, false>,


/**
 * The queue pages.
 */
Pages: StorageDescriptor<[Key: number], Anonymize<I82vjkits3vc46>, false>,


/**
 * The overweight messages.
 */
Overweight: StorageDescriptor<[Key: bigint], Anonymize<Icp9h5ma02v1rg>, true>,


/**
 *Counter for the related counted storage map
 */
CounterForOverweight: StorageDescriptor<[], number, false>}, {

/**
 *See [`Pallet::service_overweight`].
 */
service_overweight: TxDescriptor<Anonymize<Iab1retd4gg4q1>>}, {

/**
 *Downward message is invalid XCM.
 */
InvalidFormat: PlainDescriptor<Anonymize<I2vo9trn8nhllu>>,


/**
 *Downward message is unsupported version of XCM.
 */
UnsupportedVersion: PlainDescriptor<Anonymize<I2vo9trn8nhllu>>,


/**
 *Downward message executed with the given outcome.
 */
ExecutedDownward: PlainDescriptor<Anonymize<I6mr530l14uapg>>,


/**
 *The weight limit for handling downward messages was reached.
 */
WeightExhausted: PlainDescriptor<Anonymize<I2ds5dc604t7si>>,


/**
 *Downward message is overweight and was placed in the overweight queue.
 */
OverweightEnqueued: PlainDescriptor<Anonymize<Idqsknek3bsc0s>>,


/**
 *Downward message from the overweight queue was executed.
 */
OverweightServiced: PlainDescriptor<Anonymize<Ise9gq7rqlnvm>>,


/**
 *The maximum number of downward messages was reached.
 */
MaxMessagesExhausted: PlainDescriptor<Anonymize<I2vo9trn8nhllu>>}, {

/**
 *The message index given is unknown.
 */
Unknown: PlainDescriptor<undefined>,


/**
 *The amount of weight given is possibly not enough for executing the message.
 */
OverLimit: PlainDescriptor<undefined>}, {}],
Utility: [{}, {

/**
 *See [`Pallet::batch`].
 */
batch: TxDescriptor<Anonymize<Id0f4f8p846e4o>>,


/**
 *See [`Pallet::as_derivative`].
 */
as_derivative: TxDescriptor<Anonymize<Idkn325fta6i3i>>,


/**
 *See [`Pallet::batch_all`].
 */
batch_all: TxDescriptor<Anonymize<Id0f4f8p846e4o>>,


/**
 *See [`Pallet::dispatch_as`].
 */
dispatch_as: TxDescriptor<Anonymize<Iq7iccc2hfumf>>,


/**
 *See [`Pallet::force_batch`].
 */
force_batch: TxDescriptor<Anonymize<Id0f4f8p846e4o>>,


/**
 *See [`Pallet::with_weight`].
 */
with_weight: TxDescriptor<Anonymize<I1654abd13olpl>>}, {

/**
 *Batch of dispatches did not complete fully. Index of first failing dispatch given, as
 *well as the error.
 */
BatchInterrupted: PlainDescriptor<Anonymize<I6tn8e5lqr339o>>,


/**
 *Batch of dispatches completed fully with no error.
 */
BatchCompleted: PlainDescriptor<undefined>,


/**
 *Batch of dispatches completed but has errors.
 */
BatchCompletedWithErrors: PlainDescriptor<undefined>,


/**
 *A single item within a Batch of dispatches has completed with no error.
 */
ItemCompleted: PlainDescriptor<undefined>,


/**
 *A single item within a Batch of dispatches has completed with error.
 */
ItemFailed: PlainDescriptor<Anonymize<I11lb9o37qkk4f>>,


/**
 *A call was dispatched.
 */
DispatchedAs: PlainDescriptor<Anonymize<Ie5i8qqljk3tjb>>}, {

/**
 *Too many calls batched.
 */
TooManyCalls: PlainDescriptor<undefined>}, {

/**
 * The limit on the number of batched calls.
 */
batched_calls_limit: PlainDescriptor<number>}],
Multisig: [{

/**
 * The set of open multisig operations.
 */
Multisigs: StorageDescriptor<Anonymize<I73gble6tmb52f>, Anonymize<Iag146hmjgqfgj>, true>}, {

/**
 *See [`Pallet::as_multi_threshold_1`].
 */
as_multi_threshold_1: TxDescriptor<Anonymize<Idbktfo7cbj1un>>,


/**
 *See [`Pallet::as_multi`].
 */
as_multi: TxDescriptor<Anonymize<I1nc4131phq95n>>,


/**
 *See [`Pallet::approve_as_multi`].
 */
approve_as_multi: TxDescriptor<Anonymize<I349bg0i7n8ohu>>,


/**
 *See [`Pallet::cancel_as_multi`].
 */
cancel_as_multi: TxDescriptor<Anonymize<I8plicv234mqe5>>}, {

/**
 *A new multisig operation has begun.
 */
NewMultisig: PlainDescriptor<Anonymize<Ibvv58de7m7rsi>>,


/**
 *A multisig operation has been approved by someone.
 */
MultisigApproval: PlainDescriptor<Anonymize<I4uo2dg1jvbdtg>>,


/**
 *A multisig operation has been executed.
 */
MultisigExecuted: PlainDescriptor<Anonymize<Ifbo6gts4g8u33>>,


/**
 *A multisig operation has been cancelled.
 */
MultisigCancelled: PlainDescriptor<Anonymize<I82jp3a00f0f8k>>}, {

/**
 *Threshold must be 2 or greater.
 */
MinimumThreshold: PlainDescriptor<undefined>,


/**
 *Call is already approved by this signatory.
 */
AlreadyApproved: PlainDescriptor<undefined>,


/**
 *Call doesn't need any (more) approvals.
 */
NoApprovalsNeeded: PlainDescriptor<undefined>,


/**
 *There are too few signatories in the list.
 */
TooFewSignatories: PlainDescriptor<undefined>,


/**
 *There are too many signatories in the list.
 */
TooManySignatories: PlainDescriptor<undefined>,


/**
 *The signatories were provided out of order; they should be ordered.
 */
SignatoriesOutOfOrder: PlainDescriptor<undefined>,


/**
 *The sender was contained in the other signatories; it shouldn't be.
 */
SenderInSignatories: PlainDescriptor<undefined>,


/**
 *Multisig operation not found when attempting to cancel.
 */
NotFound: PlainDescriptor<undefined>,


/**
 *Only the account that originally created the multisig is able to cancel it.
 */
NotOwner: PlainDescriptor<undefined>,


/**
 *No timepoint was given, yet the multisig operation is already underway.
 */
NoTimepoint: PlainDescriptor<undefined>,


/**
 *A different timepoint was given to the multisig operation that is underway.
 */
WrongTimepoint: PlainDescriptor<undefined>,


/**
 *A timepoint was given, yet no multisig operation is underway.
 */
UnexpectedTimepoint: PlainDescriptor<undefined>,


/**
 *The maximum weight information provided was too low.
 */
MaxWeightTooLow: PlainDescriptor<undefined>,


/**
 *The data to be stored is already stored.
 */
AlreadyStored: PlainDescriptor<undefined>}, {

/**
 * The base amount of currency needed to reserve for creating a multisig execution or to
 * store a dispatch call for later.
 *
 * This is held for an additional storage item whose value size is
 * `4 + sizeof((BlockNumber, Balance, AccountId))` bytes and whose key size is
 * `32 + sizeof(AccountId)` bytes.
 */
DepositBase: PlainDescriptor<bigint>,


/**
 * The amount of currency needed per unit threshold when creating a multisig execution.
 *
 * This is held for adding 32 bytes more into a pre-existing storage value.
 */
DepositFactor: PlainDescriptor<bigint>,


/**
 * The maximum amount of signatories allowed in the multisig.
 */
MaxSignatories: PlainDescriptor<number>}],
Proxy: [{

/**
 * The set of account proxies. Maps the account which has delegated to the accounts
 * which are being delegated to, together with the amount held on deposit.
 */
Proxies: StorageDescriptor<[Key: SS58String], Anonymize<I3q5rcchchf9rk>, false>,


/**
 * The announcements made by the proxy (key).
 */
Announcements: StorageDescriptor<[Key: SS58String], Anonymize<I3tjio59962rg2>, false>}, {

/**
 *See [`Pallet::proxy`].
 */
proxy: TxDescriptor<Anonymize<I8mlu7201qva4e>>,


/**
 *See [`Pallet::add_proxy`].
 */
add_proxy: TxDescriptor<Anonymize<I490uvap9onp3g>>,


/**
 *See [`Pallet::remove_proxy`].
 */
remove_proxy: TxDescriptor<Anonymize<I490uvap9onp3g>>,


/**
 *See [`Pallet::remove_proxies`].
 */
remove_proxies: TxDescriptor<undefined>,


/**
 *See [`Pallet::create_pure`].
 */
create_pure: TxDescriptor<Anonymize<I8v053pd8im1d3>>,


/**
 *See [`Pallet::kill_pure`].
 */
kill_pure: TxDescriptor<Anonymize<Ibnon1qvc1ro8>>,


/**
 *See [`Pallet::announce`].
 */
announce: TxDescriptor<Anonymize<Id3bpmvju2iqi5>>,


/**
 *See [`Pallet::remove_announcement`].
 */
remove_announcement: TxDescriptor<Anonymize<Id3bpmvju2iqi5>>,


/**
 *See [`Pallet::reject_announcement`].
 */
reject_announcement: TxDescriptor<Anonymize<Ietdab69eu3c4e>>,


/**
 *See [`Pallet::proxy_announced`].
 */
proxy_announced: TxDescriptor<Anonymize<I6ckidq7jkqmnt>>}, {

/**
 *A proxy was executed correctly, with the given.
 */
ProxyExecuted: PlainDescriptor<Anonymize<Ie5i8qqljk3tjb>>,


/**
 *A pure account has been created by new proxy with given
 *disambiguation index and proxy type.
 */
PureCreated: PlainDescriptor<Anonymize<I29pqkr7dgifjk>>,


/**
 *An announcement was placed to make a call in the future.
 */
Announced: PlainDescriptor<Anonymize<Idbjbboh0q507r>>,


/**
 *A proxy was added.
 */
ProxyAdded: PlainDescriptor<Anonymize<I88knav8fvi1c3>>,


/**
 *A proxy was removed.
 */
ProxyRemoved: PlainDescriptor<Anonymize<I88knav8fvi1c3>>}, {

/**
 *There are too many proxies registered or too many announcements pending.
 */
TooMany: PlainDescriptor<undefined>,


/**
 *Proxy registration not found.
 */
NotFound: PlainDescriptor<undefined>,


/**
 *Sender is not a proxy of the account to be proxied.
 */
NotProxy: PlainDescriptor<undefined>,


/**
 *A call which is incompatible with the proxy type's filter was attempted.
 */
Unproxyable: PlainDescriptor<undefined>,


/**
 *Account is already a proxy.
 */
Duplicate: PlainDescriptor<undefined>,


/**
 *Call may not be made by proxy because it may escalate its privileges.
 */
NoPermission: PlainDescriptor<undefined>,


/**
 *Announcement, if made at all, was made too recently.
 */
Unannounced: PlainDescriptor<undefined>,


/**
 *Cannot add self as proxy.
 */
NoSelfProxy: PlainDescriptor<undefined>}, {

/**
 * The base amount of currency needed to reserve for creating a proxy.
 *
 * This is held for an additional storage item whose value size is
 * `sizeof(Balance)` bytes and whose key size is `sizeof(AccountId)` bytes.
 */
ProxyDepositBase: PlainDescriptor<bigint>,


/**
 * The amount of currency needed per proxy added.
 *
 * This is held for adding 32 bytes plus an instance of `ProxyType` more into a
 * pre-existing storage value. Thus, when configuring `ProxyDepositFactor` one should take
 * into account `32 + proxy_type.encode().len()` bytes of data.
 */
ProxyDepositFactor: PlainDescriptor<bigint>,


/**
 * The maximum amount of proxies allowed for a single account.
 */
MaxProxies: PlainDescriptor<number>,


/**
 * The maximum amount of time-delayed announcements that are allowed to be pending.
 */
MaxPending: PlainDescriptor<number>,


/**
 * The base amount of currency needed to reserve for creating an announcement.
 *
 * This is held when a new storage item holding a `Balance` is created (typically 16
 * bytes).
 */
AnnouncementDepositBase: PlainDescriptor<bigint>,


/**
 * The amount of currency needed per announcement made.
 *
 * This is held for adding an `AccountId`, `Hash` and `BlockNumber` (typically 68 bytes)
 * into a pre-existing storage value.
 */
AnnouncementDepositFactor: PlainDescriptor<bigint>}],
Preimage: [{

/**
 * The request status of a given hash.
 */
StatusFor: StorageDescriptor<[Key: Binary], PreimageRequestStatus, true>,


/**
 * The request status of a given hash.
 */
RequestStatusFor: StorageDescriptor<[Key: Binary], PreimageRequestStatus1, true>,


/**

 */
PreimageFor: StorageDescriptor<[Key: Anonymize<I64gm4hrq7urum>], Binary, true>}, {

/**
 *See [`Pallet::note_preimage`].
 */
note_preimage: TxDescriptor<Anonymize<I82nfqfkd48n10>>,


/**
 *See [`Pallet::unnote_preimage`].
 */
unnote_preimage: TxDescriptor<Anonymize<Id9d48vaes3c53>>,


/**
 *See [`Pallet::request_preimage`].
 */
request_preimage: TxDescriptor<Anonymize<Id9d48vaes3c53>>,


/**
 *See [`Pallet::unrequest_preimage`].
 */
unrequest_preimage: TxDescriptor<Anonymize<Id9d48vaes3c53>>,


/**
 *See [`Pallet::ensure_updated`].
 */
ensure_updated: TxDescriptor<Anonymize<Idaor7tajt0l3k>>}, {

/**
 *A preimage has been noted.
 */
Noted: PlainDescriptor<Anonymize<Id9d48vaes3c53>>,


/**
 *A preimage has been requested.
 */
Requested: PlainDescriptor<Anonymize<Id9d48vaes3c53>>,


/**
 *A preimage has ben cleared.
 */
Cleared: PlainDescriptor<Anonymize<Id9d48vaes3c53>>}, {

/**
 *Preimage is too large to store on-chain.
 */
TooBig: PlainDescriptor<undefined>,


/**
 *Preimage has already been noted on-chain.
 */
AlreadyNoted: PlainDescriptor<undefined>,


/**
 *The user is not authorized to perform this action.
 */
NotAuthorized: PlainDescriptor<undefined>,


/**
 *The preimage cannot be removed since it has not yet been noted.
 */
NotNoted: PlainDescriptor<undefined>,


/**
 *A preimage may not be removed when there are outstanding requests.
 */
Requested: PlainDescriptor<undefined>,


/**
 *The preimage request cannot be removed since no outstanding requests exist.
 */
NotRequested: PlainDescriptor<undefined>,


/**
 *More than `MAX_HASH_UPGRADE_BULK_COUNT` hashes were requested to be upgraded at once.
 */
TooMany: PlainDescriptor<undefined>,


/**
 *Too few hashes were requested to be upgraded (i.e. zero).
 */
TooFew: PlainDescriptor<undefined>}, {}],
Scheduler: [{

/**

 */
IncompleteSince: StorageDescriptor<[], number, true>,


/**
 * Items to be executed, indexed by the block number that they should be executed on.
 */
Agenda: StorageDescriptor<[Key: number], Anonymize<I6peuma3nc745n>, false>,


/**
 * Lookup from a name to the block number and index of the task.
 *
 * For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
 * identities.
 */
Lookup: StorageDescriptor<[Key: Binary], Anonymize<I5g2vv0ckl2m8b>, true>}, {

/**
 *See [`Pallet::schedule`].
 */
schedule: TxDescriptor<Anonymize<I1qkfnm7irt5un>>,


/**
 *See [`Pallet::cancel`].
 */
cancel: TxDescriptor<Anonymize<I5n4sebgkfr760>>,


/**
 *See [`Pallet::schedule_named`].
 */
schedule_named: TxDescriptor<Anonymize<Icu99suj4go17>>,


/**
 *See [`Pallet::cancel_named`].
 */
cancel_named: TxDescriptor<Anonymize<Idsdstalforb09>>,


/**
 *See [`Pallet::schedule_after`].
 */
schedule_after: TxDescriptor<Anonymize<I6eugra8pivgrs>>,


/**
 *See [`Pallet::schedule_named_after`].
 */
schedule_named_after: TxDescriptor<Anonymize<I11o2rsm65pn9o>>}, {

/**
 *Scheduled some task.
 */
Scheduled: PlainDescriptor<Anonymize<I5n4sebgkfr760>>,


/**
 *Canceled some task.
 */
Canceled: PlainDescriptor<Anonymize<I5n4sebgkfr760>>,


/**
 *Dispatched some task.
 */
Dispatched: PlainDescriptor<Anonymize<Idv8erd9m7jvse>>,


/**
 *The call for the provided hash was not found so the task has been aborted.
 */
CallUnavailable: PlainDescriptor<Anonymize<Ibkv7dijodoblp>>,


/**
 *The given task was unable to be renewed since the agenda is full at that block.
 */
PeriodicFailed: PlainDescriptor<Anonymize<Ibkv7dijodoblp>>,


/**
 *The given task can never be executed since it is overweight.
 */
PermanentlyOverweight: PlainDescriptor<Anonymize<Ibkv7dijodoblp>>}, {

/**
 *Failed to schedule a call
 */
FailedToSchedule: PlainDescriptor<undefined>,


/**
 *Cannot find the scheduled call.
 */
NotFound: PlainDescriptor<undefined>,


/**
 *Given target block number is in the past.
 */
TargetBlockNumberInPast: PlainDescriptor<undefined>,


/**
 *Reschedule failed because it does not change scheduled time.
 */
RescheduleNoChange: PlainDescriptor<undefined>,


/**
 *Attempt to use a non-named function on a named task.
 */
Named: PlainDescriptor<undefined>}, {

/**
 * The maximum weight that may be scheduled per block for any dispatchables.
 */
MaximumWeight: PlainDescriptor<Anonymize<I4q39t5hn830vp>>,


/**
 * The maximum number of scheduled calls in the queue for a single block.
 *
 * NOTE:
 * + Dependent pallets' benchmarks might require a higher limit for the setting. Set a
 * higher limit under `runtime-benchmarks` feature.
 */
MaxScheduledPerBlock: PlainDescriptor<number>}],
AssetRate: [{

/**
 * Maps an asset to its fixed point representation in the native balance.
 *
 * E.g. `native_amount = asset_amount * ConversionRateToNative::<T>::get(asset_kind)`
 */
ConversionRateToNative: StorageDescriptor<[Key: Anonymize<I32r9skkupsthv>], bigint, true>}, {

/**
 *See [`Pallet::create`].
 */
create: TxDescriptor<Anonymize<I16soggnee6qrb>>,


/**
 *See [`Pallet::update`].
 */
update: TxDescriptor<Anonymize<I16soggnee6qrb>>,


/**
 *See [`Pallet::remove`].
 */
remove: TxDescriptor<Anonymize<Ifvnf1s3g2lg8u>>}, {

/**

 */
AssetRateCreated: PlainDescriptor<Anonymize<I16soggnee6qrb>>,


/**

 */
AssetRateRemoved: PlainDescriptor<Anonymize<Ifvnf1s3g2lg8u>>,


/**

 */
AssetRateUpdated: PlainDescriptor<Anonymize<Iedcb9b2srjfp0>>}, {

/**
 *The given asset ID is unknown.
 */
UnknownAssetKind: PlainDescriptor<undefined>,


/**
 *The given asset ID already has an assigned conversion rate and cannot be re-created.
 */
AlreadyExists: PlainDescriptor<undefined>}, {}],
Alliance: [{

/**
 * The IPFS CID of the alliance rule.
 * Fellows can propose a new rule with a super-majority.
 */
Rule: StorageDescriptor<[], Anonymize<I2h4fuon2pnvcd>, true>,


/**
 * The current IPFS CIDs of any announcements.
 */
Announcements: StorageDescriptor<[], Anonymize<I4495bvn4ld72n>, false>,


/**
 * Maps members to their candidacy deposit.
 */
DepositOf: StorageDescriptor<[Key: SS58String], bigint, true>,


/**
 * Maps member type to members of each type.
 */
Members: StorageDescriptor<[Key: Anonymize<I4jb9st4l6tk5c>], Anonymize<Ia2lhg7l2hilo3>, false>,


/**
 * A set of members who gave a retirement notice. They can retire after the end of retirement
 * period stored as a future block number.
 */
RetiringMembers: StorageDescriptor<[Key: SS58String], number, true>,


/**
 * The current list of accounts deemed unscrupulous. These accounts non grata cannot submit
 * candidacy.
 */
UnscrupulousAccounts: StorageDescriptor<[], Anonymize<Ia2lhg7l2hilo3>, false>,


/**
 * The current list of websites deemed unscrupulous.
 */
UnscrupulousWebsites: StorageDescriptor<[], Anonymize<Itom7fk49o0c9>, false>}, {

/**
 *See [`Pallet::propose`].
 */
propose: TxDescriptor<Anonymize<Iklhae5b9b3k8>>,


/**
 *See [`Pallet::vote`].
 */
vote: TxDescriptor<Anonymize<I4ncel23eptqai>>,


/**
 *See [`Pallet::init_members`].
 */
init_members: TxDescriptor<Anonymize<Ia61kag3grdevk>>,


/**
 *See [`Pallet::disband`].
 */
disband: TxDescriptor<Anonymize<Icq0crsj7vrl4j>>,


/**
 *See [`Pallet::set_rule`].
 */
set_rule: TxDescriptor<Anonymize<I2dgasao7pteq7>>,


/**
 *See [`Pallet::announce`].
 */
announce: TxDescriptor<Anonymize<I56f2tlouivnqg>>,


/**
 *See [`Pallet::remove_announcement`].
 */
remove_announcement: TxDescriptor<Anonymize<I56f2tlouivnqg>>,


/**
 *See [`Pallet::join_alliance`].
 */
join_alliance: TxDescriptor<undefined>,


/**
 *See [`Pallet::nominate_ally`].
 */
nominate_ally: TxDescriptor<Anonymize<I2nmm2fprtp4kl>>,


/**
 *See [`Pallet::elevate_ally`].
 */
elevate_ally: TxDescriptor<Anonymize<I5vno9afhrn994>>,


/**
 *See [`Pallet::give_retirement_notice`].
 */
give_retirement_notice: TxDescriptor<undefined>,


/**
 *See [`Pallet::retire`].
 */
retire: TxDescriptor<undefined>,


/**
 *See [`Pallet::kick_member`].
 */
kick_member: TxDescriptor<Anonymize<I2nmm2fprtp4kl>>,


/**
 *See [`Pallet::add_unscrupulous_items`].
 */
add_unscrupulous_items: TxDescriptor<Anonymize<I2t3hu6k5vesjh>>,


/**
 *See [`Pallet::remove_unscrupulous_items`].
 */
remove_unscrupulous_items: TxDescriptor<Anonymize<I2t3hu6k5vesjh>>,


/**
 *See [`Pallet::close`].
 */
close: TxDescriptor<Anonymize<Ic3aqnecvctqmc>>,


/**
 *See [`Pallet::abdicate_fellow_status`].
 */
abdicate_fellow_status: TxDescriptor<undefined>}, {

/**
 *A new rule has been set.
 */
NewRuleSet: PlainDescriptor<Anonymize<I2dgasao7pteq7>>,


/**
 *A new announcement has been proposed.
 */
Announced: PlainDescriptor<Anonymize<I56f2tlouivnqg>>,


/**
 *An on-chain announcement has been removed.
 */
AnnouncementRemoved: PlainDescriptor<Anonymize<I56f2tlouivnqg>>,


/**
 *Some accounts have been initialized as members (fellows/allies).
 */
MembersInitialized: PlainDescriptor<Anonymize<Ia61kag3grdevk>>,


/**
 *An account has been added as an Ally and reserved its deposit.
 */
NewAllyJoined: PlainDescriptor<Anonymize<I79vua51vqq0mc>>,


/**
 *An ally has been elevated to Fellow.
 */
AllyElevated: PlainDescriptor<Anonymize<I3trq1j79d9t1e>>,


/**
 *A member gave retirement notice and their retirement period started.
 */
MemberRetirementPeriodStarted: PlainDescriptor<Anonymize<Ie3gphha4ejh40>>,


/**
 *A member has retired with its deposit unreserved.
 */
MemberRetired: PlainDescriptor<Anonymize<Iafhd8kv029rqj>>,


/**
 *A member has been kicked out with its deposit slashed.
 */
MemberKicked: PlainDescriptor<Anonymize<I2mcnoj31i9be1>>,


/**
 *Accounts or websites have been added into the list of unscrupulous items.
 */
UnscrupulousItemAdded: PlainDescriptor<Anonymize<I2t3hu6k5vesjh>>,


/**
 *Accounts or websites have been removed from the list of unscrupulous items.
 */
UnscrupulousItemRemoved: PlainDescriptor<Anonymize<I2t3hu6k5vesjh>>,


/**
 *Alliance disbanded. Includes number deleted members and unreserved deposits.
 */
AllianceDisbanded: PlainDescriptor<Anonymize<I9dapsurd7u7ga>>,


/**
 *A Fellow abdicated their voting rights. They are now an Ally.
 */
FellowAbdicated: PlainDescriptor<Anonymize<I8uij7nmvtb96e>>}, {

/**
 *The Alliance has not been initialized yet, therefore accounts cannot join it.
 */
AllianceNotYetInitialized: PlainDescriptor<undefined>,


/**
 *The Alliance has been initialized, therefore cannot be initialized again.
 */
AllianceAlreadyInitialized: PlainDescriptor<undefined>,


/**
 *Account is already a member.
 */
AlreadyMember: PlainDescriptor<undefined>,


/**
 *Account is not a member.
 */
NotMember: PlainDescriptor<undefined>,


/**
 *Account is not an ally.
 */
NotAlly: PlainDescriptor<undefined>,


/**
 *Account does not have voting rights.
 */
NoVotingRights: PlainDescriptor<undefined>,


/**
 *Account is already an elevated (fellow) member.
 */
AlreadyElevated: PlainDescriptor<undefined>,


/**
 *Item is already listed as unscrupulous.
 */
AlreadyUnscrupulous: PlainDescriptor<undefined>,


/**
 *Account has been deemed unscrupulous by the Alliance and is not welcome to join or be
 *nominated.
 */
AccountNonGrata: PlainDescriptor<undefined>,


/**
 *Item has not been deemed unscrupulous.
 */
NotListedAsUnscrupulous: PlainDescriptor<undefined>,


/**
 *The number of unscrupulous items exceeds `MaxUnscrupulousItems`.
 */
TooManyUnscrupulousItems: PlainDescriptor<undefined>,


/**
 *Length of website URL exceeds `MaxWebsiteUrlLength`.
 */
TooLongWebsiteUrl: PlainDescriptor<undefined>,


/**
 *Balance is insufficient for the required deposit.
 */
InsufficientFunds: PlainDescriptor<undefined>,


/**
 *The account's identity does not have display field and website field.
 */
WithoutIdentityDisplayAndWebsite: PlainDescriptor<undefined>,


/**
 *The account's identity has no good judgement.
 */
WithoutGoodIdentityJudgement: PlainDescriptor<undefined>,


/**
 *The proposal hash is not found.
 */
MissingProposalHash: PlainDescriptor<undefined>,


/**
 *The announcement is not found.
 */
MissingAnnouncement: PlainDescriptor<undefined>,


/**
 *Number of members exceeds `MaxMembersCount`.
 */
TooManyMembers: PlainDescriptor<undefined>,


/**
 *Number of announcements exceeds `MaxAnnouncementsCount`.
 */
TooManyAnnouncements: PlainDescriptor<undefined>,


/**
 *Invalid witness data given.
 */
BadWitness: PlainDescriptor<undefined>,


/**
 *Account already gave retirement notice
 */
AlreadyRetiring: PlainDescriptor<undefined>,


/**
 *Account did not give a retirement notice required to retire.
 */
RetirementNoticeNotGiven: PlainDescriptor<undefined>,


/**
 *Retirement period has not passed.
 */
RetirementPeriodNotPassed: PlainDescriptor<undefined>,


/**
 *Fellows must be provided to initialize the Alliance.
 */
FellowsMissing: PlainDescriptor<undefined>}, {

/**
 * The maximum number of the unscrupulous items supported by the pallet.
 */
MaxUnscrupulousItems: PlainDescriptor<number>,


/**
 * The maximum length of a website URL.
 */
MaxWebsiteUrlLength: PlainDescriptor<number>,


/**
 * The deposit required for submitting candidacy.
 */
AllyDeposit: PlainDescriptor<bigint>,


/**
 * The maximum number of announcements.
 */
MaxAnnouncementsCount: PlainDescriptor<number>,


/**
 * The maximum number of members per member role.
 */
MaxMembersCount: PlainDescriptor<number>}],
AllianceMotion: [{

/**
 * The hashes of the active proposals.
 */
Proposals: StorageDescriptor<[], Anonymize<Idhnf6rtqoslea>, false>,


/**
 * Actual proposal for a given hash, if it's current.
 */
ProposalOf: StorageDescriptor<[Key: Binary], Anonymize<Iemfe4sq56o6e4>, true>,


/**
 * Votes on a given proposal, if it is ongoing.
 */
Voting: StorageDescriptor<[Key: Binary], Anonymize<I99bb69usss9gs>, true>,


/**
 * Proposals so far.
 */
ProposalCount: StorageDescriptor<[], number, false>,


/**
 * The current members of the collective. This is stored sorted (just by value).
 */
Members: StorageDescriptor<[], Anonymize<Ia2lhg7l2hilo3>, false>,


/**
 * The prime member that helps determine the default vote behavior in case of absentations.
 */
Prime: StorageDescriptor<[], SS58String, true>}, {

/**
 *See [`Pallet::set_members`].
 */
set_members: TxDescriptor<Anonymize<I38jfk5li8iang>>,


/**
 *See [`Pallet::execute`].
 */
execute: TxDescriptor<Anonymize<I8jhljjof4f7u2>>,


/**
 *See [`Pallet::propose`].
 */
propose: TxDescriptor<Anonymize<Iklhae5b9b3k8>>,


/**
 *See [`Pallet::vote`].
 */
vote: TxDescriptor<Anonymize<I4ncel23eptqai>>,


/**
 *See [`Pallet::disapprove_proposal`].
 */
disapprove_proposal: TxDescriptor<Anonymize<Icraueddqmudct>>,


/**
 *See [`Pallet::close`].
 */
close: TxDescriptor<Anonymize<Ic3aqnecvctqmc>>}, {

/**
 *A motion (given hash) has been proposed (by given account) with a threshold (given
 *`MemberCount`).
 */
Proposed: PlainDescriptor<Anonymize<I1kjs4f71ca3ei>>,


/**
 *A motion (given hash) has been voted on by given account, leaving
 *a tally (yes votes and no votes given respectively as `MemberCount`).
 */
Voted: PlainDescriptor<Anonymize<I866j5fp50ebq9>>,


/**
 *A motion was approved by the required threshold.
 */
Approved: PlainDescriptor<Anonymize<Icraueddqmudct>>,


/**
 *A motion was not approved by the required threshold.
 */
Disapproved: PlainDescriptor<Anonymize<Icraueddqmudct>>,


/**
 *A motion was executed; result will be `Ok` if it returned without error.
 */
Executed: PlainDescriptor<Anonymize<I3vvd0fdlc9ji8>>,


/**
 *A single member did some action; result will be `Ok` if it returned without error.
 */
MemberExecuted: PlainDescriptor<Anonymize<I3vvd0fdlc9ji8>>,


/**
 *A proposal was closed because its threshold was reached or after its duration was up.
 */
Closed: PlainDescriptor<Anonymize<I8jvf1ugsdsqum>>}, {

/**
 *Account is not a member
 */
NotMember: PlainDescriptor<undefined>,


/**
 *Duplicate proposals not allowed
 */
DuplicateProposal: PlainDescriptor<undefined>,


/**
 *Proposal must exist
 */
ProposalMissing: PlainDescriptor<undefined>,


/**
 *Mismatched index
 */
WrongIndex: PlainDescriptor<undefined>,


/**
 *Duplicate vote ignored
 */
DuplicateVote: PlainDescriptor<undefined>,


/**
 *Members are already initialized!
 */
AlreadyInitialized: PlainDescriptor<undefined>,


/**
 *The close call was made too early, before the end of the voting.
 */
TooEarly: PlainDescriptor<undefined>,


/**
 *There can only be a maximum of `MaxProposals` active proposals.
 */
TooManyProposals: PlainDescriptor<undefined>,


/**
 *The given weight bound for the proposal was too low.
 */
WrongProposalWeight: PlainDescriptor<undefined>,


/**
 *The given length bound for the proposal was too low.
 */
WrongProposalLength: PlainDescriptor<undefined>,


/**
 *Prime account is not a member
 */
PrimeAccountNotMember: PlainDescriptor<undefined>}, {

/**
 * The maximum weight of a dispatch call that can be proposed and executed.
 */
MaxProposalWeight: PlainDescriptor<Anonymize<I4q39t5hn830vp>>}],
FellowshipCollective: [{

/**
 * The number of members in the collective who have at least the rank according to the index
 * of the vec.
 */
MemberCount: StorageDescriptor<[Key: number], number, false>,


/**
 * The current members of the collective.
 */
Members: StorageDescriptor<[Key: SS58String], number, true>,


/**
 * The index of each ranks's member into the group of members who have at least that rank.
 */
IdToIndex: StorageDescriptor<Anonymize<I7svnfko10tq2e>, number, true>,


/**
 * The members in the collective by index. All indices in the range `0..MemberCount` will
 * return `Some`, however a member's index is not guaranteed to remain unchanged over time.
 */
IndexToId: StorageDescriptor<Anonymize<I5g2vv0ckl2m8b>, SS58String, true>,


/**
 * Votes on a given proposal, if it is ongoing.
 */
Voting: StorageDescriptor<Anonymize<I7svnfko10tq2e>, Anonymize<I996080trg6urn>, true>,


/**

 */
VotingCleanup: StorageDescriptor<[Key: number], Binary, true>}, {

/**
 *See [`Pallet::add_member`].
 */
add_member: TxDescriptor<Anonymize<I2nmm2fprtp4kl>>,


/**
 *See [`Pallet::promote_member`].
 */
promote_member: TxDescriptor<Anonymize<I2nmm2fprtp4kl>>,


/**
 *See [`Pallet::demote_member`].
 */
demote_member: TxDescriptor<Anonymize<I2nmm2fprtp4kl>>,


/**
 *See [`Pallet::remove_member`].
 */
remove_member: TxDescriptor<Anonymize<I8c23ih8fpmjma>>,


/**
 *See [`Pallet::vote`].
 */
vote: TxDescriptor<Anonymize<I8bvk21lpmah75>>,


/**
 *See [`Pallet::cleanup_poll`].
 */
cleanup_poll: TxDescriptor<Anonymize<I449n3riv6jbum>>}, {

/**
 *A member `who` has been added.
 */
MemberAdded: PlainDescriptor<Anonymize<I4cbvqmqadhrea>>,


/**
 *The member `who`se rank has been changed to the given `rank`.
 */
RankChanged: PlainDescriptor<Anonymize<Im1pm2vf6llcn>>,


/**
 *The member `who` of given `rank` has been removed from the collective.
 */
MemberRemoved: PlainDescriptor<Anonymize<Im1pm2vf6llcn>>,


/**
 *The member `who` has voted for the `poll` with the given `vote` leading to an updated
 *`tally`.
 */
Voted: PlainDescriptor<Anonymize<I31vg1u4v55v90>>}, {

/**
 *Account is already a member.
 */
AlreadyMember: PlainDescriptor<undefined>,


/**
 *Account is not a member.
 */
NotMember: PlainDescriptor<undefined>,


/**
 *The given poll index is unknown or has closed.
 */
NotPolling: PlainDescriptor<undefined>,


/**
 *The given poll is still ongoing.
 */
Ongoing: PlainDescriptor<undefined>,


/**
 *There are no further records to be removed.
 */
NoneRemaining: PlainDescriptor<undefined>,


/**
 *Unexpected error in state.
 */
Corruption: PlainDescriptor<undefined>,


/**
 *The member's rank is too low to vote.
 */
RankTooLow: PlainDescriptor<undefined>,


/**
 *The information provided is incorrect.
 */
InvalidWitness: PlainDescriptor<undefined>,


/**
 *The origin is not sufficiently privileged to do the operation.
 */
NoPermission: PlainDescriptor<undefined>}, {}],
FellowshipReferenda: [{

/**
 * The next free referendum index, aka the number of referenda started so far.
 */
ReferendumCount: StorageDescriptor<[], number, false>,


/**
 * Information concerning any given referendum.
 */
ReferendumInfoFor: StorageDescriptor<[Key: number], Anonymize<I92r5g26hdf8cj>, true>,


/**
 * The sorted list of referenda ready to be decided but not yet being decided, ordered by
 * conviction-weighted approvals.
 *
 * This should be empty if `DecidingCount` is less than `TrackInfo::max_deciding`.
 */
TrackQueue: StorageDescriptor<[Key: number], Anonymize<Iep4uo61810hfs>, false>,


/**
 * The number of referenda being decided currently.
 */
DecidingCount: StorageDescriptor<[Key: number], number, false>,


/**
 * The metadata is a general information concerning the referendum.
 * The `Hash` refers to the preimage of the `Preimages` provider which can be a JSON
 * dump or IPFS hash of a JSON file.
 *
 * Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)
 * large preimages.
 */
MetadataOf: StorageDescriptor<[Key: number], Binary, true>}, {

/**
 *See [`Pallet::submit`].
 */
submit: TxDescriptor<Anonymize<Ihqgnavvsqvf8>>,


/**
 *See [`Pallet::place_decision_deposit`].
 */
place_decision_deposit: TxDescriptor<Anonymize<I666bl2fqjkejo>>,


/**
 *See [`Pallet::refund_decision_deposit`].
 */
refund_decision_deposit: TxDescriptor<Anonymize<I666bl2fqjkejo>>,


/**
 *See [`Pallet::cancel`].
 */
cancel: TxDescriptor<Anonymize<I666bl2fqjkejo>>,


/**
 *See [`Pallet::kill`].
 */
kill: TxDescriptor<Anonymize<I666bl2fqjkejo>>,


/**
 *See [`Pallet::nudge_referendum`].
 */
nudge_referendum: TxDescriptor<Anonymize<I666bl2fqjkejo>>,


/**
 *See [`Pallet::one_fewer_deciding`].
 */
one_fewer_deciding: TxDescriptor<Anonymize<Icbio0e1f0034b>>,


/**
 *See [`Pallet::refund_submission_deposit`].
 */
refund_submission_deposit: TxDescriptor<Anonymize<I666bl2fqjkejo>>,


/**
 *See [`Pallet::set_metadata`].
 */
set_metadata: TxDescriptor<Anonymize<Ifml0k0sf0mu2g>>}, {

/**
 *A referendum has been submitted.
 */
Submitted: PlainDescriptor<Anonymize<Idhr9v8mlnjej>>,


/**
 *The decision deposit has been placed.
 */
DecisionDepositPlaced: PlainDescriptor<Anonymize<I62nte77gksm0f>>,


/**
 *The decision deposit has been refunded.
 */
DecisionDepositRefunded: PlainDescriptor<Anonymize<I62nte77gksm0f>>,


/**
 *A deposit has been slashaed.
 */
DepositSlashed: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>,


/**
 *A referendum has moved into the deciding phase.
 */
DecisionStarted: PlainDescriptor<Anonymize<Iuu6tledtt64n>>,


/**

 */
ConfirmStarted: PlainDescriptor<Anonymize<I666bl2fqjkejo>>,


/**

 */
ConfirmAborted: PlainDescriptor<Anonymize<I666bl2fqjkejo>>,


/**
 *A referendum has ended its confirmation phase and is ready for approval.
 */
Confirmed: PlainDescriptor<Anonymize<I27notaksll8qt>>,


/**
 *A referendum has been approved and its proposal has been scheduled.
 */
Approved: PlainDescriptor<Anonymize<I666bl2fqjkejo>>,


/**
 *A proposal has been rejected by referendum.
 */
Rejected: PlainDescriptor<Anonymize<I27notaksll8qt>>,


/**
 *A referendum has been timed out without being decided.
 */
TimedOut: PlainDescriptor<Anonymize<I27notaksll8qt>>,


/**
 *A referendum has been cancelled.
 */
Cancelled: PlainDescriptor<Anonymize<I27notaksll8qt>>,


/**
 *A referendum has been killed.
 */
Killed: PlainDescriptor<Anonymize<I27notaksll8qt>>,


/**
 *The submission deposit has been refunded.
 */
SubmissionDepositRefunded: PlainDescriptor<Anonymize<I62nte77gksm0f>>,


/**
 *Metadata for a referendum has been set.
 */
MetadataSet: PlainDescriptor<Anonymize<I50aq0q2l1cdkr>>,


/**
 *Metadata for a referendum has been cleared.
 */
MetadataCleared: PlainDescriptor<Anonymize<I50aq0q2l1cdkr>>}, {

/**
 *Referendum is not ongoing.
 */
NotOngoing: PlainDescriptor<undefined>,


/**
 *Referendum's decision deposit is already paid.
 */
HasDeposit: PlainDescriptor<undefined>,


/**
 *The track identifier given was invalid.
 */
BadTrack: PlainDescriptor<undefined>,


/**
 *There are already a full complement of referenda in progress for this track.
 */
Full: PlainDescriptor<undefined>,


/**
 *The queue of the track is empty.
 */
QueueEmpty: PlainDescriptor<undefined>,


/**
 *The referendum index provided is invalid in this context.
 */
BadReferendum: PlainDescriptor<undefined>,


/**
 *There was nothing to do in the advancement.
 */
NothingToDo: PlainDescriptor<undefined>,


/**
 *No track exists for the proposal origin.
 */
NoTrack: PlainDescriptor<undefined>,


/**
 *Any deposit cannot be refunded until after the decision is over.
 */
Unfinished: PlainDescriptor<undefined>,


/**
 *The deposit refunder is not the depositor.
 */
NoPermission: PlainDescriptor<undefined>,


/**
 *The deposit cannot be refunded since none was made.
 */
NoDeposit: PlainDescriptor<undefined>,


/**
 *The referendum status is invalid for this operation.
 */
BadStatus: PlainDescriptor<undefined>,


/**
 *The preimage does not exist.
 */
PreimageNotExist: PlainDescriptor<undefined>}, {

/**
 * The minimum amount to be used as a deposit for a public referendum proposal.
 */
SubmissionDeposit: PlainDescriptor<bigint>,


/**
 * Maximum size of the referendum queue for a single track.
 */
MaxQueued: PlainDescriptor<number>,


/**
 * The number of blocks after submission that a referendum must begin being decided by.
 * Once this passes, then anyone may cancel the referendum.
 */
UndecidingTimeout: PlainDescriptor<number>,


/**
 * Quantization level for the referendum wakeup scheduler. A higher number will result in
 * fewer storage reads/writes needed for smaller voters, but also result in delays to the
 * automatic referendum status changes. Explicit servicing instructions are unaffected.
 */
AlarmInterval: PlainDescriptor<number>,


/**
 * Information concerning the different referendum tracks.
 */
Tracks: PlainDescriptor<Anonymize<Ibafpkl9hhno69>>}],
FellowshipCore: [{

/**
 * The overall status of the system.
 */
Params: StorageDescriptor<[], Anonymize<Iec4blde7bc1ai>, false>,


/**
 * The status of a claimant.
 */
Member: StorageDescriptor<[Key: SS58String], Anonymize<Iq1c24rdj7v7p>, true>,


/**
 * Some evidence together with the desired outcome for which it was presented.
 */
MemberEvidence: StorageDescriptor<[Key: SS58String], Anonymize<I3vo1s729tgvdr>, true>}, {

/**
 *See [`Pallet::bump`].
 */
bump: TxDescriptor<Anonymize<I4cbvqmqadhrea>>,


/**
 *See [`Pallet::set_params`].
 */
set_params: TxDescriptor<Anonymize<I875hrun7fs7ik>>,


/**
 *See [`Pallet::set_active`].
 */
set_active: TxDescriptor<Anonymize<I27vrusv8rgd90>>,


/**
 *See [`Pallet::approve`].
 */
approve: TxDescriptor<Anonymize<Ic79d2eioda33s>>,


/**
 *See [`Pallet::induct`].
 */
induct: TxDescriptor<Anonymize<I4cbvqmqadhrea>>,


/**
 *See [`Pallet::promote`].
 */
promote: TxDescriptor<Anonymize<I5kpe8b2kedtqn>>,


/**
 *See [`Pallet::offboard`].
 */
offboard: TxDescriptor<Anonymize<I4cbvqmqadhrea>>,


/**
 *See [`Pallet::submit_evidence`].
 */
submit_evidence: TxDescriptor<Anonymize<Iegaehkdq4ofh>>,


/**
 *See [`Pallet::import`].
 */
import: TxDescriptor<undefined>}, {

/**
 *Parameters for the pallet have changed.
 */
ParamsChanged: PlainDescriptor<Anonymize<I875hrun7fs7ik>>,


/**
 *Member activity flag has been set.
 */
ActiveChanged: PlainDescriptor<Anonymize<I9j3uq1uk06oju>>,


/**
 *Member has begun being tracked in this pallet.
 */
Inducted: PlainDescriptor<Anonymize<I4cbvqmqadhrea>>,


/**
 *Member has been removed from being tracked in this pallet (i.e. because rank is now
 *zero).
 */
Offboarded: PlainDescriptor<Anonymize<I4cbvqmqadhrea>>,


/**
 *Member has been promoted to the given rank.
 */
Promoted: PlainDescriptor<Anonymize<I5kpe8b2kedtqn>>,


/**
 *Member has been demoted to the given (non-zero) rank.
 */
Demoted: PlainDescriptor<Anonymize<I5kpe8b2kedtqn>>,


/**
 *Member has been proven at their current rank, postponing auto-demotion.
 */
Proven: PlainDescriptor<Anonymize<Ic79d2eioda33s>>,


/**
 *Member has stated evidence of their efforts their request for rank.
 */
Requested: PlainDescriptor<Anonymize<Ien2galqubjs1f>>,


/**
 *Some submitted evidence was judged and removed. There may or may not have been a change
 *to the rank, but in any case, `last_proof` is reset.
 */
EvidenceJudged: PlainDescriptor<Anonymize<Id07di6ikhd4im>>,


/**
 *Pre-ranked account has been inducted at their current rank.
 */
Imported: PlainDescriptor<Anonymize<Im1pm2vf6llcn>>}, {

/**
 *Member's rank is too low.
 */
Unranked: PlainDescriptor<undefined>,


/**
 *Member's rank is not zero.
 */
Ranked: PlainDescriptor<undefined>,


/**
 *Member's rank is not as expected - generally means that the rank provided to the call
 *does not agree with the state of the system.
 */
UnexpectedRank: PlainDescriptor<undefined>,


/**
 *The given rank is invalid - this generally means it's not between 1 and `RANK_COUNT`.
 */
InvalidRank: PlainDescriptor<undefined>,


/**
 *The origin does not have enough permission to do this operation.
 */
NoPermission: PlainDescriptor<undefined>,


/**
 *No work needs to be done at present for this member.
 */
NothingDoing: PlainDescriptor<undefined>,


/**
 *The candidate has already been inducted. This should never happen since it would
 *require a candidate (rank 0) to already be tracked in the pallet.
 */
AlreadyInducted: PlainDescriptor<undefined>,


/**
 *The candidate has not been inducted, so cannot be offboarded from this pallet.
 */
NotTracked: PlainDescriptor<undefined>,


/**
 *Operation cannot be done yet since not enough time has passed.
 */
TooSoon: PlainDescriptor<undefined>}, {

/**
 * The maximum size in bytes submitted evidence is allowed to be.
 */
EvidenceSize: PlainDescriptor<number>}],
FellowshipSalary: [{

/**
 * The overall status of the system.
 */
Status: StorageDescriptor<[], Anonymize<Idg0lipm04tfnv>, true>,


/**
 * The status of a claimant.
 */
Claimant: StorageDescriptor<[Key: SS58String], Anonymize<Iesbdiip9d834l>, true>}, {

/**
 *See [`Pallet::init`].
 */
init: TxDescriptor<undefined>,


/**
 *See [`Pallet::bump`].
 */
bump: TxDescriptor<undefined>,


/**
 *See [`Pallet::induct`].
 */
induct: TxDescriptor<undefined>,


/**
 *See [`Pallet::register`].
 */
register: TxDescriptor<undefined>,


/**
 *See [`Pallet::payout`].
 */
payout: TxDescriptor<undefined>,


/**
 *See [`Pallet::payout_other`].
 */
payout_other: TxDescriptor<Anonymize<I8ligieds2efci>>,


/**
 *See [`Pallet::check_payment`].
 */
check_payment: TxDescriptor<undefined>}, {

/**
 *A member is inducted into the payroll.
 */
Inducted: PlainDescriptor<Anonymize<I4cbvqmqadhrea>>,


/**
 *A member registered for a payout.
 */
Registered: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>,


/**
 *A payment happened.
 */
Paid: PlainDescriptor<Anonymize<I4vcrhqupmee7p>>,


/**
 *The next cycle begins.
 */
CycleStarted: PlainDescriptor<Anonymize<I666bl2fqjkejo>>}, {

/**
 *The salary system has already been started.
 */
AlreadyStarted: PlainDescriptor<undefined>,


/**
 *The account is not a ranked member.
 */
NotMember: PlainDescriptor<undefined>,


/**
 *The account is already inducted.
 */
AlreadyInducted: PlainDescriptor<undefined>,


/**

 */
NotInducted: PlainDescriptor<undefined>,


/**
 *The member does not have a current valid claim.
 */
NoClaim: PlainDescriptor<undefined>,


/**
 *The member's claim is zero.
 */
ClaimZero: PlainDescriptor<undefined>,


/**
 *Current cycle's registration period is over.
 */
TooLate: PlainDescriptor<undefined>,


/**
 *Current cycle's payment period is not yet begun.
 */
TooEarly: PlainDescriptor<undefined>,


/**
 *Cycle is not yet over.
 */
NotYet: PlainDescriptor<undefined>,


/**
 *The payout cycles have not yet started.
 */
NotStarted: PlainDescriptor<undefined>,


/**
 *There is no budget left for the payout.
 */
Bankrupt: PlainDescriptor<undefined>,


/**
 *There was some issue with the mechanism of payment.
 */
PayError: PlainDescriptor<undefined>,


/**
 *The payment has neither failed nor succeeded yet.
 */
Inconclusive: PlainDescriptor<undefined>,


/**
 *The cycle is after that in which the payment was made.
 */
NotCurrent: PlainDescriptor<undefined>}, {

/**
 * The number of blocks within a cycle which accounts have to register their intent to
 * claim.
 *
 * The number of blocks between sequential payout cycles is the sum of this and
 * `PayoutPeriod`.
 */
RegistrationPeriod: PlainDescriptor<number>,


/**
 * The number of blocks within a cycle which accounts have to claim the payout.
 *
 * The number of blocks between sequential payout cycles is the sum of this and
 * `RegistrationPeriod`.
 */
PayoutPeriod: PlainDescriptor<number>,


/**
 * The total budget per cycle.
 *
 * This may change over the course of a cycle without any problem.
 */
Budget: PlainDescriptor<bigint>}],
FellowshipTreasury: [{

/**
 * Number of proposals that have been made.
 */
ProposalCount: StorageDescriptor<[], number, false>,


/**
 * Proposals that have been made.
 */
Proposals: StorageDescriptor<[Key: number], Anonymize<Iegmj7n48sc3am>, true>,


/**
 * The amount which has been reported as inactive to Currency.
 */
Deactivated: StorageDescriptor<[], bigint, false>,


/**
 * Proposal indices that have been approved but not yet awarded.
 */
Approvals: StorageDescriptor<[], Anonymize<Icgljjb6j82uhn>, false>,


/**
 * The count of spends that have been made.
 */
SpendCount: StorageDescriptor<[], number, false>,


/**
 * Spends that have been approved and being processed.
 */
Spends: StorageDescriptor<[Key: number], Anonymize<Ie05qfg5feue1l>, true>}, {

/**
 *See [`Pallet::propose_spend`].
 */
propose_spend: TxDescriptor<Anonymize<I5c883qnnqciv8>>,


/**
 *See [`Pallet::reject_proposal`].
 */
reject_proposal: TxDescriptor<Anonymize<Icm9m0qeemu66d>>,


/**
 *See [`Pallet::approve_proposal`].
 */
approve_proposal: TxDescriptor<Anonymize<Icm9m0qeemu66d>>,


/**
 *See [`Pallet::spend_local`].
 */
spend_local: TxDescriptor<Anonymize<Idpn74s0i9cdvp>>,


/**
 *See [`Pallet::remove_approval`].
 */
remove_approval: TxDescriptor<Anonymize<Icm9m0qeemu66d>>,


/**
 *See [`Pallet::spend`].
 */
spend: TxDescriptor<Anonymize<I815t7ta25e227>>,


/**
 *See [`Pallet::payout`].
 */
payout: TxDescriptor<Anonymize<I666bl2fqjkejo>>,


/**
 *See [`Pallet::check_status`].
 */
check_status: TxDescriptor<Anonymize<I666bl2fqjkejo>>,


/**
 *See [`Pallet::void_spend`].
 */
void_spend: TxDescriptor<Anonymize<I666bl2fqjkejo>>}, {

/**
 *New proposal.
 */
Proposed: PlainDescriptor<Anonymize<I44hc4lgsn4o1j>>,


/**
 *We have ended a spend period and will now allocate funds.
 */
Spending: PlainDescriptor<Anonymize<I8iksqi3eani0a>>,


/**
 *Some funds have been allocated.
 */
Awarded: PlainDescriptor<Anonymize<I16enopmju1p0q>>,


/**
 *A proposal was rejected; funds were slashed.
 */
Rejected: PlainDescriptor<Anonymize<Ifgqhle2413de7>>,


/**
 *Some of our funds have been burnt.
 */
Burnt: PlainDescriptor<Anonymize<I43kq8qudg7pq9>>,


/**
 *Spending has finished; this is the amount that rolls over until next spend.
 */
Rollover: PlainDescriptor<Anonymize<I76riseemre533>>,


/**
 *Some funds have been deposited.
 */
Deposit: PlainDescriptor<Anonymize<Ie5v6njpckr05b>>,


/**
 *A new spend proposal has been approved.
 */
SpendApproved: PlainDescriptor<Anonymize<I38bmcrmh852rk>>,


/**
 *The inactive funds of the pallet have been updated.
 */
UpdatedInactive: PlainDescriptor<Anonymize<I4hcillge8de5f>>,


/**
 *A new asset spend proposal has been approved.
 */
AssetSpendApproved: PlainDescriptor<Anonymize<Iblqf6usek6oij>>,


/**
 *An approved spend was voided.
 */
AssetSpendVoided: PlainDescriptor<Anonymize<I666bl2fqjkejo>>,


/**
 *A payment happened.
 */
Paid: PlainDescriptor<Anonymize<Iek7v4hrgnq6iv>>,


/**
 *A payment failed and can be retried.
 */
PaymentFailed: PlainDescriptor<Anonymize<Iek7v4hrgnq6iv>>,


/**
 *A spend was processed and removed from the storage. It might have been successfully
 *paid or it may have expired.
 */
SpendProcessed: PlainDescriptor<Anonymize<I666bl2fqjkejo>>}, {

/**
 *Proposer's balance is too low.
 */
InsufficientProposersBalance: PlainDescriptor<undefined>,


/**
 *No proposal, bounty or spend at that index.
 */
InvalidIndex: PlainDescriptor<undefined>,


/**
 *Too many approvals in the queue.
 */
TooManyApprovals: PlainDescriptor<undefined>,


/**
 *The spend origin is valid but the amount it is allowed to spend is lower than the
 *amount to be spent.
 */
InsufficientPermission: PlainDescriptor<undefined>,


/**
 *Proposal has not been approved.
 */
ProposalNotApproved: PlainDescriptor<undefined>,


/**
 *The balance of the asset kind is not convertible to the balance of the native asset.
 */
FailedToConvertBalance: PlainDescriptor<undefined>,


/**
 *The spend has expired and cannot be claimed.
 */
SpendExpired: PlainDescriptor<undefined>,


/**
 *The spend is not yet eligible for payout.
 */
EarlyPayout: PlainDescriptor<undefined>,


/**
 *The payment has already been attempted.
 */
AlreadyAttempted: PlainDescriptor<undefined>,


/**
 *There was some issue with the mechanism of payment.
 */
PayoutError: PlainDescriptor<undefined>,


/**
 *The payout was not yet attempted/claimed.
 */
NotAttempted: PlainDescriptor<undefined>,


/**
 *The payment has neither failed nor succeeded yet.
 */
Inconclusive: PlainDescriptor<undefined>}, {

/**
 * Fraction of a proposal's value that should be bonded in order to place the proposal.
 * An accepted proposal gets these back. A rejected proposal does not.
 */
ProposalBond: PlainDescriptor<number>,


/**
 * Minimum amount of funds that should be placed in a deposit for making a proposal.
 */
ProposalBondMinimum: PlainDescriptor<bigint>,


/**
 * Maximum amount of funds that should be placed in a deposit for making a proposal.
 */
ProposalBondMaximum: PlainDescriptor<Anonymize<I35p85j063s0il>>,


/**
 * Period between successive spends.
 */
SpendPeriod: PlainDescriptor<number>,


/**
 * Percentage of spare funds (if any) that are burnt per spend period.
 */
Burn: PlainDescriptor<number>,


/**
 * The treasury's pallet id, used for deriving its sovereign account ID.
 */
PalletId: PlainDescriptor<Binary>,


/**
 * The maximum number of approvals that can wait in the spending queue.
 *
 * NOTE: This parameter is also used within the Bounties Pallet extension if enabled.
 */
MaxApprovals: PlainDescriptor<number>,


/**
 * The period during which an approved treasury spend has to be claimed.
 */
PayoutPeriod: PlainDescriptor<number>}]};
const pallets: IPallets = {System: [{Account: stg_System_Account,
ExtrinsicCount: stg_System_ExtrinsicCount,
BlockWeight: stg_System_BlockWeight,
AllExtrinsicsLen: stg_System_AllExtrinsicsLen,
BlockHash: stg_System_BlockHash,
ExtrinsicData: stg_System_ExtrinsicData,
Number: stg_System_Number,
ParentHash: stg_System_ParentHash,
Digest: stg_System_Digest,
Events: stg_System_Events,
EventCount: stg_System_EventCount,
EventTopics: stg_System_EventTopics,
LastRuntimeUpgrade: stg_System_LastRuntimeUpgrade,
UpgradedToU32RefCount: stg_System_UpgradedToU32RefCount,
UpgradedToTripleRefCount: stg_System_UpgradedToTripleRefCount,
ExecutionPhase: stg_System_ExecutionPhase}, {remark: call_System_remark,
set_heap_pages: call_System_set_heap_pages,
set_code: call_System_set_code,
set_code_without_checks: call_System_set_code_without_checks,
set_storage: call_System_set_storage,
kill_storage: call_System_kill_storage,
kill_prefix: call_System_kill_prefix,
remark_with_event: call_System_remark_with_event}, {ExtrinsicSuccess: evt_System_ExtrinsicSuccess,
ExtrinsicFailed: evt_System_ExtrinsicFailed,
CodeUpdated: evt_System_CodeUpdated,
NewAccount: evt_System_NewAccount,
KilledAccount: evt_System_KilledAccount,
Remarked: evt_System_Remarked}, {InvalidSpecName: err_System_InvalidSpecName,
SpecVersionNeedsToIncrease: err_System_SpecVersionNeedsToIncrease,
FailedToExtractRuntimeVersion: err_System_FailedToExtractRuntimeVersion,
NonDefaultComposite: err_System_NonDefaultComposite,
NonZeroRefCount: err_System_NonZeroRefCount,
CallFiltered: err_System_CallFiltered}, {BlockWeights: const_System_BlockWeights,
BlockLength: const_System_BlockLength,
BlockHashCount: const_System_BlockHashCount,
DbWeight: const_System_DbWeight,
Version: const_System_Version,
SS58Prefix: const_System_SS58Prefix}],
ParachainSystem: [{UnincludedSegment: stg_ParachainSystem_UnincludedSegment,
AggregatedUnincludedSegment: stg_ParachainSystem_AggregatedUnincludedSegment,
PendingValidationCode: stg_ParachainSystem_PendingValidationCode,
NewValidationCode: stg_ParachainSystem_NewValidationCode,
ValidationData: stg_ParachainSystem_ValidationData,
DidSetValidationCode: stg_ParachainSystem_DidSetValidationCode,
LastRelayChainBlockNumber: stg_ParachainSystem_LastRelayChainBlockNumber,
UpgradeRestrictionSignal: stg_ParachainSystem_UpgradeRestrictionSignal,
UpgradeGoAhead: stg_ParachainSystem_UpgradeGoAhead,
RelayStateProof: stg_ParachainSystem_RelayStateProof,
RelevantMessagingState: stg_ParachainSystem_RelevantMessagingState,
HostConfiguration: stg_ParachainSystem_HostConfiguration,
LastDmqMqcHead: stg_ParachainSystem_LastDmqMqcHead,
LastHrmpMqcHeads: stg_ParachainSystem_LastHrmpMqcHeads,
ProcessedDownwardMessages: stg_ParachainSystem_ProcessedDownwardMessages,
HrmpWatermark: stg_ParachainSystem_HrmpWatermark,
HrmpOutboundMessages: stg_ParachainSystem_HrmpOutboundMessages,
UpwardMessages: stg_ParachainSystem_UpwardMessages,
PendingUpwardMessages: stg_ParachainSystem_PendingUpwardMessages,
UpwardDeliveryFeeFactor: stg_ParachainSystem_UpwardDeliveryFeeFactor,
AnnouncedHrmpMessagesPerCandidate: stg_ParachainSystem_AnnouncedHrmpMessagesPerCandidate,
ReservedXcmpWeightOverride: stg_ParachainSystem_ReservedXcmpWeightOverride,
ReservedDmpWeightOverride: stg_ParachainSystem_ReservedDmpWeightOverride,
AuthorizedUpgrade: stg_ParachainSystem_AuthorizedUpgrade,
CustomValidationHeadData: stg_ParachainSystem_CustomValidationHeadData}, {set_validation_data: call_ParachainSystem_set_validation_data,
sudo_send_upward_message: call_ParachainSystem_sudo_send_upward_message,
authorize_upgrade: call_ParachainSystem_authorize_upgrade,
enact_authorized_upgrade: call_ParachainSystem_enact_authorized_upgrade}, {ValidationFunctionStored: evt_ParachainSystem_ValidationFunctionStored,
ValidationFunctionApplied: evt_ParachainSystem_ValidationFunctionApplied,
ValidationFunctionDiscarded: evt_ParachainSystem_ValidationFunctionDiscarded,
UpgradeAuthorized: evt_ParachainSystem_UpgradeAuthorized,
DownwardMessagesReceived: evt_ParachainSystem_DownwardMessagesReceived,
DownwardMessagesProcessed: evt_ParachainSystem_DownwardMessagesProcessed,
UpwardMessageSent: evt_ParachainSystem_UpwardMessageSent}, {OverlappingUpgrades: err_ParachainSystem_OverlappingUpgrades,
ProhibitedByPolkadot: err_ParachainSystem_ProhibitedByPolkadot,
TooBig: err_ParachainSystem_TooBig,
ValidationDataNotAvailable: err_ParachainSystem_ValidationDataNotAvailable,
HostConfigurationNotAvailable: err_ParachainSystem_HostConfigurationNotAvailable,
NotScheduled: err_ParachainSystem_NotScheduled,
NothingAuthorized: err_ParachainSystem_NothingAuthorized,
Unauthorized: err_ParachainSystem_Unauthorized}, {}],
Timestamp: [{Now: stg_Timestamp_Now,
DidUpdate: stg_Timestamp_DidUpdate}, {set: call_Timestamp_set}, {}, {}, {MinimumPeriod: const_Timestamp_MinimumPeriod}],
ParachainInfo: [{ParachainId: stg_ParachainInfo_ParachainId}, {}, {}, {}, {}],
Balances: [{TotalIssuance: stg_Balances_TotalIssuance,
InactiveIssuance: stg_Balances_InactiveIssuance,
Account: stg_Balances_Account,
Locks: stg_Balances_Locks,
Reserves: stg_Balances_Reserves,
Holds: stg_Balances_Holds,
Freezes: stg_Balances_Freezes}, {transfer_allow_death: call_Balances_transfer_allow_death,
force_transfer: call_Balances_force_transfer,
transfer_keep_alive: call_Balances_transfer_keep_alive,
transfer_all: call_Balances_transfer_all,
force_unreserve: call_Balances_force_unreserve,
upgrade_accounts: call_Balances_upgrade_accounts,
force_set_balance: call_Balances_force_set_balance}, {Endowed: evt_Balances_Endowed,
DustLost: evt_Balances_DustLost,
Transfer: evt_Balances_Transfer,
BalanceSet: evt_Balances_BalanceSet,
Reserved: evt_Balances_Reserved,
Unreserved: evt_Balances_Unreserved,
ReserveRepatriated: evt_Balances_ReserveRepatriated,
Deposit: evt_Balances_Deposit,
Withdraw: evt_Balances_Withdraw,
Slashed: evt_Balances_Slashed,
Minted: evt_Balances_Minted,
Burned: evt_Balances_Burned,
Suspended: evt_Balances_Suspended,
Restored: evt_Balances_Restored,
Upgraded: evt_Balances_Upgraded,
Issued: evt_Balances_Issued,
Rescinded: evt_Balances_Rescinded,
Locked: evt_Balances_Locked,
Unlocked: evt_Balances_Unlocked,
Frozen: evt_Balances_Frozen,
Thawed: evt_Balances_Thawed}, {VestingBalance: err_Balances_VestingBalance,
LiquidityRestrictions: err_Balances_LiquidityRestrictions,
InsufficientBalance: err_Balances_InsufficientBalance,
ExistentialDeposit: err_Balances_ExistentialDeposit,
Expendability: err_Balances_Expendability,
ExistingVestingSchedule: err_Balances_ExistingVestingSchedule,
DeadAccount: err_Balances_DeadAccount,
TooManyReserves: err_Balances_TooManyReserves,
TooManyHolds: err_Balances_TooManyHolds,
TooManyFreezes: err_Balances_TooManyFreezes}, {ExistentialDeposit: const_Balances_ExistentialDeposit,
MaxLocks: const_Balances_MaxLocks,
MaxReserves: const_Balances_MaxReserves,
MaxHolds: const_Balances_MaxHolds,
MaxFreezes: const_Balances_MaxFreezes}],
TransactionPayment: [{NextFeeMultiplier: stg_TransactionPayment_NextFeeMultiplier,
StorageVersion: stg_TransactionPayment_StorageVersion}, {}, {TransactionFeePaid: evt_TransactionPayment_TransactionFeePaid}, {}, {OperationalFeeMultiplier: const_TransactionPayment_OperationalFeeMultiplier}],
Authorship: [{Author: stg_Authorship_Author}, {}, {}, {}, {}],
CollatorSelection: [{Invulnerables: stg_CollatorSelection_Invulnerables,
Candidates: stg_CollatorSelection_Candidates,
LastAuthoredBlock: stg_CollatorSelection_LastAuthoredBlock,
DesiredCandidates: stg_CollatorSelection_DesiredCandidates,
CandidacyBond: stg_CollatorSelection_CandidacyBond}, {set_invulnerables: call_CollatorSelection_set_invulnerables,
set_desired_candidates: call_CollatorSelection_set_desired_candidates,
set_candidacy_bond: call_CollatorSelection_set_candidacy_bond,
register_as_candidate: call_CollatorSelection_register_as_candidate,
leave_intent: call_CollatorSelection_leave_intent,
add_invulnerable: call_CollatorSelection_add_invulnerable,
remove_invulnerable: call_CollatorSelection_remove_invulnerable}, {NewInvulnerables: evt_CollatorSelection_NewInvulnerables,
InvulnerableAdded: evt_CollatorSelection_InvulnerableAdded,
InvulnerableRemoved: evt_CollatorSelection_InvulnerableRemoved,
NewDesiredCandidates: evt_CollatorSelection_NewDesiredCandidates,
NewCandidacyBond: evt_CollatorSelection_NewCandidacyBond,
CandidateAdded: evt_CollatorSelection_CandidateAdded,
CandidateRemoved: evt_CollatorSelection_CandidateRemoved,
InvalidInvulnerableSkipped: evt_CollatorSelection_InvalidInvulnerableSkipped}, {TooManyCandidates: err_CollatorSelection_TooManyCandidates,
TooFewEligibleCollators: err_CollatorSelection_TooFewEligibleCollators,
AlreadyCandidate: err_CollatorSelection_AlreadyCandidate,
NotCandidate: err_CollatorSelection_NotCandidate,
TooManyInvulnerables: err_CollatorSelection_TooManyInvulnerables,
AlreadyInvulnerable: err_CollatorSelection_AlreadyInvulnerable,
NotInvulnerable: err_CollatorSelection_NotInvulnerable,
NoAssociatedValidatorId: err_CollatorSelection_NoAssociatedValidatorId,
ValidatorNotRegistered: err_CollatorSelection_ValidatorNotRegistered}, {}],
Session: [{Validators: stg_Session_Validators,
CurrentIndex: stg_Session_CurrentIndex,
QueuedChanged: stg_Session_QueuedChanged,
QueuedKeys: stg_Session_QueuedKeys,
DisabledValidators: stg_Session_DisabledValidators,
NextKeys: stg_Session_NextKeys,
KeyOwner: stg_Session_KeyOwner}, {set_keys: call_Session_set_keys,
purge_keys: call_Session_purge_keys}, {NewSession: evt_Session_NewSession}, {InvalidProof: err_Session_InvalidProof,
NoAssociatedValidatorId: err_Session_NoAssociatedValidatorId,
DuplicatedKey: err_Session_DuplicatedKey,
NoKeys: err_Session_NoKeys,
NoAccount: err_Session_NoAccount}, {}],
Aura: [{Authorities: stg_Aura_Authorities,
CurrentSlot: stg_Aura_CurrentSlot}, {}, {}, {}, {}],
AuraExt: [{Authorities: stg_AuraExt_Authorities,
SlotInfo: stg_AuraExt_SlotInfo}, {}, {}, {}, {}],
XcmpQueue: [{InboundXcmpStatus: stg_XcmpQueue_InboundXcmpStatus,
InboundXcmpMessages: stg_XcmpQueue_InboundXcmpMessages,
OutboundXcmpStatus: stg_XcmpQueue_OutboundXcmpStatus,
OutboundXcmpMessages: stg_XcmpQueue_OutboundXcmpMessages,
SignalMessages: stg_XcmpQueue_SignalMessages,
QueueConfig: stg_XcmpQueue_QueueConfig,
Overweight: stg_XcmpQueue_Overweight,
CounterForOverweight: stg_XcmpQueue_CounterForOverweight,
OverweightCount: stg_XcmpQueue_OverweightCount,
QueueSuspended: stg_XcmpQueue_QueueSuspended,
DeliveryFeeFactor: stg_XcmpQueue_DeliveryFeeFactor}, {service_overweight: call_XcmpQueue_service_overweight,
suspend_xcm_execution: call_XcmpQueue_suspend_xcm_execution,
resume_xcm_execution: call_XcmpQueue_resume_xcm_execution,
update_suspend_threshold: call_XcmpQueue_update_suspend_threshold,
update_drop_threshold: call_XcmpQueue_update_drop_threshold,
update_resume_threshold: call_XcmpQueue_update_resume_threshold,
update_threshold_weight: call_XcmpQueue_update_threshold_weight,
update_weight_restrict_decay: call_XcmpQueue_update_weight_restrict_decay,
update_xcmp_max_individual_weight: call_XcmpQueue_update_xcmp_max_individual_weight}, {Success: evt_XcmpQueue_Success,
Fail: evt_XcmpQueue_Fail,
BadVersion: evt_XcmpQueue_BadVersion,
BadFormat: evt_XcmpQueue_BadFormat,
XcmpMessageSent: evt_XcmpQueue_XcmpMessageSent,
OverweightEnqueued: evt_XcmpQueue_OverweightEnqueued,
OverweightServiced: evt_XcmpQueue_OverweightServiced}, {FailedToSend: err_XcmpQueue_FailedToSend,
BadXcmOrigin: err_XcmpQueue_BadXcmOrigin,
BadXcm: err_XcmpQueue_BadXcm,
BadOverweightIndex: err_XcmpQueue_BadOverweightIndex,
WeightOverLimit: err_XcmpQueue_WeightOverLimit}, {}],
PolkadotXcm: [{QueryCounter: stg_PolkadotXcm_QueryCounter,
Queries: stg_PolkadotXcm_Queries,
AssetTraps: stg_PolkadotXcm_AssetTraps,
SafeXcmVersion: stg_PolkadotXcm_SafeXcmVersion,
SupportedVersion: stg_PolkadotXcm_SupportedVersion,
VersionNotifiers: stg_PolkadotXcm_VersionNotifiers,
VersionNotifyTargets: stg_PolkadotXcm_VersionNotifyTargets,
VersionDiscoveryQueue: stg_PolkadotXcm_VersionDiscoveryQueue,
CurrentMigration: stg_PolkadotXcm_CurrentMigration,
RemoteLockedFungibles: stg_PolkadotXcm_RemoteLockedFungibles,
LockedFungibles: stg_PolkadotXcm_LockedFungibles,
XcmExecutionSuspended: stg_PolkadotXcm_XcmExecutionSuspended}, {send: call_PolkadotXcm_send,
teleport_assets: call_PolkadotXcm_teleport_assets,
reserve_transfer_assets: call_PolkadotXcm_reserve_transfer_assets,
execute: call_PolkadotXcm_execute,
force_xcm_version: call_PolkadotXcm_force_xcm_version,
force_default_xcm_version: call_PolkadotXcm_force_default_xcm_version,
force_subscribe_version_notify: call_PolkadotXcm_force_subscribe_version_notify,
force_unsubscribe_version_notify: call_PolkadotXcm_force_unsubscribe_version_notify,
limited_reserve_transfer_assets: call_PolkadotXcm_limited_reserve_transfer_assets,
limited_teleport_assets: call_PolkadotXcm_limited_teleport_assets,
force_suspension: call_PolkadotXcm_force_suspension}, {Attempted: evt_PolkadotXcm_Attempted,
Sent: evt_PolkadotXcm_Sent,
UnexpectedResponse: evt_PolkadotXcm_UnexpectedResponse,
ResponseReady: evt_PolkadotXcm_ResponseReady,
Notified: evt_PolkadotXcm_Notified,
NotifyOverweight: evt_PolkadotXcm_NotifyOverweight,
NotifyDispatchError: evt_PolkadotXcm_NotifyDispatchError,
NotifyDecodeFailed: evt_PolkadotXcm_NotifyDecodeFailed,
InvalidResponder: evt_PolkadotXcm_InvalidResponder,
InvalidResponderVersion: evt_PolkadotXcm_InvalidResponderVersion,
ResponseTaken: evt_PolkadotXcm_ResponseTaken,
AssetsTrapped: evt_PolkadotXcm_AssetsTrapped,
VersionChangeNotified: evt_PolkadotXcm_VersionChangeNotified,
SupportedVersionChanged: evt_PolkadotXcm_SupportedVersionChanged,
NotifyTargetSendFail: evt_PolkadotXcm_NotifyTargetSendFail,
NotifyTargetMigrationFail: evt_PolkadotXcm_NotifyTargetMigrationFail,
InvalidQuerierVersion: evt_PolkadotXcm_InvalidQuerierVersion,
InvalidQuerier: evt_PolkadotXcm_InvalidQuerier,
VersionNotifyStarted: evt_PolkadotXcm_VersionNotifyStarted,
VersionNotifyRequested: evt_PolkadotXcm_VersionNotifyRequested,
VersionNotifyUnrequested: evt_PolkadotXcm_VersionNotifyUnrequested,
FeesPaid: evt_PolkadotXcm_FeesPaid,
AssetsClaimed: evt_PolkadotXcm_AssetsClaimed}, {Unreachable: err_PolkadotXcm_Unreachable,
SendFailure: err_PolkadotXcm_SendFailure,
Filtered: err_PolkadotXcm_Filtered,
UnweighableMessage: err_PolkadotXcm_UnweighableMessage,
DestinationNotInvertible: err_PolkadotXcm_DestinationNotInvertible,
Empty: err_PolkadotXcm_Empty,
CannotReanchor: err_PolkadotXcm_CannotReanchor,
TooManyAssets: err_PolkadotXcm_TooManyAssets,
InvalidOrigin: err_PolkadotXcm_InvalidOrigin,
BadVersion: err_PolkadotXcm_BadVersion,
BadLocation: err_PolkadotXcm_BadLocation,
NoSubscription: err_PolkadotXcm_NoSubscription,
AlreadySubscribed: err_PolkadotXcm_AlreadySubscribed,
InvalidAsset: err_PolkadotXcm_InvalidAsset,
LowBalance: err_PolkadotXcm_LowBalance,
TooManyLocks: err_PolkadotXcm_TooManyLocks,
AccountNotSovereign: err_PolkadotXcm_AccountNotSovereign,
FeesNotMet: err_PolkadotXcm_FeesNotMet,
LockNotFound: err_PolkadotXcm_LockNotFound,
InUse: err_PolkadotXcm_InUse}, {}],
CumulusXcm: [{}, {}, {InvalidFormat: evt_CumulusXcm_InvalidFormat,
UnsupportedVersion: evt_CumulusXcm_UnsupportedVersion,
ExecutedDownward: evt_CumulusXcm_ExecutedDownward}, {}, {}],
DmpQueue: [{Configuration: stg_DmpQueue_Configuration,
PageIndex: stg_DmpQueue_PageIndex,
Pages: stg_DmpQueue_Pages,
Overweight: stg_DmpQueue_Overweight,
CounterForOverweight: stg_DmpQueue_CounterForOverweight}, {service_overweight: call_DmpQueue_service_overweight}, {InvalidFormat: evt_DmpQueue_InvalidFormat,
UnsupportedVersion: evt_DmpQueue_UnsupportedVersion,
ExecutedDownward: evt_DmpQueue_ExecutedDownward,
WeightExhausted: evt_DmpQueue_WeightExhausted,
OverweightEnqueued: evt_DmpQueue_OverweightEnqueued,
OverweightServiced: evt_DmpQueue_OverweightServiced,
MaxMessagesExhausted: evt_DmpQueue_MaxMessagesExhausted}, {Unknown: err_DmpQueue_Unknown,
OverLimit: err_DmpQueue_OverLimit}, {}],
Utility: [{}, {batch: call_Utility_batch,
as_derivative: call_Utility_as_derivative,
batch_all: call_Utility_batch_all,
dispatch_as: call_Utility_dispatch_as,
force_batch: call_Utility_force_batch,
with_weight: call_Utility_with_weight}, {BatchInterrupted: evt_Utility_BatchInterrupted,
BatchCompleted: evt_Utility_BatchCompleted,
BatchCompletedWithErrors: evt_Utility_BatchCompletedWithErrors,
ItemCompleted: evt_Utility_ItemCompleted,
ItemFailed: evt_Utility_ItemFailed,
DispatchedAs: evt_Utility_DispatchedAs}, {TooManyCalls: err_Utility_TooManyCalls}, {batched_calls_limit: const_Utility_batched_calls_limit}],
Multisig: [{Multisigs: stg_Multisig_Multisigs}, {as_multi_threshold_1: call_Multisig_as_multi_threshold_1,
as_multi: call_Multisig_as_multi,
approve_as_multi: call_Multisig_approve_as_multi,
cancel_as_multi: call_Multisig_cancel_as_multi}, {NewMultisig: evt_Multisig_NewMultisig,
MultisigApproval: evt_Multisig_MultisigApproval,
MultisigExecuted: evt_Multisig_MultisigExecuted,
MultisigCancelled: evt_Multisig_MultisigCancelled}, {MinimumThreshold: err_Multisig_MinimumThreshold,
AlreadyApproved: err_Multisig_AlreadyApproved,
NoApprovalsNeeded: err_Multisig_NoApprovalsNeeded,
TooFewSignatories: err_Multisig_TooFewSignatories,
TooManySignatories: err_Multisig_TooManySignatories,
SignatoriesOutOfOrder: err_Multisig_SignatoriesOutOfOrder,
SenderInSignatories: err_Multisig_SenderInSignatories,
NotFound: err_Multisig_NotFound,
NotOwner: err_Multisig_NotOwner,
NoTimepoint: err_Multisig_NoTimepoint,
WrongTimepoint: err_Multisig_WrongTimepoint,
UnexpectedTimepoint: err_Multisig_UnexpectedTimepoint,
MaxWeightTooLow: err_Multisig_MaxWeightTooLow,
AlreadyStored: err_Multisig_AlreadyStored}, {DepositBase: const_Multisig_DepositBase,
DepositFactor: const_Multisig_DepositFactor,
MaxSignatories: const_Multisig_MaxSignatories}],
Proxy: [{Proxies: stg_Proxy_Proxies,
Announcements: stg_Proxy_Announcements}, {proxy: call_Proxy_proxy,
add_proxy: call_Proxy_add_proxy,
remove_proxy: call_Proxy_remove_proxy,
remove_proxies: call_Proxy_remove_proxies,
create_pure: call_Proxy_create_pure,
kill_pure: call_Proxy_kill_pure,
announce: call_Proxy_announce,
remove_announcement: call_Proxy_remove_announcement,
reject_announcement: call_Proxy_reject_announcement,
proxy_announced: call_Proxy_proxy_announced}, {ProxyExecuted: evt_Proxy_ProxyExecuted,
PureCreated: evt_Proxy_PureCreated,
Announced: evt_Proxy_Announced,
ProxyAdded: evt_Proxy_ProxyAdded,
ProxyRemoved: evt_Proxy_ProxyRemoved}, {TooMany: err_Proxy_TooMany,
NotFound: err_Proxy_NotFound,
NotProxy: err_Proxy_NotProxy,
Unproxyable: err_Proxy_Unproxyable,
Duplicate: err_Proxy_Duplicate,
NoPermission: err_Proxy_NoPermission,
Unannounced: err_Proxy_Unannounced,
NoSelfProxy: err_Proxy_NoSelfProxy}, {ProxyDepositBase: const_Proxy_ProxyDepositBase,
ProxyDepositFactor: const_Proxy_ProxyDepositFactor,
MaxProxies: const_Proxy_MaxProxies,
MaxPending: const_Proxy_MaxPending,
AnnouncementDepositBase: const_Proxy_AnnouncementDepositBase,
AnnouncementDepositFactor: const_Proxy_AnnouncementDepositFactor}],
Preimage: [{StatusFor: stg_Preimage_StatusFor,
RequestStatusFor: stg_Preimage_RequestStatusFor,
PreimageFor: stg_Preimage_PreimageFor}, {note_preimage: call_Preimage_note_preimage,
unnote_preimage: call_Preimage_unnote_preimage,
request_preimage: call_Preimage_request_preimage,
unrequest_preimage: call_Preimage_unrequest_preimage,
ensure_updated: call_Preimage_ensure_updated}, {Noted: evt_Preimage_Noted,
Requested: evt_Preimage_Requested,
Cleared: evt_Preimage_Cleared}, {TooBig: err_Preimage_TooBig,
AlreadyNoted: err_Preimage_AlreadyNoted,
NotAuthorized: err_Preimage_NotAuthorized,
NotNoted: err_Preimage_NotNoted,
Requested: err_Preimage_Requested,
NotRequested: err_Preimage_NotRequested,
TooMany: err_Preimage_TooMany,
TooFew: err_Preimage_TooFew}, {}],
Scheduler: [{IncompleteSince: stg_Scheduler_IncompleteSince,
Agenda: stg_Scheduler_Agenda,
Lookup: stg_Scheduler_Lookup}, {schedule: call_Scheduler_schedule,
cancel: call_Scheduler_cancel,
schedule_named: call_Scheduler_schedule_named,
cancel_named: call_Scheduler_cancel_named,
schedule_after: call_Scheduler_schedule_after,
schedule_named_after: call_Scheduler_schedule_named_after}, {Scheduled: evt_Scheduler_Scheduled,
Canceled: evt_Scheduler_Canceled,
Dispatched: evt_Scheduler_Dispatched,
CallUnavailable: evt_Scheduler_CallUnavailable,
PeriodicFailed: evt_Scheduler_PeriodicFailed,
PermanentlyOverweight: evt_Scheduler_PermanentlyOverweight}, {FailedToSchedule: err_Scheduler_FailedToSchedule,
NotFound: err_Scheduler_NotFound,
TargetBlockNumberInPast: err_Scheduler_TargetBlockNumberInPast,
RescheduleNoChange: err_Scheduler_RescheduleNoChange,
Named: err_Scheduler_Named}, {MaximumWeight: const_Scheduler_MaximumWeight,
MaxScheduledPerBlock: const_Scheduler_MaxScheduledPerBlock}],
AssetRate: [{ConversionRateToNative: stg_AssetRate_ConversionRateToNative}, {create: call_AssetRate_create,
update: call_AssetRate_update,
remove: call_AssetRate_remove}, {AssetRateCreated: evt_AssetRate_AssetRateCreated,
AssetRateRemoved: evt_AssetRate_AssetRateRemoved,
AssetRateUpdated: evt_AssetRate_AssetRateUpdated}, {UnknownAssetKind: err_AssetRate_UnknownAssetKind,
AlreadyExists: err_AssetRate_AlreadyExists}, {}],
Alliance: [{Rule: stg_Alliance_Rule,
Announcements: stg_Alliance_Announcements,
DepositOf: stg_Alliance_DepositOf,
Members: stg_Alliance_Members,
RetiringMembers: stg_Alliance_RetiringMembers,
UnscrupulousAccounts: stg_Alliance_UnscrupulousAccounts,
UnscrupulousWebsites: stg_Alliance_UnscrupulousWebsites}, {propose: call_Alliance_propose,
vote: call_Alliance_vote,
init_members: call_Alliance_init_members,
disband: call_Alliance_disband,
set_rule: call_Alliance_set_rule,
announce: call_Alliance_announce,
remove_announcement: call_Alliance_remove_announcement,
join_alliance: call_Alliance_join_alliance,
nominate_ally: call_Alliance_nominate_ally,
elevate_ally: call_Alliance_elevate_ally,
give_retirement_notice: call_Alliance_give_retirement_notice,
retire: call_Alliance_retire,
kick_member: call_Alliance_kick_member,
add_unscrupulous_items: call_Alliance_add_unscrupulous_items,
remove_unscrupulous_items: call_Alliance_remove_unscrupulous_items,
close: call_Alliance_close,
abdicate_fellow_status: call_Alliance_abdicate_fellow_status}, {NewRuleSet: evt_Alliance_NewRuleSet,
Announced: evt_Alliance_Announced,
AnnouncementRemoved: evt_Alliance_AnnouncementRemoved,
MembersInitialized: evt_Alliance_MembersInitialized,
NewAllyJoined: evt_Alliance_NewAllyJoined,
AllyElevated: evt_Alliance_AllyElevated,
MemberRetirementPeriodStarted: evt_Alliance_MemberRetirementPeriodStarted,
MemberRetired: evt_Alliance_MemberRetired,
MemberKicked: evt_Alliance_MemberKicked,
UnscrupulousItemAdded: evt_Alliance_UnscrupulousItemAdded,
UnscrupulousItemRemoved: evt_Alliance_UnscrupulousItemRemoved,
AllianceDisbanded: evt_Alliance_AllianceDisbanded,
FellowAbdicated: evt_Alliance_FellowAbdicated}, {AllianceNotYetInitialized: err_Alliance_AllianceNotYetInitialized,
AllianceAlreadyInitialized: err_Alliance_AllianceAlreadyInitialized,
AlreadyMember: err_Alliance_AlreadyMember,
NotMember: err_Alliance_NotMember,
NotAlly: err_Alliance_NotAlly,
NoVotingRights: err_Alliance_NoVotingRights,
AlreadyElevated: err_Alliance_AlreadyElevated,
AlreadyUnscrupulous: err_Alliance_AlreadyUnscrupulous,
AccountNonGrata: err_Alliance_AccountNonGrata,
NotListedAsUnscrupulous: err_Alliance_NotListedAsUnscrupulous,
TooManyUnscrupulousItems: err_Alliance_TooManyUnscrupulousItems,
TooLongWebsiteUrl: err_Alliance_TooLongWebsiteUrl,
InsufficientFunds: err_Alliance_InsufficientFunds,
WithoutIdentityDisplayAndWebsite: err_Alliance_WithoutIdentityDisplayAndWebsite,
WithoutGoodIdentityJudgement: err_Alliance_WithoutGoodIdentityJudgement,
MissingProposalHash: err_Alliance_MissingProposalHash,
MissingAnnouncement: err_Alliance_MissingAnnouncement,
TooManyMembers: err_Alliance_TooManyMembers,
TooManyAnnouncements: err_Alliance_TooManyAnnouncements,
BadWitness: err_Alliance_BadWitness,
AlreadyRetiring: err_Alliance_AlreadyRetiring,
RetirementNoticeNotGiven: err_Alliance_RetirementNoticeNotGiven,
RetirementPeriodNotPassed: err_Alliance_RetirementPeriodNotPassed,
FellowsMissing: err_Alliance_FellowsMissing}, {MaxUnscrupulousItems: const_Alliance_MaxUnscrupulousItems,
MaxWebsiteUrlLength: const_Alliance_MaxWebsiteUrlLength,
AllyDeposit: const_Alliance_AllyDeposit,
MaxAnnouncementsCount: const_Alliance_MaxAnnouncementsCount,
MaxMembersCount: const_Alliance_MaxMembersCount}],
AllianceMotion: [{Proposals: stg_AllianceMotion_Proposals,
ProposalOf: stg_AllianceMotion_ProposalOf,
Voting: stg_AllianceMotion_Voting,
ProposalCount: stg_AllianceMotion_ProposalCount,
Members: stg_AllianceMotion_Members,
Prime: stg_AllianceMotion_Prime}, {set_members: call_AllianceMotion_set_members,
execute: call_AllianceMotion_execute,
propose: call_AllianceMotion_propose,
vote: call_AllianceMotion_vote,
disapprove_proposal: call_AllianceMotion_disapprove_proposal,
close: call_AllianceMotion_close}, {Proposed: evt_AllianceMotion_Proposed,
Voted: evt_AllianceMotion_Voted,
Approved: evt_AllianceMotion_Approved,
Disapproved: evt_AllianceMotion_Disapproved,
Executed: evt_AllianceMotion_Executed,
MemberExecuted: evt_AllianceMotion_MemberExecuted,
Closed: evt_AllianceMotion_Closed}, {NotMember: err_AllianceMotion_NotMember,
DuplicateProposal: err_AllianceMotion_DuplicateProposal,
ProposalMissing: err_AllianceMotion_ProposalMissing,
WrongIndex: err_AllianceMotion_WrongIndex,
DuplicateVote: err_AllianceMotion_DuplicateVote,
AlreadyInitialized: err_AllianceMotion_AlreadyInitialized,
TooEarly: err_AllianceMotion_TooEarly,
TooManyProposals: err_AllianceMotion_TooManyProposals,
WrongProposalWeight: err_AllianceMotion_WrongProposalWeight,
WrongProposalLength: err_AllianceMotion_WrongProposalLength,
PrimeAccountNotMember: err_AllianceMotion_PrimeAccountNotMember}, {MaxProposalWeight: const_AllianceMotion_MaxProposalWeight}],
FellowshipCollective: [{MemberCount: stg_FellowshipCollective_MemberCount,
Members: stg_FellowshipCollective_Members,
IdToIndex: stg_FellowshipCollective_IdToIndex,
IndexToId: stg_FellowshipCollective_IndexToId,
Voting: stg_FellowshipCollective_Voting,
VotingCleanup: stg_FellowshipCollective_VotingCleanup}, {add_member: call_FellowshipCollective_add_member,
promote_member: call_FellowshipCollective_promote_member,
demote_member: call_FellowshipCollective_demote_member,
remove_member: call_FellowshipCollective_remove_member,
vote: call_FellowshipCollective_vote,
cleanup_poll: call_FellowshipCollective_cleanup_poll}, {MemberAdded: evt_FellowshipCollective_MemberAdded,
RankChanged: evt_FellowshipCollective_RankChanged,
MemberRemoved: evt_FellowshipCollective_MemberRemoved,
Voted: evt_FellowshipCollective_Voted}, {AlreadyMember: err_FellowshipCollective_AlreadyMember,
NotMember: err_FellowshipCollective_NotMember,
NotPolling: err_FellowshipCollective_NotPolling,
Ongoing: err_FellowshipCollective_Ongoing,
NoneRemaining: err_FellowshipCollective_NoneRemaining,
Corruption: err_FellowshipCollective_Corruption,
RankTooLow: err_FellowshipCollective_RankTooLow,
InvalidWitness: err_FellowshipCollective_InvalidWitness,
NoPermission: err_FellowshipCollective_NoPermission}, {}],
FellowshipReferenda: [{ReferendumCount: stg_FellowshipReferenda_ReferendumCount,
ReferendumInfoFor: stg_FellowshipReferenda_ReferendumInfoFor,
TrackQueue: stg_FellowshipReferenda_TrackQueue,
DecidingCount: stg_FellowshipReferenda_DecidingCount,
MetadataOf: stg_FellowshipReferenda_MetadataOf}, {submit: call_FellowshipReferenda_submit,
place_decision_deposit: call_FellowshipReferenda_place_decision_deposit,
refund_decision_deposit: call_FellowshipReferenda_refund_decision_deposit,
cancel: call_FellowshipReferenda_cancel,
kill: call_FellowshipReferenda_kill,
nudge_referendum: call_FellowshipReferenda_nudge_referendum,
one_fewer_deciding: call_FellowshipReferenda_one_fewer_deciding,
refund_submission_deposit: call_FellowshipReferenda_refund_submission_deposit,
set_metadata: call_FellowshipReferenda_set_metadata}, {Submitted: evt_FellowshipReferenda_Submitted,
DecisionDepositPlaced: evt_FellowshipReferenda_DecisionDepositPlaced,
DecisionDepositRefunded: evt_FellowshipReferenda_DecisionDepositRefunded,
DepositSlashed: evt_FellowshipReferenda_DepositSlashed,
DecisionStarted: evt_FellowshipReferenda_DecisionStarted,
ConfirmStarted: evt_FellowshipReferenda_ConfirmStarted,
ConfirmAborted: evt_FellowshipReferenda_ConfirmAborted,
Confirmed: evt_FellowshipReferenda_Confirmed,
Approved: evt_FellowshipReferenda_Approved,
Rejected: evt_FellowshipReferenda_Rejected,
TimedOut: evt_FellowshipReferenda_TimedOut,
Cancelled: evt_FellowshipReferenda_Cancelled,
Killed: evt_FellowshipReferenda_Killed,
SubmissionDepositRefunded: evt_FellowshipReferenda_SubmissionDepositRefunded,
MetadataSet: evt_FellowshipReferenda_MetadataSet,
MetadataCleared: evt_FellowshipReferenda_MetadataCleared}, {NotOngoing: err_FellowshipReferenda_NotOngoing,
HasDeposit: err_FellowshipReferenda_HasDeposit,
BadTrack: err_FellowshipReferenda_BadTrack,
Full: err_FellowshipReferenda_Full,
QueueEmpty: err_FellowshipReferenda_QueueEmpty,
BadReferendum: err_FellowshipReferenda_BadReferendum,
NothingToDo: err_FellowshipReferenda_NothingToDo,
NoTrack: err_FellowshipReferenda_NoTrack,
Unfinished: err_FellowshipReferenda_Unfinished,
NoPermission: err_FellowshipReferenda_NoPermission,
NoDeposit: err_FellowshipReferenda_NoDeposit,
BadStatus: err_FellowshipReferenda_BadStatus,
PreimageNotExist: err_FellowshipReferenda_PreimageNotExist}, {SubmissionDeposit: const_FellowshipReferenda_SubmissionDeposit,
MaxQueued: const_FellowshipReferenda_MaxQueued,
UndecidingTimeout: const_FellowshipReferenda_UndecidingTimeout,
AlarmInterval: const_FellowshipReferenda_AlarmInterval,
Tracks: const_FellowshipReferenda_Tracks}],
FellowshipCore: [{Params: stg_FellowshipCore_Params,
Member: stg_FellowshipCore_Member,
MemberEvidence: stg_FellowshipCore_MemberEvidence}, {bump: call_FellowshipCore_bump,
set_params: call_FellowshipCore_set_params,
set_active: call_FellowshipCore_set_active,
approve: call_FellowshipCore_approve,
induct: call_FellowshipCore_induct,
promote: call_FellowshipCore_promote,
offboard: call_FellowshipCore_offboard,
submit_evidence: call_FellowshipCore_submit_evidence,
import: call_FellowshipCore_import}, {ParamsChanged: evt_FellowshipCore_ParamsChanged,
ActiveChanged: evt_FellowshipCore_ActiveChanged,
Inducted: evt_FellowshipCore_Inducted,
Offboarded: evt_FellowshipCore_Offboarded,
Promoted: evt_FellowshipCore_Promoted,
Demoted: evt_FellowshipCore_Demoted,
Proven: evt_FellowshipCore_Proven,
Requested: evt_FellowshipCore_Requested,
EvidenceJudged: evt_FellowshipCore_EvidenceJudged,
Imported: evt_FellowshipCore_Imported}, {Unranked: err_FellowshipCore_Unranked,
Ranked: err_FellowshipCore_Ranked,
UnexpectedRank: err_FellowshipCore_UnexpectedRank,
InvalidRank: err_FellowshipCore_InvalidRank,
NoPermission: err_FellowshipCore_NoPermission,
NothingDoing: err_FellowshipCore_NothingDoing,
AlreadyInducted: err_FellowshipCore_AlreadyInducted,
NotTracked: err_FellowshipCore_NotTracked,
TooSoon: err_FellowshipCore_TooSoon}, {EvidenceSize: const_FellowshipCore_EvidenceSize}],
FellowshipSalary: [{Status: stg_FellowshipSalary_Status,
Claimant: stg_FellowshipSalary_Claimant}, {init: call_FellowshipSalary_init,
bump: call_FellowshipSalary_bump,
induct: call_FellowshipSalary_induct,
register: call_FellowshipSalary_register,
payout: call_FellowshipSalary_payout,
payout_other: call_FellowshipSalary_payout_other,
check_payment: call_FellowshipSalary_check_payment}, {Inducted: evt_FellowshipSalary_Inducted,
Registered: evt_FellowshipSalary_Registered,
Paid: evt_FellowshipSalary_Paid,
CycleStarted: evt_FellowshipSalary_CycleStarted}, {AlreadyStarted: err_FellowshipSalary_AlreadyStarted,
NotMember: err_FellowshipSalary_NotMember,
AlreadyInducted: err_FellowshipSalary_AlreadyInducted,
NotInducted: err_FellowshipSalary_NotInducted,
NoClaim: err_FellowshipSalary_NoClaim,
ClaimZero: err_FellowshipSalary_ClaimZero,
TooLate: err_FellowshipSalary_TooLate,
TooEarly: err_FellowshipSalary_TooEarly,
NotYet: err_FellowshipSalary_NotYet,
NotStarted: err_FellowshipSalary_NotStarted,
Bankrupt: err_FellowshipSalary_Bankrupt,
PayError: err_FellowshipSalary_PayError,
Inconclusive: err_FellowshipSalary_Inconclusive,
NotCurrent: err_FellowshipSalary_NotCurrent}, {RegistrationPeriod: const_FellowshipSalary_RegistrationPeriod,
PayoutPeriod: const_FellowshipSalary_PayoutPeriod,
Budget: const_FellowshipSalary_Budget}],
FellowshipTreasury: [{ProposalCount: stg_FellowshipTreasury_ProposalCount,
Proposals: stg_FellowshipTreasury_Proposals,
Deactivated: stg_FellowshipTreasury_Deactivated,
Approvals: stg_FellowshipTreasury_Approvals,
SpendCount: stg_FellowshipTreasury_SpendCount,
Spends: stg_FellowshipTreasury_Spends}, {propose_spend: call_FellowshipTreasury_propose_spend,
reject_proposal: call_FellowshipTreasury_reject_proposal,
approve_proposal: call_FellowshipTreasury_approve_proposal,
spend_local: call_FellowshipTreasury_spend_local,
remove_approval: call_FellowshipTreasury_remove_approval,
spend: call_FellowshipTreasury_spend,
payout: call_FellowshipTreasury_payout,
check_status: call_FellowshipTreasury_check_status,
void_spend: call_FellowshipTreasury_void_spend}, {Proposed: evt_FellowshipTreasury_Proposed,
Spending: evt_FellowshipTreasury_Spending,
Awarded: evt_FellowshipTreasury_Awarded,
Rejected: evt_FellowshipTreasury_Rejected,
Burnt: evt_FellowshipTreasury_Burnt,
Rollover: evt_FellowshipTreasury_Rollover,
Deposit: evt_FellowshipTreasury_Deposit,
SpendApproved: evt_FellowshipTreasury_SpendApproved,
UpdatedInactive: evt_FellowshipTreasury_UpdatedInactive,
AssetSpendApproved: evt_FellowshipTreasury_AssetSpendApproved,
AssetSpendVoided: evt_FellowshipTreasury_AssetSpendVoided,
Paid: evt_FellowshipTreasury_Paid,
PaymentFailed: evt_FellowshipTreasury_PaymentFailed,
SpendProcessed: evt_FellowshipTreasury_SpendProcessed}, {InsufficientProposersBalance: err_FellowshipTreasury_InsufficientProposersBalance,
InvalidIndex: err_FellowshipTreasury_InvalidIndex,
TooManyApprovals: err_FellowshipTreasury_TooManyApprovals,
InsufficientPermission: err_FellowshipTreasury_InsufficientPermission,
ProposalNotApproved: err_FellowshipTreasury_ProposalNotApproved,
FailedToConvertBalance: err_FellowshipTreasury_FailedToConvertBalance,
SpendExpired: err_FellowshipTreasury_SpendExpired,
EarlyPayout: err_FellowshipTreasury_EarlyPayout,
AlreadyAttempted: err_FellowshipTreasury_AlreadyAttempted,
PayoutError: err_FellowshipTreasury_PayoutError,
NotAttempted: err_FellowshipTreasury_NotAttempted,
Inconclusive: err_FellowshipTreasury_Inconclusive}, {ProposalBond: const_FellowshipTreasury_ProposalBond,
ProposalBondMinimum: const_FellowshipTreasury_ProposalBondMinimum,
ProposalBondMaximum: const_FellowshipTreasury_ProposalBondMaximum,
SpendPeriod: const_FellowshipTreasury_SpendPeriod,
Burn: const_FellowshipTreasury_Burn,
PalletId: const_FellowshipTreasury_PalletId,
MaxApprovals: const_FellowshipTreasury_MaxApprovals,
PayoutPeriod: const_FellowshipTreasury_PayoutPeriod}]};

type IRuntimeCalls = {

/**
 * API necessary for block authorship with aura.
 */
AuraApi: {

/**
 * Returns the slot duration for Aura.
 *
 * Currently, only the value provided by this type at genesis will be used.
 */
slot_duration: RuntimeDescriptor<[], bigint>,


/**
 * Return the current set of authorities.
 */
authorities: RuntimeDescriptor<[], Anonymize<Idhnf6rtqoslea>>},


/**
 * The `Core` runtime api that every Substrate runtime needs to implement.
 */
Core: {

/**
 * Returns the version of the runtime.
 */
version: RuntimeDescriptor<[], Anonymize<Ib5fo0fakl8rog>>,


/**
 * Execute the given block.
 */
execute_block: RuntimeDescriptor<[block: Anonymize<Ia4jqf401148a4>], undefined>,


/**
 * Initialize a block with the given header.
 */
initialize_block: RuntimeDescriptor<[header: Anonymize<I6t1nedlt7mobn>], undefined>},


/**
 * The `Metadata` api trait that returns metadata for the runtime.
 */
Metadata: {

/**
 * Returns the metadata of a runtime.
 */
metadata: RuntimeDescriptor<[], Binary>,


/**
 * Returns the metadata at a given version.
 *
 * If the given `version` isn't supported, this will return `None`.
 * Use [`Self::metadata_versions`] to find out about supported metadata version of the runtime.
 */
metadata_at_version: RuntimeDescriptor<[version: number], Anonymize<Iabpgqcjikia83>>,


/**
 * Returns the supported metadata versions.
 *
 * This can be used to call `metadata_at_version`.
 */
metadata_versions: RuntimeDescriptor<[], Anonymize<Icgljjb6j82uhn>>},


/**
 * The `BlockBuilder` api trait that provides the required functionality for building a block.
 */
BlockBuilder: {

/**
 * Apply the given extrinsic.
 *
 * Returns an inclusion outcome which specifies if this extrinsic is included in
 * this block or not.
 */
apply_extrinsic: RuntimeDescriptor<[extrinsic: Binary], Anonymize<I132412t2eshc6>>,


/**
 * Finish the current block.
 */
finalize_block: RuntimeDescriptor<[], Anonymize<I6t1nedlt7mobn>>,


/**
 * Generate inherent extrinsics. The inherent data will vary from chain to chain.
 */
inherent_extrinsics: RuntimeDescriptor<[inherent: Anonymize<If39abi8floaaf>], Anonymize<Itom7fk49o0c9>>,


/**
 * Check that the inherents are valid. The inherent data will vary from chain to chain.
 */
check_inherents: RuntimeDescriptor<[block: Anonymize<Ia4jqf401148a4>, data: Anonymize<If39abi8floaaf>], Anonymize<Ibcdj0j79gq1uo>>},


/**
 * The `TaggedTransactionQueue` api trait for interfering with the transaction queue.
 */
TaggedTransactionQueue: {

/**
 * Validate the transaction.
 *
 * This method is invoked by the transaction pool to learn details about given transaction.
 * The implementation should make sure to verify the correctness of the transaction
 * against current state. The given `block_hash` corresponds to the hash of the block
 * that is used as current state.
 *
 * Note that this call may be performed by the pool multiple times and transactions
 * might be verified in any possible order.
 */
validate_transaction: RuntimeDescriptor<[source: TransactionValidityTransactionSource, tx: Binary, block_hash: Binary], Anonymize<I6d9lhhdri071p>>},


/**
 * The offchain worker api.
 */
OffchainWorkerApi: {

/**
 * Starts the off-chain task for given block header.
 */
offchain_worker: RuntimeDescriptor<[header: Anonymize<I6t1nedlt7mobn>], undefined>},


/**
 * Session keys runtime api.
 */
SessionKeys: {

/**
 * Generate a set of session keys with optionally using the given seed.
 * The keys should be stored within the keystore exposed via runtime
 * externalities.
 *
 * The seed needs to be a valid `utf8` string.
 *
 * Returns the concatenated SCALE encoded public keys.
 */
generate_session_keys: RuntimeDescriptor<[seed: Anonymize<Iabpgqcjikia83>], Binary>,


/**
 * Decode the given public session keys.
 *
 * Returns the list of public raw public keys + key type.
 */
decode_session_keys: RuntimeDescriptor<[encoded: Binary], Anonymize<I96ok5o1k21bpi>>},


/**
 * The API to query account nonce.
 */
AccountNonceApi: {

/**
 * Get current account nonce of given `AccountId`.
 */
account_nonce: RuntimeDescriptor<[account: SS58String], number>},


/**

 */
TransactionPaymentApi: {

/**

 */
query_info: RuntimeDescriptor<[uxt: Binary, len: number], Anonymize<I5r4utvvlnltpd>>,


/**

 */
query_fee_details: RuntimeDescriptor<[uxt: Binary, len: number], Anonymize<Iei2mvq0mjvt81>>,


/**

 */
query_weight_to_fee: RuntimeDescriptor<[weight: Anonymize<I4q39t5hn830vp>], bigint>,


/**

 */
query_length_to_fee: RuntimeDescriptor<[length: number], bigint>},


/**

 */
TransactionPaymentCallApi: {

/**
 * Query information of a dispatch class, weight, and fee of a given encoded `Call`.
 */
query_call_info: RuntimeDescriptor<[call: Anonymize<Iemfe4sq56o6e4>, len: number], Anonymize<I5r4utvvlnltpd>>,


/**
 * Query fee details of a given encoded `Call`.
 */
query_call_fee_details: RuntimeDescriptor<[call: Anonymize<Iemfe4sq56o6e4>, len: number], Anonymize<Iei2mvq0mjvt81>>,


/**
 * Query the output of the current `WeightToFee` given some input.
 */
query_weight_to_fee: RuntimeDescriptor<[weight: Anonymize<I4q39t5hn830vp>], bigint>,


/**
 * Query the output of the current `LengthToFee` given some input.
 */
query_length_to_fee: RuntimeDescriptor<[length: number], bigint>},


/**
 * Runtime api to collect information about a collation.
 */
CollectCollationInfo: {

/**
 * Collect information about a collation.
 *
 * The given `header` is the header of the built block for that
 * we are collecting the collation info for.
 */
collect_collation_info: RuntimeDescriptor<[header: Anonymize<I6t1nedlt7mobn>], Anonymize<Ic1d4u2opv3fst>>},


/**
 * API to interact with GenesisConfig for the runtime
 */
GenesisBuilder: {

/**
 * Creates the default `GenesisConfig` and returns it as a JSON blob.
 *
 * This function instantiates the default `GenesisConfig` struct for the runtime and serializes it into a JSON
 * blob. It returns a `Vec<u8>` containing the JSON representation of the default `GenesisConfig`.
 */
create_default_config: RuntimeDescriptor<[], Binary>,


/**
 * Build `GenesisConfig` from a JSON blob not using any defaults and store it in the storage.
 *
 * This function deserializes the full `GenesisConfig` from the given JSON blob and puts it into the storage.
 * If the provided JSON blob is incorrect or incomplete or the deserialization fails, an error is returned.
 * It is recommended to log any errors encountered during the process.
 *
 * Please note that provided json blob must contain all `GenesisConfig` fields, no defaults will be used.
 */
build_config: RuntimeDescriptor<[json: Binary], Anonymize<I9q9lvv0h98nhk>>}};
const apis: IRuntimeCalls = {AuraApi: {slot_duration: runtime_AuraApi_slot_duration,
authorities: runtime_AuraApi_authorities},
Core: {version: runtime_Core_version,
execute_block: runtime_Core_execute_block,
initialize_block: runtime_Core_initialize_block},
Metadata: {metadata: runtime_Metadata_metadata,
metadata_at_version: runtime_Metadata_metadata_at_version,
metadata_versions: runtime_Metadata_metadata_versions},
BlockBuilder: {apply_extrinsic: runtime_BlockBuilder_apply_extrinsic,
finalize_block: runtime_BlockBuilder_finalize_block,
inherent_extrinsics: runtime_BlockBuilder_inherent_extrinsics,
check_inherents: runtime_BlockBuilder_check_inherents},
TaggedTransactionQueue: {validate_transaction: runtime_TaggedTransactionQueue_validate_transaction},
OffchainWorkerApi: {offchain_worker: runtime_OffchainWorkerApi_offchain_worker},
SessionKeys: {generate_session_keys: runtime_SessionKeys_generate_session_keys,
decode_session_keys: runtime_SessionKeys_decode_session_keys},
AccountNonceApi: {account_nonce: runtime_AccountNonceApi_account_nonce},
TransactionPaymentApi: {query_info: runtime_TransactionPaymentApi_query_info,
query_fee_details: runtime_TransactionPaymentApi_query_fee_details,
query_weight_to_fee: runtime_TransactionPaymentApi_query_weight_to_fee,
query_length_to_fee: runtime_TransactionPaymentApi_query_length_to_fee},
TransactionPaymentCallApi: {query_call_info: runtime_TransactionPaymentCallApi_query_call_info,
query_call_fee_details: runtime_TransactionPaymentCallApi_query_call_fee_details,
query_weight_to_fee: runtime_TransactionPaymentCallApi_query_weight_to_fee,
query_length_to_fee: runtime_TransactionPaymentCallApi_query_length_to_fee},
CollectCollationInfo: {collect_collation_info: runtime_CollectCollationInfo_collect_collation_info},
GenesisBuilder: {create_default_config: runtime_GenesisBuilder_create_default_config,
build_config: runtime_GenesisBuilder_build_config}};

type IAsset = AssetDescriptor<void>
const asset: IAsset = "" as IAsset

type IDescriptors = { pallets: IPallets, apis: IRuntimeCalls, asset: IAsset, checksums: Promise<string[]> };
const _allDescriptors: IDescriptors = { pallets, apis, asset, checksums };
export default _allDescriptors;


export type CollectivesQueries = QueryFromDescriptors<IDescriptors>
export type CollectivesCalls = TxFromDescriptors<IDescriptors>
export type CollectivesEvents = EventsFromDescriptors<IDescriptors>
export type CollectivesErrors = ErrorsFromDescriptors<IDescriptors>
export type CollectivesConstants = ConstFromDescriptors<IDescriptors>

export * from './public-types'