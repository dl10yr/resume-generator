import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Education, links as educationLinks } from "~/components/Education";
import {
  HeaderAndPersonalInfo,
  links as headerAndPersonalInfoLinks,
} from "~/components/HeaderAndPersonalInfo";
import { Licenses, links as licensesLinks } from "~/components/Licenses";
import { Motivation, links as motivationLinks } from "~/components/Motivation";
import {
  PersonalInfo,
  links as personalInfoLinks,
} from "~/components/personalinfo";
import { Requests, links as requestsLinks } from "~/components/Requests";

import styles from "~/styles/preview.css?url";

export const meta: MetaFunction = () => {
  return [{ title: "resume" }];
};

export const links: LinksFunction = () => [
  ...headerAndPersonalInfoLinks(),
  ...personalInfoLinks(),
  ...educationLinks(),
  ...licensesLinks(),
  ...motivationLinks(),
  ...requestsLinks(),
  { rel: "stylesheet", href: styles },
];

export default function Preview() {
  return (
    <div className="resume">
      <div className="left">
        <HeaderAndPersonalInfo />
        <PersonalInfo name="" age={13} email="" />
        <Education />
      </div>

      <div className="right">
        <Licenses />
        <div className="motivation-requests">
          <Motivation />
          <Requests />
        </div>
      </div>
    </div>
  );
}
