const API_KEY = process.env.COINMARKET_API_KEY;

const HARDCODED_DATA = [
	{
		id: 1,
		name: 'Bitcoin',
		symbol: 'BTC',
		slug: 'bitcoin',
		num_market_pairs: 11860,
		date_added: '2010-07-13T00:00:00.000Z',
		tags: [
			'mineable',
			'pow',
			'sha-256',
			'store-of-value',
			'state-channel',
			'coinbase-ventures-portfolio',
			'three-arrows-capital-portfolio',
			'polychain-capital-portfolio',
			'binance-labs-portfolio',
			'blockchain-capital-portfolio',
			'boostvc-portfolio',
			'cms-holdings-portfolio',
			'dcg-portfolio',
			'dragonfly-capital-portfolio',
			'electric-capital-portfolio',
			'fabric-ventures-portfolio',
			'framework-ventures-portfolio',
			'galaxy-digital-portfolio',
			'huobi-capital-portfolio',
			'alameda-research-portfolio',
			'a16z-portfolio',
			'1confirmation-portfolio',
			'winklevoss-capital-portfolio',
			'usv-portfolio',
			'placeholder-ventures-portfolio',
			'pantera-capital-portfolio',
			'multicoin-capital-portfolio',
			'paradigm-portfolio',
			'bitcoin-ecosystem',
			'ftx-bankruptcy-estate',
			'2017-2018-alt-season',
		],
		max_supply: 21000000,
		circulating_supply: 19809512,
		total_supply: 19809512,
		infinite_supply: false,
		platform: null,
		cmc_rank: 1,
		self_reported_circulating_supply: null,
		self_reported_market_cap: null,
		tvl_ratio: null,
		last_updated: '2025-01-13T22:06:00.000Z',
		quote: {
			EUR: {
				price: 92021.88920911802,
				volume_24h: 70845895277.55219,
				volume_change_24h: 270.5341,
				percent_change_1h: 0.53943048,
				percent_change_24h: 0.02189444,
				percent_change_7d: -7.26830904,
				percent_change_30d: -6.73916585,
				percent_change_60d: 6.90490407,
				percent_change_90d: 41.83170883,
				market_cap: 1822908718550.6938,
				market_cap_dominance: 57.275,
				fully_diluted_market_cap: 1932459673391.4807,
				tvl: null,
				last_updated: '2025-01-13T22:05:05.000Z',
			},
		},
	},
	{
		id: 1027,
		name: 'Ethereum',
		symbol: 'ETH',
		slug: 'ethereum',
		num_market_pairs: 9817,
		date_added: '2015-08-07T00:00:00.000Z',
		tags: [
			'pos',
			'smart-contracts',
			'ethereum-ecosystem',
			'coinbase-ventures-portfolio',
			'three-arrows-capital-portfolio',
			'polychain-capital-portfolio',
			'heco-ecosystem',
			'binance-labs-portfolio',
			'avalanche-ecosystem',
			'solana-ecosystem',
			'blockchain-capital-portfolio',
			'boostvc-portfolio',
			'cms-holdings-portfolio',
			'dcg-portfolio',
			'dragonfly-capital-portfolio',
			'electric-capital-portfolio',
			'fabric-ventures-portfolio',
			'framework-ventures-portfolio',
			'hashkey-capital-portfolio',
			'kenetic-capital-portfolio',
			'huobi-capital-portfolio',
			'alameda-research-portfolio',
			'a16z-portfolio',
			'1confirmation-portfolio',
			'winklevoss-capital-portfolio',
			'usv-portfolio',
			'placeholder-ventures-portfolio',
			'pantera-capital-portfolio',
			'multicoin-capital-portfolio',
			'paradigm-portfolio',
			'tezos-ecosystem',
			'near-protocol-ecosystem',
			'bnb-chain-ecosystem',
			'velas-ecosystem',
			'ethereum-pow-ecosystem',
			'osmosis-ecosystem',
			'layer-1',
			'ftx-bankruptcy-estate',
			'zksync-era-ecosystem',
			'viction-ecosystem',
			'klaytn-ecosystem',
			'sora-ecosystem',
			'rsk-rbtc-ecosystem',
			'starknet-ecosystem',
		],
		max_supply: null,
		circulating_supply: 120493047.5421975,
		total_supply: 120493047.5421975,
		infinite_supply: true,
		platform: null,
		cmc_rank: 2,
		self_reported_circulating_supply: null,
		self_reported_market_cap: null,
		tvl_ratio: null,
		last_updated: '2025-01-13T22:06:00.000Z',
		quote: {
			EUR: {
				price: 3040.263967425462,
				volume_24h: 38538568502.281624,
				volume_change_24h: 253.5765,
				percent_change_1h: 0.43426863,
				percent_change_24h: -4.53022924,
				percent_change_7d: -15.15516651,
				percent_change_30d: -19.16756028,
				percent_change_60d: -0.11398573,
				percent_change_90d: 20.44477609,
				market_cap: 366330670767.8261,
				market_cap_dominance: 11.5263,
				fully_diluted_market_cap: 366330670767.8261,
				tvl: null,
				last_updated: '2025-01-13T22:05:05.000Z',
			},
		},
	},
	{
		id: 52,
		name: 'XRP',
		symbol: 'XRP',
		slug: 'xrp',
		num_market_pairs: 1500,
		date_added: '2013-08-04T00:00:00.000Z',
		tags: [
			'medium-of-exchange',
			'enterprise-solutions',
			'arrington-xrp-capital-portfolio',
			'galaxy-digital-portfolio',
			'a16z-portfolio',
			'pantera-capital-portfolio',
			'bnb-chain-ecosystem',
			'ftx-bankruptcy-estate',
			'2017-2018-alt-season',
			'klaytn-ecosystem',
		],
		max_supply: 100000000000,
		circulating_supply: 57493120449,
		total_supply: 99986673391,
		infinite_supply: false,
		platform: null,
		cmc_rank: 3,
		self_reported_circulating_supply: null,
		self_reported_market_cap: null,
		tvl_ratio: null,
		last_updated: '2025-01-13T22:06:00.000Z',
		quote: {
			EUR: {
				price: 2.4725924811457594,
				volume_24h: 10143636594.661304,
				volume_change_24h: 74.7073,
				percent_change_1h: 0.96069151,
				percent_change_24h: 0.66381126,
				percent_change_7d: 4.94201663,
				percent_change_30d: 6.09241082,
				percent_change_60d: 207.80262517,
				percent_change_90d: 369.50116799,
				market_cap: 142157057339.8049,
				market_cap_dominance: 4.4706,
				fully_diluted_market_cap: 247259248114.57907,
				tvl: null,
				last_updated: '2025-01-13T22:05:05.000Z',
			},
		},
	},
	{
		id: 825,
		name: 'Tether USDt',
		symbol: 'USDT',
		slug: 'tether',
		num_market_pairs: 112451,
		date_added: '2015-02-25T00:00:00.000Z',
		tags: [
			'stablecoin',
			'asset-backed-stablecoin',
			'ethereum-ecosystem',
			'waves-ecosystem',
			'bitcoin-cash-ecosystem',
			'heco-ecosystem',
			'algorand-ecosystem',
			'avalanche-ecosystem',
			'solana-ecosystem',
			'polygon-ecosystem',
			'fantom-ecosystem',
			'terra-ecosystem',
			'tezos-ecosystem',
			'near-protocol-ecosystem',
			'arbitrum-ecosystem',
			'celo-ecosystem',
			'iotex-ecosystem',
			'zilliqa-ecosystem',
			'harmony-ecosystem',
			'moonriver-ecosystem',
			'cronos-ecosystem',
			'injective-ecosystem',
			'bnb-chain-ecosystem',
			'oasis-ecosystem',
			'moonbeam-ecosystem',
			'usd-stablecoin',
			'xdc-ecosystem',
			'everscale-ecosystem',
			'velas-ecosystem',
			'doge-chain-ecosystem',
			'ethereum-pow-ecosystem',
			'aptos-ecosystem',
			'sui-ecosystem',
			'optimism-ecosystem',
			'canto-ecosystem',
			'osmosis-ecosystem',
			'zksync-era-ecosystem',
			'pulsechain-ecosystem',
			'sei-ecosystem',
			'toncoin-ecosystem',
			'fiat-stablecoin',
			'viction-ecosystem',
			'gnosis-chain-ecosystem',
			'klaytn-ecosystem',
			'okexchain-ecosystem',
			'conflux-ecosystem',
			'kcc-ecosystem',
			'tron20-ecosystem',
			'kardiachain-ecosystem',
			'rsk-rbtc-ecosystem',
			'telos-ecosystem',
			'boba-network-ecosystem',
			'fusion-network-ecosystem',
			'hoo-smart-chain-ecosystem',
			'secret-ecosystem',
			'aurora-ecosystem',
			'metis-andromeda-ecosystem',
			'meter-ecosystem',
			'fuse-ecosystem',
			'syscoin-ecosystem',
			'milkomeda-ecosystem',
			'bitgert-ecosystem',
			'astar-ecosystem',
			'cube-network-ecosystem',
			'thundercore-ecosystem',
			'redlight-chain-ecosystem',
			'core-ecosystem',
			'polygon-zkevm-ecosystem',
			'eos-evm-ecosystem',
			'starknet-ecosystem',
			'mantle-ecosystem',
			'neon-evm-ecosystem',
			'manta-pacific-ecosystem',
			'scroll-ecosystem',
			'x-layer-ecosystem',
		],
		max_supply: null,
		circulating_supply: 137449718934.4178,
		total_supply: 141437091577.45093,
		platform: {
			id: 1027,
			name: 'Ethereum',
			symbol: 'ETH',
			slug: 'ethereum',
			token_address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
		},
		infinite_supply: true,
		cmc_rank: 4,
		self_reported_circulating_supply: null,
		self_reported_market_cap: null,
		tvl_ratio: null,
		last_updated: '2025-01-13T22:04:00.000Z',
		quote: {
			EUR: {
				price: 0.9754653152350509,
				volume_24h: 139652734407.64145,
				volume_change_24h: 167.2854,
				percent_change_1h: -0.02216837,
				percent_change_24h: 0.00069231,
				percent_change_7d: -0.09617454,
				percent_change_30d: -0.03275909,
				percent_change_60d: -0.04472499,
				percent_change_90d: -0.02263872,
				market_cap: 134077433409.33098,
				market_cap_dominance: 4.2165,
				fully_diluted_market_cap: 137966977121.52643,
				tvl: null,
				last_updated: '2025-01-13T22:05:05.000Z',
			},
		},
	},
	{
		id: 1839,
		name: 'BNB',
		symbol: 'BNB',
		slug: 'bnb',
		num_market_pairs: 2332,
		date_added: '2017-07-25T00:00:00.000Z',
		tags: [
			'marketplace',
			'centralized-exchange',
			'payments',
			'smart-contracts',
			'ethereum-ecosystem',
			'alameda-research-portfolio',
			'multicoin-capital-portfolio',
			'bnb-chain-ecosystem',
			'layer-1',
			'alleged-sec-securities',
			'celsius-bankruptcy-estate',
		],
		max_supply: null,
		circulating_supply: 144006109.96,
		total_supply: 144006109.96,
		infinite_supply: false,
		platform: null,
		cmc_rank: 5,
		self_reported_circulating_supply: null,
		self_reported_market_cap: null,
		tvl_ratio: null,
		last_updated: '2025-01-13T22:06:00.000Z',
		quote: {
			EUR: {
				price: 666.5949760137778,
				volume_24h: 2051610593.1168559,
				volume_change_24h: 64.0644,
				percent_change_1h: 0.19614893,
				percent_change_24h: -1.44919061,
				percent_change_7d: -7.93579394,
				percent_change_30d: -4.08236088,
				percent_change_60d: 7.32017072,
				percent_change_90d: 15.77153934,
				market_cap: 95993749414.62364,
				market_cap_dominance: 3.0189,
				fully_diluted_market_cap: 95993749414.62802,
				tvl: null,
				last_updated: '2025-01-13T22:05:05.000Z',
			},
		},
	},
	{
		id: 5426,
		name: 'Solana',
		symbol: 'SOL',
		slug: 'solana',
		num_market_pairs: 820,
		date_added: '2020-04-10T00:00:00.000Z',
		tags: [
			'pos',
			'platform',
			'solana-ecosystem',
			'cms-holdings-portfolio',
			'kenetic-capital-portfolio',
			'alameda-research-portfolio',
			'multicoin-capital-portfolio',
			'okx-ventures-portfolio',
			'layer-1',
			'ftx-bankruptcy-estate',
			'alleged-sec-securities',
			'cmc-crypto-awards-2024',
		],
		max_supply: null,
		circulating_supply: 484413647.15747553,
		total_supply: 592138300.8216394,
		infinite_supply: true,
		platform: null,
		cmc_rank: 6,
		self_reported_circulating_supply: null,
		self_reported_market_cap: null,
		tvl_ratio: null,
		last_updated: '2025-01-13T22:04:00.000Z',
		quote: {
			EUR: {
				price: 177.75474411140243,
				volume_24h: 5009165731.339125,
				volume_change_24h: 235.7347,
				percent_change_1h: 0.17403035,
				percent_change_24h: -3.33007022,
				percent_change_7d: -16.45344241,
				percent_change_30d: -16.31395555,
				percent_change_60d: -15.12805611,
				percent_change_90d: 18.55007477,
				market_cap: 86106823894.54825,
				market_cap_dominance: 2.7093,
				fully_diluted_market_cap: 105255392141.10866,
				tvl: null,
				last_updated: '2025-01-13T22:05:05.000Z',
			},
		},
	},
	{
		id: 74,
		name: 'Dogecoin',
		symbol: 'DOGE',
		slug: 'dogecoin',
		num_market_pairs: 1144,
		date_added: '2013-12-15T00:00:00.000Z',
		tags: [
			'mineable',
			'pow',
			'scrypt',
			'medium-of-exchange',
			'memes',
			'payments',
			'doggone-doggerel',
			'bnb-chain-ecosystem',
			'ftx-bankruptcy-estate',
		],
		max_supply: null,
		circulating_supply: 147611216383.70526,
		total_supply: 147611216383.70526,
		infinite_supply: true,
		platform: null,
		cmc_rank: 7,
		self_reported_circulating_supply: null,
		self_reported_market_cap: null,
		tvl_ratio: null,
		last_updated: '2025-01-13T22:06:00.000Z',
		quote: {
			EUR: {
				price: 0.32756007802561266,
				volume_24h: 3552563422.6530056,
				volume_change_24h: 146.0976,
				percent_change_1h: 0.17518793,
				percent_change_24h: 0.12275693,
				percent_change_7d: -13.30010192,
				percent_change_30d: -14.3705481,
				percent_change_60d: -13.32131848,
				percent_change_90d: 194.36121058,
				market_cap: 48351541556.10209,
				market_cap_dominance: 1.5206,
				fully_diluted_market_cap: 48351541556.105995,
				tvl: null,
				last_updated: '2025-01-13T22:05:05.000Z',
			},
		},
	},
	{
		id: 3408,
		name: 'USDC',
		symbol: 'USDC',
		slug: 'usd-coin',
		num_market_pairs: 24680,
		date_added: '2018-10-08T00:00:00.000Z',
		tags: [
			'medium-of-exchange',
			'stablecoin',
			'asset-backed-stablecoin',
			'ethereum-ecosystem',
			'waves-ecosystem',
			'bitcoin-cash-ecosystem',
			'wanchain-ecosystem',
			'coinbase-ventures-portfolio',
			'algorand-ecosystem',
			'avalanche-ecosystem',
			'solana-ecosystem',
			'hedera-hashgraph-ecosystem',
			'polygon-ecosystem',
			'terra-ecosystem',
			'near-protocol-ecosystem',
			'arbitrum-ecosystem',
			'celo-ecosystem',
			'iotex-ecosystem',
			'harmony-ecosystem',
			'moonriver-ecosystem',
			'cronos-ecosystem',
			'injective-ecosystem',
			'bnb-chain-ecosystem',
			'oasis-ecosystem',
			'moonbeam-ecosystem',
			'usd-stablecoin',
			'everscale-ecosystem',
			'velas-ecosystem',
			'doge-chain-ecosystem',
			'ethereum-pow-ecosystem',
			'aptos-ecosystem',
			'sui-ecosystem',
			'optimism-ecosystem',
			'canto-ecosystem',
			'osmosis-ecosystem',
			'zksync-era-ecosystem',
			'pulsechain-ecosystem',
			'base-ecosystem',
			'sei-ecosystem',
			'multiversx-ecosystem',
			'fiat-stablecoin',
			'viction-ecosystem',
			'gnosis-chain-ecosystem',
			'okexchain-ecosystem',
			'conflux-ecosystem',
			'kcc-ecosystem',
			'tron20-ecosystem',
			'kardiachain-ecosystem',
			'telos-ecosystem',
			'ronin-ecosystem',
			'boba-network-ecosystem',
			'kava-ecosystem',
			'secret-ecosystem',
			'aurora-ecosystem',
			'metis-andromeda-ecosystem',
			'meter-ecosystem',
			'fuse-ecosystem',
			'elastos-ecosystem',
			'syscoin-ecosystem',
			'milkomeda-ecosystem',
			'evmos-ecosystem',
			'bitgert-ecosystem',
			'astar-ecosystem',
			'thundercore-ecosystem',
			'tomb-chain-ecosystem',
			'wemix-ecosystem',
			'sx-network-ecosystem',
			'godwoken-ecosystem',
			'energi-ecosystem',
			'core-ecosystem',
			'polygon-zkevm-ecosystem',
			'starknet-ecosystem',
			'mantle-ecosystem',
			'neon-evm-ecosystem',
			'scroll-ecosystem',
			'shido-network-ecosystem',
		],
		max_supply: null,
		circulating_supply: 45644586878.561714,
		total_supply: 45644586878.561714,
		platform: {
			id: 1027,
			name: 'Ethereum',
			symbol: 'ETH',
			slug: 'ethereum',
			token_address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
		},
		infinite_supply: false,
		cmc_rank: 8,
		self_reported_circulating_supply: null,
		self_reported_market_cap: null,
		tvl_ratio: null,
		last_updated: '2025-01-13T22:04:00.000Z',
		quote: {
			EUR: {
				price: 0.9758413726548807,
				volume_24h: 9577901472.02768,
				volume_change_24h: 197.1948,
				percent_change_1h: -0.02165625,
				percent_change_24h: -0.00300319,
				percent_change_7d: -0.01344753,
				percent_change_30d: 0.01564563,
				percent_change_60d: -0.00449469,
				percent_change_90d: 0.00132358,
				market_cap: 44541876313.840614,
				market_cap_dominance: 1.4008,
				fully_diluted_market_cap: 44541876313.843636,
				tvl: null,
				last_updated: '2025-01-13T22:05:05.000Z',
			},
		},
	},
	{
		id: 2010,
		name: 'Cardano',
		symbol: 'ADA',
		slug: 'cardano',
		num_market_pairs: 1433,
		date_added: '2017-10-01T00:00:00.000Z',
		tags: [
			'dpos',
			'pos',
			'platform',
			'research',
			'smart-contracts',
			'staking',
			'cardano-ecosystem',
			'cardano',
			'bnb-chain-ecosystem',
			'layer-1',
			'alleged-sec-securities',
			'2017-2018-alt-season',
		],
		max_supply: 45000000000,
		circulating_supply: 35158211529.30004,
		total_supply: 44995123125.80176,
		infinite_supply: false,
		platform: null,
		cmc_rank: 9,
		self_reported_circulating_supply: null,
		self_reported_market_cap: null,
		tvl_ratio: null,
		last_updated: '2025-01-13T22:06:00.000Z',
		quote: {
			EUR: {
				price: 0.9212049310723901,
				volume_24h: 1486948450.9882033,
				volume_change_24h: 26.7185,
				percent_change_1h: 0.94373952,
				percent_change_24h: -3.13256339,
				percent_change_7d: -14.36786595,
				percent_change_30d: -10.50314317,
				percent_change_60d: 62.10360161,
				percent_change_90d: 166.11986698,
				market_cap: 32387917828.477356,
				market_cap_dominance: 1.0186,
				fully_diluted_market_cap: 41454221898.26021,
				tvl: null,
				last_updated: '2025-01-13T22:05:05.000Z',
			},
		},
	},
	{
		id: 1958,
		name: 'TRON',
		symbol: 'TRX',
		slug: 'tron',
		num_market_pairs: 1104,
		date_added: '2017-09-13T00:00:00.000Z',
		tags: [
			'media',
			'payments',
			'ethereum-ecosystem',
			'tron-ecosystem',
			'bnb-chain-ecosystem',
			'layer-1',
			'dwf-labs-portfolio',
			'alleged-sec-securities',
			'2017-2018-alt-season',
			'tron20-ecosystem',
		],
		max_supply: null,
		circulating_supply: 86170930891.0263,
		total_supply: 86170935534.94861,
		infinite_supply: true,
		platform: null,
		cmc_rank: 10,
		self_reported_circulating_supply: null,
		self_reported_market_cap: null,
		tvl_ratio: null,
		last_updated: '2025-01-13T22:06:00.000Z',
		quote: {
			EUR: {
				price: 0.21749298408294263,
				volume_24h: 1176941633.8516471,
				volume_change_24h: 159.6855,
				percent_change_1h: 0.22074396,
				percent_change_24h: -4.40925465,
				percent_change_7d: -16.92029075,
				percent_change_30d: -20.61485048,
				percent_change_60d: 24.73935442,
				percent_change_90d: 40.5063527,
				market_cap: 18741572900.694332,
				market_cap_dominance: 0.5897,
				fully_diluted_market_cap: 18741573910.71697,
				tvl: null,
				last_updated: '2025-01-13T22:05:05.000Z',
			},
		},
	},
	{
		id: 5805,
		name: 'Avalanche',
		symbol: 'AVAX',
		slug: 'avalanche',
		num_market_pairs: 842,
		date_added: '2020-07-13T00:00:00.000Z',
		tags: [
			'defi',
			'smart-contracts',
			'three-arrows-capital-portfolio',
			'polychain-capital-portfolio',
			'avalanche-ecosystem',
			'cms-holdings-portfolio',
			'dragonfly-capital-portfolio',
			'bnb-chain-ecosystem',
			'moonbeam-ecosystem',
			'real-world-assets',
			'layer-1',
			'zksync-era-ecosystem',
			'klaytn-ecosystem',
		],
		max_supply: 715748719,
		circulating_supply: 411100111.06505775,
		total_supply: 449436411.06505775,
		infinite_supply: false,
		platform: null,
		cmc_rank: 11,
		self_reported_circulating_supply: null,
		self_reported_market_cap: null,
		tvl_ratio: null,
		last_updated: '2025-01-13T22:04:00.000Z',
		quote: {
			EUR: {
				price: 34.174666689673955,
				volume_24h: 553571759.2221706,
				volume_change_24h: 134.476,
				percent_change_1h: 0.82128143,
				percent_change_24h: -3.94547482,
				percent_change_7d: -20.51098863,
				percent_change_30d: -29.74901831,
				percent_change_60d: 8.88494475,
				percent_change_90d: 24.83509216,
				market_cap: 14049209271.736294,
				market_cap_dominance: 0.442,
				fully_diluted_market_cap: 24460473905.38921,
				tvl: null,
				last_updated: '2025-01-13T22:05:05.000Z',
			},
		},
	},
	{
		id: 20947,
		name: 'Sui',
		symbol: 'SUI',
		slug: 'sui',
		num_market_pairs: 516,
		date_added: '2022-07-12T08:03:11.000Z',
		tags: [
			'binance-launchpool',
			'coinbase-ventures-portfolio',
			'binance-labs-portfolio',
			'electric-capital-portfolio',
			'a16z-portfolio',
			'sui-ecosystem',
			'layer-1',
			'move-vm',
			'cmc-crypto-yearbook-2024-2025',
		],
		max_supply: 10000000000,
		circulating_supply: 3009569341.533888,
		total_supply: 10000000000,
		infinite_supply: false,
		platform: null,
		cmc_rank: 12,
		self_reported_circulating_supply: null,
		self_reported_market_cap: null,
		tvl_ratio: null,
		last_updated: '2025-01-13T22:06:00.000Z',
		quote: {
			EUR: {
				price: 4.529075073587752,
				volume_24h: 2231310283.860445,
				volume_change_24h: 170.6326,
				percent_change_1h: 0.04812668,
				percent_change_24h: -2.05604071,
				percent_change_7d: -8.9358828,
				percent_change_30d: 4.63499569,
				percent_change_60d: 36.75952839,
				percent_change_90d: 129.02207602,
				market_cap: 13630565486.975033,
				market_cap_dominance: 0.4287,
				fully_diluted_market_cap: 45290750735.87994,
				tvl: null,
				last_updated: '2025-01-13T22:05:05.000Z',
			},
		},
	},
	{
		id: 11419,
		name: 'Toncoin',
		symbol: 'TON',
		slug: 'toncoin',
		num_market_pairs: 648,
		date_added: '2021-08-26T13:40:22.000Z',
		tags: [
			'pos',
			'ethereum-ecosystem',
			'bnb-chain-ecosystem',
			'layer-1',
			'ftx-bankruptcy-estate',
			'dwf-labs-portfolio',
			'toncoin-ecosystem',
			'cmc-crypto-yearbook-2024-2025',
		],
		max_supply: null,
		circulating_supply: 2540118474.3168983,
		total_supply: 5119808726.166515,
		infinite_supply: true,
		platform: null,
		cmc_rank: 13,
		self_reported_circulating_supply: null,
		self_reported_market_cap: null,
		tvl_ratio: null,
		last_updated: '2025-01-13T22:06:00.000Z',
		quote: {
			EUR: {
				price: 5.179474775534663,
				volume_24h: 253099869.8481294,
				volume_change_24h: 76.3453,
				percent_change_1h: 0.26721346,
				percent_change_24h: -0.12121946,
				percent_change_7d: -6.95724925,
				percent_change_30d: -14.02402713,
				percent_change_60d: -1.50339656,
				percent_change_90d: 2.41947659,
				market_cap: 13156479564.593967,
				market_cap_dominance: 0.4135,
				fully_diluted_market_cap: 26517920152.74656,
				tvl: null,
				last_updated: '2025-01-13T22:05:05.000Z',
			},
		},
	},
	{
		id: 512,
		name: 'Stellar',
		symbol: 'XLM',
		slug: 'stellar',
		num_market_pairs: 659,
		date_added: '2014-08-05T00:00:00.000Z',
		tags: [
			'medium-of-exchange',
			'enterprise-solutions',
			'decentralized-exchange-dex-token',
			'smart-contracts',
			'hashkey-capital-portfolio',
			'2017-2018-alt-season',
		],
		max_supply: 50001806812,
		circulating_supply: 30405396598.986595,
		total_supply: 50001786899.902374,
		infinite_supply: false,
		platform: null,
		cmc_rank: 14,
		self_reported_circulating_supply: null,
		self_reported_market_cap: null,
		tvl_ratio: null,
		last_updated: '2025-01-13T22:06:00.000Z',
		quote: {
			EUR: {
				price: 0.413827783714041,
				volume_24h: 750936906.3589892,
				volume_change_24h: 58.5295,
				percent_change_1h: 1.49779766,
				percent_change_24h: 0.13330677,
				percent_change_7d: -5.0425814,
				percent_change_30d: 1.68198223,
				percent_change_60d: 209.75029398,
				percent_change_90d: 357.61617629,
				market_cap: 12582597887.505064,
				market_cap_dominance: 0.3957,
				fully_diluted_market_cap: 20692136894.70683,
				tvl: null,
				last_updated: '2025-01-13T22:05:05.000Z',
			},
		},
	},
	{
		id: 5994,
		name: 'Shiba Inu',
		symbol: 'SHIB',
		slug: 'shiba-inu',
		num_market_pairs: 925,
		date_added: '2020-08-01T00:00:00.000Z',
		tags: ['memes', 'ethereum-ecosystem', 'doggone-doggerel', 'base-ecosystem'],
		max_supply: null,
		circulating_supply: 589255263183198.8,
		total_supply: 589508429686871.1,
		platform: {
			id: 1027,
			name: 'Ethereum',
			symbol: 'ETH',
			slug: 'ethereum',
			token_address: '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce',
		},
		infinite_supply: false,
		cmc_rank: 15,
		self_reported_circulating_supply: null,
		self_reported_market_cap: null,
		tvl_ratio: null,
		last_updated: '2025-01-13T22:05:00.000Z',
		quote: {
			EUR: {
				price: 0.000020614299036930844,
				volume_24h: 620901865.0956906,
				volume_change_24h: 111.319,
				percent_change_1h: 1.23439335,
				percent_change_24h: -1.82762004,
				percent_change_7d: -11.95291652,
				percent_change_30d: -22.50142204,
				percent_change_60d: -15.01702688,
				percent_change_90d: 17.70443973,
				market_cap: 12147084204.343845,
				market_cap_dominance: 0.382,
				fully_diluted_market_cap: 12152303054.357874,
				tvl: null,
				last_updated: '2025-01-13T22:05:05.000Z',
			},
		},
	},
	{
		id: 1975,
		name: 'Chainlink',
		symbol: 'LINK',
		slug: 'chainlink',
		num_market_pairs: 1911,
		date_added: '2017-09-20T00:00:00.000Z',
		tags: [
			'platform',
			'defi',
			'oracles',
			'smart-contracts',
			'ethereum-ecosystem',
			'substrate',
			'polkadot',
			'heco-ecosystem',
			'avalanche-ecosystem',
			'solana-ecosystem',
			'framework-ventures-portfolio',
			'polygon-ecosystem',
			'fantom-ecosystem',
			'cardano-ecosystem',
			'terra-ecosystem',
			'web3',
			'near-protocol-ecosystem',
			'arbitrum-ecosystem',
			'cardano',
			'injective-ecosystem',
			'bnb-chain-ecosystem',
			'optimism-ecosystem',
			'real-world-assets',
			'celsius-bankruptcy-estate',
			'gnosis-chain-ecosystem',
			'sora-ecosystem',
			'hoo-smart-chain-ecosystem',
			'milkomeda-ecosystem',
			'energi-ecosystem',
		],
		max_supply: null,
		circulating_supply: 638099970.4527867,
		total_supply: 1000000000,
		platform: {
			id: 1027,
			name: 'Ethereum',
			symbol: 'ETH',
			slug: 'ethereum',
			token_address: '0x514910771af9ca656af840dff83e8264ecf986ca',
		},
		infinite_supply: false,
		cmc_rank: 16,
		self_reported_circulating_supply: null,
		self_reported_market_cap: null,
		tvl_ratio: null,
		last_updated: '2025-01-13T22:06:00.000Z',
		quote: {
			EUR: {
				price: 18.88591516926484,
				volume_24h: 846591082.5978224,
				volume_change_24h: 131.8047,
				percent_change_1h: 1.44213357,
				percent_change_24h: -2.33775852,
				percent_change_7d: -18.79074358,
				percent_change_30d: -34.07132588,
				percent_change_60d: 45.07978507,
				percent_change_90d: 72.06294343,
				market_cap: 12051101911.481731,
				market_cap_dominance: 0.379,
				fully_diluted_market_cap: 18885915169.2652,
				tvl: null,
				last_updated: '2025-01-13T22:05:05.000Z',
			},
		},
	},
	{
		id: 4642,
		name: 'Hedera',
		symbol: 'HBAR',
		slug: 'hedera',
		num_market_pairs: 306,
		date_added: '2019-09-17T00:00:00.000Z',
		tags: [
			'dag',
			'marketplace',
			'enterprise-solutions',
			'defi',
			'payments',
			'dcg-portfolio',
			'hedera-hashgraph-ecosystem',
			'real-world-assets',
			'layer-1',
		],
		max_supply: 50000000000,
		circulating_supply: 38256671126.67294,
		total_supply: 50000000000,
		infinite_supply: false,
		platform: null,
		cmc_rank: 17,
		self_reported_circulating_supply: null,
		self_reported_market_cap: null,
		tvl_ratio: null,
		last_updated: '2025-01-13T22:06:00.000Z',
		quote: {
			EUR: {
				price: 0.267050597541108,
				volume_24h: 591654364.700127,
				volume_change_24h: 42.8219,
				percent_change_1h: 0.47306148,
				percent_change_24h: -1.26109732,
				percent_change_7d: -11.54632239,
				percent_change_30d: -5.94372841,
				percent_change_60d: 305.30870837,
				percent_change_90d: 393.17896964,
				market_cap: 10216466884.311663,
				market_cap_dominance: 0.3211,
				fully_diluted_market_cap: 13352529877.056274,
				tvl: null,
				last_updated: '2025-01-13T22:05:05.000Z',
			},
		},
	},
	{
		id: 6636,
		name: 'Polkadot',
		symbol: 'DOT',
		slug: 'polkadot-new',
		num_market_pairs: 858,
		date_added: '2020-08-19T00:00:00.000Z',
		tags: [
			'substrate',
			'polkadot',
			'polkadot-ecosystem',
			'three-arrows-capital-portfolio',
			'polychain-capital-portfolio',
			'heco-ecosystem',
			'arrington-xrp-capital-portfolio',
			'blockchain-capital-portfolio',
			'boostvc-portfolio',
			'cms-holdings-portfolio',
			'coinfund-portfolio',
			'fabric-ventures-portfolio',
			'fenbushi-capital-portfolio',
			'hashkey-capital-portfolio',
			'kenetic-capital-portfolio',
			'1confirmation-portfolio',
			'placeholder-ventures-portfolio',
			'pantera-capital-portfolio',
			'exnetwork-capital-portfolio',
			'web3',
			'spartan-group',
			'bnb-chain-ecosystem',
			'osmosis-ecosystem',
			'layer-1',
		],
		max_supply: null,
		circulating_supply: 1538528967.282516,
		total_supply: 1538528967.282516,
		infinite_supply: true,
		platform: null,
		cmc_rank: 18,
		self_reported_circulating_supply: null,
		self_reported_market_cap: null,
		tvl_ratio: null,
		last_updated: '2025-01-13T22:06:00.000Z',
		quote: {
			EUR: {
				price: 6.25485279690871,
				volume_24h: 377960835.45443344,
				volume_change_24h: 156.34,
				percent_change_1h: 0.77079788,
				percent_change_24h: -3.10331477,
				percent_change_7d: -16.92447885,
				percent_change_30d: -24.60288423,
				percent_change_60d: 30.0708241,
				percent_change_90d: 47.2256404,
				market_cap: 9623272214.132114,
				market_cap_dominance: 0.3026,
				fully_diluted_market_cap: 9623272214.13431,
				tvl: null,
				last_updated: '2025-01-13T22:05:05.000Z',
			},
		},
	},
	{
		id: 3957,
		name: 'UNUS SED LEO',
		symbol: 'LEO',
		slug: 'unus-sed-leo',
		num_market_pairs: 56,
		date_added: '2019-05-21T00:00:00.000Z',
		tags: [
			'marketplace',
			'centralized-exchange',
			'discount-token',
			'payments',
			'ethereum-ecosystem',
			'kenetic-capital-portfolio',
			'alameda-research-portfolio',
		],
		max_supply: null,
		circulating_supply: 924339553.9,
		total_supply: 985239504,
		platform: {
			id: 1027,
			name: 'Ethereum',
			symbol: 'ETH',
			slug: 'ethereum',
			token_address: '0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3',
		},
		infinite_supply: false,
		cmc_rank: 19,
		self_reported_circulating_supply: null,
		self_reported_market_cap: null,
		tvl_ratio: null,
		last_updated: '2025-01-13T22:06:00.000Z',
		quote: {
			EUR: {
				price: 9.135953732132403,
				volume_24h: 1094133.4818305157,
				volume_change_24h: 80.5719,
				percent_change_1h: 0.29955534,
				percent_change_24h: 1.77701273,
				percent_change_7d: 2.98139681,
				percent_change_30d: -0.28596743,
				percent_change_60d: 26.49317449,
				percent_change_90d: 53.01566293,
				market_cap: 8444723397.210307,
				market_cap_dominance: 0.2657,
				fully_diluted_market_cap: 9001102523.613108,
				tvl: null,
				last_updated: '2025-01-13T22:05:05.000Z',
			},
		},
	},
	{
		id: 1831,
		name: 'Bitcoin Cash',
		symbol: 'BCH',
		slug: 'bitcoin-cash',
		num_market_pairs: 965,
		date_added: '2017-07-23T00:00:00.000Z',
		tags: [
			'mineable',
			'pow',
			'sha-256',
			'marketplace',
			'medium-of-exchange',
			'store-of-value',
			'enterprise-solutions',
			'payments',
			'heco-ecosystem',
			'bnb-chain-ecosystem',
			'bitcoin-ecosystem',
			'layer-1',
			'2017-2018-alt-season',
		],
		max_supply: 21000000,
		circulating_supply: 19815312.5,
		total_supply: 19815312.5,
		infinite_supply: false,
		platform: null,
		cmc_rank: 20,
		self_reported_circulating_supply: null,
		self_reported_market_cap: null,
		tvl_ratio: null,
		last_updated: '2025-01-13T22:06:00.000Z',
		quote: {
			EUR: {
				price: 415.9169986610301,
				volume_24h: 386930677.1268274,
				volume_change_24h: 16.2801,
				percent_change_1h: 0.82414363,
				percent_change_24h: -5.54282466,
				percent_change_7d: -10.78407338,
				percent_change_30d: -18.87266144,
				percent_change_60d: 0.20459387,
				percent_change_90d: 21.01156276,
				market_cap: 8241525302.530393,
				market_cap_dominance: 0.2592,
				fully_diluted_market_cap: 8734256971.881699,
				tvl: null,
				last_updated: '2025-01-13T22:05:05.000Z',
			},
		},
	},
];

export async function GET(request: Request) {
	// const { searchParams } = new URL(request.url);
	// const limit = searchParams.get('limit') || 5;

	// const response = await fetch(
	// 	`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=${limit}&convert=EUR`,
	// 	{
	// 		headers: {
	// 			'X-CMC_PRO_API_KEY': API_KEY!,
	// 		},
	// 	}
	// );

	// const data = await response.json();
	// return Response.json(data);

	return Response.json(HARDCODED_DATA);
}
