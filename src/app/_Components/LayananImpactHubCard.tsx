import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { type Url } from "url";

interface LayananImpactHubCardProps {
  image: StaticImageData[];
  judul: string[];
  deskripsi: string[];
  link: string[] | Url[];
  placeholder: string[];
}

export default function LayananImpactHubCard({
  image,
  judul,
  deskripsi,
  link,
  placeholder,
}: LayananImpactHubCardProps) {
  return judul.map((judul, index) => (
    <div
      className="flex h-[35rem] w-[25rem] flex-col items-center gap-3 rounded-lg bg-white text-black shadow-lg"
      key={judul}
    >
      <Image
        src={image[index] ?? ""}
        alt=""
        className="h-[15rem] w-screen rounded-lg object-cover object-center"
      />
      <div className="flex flex-col items-center gap-2 p-5 text-justify">
        <h2 className="text-center text-2xl font-bold">{judul}</h2>
        <p>{deskripsi[index]}</p>
      </div>
      <div className="mb-7 mt-auto">
        <Link href={link[index] ?? ""}>
          <button className="h-10 w-44 items-center rounded-md border-2 border-[#BDD2B6] text-center text-black hover:bg-[#BDD2B6]">
            {placeholder[index]}
          </button>
        </Link>
      </div>
    </div>
  ));
}
