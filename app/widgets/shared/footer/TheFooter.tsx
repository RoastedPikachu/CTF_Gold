import React from 'react';
import Link from "next/link";

const TheFooter = () => {
    return (
        <footer className="relative grid justify-center mx-[5%] w-[90%] h-[310px] bg-[#111111] rounded-t-[40px]">
            <h2>Контакты</h2>

            <div className="flex justify-between items-center w-[60%] h-[25px]">
                <span>
                    <p>tg: </p>

                    <a href="https://t.me/deviantwish">@deviantwish</a>
                </span>

                <span>
                    <p>phone: </p>

                    <a href="tel:+7-495-640-53-30">+7(495)640-53-30</a>
                </span>

                <span>
                    <p>e-mail: </p>

                    <a href="mailto:info@aciso.ru">info@aciso.ru</a>
                </span>
            </div>

            <div className="flex justify-between items-center w-[80%] h-[25px]">
                <Link href="" className="headerLink">Информация</Link>

                <Link href="" className="headerLink">Регистрация</Link>

                <Link href="" className="headerLink">Цели</Link>

                <Link href="" className="headerLink">Контакты</Link>
            </div>
        </footer>
    );
};

export default TheFooter;