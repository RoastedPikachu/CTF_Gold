import React from 'react';

import TheHeader from "@/app/widgets/shared/header/TheHeader";
import TheFooter from "@/app/widgets/shared/footer/TheFooter";

const Page = () => {
    return (
        <>
         <TheHeader/>

          <main className="relative w-full h-[2370px] bg-[#1f1f1f]">
            <section className="relative grid grid-rows-2 grid-cols-10 justify-items-stretch justify-between gap-[20px] mx-[2.5%] px-[12.5%] py-[50px] w-[95%] h-[850px] bg-[#111111] rounded-t-[30px]">
                <div className="relative col-span-6 w-full h-[355px] rounded-[30px] overflow-hidden">
                    <img src="/static/InfoPage/GoldCTFTitleWithGoldBgImage.png" alt="Gold CTF" className="w-full h-full bg-cover"/>
                </div>

                <div className="relative col-span-4 p-[32px] w-full h-[355px] bg-[#1f1f1f] rounded-[30px] overflow-hidden">
                    <h2 className="goldBoldText !text-[1.875rem] text-left">Регистрация открыта</h2>

                    <div className="flex justify-between items-center mt-[10px] w-[32.5%] h-[50px]">
                        <a href="https://t.me/cbsctf_regbot">
                            <img src="/static/InfoPage/icon/TgIcon.svg" alt="Иконка телеграмм: ссылка на регистрацию на соревнование через телеграмм бота"/>
                        </a>

                        <a href="https://register.cbsctf.live">
                            <img src="/static/InfoPage/icon/LinkIcon.svg" alt="Иконка ссылки: ссылка на регистрацию через сторонний сервис"/>
                        </a>
                    </div>

                    <p className="goldMediumText absolute bottom-[32px] right-[32px] !text-[1.125rem] text-right">Забери свое ЗОЛОТО и докажи,<br/> кто достоин быть на вершине.</p>
                </div>

                <div className="relative grid grid-rows-2 justify-items-center col-span-4 gap-y-[150px] p-[32px] w-full h-[355px] bg-[#1f1f1f] rounded-[30px] overflow-hidden">
                    <img src="/static/InfoPage/GoldSphereImage.png" alt="" className="mt-[-10px] ml-[15px] w-full h-[260px] scale-x-[1.2] scale-y-[1.15]"/>

                    <p className="goldBoldText !text-[2.375rem]">20:12:23</p>
                </div>

                <div className="relative col-span-6 w-full h-[355px] rounded-[30px] overflow-hidden">
                    <img src="/static/InfoPage/BackgroundGoldMapImage.png" alt="" className="absolute w-full h-full z-10"/>

                    <div className="px-[35px] py-[20px] w-[calc(50%-20px)] h-[125px] bg-[#1f1f1f] rounded-[30px] z-20">
                        <h3 className="goldBoldText !text-[1.25rem]">Умный город</h3>

                        <span className="block mt-[10px]">
                            <p className="goldMediumText"><a href="https://yandex.ru/maps/213/moscow/house/prospekt_mira_119s461/Z04YcARgQEEPQFtvfXRycnVhYg==/?ll=37.630948%2C55.833926&z=17.12" className="underline outline-none">Адрес:</a> пр-т Мира, <br/> 119 строение 461</p>
                        </span>
                    </div>
                </div>
            </section>

            <section className="relative flex justify-items items-center px-[15%] pt-[50px] pb-[70px] w-full h-[680px] bg-[url('/static/InfoPage/GoldFoilBackgroundImage.png')] bg-cover rounded-[30px]">
                {/*<img src="/static/InfoPage/GoldFoilBackgroundImage.png" alt="" className="absolute w-full h-full bg-cover"/>*/}

                <div className="relative grid grid-rows-5 justify-items-stretch gap-y-[50px] px-[100px] py-[50px] w-full h-[560px] bg-[#1f1f1f] rounded-[30px]">
                    <h2 className="goldBoldText !text-[2rem]">Online</h2>

                    <h3 className="goldBoldText mt-[-10px] !text-[1.5rem]">Открытое онлайн A&D <br/> соревнование для всех желающих</h3>

                    <span className="flex items-center">
                        <strong className="goldBoldText w-[300px] !text-[1.5rem]">Сложность:</strong>

                        <p className="goldRegularText">жесть и хардкор</p>
                    </span>

                    <span className="flex items-center">
                        <strong className="goldBoldText w-[300px] !text-[1.5rem]">Дата и время:</strong>

                        <p className="goldRegularText">10 февраля, <br/> 10:00 - 18:00 UTC+3</p>
                    </span>

                    <span className="flex items-center">
                        <strong className="goldBoldText w-[300px] !text-[1.5rem]">Регистрация:</strong>

                        <p className="goldRegularText"><a href="https://register.cbsctf.live" className="underline cursor-pointer outline-none">на сайте</a> или <br/> через <a href="https://t.me/cbsctf_regbot" className="underline cursor-pointer outline-none">телеграм-бота</a></p>
                    </span>
                </div>
            </section>

            <section className="flex justify-center items-center mx-[2.5%] w-[95%] h-[120px] bg-[#111111] rounded-b-[30px]">
                <h2 className="goldBoldText !text-[2rem]">Регламент</h2>
            </section>

            <section className="flex justify-between items-end pl-[22.5%] pr-[20%] w-full h-[400px]">
                <div className="grid grid-rows-10 justify-items-center gap-y-[10px] h-[310px]">
                    <h3 className="goldBoldText row-span-2 !text-[2rem]">Партнеры</h3>

                    <img src="/static/InfoPage/logo/CBSLogo.png" alt="" className="row-span-8 w-[250px] h-[250px]"/>
                </div>

                <div className="grid grid-rows-10 justify-items-center gap-y-[10px] h-[310px]">
                    <h3 className="goldBoldText row-span-2 !text-[2rem]">Организаторы</h3>

                    <img src="/static/InfoPage/logo/IDKLogo.png" alt="" className="row-span-2 w-[250px] h-[250px]"/>
                </div>
            </section>
          </main>

          <TheFooter/>
        </>
    );
};

export default Page;