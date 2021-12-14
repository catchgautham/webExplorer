import { useInfiniteQuery, useQuery } from "react-query";
import queryConfigurations from "./QueryConfigurations";
import { QK_FILE_DOWNLOAD } from "./QueryKeys";
import { URL_FILE_DOWNLOAD } from "./endpoints";
import { postData, getData } from "../../adapters";

const CallFileDownload = (): any => {
  const queryProcess = useQuery(
    [QK_FILE_DOWNLOAD],
    ({ pageParam }) =>
      getData({
        url: URL_FILE_DOWNLOAD,
      })
        .then((res) => {
          return res;
        })
        .catch((err) => {
          throw new Error(`error occured => ${JSON.stringify(err)}`);
        }),
    {
      ...queryConfigurations,
    }
  );

  return queryProcess;
};
export default CallFileDownload;
