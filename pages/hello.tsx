import { NextPage } from "next";
import { NextSeo } from "next-seo";
import React from "react";
import { Contact } from "../components/sections/contact";

export const HelloPage: NextPage = () => {
  return (
    <>
      <NextSeo title="Say Hello" />
      <Contact />
    </>
  );
};

export default HelloPage;
