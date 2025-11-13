import LoginForm from "@/components/auth/LoginForm";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Login - BookWise",
  description: "Library Management System Register Page",
};

const page = () => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      <div className="h-full w-full flex items-center justify-center px-4 py-20 lg:px-0 lg:py-20">
        <LoginForm />
      </div>
      <div className="h-full w-full hidden lg:block relative">
        <Image
          src={"/auth-page-image.png"}
          width={700}
          height={1110}
          alt="login page image"
          className="w-full h-screen object-cover sticky inset-0"
        />
      </div>
    </div>
  );
};

export default page;
