export interface QueryConfigurationsInterface {
  refetchInterval: number;
  staleTime: number;
  cacheTime: number;
  retry: number;
  retryDelay: number;
  refetchOnReconnect: boolean;
  refetchOnWindowFocus: boolean;
}

const queryConfiguration: QueryConfigurationsInterface = {
  refetchInterval: 5000,
  staleTime: 5000,
  cacheTime: 30000,
  retry: 2,
  retryDelay: 250,
  refetchOnReconnect: true,
  refetchOnWindowFocus: true,
}

export default queryConfiguration;