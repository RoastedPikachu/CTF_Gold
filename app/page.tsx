import React from 'react';

import TheHeader from "@/widgets/header/TheHeader";
import TheFooter from "@/widgets/footer/TheFooter";

import RegistrationData from "@/widgets/pageComponents/homePage/RegistrationData";
import EventData from "@/widgets/pageComponents/homePage/EventData";
import PrizeFund from "@/widgets/pageComponents/homePage/PrizeFund";
import Sponsors from "@/widgets/pageComponents/homePage/Sponsors";

export default function Home() {
    return (
        <>
            <TheHeader/>

            <main className="relative deskWide:mx-[calc((100%-1440px)/2)] w-full max-w-[1440px] h-auto mlarge:h-auto bg-[#1f1f1f] overflow-hidden">
                <RegistrationData/>

                <EventData/>

                <section className="flex justify-center items-center mlarge:mt-[-20px] mx-[2.5%] mlarge:mx-0 w-[95%] mlarge:w-full h-[120px] mlarge:h-[180px] msmall:h-[160px] bg-[#111111] rounded-b-[30px]">
                    <a href="https://docs.google.com/document/d/186qSE4ZS-1lYY2MWWY_OevjGI8OaOhojT6PbHvk7XHY/edit?usp=sharing" className="goldBoldText mlarge:mt-[10px] text-[2rem] mmedium:text-[1.75rem] msmall:text-[1.5rem] text-center outline-none">Регламент для очных команд</a>
                </section>

                <PrizeFund/>

                <Sponsors/>

                <img src="/static/InfoPage/background/GoldCTFAdamsHandsBackgroundImage.svg" alt="" className="mt-[-50px] mlarge:mt-[-10px] w-full h-[550px] mlarge:h-[200px] scale-[1.2]"/>
            </main>

            <TheFooter position={"relative mlarge:mt-[-20px] msmall:mt-[-25px]"}/>
        </>
    );
};

