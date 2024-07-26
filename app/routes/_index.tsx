import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import React, { useContext } from "react";
import { sourceFilesContext } from "~/root";

import styles from "~/styles/_index.scss?url";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix SPA" },
    { name: "description", content: "Welcome to Remix (SPA Mode)!" },
  ];
};

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export default function Index() {
  const { sourceFilesData, setSourceFilesData } =
    useContext(sourceFilesContext);

  const selectedYamlName =
    sourceFilesData.yaml !== undefined ? sourceFilesData.yaml.name : "";
  const faceImageName = sourceFilesData.faceImage?.name;

  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event?.target?.files;
    if (files === null) return;
    const file = files[0];
    if (file !== null) {
      setSourceFilesData({ ...sourceFilesData, yaml: file });
    }
  };

  const faceImageFileInputRef = React.useRef<HTMLInputElement>(null);
  const handleFaceImageButtonClick = () => {
    faceImageFileInputRef.current?.click();
  };

  const handleFaceImageFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event?.target?.files;
    if (files === null) return;
    const file = files[0];
    if (file !== null) {
      setSourceFilesData({ ...sourceFilesData, faceImage: file });
    }
  };

  return (
    <div className="home">
      <div className="home-header">
        <h1 className="title">履歴書ジェネレーター</h1>
        <p className="description">
          ※全ての処理はローカル（端末側）で完結するので安全に利用できます
        </p>
        <p className="description">
          yamlのサンプルはここからダウンロードしてください
        </p>
      </div>

      <div className="step">
        <h2 className="step-title">1. yamlを参照</h2>
        <p>選択されたファイル: {selectedYamlName}</p>
        <input
          type="file"
          ref={fileInputRef}
          onChange={(e) => handleFileChange(e)}
          style={{ display: "none" }}
          accept=".yaml,.yml"
        />
        <button onClick={handleButtonClick}>yamlファイルを参照</button>
      </div>
      <div className="step">
        <h2 className="step-title">2. 顔写真を参照</h2>
        <p>選択されたファイル: {faceImageName}</p>
        <input
          type="file"
          ref={faceImageFileInputRef}
          onChange={(e) => handleFaceImageFileChange(e)}
          style={{ display: "none" }}
          accept=".jpg,.png"
        />
        <button onClick={handleFaceImageButtonClick}>
          顔写真ファイルを参照
        </button>
      </div>
      <div className="step">
        <h2 className="step-title">3. 履歴書を作成する</h2>
        {sourceFilesData.yaml !== undefined &&
        sourceFilesData.faceImage !== undefined ? (
          <Link aria-label="作成する" to="/preview">
            作成する
          </Link>
        ) : (
          <button disabled>作成する</button>
        )}
      </div>
    </div>
  );
}
