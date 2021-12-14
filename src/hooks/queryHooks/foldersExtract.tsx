import { useInfiniteQuery } from "react-query";
import queryConfigurations from "./QueryConfigurations";
import { QK_FOLDERS_EXTRACT } from "./QueryKeys";
import { URL_FOLDERS_EXTRACT } from "./endpoints";
import { postData } from "../../adapters";

interface FoldersExtractProps {
  page?: number;
  size?: number;
  filterMap: any;
}

const foldersExtractDefaultProps = {
  filterMap: {},
  sortMap: {},
  page: 1,
  size: 4,
};
const CallFoldersExtract = (props: FoldersExtractProps): any => {
  const newProps = { ...foldersExtractDefaultProps, ...props };
  const { filterMap, sortMap, page, size } = newProps;
  const requestBody = { filterMap, sortMap, page, size };

  const queryProcess = useInfiniteQuery(
    [QK_FOLDERS_EXTRACT],
    ({ pageParam }) =>
      postData({
        url: URL_FOLDERS_EXTRACT,
        requestBody: { ...requestBody, page: pageParam },
      })
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          throw new Error(`error occured => ${JSON.stringify(err)}`);
        }),
    {
      ...queryConfigurations,
      getNextPageParam: (lastPage, pages) => {
        return pages.length * size < lastPage.totalRecords && lastPage.page + 1;
      },
    }
  );

  return queryProcess;
};
CallFoldersExtract.defaultProps = foldersExtractDefaultProps;

export default CallFoldersExtract;
