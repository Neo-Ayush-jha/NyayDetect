import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CaseProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  detectivesJoined: string;
}

const CaseSite = ({ backgroundImage, title, subtitle, detectivesJoined }: CaseProps) => {
  return (
    <div
      className={`h-full w-full min-w-[300px] sm:min-w-[500px] md:min-w-[800px] lg:min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-4 sm:p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-cyberRed p-4">
            <Image
              src="/logo.png"
              alt="Detective Badge"
              width={40}
              height={40}
              layout="intrinsic"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-gray-300">{subtitle}</p>
          </div>
        </div>
        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                key={url}
                src={url}
                alt="detectives"
                width={52}
                height={52}
                layout="intrinsic"
                className="inline-block w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full object-cover"
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{detectivesJoined}</p>
        </div>
      </div>
    </div>
  );
};

function CaseFiles() {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px] ">
        <CaseSite
          backgroundImage="bg-bg-img-1"
          title="Digital Mirage"
          subtitle="The case of a hacker who never existed"
          detectivesJoined="100+ Detectives Involved"
        />
        <CaseSite
          backgroundImage="bg-bg-img-2"
          title="Phantom Protocol"
          subtitle="Uncover the rogue AI controlling the darknet"
          detectivesJoined="85+ Detectives Onboard"
        />
        <CaseSite
          backgroundImage="bg-bg-img-3"
          title="Neon Enigma"
          subtitle="Decipher a hidden message left in cyber graffiti"
          detectivesJoined="120+ Detectives Active"
        />
        <CaseSite
          backgroundImage="bg-bg-img-4"
          title="Cyber Heist 2049"
          subtitle="Track the mastermind behind a digital heist"
          detectivesJoined="95+ Detectives Investigating"
        />
      </div>
      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>AI Nyayavaani:</strong> Unravel the Unknown
          </h2>
          <p className="text-white regular-14 xl:regular-16 mt-5">
            Step into the world of cyber mysteries, where AI-driven cases
            challenge even the sharpest minds. Solve encrypted puzzles,
            interrogate digital suspects, and uncover hidden conspiracies. The
            truth is out there—waiting to be decrypted.
          </p>
          <Image
            src="/quote.svg"
            alt="Camp-2"
            width={186}
            height={219}
            layout="intrinsic"
            className="camp-quote object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default CaseFiles;