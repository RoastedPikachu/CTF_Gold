"use client";
import React from 'react';

import TheHeader from "@/app/widgets/shared/header/TheHeader";
import TheFooter from "@/app/widgets/shared/footer/TheFooter";

import {useIsMobileDevice} from "@/app/customHooks";
import CountdownInterval from "@/app/widgets/shared/countdownInterval/CountdownInterval";

export default function Page() {
  const isMobile = useIsMobileDevice();

  return (
    <>
      <TheHeader/>

      <main className="relative deskWide:mx-[calc((100%-1440px)/2)] w-full max-w-[1440px] h-[2310px] mlarge:h-auto overflow-y-hidden">
        <CountdownInterval fontSize={"absolute mt-[620px] mlarge:mt-[445px] msmall:mt-[450px] w-full text-[7rem] mlarge:text-[3.5rem] mmedium:text-[3.125rem] msmall:text-[2.75rem] text-center"}/>

          {!isMobile ? <img src="/static/MainPage/MainBackgroundImage.png" alt="" className="mt-[-60px] w-[1550px] h-[2380px] z-10"/> :

        <img src="/static/MainPage/MainBackgroundMobileImage.png" alt="" className="mt-[-60px] w-full h-[1800px] z-10"/>}
      </main>

      <TheFooter position={"absolute mt-[-310px]"}/>
    </>
  )
}