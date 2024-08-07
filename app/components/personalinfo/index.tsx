/* eslint-disable @typescript-eslint/no-unused-vars */
import { LinksFunction } from "@remix-run/node";
import React from "react";

import styles from "./styles.scss?url";
import { ResumeAddress } from "~/lib/resume";
import { differenceInYears, format, formatDate, parse } from "date-fns";
import { parseWithOptions } from "date-fns/fp";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles, type: "text/css" },
];

interface PersonalInfoProps {
  birthdate: string;
  sex: string;
  address1: ResumeAddress;
  phone1: string;
  email1: string;
  address2: ResumeAddress;
  phone2: string;
  email2: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const PersonalInfo: React.FC<PersonalInfoProps> = ({
  birthdate,
  sex,
  address1,
  phone1,
  email1,
  address2,
  phone2,
  email2,
}) => {
  const now = new Date();
  const birthdateDate = parse(birthdate, "yyyy/MM/dd", new Date());
  const age = differenceInYears(now, birthdateDate);

  const formattedBirthDateString = `${format(birthdateDate, "yyyy年MM月dd日 生")} （満${age}歳）`;

  return (
    <div className="details">
      <div className="details-left">
        <div className="details-left-birthdate">
          <div className="value">{formattedBirthDateString}</div>
        </div>
        <div className="address1">
          <div className="furigana">
            <div className="label">ふりがな</div>
            <div className="value">{address1.furigana}</div>
          </div>
          <div className="kanji">
            <div className="up">
              <div className="label">現住所 </div>
              <div className="value">〒{address1.postalCode}</div>
            </div>
            <div className="down">{address1.kanji}</div>
          </div>
        </div>
        <div className="address2">
          <div className="furigana">
            <div className="label">ふりがな</div>
            <div className="value">{address2.furigana}</div>
          </div>
          <div className="kanji">
            <div className="up">
              <div className="label">現住所 </div>
              <div className="value">〒{address2.postalCode}</div>
            </div>
            <div className="down">{address2.kanji}</div>
          </div>
        </div>
      </div>
      <div className="details-right">
        <div className="seibetsu">
          <div className="label">性別</div>
          <div className="value">{sex}</div>
        </div>
        <div className="phone-email1">
          <div className="phone">
            <div className="label">電話</div>
            <div className="value">{phone1}</div>
          </div>
          <div className="email">
            <div className="label">Email</div>
            <a className="value" href={`mailto:${email1}`}>
              {email1}
            </a>
          </div>
        </div>
        <div className="phone-email2">
          <div className="phone">
            <div className="label">電話</div>
            <div className="value">{phone2}</div>
          </div>
          <div className="email">
            <div className="label">Email</div>
            <a className="value" href={`mailto:${email2}`}>
              {email2}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
