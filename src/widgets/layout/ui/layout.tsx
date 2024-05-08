import { Wrapper } from "@/shared/ui/wrapper/wrapper";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { Main } from "@/widgets/main";
import Head from "next/head";
import React, { FC, ReactNode } from "react";

export interface LayoutProps {
  children?: ReactNode;
  headTitle: string;
  title?: string;
}

export const Layout: FC<LayoutProps> = ({ children, headTitle, title }) => {
  return (
    <>
      <Head>
        <title>{headTitle}</title>
        <meta
          name="description"
          content="Project that provides an opportunity to buy a subscription with codes"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <Header />
        <Main>
          {title && <h1 className={"visually-hidden"}>{title}</h1>}
          {children}
        </Main>
        <Footer />
      </Wrapper>
    </>
  );
};
