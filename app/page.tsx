import Image from 'next/image'

import TheHeader from "@/app/widgets/shared/header/TheHeader";
import TheFooter from "@/app/widgets/shared/footer/TheFooter";

export default function Home() {
  return (
    <>
      <TheHeader/>

      <main className="relative w-full h-[2310px] overflow-y-hidden">
        <img src="/static/MainBackgroundImage.png" alt="" className="mt-[-60px] w-[1550px] h-[2380px] z-10"/>
      </main>

      <TheFooter/>
    </>
  )
}

