export interface Ticker {
	timestamp: string | number;
	price: number;
	volume_24h: number;
	market_cap: number;
	[key: string]: unknown;
}
