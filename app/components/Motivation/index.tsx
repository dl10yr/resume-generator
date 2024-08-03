import { LinksFunction } from "@remix-run/node";
import React from "react";

import styles from "./styles.css?url";
import linkifyStr from "linkify-string";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles, type: "text/css" },
];

export const Motivation: React.FC<{ motivation: string }> = ({
  motivation,
}) => {
  const linkifiedString = {
    __html: linkifyStr(motivation, {
      className: "motivation-content-link",
      target: "_blank",
      rel: "noopener noreferrer",
    }),
  };
  return (
    <div className="motivation">
      <div className="motivation-title">志望動機</div>
      <div
        className="motivation-content"
        dangerouslySetInnerHTML={linkifiedString}
      />
    </div>
  );
};
