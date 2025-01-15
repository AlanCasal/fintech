import { useQuery } from '@tanstack/react-query';

const GET_CRYPTO_LIST_KEY = 'GET_CRYPTO_LIST_KEY';

export const useGetCryptoList = () => {
	const {
		data: currencies,
		isLoading: currenciesLoading,
		error: currenciesError,
	} = useQuery({
		queryKey: [GET_CRYPTO_LIST_KEY],
		queryFn: async () => {
			const response = await fetch('/api/listings');
			const data = await response.json();
			return data;
		},
	});

	return { currencies, currenciesLoading, currenciesError };
};
