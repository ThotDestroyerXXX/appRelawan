import Navbar from "~/app/Components/navbar";
import SignForm from "~/app/Components/signForm";
import Image from "next/image";
import chad from "~/app/Assets/chad.jpg";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Navbar />
      <div className="flex flex-col items-center gap-4 pt-5">
        <Image
          src={chad}
          alt="chad"
          className="h-11 w-11 rounded-full object-cover"
        />
        <h2 className="text-3xl font-bold">Sign Up for Free</h2>
        <SignForm
          label={["Username", "Email", "Password"]}
          type={["text", "text", "password"]}
          placeholder={[
            "Enter your username",
            "Enter your email",
            "Enter your password",
          ]}
        />
      </div>
    </div>
  );
};

export default SignUp;
