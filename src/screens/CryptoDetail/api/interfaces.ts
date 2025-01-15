interface Urls {
	website: string[];
	twitter: string[];
	message_board: string[];
	chat: string[];
	facebook: string[];
	explorer: string[];
	reddit: string[];
	technical_doc: string[];
	source_code: string[];
	announcement: string[];
}

export interface CryptoInfo {
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
	'tag-names': string[];
	'tag-groups': string[];
	urls: Urls;
	platform: null;
	date_added: string;
	twitter_username: string;
	is_hidden: number;
	date_launched: string;
	contract_address: string[];
	self_reported_circulating_supply: null;
	self_reported_tags: null;
	self_reported_market_cap: null;
	infinite_supply: boolean;
}
