import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
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
import {
  CommuteAndDependent,
  links as commuteAndDependentLinks,
} from "~/components/CommuteAndDependent";
import { ResumeInfo } from "~/lib/resume";

export const meta: MetaFunction = () => {
  return [{ title: "resume-sample" }];
};

export const links: LinksFunction = () => [
  ...headerAndPersonalInfoLinks(),
  ...personalInfoLinks(),
  ...educationLinks(),
  ...licensesLinks(),
  ...motivationLinks(),
  ...requestsLinks(),
  ...commuteAndDependentLinks(),
  { rel: "stylesheet", href: styles, type: "text/css" },
];

export default function Preview() {
  const [imageFile, setImageFile] = useState<File>();

  const fetchFile = async () => {
    try {
      const response = await fetch("/faceimage-example.png");
      const blob = await response.blob();
      const file = new File([blob], "faceimage-example.png", {
        type: blob.type,
      });
      setImageFile(file);
    } catch (error) {
      console.error("Error fetching the file:", error);
    }
  };

  useEffect(() => {
    fetchFile();
  }, []);

  const resumeName = {
    furigana: "やまだたろう",
    kanji: "山田太郎",
  };
  const resumeAddress1 = {
    furigana: "〇〇けん〇〇し〇〇1-1-1",
    kanji: "〇〇県〇〇市〇〇1-1-1",
    postalCode: "123-4567",
  };
  const resumeAddress2 = {
    furigana: "✕✕けん✕✕し✕✕1-1-1",
    kanji: "✕✕県✕✕市✕✕1-1-1",
    postalCode: "234-5678",
  };

  const resumeEducationWorkData = [
    { date: "2018/03", name: "xx高校 普通科卒業" },
    { date: "2018/04", name: "xx大学 文学部 入学" },
    { date: "2022/03", name: "xx大学 文学部 卒業" },
    { date: "2022/04", name: "xx株式会社 入社" },
  ];

  const resumeLicensesData = [
    { date: "2018/04", name: "普通自動二輪免許 取得" },
    { date: "2022/03", name: "xx 取得" },
  ];

  const motivation = `私がこのポジションに応募した理由は、
貴社が提供する業務内容が私のスキルセットとキャリア目標に非常に合致しているからです。
特に、貴社が注力している革新的なプロジェクトに魅力を感じ、
そこで自分の経験を活かしながら成長していきたいと考えています。
また、貴社のチームと共に協力し、新しい課題に挑戦することを楽しみにしています。`;

  const resumeInfo: ResumeInfo = {
    name: resumeName,
    address1: resumeAddress1,
    address2: resumeAddress2,
    phone1: "090-xxxx-xxxx",
    phone2: "080-xxxx-xxxx",
    email1: "aaaa@xxxx.com",
    email2: "bbbb@xxxx.com",
    birthdate: "2000/01/01",
    educationWork: resumeEducationWorkData,
    licenses: resumeLicensesData,
    motivation: motivation,
    requests: "",
    sex: "男",
    commuteAndDependent: {
      commuteTime: "約1時間",
      numofDependentFamily: 1,
      hasSpouse: "有",
      hasSpousalSupport: "有",
    },
  };

  const requestsVisible =
    resumeInfo.requests !== null &&
    resumeInfo.requests.replaceAll("\n", "") !== "";

  return (
    <div className="resume">
      <div className="left">
        <HeaderAndPersonalInfo name={resumeInfo.name} photofile={imageFile} />
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
