import { LinksFunction } from "@remix-run/node";
import React from "react";

import styles from "./styles.css?url";
import { ResumeTableData } from "~/lib/resume";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles, type: "text/css" },
];

export const Education: React.FC<{ educationWork: ResumeTableData }> = ({
  educationWork,
}) => {
  const numOfDisplayRows = 11;
  const displayEducationWork = Array(numOfDisplayRows)
    .fill({
      date: "",
      name: "",
    })
    .map((_, index) => {
      return educationWork[index] || { date: "", name: "" };
    });

  return (
    <div className="education">
      <table>
        <tr>
          <th>年</th>
          <th>月</th>
          <th>学歴・職歴</th>
        </tr>
        {displayEducationWork.map((data) => {
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
