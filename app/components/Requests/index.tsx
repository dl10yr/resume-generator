import { LinksFunction } from "@remix-run/node";
import React from "react";

import styles from "./styles.css?url";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const Requests: React.FC = () => {
  return (
    <div className="requests">
      <div>
        本人希望記入欄（特に給料、職種、勤務時間、勤務地、その他についての希望などがあれば記入）
      </div>
    </div>
  );
};
