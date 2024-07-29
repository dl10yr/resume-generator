import { LinksFunction } from "@remix-run/node";
import React from "react";

import styles from "./styles.scss?url";
import { ResumeCommuteAndDependent } from "~/lib/resume";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles, type: "text/css" },
];

export const CommuteAndDependent: React.FC<{
  commuteAndDependent: ResumeCommuteAndDependent;
}> = ({ commuteAndDependent }) => {
  return (
    <div className="commute-and-dependent">
      <div className="commute-and-dependent-item">
        <div className="commute-and-dependent-item-label">通勤時間</div>
        <div className="commute-and-dependent-item-value">
          {commuteAndDependent.commuteTime}
        </div>
      </div>
      <div className="commute-and-dependent-item">
        <div className="commute-and-dependent-item-label">
          扶養家族（配偶者を除く）
        </div>
        <div className="commute-and-dependent-item-value">
          {commuteAndDependent.numofDependentFamily} 人
        </div>
      </div>
      <div className="commute-and-dependent-item">
        <div className="commute-and-dependent-item-label">配偶者</div>
        <div className="commute-and-dependent-item-value">
          {commuteAndDependent.hasSpouse}
        </div>
      </div>
      <div className="commute-and-dependent-item">
        <div className="commute-and-dependent-item-label">配偶者の扶養義務</div>
        <div className="commute-and-dependent-item-value">
          {commuteAndDependent.hasSpousalSupport}
        </div>
      </div>
    </div>
  );
};
