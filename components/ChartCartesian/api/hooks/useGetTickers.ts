import { useQuery } from '@tanstack/react-query';
import { Ticker } from '../interfaces';

const GET_TICKERS_KEY = 'GET_TICKERS_KEY';

export const useGetTickers = () => {
	const { data, isLoading, error } = useQuery<Ticker[], Error>({
		queryKey: [GET_TICKERS_KEY],
		queryFn: async (): Promise<Ticker[]> => {
			const response = await fetch('/api/tickers');
			const tickers = await response.json();
			return tickers;
		},
	});

	return { data, isLoading, error };
};
