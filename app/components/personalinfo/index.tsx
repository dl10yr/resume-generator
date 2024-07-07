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
    <div className="details">
      <div className="left">
        <div className="birthdate">年月日</div>
        <div className="address1">
          <div className="furigana">
            <div className="label">ふりがな</div>
            <div className="value">じゅうしょ</div>
          </div>
          <div className="kanji">
            <div className="up">
              <div className="label">現住所</div>
              <div className="value">郵便番号</div>
            </div>
            <div className="down">住所</div>
          </div>
        </div>
        <div className="address2">
          <div className="furigana">
            <div className="label">ふりがな</div>
            <div className="value">じゅうしょ</div>
          </div>
          <div className="kanji">
            <div className="up">
              <div className="label">現住所</div>
              <div className="value">郵便番号</div>
            </div>
            <div className="down">住所</div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="seibetsu">
          <div className="label">性別</div>
          <div className="value">男</div>
        </div>
        <div className="phone1">
          <div className="label">電話</div>
          <div className="value">男</div>
        </div>
        <div className="phone2">
          <div className="label">電話</div>
          <div className="value">男</div>
        </div>
      </div>
    </div>
  );
};
PersonalInfo.displayName = "PersonalInfo";
