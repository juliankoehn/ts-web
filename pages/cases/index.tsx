import { NextPage } from "next";
import React from "react";
import { NextSeo } from "next-seo";
import { Cases } from "../../components/cases";
import { Contact } from "../../components/sections/contact";

export const CasesIndex: NextPage = () => {
  return (
    <>
      <NextSeo title="User Stories" />
      <Cases pt="90px" />
      <Contact />
    </>
  );
};

export default CasesIndex;
