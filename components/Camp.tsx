import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string
}
const CamSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image src="/folder-map.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-black">{title}</h4>
            <p className="regular-14 text-black">{subtitle}</p>
          </div>
        </div>
        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image key={url} src={url} alt="people" width={52} height={52} className="inline-block w-10 h-10 rounded-full" />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-black">{peopleJoined}</p>
        </div>
      </div>
    </div>
  )
}
function Camp() {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CamSite backgroundImage="bg-bg-img-1" title="Putuk Truno Camp" subtitle="Prigen, Pasuran" peopleJoined="50+ Joined" />
        <CamSite backgroundImage="bg-bg-img-2" title="Mountain View Camp" subtitle="Somewhere in the Wilderness" peopleJoined="50+ Joined" />
        <CamSite backgroundImage="bg-bg-img-3" title="Putuk Truno Camp" subtitle="Prigen, Pasuran" peopleJoined="50+ Joined" />
        <CamSite backgroundImage="bg-bg-img-4" title="Mountain View Camp" subtitle="Somewhere in the Wilderness" peopleJoined="50+ Joined" />
        <CamSite backgroundImage="bg-bg-img-5" title="Putuk Truno Camp" subtitle="Prigen, Pasuran" peopleJoined="50+ Joined" />
        <CamSite backgroundImage="bg-bg-img-6" title="Mountain View Camp" subtitle="Somewhere in the Wilderness" peopleJoined="50+ Joined" />
      </div>
      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px]  xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white"><strong>Best Of</strong> Health Care For You</h2>
          <p className="text-white regular-14 xl:regular-16 mt-5">
            Discover excellence in healthcare at Best of Health Care for You – where compassionate expertise meets state-of-the-art facilities. Our commitment is your well-being, providing top-tier medical services tailored to your unique needs. Your journey to optimal health begins here, with a team dedicated to your care and a promise of a healthier tomorrow.</p>
          <Image src="/quote.svg" alt="Camp-2" width={186} height={219} className="camp-quote" />
        </div>
      </div>
    </section>
  )
}

export default Camp