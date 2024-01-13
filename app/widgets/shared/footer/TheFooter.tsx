import React from 'react';

import Link from "next/link";

const TheFooter = () => {
    return (
        <footer className="absolute grid justify-items-center grid-rows-3 gap-y-[50px] mt-[-310px] mx-[2.5%] py-[50px] w-[95%] h-[310px] bg-[#111111] rounded-t-[40px] z-20">
            <h2 className="secondLevelTitle goldBoldText">Контакты</h2>

            <div className="flex justify-between items-center w-[60%] h-[25px]">
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

            <div className="flex justify-between items-center w-[80%] h-[25px]">
                <Link href="/information" className="goldBoldText">Информация</Link>

                <Link href="" className="goldBoldText">Регистрация</Link>

                <Link href="" className="goldBoldText">Партнеры</Link>

                <Link href="" className="goldBoldText">Контакты</Link>
            </div>
        </footer>
    );
};

export default TheFooter;