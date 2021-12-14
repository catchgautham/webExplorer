import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router";
import Folder from "../../components/unicellular/folder/Folder";
import File from "../../components/unicellular/file/File";
import CallFoldersExtract from "../../hooks/queryHooks/foldersExtract";
import CallFileDownload from "../../hooks/queryHooks/fileDownload";
import queryConfigurations from "../../hooks/queryHooks/QueryConfigurations";
import { QK_FILE_DOWNLOAD } from "../../hooks/queryHooks/QueryKeys";
import { URL_FILE_DOWNLOAD } from "../../hooks/queryHooks/endpoints";
import LoadingSymbol from "../../assets/svgs/loadingSymbol";
import "./Explorer.scss";
import { useQuery } from "react-query";
import { getData } from "../../adapters";
import Axios, { AxiosError, AxiosRequestConfig } from "axios";

interface FolderAPIProps {
  folderName: string;
  fileName: string;
  // folderSize: number;
  // itemsCount: number;
}
interface ExplorerProps {
  renderPath: string;
}
const Explorer: React.FC<ExplorerProps> = (props: ExplorerProps) => {
  const { renderPath } = props;
  const [folderCurrent, setFolderCurrent] = useState<string>(renderPath);
  const DownFolder = (folderItem: FolderAPIProps) => {
    setFolderCurrent(renderPath.concat("\\", folderItem.folderName));
  };
  const {
    isLoading,
    isError,
    data: foldersData,
  } = CallFoldersExtract({
    filterMap: { directory: folderCurrent },
  });
  const DownloadFile = (folderItem: FolderAPIProps) => {};

  const renderFolders = () => {
    if (isLoading) {
      return (
        <div className="loading-wrapper">
          <LoadingSymbol />
        </div>
      );
    }
    if (foldersData) {
      if (Array.isArray(foldersData.pages)) {
        return foldersData.pages.map((foldersPage: any) => {
          if (foldersPage && Array.isArray(foldersPage.data)) {
            return foldersPage.data.map((folderItem: FolderAPIProps) => {
              return (
                <div className="folder-wrapper">
                  {folderItem.folderName ? (
                    <Folder
                      onClickFolder={() => DownFolder(folderItem)}
                      folderName={folderItem.folderName}
                    />
                  ) : (
                    <File
                      onClickFile={() => DownloadFile(folderItem)}
                      fileName={folderItem.fileName}
                    />
                  )}
                </div>
              );
            });
          }
          return <div />;
        });
      }
    }
    return <div />;
  };
  return <div className="explorer-container">{renderFolders()}</div>;
};
export default Explorer;
