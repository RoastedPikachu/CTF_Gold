import React from 'react';

import Link from 'next/link';

import "./TheHeader.css";

const TheHeader = () => {
    return (
        <header className="flex justify-between items-center px-[15%] w-full h-[120px] bg-[#1f1f1f] ">
            <Link href="" className="headerLink">Информация</Link>

            <Link href="" className="headerLink">Регистрация</Link>

            <Link href="" className="headerLink">Цели</Link>

            <Link href="" className="headerLink">Контакты</Link>
        </header>
    );
};

export default TheHeader;