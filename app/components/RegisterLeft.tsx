import React from "react";
import RegistrationForm from "./RegisterForm";
import { register } from "../service/auth";
import { useRouter } from "next/navigation";

const RegisterLeft = () => {
  const router = useRouter();

  const handleRegister = async (formData) => {
    try {
      // TODO: wire this up to your actual signup API call
      console.log("Registration submitted:", formData);

      const res = await register(formData);

      if (res.success) {
        router.push("/verify-email");
        // or router.replace("/dashboard");
      }
    } catch (error: any) {
      router.push("/");
      console.error(error);
    }
  };

  return (
    <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 lg:p-12">
      {/* // <div> */}
      <div className="w-full max-w-2xl">
        {/* <!-- Mobile Logo --> */}
        <div className="lg:hidden text-center mb-8">
          <a href="index.htm">
            <img src="/logo.png" alt="Logo" className="h-12 mx-auto" />
          </a>
        </div>

        {/* <!-- Registration Card --> */}
        <RegistrationForm onSubmit={handleRegister} />
      </div>
    </div>
  );
};

export default RegisterLeft;
