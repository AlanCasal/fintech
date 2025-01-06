import { useQuery } from '@tanstack/react-query';
import { CryptoInfo } from '../interfaces';

export const useGetCryptoInfo = (id: string) => {
	const { data, isLoading, error } = useQuery<CryptoInfo, Error>({
		queryKey: ['info', id],
		queryFn: async () => {
			const response = await fetch(`/api/info?ids=${id}`);
			const info = await response.json();
			return info[+id];
		},
	});

	return { data, isLoading, error };
};
