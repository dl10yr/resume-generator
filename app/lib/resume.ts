import yaml from "js-yaml";

export type ResumeName = {
  furigana: string;
  kanji: string;
};

export type ResumeAddress = {
  furigana: string;
  kanji: string;
  postalCode: string;
};

export type ResumeTableData = Array<{ date: string; name: string }>;

export type ResumeCommuteAndDependent = {
  commuteTime: string;
  numofDependentFamily: number;
  hasSpouse: string;
  hasSpousalSupport: string;
};

export type ResumeInfo = {
  name: ResumeName;
  address1: ResumeAddress;
  address2: ResumeAddress;
  phone1: string;
  phone2: string;
  email1: string;
  email2: string;
  birthdate: string;
  educationWork: ResumeTableData;
  licenses: ResumeTableData;
  motivation: string;
  requests: string;
  sex: string;
  commuteAndDependent: ResumeCommuteAndDependent;
};

/**
 * yamlをパースする
 *
 * @param yamlString
 * @returns
 */
export const parseYaml = (yamlString: string): ResumeInfo | null => {
  try {
    const parsedData = yaml.load(yamlString) as ResumeInfo;
    return parsedData;
  } catch (error) {
    console.error("Error parsing YAML:", error);
    return null;
  }
};
