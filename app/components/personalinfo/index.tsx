/* eslint-disable @typescript-eslint/no-unused-vars */
import { LinksFunction } from "@remix-run/node";
import React from "react";

import styles from "./styles.scss?url";

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
      <div className="details-left">
        <div className="details-left-birthdate">
          <div className="value">年月日</div>
        </div>
        <div className="address1">
          <div className="furigana">
            <div className="label">ふりがな</div>
            <div className="value">じゅうしょ</div>
          </div>
          <div className="kanji">
            <div className="up">
              <div className="label">現住所 郵便番号</div>
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
      <div className="details-right">
        <div className="seibetsu">
          <div className="label">性別</div>
          <div className="value">男</div>
        </div>
        <div className="phone-email1">
          <div className="phone">
            <div className="label">電話</div>
            <div className="value">0120-111-111</div>
          </div>
          <div className="email">
            <div className="label">Email</div>
            <div className="value">example@example.com</div>
          </div>
        </div>
        <div className="phone-email2">
          <div className="phone">
            <div className="label">電話</div>
            <div className="value">0120-111-111</div>
          </div>
          <div className="email">
            <div className="label">Email</div>
            <div className="value">example@example.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};
PersonalInfo.displayName = "PersonalInfo";
