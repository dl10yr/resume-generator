import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { useContext, useEffect, useState } from "react";
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
import { sourceFilesContext } from "~/root";
import styles from "~/styles/preview.css?url";
import { parseYaml, ResumeInfo } from "~/lib/resume";
import {
  CommuteAndDependent,
  links as commuteAndDependentLinks,
} from "~/components/CommuteAndDependent";

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
  ...commuteAndDependentLinks(),
  { rel: "stylesheet", href: styles },
];

export default function Preview() {
  const { sourceFilesData } = useContext(sourceFilesContext);
  const [resumeInfo, setResumeInfo] = useState<ResumeInfo | null>(null);

  // Function to read YAML file
  async function readYamlFile(): Promise<string | null> {
    const file = sourceFilesData.yaml;
    if (file === undefined) {
      window.alert("yamlが参照されていないので作成できません");
      window.location.href = "/";
      return null;
    }
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const yamlString = event.target?.result as string;
        resolve(yamlString);
      };
      reader.onerror = () => {
        reject(new Error("Failed to read YAML file."));
      };
      reader.readAsText(file);
    });
  }

  async function loadYamlFile() {
    const yamlString = await readYamlFile();
    if (yamlString === null) {
      return;
    }
    const parsedData = parseYaml(yamlString);
    setResumeInfo(parsedData);
  }

  useEffect(() => {
    loadYamlFile();
  }, []);

  if (resumeInfo === null) {
    return <div>Loading...</div>;
  }

  const requestsVisible =
    resumeInfo.requests !== null &&
    resumeInfo.requests.replaceAll("\n", "") !== "";

  return (
    <div className="resume">
      <div className="left">
        <HeaderAndPersonalInfo
          name={resumeInfo.name}
          photofile={sourceFilesData.faceImage}
        />
        <PersonalInfo
          birthdate={resumeInfo.birthdate}
          sex={resumeInfo.sex}
          address1={resumeInfo.address1}
          address2={resumeInfo.address2}
          phone1={resumeInfo.phone1}
          phone2={resumeInfo.phone2}
          email1={resumeInfo.email1}
          email2={resumeInfo.email2}
        />
        <Education educationWork={resumeInfo.educationWork} />
      </div>

      <div className="right">
        <Licenses licenses={resumeInfo.licenses} />
        <div className="motivation-requests">
          <Motivation motivation={resumeInfo.motivation} />
          {requestsVisible && <Requests requests={resumeInfo.requests} />}
        </div>
        <CommuteAndDependent
          commuteAndDependent={resumeInfo.commuteAndDependent}
        />
      </div>
    </div>
  );
}
