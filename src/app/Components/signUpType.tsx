import Link from "next/link";
import Modal from "./modal";
import { FaUser } from "react-icons/fa";
import { GrOrganization } from "react-icons/gr";

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AlertModal = ({ isOpen, onClose }: AlertModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-lg font-bold">Sign Up</h2>
      <div className="flex flex-row items-center justify-around">
        <Link href={"/Pages/Auth/signUp"}>
          <div className="flex max-w-40 cursor-pointer flex-col items-center justify-center gap-3">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-green-500">
              <FaUser className="h-10 w-10" />
            </div>
            <p>Daftar Sebagai Relawan</p>
          </div>
        </Link>
        <Link href={"/Pages/Auth/signUpOrg"}>
          <div className="flex max-w-40 cursor-pointer flex-col items-center justify-center gap-3">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-green-500">
              <GrOrganization className="h-10 w-10" />
            </div>
            <p>Daftar Sebagai Organisasi</p>
          </div>
        </Link>
      </div>
    </Modal>
  );
};

export default AlertModal;
