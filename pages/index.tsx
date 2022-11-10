import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import { Cases } from "../components/cases";
import { Contact } from "../components/sections/contact";
import { Welcome } from "../components/sections/welcome";
import { Why } from "../components/sections/why";

export default function Home() {
  return (
    <>
      <Welcome pt="80px" />
      <Cases />
      <section>
        <Contact />
      </section>
    </>
  );
}
