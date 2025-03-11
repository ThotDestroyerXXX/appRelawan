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
      {icon[index]?.({ className: "h-20 w-20" })}
      <div>
        <h3 className="text-4xl font-semibold">{jml}</h3>
        <p className="text-xl font-normal">{jenis[index]}</p>
      </div>
    </div>
  ));
}
