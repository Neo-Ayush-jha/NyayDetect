import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Navbar = () => {
  return (
    <div className="bg-[#C7E6F5C4]">
      <nav className=" flexBetween max-container padding-container relative z-30 py-5">
        <Link href="/" className="flex flex-1 gap-2 items-center">
          <Image src="/icon-5.png" alt="logo" width={44} height={18} />
          <span className="text-4xl text-[#1c6781] bold-52 lg:bold:88">NyayDetect</span>
        </Link>
        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 translate-all hover:font-bold">
              {link.label}
            </Link>
          ))}
        </ul>
        <div className="lg:flexCenter hidden ml-[40px]">
          <Button type="button" title="Login" icon="/user.svg" variant="btn_dark_green" />
        </div>

        <Image src="menu.svg" alt="menu" width={34} height={32} className="inline-block cursor-pointer lg:hidden" />
      </nav>
    </div>
  )
}

export default Navbar