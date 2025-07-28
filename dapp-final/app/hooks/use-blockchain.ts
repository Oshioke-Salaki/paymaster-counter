import { useReadContract } from "@starknet-react/core";
import { Abi } from "starknet";

const COUNTER_CONTRACT_ADDRESS =
  "0x040261e1bdc9b58ca9a6ff68942c8b573b7673518de7a2104c066bcd423ce2ff";

// Utility function to perform contract read operations
export function useContractFetch(
  abi: Abi,
  functionName: string,
  args: any[] = []
) {
  const {
    data: readData,
    refetch: dataRefetch,
    isError: readIsError,
    isLoading: readIsLoading,
    isFetching: readIsReFecthing,
    error: readError,
  } = useReadContract({
    abi: abi,
    functionName: functionName,
    address: COUNTER_CONTRACT_ADDRESS,
    args: args,
    refetchInterval: 120000,
  });

  return {
    readData,
    dataRefetch,
    readIsError,
    readIsLoading,
    readError,
    readIsReFecthing,
  };
}
