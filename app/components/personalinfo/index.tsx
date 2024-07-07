/* eslint-disable @typescript-eslint/no-unused-vars */
import { LinksFunction } from "@remix-run/node";
import React from "react";

import styles from "./styles.css?url";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

interface PersonalInfoProps {
  name: string;
  age: number;
  email: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const PersonalInfo: React.FC<PersonalInfoProps> = ({
  name,
  age,
  email,
}) => {
  return (
    <div data-container>
      <div className="details">
        <table>
          <tr>
            <th>ふりがな</th>
            <td></td>
          </tr>
          <tr>
            <th>氏名</th>
            <td></td>
          </tr>
          <tr>
            <th>生年月日</th>
            <td>年 月 日生 (満 歳)</td>
          </tr>
          <tr>
            <th>性別</th>
            <td></td>
          </tr>
          <tr>
            <th>ふりがな</th>
            <td></td>
          </tr>
          <tr>
            <th>現住所</th>
            <td>〒</td>
          </tr>
          <tr>
            <th>電話</th>
            <td></td>
          </tr>
          <tr>
            <th>ふりがな</th>
            <td></td>
          </tr>
          <tr>
            <th>連絡先</th>
            <td>〒（現住所以外に連絡を希望する場合のみ記入）</td>
          </tr>
          <tr>
            <th>電話</th>
            <td></td>
          </tr>
        </table>
      </div>
      <div className="photo">
        <p>写真を貼る位置</p>
        <p>縦36～40mm 横24～30mm</p>
      </div>
    </div>
  );
};
PersonalInfo.displayName = "PersonalInfo";
