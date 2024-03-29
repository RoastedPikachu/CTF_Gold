"use client";
import React from 'react';

import TheHeader from "@/widgets/header/TheHeader";
import TheFooter from "@/widgets/footer/TheFooter";

import {useIsMobileDevice} from "@/customHooks";
import CountdownInterval from "@/shared/countdownInterval/CountdownInterval";

const Page = () => {
  const isMobile = useIsMobileDevice();

  return (
    <>
      <TheHeader/>

      <main className="relative deskWide:mx-[calc((100%-1440px)/2)] w-full max-w-[1440px] h-[2310px] mlarge:h-[1550px] overflow-y-hidden">
        <CountdownInterval fontSize={"absolute mt-[620px] mlarge:mt-[450px] mmedium:mt-[455px] msmall:mt-[460px] w-full text-[7rem] mlarge:text-[2.375rem] mmedium:text-[2.125rem] msmall:text-[1.75rem] text-center"}/>

        {!isMobile ?
            <img src="/static/MainPage/MainBackgroundImage.png" alt="" className="mt-[-60px] w-[1550px] h-[2380px] z-10"/>
        :
            <img src="/static/MainPage/MainBackgroundMobileImage.png" alt="" className="mt-[-60px] w-full h-[1800px] z-10"/>}
      </main>

      <TheFooter position={"absolute mt-[-310px]"}/>
    </>
  )
}

export default Page;