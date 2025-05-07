import Link from "next/link";
import { RiInbox2Fill } from "react-icons/ri";

interface EmptyMessageProps {
  msg: string;
  link: string;
  placeholderBtn: string;
}

export default function EmptyMessage({
  msg,
  link,
  placeholderBtn,
}: Readonly<EmptyMessageProps>) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="flex flex-col items-center text-center opacity-30">
        <RiInbox2Fill className="h-20 w-20" />
        <h1 className="text-[1.3em]">Belum ada data</h1>
        <p>{msg}</p>
      </div>
      <Link href={link} className="opacity-100">
        <button className="rounded-md bg-green-500 pb-2 pl-4 pr-4 pt-2 text-white hover:bg-green-600">
          {placeholderBtn}
        </button>
      </Link>
    </div>
  );
}
