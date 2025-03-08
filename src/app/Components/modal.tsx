import Link from "next/link";
import { type ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <button
      className="fixed inset-0 flex cursor-default items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div className="relative flex w-full max-w-[30rem] flex-col gap-6 rounded-lg bg-white p-6 text-black shadow-lg">
        <Link
          href="/Pages/signIn"
          className="absolute right-5 top-3 text-xl font-bold text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &#x2715; {/* Close button */}
        </Link>
        {children}
      </div>
    </button>
  );
};

export default Modal;
