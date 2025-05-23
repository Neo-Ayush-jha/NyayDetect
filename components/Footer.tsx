import { FOOTER_CONTACT_INFO, FOOTER_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '@/public/logo.png';

const Footer = () => {
  return (
    <footer className="flexCenter mb-[24px] ">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10 ">
            <Image src={Logo} alt="logo" width={44} height={28} />
            <span className="text-4xl text-green-500 bold-52 lg:bold:88">AI NyayDetect</span>
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title} key={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link) => (
                    <Link href="/" key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title} key="footer-contact">
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link href="/" key={link.label} className="flex gap-4 md:flex-col lg:flex-row">
                    <p className="whitespace-nowrap">{link.label}:</p>
                    <p className="medium-14 whitespace-nowrap text-blue-70">{link.value}</p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            
          </div>
        </div>

        <div className="border " />
        <p className="regular-14 w-full text-center text-gray-30">
          2024 AI NyayDetect | All rights reserved
        </p>
      </div>
    </footer>
  )
}

type FooterColumnProps = {
  title: string
  children: React.ReactNode
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  )
}

export default Footer
