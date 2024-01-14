import Image from 'next/image'

import TheHeader from "@/app/widgets/shared/header/TheHeader";
import TheFooter from "@/app/widgets/shared/footer/TheFooter";
import CountdownInterval from "@/app/widgets/shared/countdownInterval/CountdownInterval";

export default function Home() {
  return (
    <>
      <TheHeader/>

      <main className="relative w-full h-[2310px] overflow-y-hidden">
        <CountdownInterval fontSize={"absolute mt-[620px] w-full !text-[7rem] text-center"}/>

        <img src="/static/MainPage/MainBackgroundImage.png" alt="" className="mt-[-60px] w-[1550px] h-[2380px] z-10"/>
      </main>f

      <TheFooter position={"absolute mt-[-310px]"}/>
    </>
  )
}

