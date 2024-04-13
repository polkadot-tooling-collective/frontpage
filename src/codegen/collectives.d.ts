import { StorageDescriptor, PlainDescriptor, AssetDescriptor, TxDescriptor, RuntimeDescriptor, Enum, QueryFromDescriptors, TxFromDescriptors, EventsFromDescriptors, ErrorsFromDescriptors, ConstFromDescriptors, SS58String, Binary } from "@polkadot-api/client";
import { I5sesotjlssv2d, Iffmde3ekjedi9, Idin6nhq46lvdj, I83463s35303v1, Iep4uo61810hfs, Ieniouoqkq4icf, Phase, I6f7juk1vj8fiq, Iamnn769l033b4, I5r8ef6aie125l, Id34bi0o1gnln9, Ie1vdku2j6ccvj, Itom7fk49o0c9, I8gicq33tfu7j1, I4iumukclgj8ej, I93ssha9egqq23, I6r5cbv8ttrb09, I4q39t5hn830vp, Ib3qt1mgvgmbgi, I1q8tnt1cluu5j, Ibtifm27unhnjf, Iactubn52acokl, I233put12fltor, I3fe7nt2ne6qtf, TransactionPaymentReleases, Ia2lhg7l2hilo3, Ifi4da1gej1fri, I9our4clsjkim0, Icgljjb6j82uhn, Idhk5e7nto8mrb, Idhnf6rtqoslea, I6cs1itejju2vv, I1imu1nmuvsfjb, I5g2vv0ckl2m8b, I1mse8p8gvh143, Ie0cpusdmler9p, I6o3vavku3vjsk, XcmPalletQueryStatus, I46ggargfeekkj, I7vlvrrl2pnbgk, Ibdqc639q3ofe0, XcmPalletVersionMigrationStage, Iaaeqd8puo95gs, I61vn4ct4e1jjd, I64u7pb324isgb, Iepvrcsdbii2qt, I82vjkits3vc46, Icp9h5ma02v1rg, Iag146hmjgqfgj, I73gble6tmb52f, I3q5rcchchf9rk, I3tjio59962rg2, PreimageRequestStatus, PreimageRequestStatus1, I64gm4hrq7urum, I6peuma3nc745n, I32r9skkupsthv, I2h4fuon2pnvcd, I4495bvn4ld72n, I4jb9st4l6tk5c, Iemfe4sq56o6e4, I99bb69usss9gs, I7svnfko10tq2e, I996080trg6urn, I92r5g26hdf8cj, Iec4blde7bc1ai, Iq1c24rdj7v7p, I3vo1s729tgvdr, Idg0lipm04tfnv, Iesbdiip9d834l, Iegmj7n48sc3am, Ie05qfg5feue1l, In7a38730s6qs, If15el53dd76v9, I9s0ave7t0vnrk, Ib5fo0fakl8rog, Ibafpkl9hhno69, I35p85j063s0il, I8ofcg5rbj0g2c, I4adgbll7gku4i, I6pjjpfvhvcfru, I8qrhskdehbu57, I39uah9nss64h9, Ik64dknsq7k08, I68js79djhsbni, Ifpj261e8s63m3, Idcr6u6361oad9, Ien6q0lasi0m7i, Icacgruoo9j3r2, I7dgmo7im9hljo, Iargojp1sv9icj, Ibmr18suc9ikh9, Ie0io91hk7pejj, Ifccifqltb5obi, Iadtsfv699cq8b, Ialpmgmhr3gk5r, I4cbvqmqadhrea, Ivojoo8sbcs0m, Iab1retd4gg4q1, I3vh014cqgmrfd, I2tni7rrb2buqm, Icvpjofp09bmlh, Ieeis6pj62kiu4, I53e0mdinhcvpm, I732o5n04n5ohg, Ic76kfh5ebqkpl, I3pog27ittgi9g, Ifcceq8taolrca, Ibgm4rnf22lal1, Id0f4f8p846e4o, Idkn325fta6i3i, Iq7iccc2hfumf, I1654abd13olpl, Idbktfo7cbj1un, I1nc4131phq95n, I349bg0i7n8ohu, I8plicv234mqe5, I8mlu7201qva4e, I490uvap9onp3g, I8v053pd8im1d3, Ibnon1qvc1ro8, Id3bpmvju2iqi5, Ietdab69eu3c4e, I6ckidq7jkqmnt, I82nfqfkd48n10, Id9d48vaes3c53, Idaor7tajt0l3k, I1qkfnm7irt5un, I5n4sebgkfr760, Icu99suj4go17, Idsdstalforb09, I6eugra8pivgrs, I11o2rsm65pn9o, I16soggnee6qrb, Ifvnf1s3g2lg8u, Iklhae5b9b3k8, I4ncel23eptqai, Ia61kag3grdevk, Icq0crsj7vrl4j, I2dgasao7pteq7, I56f2tlouivnqg, I2nmm2fprtp4kl, I5vno9afhrn994, I2t3hu6k5vesjh, Ic3aqnecvctqmc, I38jfk5li8iang, I8jhljjof4f7u2, Icraueddqmudct, I8c23ih8fpmjma, I8bvk21lpmah75, I449n3riv6jbum, Ihqgnavvsqvf8, I666bl2fqjkejo, Icbio0e1f0034b, Ifml0k0sf0mu2g, I875hrun7fs7ik, I27vrusv8rgd90, Ic79d2eioda33s, I5kpe8b2kedtqn, Iegaehkdq4ofh, I8ligieds2efci, I5c883qnnqciv8, Icm9m0qeemu66d, Idpn74s0i9cdvp, I815t7ta25e227, Iede1ukavoderd, Iennefu6o2bgdm, Icbccs0ug47ilf, Ieob37pbjnvmkj, Idd7hd99u0ho0n, I6a5n5ij3gomuo, Iafscmv8tjf0ou, I7a3a6ua4hud3s, I4n7056p1k6c8b, Icv68aq8841478, Ic262ibdoec56a, Iflcfm9b6nlmdd, Ijrsf4mnp3eka, Id5fm4p8lj5qgi, Idm5rqp3duosod, I3qt1hgg4djhgb, Ier2cke86dqbr2, I39t01nnod9109, I6v8sm60vvkmk7, I1qmtmbe5so8r3, Ih99m6ehpcar7, Idgorhsbgdq2ap, I2hq50pu2kdjpo, I7nj4acpodcef4, I3n8ln6mqdfgb8, I2vo9trn8nhllu, If8b64mo2bodj0, Icu5p58ltu1veo, I4e7dkr4hrus3u, Ia5b8kts5gt3p5, Ise9r0vrat2m6, I7kkbgm2llu2o3, I2uqmls7kcdnii, Idg69klialbkb8, I9j133okge3c2, I30pg328m00nr3, I5qm1bvb2j3ap2, I95aqmsd6gjmqs, Iarlf7ddo81fm5, Ie9bjgclf7vho0, I7dm0nb8u3g2hv, I5pnf8l8c1nkfk, Ibknqphki4flb3, Id0ii3t0e6fgob, I6mr530l14uapg, I2ds5dc604t7si, Idqsknek3bsc0s, Ise9gq7rqlnvm, I6tn8e5lqr339o, I11lb9o37qkk4f, Ie5i8qqljk3tjb, Ibvv58de7m7rsi, I4uo2dg1jvbdtg, Ifbo6gts4g8u33, I82jp3a00f0f8k, I29pqkr7dgifjk, Idbjbboh0q507r, I88knav8fvi1c3, Idv8erd9m7jvse, Ibkv7dijodoblp, Iedcb9b2srjfp0, I79vua51vqq0mc, I3trq1j79d9t1e, Ie3gphha4ejh40, Iafhd8kv029rqj, I2mcnoj31i9be1, I9dapsurd7u7ga, I8uij7nmvtb96e, I1kjs4f71ca3ei, I866j5fp50ebq9, I3vvd0fdlc9ji8, I8jvf1ugsdsqum, Im1pm2vf6llcn, I31vg1u4v55v90, Idhr9v8mlnjej, I62nte77gksm0f, Iuu6tledtt64n, I27notaksll8qt, I50aq0q2l1cdkr, I9j3uq1uk06oju, Ien2galqubjs1f, Id07di6ikhd4im, I4vcrhqupmee7p, I44hc4lgsn4o1j, I8iksqi3eani0a, I16enopmju1p0q, Ifgqhle2413de7, I43kq8qudg7pq9, I76riseemre533, Ie5v6njpckr05b, I38bmcrmh852rk, I4hcillge8de5f, Iblqf6usek6oij, Iek7v4hrgnq6iv, Ia4jqf401148a4, I6t1nedlt7mobn, Iabpgqcjikia83, I132412t2eshc6, If39abi8floaaf, Ibcdj0j79gq1uo, TransactionValidityTransactionSource, I6d9lhhdri071p, I96ok5o1k21bpi, I5r4utvvlnltpd, Iei2mvq0mjvt81, Ic1d4u2opv3fst, I9q9lvv0h98nhk } from "./common-types";
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
type IPallets = {
    System: [
        {
            /**
             * The full account information for a particular account ID.
             */
            Account: StorageDescriptor<[Key: SS58String], Anonymize<I5sesotjlssv2d>, false>;
            /**
             * Total extrinsics count for the current block.
             */
            ExtrinsicCount: StorageDescriptor<[], number, true>;
            /**
             * The current weight for the block.
             */
            BlockWeight: StorageDescriptor<[], Anonymize<Iffmde3ekjedi9>, false>;
            /**
             * Total length (in bytes) for all extrinsics put together, for the current block.
             */
            AllExtrinsicsLen: StorageDescriptor<[], number, true>;
            /**
             * Map of block numbers to block hashes.
             */
            BlockHash: StorageDescriptor<[Key: number], Binary, false>;
            /**
             * Extrinsics data for the current block (maps an extrinsic's index to its data).
             */
            ExtrinsicData: StorageDescriptor<[Key: number], Binary, false>;
            /**
             * The current block number being processed. Set by `execute_block`.
             */
            Number: StorageDescriptor<[], number, false>;
            /**
             * Hash of the previous block.
             */
            ParentHash: StorageDescriptor<[], Binary, false>;
            /**
             * Digest of the current block, also part of the block header.
             */
            Digest: StorageDescriptor<[], Anonymize<Idin6nhq46lvdj>, false>;
            /**
             * Events deposited for the current block.
             *
             * NOTE: The item is unbound and should therefore never be read on chain.
             * It could otherwise inflate the PoV size of a block.
             *
             * Events have a large in-memory size. Box the events to not go out-of-memory
             * just in case someone still reads them from within the runtime.
             */
            Events: StorageDescriptor<[], Anonymize<I83463s35303v1>, false>;
            /**
             * The number of events in the `Events<T>` list.
             */
            EventCount: StorageDescriptor<[], number, false>;
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
            EventTopics: StorageDescriptor<[Key: Binary], Anonymize<Iep4uo61810hfs>, false>;
            /**
             * Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
             */
            LastRuntimeUpgrade: StorageDescriptor<[], Anonymize<Ieniouoqkq4icf>, true>;
            /**
             * True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
             */
            UpgradedToU32RefCount: StorageDescriptor<[], boolean, false>;
            /**
             * True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
             * (default) if not.
             */
            UpgradedToTripleRefCount: StorageDescriptor<[], boolean, false>;
            /**
             * The execution phase of the block.
             */
            ExecutionPhase: StorageDescriptor<[], Phase, true>;
        },
        {
            /**
             *See [`Pallet::remark`].
             */
            remark: TxDescriptor<Anonymize<I8ofcg5rbj0g2c>>;
            /**
             *See [`Pallet::set_heap_pages`].
             */
            set_heap_pages: TxDescriptor<Anonymize<I4adgbll7gku4i>>;
            /**
             *See [`Pallet::set_code`].
             */
            set_code: TxDescriptor<Anonymize<I6pjjpfvhvcfru>>;
            /**
             *See [`Pallet::set_code_without_checks`].
             */
            set_code_without_checks: TxDescriptor<Anonymize<I6pjjpfvhvcfru>>;
            /**
             *See [`Pallet::set_storage`].
             */
            set_storage: TxDescriptor<Anonymize<I8qrhskdehbu57>>;
            /**
             *See [`Pallet::kill_storage`].
             */
            kill_storage: TxDescriptor<Anonymize<I39uah9nss64h9>>;
            /**
             *See [`Pallet::kill_prefix`].
             */
            kill_prefix: TxDescriptor<Anonymize<Ik64dknsq7k08>>;
            /**
             *See [`Pallet::remark_with_event`].
             */
            remark_with_event: TxDescriptor<Anonymize<I8ofcg5rbj0g2c>>;
        },
        {
            /**
             *An extrinsic completed successfully.
             */
            ExtrinsicSuccess: PlainDescriptor<Anonymize<Iede1ukavoderd>>;
            /**
             *An extrinsic failed.
             */
            ExtrinsicFailed: PlainDescriptor<Anonymize<Iennefu6o2bgdm>>;
            /**
             *`:code` was updated.
             */
            CodeUpdated: PlainDescriptor<undefined>;
            /**
             *A new account was created.
             */
            NewAccount: PlainDescriptor<Anonymize<Icbccs0ug47ilf>>;
            /**
             *An account was reaped.
             */
            KilledAccount: PlainDescriptor<Anonymize<Icbccs0ug47ilf>>;
            /**
             *On on-chain remark happened.
             */
            Remarked: PlainDescriptor<Anonymize<Ieob37pbjnvmkj>>;
        },
        {
            /**
             *The name of specification does not match between the current runtime
             *and the new runtime.
             */
            InvalidSpecName: PlainDescriptor<undefined>;
            /**
             *The specification version is not allowed to decrease between the current runtime
             *and the new runtime.
             */
            SpecVersionNeedsToIncrease: PlainDescriptor<undefined>;
            /**
             *Failed to extract the runtime version from the new runtime.
             *
             *Either calling `Core_version` or decoding `RuntimeVersion` failed.
             */
            FailedToExtractRuntimeVersion: PlainDescriptor<undefined>;
            /**
             *Suicide called when the account has non-default composite data.
             */
            NonDefaultComposite: PlainDescriptor<undefined>;
            /**
             *There is a non-zero reference count preventing the account from being purged.
             */
            NonZeroRefCount: PlainDescriptor<undefined>;
            /**
             *The origin filter prevent the call to be dispatched.
             */
            CallFiltered: PlainDescriptor<undefined>;
        },
        {
            /**
             * Block & extrinsics weights: base values and limits.
             */
            BlockWeights: PlainDescriptor<Anonymize<In7a38730s6qs>>;
            /**
             * The maximum length of a block (in bytes).
             */
            BlockLength: PlainDescriptor<Anonymize<If15el53dd76v9>>;
            /**
             * Maximum number of block number to block hash mappings to keep (oldest pruned first).
             */
            BlockHashCount: PlainDescriptor<number>;
            /**
             * The weight of runtime database operations the runtime can invoke.
             */
            DbWeight: PlainDescriptor<Anonymize<I9s0ave7t0vnrk>>;
            /**
             * Get the chain's current version.
             */
            Version: PlainDescriptor<Anonymize<Ib5fo0fakl8rog>>;
            /**
             * The designated SS58 prefix of this chain.
             *
             * This replaces the "ss58Format" property declared in the chain spec. Reason is
             * that the runtime should know about the prefix in order to make use of it as
             * an identifier of the chain.
             */
            SS58Prefix: PlainDescriptor<number>;
        }
    ];
    ParachainSystem: [
        {
            /**
             * Latest included block descendants the runtime accepted. In other words, these are
             * ancestors of the currently executing block which have not been included in the observed
             * relay-chain state.
             *
             * The segment length is limited by the capacity returned from the [`ConsensusHook`] configured
             * in the pallet.
             */
            UnincludedSegment: StorageDescriptor<[], Anonymize<I6f7juk1vj8fiq>, false>;
            /**
             * Storage field that keeps track of bandwidth used by the unincluded segment along with the
             * latest HRMP watermark. Used for limiting the acceptance of new blocks with
             * respect to relay chain constraints.
             */
            AggregatedUnincludedSegment: StorageDescriptor<[], Anonymize<Iamnn769l033b4>, true>;
            /**
             * In case of a scheduled upgrade, this storage field contains the validation code to be
             * applied.
             *
             * As soon as the relay chain gives us the go-ahead signal, we will overwrite the
             * [`:code`][sp_core::storage::well_known_keys::CODE] which will result the next block process
             * with the new validation code. This concludes the upgrade process.
             */
            PendingValidationCode: StorageDescriptor<[], Binary, false>;
            /**
             * Validation code that is set by the parachain and is to be communicated to collator and
             * consequently the relay-chain.
             *
             * This will be cleared in `on_initialize` of each new block if no other pallet already set
             * the value.
             */
            NewValidationCode: StorageDescriptor<[], Binary, true>;
            /**
             * The [`PersistedValidationData`] set for this block.
             * This value is expected to be set only once per block and it's never stored
             * in the trie.
             */
            ValidationData: StorageDescriptor<[], Anonymize<I5r8ef6aie125l>, true>;
            /**
             * Were the validation data set to notify the relay chain?
             */
            DidSetValidationCode: StorageDescriptor<[], boolean, false>;
            /**
             * The relay chain block number associated with the last parachain block.
             *
             * This is updated in `on_finalize`.
             */
            LastRelayChainBlockNumber: StorageDescriptor<[], number, false>;
            /**
             * An option which indicates if the relay-chain restricts signalling a validation code upgrade.
             * In other words, if this is `Some` and [`NewValidationCode`] is `Some` then the produced
             * candidate will be invalid.
             *
             * This storage item is a mirror of the corresponding value for the current parachain from the
             * relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
             * set after the inherent.
             */
            UpgradeRestrictionSignal: StorageDescriptor<[], Anonymize<Id34bi0o1gnln9>, false>;
            /**
             * Optional upgrade go-ahead signal from the relay-chain.
             *
             * This storage item is a mirror of the corresponding value for the current parachain from the
             * relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
             * set after the inherent.
             */
            UpgradeGoAhead: StorageDescriptor<[], Anonymize<Ie1vdku2j6ccvj>, false>;
            /**
             * The state proof for the last relay parent block.
             *
             * This field is meant to be updated each block with the validation data inherent. Therefore,
             * before processing of the inherent, e.g. in `on_initialize` this data may be stale.
             *
             * This data is also absent from the genesis.
             */
            RelayStateProof: StorageDescriptor<[], Anonymize<Itom7fk49o0c9>, true>;
            /**
             * The snapshot of some state related to messaging relevant to the current parachain as per
             * the relay parent.
             *
             * This field is meant to be updated each block with the validation data inherent. Therefore,
             * before processing of the inherent, e.g. in `on_initialize` this data may be stale.
             *
             * This data is also absent from the genesis.
             */
            RelevantMessagingState: StorageDescriptor<[], Anonymize<I8gicq33tfu7j1>, true>;
            /**
             * The parachain host configuration that was obtained from the relay parent.
             *
             * This field is meant to be updated each block with the validation data inherent. Therefore,
             * before processing of the inherent, e.g. in `on_initialize` this data may be stale.
             *
             * This data is also absent from the genesis.
             */
            HostConfiguration: StorageDescriptor<[], Anonymize<I4iumukclgj8ej>, true>;
            /**
             * The last downward message queue chain head we have observed.
             *
             * This value is loaded before and saved after processing inbound downward messages carried
             * by the system inherent.
             */
            LastDmqMqcHead: StorageDescriptor<[], Binary, false>;
            /**
             * The message queue chain heads we have observed per each channel incoming channel.
             *
             * This value is loaded before and saved after processing inbound downward messages carried
             * by the system inherent.
             */
            LastHrmpMqcHeads: StorageDescriptor<[], Anonymize<I93ssha9egqq23>, false>;
            /**
             * Number of downward messages processed in a block.
             *
             * This will be cleared in `on_initialize` of each new block.
             */
            ProcessedDownwardMessages: StorageDescriptor<[], number, false>;
            /**
             * HRMP watermark that was set in a block.
             *
             * This will be cleared in `on_initialize` of each new block.
             */
            HrmpWatermark: StorageDescriptor<[], number, false>;
            /**
             * HRMP messages that were sent in a block.
             *
             * This will be cleared in `on_initialize` of each new block.
             */
            HrmpOutboundMessages: StorageDescriptor<[], Anonymize<I6r5cbv8ttrb09>, false>;
            /**
             * Upward messages that were sent in a block.
             *
             * This will be cleared in `on_initialize` of each new block.
             */
            UpwardMessages: StorageDescriptor<[], Anonymize<Itom7fk49o0c9>, false>;
            /**
             * Upward messages that are still pending and not yet send to the relay chain.
             */
            PendingUpwardMessages: StorageDescriptor<[], Anonymize<Itom7fk49o0c9>, false>;
            /**
             * The factor to multiply the base delivery fee by for UMP.
             */
            UpwardDeliveryFeeFactor: StorageDescriptor<[], bigint, false>;
            /**
             * The number of HRMP messages we observed in `on_initialize` and thus used that number for
             * announcing the weight of `on_initialize` and `on_finalize`.
             */
            AnnouncedHrmpMessagesPerCandidate: StorageDescriptor<[], number, false>;
            /**
             * The weight we reserve at the beginning of the block for processing XCMP messages. This
             * overrides the amount set in the Config trait.
             */
            ReservedXcmpWeightOverride: StorageDescriptor<[], Anonymize<I4q39t5hn830vp>, true>;
            /**
             * The weight we reserve at the beginning of the block for processing DMP messages. This
             * overrides the amount set in the Config trait.
             */
            ReservedDmpWeightOverride: StorageDescriptor<[], Anonymize<I4q39t5hn830vp>, true>;
            /**
             * The next authorized upgrade, if there is one.
             */
            AuthorizedUpgrade: StorageDescriptor<[], Anonymize<Ib3qt1mgvgmbgi>, true>;
            /**
             * A custom head data that should be returned as result of `validate_block`.
             *
             * See `Pallet::set_custom_validation_head_data` for more information.
             */
            CustomValidationHeadData: StorageDescriptor<[], Binary, true>;
        },
        {
            /**
             *See [`Pallet::set_validation_data`].
             */
            set_validation_data: TxDescriptor<Anonymize<I68js79djhsbni>>;
            /**
             *See [`Pallet::sudo_send_upward_message`].
             */
            sudo_send_upward_message: TxDescriptor<Anonymize<Ifpj261e8s63m3>>;
            /**
             *See [`Pallet::authorize_upgrade`].
             */
            authorize_upgrade: TxDescriptor<Anonymize<Ib3qt1mgvgmbgi>>;
            /**
             *See [`Pallet::enact_authorized_upgrade`].
             */
            enact_authorized_upgrade: TxDescriptor<Anonymize<I6pjjpfvhvcfru>>;
        },
        {
            /**
             *The validation function has been scheduled to apply.
             */
            ValidationFunctionStored: PlainDescriptor<undefined>;
            /**
             *The validation function was applied as of the contained relay chain block number.
             */
            ValidationFunctionApplied: PlainDescriptor<Anonymize<Idd7hd99u0ho0n>>;
            /**
             *The relay-chain aborted the upgrade process.
             */
            ValidationFunctionDiscarded: PlainDescriptor<undefined>;
            /**
             *An upgrade has been authorized.
             */
            UpgradeAuthorized: PlainDescriptor<Anonymize<I6a5n5ij3gomuo>>;
            /**
             *Some downward messages have been received and will be processed.
             */
            DownwardMessagesReceived: PlainDescriptor<Anonymize<Iafscmv8tjf0ou>>;
            /**
             *Downward messages were processed using the given weight.
             */
            DownwardMessagesProcessed: PlainDescriptor<Anonymize<I7a3a6ua4hud3s>>;
            /**
             *An upward message was sent to the relay chain.
             */
            UpwardMessageSent: PlainDescriptor<Anonymize<I4n7056p1k6c8b>>;
        },
        {
            /**
             *Attempt to upgrade validation function while existing upgrade pending.
             */
            OverlappingUpgrades: PlainDescriptor<undefined>;
            /**
             *Polkadot currently prohibits this parachain from upgrading its validation function.
             */
            ProhibitedByPolkadot: PlainDescriptor<undefined>;
            /**
             *The supplied validation function has compiled into a blob larger than Polkadot is
             *willing to run.
             */
            TooBig: PlainDescriptor<undefined>;
            /**
             *The inherent which supplies the validation data did not run this block.
             */
            ValidationDataNotAvailable: PlainDescriptor<undefined>;
            /**
             *The inherent which supplies the host configuration did not run this block.
             */
            HostConfigurationNotAvailable: PlainDescriptor<undefined>;
            /**
             *No validation function upgrade is currently scheduled.
             */
            NotScheduled: PlainDescriptor<undefined>;
            /**
             *No code upgrade has been authorized.
             */
            NothingAuthorized: PlainDescriptor<undefined>;
            /**
             *The given code upgrade has not been authorized.
             */
            Unauthorized: PlainDescriptor<undefined>;
        },
        {}
    ];
    Timestamp: [
        {
            /**
             * The current time for the current block.
             */
            Now: StorageDescriptor<[], bigint, false>;
            /**
             * Whether the timestamp has been updated in this block.
             *
             * This value is updated to `true` upon successful submission of a timestamp by a node.
             * It is then checked at the end of each block execution in the `on_finalize` hook.
             */
            DidUpdate: StorageDescriptor<[], boolean, false>;
        },
        {
            /**
             *See [`Pallet::set`].
             */
            set: TxDescriptor<Anonymize<Idcr6u6361oad9>>;
        },
        {},
        {},
        {
            /**
             * The minimum period between blocks.
             *
             * Be aware that this is different to the *expected* period that the block production
             * apparatus provides. Your chosen consensus system will generally work with this to
             * determine a sensible block time. For example, in the Aura pallet it will be double this
             * period on default settings.
             */
            MinimumPeriod: PlainDescriptor<bigint>;
        }
    ];
    ParachainInfo: [
        {
            /**
            
             */
            ParachainId: StorageDescriptor<[], number, false>;
        },
        {},
        {},
        {},
        {}
    ];
    Balances: [
        {
            /**
             * The total units issued in the system.
             */
            TotalIssuance: StorageDescriptor<[], bigint, false>;
            /**
             * The total units of outstanding deactivated balance in the system.
             */
            InactiveIssuance: StorageDescriptor<[], bigint, false>;
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
            Account: StorageDescriptor<[Key: SS58String], Anonymize<I1q8tnt1cluu5j>, false>;
            /**
             * Any liquidity locks on some account balances.
             * NOTE: Should only be accessed when setting, changing and freeing a lock.
             */
            Locks: StorageDescriptor<[Key: SS58String], Anonymize<Ibtifm27unhnjf>, false>;
            /**
             * Named reserves on some account balances.
             */
            Reserves: StorageDescriptor<[Key: SS58String], Anonymize<Iactubn52acokl>, false>;
            /**
             * Holds on account balances.
             */
            Holds: StorageDescriptor<[Key: SS58String], Anonymize<I233put12fltor>, false>;
            /**
             * Freeze locks on account balances.
             */
            Freezes: StorageDescriptor<[Key: SS58String], Anonymize<I3fe7nt2ne6qtf>, false>;
        },
        {
            /**
             *See [`Pallet::transfer_allow_death`].
             */
            transfer_allow_death: TxDescriptor<Anonymize<Ien6q0lasi0m7i>>;
            /**
             *See [`Pallet::force_transfer`].
             */
            force_transfer: TxDescriptor<Anonymize<Icacgruoo9j3r2>>;
            /**
             *See [`Pallet::transfer_keep_alive`].
             */
            transfer_keep_alive: TxDescriptor<Anonymize<Ien6q0lasi0m7i>>;
            /**
             *See [`Pallet::transfer_all`].
             */
            transfer_all: TxDescriptor<Anonymize<I7dgmo7im9hljo>>;
            /**
             *See [`Pallet::force_unreserve`].
             */
            force_unreserve: TxDescriptor<Anonymize<Iargojp1sv9icj>>;
            /**
             *See [`Pallet::upgrade_accounts`].
             */
            upgrade_accounts: TxDescriptor<Anonymize<Ibmr18suc9ikh9>>;
            /**
             *See [`Pallet::force_set_balance`].
             */
            force_set_balance: TxDescriptor<Anonymize<Ie0io91hk7pejj>>;
        },
        {
            /**
             *An account was created with some free balance.
             */
            Endowed: PlainDescriptor<Anonymize<Icv68aq8841478>>;
            /**
             *An account was removed whose balance was non-zero but below ExistentialDeposit,
             *resulting in an outright loss.
             */
            DustLost: PlainDescriptor<Anonymize<Ic262ibdoec56a>>;
            /**
             *Transfer succeeded.
             */
            Transfer: PlainDescriptor<Anonymize<Iflcfm9b6nlmdd>>;
            /**
             *A balance was set by root.
             */
            BalanceSet: PlainDescriptor<Anonymize<Ijrsf4mnp3eka>>;
            /**
             *Some balance was reserved (moved from free to reserved).
             */
            Reserved: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
            /**
             *Some balance was unreserved (moved from reserved to free).
             */
            Unreserved: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
            /**
             *Some balance was moved from the reserve of the first account to the second account.
             *Final argument indicates the destination balance type.
             */
            ReserveRepatriated: PlainDescriptor<Anonymize<Idm5rqp3duosod>>;
            /**
             *Some amount was deposited (e.g. for transaction fees).
             */
            Deposit: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
            /**
             *Some amount was withdrawn from the account (e.g. for transaction fees).
             */
            Withdraw: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
            /**
             *Some amount was removed from the account (e.g. for misbehavior).
             */
            Slashed: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
            /**
             *Some amount was minted into an account.
             */
            Minted: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
            /**
             *Some amount was burned from an account.
             */
            Burned: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
            /**
             *Some amount was suspended from an account (it can be restored later).
             */
            Suspended: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
            /**
             *Some amount was restored into an account.
             */
            Restored: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
            /**
             *An account was upgraded.
             */
            Upgraded: PlainDescriptor<Anonymize<I4cbvqmqadhrea>>;
            /**
             *Total issuance was increased by `amount`, creating a credit to be balanced.
             */
            Issued: PlainDescriptor<Anonymize<I3qt1hgg4djhgb>>;
            /**
             *Total issuance was decreased by `amount`, creating a debt to be balanced.
             */
            Rescinded: PlainDescriptor<Anonymize<I3qt1hgg4djhgb>>;
            /**
             *Some balance was locked.
             */
            Locked: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
            /**
             *Some balance was unlocked.
             */
            Unlocked: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
            /**
             *Some balance was frozen.
             */
            Frozen: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
            /**
             *Some balance was thawed.
             */
            Thawed: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        },
        {
            /**
             *Vesting balance too high to send value.
             */
            VestingBalance: PlainDescriptor<undefined>;
            /**
             *Account liquidity restrictions prevent withdrawal.
             */
            LiquidityRestrictions: PlainDescriptor<undefined>;
            /**
             *Balance too low to send value.
             */
            InsufficientBalance: PlainDescriptor<undefined>;
            /**
             *Value too low to create account due to existential deposit.
             */
            ExistentialDeposit: PlainDescriptor<undefined>;
            /**
             *Transfer/payment would kill account.
             */
            Expendability: PlainDescriptor<undefined>;
            /**
             *A vesting schedule already exists for this account.
             */
            ExistingVestingSchedule: PlainDescriptor<undefined>;
            /**
             *Beneficiary account must pre-exist.
             */
            DeadAccount: PlainDescriptor<undefined>;
            /**
             *Number of named reserves exceed `MaxReserves`.
             */
            TooManyReserves: PlainDescriptor<undefined>;
            /**
             *Number of holds exceed `MaxHolds`.
             */
            TooManyHolds: PlainDescriptor<undefined>;
            /**
             *Number of freezes exceed `MaxFreezes`.
             */
            TooManyFreezes: PlainDescriptor<undefined>;
        },
        {
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
            ExistentialDeposit: PlainDescriptor<bigint>;
            /**
             * The maximum number of locks that should exist on an account.
             * Not strictly enforced, but used for weight estimation.
             */
            MaxLocks: PlainDescriptor<number>;
            /**
             * The maximum number of named reserves that can exist on an account.
             */
            MaxReserves: PlainDescriptor<number>;
            /**
             * The maximum number of holds that can exist on an account at any time.
             */
            MaxHolds: PlainDescriptor<number>;
            /**
             * The maximum number of individual freeze locks that can exist on an account at any time.
             */
            MaxFreezes: PlainDescriptor<number>;
        }
    ];
    TransactionPayment: [
        {
            /**
            
             */
            NextFeeMultiplier: StorageDescriptor<[], bigint, false>;
            /**
            
             */
            StorageVersion: StorageDescriptor<[], TransactionPaymentReleases, false>;
        },
        {},
        {
            /**
             *A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
             *has been paid by `who`.
             */
            TransactionFeePaid: PlainDescriptor<Anonymize<Ier2cke86dqbr2>>;
        },
        {},
        {
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
            OperationalFeeMultiplier: PlainDescriptor<number>;
        }
    ];
    Authorship: [
        {
            /**
             * Author of current block.
             */
            Author: StorageDescriptor<[], SS58String, true>;
        },
        {},
        {},
        {},
        {}
    ];
    CollatorSelection: [
        {
            /**
             * The invulnerable, permissioned collators. This list must be sorted.
             */
            Invulnerables: StorageDescriptor<[], Anonymize<Ia2lhg7l2hilo3>, false>;
            /**
             * The (community, limited) collation candidates. `Candidates` and `Invulnerables` should be
             * mutually exclusive.
             */
            Candidates: StorageDescriptor<[], Anonymize<Ifi4da1gej1fri>, false>;
            /**
             * Last block authored by collator.
             */
            LastAuthoredBlock: StorageDescriptor<[Key: SS58String], number, false>;
            /**
             * Desired number of candidates.
             *
             * This should ideally always be less than [`Config::MaxCandidates`] for weights to be correct.
             */
            DesiredCandidates: StorageDescriptor<[], number, false>;
            /**
             * Fixed amount to deposit to become a collator.
             *
             * When a collator calls `leave_intent` they immediately receive the deposit back.
             */
            CandidacyBond: StorageDescriptor<[], bigint, false>;
        },
        {
            /**
             *See [`Pallet::set_invulnerables`].
             */
            set_invulnerables: TxDescriptor<Anonymize<Ifccifqltb5obi>>;
            /**
             *See [`Pallet::set_desired_candidates`].
             */
            set_desired_candidates: TxDescriptor<Anonymize<Iadtsfv699cq8b>>;
            /**
             *See [`Pallet::set_candidacy_bond`].
             */
            set_candidacy_bond: TxDescriptor<Anonymize<Ialpmgmhr3gk5r>>;
            /**
             *See [`Pallet::register_as_candidate`].
             */
            register_as_candidate: TxDescriptor<undefined>;
            /**
             *See [`Pallet::leave_intent`].
             */
            leave_intent: TxDescriptor<undefined>;
            /**
             *See [`Pallet::add_invulnerable`].
             */
            add_invulnerable: TxDescriptor<Anonymize<I4cbvqmqadhrea>>;
            /**
             *See [`Pallet::remove_invulnerable`].
             */
            remove_invulnerable: TxDescriptor<Anonymize<I4cbvqmqadhrea>>;
        },
        {
            /**
             *New Invulnerables were set.
             */
            NewInvulnerables: PlainDescriptor<Anonymize<I39t01nnod9109>>;
            /**
             *A new Invulnerable was added.
             */
            InvulnerableAdded: PlainDescriptor<Anonymize<I6v8sm60vvkmk7>>;
            /**
             *An Invulnerable was removed.
             */
            InvulnerableRemoved: PlainDescriptor<Anonymize<I6v8sm60vvkmk7>>;
            /**
             *The number of desired candidates was set.
             */
            NewDesiredCandidates: PlainDescriptor<Anonymize<I1qmtmbe5so8r3>>;
            /**
             *The candidacy bond was set.
             */
            NewCandidacyBond: PlainDescriptor<Anonymize<Ih99m6ehpcar7>>;
            /**
             *A new candidate joined.
             */
            CandidateAdded: PlainDescriptor<Anonymize<Idgorhsbgdq2ap>>;
            /**
             *A candidate was removed.
             */
            CandidateRemoved: PlainDescriptor<Anonymize<I6v8sm60vvkmk7>>;
            /**
             *An account was unable to be added to the Invulnerables because they did not have keys
             *registered. Other Invulnerables may have been set.
             */
            InvalidInvulnerableSkipped: PlainDescriptor<Anonymize<I6v8sm60vvkmk7>>;
        },
        {
            /**
             *The pallet has too many candidates.
             */
            TooManyCandidates: PlainDescriptor<undefined>;
            /**
             *Leaving would result in too few candidates.
             */
            TooFewEligibleCollators: PlainDescriptor<undefined>;
            /**
             *Account is already a candidate.
             */
            AlreadyCandidate: PlainDescriptor<undefined>;
            /**
             *Account is not a candidate.
             */
            NotCandidate: PlainDescriptor<undefined>;
            /**
             *There are too many Invulnerables.
             */
            TooManyInvulnerables: PlainDescriptor<undefined>;
            /**
             *Account is already an Invulnerable.
             */
            AlreadyInvulnerable: PlainDescriptor<undefined>;
            /**
             *Account is not an Invulnerable.
             */
            NotInvulnerable: PlainDescriptor<undefined>;
            /**
             *Account has no associated validator ID.
             */
            NoAssociatedValidatorId: PlainDescriptor<undefined>;
            /**
             *Validator ID is not yet registered.
             */
            ValidatorNotRegistered: PlainDescriptor<undefined>;
        },
        {}
    ];
    Session: [
        {
            /**
             * The current set of validators.
             */
            Validators: StorageDescriptor<[], Anonymize<Ia2lhg7l2hilo3>, false>;
            /**
             * Current index of the session.
             */
            CurrentIndex: StorageDescriptor<[], number, false>;
            /**
             * True if the underlying economic identities or weighting behind the validators
             * has changed in the queued validator set.
             */
            QueuedChanged: StorageDescriptor<[], boolean, false>;
            /**
             * The queued keys for the next session. When the next session begins, these keys
             * will be used to determine the validator's session keys.
             */
            QueuedKeys: StorageDescriptor<[], Anonymize<I9our4clsjkim0>, false>;
            /**
             * Indices of disabled validators.
             *
             * The vec is always kept sorted so that we can find whether a given validator is
             * disabled using binary search. It gets cleared when `on_session_ending` returns
             * a new set of identities.
             */
            DisabledValidators: StorageDescriptor<[], Anonymize<Icgljjb6j82uhn>, false>;
            /**
             * The next session keys for a validator.
             */
            NextKeys: StorageDescriptor<[Key: SS58String], Binary, true>;
            /**
             * The owner of a key. The key is the `KeyTypeId` + the encoded key.
             */
            KeyOwner: StorageDescriptor<[Key: Anonymize<Idhk5e7nto8mrb>], SS58String, true>;
        },
        {
            /**
             *See [`Pallet::set_keys`].
             */
            set_keys: TxDescriptor<Anonymize<Ivojoo8sbcs0m>>;
            /**
             *See [`Pallet::purge_keys`].
             */
            purge_keys: TxDescriptor<undefined>;
        },
        {
            /**
             *New session has happened. Note that the argument is the session index, not the
             *block number as the type might suggest.
             */
            NewSession: PlainDescriptor<Anonymize<I2hq50pu2kdjpo>>;
        },
        {
            /**
             *Invalid ownership proof.
             */
            InvalidProof: PlainDescriptor<undefined>;
            /**
             *No associated validator ID for account.
             */
            NoAssociatedValidatorId: PlainDescriptor<undefined>;
            /**
             *Registered duplicate key.
             */
            DuplicatedKey: PlainDescriptor<undefined>;
            /**
             *No keys are associated with this account.
             */
            NoKeys: PlainDescriptor<undefined>;
            /**
             *Key setting account is not live, so it's impossible to associate keys.
             */
            NoAccount: PlainDescriptor<undefined>;
        },
        {}
    ];
    Aura: [
        {
            /**
             * The current authority set.
             */
            Authorities: StorageDescriptor<[], Anonymize<Idhnf6rtqoslea>, false>;
            /**
             * The current slot of this block.
             *
             * This will be set in `on_initialize`.
             */
            CurrentSlot: StorageDescriptor<[], bigint, false>;
        },
        {},
        {},
        {},
        {}
    ];
    AuraExt: [
        {
            /**
             * Serves as cache for the authorities.
             *
             * The authorities in AuRa are overwritten in `on_initialize` when we switch to a new session,
             * but we require the old authorities to verify the seal when validating a PoV. This will
             * always be updated to the latest AuRa authorities in `on_finalize`.
             */
            Authorities: StorageDescriptor<[], Anonymize<Idhnf6rtqoslea>, false>;
            /**
             * Current slot paired with a number of authored blocks.
             *
             * Updated on each block initialization.
             */
            SlotInfo: StorageDescriptor<[], Anonymize<I6cs1itejju2vv>, true>;
        },
        {},
        {},
        {},
        {}
    ];
    XcmpQueue: [
        {
            /**
             * Status of the inbound XCMP channels.
             */
            InboundXcmpStatus: StorageDescriptor<[], Anonymize<I1imu1nmuvsfjb>, false>;
            /**
             * Inbound aggregate XCMP messages. It can only be one per ParaId/block.
             */
            InboundXcmpMessages: StorageDescriptor<Anonymize<I5g2vv0ckl2m8b>, Binary, false>;
            /**
             * The non-empty XCMP channels in order of becoming non-empty, and the index of the first
             * and last outbound message. If the two indices are equal, then it indicates an empty
             * queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
             * than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
             * case of the need to send a high-priority signal message this block.
             * The bool is true if there is a signal message waiting to be sent.
             */
            OutboundXcmpStatus: StorageDescriptor<[], Anonymize<I1mse8p8gvh143>, false>;
            /**
             * The messages outbound in a given XCMP channel.
             */
            OutboundXcmpMessages: StorageDescriptor<Anonymize<I5g2vv0ckl2m8b>, Binary, false>;
            /**
             * Any signal messages waiting to be sent.
             */
            SignalMessages: StorageDescriptor<[Key: number], Binary, false>;
            /**
             * The configuration which controls the dynamics of the outbound queue.
             */
            QueueConfig: StorageDescriptor<[], Anonymize<Ie0cpusdmler9p>, false>;
            /**
             * The messages that exceeded max individual message weight budget.
             *
             * These message stay in this storage map until they are manually dispatched via
             * `service_overweight`.
             */
            Overweight: StorageDescriptor<[Key: bigint], Anonymize<I6o3vavku3vjsk>, true>;
            /**
             *Counter for the related counted storage map
             */
            CounterForOverweight: StorageDescriptor<[], number, false>;
            /**
             * The number of overweight messages ever recorded in `Overweight`. Also doubles as the next
             * available free overweight index.
             */
            OverweightCount: StorageDescriptor<[], bigint, false>;
            /**
             * Whether or not the XCMP queue is suspended from executing incoming XCMs or not.
             */
            QueueSuspended: StorageDescriptor<[], boolean, false>;
            /**
             * The factor to multiply the base delivery fee by.
             */
            DeliveryFeeFactor: StorageDescriptor<[Key: number], bigint, false>;
        },
        {
            /**
             *See [`Pallet::service_overweight`].
             */
            service_overweight: TxDescriptor<Anonymize<Iab1retd4gg4q1>>;
            /**
             *See [`Pallet::suspend_xcm_execution`].
             */
            suspend_xcm_execution: TxDescriptor<undefined>;
            /**
             *See [`Pallet::resume_xcm_execution`].
             */
            resume_xcm_execution: TxDescriptor<undefined>;
            /**
             *See [`Pallet::update_suspend_threshold`].
             */
            update_suspend_threshold: TxDescriptor<Anonymize<I3vh014cqgmrfd>>;
            /**
             *See [`Pallet::update_drop_threshold`].
             */
            update_drop_threshold: TxDescriptor<Anonymize<I3vh014cqgmrfd>>;
            /**
             *See [`Pallet::update_resume_threshold`].
             */
            update_resume_threshold: TxDescriptor<Anonymize<I3vh014cqgmrfd>>;
            /**
             *See [`Pallet::update_threshold_weight`].
             */
            update_threshold_weight: TxDescriptor<Anonymize<I2tni7rrb2buqm>>;
            /**
             *See [`Pallet::update_weight_restrict_decay`].
             */
            update_weight_restrict_decay: TxDescriptor<Anonymize<I2tni7rrb2buqm>>;
            /**
             *See [`Pallet::update_xcmp_max_individual_weight`].
             */
            update_xcmp_max_individual_weight: TxDescriptor<Anonymize<I2tni7rrb2buqm>>;
        },
        {
            /**
             *Some XCM was executed ok.
             */
            Success: PlainDescriptor<Anonymize<I7nj4acpodcef4>>;
            /**
             *Some XCM failed.
             */
            Fail: PlainDescriptor<Anonymize<I3n8ln6mqdfgb8>>;
            /**
             *Bad XCM version used.
             */
            BadVersion: PlainDescriptor<Anonymize<I2vo9trn8nhllu>>;
            /**
             *Bad XCM format used.
             */
            BadFormat: PlainDescriptor<Anonymize<I2vo9trn8nhllu>>;
            /**
             *An HRMP message was sent to a sibling parachain.
             */
            XcmpMessageSent: PlainDescriptor<Anonymize<I2vo9trn8nhllu>>;
            /**
             *An XCM exceeded the individual message weight budget.
             */
            OverweightEnqueued: PlainDescriptor<Anonymize<If8b64mo2bodj0>>;
            /**
             *An XCM from the overweight queue was executed with the given actual weight used.
             */
            OverweightServiced: PlainDescriptor<Anonymize<Icu5p58ltu1veo>>;
        },
        {
            /**
             *Failed to send XCM message.
             */
            FailedToSend: PlainDescriptor<undefined>;
            /**
             *Bad XCM origin.
             */
            BadXcmOrigin: PlainDescriptor<undefined>;
            /**
             *Bad XCM data.
             */
            BadXcm: PlainDescriptor<undefined>;
            /**
             *Bad overweight index.
             */
            BadOverweightIndex: PlainDescriptor<undefined>;
            /**
             *Provided weight is possibly not enough to execute the message.
             */
            WeightOverLimit: PlainDescriptor<undefined>;
        },
        {}
    ];
    PolkadotXcm: [
        {
            /**
             * The latest available query index.
             */
            QueryCounter: StorageDescriptor<[], bigint, false>;
            /**
             * The ongoing queries.
             */
            Queries: StorageDescriptor<[Key: bigint], XcmPalletQueryStatus, true>;
            /**
             * The existing asset traps.
             *
             * Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
             * times this pair has been trapped (usually just 1 if it exists at all).
             */
            AssetTraps: StorageDescriptor<[Key: Binary], number, false>;
            /**
             * Default version to encode XCM when latest version of destination is unknown. If `None`,
             * then the destinations whose XCM version is unknown are considered unreachable.
             */
            SafeXcmVersion: StorageDescriptor<[], number, true>;
            /**
             * The Latest versions that we know various locations support.
             */
            SupportedVersion: StorageDescriptor<Anonymize<I46ggargfeekkj>, number, true>;
            /**
             * All locations that we have requested version notifications from.
             */
            VersionNotifiers: StorageDescriptor<Anonymize<I46ggargfeekkj>, bigint, true>;
            /**
             * The target locations that are subscribed to our version changes, as well as the most recent
             * of our versions we informed them of.
             */
            VersionNotifyTargets: StorageDescriptor<Anonymize<I46ggargfeekkj>, Anonymize<I7vlvrrl2pnbgk>, true>;
            /**
             * Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
             * the `u32` counter is the number of times that a send to the destination has been attempted,
             * which is used as a prioritization.
             */
            VersionDiscoveryQueue: StorageDescriptor<[], Anonymize<Ibdqc639q3ofe0>, false>;
            /**
             * The current migration's stage, if any.
             */
            CurrentMigration: StorageDescriptor<[], XcmPalletVersionMigrationStage, true>;
            /**
             * Fungible assets which we know are locked on a remote chain.
             */
            RemoteLockedFungibles: StorageDescriptor<Anonymize<I61vn4ct4e1jjd>, Anonymize<Iaaeqd8puo95gs>, true>;
            /**
             * Fungible assets which we know are locked on this chain.
             */
            LockedFungibles: StorageDescriptor<[Key: SS58String], Anonymize<I64u7pb324isgb>, true>;
            /**
             * Global suspension state of the XCM executor.
             */
            XcmExecutionSuspended: StorageDescriptor<[], boolean, false>;
        },
        {
            /**
             *See [`Pallet::send`].
             */
            send: TxDescriptor<Anonymize<Icvpjofp09bmlh>>;
            /**
             *See [`Pallet::teleport_assets`].
             */
            teleport_assets: TxDescriptor<Anonymize<Ieeis6pj62kiu4>>;
            /**
             *See [`Pallet::reserve_transfer_assets`].
             */
            reserve_transfer_assets: TxDescriptor<Anonymize<Ieeis6pj62kiu4>>;
            /**
             *See [`Pallet::execute`].
             */
            execute: TxDescriptor<Anonymize<I53e0mdinhcvpm>>;
            /**
             *See [`Pallet::force_xcm_version`].
             */
            force_xcm_version: TxDescriptor<Anonymize<I732o5n04n5ohg>>;
            /**
             *See [`Pallet::force_default_xcm_version`].
             */
            force_default_xcm_version: TxDescriptor<Anonymize<Ic76kfh5ebqkpl>>;
            /**
             *See [`Pallet::force_subscribe_version_notify`].
             */
            force_subscribe_version_notify: TxDescriptor<Anonymize<I3pog27ittgi9g>>;
            /**
             *See [`Pallet::force_unsubscribe_version_notify`].
             */
            force_unsubscribe_version_notify: TxDescriptor<Anonymize<I3pog27ittgi9g>>;
            /**
             *See [`Pallet::limited_reserve_transfer_assets`].
             */
            limited_reserve_transfer_assets: TxDescriptor<Anonymize<Ifcceq8taolrca>>;
            /**
             *See [`Pallet::limited_teleport_assets`].
             */
            limited_teleport_assets: TxDescriptor<Anonymize<Ifcceq8taolrca>>;
            /**
             *See [`Pallet::force_suspension`].
             */
            force_suspension: TxDescriptor<Anonymize<Ibgm4rnf22lal1>>;
        },
        {
            /**
             *Execution of an XCM message was attempted.
             */
            Attempted: PlainDescriptor<Anonymize<I4e7dkr4hrus3u>>;
            /**
             *A XCM message was sent.
             */
            Sent: PlainDescriptor<Anonymize<Ia5b8kts5gt3p5>>;
            /**
             *Query response received which does not match a registered query. This may be because a
             *matching query was never registered, it may be because it is a duplicate response, or
             *because the query timed out.
             */
            UnexpectedResponse: PlainDescriptor<Anonymize<Ise9r0vrat2m6>>;
            /**
             *Query response has been received and is ready for taking with `take_response`. There is
             *no registered notification call.
             */
            ResponseReady: PlainDescriptor<Anonymize<I7kkbgm2llu2o3>>;
            /**
             *Query response has been received and query is removed. The registered notification has
             *been dispatched and executed successfully.
             */
            Notified: PlainDescriptor<Anonymize<I2uqmls7kcdnii>>;
            /**
             *Query response has been received and query is removed. The registered notification
             *could not be dispatched because the dispatch weight is greater than the maximum weight
             *originally budgeted by this runtime for the query result.
             */
            NotifyOverweight: PlainDescriptor<Anonymize<Idg69klialbkb8>>;
            /**
             *Query response has been received and query is removed. There was a general error with
             *dispatching the notification call.
             */
            NotifyDispatchError: PlainDescriptor<Anonymize<I2uqmls7kcdnii>>;
            /**
             *Query response has been received and query is removed. The dispatch was unable to be
             *decoded into a `Call`; this might be due to dispatch function having a signature which
             *is not `(origin, QueryId, Response)`.
             */
            NotifyDecodeFailed: PlainDescriptor<Anonymize<I2uqmls7kcdnii>>;
            /**
             *Expected query response has been received but the origin location of the response does
             *not match that expected. The query remains registered for a later, valid, response to
             *be received and acted upon.
             */
            InvalidResponder: PlainDescriptor<Anonymize<I9j133okge3c2>>;
            /**
             *Expected query response has been received but the expected origin location placed in
             *storage by this runtime previously cannot be decoded. The query remains registered.
             *
             *This is unexpected (since a location placed in storage in a previously executing
             *runtime should be readable prior to query timeout) and dangerous since the possibly
             *valid response will be dropped. Manual governance intervention is probably going to be
             *needed.
             */
            InvalidResponderVersion: PlainDescriptor<Anonymize<Ise9r0vrat2m6>>;
            /**
             *Received query response has been read and removed.
             */
            ResponseTaken: PlainDescriptor<Anonymize<I30pg328m00nr3>>;
            /**
             *Some assets have been placed in an asset trap.
             */
            AssetsTrapped: PlainDescriptor<Anonymize<I5qm1bvb2j3ap2>>;
            /**
             *An XCM version change notification message has been attempted to be sent.
             *
             *The cost of sending it (borne by the chain) is included.
             */
            VersionChangeNotified: PlainDescriptor<Anonymize<I95aqmsd6gjmqs>>;
            /**
             *The supported version of a location has been changed. This might be through an
             *automatic notification or a manual intervention.
             */
            SupportedVersionChanged: PlainDescriptor<Anonymize<I732o5n04n5ohg>>;
            /**
             *A given location which had a version change subscription was dropped owing to an error
             *sending the notification to it.
             */
            NotifyTargetSendFail: PlainDescriptor<Anonymize<Iarlf7ddo81fm5>>;
            /**
             *A given location which had a version change subscription was dropped owing to an error
             *migrating the location to our new XCM format.
             */
            NotifyTargetMigrationFail: PlainDescriptor<Anonymize<Ie9bjgclf7vho0>>;
            /**
             *Expected query response has been received but the expected querier location placed in
             *storage by this runtime previously cannot be decoded. The query remains registered.
             *
             *This is unexpected (since a location placed in storage in a previously executing
             *runtime should be readable prior to query timeout) and dangerous since the possibly
             *valid response will be dropped. Manual governance intervention is probably going to be
             *needed.
             */
            InvalidQuerierVersion: PlainDescriptor<Anonymize<Ise9r0vrat2m6>>;
            /**
             *Expected query response has been received but the querier location of the response does
             *not match the expected. The query remains registered for a later, valid, response to
             *be received and acted upon.
             */
            InvalidQuerier: PlainDescriptor<Anonymize<I7dm0nb8u3g2hv>>;
            /**
             *A remote has requested XCM version change notification from us and we have honored it.
             *A version information message is sent to them and its cost is included.
             */
            VersionNotifyStarted: PlainDescriptor<Anonymize<I5pnf8l8c1nkfk>>;
            /**
             *We have requested that a remote chain send us XCM version change notifications.
             */
            VersionNotifyRequested: PlainDescriptor<Anonymize<I5pnf8l8c1nkfk>>;
            /**
             *We have requested that a remote chain stops sending us XCM version change
             *notifications.
             */
            VersionNotifyUnrequested: PlainDescriptor<Anonymize<I5pnf8l8c1nkfk>>;
            /**
             *Fees were paid from a location for an operation (often for using `SendXcm`).
             */
            FeesPaid: PlainDescriptor<Anonymize<Ibknqphki4flb3>>;
            /**
             *Some assets have been claimed from an asset trap
             */
            AssetsClaimed: PlainDescriptor<Anonymize<I5qm1bvb2j3ap2>>;
        },
        {
            /**
             *The desired destination was unreachable, generally because there is a no way of routing
             *to it.
             */
            Unreachable: PlainDescriptor<undefined>;
            /**
             *There was some other issue (i.e. not to do with routing) in sending the message.
             *Perhaps a lack of space for buffering the message.
             */
            SendFailure: PlainDescriptor<undefined>;
            /**
             *The message execution fails the filter.
             */
            Filtered: PlainDescriptor<undefined>;
            /**
             *The message's weight could not be determined.
             */
            UnweighableMessage: PlainDescriptor<undefined>;
            /**
             *The destination `MultiLocation` provided cannot be inverted.
             */
            DestinationNotInvertible: PlainDescriptor<undefined>;
            /**
             *The assets to be sent are empty.
             */
            Empty: PlainDescriptor<undefined>;
            /**
             *Could not re-anchor the assets to declare the fees for the destination chain.
             */
            CannotReanchor: PlainDescriptor<undefined>;
            /**
             *Too many assets have been attempted for transfer.
             */
            TooManyAssets: PlainDescriptor<undefined>;
            /**
             *Origin is invalid for sending.
             */
            InvalidOrigin: PlainDescriptor<undefined>;
            /**
             *The version of the `Versioned` value used is not able to be interpreted.
             */
            BadVersion: PlainDescriptor<undefined>;
            /**
             *The given location could not be used (e.g. because it cannot be expressed in the
             *desired version of XCM).
             */
            BadLocation: PlainDescriptor<undefined>;
            /**
             *The referenced subscription could not be found.
             */
            NoSubscription: PlainDescriptor<undefined>;
            /**
             *The location is invalid since it already has a subscription from us.
             */
            AlreadySubscribed: PlainDescriptor<undefined>;
            /**
             *Invalid asset for the operation.
             */
            InvalidAsset: PlainDescriptor<undefined>;
            /**
             *The owner does not own (all) of the asset that they wish to do the operation on.
             */
            LowBalance: PlainDescriptor<undefined>;
            /**
             *The asset owner has too many locks on the asset.
             */
            TooManyLocks: PlainDescriptor<undefined>;
            /**
             *The given account is not an identifiable sovereign account for any location.
             */
            AccountNotSovereign: PlainDescriptor<undefined>;
            /**
             *The operation required fees to be paid which the initiator could not meet.
             */
            FeesNotMet: PlainDescriptor<undefined>;
            /**
             *A remote lock with the corresponding data could not be found.
             */
            LockNotFound: PlainDescriptor<undefined>;
            /**
             *The unlock operation cannot succeed because there are still consumers of the lock.
             */
            InUse: PlainDescriptor<undefined>;
        },
        {}
    ];
    CumulusXcm: [
        {},
        {},
        {
            /**
             *Downward message is invalid XCM.
             *\[ id \]
             */
            InvalidFormat: PlainDescriptor<Binary>;
            /**
             *Downward message is unsupported version of XCM.
             *\[ id \]
             */
            UnsupportedVersion: PlainDescriptor<Binary>;
            /**
             *Downward message executed with the given outcome.
             *\[ id, outcome \]
             */
            ExecutedDownward: PlainDescriptor<Anonymize<Id0ii3t0e6fgob>>;
        },
        {},
        {}
    ];
    DmpQueue: [
        {
            /**
             * The configuration.
             */
            Configuration: StorageDescriptor<[], Anonymize<I4q39t5hn830vp>, false>;
            /**
             * The page index.
             */
            PageIndex: StorageDescriptor<[], Anonymize<Iepvrcsdbii2qt>, false>;
            /**
             * The queue pages.
             */
            Pages: StorageDescriptor<[Key: number], Anonymize<I82vjkits3vc46>, false>;
            /**
             * The overweight messages.
             */
            Overweight: StorageDescriptor<[Key: bigint], Anonymize<Icp9h5ma02v1rg>, true>;
            /**
             *Counter for the related counted storage map
             */
            CounterForOverweight: StorageDescriptor<[], number, false>;
        },
        {
            /**
             *See [`Pallet::service_overweight`].
             */
            service_overweight: TxDescriptor<Anonymize<Iab1retd4gg4q1>>;
        },
        {
            /**
             *Downward message is invalid XCM.
             */
            InvalidFormat: PlainDescriptor<Anonymize<I2vo9trn8nhllu>>;
            /**
             *Downward message is unsupported version of XCM.
             */
            UnsupportedVersion: PlainDescriptor<Anonymize<I2vo9trn8nhllu>>;
            /**
             *Downward message executed with the given outcome.
             */
            ExecutedDownward: PlainDescriptor<Anonymize<I6mr530l14uapg>>;
            /**
             *The weight limit for handling downward messages was reached.
             */
            WeightExhausted: PlainDescriptor<Anonymize<I2ds5dc604t7si>>;
            /**
             *Downward message is overweight and was placed in the overweight queue.
             */
            OverweightEnqueued: PlainDescriptor<Anonymize<Idqsknek3bsc0s>>;
            /**
             *Downward message from the overweight queue was executed.
             */
            OverweightServiced: PlainDescriptor<Anonymize<Ise9gq7rqlnvm>>;
            /**
             *The maximum number of downward messages was reached.
             */
            MaxMessagesExhausted: PlainDescriptor<Anonymize<I2vo9trn8nhllu>>;
        },
        {
            /**
             *The message index given is unknown.
             */
            Unknown: PlainDescriptor<undefined>;
            /**
             *The amount of weight given is possibly not enough for executing the message.
             */
            OverLimit: PlainDescriptor<undefined>;
        },
        {}
    ];
    Utility: [
        {},
        {
            /**
             *See [`Pallet::batch`].
             */
            batch: TxDescriptor<Anonymize<Id0f4f8p846e4o>>;
            /**
             *See [`Pallet::as_derivative`].
             */
            as_derivative: TxDescriptor<Anonymize<Idkn325fta6i3i>>;
            /**
             *See [`Pallet::batch_all`].
             */
            batch_all: TxDescriptor<Anonymize<Id0f4f8p846e4o>>;
            /**
             *See [`Pallet::dispatch_as`].
             */
            dispatch_as: TxDescriptor<Anonymize<Iq7iccc2hfumf>>;
            /**
             *See [`Pallet::force_batch`].
             */
            force_batch: TxDescriptor<Anonymize<Id0f4f8p846e4o>>;
            /**
             *See [`Pallet::with_weight`].
             */
            with_weight: TxDescriptor<Anonymize<I1654abd13olpl>>;
        },
        {
            /**
             *Batch of dispatches did not complete fully. Index of first failing dispatch given, as
             *well as the error.
             */
            BatchInterrupted: PlainDescriptor<Anonymize<I6tn8e5lqr339o>>;
            /**
             *Batch of dispatches completed fully with no error.
             */
            BatchCompleted: PlainDescriptor<undefined>;
            /**
             *Batch of dispatches completed but has errors.
             */
            BatchCompletedWithErrors: PlainDescriptor<undefined>;
            /**
             *A single item within a Batch of dispatches has completed with no error.
             */
            ItemCompleted: PlainDescriptor<undefined>;
            /**
             *A single item within a Batch of dispatches has completed with error.
             */
            ItemFailed: PlainDescriptor<Anonymize<I11lb9o37qkk4f>>;
            /**
             *A call was dispatched.
             */
            DispatchedAs: PlainDescriptor<Anonymize<Ie5i8qqljk3tjb>>;
        },
        {
            /**
             *Too many calls batched.
             */
            TooManyCalls: PlainDescriptor<undefined>;
        },
        {
            /**
             * The limit on the number of batched calls.
             */
            batched_calls_limit: PlainDescriptor<number>;
        }
    ];
    Multisig: [
        {
            /**
             * The set of open multisig operations.
             */
            Multisigs: StorageDescriptor<Anonymize<I73gble6tmb52f>, Anonymize<Iag146hmjgqfgj>, true>;
        },
        {
            /**
             *See [`Pallet::as_multi_threshold_1`].
             */
            as_multi_threshold_1: TxDescriptor<Anonymize<Idbktfo7cbj1un>>;
            /**
             *See [`Pallet::as_multi`].
             */
            as_multi: TxDescriptor<Anonymize<I1nc4131phq95n>>;
            /**
             *See [`Pallet::approve_as_multi`].
             */
            approve_as_multi: TxDescriptor<Anonymize<I349bg0i7n8ohu>>;
            /**
             *See [`Pallet::cancel_as_multi`].
             */
            cancel_as_multi: TxDescriptor<Anonymize<I8plicv234mqe5>>;
        },
        {
            /**
             *A new multisig operation has begun.
             */
            NewMultisig: PlainDescriptor<Anonymize<Ibvv58de7m7rsi>>;
            /**
             *A multisig operation has been approved by someone.
             */
            MultisigApproval: PlainDescriptor<Anonymize<I4uo2dg1jvbdtg>>;
            /**
             *A multisig operation has been executed.
             */
            MultisigExecuted: PlainDescriptor<Anonymize<Ifbo6gts4g8u33>>;
            /**
             *A multisig operation has been cancelled.
             */
            MultisigCancelled: PlainDescriptor<Anonymize<I82jp3a00f0f8k>>;
        },
        {
            /**
             *Threshold must be 2 or greater.
             */
            MinimumThreshold: PlainDescriptor<undefined>;
            /**
             *Call is already approved by this signatory.
             */
            AlreadyApproved: PlainDescriptor<undefined>;
            /**
             *Call doesn't need any (more) approvals.
             */
            NoApprovalsNeeded: PlainDescriptor<undefined>;
            /**
             *There are too few signatories in the list.
             */
            TooFewSignatories: PlainDescriptor<undefined>;
            /**
             *There are too many signatories in the list.
             */
            TooManySignatories: PlainDescriptor<undefined>;
            /**
             *The signatories were provided out of order; they should be ordered.
             */
            SignatoriesOutOfOrder: PlainDescriptor<undefined>;
            /**
             *The sender was contained in the other signatories; it shouldn't be.
             */
            SenderInSignatories: PlainDescriptor<undefined>;
            /**
             *Multisig operation not found when attempting to cancel.
             */
            NotFound: PlainDescriptor<undefined>;
            /**
             *Only the account that originally created the multisig is able to cancel it.
             */
            NotOwner: PlainDescriptor<undefined>;
            /**
             *No timepoint was given, yet the multisig operation is already underway.
             */
            NoTimepoint: PlainDescriptor<undefined>;
            /**
             *A different timepoint was given to the multisig operation that is underway.
             */
            WrongTimepoint: PlainDescriptor<undefined>;
            /**
             *A timepoint was given, yet no multisig operation is underway.
             */
            UnexpectedTimepoint: PlainDescriptor<undefined>;
            /**
             *The maximum weight information provided was too low.
             */
            MaxWeightTooLow: PlainDescriptor<undefined>;
            /**
             *The data to be stored is already stored.
             */
            AlreadyStored: PlainDescriptor<undefined>;
        },
        {
            /**
             * The base amount of currency needed to reserve for creating a multisig execution or to
             * store a dispatch call for later.
             *
             * This is held for an additional storage item whose value size is
             * `4 + sizeof((BlockNumber, Balance, AccountId))` bytes and whose key size is
             * `32 + sizeof(AccountId)` bytes.
             */
            DepositBase: PlainDescriptor<bigint>;
            /**
             * The amount of currency needed per unit threshold when creating a multisig execution.
             *
             * This is held for adding 32 bytes more into a pre-existing storage value.
             */
            DepositFactor: PlainDescriptor<bigint>;
            /**
             * The maximum amount of signatories allowed in the multisig.
             */
            MaxSignatories: PlainDescriptor<number>;
        }
    ];
    Proxy: [
        {
            /**
             * The set of account proxies. Maps the account which has delegated to the accounts
             * which are being delegated to, together with the amount held on deposit.
             */
            Proxies: StorageDescriptor<[Key: SS58String], Anonymize<I3q5rcchchf9rk>, false>;
            /**
             * The announcements made by the proxy (key).
             */
            Announcements: StorageDescriptor<[Key: SS58String], Anonymize<I3tjio59962rg2>, false>;
        },
        {
            /**
             *See [`Pallet::proxy`].
             */
            proxy: TxDescriptor<Anonymize<I8mlu7201qva4e>>;
            /**
             *See [`Pallet::add_proxy`].
             */
            add_proxy: TxDescriptor<Anonymize<I490uvap9onp3g>>;
            /**
             *See [`Pallet::remove_proxy`].
             */
            remove_proxy: TxDescriptor<Anonymize<I490uvap9onp3g>>;
            /**
             *See [`Pallet::remove_proxies`].
             */
            remove_proxies: TxDescriptor<undefined>;
            /**
             *See [`Pallet::create_pure`].
             */
            create_pure: TxDescriptor<Anonymize<I8v053pd8im1d3>>;
            /**
             *See [`Pallet::kill_pure`].
             */
            kill_pure: TxDescriptor<Anonymize<Ibnon1qvc1ro8>>;
            /**
             *See [`Pallet::announce`].
             */
            announce: TxDescriptor<Anonymize<Id3bpmvju2iqi5>>;
            /**
             *See [`Pallet::remove_announcement`].
             */
            remove_announcement: TxDescriptor<Anonymize<Id3bpmvju2iqi5>>;
            /**
             *See [`Pallet::reject_announcement`].
             */
            reject_announcement: TxDescriptor<Anonymize<Ietdab69eu3c4e>>;
            /**
             *See [`Pallet::proxy_announced`].
             */
            proxy_announced: TxDescriptor<Anonymize<I6ckidq7jkqmnt>>;
        },
        {
            /**
             *A proxy was executed correctly, with the given.
             */
            ProxyExecuted: PlainDescriptor<Anonymize<Ie5i8qqljk3tjb>>;
            /**
             *A pure account has been created by new proxy with given
             *disambiguation index and proxy type.
             */
            PureCreated: PlainDescriptor<Anonymize<I29pqkr7dgifjk>>;
            /**
             *An announcement was placed to make a call in the future.
             */
            Announced: PlainDescriptor<Anonymize<Idbjbboh0q507r>>;
            /**
             *A proxy was added.
             */
            ProxyAdded: PlainDescriptor<Anonymize<I88knav8fvi1c3>>;
            /**
             *A proxy was removed.
             */
            ProxyRemoved: PlainDescriptor<Anonymize<I88knav8fvi1c3>>;
        },
        {
            /**
             *There are too many proxies registered or too many announcements pending.
             */
            TooMany: PlainDescriptor<undefined>;
            /**
             *Proxy registration not found.
             */
            NotFound: PlainDescriptor<undefined>;
            /**
             *Sender is not a proxy of the account to be proxied.
             */
            NotProxy: PlainDescriptor<undefined>;
            /**
             *A call which is incompatible with the proxy type's filter was attempted.
             */
            Unproxyable: PlainDescriptor<undefined>;
            /**
             *Account is already a proxy.
             */
            Duplicate: PlainDescriptor<undefined>;
            /**
             *Call may not be made by proxy because it may escalate its privileges.
             */
            NoPermission: PlainDescriptor<undefined>;
            /**
             *Announcement, if made at all, was made too recently.
             */
            Unannounced: PlainDescriptor<undefined>;
            /**
             *Cannot add self as proxy.
             */
            NoSelfProxy: PlainDescriptor<undefined>;
        },
        {
            /**
             * The base amount of currency needed to reserve for creating a proxy.
             *
             * This is held for an additional storage item whose value size is
             * `sizeof(Balance)` bytes and whose key size is `sizeof(AccountId)` bytes.
             */
            ProxyDepositBase: PlainDescriptor<bigint>;
            /**
             * The amount of currency needed per proxy added.
             *
             * This is held for adding 32 bytes plus an instance of `ProxyType` more into a
             * pre-existing storage value. Thus, when configuring `ProxyDepositFactor` one should take
             * into account `32 + proxy_type.encode().len()` bytes of data.
             */
            ProxyDepositFactor: PlainDescriptor<bigint>;
            /**
             * The maximum amount of proxies allowed for a single account.
             */
            MaxProxies: PlainDescriptor<number>;
            /**
             * The maximum amount of time-delayed announcements that are allowed to be pending.
             */
            MaxPending: PlainDescriptor<number>;
            /**
             * The base amount of currency needed to reserve for creating an announcement.
             *
             * This is held when a new storage item holding a `Balance` is created (typically 16
             * bytes).
             */
            AnnouncementDepositBase: PlainDescriptor<bigint>;
            /**
             * The amount of currency needed per announcement made.
             *
             * This is held for adding an `AccountId`, `Hash` and `BlockNumber` (typically 68 bytes)
             * into a pre-existing storage value.
             */
            AnnouncementDepositFactor: PlainDescriptor<bigint>;
        }
    ];
    Preimage: [
        {
            /**
             * The request status of a given hash.
             */
            StatusFor: StorageDescriptor<[Key: Binary], PreimageRequestStatus, true>;
            /**
             * The request status of a given hash.
             */
            RequestStatusFor: StorageDescriptor<[Key: Binary], PreimageRequestStatus1, true>;
            /**
            
             */
            PreimageFor: StorageDescriptor<[Key: Anonymize<I64gm4hrq7urum>], Binary, true>;
        },
        {
            /**
             *See [`Pallet::note_preimage`].
             */
            note_preimage: TxDescriptor<Anonymize<I82nfqfkd48n10>>;
            /**
             *See [`Pallet::unnote_preimage`].
             */
            unnote_preimage: TxDescriptor<Anonymize<Id9d48vaes3c53>>;
            /**
             *See [`Pallet::request_preimage`].
             */
            request_preimage: TxDescriptor<Anonymize<Id9d48vaes3c53>>;
            /**
             *See [`Pallet::unrequest_preimage`].
             */
            unrequest_preimage: TxDescriptor<Anonymize<Id9d48vaes3c53>>;
            /**
             *See [`Pallet::ensure_updated`].
             */
            ensure_updated: TxDescriptor<Anonymize<Idaor7tajt0l3k>>;
        },
        {
            /**
             *A preimage has been noted.
             */
            Noted: PlainDescriptor<Anonymize<Id9d48vaes3c53>>;
            /**
             *A preimage has been requested.
             */
            Requested: PlainDescriptor<Anonymize<Id9d48vaes3c53>>;
            /**
             *A preimage has ben cleared.
             */
            Cleared: PlainDescriptor<Anonymize<Id9d48vaes3c53>>;
        },
        {
            /**
             *Preimage is too large to store on-chain.
             */
            TooBig: PlainDescriptor<undefined>;
            /**
             *Preimage has already been noted on-chain.
             */
            AlreadyNoted: PlainDescriptor<undefined>;
            /**
             *The user is not authorized to perform this action.
             */
            NotAuthorized: PlainDescriptor<undefined>;
            /**
             *The preimage cannot be removed since it has not yet been noted.
             */
            NotNoted: PlainDescriptor<undefined>;
            /**
             *A preimage may not be removed when there are outstanding requests.
             */
            Requested: PlainDescriptor<undefined>;
            /**
             *The preimage request cannot be removed since no outstanding requests exist.
             */
            NotRequested: PlainDescriptor<undefined>;
            /**
             *More than `MAX_HASH_UPGRADE_BULK_COUNT` hashes were requested to be upgraded at once.
             */
            TooMany: PlainDescriptor<undefined>;
            /**
             *Too few hashes were requested to be upgraded (i.e. zero).
             */
            TooFew: PlainDescriptor<undefined>;
        },
        {}
    ];
    Scheduler: [
        {
            /**
            
             */
            IncompleteSince: StorageDescriptor<[], number, true>;
            /**
             * Items to be executed, indexed by the block number that they should be executed on.
             */
            Agenda: StorageDescriptor<[Key: number], Anonymize<I6peuma3nc745n>, false>;
            /**
             * Lookup from a name to the block number and index of the task.
             *
             * For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
             * identities.
             */
            Lookup: StorageDescriptor<[Key: Binary], Anonymize<I5g2vv0ckl2m8b>, true>;
        },
        {
            /**
             *See [`Pallet::schedule`].
             */
            schedule: TxDescriptor<Anonymize<I1qkfnm7irt5un>>;
            /**
             *See [`Pallet::cancel`].
             */
            cancel: TxDescriptor<Anonymize<I5n4sebgkfr760>>;
            /**
             *See [`Pallet::schedule_named`].
             */
            schedule_named: TxDescriptor<Anonymize<Icu99suj4go17>>;
            /**
             *See [`Pallet::cancel_named`].
             */
            cancel_named: TxDescriptor<Anonymize<Idsdstalforb09>>;
            /**
             *See [`Pallet::schedule_after`].
             */
            schedule_after: TxDescriptor<Anonymize<I6eugra8pivgrs>>;
            /**
             *See [`Pallet::schedule_named_after`].
             */
            schedule_named_after: TxDescriptor<Anonymize<I11o2rsm65pn9o>>;
        },
        {
            /**
             *Scheduled some task.
             */
            Scheduled: PlainDescriptor<Anonymize<I5n4sebgkfr760>>;
            /**
             *Canceled some task.
             */
            Canceled: PlainDescriptor<Anonymize<I5n4sebgkfr760>>;
            /**
             *Dispatched some task.
             */
            Dispatched: PlainDescriptor<Anonymize<Idv8erd9m7jvse>>;
            /**
             *The call for the provided hash was not found so the task has been aborted.
             */
            CallUnavailable: PlainDescriptor<Anonymize<Ibkv7dijodoblp>>;
            /**
             *The given task was unable to be renewed since the agenda is full at that block.
             */
            PeriodicFailed: PlainDescriptor<Anonymize<Ibkv7dijodoblp>>;
            /**
             *The given task can never be executed since it is overweight.
             */
            PermanentlyOverweight: PlainDescriptor<Anonymize<Ibkv7dijodoblp>>;
        },
        {
            /**
             *Failed to schedule a call
             */
            FailedToSchedule: PlainDescriptor<undefined>;
            /**
             *Cannot find the scheduled call.
             */
            NotFound: PlainDescriptor<undefined>;
            /**
             *Given target block number is in the past.
             */
            TargetBlockNumberInPast: PlainDescriptor<undefined>;
            /**
             *Reschedule failed because it does not change scheduled time.
             */
            RescheduleNoChange: PlainDescriptor<undefined>;
            /**
             *Attempt to use a non-named function on a named task.
             */
            Named: PlainDescriptor<undefined>;
        },
        {
            /**
             * The maximum weight that may be scheduled per block for any dispatchables.
             */
            MaximumWeight: PlainDescriptor<Anonymize<I4q39t5hn830vp>>;
            /**
             * The maximum number of scheduled calls in the queue for a single block.
             *
             * NOTE:
             * + Dependent pallets' benchmarks might require a higher limit for the setting. Set a
             * higher limit under `runtime-benchmarks` feature.
             */
            MaxScheduledPerBlock: PlainDescriptor<number>;
        }
    ];
    AssetRate: [
        {
            /**
             * Maps an asset to its fixed point representation in the native balance.
             *
             * E.g. `native_amount = asset_amount * ConversionRateToNative::<T>::get(asset_kind)`
             */
            ConversionRateToNative: StorageDescriptor<[Key: Anonymize<I32r9skkupsthv>], bigint, true>;
        },
        {
            /**
             *See [`Pallet::create`].
             */
            create: TxDescriptor<Anonymize<I16soggnee6qrb>>;
            /**
             *See [`Pallet::update`].
             */
            update: TxDescriptor<Anonymize<I16soggnee6qrb>>;
            /**
             *See [`Pallet::remove`].
             */
            remove: TxDescriptor<Anonymize<Ifvnf1s3g2lg8u>>;
        },
        {
            /**
            
             */
            AssetRateCreated: PlainDescriptor<Anonymize<I16soggnee6qrb>>;
            /**
            
             */
            AssetRateRemoved: PlainDescriptor<Anonymize<Ifvnf1s3g2lg8u>>;
            /**
            
             */
            AssetRateUpdated: PlainDescriptor<Anonymize<Iedcb9b2srjfp0>>;
        },
        {
            /**
             *The given asset ID is unknown.
             */
            UnknownAssetKind: PlainDescriptor<undefined>;
            /**
             *The given asset ID already has an assigned conversion rate and cannot be re-created.
             */
            AlreadyExists: PlainDescriptor<undefined>;
        },
        {}
    ];
    Alliance: [
        {
            /**
             * The IPFS CID of the alliance rule.
             * Fellows can propose a new rule with a super-majority.
             */
            Rule: StorageDescriptor<[], Anonymize<I2h4fuon2pnvcd>, true>;
            /**
             * The current IPFS CIDs of any announcements.
             */
            Announcements: StorageDescriptor<[], Anonymize<I4495bvn4ld72n>, false>;
            /**
             * Maps members to their candidacy deposit.
             */
            DepositOf: StorageDescriptor<[Key: SS58String], bigint, true>;
            /**
             * Maps member type to members of each type.
             */
            Members: StorageDescriptor<[Key: Anonymize<I4jb9st4l6tk5c>], Anonymize<Ia2lhg7l2hilo3>, false>;
            /**
             * A set of members who gave a retirement notice. They can retire after the end of retirement
             * period stored as a future block number.
             */
            RetiringMembers: StorageDescriptor<[Key: SS58String], number, true>;
            /**
             * The current list of accounts deemed unscrupulous. These accounts non grata cannot submit
             * candidacy.
             */
            UnscrupulousAccounts: StorageDescriptor<[], Anonymize<Ia2lhg7l2hilo3>, false>;
            /**
             * The current list of websites deemed unscrupulous.
             */
            UnscrupulousWebsites: StorageDescriptor<[], Anonymize<Itom7fk49o0c9>, false>;
        },
        {
            /**
             *See [`Pallet::propose`].
             */
            propose: TxDescriptor<Anonymize<Iklhae5b9b3k8>>;
            /**
             *See [`Pallet::vote`].
             */
            vote: TxDescriptor<Anonymize<I4ncel23eptqai>>;
            /**
             *See [`Pallet::init_members`].
             */
            init_members: TxDescriptor<Anonymize<Ia61kag3grdevk>>;
            /**
             *See [`Pallet::disband`].
             */
            disband: TxDescriptor<Anonymize<Icq0crsj7vrl4j>>;
            /**
             *See [`Pallet::set_rule`].
             */
            set_rule: TxDescriptor<Anonymize<I2dgasao7pteq7>>;
            /**
             *See [`Pallet::announce`].
             */
            announce: TxDescriptor<Anonymize<I56f2tlouivnqg>>;
            /**
             *See [`Pallet::remove_announcement`].
             */
            remove_announcement: TxDescriptor<Anonymize<I56f2tlouivnqg>>;
            /**
             *See [`Pallet::join_alliance`].
             */
            join_alliance: TxDescriptor<undefined>;
            /**
             *See [`Pallet::nominate_ally`].
             */
            nominate_ally: TxDescriptor<Anonymize<I2nmm2fprtp4kl>>;
            /**
             *See [`Pallet::elevate_ally`].
             */
            elevate_ally: TxDescriptor<Anonymize<I5vno9afhrn994>>;
            /**
             *See [`Pallet::give_retirement_notice`].
             */
            give_retirement_notice: TxDescriptor<undefined>;
            /**
             *See [`Pallet::retire`].
             */
            retire: TxDescriptor<undefined>;
            /**
             *See [`Pallet::kick_member`].
             */
            kick_member: TxDescriptor<Anonymize<I2nmm2fprtp4kl>>;
            /**
             *See [`Pallet::add_unscrupulous_items`].
             */
            add_unscrupulous_items: TxDescriptor<Anonymize<I2t3hu6k5vesjh>>;
            /**
             *See [`Pallet::remove_unscrupulous_items`].
             */
            remove_unscrupulous_items: TxDescriptor<Anonymize<I2t3hu6k5vesjh>>;
            /**
             *See [`Pallet::close`].
             */
            close: TxDescriptor<Anonymize<Ic3aqnecvctqmc>>;
            /**
             *See [`Pallet::abdicate_fellow_status`].
             */
            abdicate_fellow_status: TxDescriptor<undefined>;
        },
        {
            /**
             *A new rule has been set.
             */
            NewRuleSet: PlainDescriptor<Anonymize<I2dgasao7pteq7>>;
            /**
             *A new announcement has been proposed.
             */
            Announced: PlainDescriptor<Anonymize<I56f2tlouivnqg>>;
            /**
             *An on-chain announcement has been removed.
             */
            AnnouncementRemoved: PlainDescriptor<Anonymize<I56f2tlouivnqg>>;
            /**
             *Some accounts have been initialized as members (fellows/allies).
             */
            MembersInitialized: PlainDescriptor<Anonymize<Ia61kag3grdevk>>;
            /**
             *An account has been added as an Ally and reserved its deposit.
             */
            NewAllyJoined: PlainDescriptor<Anonymize<I79vua51vqq0mc>>;
            /**
             *An ally has been elevated to Fellow.
             */
            AllyElevated: PlainDescriptor<Anonymize<I3trq1j79d9t1e>>;
            /**
             *A member gave retirement notice and their retirement period started.
             */
            MemberRetirementPeriodStarted: PlainDescriptor<Anonymize<Ie3gphha4ejh40>>;
            /**
             *A member has retired with its deposit unreserved.
             */
            MemberRetired: PlainDescriptor<Anonymize<Iafhd8kv029rqj>>;
            /**
             *A member has been kicked out with its deposit slashed.
             */
            MemberKicked: PlainDescriptor<Anonymize<I2mcnoj31i9be1>>;
            /**
             *Accounts or websites have been added into the list of unscrupulous items.
             */
            UnscrupulousItemAdded: PlainDescriptor<Anonymize<I2t3hu6k5vesjh>>;
            /**
             *Accounts or websites have been removed from the list of unscrupulous items.
             */
            UnscrupulousItemRemoved: PlainDescriptor<Anonymize<I2t3hu6k5vesjh>>;
            /**
             *Alliance disbanded. Includes number deleted members and unreserved deposits.
             */
            AllianceDisbanded: PlainDescriptor<Anonymize<I9dapsurd7u7ga>>;
            /**
             *A Fellow abdicated their voting rights. They are now an Ally.
             */
            FellowAbdicated: PlainDescriptor<Anonymize<I8uij7nmvtb96e>>;
        },
        {
            /**
             *The Alliance has not been initialized yet, therefore accounts cannot join it.
             */
            AllianceNotYetInitialized: PlainDescriptor<undefined>;
            /**
             *The Alliance has been initialized, therefore cannot be initialized again.
             */
            AllianceAlreadyInitialized: PlainDescriptor<undefined>;
            /**
             *Account is already a member.
             */
            AlreadyMember: PlainDescriptor<undefined>;
            /**
             *Account is not a member.
             */
            NotMember: PlainDescriptor<undefined>;
            /**
             *Account is not an ally.
             */
            NotAlly: PlainDescriptor<undefined>;
            /**
             *Account does not have voting rights.
             */
            NoVotingRights: PlainDescriptor<undefined>;
            /**
             *Account is already an elevated (fellow) member.
             */
            AlreadyElevated: PlainDescriptor<undefined>;
            /**
             *Item is already listed as unscrupulous.
             */
            AlreadyUnscrupulous: PlainDescriptor<undefined>;
            /**
             *Account has been deemed unscrupulous by the Alliance and is not welcome to join or be
             *nominated.
             */
            AccountNonGrata: PlainDescriptor<undefined>;
            /**
             *Item has not been deemed unscrupulous.
             */
            NotListedAsUnscrupulous: PlainDescriptor<undefined>;
            /**
             *The number of unscrupulous items exceeds `MaxUnscrupulousItems`.
             */
            TooManyUnscrupulousItems: PlainDescriptor<undefined>;
            /**
             *Length of website URL exceeds `MaxWebsiteUrlLength`.
             */
            TooLongWebsiteUrl: PlainDescriptor<undefined>;
            /**
             *Balance is insufficient for the required deposit.
             */
            InsufficientFunds: PlainDescriptor<undefined>;
            /**
             *The account's identity does not have display field and website field.
             */
            WithoutIdentityDisplayAndWebsite: PlainDescriptor<undefined>;
            /**
             *The account's identity has no good judgement.
             */
            WithoutGoodIdentityJudgement: PlainDescriptor<undefined>;
            /**
             *The proposal hash is not found.
             */
            MissingProposalHash: PlainDescriptor<undefined>;
            /**
             *The announcement is not found.
             */
            MissingAnnouncement: PlainDescriptor<undefined>;
            /**
             *Number of members exceeds `MaxMembersCount`.
             */
            TooManyMembers: PlainDescriptor<undefined>;
            /**
             *Number of announcements exceeds `MaxAnnouncementsCount`.
             */
            TooManyAnnouncements: PlainDescriptor<undefined>;
            /**
             *Invalid witness data given.
             */
            BadWitness: PlainDescriptor<undefined>;
            /**
             *Account already gave retirement notice
             */
            AlreadyRetiring: PlainDescriptor<undefined>;
            /**
             *Account did not give a retirement notice required to retire.
             */
            RetirementNoticeNotGiven: PlainDescriptor<undefined>;
            /**
             *Retirement period has not passed.
             */
            RetirementPeriodNotPassed: PlainDescriptor<undefined>;
            /**
             *Fellows must be provided to initialize the Alliance.
             */
            FellowsMissing: PlainDescriptor<undefined>;
        },
        {
            /**
             * The maximum number of the unscrupulous items supported by the pallet.
             */
            MaxUnscrupulousItems: PlainDescriptor<number>;
            /**
             * The maximum length of a website URL.
             */
            MaxWebsiteUrlLength: PlainDescriptor<number>;
            /**
             * The deposit required for submitting candidacy.
             */
            AllyDeposit: PlainDescriptor<bigint>;
            /**
             * The maximum number of announcements.
             */
            MaxAnnouncementsCount: PlainDescriptor<number>;
            /**
             * The maximum number of members per member role.
             */
            MaxMembersCount: PlainDescriptor<number>;
        }
    ];
    AllianceMotion: [
        {
            /**
             * The hashes of the active proposals.
             */
            Proposals: StorageDescriptor<[], Anonymize<Idhnf6rtqoslea>, false>;
            /**
             * Actual proposal for a given hash, if it's current.
             */
            ProposalOf: StorageDescriptor<[Key: Binary], Anonymize<Iemfe4sq56o6e4>, true>;
            /**
             * Votes on a given proposal, if it is ongoing.
             */
            Voting: StorageDescriptor<[Key: Binary], Anonymize<I99bb69usss9gs>, true>;
            /**
             * Proposals so far.
             */
            ProposalCount: StorageDescriptor<[], number, false>;
            /**
             * The current members of the collective. This is stored sorted (just by value).
             */
            Members: StorageDescriptor<[], Anonymize<Ia2lhg7l2hilo3>, false>;
            /**
             * The prime member that helps determine the default vote behavior in case of absentations.
             */
            Prime: StorageDescriptor<[], SS58String, true>;
        },
        {
            /**
             *See [`Pallet::set_members`].
             */
            set_members: TxDescriptor<Anonymize<I38jfk5li8iang>>;
            /**
             *See [`Pallet::execute`].
             */
            execute: TxDescriptor<Anonymize<I8jhljjof4f7u2>>;
            /**
             *See [`Pallet::propose`].
             */
            propose: TxDescriptor<Anonymize<Iklhae5b9b3k8>>;
            /**
             *See [`Pallet::vote`].
             */
            vote: TxDescriptor<Anonymize<I4ncel23eptqai>>;
            /**
             *See [`Pallet::disapprove_proposal`].
             */
            disapprove_proposal: TxDescriptor<Anonymize<Icraueddqmudct>>;
            /**
             *See [`Pallet::close`].
             */
            close: TxDescriptor<Anonymize<Ic3aqnecvctqmc>>;
        },
        {
            /**
             *A motion (given hash) has been proposed (by given account) with a threshold (given
             *`MemberCount`).
             */
            Proposed: PlainDescriptor<Anonymize<I1kjs4f71ca3ei>>;
            /**
             *A motion (given hash) has been voted on by given account, leaving
             *a tally (yes votes and no votes given respectively as `MemberCount`).
             */
            Voted: PlainDescriptor<Anonymize<I866j5fp50ebq9>>;
            /**
             *A motion was approved by the required threshold.
             */
            Approved: PlainDescriptor<Anonymize<Icraueddqmudct>>;
            /**
             *A motion was not approved by the required threshold.
             */
            Disapproved: PlainDescriptor<Anonymize<Icraueddqmudct>>;
            /**
             *A motion was executed; result will be `Ok` if it returned without error.
             */
            Executed: PlainDescriptor<Anonymize<I3vvd0fdlc9ji8>>;
            /**
             *A single member did some action; result will be `Ok` if it returned without error.
             */
            MemberExecuted: PlainDescriptor<Anonymize<I3vvd0fdlc9ji8>>;
            /**
             *A proposal was closed because its threshold was reached or after its duration was up.
             */
            Closed: PlainDescriptor<Anonymize<I8jvf1ugsdsqum>>;
        },
        {
            /**
             *Account is not a member
             */
            NotMember: PlainDescriptor<undefined>;
            /**
             *Duplicate proposals not allowed
             */
            DuplicateProposal: PlainDescriptor<undefined>;
            /**
             *Proposal must exist
             */
            ProposalMissing: PlainDescriptor<undefined>;
            /**
             *Mismatched index
             */
            WrongIndex: PlainDescriptor<undefined>;
            /**
             *Duplicate vote ignored
             */
            DuplicateVote: PlainDescriptor<undefined>;
            /**
             *Members are already initialized!
             */
            AlreadyInitialized: PlainDescriptor<undefined>;
            /**
             *The close call was made too early, before the end of the voting.
             */
            TooEarly: PlainDescriptor<undefined>;
            /**
             *There can only be a maximum of `MaxProposals` active proposals.
             */
            TooManyProposals: PlainDescriptor<undefined>;
            /**
             *The given weight bound for the proposal was too low.
             */
            WrongProposalWeight: PlainDescriptor<undefined>;
            /**
             *The given length bound for the proposal was too low.
             */
            WrongProposalLength: PlainDescriptor<undefined>;
            /**
             *Prime account is not a member
             */
            PrimeAccountNotMember: PlainDescriptor<undefined>;
        },
        {
            /**
             * The maximum weight of a dispatch call that can be proposed and executed.
             */
            MaxProposalWeight: PlainDescriptor<Anonymize<I4q39t5hn830vp>>;
        }
    ];
    FellowshipCollective: [
        {
            /**
             * The number of members in the collective who have at least the rank according to the index
             * of the vec.
             */
            MemberCount: StorageDescriptor<[Key: number], number, false>;
            /**
             * The current members of the collective.
             */
            Members: StorageDescriptor<[Key: SS58String], number, true>;
            /**
             * The index of each ranks's member into the group of members who have at least that rank.
             */
            IdToIndex: StorageDescriptor<Anonymize<I7svnfko10tq2e>, number, true>;
            /**
             * The members in the collective by index. All indices in the range `0..MemberCount` will
             * return `Some`, however a member's index is not guaranteed to remain unchanged over time.
             */
            IndexToId: StorageDescriptor<Anonymize<I5g2vv0ckl2m8b>, SS58String, true>;
            /**
             * Votes on a given proposal, if it is ongoing.
             */
            Voting: StorageDescriptor<Anonymize<I7svnfko10tq2e>, Anonymize<I996080trg6urn>, true>;
            /**
            
             */
            VotingCleanup: StorageDescriptor<[Key: number], Binary, true>;
        },
        {
            /**
             *See [`Pallet::add_member`].
             */
            add_member: TxDescriptor<Anonymize<I2nmm2fprtp4kl>>;
            /**
             *See [`Pallet::promote_member`].
             */
            promote_member: TxDescriptor<Anonymize<I2nmm2fprtp4kl>>;
            /**
             *See [`Pallet::demote_member`].
             */
            demote_member: TxDescriptor<Anonymize<I2nmm2fprtp4kl>>;
            /**
             *See [`Pallet::remove_member`].
             */
            remove_member: TxDescriptor<Anonymize<I8c23ih8fpmjma>>;
            /**
             *See [`Pallet::vote`].
             */
            vote: TxDescriptor<Anonymize<I8bvk21lpmah75>>;
            /**
             *See [`Pallet::cleanup_poll`].
             */
            cleanup_poll: TxDescriptor<Anonymize<I449n3riv6jbum>>;
        },
        {
            /**
             *A member `who` has been added.
             */
            MemberAdded: PlainDescriptor<Anonymize<I4cbvqmqadhrea>>;
            /**
             *The member `who`se rank has been changed to the given `rank`.
             */
            RankChanged: PlainDescriptor<Anonymize<Im1pm2vf6llcn>>;
            /**
             *The member `who` of given `rank` has been removed from the collective.
             */
            MemberRemoved: PlainDescriptor<Anonymize<Im1pm2vf6llcn>>;
            /**
             *The member `who` has voted for the `poll` with the given `vote` leading to an updated
             *`tally`.
             */
            Voted: PlainDescriptor<Anonymize<I31vg1u4v55v90>>;
        },
        {
            /**
             *Account is already a member.
             */
            AlreadyMember: PlainDescriptor<undefined>;
            /**
             *Account is not a member.
             */
            NotMember: PlainDescriptor<undefined>;
            /**
             *The given poll index is unknown or has closed.
             */
            NotPolling: PlainDescriptor<undefined>;
            /**
             *The given poll is still ongoing.
             */
            Ongoing: PlainDescriptor<undefined>;
            /**
             *There are no further records to be removed.
             */
            NoneRemaining: PlainDescriptor<undefined>;
            /**
             *Unexpected error in state.
             */
            Corruption: PlainDescriptor<undefined>;
            /**
             *The member's rank is too low to vote.
             */
            RankTooLow: PlainDescriptor<undefined>;
            /**
             *The information provided is incorrect.
             */
            InvalidWitness: PlainDescriptor<undefined>;
            /**
             *The origin is not sufficiently privileged to do the operation.
             */
            NoPermission: PlainDescriptor<undefined>;
        },
        {}
    ];
    FellowshipReferenda: [
        {
            /**
             * The next free referendum index, aka the number of referenda started so far.
             */
            ReferendumCount: StorageDescriptor<[], number, false>;
            /**
             * Information concerning any given referendum.
             */
            ReferendumInfoFor: StorageDescriptor<[Key: number], Anonymize<I92r5g26hdf8cj>, true>;
            /**
             * The sorted list of referenda ready to be decided but not yet being decided, ordered by
             * conviction-weighted approvals.
             *
             * This should be empty if `DecidingCount` is less than `TrackInfo::max_deciding`.
             */
            TrackQueue: StorageDescriptor<[Key: number], Anonymize<Iep4uo61810hfs>, false>;
            /**
             * The number of referenda being decided currently.
             */
            DecidingCount: StorageDescriptor<[Key: number], number, false>;
            /**
             * The metadata is a general information concerning the referendum.
             * The `Hash` refers to the preimage of the `Preimages` provider which can be a JSON
             * dump or IPFS hash of a JSON file.
             *
             * Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)
             * large preimages.
             */
            MetadataOf: StorageDescriptor<[Key: number], Binary, true>;
        },
        {
            /**
             *See [`Pallet::submit`].
             */
            submit: TxDescriptor<Anonymize<Ihqgnavvsqvf8>>;
            /**
             *See [`Pallet::place_decision_deposit`].
             */
            place_decision_deposit: TxDescriptor<Anonymize<I666bl2fqjkejo>>;
            /**
             *See [`Pallet::refund_decision_deposit`].
             */
            refund_decision_deposit: TxDescriptor<Anonymize<I666bl2fqjkejo>>;
            /**
             *See [`Pallet::cancel`].
             */
            cancel: TxDescriptor<Anonymize<I666bl2fqjkejo>>;
            /**
             *See [`Pallet::kill`].
             */
            kill: TxDescriptor<Anonymize<I666bl2fqjkejo>>;
            /**
             *See [`Pallet::nudge_referendum`].
             */
            nudge_referendum: TxDescriptor<Anonymize<I666bl2fqjkejo>>;
            /**
             *See [`Pallet::one_fewer_deciding`].
             */
            one_fewer_deciding: TxDescriptor<Anonymize<Icbio0e1f0034b>>;
            /**
             *See [`Pallet::refund_submission_deposit`].
             */
            refund_submission_deposit: TxDescriptor<Anonymize<I666bl2fqjkejo>>;
            /**
             *See [`Pallet::set_metadata`].
             */
            set_metadata: TxDescriptor<Anonymize<Ifml0k0sf0mu2g>>;
        },
        {
            /**
             *A referendum has been submitted.
             */
            Submitted: PlainDescriptor<Anonymize<Idhr9v8mlnjej>>;
            /**
             *The decision deposit has been placed.
             */
            DecisionDepositPlaced: PlainDescriptor<Anonymize<I62nte77gksm0f>>;
            /**
             *The decision deposit has been refunded.
             */
            DecisionDepositRefunded: PlainDescriptor<Anonymize<I62nte77gksm0f>>;
            /**
             *A deposit has been slashaed.
             */
            DepositSlashed: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
            /**
             *A referendum has moved into the deciding phase.
             */
            DecisionStarted: PlainDescriptor<Anonymize<Iuu6tledtt64n>>;
            /**
            
             */
            ConfirmStarted: PlainDescriptor<Anonymize<I666bl2fqjkejo>>;
            /**
            
             */
            ConfirmAborted: PlainDescriptor<Anonymize<I666bl2fqjkejo>>;
            /**
             *A referendum has ended its confirmation phase and is ready for approval.
             */
            Confirmed: PlainDescriptor<Anonymize<I27notaksll8qt>>;
            /**
             *A referendum has been approved and its proposal has been scheduled.
             */
            Approved: PlainDescriptor<Anonymize<I666bl2fqjkejo>>;
            /**
             *A proposal has been rejected by referendum.
             */
            Rejected: PlainDescriptor<Anonymize<I27notaksll8qt>>;
            /**
             *A referendum has been timed out without being decided.
             */
            TimedOut: PlainDescriptor<Anonymize<I27notaksll8qt>>;
            /**
             *A referendum has been cancelled.
             */
            Cancelled: PlainDescriptor<Anonymize<I27notaksll8qt>>;
            /**
             *A referendum has been killed.
             */
            Killed: PlainDescriptor<Anonymize<I27notaksll8qt>>;
            /**
             *The submission deposit has been refunded.
             */
            SubmissionDepositRefunded: PlainDescriptor<Anonymize<I62nte77gksm0f>>;
            /**
             *Metadata for a referendum has been set.
             */
            MetadataSet: PlainDescriptor<Anonymize<I50aq0q2l1cdkr>>;
            /**
             *Metadata for a referendum has been cleared.
             */
            MetadataCleared: PlainDescriptor<Anonymize<I50aq0q2l1cdkr>>;
        },
        {
            /**
             *Referendum is not ongoing.
             */
            NotOngoing: PlainDescriptor<undefined>;
            /**
             *Referendum's decision deposit is already paid.
             */
            HasDeposit: PlainDescriptor<undefined>;
            /**
             *The track identifier given was invalid.
             */
            BadTrack: PlainDescriptor<undefined>;
            /**
             *There are already a full complement of referenda in progress for this track.
             */
            Full: PlainDescriptor<undefined>;
            /**
             *The queue of the track is empty.
             */
            QueueEmpty: PlainDescriptor<undefined>;
            /**
             *The referendum index provided is invalid in this context.
             */
            BadReferendum: PlainDescriptor<undefined>;
            /**
             *There was nothing to do in the advancement.
             */
            NothingToDo: PlainDescriptor<undefined>;
            /**
             *No track exists for the proposal origin.
             */
            NoTrack: PlainDescriptor<undefined>;
            /**
             *Any deposit cannot be refunded until after the decision is over.
             */
            Unfinished: PlainDescriptor<undefined>;
            /**
             *The deposit refunder is not the depositor.
             */
            NoPermission: PlainDescriptor<undefined>;
            /**
             *The deposit cannot be refunded since none was made.
             */
            NoDeposit: PlainDescriptor<undefined>;
            /**
             *The referendum status is invalid for this operation.
             */
            BadStatus: PlainDescriptor<undefined>;
            /**
             *The preimage does not exist.
             */
            PreimageNotExist: PlainDescriptor<undefined>;
        },
        {
            /**
             * The minimum amount to be used as a deposit for a public referendum proposal.
             */
            SubmissionDeposit: PlainDescriptor<bigint>;
            /**
             * Maximum size of the referendum queue for a single track.
             */
            MaxQueued: PlainDescriptor<number>;
            /**
             * The number of blocks after submission that a referendum must begin being decided by.
             * Once this passes, then anyone may cancel the referendum.
             */
            UndecidingTimeout: PlainDescriptor<number>;
            /**
             * Quantization level for the referendum wakeup scheduler. A higher number will result in
             * fewer storage reads/writes needed for smaller voters, but also result in delays to the
             * automatic referendum status changes. Explicit servicing instructions are unaffected.
             */
            AlarmInterval: PlainDescriptor<number>;
            /**
             * Information concerning the different referendum tracks.
             */
            Tracks: PlainDescriptor<Anonymize<Ibafpkl9hhno69>>;
        }
    ];
    FellowshipCore: [
        {
            /**
             * The overall status of the system.
             */
            Params: StorageDescriptor<[], Anonymize<Iec4blde7bc1ai>, false>;
            /**
             * The status of a claimant.
             */
            Member: StorageDescriptor<[Key: SS58String], Anonymize<Iq1c24rdj7v7p>, true>;
            /**
             * Some evidence together with the desired outcome for which it was presented.
             */
            MemberEvidence: StorageDescriptor<[Key: SS58String], Anonymize<I3vo1s729tgvdr>, true>;
        },
        {
            /**
             *See [`Pallet::bump`].
             */
            bump: TxDescriptor<Anonymize<I4cbvqmqadhrea>>;
            /**
             *See [`Pallet::set_params`].
             */
            set_params: TxDescriptor<Anonymize<I875hrun7fs7ik>>;
            /**
             *See [`Pallet::set_active`].
             */
            set_active: TxDescriptor<Anonymize<I27vrusv8rgd90>>;
            /**
             *See [`Pallet::approve`].
             */
            approve: TxDescriptor<Anonymize<Ic79d2eioda33s>>;
            /**
             *See [`Pallet::induct`].
             */
            induct: TxDescriptor<Anonymize<I4cbvqmqadhrea>>;
            /**
             *See [`Pallet::promote`].
             */
            promote: TxDescriptor<Anonymize<I5kpe8b2kedtqn>>;
            /**
             *See [`Pallet::offboard`].
             */
            offboard: TxDescriptor<Anonymize<I4cbvqmqadhrea>>;
            /**
             *See [`Pallet::submit_evidence`].
             */
            submit_evidence: TxDescriptor<Anonymize<Iegaehkdq4ofh>>;
            /**
             *See [`Pallet::import`].
             */
            import: TxDescriptor<undefined>;
        },
        {
            /**
             *Parameters for the pallet have changed.
             */
            ParamsChanged: PlainDescriptor<Anonymize<I875hrun7fs7ik>>;
            /**
             *Member activity flag has been set.
             */
            ActiveChanged: PlainDescriptor<Anonymize<I9j3uq1uk06oju>>;
            /**
             *Member has begun being tracked in this pallet.
             */
            Inducted: PlainDescriptor<Anonymize<I4cbvqmqadhrea>>;
            /**
             *Member has been removed from being tracked in this pallet (i.e. because rank is now
             *zero).
             */
            Offboarded: PlainDescriptor<Anonymize<I4cbvqmqadhrea>>;
            /**
             *Member has been promoted to the given rank.
             */
            Promoted: PlainDescriptor<Anonymize<I5kpe8b2kedtqn>>;
            /**
             *Member has been demoted to the given (non-zero) rank.
             */
            Demoted: PlainDescriptor<Anonymize<I5kpe8b2kedtqn>>;
            /**
             *Member has been proven at their current rank, postponing auto-demotion.
             */
            Proven: PlainDescriptor<Anonymize<Ic79d2eioda33s>>;
            /**
             *Member has stated evidence of their efforts their request for rank.
             */
            Requested: PlainDescriptor<Anonymize<Ien2galqubjs1f>>;
            /**
             *Some submitted evidence was judged and removed. There may or may not have been a change
             *to the rank, but in any case, `last_proof` is reset.
             */
            EvidenceJudged: PlainDescriptor<Anonymize<Id07di6ikhd4im>>;
            /**
             *Pre-ranked account has been inducted at their current rank.
             */
            Imported: PlainDescriptor<Anonymize<Im1pm2vf6llcn>>;
        },
        {
            /**
             *Member's rank is too low.
             */
            Unranked: PlainDescriptor<undefined>;
            /**
             *Member's rank is not zero.
             */
            Ranked: PlainDescriptor<undefined>;
            /**
             *Member's rank is not as expected - generally means that the rank provided to the call
             *does not agree with the state of the system.
             */
            UnexpectedRank: PlainDescriptor<undefined>;
            /**
             *The given rank is invalid - this generally means it's not between 1 and `RANK_COUNT`.
             */
            InvalidRank: PlainDescriptor<undefined>;
            /**
             *The origin does not have enough permission to do this operation.
             */
            NoPermission: PlainDescriptor<undefined>;
            /**
             *No work needs to be done at present for this member.
             */
            NothingDoing: PlainDescriptor<undefined>;
            /**
             *The candidate has already been inducted. This should never happen since it would
             *require a candidate (rank 0) to already be tracked in the pallet.
             */
            AlreadyInducted: PlainDescriptor<undefined>;
            /**
             *The candidate has not been inducted, so cannot be offboarded from this pallet.
             */
            NotTracked: PlainDescriptor<undefined>;
            /**
             *Operation cannot be done yet since not enough time has passed.
             */
            TooSoon: PlainDescriptor<undefined>;
        },
        {
            /**
             * The maximum size in bytes submitted evidence is allowed to be.
             */
            EvidenceSize: PlainDescriptor<number>;
        }
    ];
    FellowshipSalary: [
        {
            /**
             * The overall status of the system.
             */
            Status: StorageDescriptor<[], Anonymize<Idg0lipm04tfnv>, true>;
            /**
             * The status of a claimant.
             */
            Claimant: StorageDescriptor<[Key: SS58String], Anonymize<Iesbdiip9d834l>, true>;
        },
        {
            /**
             *See [`Pallet::init`].
             */
            init: TxDescriptor<undefined>;
            /**
             *See [`Pallet::bump`].
             */
            bump: TxDescriptor<undefined>;
            /**
             *See [`Pallet::induct`].
             */
            induct: TxDescriptor<undefined>;
            /**
             *See [`Pallet::register`].
             */
            register: TxDescriptor<undefined>;
            /**
             *See [`Pallet::payout`].
             */
            payout: TxDescriptor<undefined>;
            /**
             *See [`Pallet::payout_other`].
             */
            payout_other: TxDescriptor<Anonymize<I8ligieds2efci>>;
            /**
             *See [`Pallet::check_payment`].
             */
            check_payment: TxDescriptor<undefined>;
        },
        {
            /**
             *A member is inducted into the payroll.
             */
            Inducted: PlainDescriptor<Anonymize<I4cbvqmqadhrea>>;
            /**
             *A member registered for a payout.
             */
            Registered: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
            /**
             *A payment happened.
             */
            Paid: PlainDescriptor<Anonymize<I4vcrhqupmee7p>>;
            /**
             *The next cycle begins.
             */
            CycleStarted: PlainDescriptor<Anonymize<I666bl2fqjkejo>>;
        },
        {
            /**
             *The salary system has already been started.
             */
            AlreadyStarted: PlainDescriptor<undefined>;
            /**
             *The account is not a ranked member.
             */
            NotMember: PlainDescriptor<undefined>;
            /**
             *The account is already inducted.
             */
            AlreadyInducted: PlainDescriptor<undefined>;
            /**
            
             */
            NotInducted: PlainDescriptor<undefined>;
            /**
             *The member does not have a current valid claim.
             */
            NoClaim: PlainDescriptor<undefined>;
            /**
             *The member's claim is zero.
             */
            ClaimZero: PlainDescriptor<undefined>;
            /**
             *Current cycle's registration period is over.
             */
            TooLate: PlainDescriptor<undefined>;
            /**
             *Current cycle's payment period is not yet begun.
             */
            TooEarly: PlainDescriptor<undefined>;
            /**
             *Cycle is not yet over.
             */
            NotYet: PlainDescriptor<undefined>;
            /**
             *The payout cycles have not yet started.
             */
            NotStarted: PlainDescriptor<undefined>;
            /**
             *There is no budget left for the payout.
             */
            Bankrupt: PlainDescriptor<undefined>;
            /**
             *There was some issue with the mechanism of payment.
             */
            PayError: PlainDescriptor<undefined>;
            /**
             *The payment has neither failed nor succeeded yet.
             */
            Inconclusive: PlainDescriptor<undefined>;
            /**
             *The cycle is after that in which the payment was made.
             */
            NotCurrent: PlainDescriptor<undefined>;
        },
        {
            /**
             * The number of blocks within a cycle which accounts have to register their intent to
             * claim.
             *
             * The number of blocks between sequential payout cycles is the sum of this and
             * `PayoutPeriod`.
             */
            RegistrationPeriod: PlainDescriptor<number>;
            /**
             * The number of blocks within a cycle which accounts have to claim the payout.
             *
             * The number of blocks between sequential payout cycles is the sum of this and
             * `RegistrationPeriod`.
             */
            PayoutPeriod: PlainDescriptor<number>;
            /**
             * The total budget per cycle.
             *
             * This may change over the course of a cycle without any problem.
             */
            Budget: PlainDescriptor<bigint>;
        }
    ];
    FellowshipTreasury: [
        {
            /**
             * Number of proposals that have been made.
             */
            ProposalCount: StorageDescriptor<[], number, false>;
            /**
             * Proposals that have been made.
             */
            Proposals: StorageDescriptor<[Key: number], Anonymize<Iegmj7n48sc3am>, true>;
            /**
             * The amount which has been reported as inactive to Currency.
             */
            Deactivated: StorageDescriptor<[], bigint, false>;
            /**
             * Proposal indices that have been approved but not yet awarded.
             */
            Approvals: StorageDescriptor<[], Anonymize<Icgljjb6j82uhn>, false>;
            /**
             * The count of spends that have been made.
             */
            SpendCount: StorageDescriptor<[], number, false>;
            /**
             * Spends that have been approved and being processed.
             */
            Spends: StorageDescriptor<[Key: number], Anonymize<Ie05qfg5feue1l>, true>;
        },
        {
            /**
             *See [`Pallet::propose_spend`].
             */
            propose_spend: TxDescriptor<Anonymize<I5c883qnnqciv8>>;
            /**
             *See [`Pallet::reject_proposal`].
             */
            reject_proposal: TxDescriptor<Anonymize<Icm9m0qeemu66d>>;
            /**
             *See [`Pallet::approve_proposal`].
             */
            approve_proposal: TxDescriptor<Anonymize<Icm9m0qeemu66d>>;
            /**
             *See [`Pallet::spend_local`].
             */
            spend_local: TxDescriptor<Anonymize<Idpn74s0i9cdvp>>;
            /**
             *See [`Pallet::remove_approval`].
             */
            remove_approval: TxDescriptor<Anonymize<Icm9m0qeemu66d>>;
            /**
             *See [`Pallet::spend`].
             */
            spend: TxDescriptor<Anonymize<I815t7ta25e227>>;
            /**
             *See [`Pallet::payout`].
             */
            payout: TxDescriptor<Anonymize<I666bl2fqjkejo>>;
            /**
             *See [`Pallet::check_status`].
             */
            check_status: TxDescriptor<Anonymize<I666bl2fqjkejo>>;
            /**
             *See [`Pallet::void_spend`].
             */
            void_spend: TxDescriptor<Anonymize<I666bl2fqjkejo>>;
        },
        {
            /**
             *New proposal.
             */
            Proposed: PlainDescriptor<Anonymize<I44hc4lgsn4o1j>>;
            /**
             *We have ended a spend period and will now allocate funds.
             */
            Spending: PlainDescriptor<Anonymize<I8iksqi3eani0a>>;
            /**
             *Some funds have been allocated.
             */
            Awarded: PlainDescriptor<Anonymize<I16enopmju1p0q>>;
            /**
             *A proposal was rejected; funds were slashed.
             */
            Rejected: PlainDescriptor<Anonymize<Ifgqhle2413de7>>;
            /**
             *Some of our funds have been burnt.
             */
            Burnt: PlainDescriptor<Anonymize<I43kq8qudg7pq9>>;
            /**
             *Spending has finished; this is the amount that rolls over until next spend.
             */
            Rollover: PlainDescriptor<Anonymize<I76riseemre533>>;
            /**
             *Some funds have been deposited.
             */
            Deposit: PlainDescriptor<Anonymize<Ie5v6njpckr05b>>;
            /**
             *A new spend proposal has been approved.
             */
            SpendApproved: PlainDescriptor<Anonymize<I38bmcrmh852rk>>;
            /**
             *The inactive funds of the pallet have been updated.
             */
            UpdatedInactive: PlainDescriptor<Anonymize<I4hcillge8de5f>>;
            /**
             *A new asset spend proposal has been approved.
             */
            AssetSpendApproved: PlainDescriptor<Anonymize<Iblqf6usek6oij>>;
            /**
             *An approved spend was voided.
             */
            AssetSpendVoided: PlainDescriptor<Anonymize<I666bl2fqjkejo>>;
            /**
             *A payment happened.
             */
            Paid: PlainDescriptor<Anonymize<Iek7v4hrgnq6iv>>;
            /**
             *A payment failed and can be retried.
             */
            PaymentFailed: PlainDescriptor<Anonymize<Iek7v4hrgnq6iv>>;
            /**
             *A spend was processed and removed from the storage. It might have been successfully
             *paid or it may have expired.
             */
            SpendProcessed: PlainDescriptor<Anonymize<I666bl2fqjkejo>>;
        },
        {
            /**
             *Proposer's balance is too low.
             */
            InsufficientProposersBalance: PlainDescriptor<undefined>;
            /**
             *No proposal, bounty or spend at that index.
             */
            InvalidIndex: PlainDescriptor<undefined>;
            /**
             *Too many approvals in the queue.
             */
            TooManyApprovals: PlainDescriptor<undefined>;
            /**
             *The spend origin is valid but the amount it is allowed to spend is lower than the
             *amount to be spent.
             */
            InsufficientPermission: PlainDescriptor<undefined>;
            /**
             *Proposal has not been approved.
             */
            ProposalNotApproved: PlainDescriptor<undefined>;
            /**
             *The balance of the asset kind is not convertible to the balance of the native asset.
             */
            FailedToConvertBalance: PlainDescriptor<undefined>;
            /**
             *The spend has expired and cannot be claimed.
             */
            SpendExpired: PlainDescriptor<undefined>;
            /**
             *The spend is not yet eligible for payout.
             */
            EarlyPayout: PlainDescriptor<undefined>;
            /**
             *The payment has already been attempted.
             */
            AlreadyAttempted: PlainDescriptor<undefined>;
            /**
             *There was some issue with the mechanism of payment.
             */
            PayoutError: PlainDescriptor<undefined>;
            /**
             *The payout was not yet attempted/claimed.
             */
            NotAttempted: PlainDescriptor<undefined>;
            /**
             *The payment has neither failed nor succeeded yet.
             */
            Inconclusive: PlainDescriptor<undefined>;
        },
        {
            /**
             * Fraction of a proposal's value that should be bonded in order to place the proposal.
             * An accepted proposal gets these back. A rejected proposal does not.
             */
            ProposalBond: PlainDescriptor<number>;
            /**
             * Minimum amount of funds that should be placed in a deposit for making a proposal.
             */
            ProposalBondMinimum: PlainDescriptor<bigint>;
            /**
             * Maximum amount of funds that should be placed in a deposit for making a proposal.
             */
            ProposalBondMaximum: PlainDescriptor<Anonymize<I35p85j063s0il>>;
            /**
             * Period between successive spends.
             */
            SpendPeriod: PlainDescriptor<number>;
            /**
             * Percentage of spare funds (if any) that are burnt per spend period.
             */
            Burn: PlainDescriptor<number>;
            /**
             * The treasury's pallet id, used for deriving its sovereign account ID.
             */
            PalletId: PlainDescriptor<Binary>;
            /**
             * The maximum number of approvals that can wait in the spending queue.
             *
             * NOTE: This parameter is also used within the Bounties Pallet extension if enabled.
             */
            MaxApprovals: PlainDescriptor<number>;
            /**
             * The period during which an approved treasury spend has to be claimed.
             */
            PayoutPeriod: PlainDescriptor<number>;
        }
    ];
};
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
        slot_duration: RuntimeDescriptor<[], bigint>;
        /**
         * Return the current set of authorities.
         */
        authorities: RuntimeDescriptor<[], Anonymize<Idhnf6rtqoslea>>;
    };
    /**
     * The `Core` runtime api that every Substrate runtime needs to implement.
     */
    Core: {
        /**
         * Returns the version of the runtime.
         */
        version: RuntimeDescriptor<[], Anonymize<Ib5fo0fakl8rog>>;
        /**
         * Execute the given block.
         */
        execute_block: RuntimeDescriptor<[block: Anonymize<Ia4jqf401148a4>], undefined>;
        /**
         * Initialize a block with the given header.
         */
        initialize_block: RuntimeDescriptor<[header: Anonymize<I6t1nedlt7mobn>], undefined>;
    };
    /**
     * The `Metadata` api trait that returns metadata for the runtime.
     */
    Metadata: {
        /**
         * Returns the metadata of a runtime.
         */
        metadata: RuntimeDescriptor<[], Binary>;
        /**
         * Returns the metadata at a given version.
         *
         * If the given `version` isn't supported, this will return `None`.
         * Use [`Self::metadata_versions`] to find out about supported metadata version of the runtime.
         */
        metadata_at_version: RuntimeDescriptor<[version: number], Anonymize<Iabpgqcjikia83>>;
        /**
         * Returns the supported metadata versions.
         *
         * This can be used to call `metadata_at_version`.
         */
        metadata_versions: RuntimeDescriptor<[], Anonymize<Icgljjb6j82uhn>>;
    };
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
        apply_extrinsic: RuntimeDescriptor<[extrinsic: Binary], Anonymize<I132412t2eshc6>>;
        /**
         * Finish the current block.
         */
        finalize_block: RuntimeDescriptor<[], Anonymize<I6t1nedlt7mobn>>;
        /**
         * Generate inherent extrinsics. The inherent data will vary from chain to chain.
         */
        inherent_extrinsics: RuntimeDescriptor<[inherent: Anonymize<If39abi8floaaf>], Anonymize<Itom7fk49o0c9>>;
        /**
         * Check that the inherents are valid. The inherent data will vary from chain to chain.
         */
        check_inherents: RuntimeDescriptor<[block: Anonymize<Ia4jqf401148a4>, data: Anonymize<If39abi8floaaf>], Anonymize<Ibcdj0j79gq1uo>>;
    };
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
        validate_transaction: RuntimeDescriptor<[source: TransactionValidityTransactionSource, tx: Binary, block_hash: Binary], Anonymize<I6d9lhhdri071p>>;
    };
    /**
     * The offchain worker api.
     */
    OffchainWorkerApi: {
        /**
         * Starts the off-chain task for given block header.
         */
        offchain_worker: RuntimeDescriptor<[header: Anonymize<I6t1nedlt7mobn>], undefined>;
    };
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
        generate_session_keys: RuntimeDescriptor<[seed: Anonymize<Iabpgqcjikia83>], Binary>;
        /**
         * Decode the given public session keys.
         *
         * Returns the list of public raw public keys + key type.
         */
        decode_session_keys: RuntimeDescriptor<[encoded: Binary], Anonymize<I96ok5o1k21bpi>>;
    };
    /**
     * The API to query account nonce.
     */
    AccountNonceApi: {
        /**
         * Get current account nonce of given `AccountId`.
         */
        account_nonce: RuntimeDescriptor<[account: SS58String], number>;
    };
    /**
    
     */
    TransactionPaymentApi: {
        /**
        
         */
        query_info: RuntimeDescriptor<[uxt: Binary, len: number], Anonymize<I5r4utvvlnltpd>>;
        /**
        
         */
        query_fee_details: RuntimeDescriptor<[uxt: Binary, len: number], Anonymize<Iei2mvq0mjvt81>>;
        /**
        
         */
        query_weight_to_fee: RuntimeDescriptor<[weight: Anonymize<I4q39t5hn830vp>], bigint>;
        /**
        
         */
        query_length_to_fee: RuntimeDescriptor<[length: number], bigint>;
    };
    /**
    
     */
    TransactionPaymentCallApi: {
        /**
         * Query information of a dispatch class, weight, and fee of a given encoded `Call`.
         */
        query_call_info: RuntimeDescriptor<[call: Anonymize<Iemfe4sq56o6e4>, len: number], Anonymize<I5r4utvvlnltpd>>;
        /**
         * Query fee details of a given encoded `Call`.
         */
        query_call_fee_details: RuntimeDescriptor<[call: Anonymize<Iemfe4sq56o6e4>, len: number], Anonymize<Iei2mvq0mjvt81>>;
        /**
         * Query the output of the current `WeightToFee` given some input.
         */
        query_weight_to_fee: RuntimeDescriptor<[weight: Anonymize<I4q39t5hn830vp>], bigint>;
        /**
         * Query the output of the current `LengthToFee` given some input.
         */
        query_length_to_fee: RuntimeDescriptor<[length: number], bigint>;
    };
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
        collect_collation_info: RuntimeDescriptor<[header: Anonymize<I6t1nedlt7mobn>], Anonymize<Ic1d4u2opv3fst>>;
    };
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
        create_default_config: RuntimeDescriptor<[], Binary>;
        /**
         * Build `GenesisConfig` from a JSON blob not using any defaults and store it in the storage.
         *
         * This function deserializes the full `GenesisConfig` from the given JSON blob and puts it into the storage.
         * If the provided JSON blob is incorrect or incomplete or the deserialization fails, an error is returned.
         * It is recommended to log any errors encountered during the process.
         *
         * Please note that provided json blob must contain all `GenesisConfig` fields, no defaults will be used.
         */
        build_config: RuntimeDescriptor<[json: Binary], Anonymize<I9q9lvv0h98nhk>>;
    };
};
type IAsset = AssetDescriptor<void>;
type IDescriptors = {
    pallets: IPallets;
    apis: IRuntimeCalls;
    asset: IAsset;
    checksums: Promise<string[]>;
};
declare const _allDescriptors: IDescriptors;
export default _allDescriptors;
export type CollectivesQueries = QueryFromDescriptors<IDescriptors>;
export type CollectivesCalls = TxFromDescriptors<IDescriptors>;
export type CollectivesEvents = EventsFromDescriptors<IDescriptors>;
export type CollectivesErrors = ErrorsFromDescriptors<IDescriptors>;
export type CollectivesConstants = ConstFromDescriptors<IDescriptors>;
export * from './public-types';
