import { RiInbox2Fill } from "react-icons/ri";

export default function EmptyMessage() {
  return (
    <div className="absolute left-[50%] top-[50%] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center opacity-30">
      <RiInbox2Fill className="h-20 w-20" />
      <h1 className="text-[1.3em]">Belum ada data</h1>
    </div>
  );
}
