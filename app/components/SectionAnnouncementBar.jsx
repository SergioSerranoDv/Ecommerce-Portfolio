/** @format */

import Image from 'next/image'
export const SectionAnnouncementBar = () => {
  return (
    <div className="flex  items-center justify-between bg-black h-9">
      <div className=" inline-block ml-6">
        <ul className="flex justify-between aling-top">
          <a className=" w-6 h-6   ">
            <Image
              src="/SocialNetworks/facebook.svg"
              width={24}
              height={24}
              alt="Follow me on facebook"
            />
          </a>
          <a className="w-6 h-6">
            <Image
              width={24}
              height={24}
              src="/SocialNetworks/youtube.svg"
              alt="Follow me on Youtube"
            />
          </a>
          <a className="w-6 h-6">
            <Image
              width={24}
              height={24}
              src="/SocialNetworks/instagram.svg"
              alt="Follow me on Instagram"
            />
          </a>
          <a className="w-6 h-6">
            <Image
              width={24}
              height={24}
              src="/SocialNetworks/tikTok.svg"
              alt="Follow me on Instagram"
            />
          </a>
        </ul>
      </div>
    </div>
  )
}
