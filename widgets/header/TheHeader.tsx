"use client";
import React, {useState, useRef} from 'react';

import { CSSTransition } from "react-transition-group";

import Link from 'next/link';

import {useIsMobileDevice} from "@/customHooks";

const TheHeader = () => {
    let nodeRef = useRef(null);

    const isMobile = useIsMobileDevice();
    const [isModalHeaderActive, setModalHeaderActive] = useState(false);

    return (
        <header className="relative flex justify-between items-center deskWide:mx-[calc((100%-1440px)/2)] px-[15%] mlarge:px-0 deskWide:px-[7.5%] w-full max-w-[1440px] h-[120px] mlarge:h-[80px] bg-[#1f1f1f] overflow-x-hidden">
            {!isMobile ? <>
                <Link href="/" className="goldBoldText">Информация</Link>

                <Link href="/#Registration" className="goldBoldText">Регистрация</Link>

                <Link href="/#PrizeFund" className="goldBoldText">Призовой фонд</Link>

                <Link href="/goals" className="goldBoldText">Цели</Link>

                <Link href="" className="goldBoldText">Контакты</Link>
            </> :
            <button onClick={() => setModalHeaderActive(true)} className="absolute right-[5%] w-[60px] h-[60px] cursor-pointer outline-none">
                <img src="/Header/HamburgerIcon.svg" alt="Иконка выпадающего меню со ссылками на другие страницы" className="w-[50px] h-[50px]"/>
            </button>}

            <CSSTransition
                in={isModalHeaderActive}
                nodeRef={nodeRef}
                timeout={600}
                classNames="modalHeader"
                unmountOnExit
            >
                <div ref={nodeRef} className="fixed px-[50px] py-[40px] w-full h-[100vh] bg-[#1f1f1f] border-[#ffd78a] border-b-2 ease-in-out z-50">
                    <button onClick={() => setModalHeaderActive(false)} className="absolute flex justify-center items-center top-[30px] right-[25px] w-[60px] h-[60px] cursor-pointer outline-none">
                        <img src="/Header/XMarkIcon.svg" alt="Иконка закрытия выпадающего меню со ссылками на другие страницы" className="w-[50px] msmall:w-[40px] h-[50px] msmall:h-[40px]"/>
                    </button>

                    <div className="grid grid-rows-5 justify-items-start justify-start items-center mt-[-10px] h-[300px]">
                        <Link href="/" className="goldBoldText">Информация</Link>

                        <Link href="/#Registration" className="goldBoldText">Регистрация</Link>

                        <Link href="/#PrizeFund" className="goldBoldText">Призовой фонд</Link>

                        <Link href="/goals" className="goldBoldText">Цели</Link>

                        <Link href="" className="goldBoldText">Контакты</Link>
                    </div>
                </div>
            </CSSTransition>
        </header>
    );
};

export default TheHeader;