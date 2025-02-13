import Image from "next/image";
import chad from "../Assets/chad.jpg";
import Link from "next/link";

interface NavbarProps {
    type: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
    type,
}) => {
    return (
        <div className="flex w-full items-center justify-between border-b-2 border-black pb-2 pl-10 pr-10 pt-2 text-black bg-sageGreen h-16">
            <div>
                <Image
                    src={chad}
                    alt="chad"
                    className="h-11 w-11 rounded-full object-cover"
                />
            </div>
            <div className="flex gap-6">
                <Link href="/">
                    <button className="rounded-md pb-2 pl-4 pr-4 pt-2">Home</button>
                </Link>
                <Link href="/Pages/signIn">
                    <button className="rounded-md pb-2 pl-4 pr-4 pt-2">sign In</button>
                </Link>
                <Link href="/Pages/signUp">
                    <button className="rounded-md pb-2 pl-4 pr-4 pt-2">sign Up</button>
                </Link>
            </div>
            <div>
                <button className="rounded-md bg-darkGreen pb-2 pl-4 pr-4 pt-2 text-white" onClick={() => (type ? window.location.href = "/Pages/signUp" : window.location.href = "/Pages/signIn")}>
                    {type ? "SignIn" : "SignUp"}
                </button>

            </div>
        </div>
    );
};
export default Navbar;