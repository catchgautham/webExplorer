import React, { ReactFragment } from "react";
import CallFileDownload from "../../../hooks/queryHooks/fileDownload";
import "./File.scss";

interface FolderProps {
  fileName: string;
  fileSize?: number;
  itemsCount?: number;
  onClickFile?: () => void;
}
const File: React.FC<FolderProps> = (
  props: FolderProps
): React.ReactElement => {
  const { fileName, fileSize, itemsCount, onClickFile } = props;
  const imageData = CallFileDownload();
  console.log(imageData);

 /*  const ImageRender = ({ imageData }) => (
    <img src={`data:image/jpeg;base64,${imageData}`} />
  ); */

  return (
    <div className="file-outer" onClick={onClickFile}>
      <div className="file-icon">
        <img src={""} alt="a" />
      </div>
      <div className="file-details">
        <span className="file-name">{fileName}</span>
      </div>
    </div>
  );
};
File.defaultProps = { fileSize: 0, itemsCount: 0 };
export default File;
