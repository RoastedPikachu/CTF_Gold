"use client";
import React from 'react';

import {useIsMobileDevice} from "@/customHooks";

import CountdownInterval from "@/shared/countdownInterval/CountdownInterval";

const RegistrationData = () => {
    const isMobile = useIsMobileDevice();

    return (
        <section className="relative grid mlarge:block grid-rows-2 grid-cols-10 justify-items-stretch justify-between gap-[20px] mx-[2.5%] mlarge:mx-0 px-[12.5%] mlarge:px-[7.5%] py-[50px] mlarge:py-[30px] w-[95%] mlarge:w-full h-[850px] mlarge:h-[1440px] mmedium:h-[1365px] msmall:h-[1215px] bg-[#111111] rounded-t-[30px]">
            <div className="relative col-span-6 w-full h-[355px] mlarge:h-[220px] msmall:h-[200px] rounded-[30px] overflow-hidden">
                <img src="/static/InfoPage/GoldCTFTitleWithGoldBgImage.png" alt="Gold CTF" className="w-full h-full bg-cover"/>
            </div>

            <div className="relative col-span-4 mlarge:mt-[20px] p-[32px] w-full h-[355px] mmedium:h-[325px] msmall:h-[285px] bg-[#1f1f1f] rounded-[30px] overflow-hidden">
                <h2 className="goldBoldText text-[1.875rem] mlarge:text-[1.75rem] mmedium:text-[1.625rem] msmall:text-[1.375rem] text-left">Регистрация открыта</h2>

                <div className="flex justify-between items-center mt-[10px] w-[32.5%] mlarge:w-[35%] mmedium:w-[40%] msmall:w-[50%] h-[50px]">
                    <a href="https://t.me/cbsctf_regbot">
                        <img src="/static/InfoPage/icon/TgIcon.svg" alt="Иконка телеграмм: ссылка на регистрацию на соревнование через телеграмм бота"/>
                    </a>

                    <a href="https://register.cbsctf.live">
                        <img src="/static/InfoPage/icon/LinkIcon.svg" alt="Иконка ссылки: ссылка на регистрацию через сторонний сервис"/>
                    </a>
                </div>

                <p className="goldMediumText absolute bottom-[32px] right-[32px] text-[1.125rem] mlarge:text-[1rem] mmedium:text-[0.875rem] msmall:text-[0.75rem] text-right">Забери свое ЗОЛОТО и докажи,<br/> кто достоин быть на вершине.</p>
            </div>

            <div className="relative grid grid-rows-2 justify-items-center col-span-4 gap-y-[150px] mlarge:mt-[20px] p-[32px] w-full h-[355px] mmedium:h-[325px] msmall:h-[285px] bg-[#1f1f1f] rounded-[30px] overflow-hidden">
                <img src="/static/InfoPage/GoldSphereImage.png" alt="" className="mt-[-10px] mmedium:mt-[-20px] msmall:mt-[-40px] ml-[5px] w-full h-[260px] scale-x-[1.2] msmall:scale-x-[1.4] scale-y-[1.15] mmedium:scale-y-[0.95] msmall:scale-y-[0.9]"/>

                <CountdownInterval fontSize={"block mt-[10px] msmall:mt-0 w-full text-[2rem] mlarge:text-[1.875rem] mmedium:text-[1.625rem] msmall:text-[1.375rem] text-center"}/>
            </div>

            <div className="relative col-span-6 mlarge:mt-[20px] w-full h-[355px] mmedium:h-[325px] msmall:h-[285px] mlarge:bg-[url('/static/InfoPage/background/BackgroundGoldSmartCityMobileImage.png')] mlarge:bg-cover rounded-[30px] overflow-hidden">
                {!isMobile && <img src="/static/InfoPage/background/BackgroundGoldSmartCityImage.png" alt="" className="absolute w-full h-full z-10"/>}

                <div className="relative mlarge:absolute mlarge:mx-[10%] mmedium:mx-[7.5%] mlarge:bottom-[50px] px-[35px] py-[20px] w-[calc(50%-20px)] mlarge:w-[80%] mmedium:w-[85%] h-[125px] bg-[#1f1f1f] rounded-[30px] z-20">
                    <h3 className="goldBoldText text-[1.25rem] mmedium:text-[1.125rem] msmall:text-[1rem]">Умный город</h3>

                    <span className="block mt-[10px]">
                        <p className="goldMediumText text-[1rem]"><a href="https://yandex.ru/maps/213/moscow/house/prospekt_mira_119s461/Z04YcARgQEEPQFtvfXRycnVhYg==/?ll=37.630948%2C55.833926&z=17.12" className="underline outline-none cursor-pointer">Адрес:</a> пр-т Мира, <br/> 119 строение 461</p>
                    </span>
                </div>
            </div>
        </section>
    );
};

export default RegistrationData;