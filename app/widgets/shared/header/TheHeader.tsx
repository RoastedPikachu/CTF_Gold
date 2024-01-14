import React from 'react';

import Link from 'next/link';

const TheHeader = () => {
    return (
        <header className="flex justify-between items-center px-[15%] w-full h-[120px] bg-[#1f1f1f] overflow-x-hidden">
            <Link href="/information" className="goldBoldText">Информация</Link>

            <Link href="" className="goldBoldText">Регистрация</Link>

            <Link href="" className="goldBoldText">Партнеры</Link>

            <Link href="" className="goldBoldText">Контакты</Link>
        </header>
    );
};

export default TheHeader;