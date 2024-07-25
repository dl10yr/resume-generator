import { LinksFunction } from "@remix-run/node";
import React from "react";

import styles from "./styles.css?url";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const Motivation: React.FC = () => {
  return (
    <div className="motivation">
      <div>志望動機</div>
    </div>
  );
};
