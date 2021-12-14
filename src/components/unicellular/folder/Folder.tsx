import React, { ReactFragment } from "react";
import "./Folder.scss";

interface FolderProps {
  folderName: string;
  folderSize?: number;
  itemsCount?: number;
  onClickFolder?: () => void;
}
const Folder: React.FC<FolderProps> = (
  props: FolderProps
): React.ReactElement => {
  const { folderName, folderSize, itemsCount, onClickFolder } = props;
  return (
    <div className="folder-outer" onClick={onClickFolder}>
      <div className="folder-icon" />
      <div className="folder-details">
        <span className="folder-name">{folderName}</span>
      </div>
    </div>
  );
};
Folder.defaultProps = { folderSize: 0, itemsCount: 0 };
export default Folder;
