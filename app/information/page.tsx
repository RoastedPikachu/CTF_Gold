import React from 'react';

import TheHeader from "@/app/widgets/shared/header/TheHeader";
import TheFooter from "@/app/widgets/shared/footer/TheFooter";

const Page = () => {
    return (
        <>
         <TheHeader/>

          <main className="relative w-full h-[1150px] bg-[#1f1f1f]">
            <section className="relative grid grid-rows-2 grid-cols-10 justify-items-stretch justify-between gap-[20px] mx-[5%] px-[10%] py-[50px] w-[90%] h-[850px] bg-[#111111] rounded-t-[30px]">
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
          </main>

          <TheFooter/>
        </>
    );
};

export default Page;