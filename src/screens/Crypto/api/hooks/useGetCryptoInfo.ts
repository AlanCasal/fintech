import { useQuery } from '@tanstack/react-query';

const GET_CRYPTO_INFO_KEY = 'GET_CRYPTO_INFO_KEY';

export const useGetCryptoInfo = (ids: string) => {
	const {
		data: currenciesData,
		isLoading: infoLoading,
		error: infoError,
	} = useQuery({
		enabled: !!ids,
		queryKey: [GET_CRYPTO_INFO_KEY, ids],
		queryFn: async () => {
			const response = await fetch(`/api/info?ids=${ids}`);
			const data = await response.json();
			return data;
		},
	});

	return { currenciesData, infoLoading, infoError };
};
