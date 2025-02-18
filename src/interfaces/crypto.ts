export interface Currency {
	status: Status;
	data: CurrencyData[];
}

export interface CurrencyData {
	id: number;
	name: string;
	symbol: string;
	slug: string;
	num_market_pairs: number;
	date_added: string;
	tags: string[];
	max_supply: null | number;
	circulating_supply: number;
	total_supply: number;
	infinite_supply: boolean;
	platform: Platform | null;
	cmc_rank: number;
	self_reported_circulating_supply: null;
	self_reported_market_cap: null;
	tvl_ratio: null;
	last_updated: string;
	quote: Quote;
}

interface Quote {
	EUR: EUR;
}

interface EUR {
	price: number;
	volume_24h: number;
	volume_change_24h: number;
	percent_change_1h: number;
	percent_change_24h: number;
	percent_change_7d: number;
	percent_change_30d: number;
	percent_change_60d: number;
	percent_change_90d: number;
	market_cap: number;
	market_cap_dominance: number;
	fully_diluted_market_cap: number;
	tvl: null;
	last_updated: string;
}

interface Platform {
	id: number;
	name: string;
	symbol: string;
	slug: string;
	token_address: string;
}

interface Status {
	timestamp: string;
	error_code: number;
	error_message: null;
	elapsed: number;
	credit_count: number;
	notice: null;
	total_count: number;
}

export interface Cryptocurrency {
	id: number;
	name: string;
	symbol: string;
	category: string;
	description: string;
	slug: string;
	logo: string;
	subreddit: string;
	notice: string;
	tags: string[];
	tagNames: string[];
	tagGroups: string[];
	urls: Urls;
	platform: null | string;
	dateAdded: string;
	twitterUsername: string;
	isHidden: number;
	dateLaunched: null | string;
	contractAddress: ContractAddress[];
	selfReportedCirculatingSupply: null | number;
	selfReportedTags: null | string[];
	selfReportedMarketCap: null | number;
	infiniteSupply: boolean;
}

interface Urls {
	website: string[];
	twitter: string[];
	messageBoard: string[];
	chat: string[];
	facebook: string[];
	explorer: string[];
	reddit: string[];
	technicalDoc: string[];
	sourceCode: string[];
	announcement: string[];
}

interface ContractAddress {
	contractAddress: string;
	platform: Platform;
}

interface Platform {
	name: string;
	coin: Coin;
}

interface Coin {
	id: string;
	name: string;
	symbol: string;
	slug: string;
}
