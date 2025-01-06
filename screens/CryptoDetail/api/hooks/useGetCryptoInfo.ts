import { useQuery } from '@tanstack/react-query';
import { CryptoInfo } from '../interfaces';

const GET_CRYPTO_INFO_KEY = 'GET_CRYPTO_INFO_KEY';

export const useGetCryptoInfo = (id: string) => {
	const { data, isLoading, error } = useQuery<CryptoInfo, Error>({
		queryKey: [GET_CRYPTO_INFO_KEY, id],
		queryFn: async () => {
			const response = await fetch(`/api/info?ids=${id}`);
			const info = await response.json();
			return info[+id];
		},
	});

	return { data, isLoading, error };
};
