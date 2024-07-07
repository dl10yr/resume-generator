import { LinksFunction } from "@remix-run/node";
import React from "react";

import styles from "./styles.css?url";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const HeaderAndPersonalInfo: React.FC = () => {
  return (
    <div className="header-personalinfo">
      <div className="left">
        <div className="header">
          <h1>履歴書</h1>
          <p>年 月 日現在</p>
        </div>
        <div className="name">
          <div className="furigana">
            <div className="label">ふりがな</div>
            <div className="value">やまだたろう</div>
          </div>
          <div className="kanji">
            <div className="label">氏名</div>
            <div className="value">山田太郎</div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="photo">
          <p>写真を貼る位置</p>
          <p>縦36～40mm 横24～30mm</p>
        </div>
      </div>
    </div>
  );
};
