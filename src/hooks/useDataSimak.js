import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getDataSimak } from "../services/apiSimak";

export function useDataSimak({ nim }) {
  const { data: dataSimak, isLoading: isSimakLoading } = useQuery({
    queryFn: () => getDataSimak({ nim }),
    queryKey: ["dataSimak"],
  });

  return {
    dataSimak,
    isSimakLoading,
  };

  // const queryClient = useQueryClient();
  // const { mutate: dataSimak, isLoading: isSimakLoading } = useMutation({
  //   mutationFn: getDataSimak,
  //   onSuccess: (dataSimak) => {
  //     queryClient.setQueryData(["dataSimak"]);
  //   },
  //   onError: (err) => {
  //     toast.error(err);
  //   },
  // });

  return { dataSimak, isSimakLoading };
}
