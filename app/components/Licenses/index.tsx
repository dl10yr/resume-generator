import { LinksFunction } from "@remix-run/node";
import React from "react";

import styles from "./styles.css?url";
import { ResumeTableData } from "~/lib/resume";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles, type: "text/css" },
];

export const Licenses: React.FC<{ licenses: ResumeTableData }> = ({
  licenses,
}) => {
  const numOfDisplayRows = 10;
  const displayLicenses = Array(numOfDisplayRows)
    .fill({
      date: "",
      name: "",
    })
    .map((_, index) => {
      return licenses[index] || { date: "", name: "" };
    });

  return (
    <div className="licenses">
      <table>
        <tr>
          <th>年</th>
          <th>月</th>
          <th>免許・資格</th>
        </tr>
        {displayLicenses.map((data) => {
          const [year, month] = data.date.split("/");
          return (
            <tr key={data.date}>
              <td>{year}</td>
              <td>{month}</td>
              <td>{data.name}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
