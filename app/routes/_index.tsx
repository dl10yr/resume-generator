import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import React, { useContext } from "react";
import { sourceFilesContext } from "~/root";

import styles from "~/styles/_index.scss?url";

export const meta: MetaFunction = () => {
  return [{ title: "resume-generator" }];
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles, type: "text/css" },
];

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
          ※全ての処理はクライアント側（端末側）で完結するので安全に利用できます。
          <br />
          yamlとpng/jpgのファイル選択後、作成ボタンを押すと履歴書が表示されます。
          <br />
          「印刷」からpdfに保存できます。
        </p>
        <p className="description">
          yamlのサンプルは
          <a href="/resumeinfo-sample.yaml" download>
            ここ
          </a>
          からダウンロードしてください
        </p>
        <div>
          <Link aria-label="サンプルを見る" to="/sample">
            <button className="home-button">サンプルを見る</button>
          </Link>
        </div>
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
        <button className="home-button" onClick={handleButtonClick}>
          yamlファイルを参照
        </button>
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
        <button className="home-button" onClick={handleFaceImageButtonClick}>
          顔写真ファイルを参照
        </button>
      </div>
      <div className="step">
        <h2 className="step-title">3. 履歴書を作成する</h2>
        {sourceFilesData.yaml !== undefined &&
        sourceFilesData.faceImage !== undefined ? (
          <Link aria-label="作成する" to="/preview">
            <button className="home-button">作成する</button>
          </Link>
        ) : (
          <button disabled className="home-button">
            作成する
          </button>
        )}
      </div>
    </div>
  );
}
