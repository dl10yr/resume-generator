import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { useContext, useEffect } from "react";
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

import yaml from "js-yaml";

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
  const { sourceFilesData, setSourceFilesData } =
    useContext(sourceFilesContext);

  // Function to parse YAML
  function parseYaml(yamlString: string) {
    try {
      const parsedData = yaml.load(yamlString);
      return parsedData;
    } catch (error) {
      console.error("Error parsing YAML:", error);
      return null;
    }
  }

  // Function to read YAML file
  async function readYamlFile(): Promise<string> {
    const file = sourceFilesData.yaml;
    console.log(sourceFilesData);
    if (file === undefined) {
      window.alert("yamlがないので作成できません");
      window.location.href = "/";
      throw Error("");
    }
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const yamlString = event.target?.result as string;
        resolve(yamlString);
      };
      reader.onerror = (event) => {
        reject(new Error("Failed to read YAML file."));
      };
      reader.readAsText(file);
    });
  }

  async function loadYamlFile() {
    const yamlString = await readYamlFile();
    const parsedData = parseYaml(yamlString);
    console.log(parsedData);
  }

  useEffect(() => {
    loadYamlFile();
  }, []);

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
