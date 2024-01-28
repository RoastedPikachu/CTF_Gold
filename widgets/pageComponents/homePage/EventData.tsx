import React from 'react';

const EventData = () => {
    return (
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
    );
};

export default EventData;