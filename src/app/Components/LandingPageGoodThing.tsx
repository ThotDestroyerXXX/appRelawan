import { type IconType } from "react-icons/lib";

interface LandingPageGoodThingProps {
  jumlah: (number | React.JSX.Element)[];
  jenis: string[];
  icon: IconType[];
}

export default function LandingPageGoodThing({
  jumlah,
  jenis,
  icon,
}: Readonly<LandingPageGoodThingProps>) {
  return jumlah.map((jml, index) => (
    <div className="flex flex-row items-center gap-3" key={jenis[index]}>
      {icon[index]?.({ className: "h-16 w-16 max-sm:hidden" })}
      <div>
        <h3 className="text-4xl font-semibold max-sm:text-2xl">{jml}</h3>
        <p className="text-xl font-normal max-sm:text-lg">{jenis[index]}</p>
      </div>
    </div>
  ));
}
