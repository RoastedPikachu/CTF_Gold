import React from 'react';

const Sponsors = () => {
    return (
        <section className="flex mlarge:block justify-between items-end mlarge:mt-[50px] pl-[22.5%] mlarge:pl-0 pr-[20%] mlarge:pr-0 w-full h-[400px] mlarge:h-[700px]">
            <div className="grid grid-rows-10 justify-items-center gap-y-[10px] h-[310px]">
                <h3 className="goldBoldText row-span-2 text-[2rem] mmedium:text-[1.75rem] msmall:text-[1.5rem]">Партнеры</h3>

                <img src="/static/InfoPage/logo/CBSLogo.png" alt="" className="row-span-8 w-[250px] h-[250px]"/>
            </div>

            <div className="grid grid-rows-10 justify-items-center gap-y-[10px] mlarge:mt-[40px] h-[310px]">
                <h3 className="goldBoldText row-span-2 text-[2rem] mmedium:text-[1.75rem] msmall:text-[1.5rem]">Организаторы</h3>

                <img src="/static/InfoPage/logo/IDKLogo.png" alt="" className="row-span-2 w-[250px] h-[250px]"/>
            </div>
        </section>
    );
};

export default Sponsors;