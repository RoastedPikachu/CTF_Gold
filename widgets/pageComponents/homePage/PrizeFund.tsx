"use client";
import React from 'react';

import {useIsMobileDevice} from "@/customHooks";

const PrizeFund = () => {
    const isMobile = useIsMobileDevice();

    return (
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
                    </>
                }
            </div>
        </section>
    );
};

export default PrizeFund;