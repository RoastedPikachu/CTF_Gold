"use client";
import React from 'react';

import TheHeader from "@/app/widgets/shared/header/TheHeader";
import TheFooter from "@/app/widgets/shared/footer/TheFooter";

import {useIsMobileDevice} from "@/customHooks";
import CountdownInterval from "@/app/widgets/shared/countdownInterval/CountdownInterval";

const Home = () => {
    const isMobile = useIsMobileDevice();

    return (
        <>
            <TheHeader/>

            <main className="relative deskWide:mx-[calc((100%-1440px)/2)] w-full max-w-[1440px] h-auto mlarge:h-auto bg-[#1f1f1f] overflow-hidden">
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

                <section id="Registration" className="relative mlarge:mt-[-20px] px-[15%] mlarge:px-[5%] pt-[50px] mlarge:pt-[50px] pb-[70px] mlarge:pb-[50px] w-full h-[680px] mlarge:h-[720px] mmedium:h-[680px] msmall:h-[600px] bg-[url('/static/InfoPage/background/GoldFoilBackgroundImage.png')] bg-cover rounded-[30px]">
                    <div className="relative grid mlarge:block grid-rows-5 justify-items-stretch gap-y-[50px] px-[100px] mlarge:px-[40px] py-[50px] mlarge:py-[20px] w-full h-[560px] mlarge:h-[600px] mmedium:h-[560px] msmall:h-[500px] bg-[#1f1f1f] rounded-[30px]">
                        <h2 className="goldBoldText text-[2rem]">Online</h2>

                        <h3 className="goldBoldText mt-[-10px] mlarge:mt-[20px] text-[1.5rem] mlarge:text-[1rem] mmedium:text-[0.875rem] msmall:text-[0.75rem]">Открытое онлайн A&D <br/> соревнование для всех желающих</h3>

                        <span className="flex mlarge:block items-center mlarge:mt-[20px]">
                            <strong className="goldBoldText w-[300px] text-[1.5rem] mmedium:text-[1.375rem] msmall:text-[1.25rem]">Сложность:</strong>

                            <p className="goldRegularText text-[1.5rem] mmedium:text-[1.375rem] msmall:text-[1.125rem]">жесть и хардкор</p>
                        </span>

                        <span className="flex mlarge:block items-center mlarge:mt-[20px]">
                            <strong className="goldBoldText w-[300px] text-[1.5rem] mmedium:text-[1.375rem] msmall:text-[1.25rem]">Дата и время:</strong>

                            <p className="goldRegularText text-[1.5rem] mmedium:text-[1.375rem] msmall:text-[1.125rem]">10 февраля, <br/> 10:00 - 18:00 UTC+3</p>
                        </span>

                        <span className="flex mlarge:block items-center mlarge:mt-[20px]">
                            <strong className="goldBoldText w-[300px] text-[1.5rem] mmedium:text-[1.375rem] msmall:text-[1.25rem]">Регистрация:</strong>

                            <p className="goldRegularText text-[1.5rem] mmedium:text-[1.375rem] msmall:text-[1.125rem]"><a href="https://register.cbsctf.live" className="underline cursor-pointer outline-none">на сайте</a> или <br/> через <a href="https://t.me/cbsctf_regbot" className="underline cursor-pointer outline-none">телеграм-бота</a></p>
                        </span>
                    </div>
                </section>

                <section className="flex justify-center items-center mlarge:mt-[-20px] mx-[2.5%] mlarge:mx-0 w-[95%] mlarge:w-full h-[120px] mlarge:h-[180px] msmall:h-[160px] bg-[#111111] rounded-b-[30px]">
                    <a href="https://docs.google.com/document/d/186qSE4ZS-1lYY2MWWY_OevjGI8OaOhojT6PbHvk7XHY/edit?usp=sharing" className="goldBoldText mlarge:mt-[10px] text-[2rem] mmedium:text-[1.75rem] msmall:text-[1.5rem] text-center outline-none">Регламент для очных команд</a>
                </section>

                <section id="PrizeFund" className="flex mlarge:block items-center mt-[60px] px-[15%] mlarge:px-[7.5%] py-[80px] mlarge:py-[40px] w-full mlarge:w-full h-[540px] mlarge:h-[760px] bg-[#111111] rounded-[40px]">
                    {!isMobile ? <img src="/static/InfoPage/background/PrizeFundBackgroundImage.png" alt="" className="w-[65%] h-full"/> : <img src="/static/InfoPage/background/PrizeFundBackgroundMobileImage.png" alt="" className="w-full h-[280px]"/>}

                    <div className="relative px-[30px] py-[30px] w-[35%] mlarge:w-full h-full mlarge:h-[400px] bg-[#242424] rounded-[20px] mlarge:rounded-[30px]">
                        <div className="absolute flex justify-between items-center top-[30px] right-[30px] w-[27.5%] mmedium:w-[30%] msmall:w-[35%] h-[25px]">
                            <img src="/static/InfoPage/icon/StarIcon.svg" alt="" className="w-[25px] h-[25px]"/>

                            <img src="/static/InfoPage/icon/GlobeIcon.svg" alt="" className="w-[25px] h-[25px]"/>

                            <img src="/static/InfoPage/icon/RecycleIcon.svg" alt="" className="w-[25px] h-[25px]"/>
                        </div>

                        {!isMobile ?
                            <>
                                <h2 className="goldBoldText mt-[40px] text-[1.5rem] leading-[1.25]">Призовой <br/> фонд <br/> для очных <br/> команд</h2>

                                <p className="goldMediumText mt-[30px] text-[1rem]">Каждый участник <br/> команды-победителя <br/> получит одну тройскую <br/> унцию золота 999 пробы <br/> на металлический счет</p>
                            </>
                            :
                            <>
                                <h2 className="goldBoldText mt-[40px] text-[1.5rem] leading-[1.25]">Призовой <br/> фонд</h2>

                                <p className="goldMediumText mt-[30px] text-[1rem] msmall:text-[0.875rem]">для очных команд. Каждый участник команды- <br/> победителя получит одну <br/> тройскую унцию золота <br/> 999 пробы на металлический <br/> счет</p>

                                <img src="/static/InfoPage/BarcodeImage.png" alt="" className="absolute bottom-0 mx-[calc(15%-30px)] w-[70%]"/>
                            </>}
                    </div>
                </section>

                <section className="flex mlarge:block justify-between items-end mlarge:mt-[50px] pl-[22.5%] mlarge:pl-0 pr-[20%] mlarge:pr-0 w-full h-[400px] mlarge:h-[700px]">
                    <div className="grid grid-rows-10 justify-items-center gap-y-[10px] h-[310px]">
                        <h3 className="goldBoldText row-span-2 text-[2rem] mmedium:text-[1.75rem] msmall:text-[1.5rem]">Партнеры</h3>

                        <img src="/static/InfoPage/logo/CBSLogo.png" alt="" className="row-span-8 w-[250px] h-[250px]"/>
                    </div>

                    <div className="grid grid-rows-10 justify-items-center gap-y-[10px] mlarge:mt-[40px] h-[310px]">
                        <h3 className="goldBoldText row-span-2 text-[2rem] mmedium:text-[1.75rem] msmall:text-[1.5rem]">Организаторы</h3>

                        <img src="/static/InfoPage/logo/IDKLogo.png" alt="" className="row-span-2 w-[250px] h-[250px]"/>
                    </div>
                </section>

                <img src="/static/InfoPage/background/GoldCTFAdamsHandsBackgroundImage.svg" alt="" className="mt-[-50px] mlarge:mt-[-10px] w-full h-[550px] mlarge:h-[200px] scale-[1.2]"/>
            </main>

            <TheFooter position={"relative mlarge:mt-[-20px] msmall:mt-[-25px]"}/>
        </>
    );
};

export default Home;

