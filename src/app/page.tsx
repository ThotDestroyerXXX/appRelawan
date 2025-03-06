import Image from "next/image";
import volunteer from "~/app/Assets/volunteer_home_page_photo.jpg";

import { HydrateClient } from "~/trpc/server";
import { IoMdPeople } from "react-icons/io";
import { VscOrganization } from "react-icons/vsc";
import { MdVolunteerActivism } from "react-icons/md";
import LandingPageGoodThing from "./Components/LandingPageGoodThing";
import volunteerImage from "~/app/Assets/becomeVolunteerImage.jpeg";
import organisasiImage from "~/app/Assets/organisasiImage.png";
import LayananImpactHubCard from "./Components/LayananImpactHubCard";
import aboutUsImage from "~/app/Assets/aboutUsImage.png";

export default function Home() {
  return (
    <HydrateClient>
      <main className="h-full w-screen">
        <div className="relative h-[50vh] w-screen">
          <div className="relative left-0 top-0 flex h-[60vh] w-screen flex-col items-center gap-16 pt-16 text-center text-white">
            <Image
              src={volunteer}
              alt=""
              className="fixed left-0 top-0 z-[-1] h-[60vh] w-screen object-cover object-top brightness-[0.3]"
            />
            <div className="flex flex-col items-center gap-3">
              <h1 className="text-5xl font-bold">ImpactHub</h1>
              <h2 className="text-xl">Tempat semua orang saling terhubung</h2>
              <button className="h-10 w-36 rounded-md bg-sageGreen text-base font-semibold text-black">
                Cari Aktivitas
              </button>
            </div>
            <div className="flex flex-col items-center gap-6">
              <div className="flex h-40 w-[60vw] flex-row items-center justify-around rounded-md bg-white pl-4 pr-4 text-black shadow-lg">
                <LandingPageGoodThing
                  jumlah={[20000, 4000, 11275]}
                  jenis={["Relawan", "Organisasi", "Aktivitas"]}
                  icon={[IoMdPeople, VscOrganization, MdVolunteerActivism]}
                />
              </div>
            </div>
          </div>
        </div>
        <section className="items-center bg-white text-center">
          <div className="pb-10 pt-36">
            <h1 className="text-center text-4xl font-bold">
              Layanan ImpactHub
            </h1>
          </div>
          <div className="flex flex-row flex-wrap items-center justify-center gap-10 pl-10 pr-10">
            <LayananImpactHubCard
              image={[volunteerImage, organisasiImage, aboutUsImage]}
              judul={["Jadi Relawan", "Cari Relawan", "Tentang Kami"]}
              deskripsi={[
                "Jadilah relawan dan berkontribusi dalam berbagai kegiatan sosial yang bermanfaat bagi masyarakat. Dengan menjadi relawan, Anda dapat membantu orang-orang yang membutuhkan, memperluas jaringan sosial, dan mengembangkan keterampilan baru.",
                "Cari relawan yang sesuai dengan kebutuhan organisasi Anda. Dengan mencari relawan di ImpactHub, Anda dapat menemukan relawan yang memiliki minat dan keterampilan yang sesuai dengan kebutuhan organisasi Anda.",
                "ImpactHub adalah platform yang mempertemukan relawan dengan organisasi yang membutuhkan relawan. Dengan ImpactHub, Anda dapat mencari relawan, mencari organisasi, dan menemukan berbagai kegiatan sosial yang bermanfaat bagi masyarakat.",
              ]}
              link={["/Pages/signUp", "/Pages/signUpOrg", "/Pages/aboutUs"]}
              placeholder={["Jadi Relawan", "Jadi Organisasi", "Tentang Kami"]}
            />
          </div>
        </section>
      </main>
    </HydrateClient>
  );
}
