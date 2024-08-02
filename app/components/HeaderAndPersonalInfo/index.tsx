import { LinksFunction } from "@remix-run/node";
import React, { useEffect } from "react";

import styles from "./styles.scss?url";
import { ResumeName } from "~/lib/resume";
import { format } from "date-fns";
import { ja } from "date-fns/locale";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles, type: "text/css" },
];

export const HeaderAndPersonalInfo: React.FC<{
  name: ResumeName;
  photofile: File | undefined;
}> = ({ name, photofile }) => {
  const photoRef = React.useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (photofile !== undefined) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const current = photoRef.current;
        if (current != null) {
          current!.src = e?.target?.result as string;
        }
      };
      reader.readAsDataURL(photofile);
    }
  }, [photofile]);

  const dateString = format(new Date(), "yyyy年MM月dd日", { locale: ja });

  return (
    <div className="header-personalinfo">
      <div className="header-personalinfo-left">
        <div className="header-personalinfo-left-header">
          <h1>履歴書</h1>
          <p>{dateString}現在</p>
        </div>
        <div className="header-personalinfo-left-name">
          <div className="furigana">
            <div className="label">ふりがな</div>
            <div className="value">{name.furigana}</div>
          </div>
          <div className="kanji">
            <div className="label">氏名</div>
            <div className="value">{name.kanji}</div>
          </div>
        </div>
      </div>
      <div className="header-personalinfo-right">
        <img className="photo" ref={photoRef} alt=""></img>
      </div>
    </div>
  );
};
