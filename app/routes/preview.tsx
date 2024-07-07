import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  HeaderAndPersonalInfo,
  links as headerAndPersonalInfoLinks,
} from "~/components/HeaderAndPersonalInfo";
import {
  PersonalInfo,
  links as personalInfoLinks,
} from "~/components/personalinfo";

import styles from "~/styles/preview.css?url";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix SPA" },
    { name: "description", content: "Welcome to Remix (SPA Mode)!" },
  ];
};

export const links: LinksFunction = () => [
  ...headerAndPersonalInfoLinks(),
  ...personalInfoLinks(),
  { rel: "stylesheet", href: styles },
];

export default function Preview() {
  return (
    <div className="resume">
      <div className="left">
        <HeaderAndPersonalInfo />
        <PersonalInfo name="" age={13} email="" />
        <div className="education">
          <table>
            <tr>
              <th>年 月</th>
              <th>学歴・職歴</th>
            </tr>
            {/* <!-- Sample entries --> */}
            <tr>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
      </div>

      <div className="right">
        <div className="licenses">
          <table>
            <tr>
              <th>年 月</th>
              <th>免許・資格</th>
            </tr>
            {/* <!-- Sample entries --> */}
            <tr>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
        <div className="additional-info">
          <h2>志望の動機、特技、自己PR、アピールポイントなど</h2>
          <textarea></textarea>
        </div>
        <div className="requests">
          <h2>
            本人希望記入欄（特に給料、職種、勤務時間、勤務地、その他についての希望などがあれば記入）
          </h2>
          <textarea></textarea>
        </div>
      </div>
    </div>
  );
}
