"use client";
import Image from "next/image";
import volunteer from "~/app/Assets/volunteer_home_page_photo.jpg";
import { IoMdPeople } from "react-icons/io";
import { VscOrganization } from "react-icons/vsc";
import { MdVolunteerActivism } from "react-icons/md";
import LandingPageGoodThing from "../../Components/LandingPageGoodThing";
import volunteerImage from "~/app/Assets/becomeVolunteerImage.jpeg";
import organisasiImage from "~/app/Assets/organisasiImage.png";
import LayananImpactHubCard from "../../Components/LayananImpactHubCard";
import aboutUsImage from "~/app/Assets/aboutUsImage.png";
import {
  fetchOrganizationCount,
  fetchUserCount,
  fetchActivityCount,
} from "~/app/api/HomePage/getList";
import Spinner from "~/app/Components/Spinner";

export default function Home() {
  const organizationCount = fetchOrganizationCount().data;
  const userCount = fetchUserCount().data;
  const activityCount = fetchActivityCount().data;
  return (
    <main className="h-full">
      <div className="relative h-[21rem]">
        <div className="relative left-0 top-0 flex flex-col items-center gap-[3.5rem] pt-16 text-center text-white">
          <Image
            src={volunteer}
            alt=""
            className="fixed left-0 top-0 z-[-1] h-[25rem] w-screen object-cover object-top brightness-[0.3]"
          />
          <div className="flex flex-col items-center gap-3">
            <h1 className="text-5xl font-bold">ImpactHub</h1>
            <h2 className="text-xl">Tempat semua orang saling terhubung</h2>
            <button className="h-10 w-36 rounded-md bg-[#A2B29F] text-base font-medium text-black hover:bg-[#798777] hover:text-white">
              Cari Aktivitas
            </button>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div className="flex h-40 w-[60vw] flex-row items-center justify-around rounded-md bg-white pl-4 pr-4 text-black shadow-lg">
              <LandingPageGoodThing
                jumlah={[
                  userCount ?? <Spinner />,
                  organizationCount ?? <Spinner />,
                  activityCount ?? <Spinner />,
                ]}
                jenis={["Relawan", "Organisasi", "Aktivitas"]}
                icon={[IoMdPeople, VscOrganization, MdVolunteerActivism]}
              />
            </div>
          </div>
        </div>
      </div>
      <section className="items-center bg-[#F8EDE3] text-center">
        <div className="pb-10 pt-36">
          <h1 className="text-center text-4xl font-bold">Layanan ImpactHub</h1>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center gap-10 pl-10 pr-10">
          <LayananImpactHubCard
            image={[volunteerImage, organisasiImage, aboutUsImage]}
            judul={["Jadi Relawan", "Cari Relawan", "Tentang Kami"]}
            deskripsi={[
              "Jadilah relawan dan berkontribusi dalam berbagai kegiatan sosial yang bermanfaat bagi masyarakat. Dengan menjadi relawan, Anda dapat membantu orang-orang yang membutuhkan, memperluas jaringan sosial, dan mengembangkan keterampilan baru.",
              "Cari relawan yang sesuai dengan kebutuhan organisasi Anda. Dengan mencari relawan di ImpactHub, Anda dapat menemukan relawan yang memiliki minat dan keterampilan yang sesuai dengan kebutuhan organisasi Anda.",
              "ImpactHub adalah platform yang mempertemukan relawan dengan organisasi yang membutuhkan relawan. Cari tahu lebih dalam tentang kami dan bagaimana kami dapat membantu Anda dalam mencari relawan atau menjadi relawan.",
            ]}
            link={[
              "/Pages/Auth/signUp",
              "/Pages/Auth/signUpOrg",
              "/Pages/aboutUs",
            ]}
            placeholder={["Jadi Relawan", "Jadi Organisasi", "Tentang Kami"]}
          />
        </div>
      </section>
    </main>
  );
}
