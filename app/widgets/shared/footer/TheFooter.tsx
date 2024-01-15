import React from 'react';

import Link from "next/link";

interface TheFooterProps {
    position: string;
}

const TheFooter:React.FC<TheFooterProps> = ({position}) => {
    return (
        <footer className={`${position} grid mlarge:block justify-items-center grid-rows-3 gap-y-[50px] mx-[2.5%] deskWide:mx-[calc((100%-(1440px-5%))/2)] mlarge:mx-0 py-[50px] w-[95%] mlarge:w-full max-w-[calc(1440px-5%)] h-[310px] mlarge:h-[600px] bg-[#111111] rounded-t-[40px] overflow-x-hidden z-20`}>
            <h2 className="secondLevelTitle goldBoldText mlarge:text-center">Контакты</h2>

            <div className="flex mlarge:grid mlarge:grid-rows-3 mlarge:justify-items-center justify-between mlarge:justify-center items-center mlarge:mt-[10px] mlarge:mx-[15%] w-[60%] mlarge:w-[70%] h-[25px] mlarge:h-[200px]">
                <span className="flex">
                    <p className="goldMediumText">tg: </p>

                    <a href="https://t.me/deviantwish" className="whiteLinkText">@deviantwish</a>
                </span>

                <span className="flex">
                    <p className="goldMediumText">phone: </p>

                    <a href="tel:+7-495-640-53-30" className="whiteLinkText">+7(495)640-53-30</a>
                </span>

                <span className="flex">
                    <p className="goldMediumText">e-mail: </p>

                    <a href="mailto:info@aciso.ru" className="whiteLinkText">info@aciso.ru</a>
                </span>
            </div>

            <div className="flex mlarge:grid mlarge:grid-rows-4 mlarge:justify-items-center justify-between mlarge:justify-center items-center mlarge:mt-[40px] mlarge:mx-[10%] w-[80%] h-[25px] mlarge:h-[190px]">
                <Link href="/" className="goldBoldText">Информация</Link>

                <Link href="" className="goldBoldText">Регистрация</Link>

                <Link href="/goals" className="goldBoldText">Цели</Link>

                <Link href="" className="goldBoldText">Контакты</Link>
            </div>
        </footer>
    );
};

export default TheFooter;