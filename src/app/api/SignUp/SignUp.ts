"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { authClient } from "~/lib/auth-client";

export const useSignUp = () => {
  const router = useRouter();
  const [errors, setErrors] = useState<string | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);

  const handleSubmit = async (
    isOrganization: boolean,
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const username = form.get("username") as string;
    const email = form.get("email") as string;
    const password = form.get("password") as string;

    if (isOrganization) {
      const organizationName = form.get("namaorganisasi") as string;
      const organizationPhone = form.get("nomorteleponorganisasi") as string;
      const organizationEstablished = form.get(
        "tanggalberdiriorganisasi",
      ) as string;
      const organizationDescription = form.get("deskripsiOrganisasi") as string;
      const organizationProvince = form.get("province-select") as string;
      const organizationCity = form.get("regency-select") as string;
      const organizationDistrict = form.get("subdistrict-select") as string;
      console.log(
        organizationProvince,
        organizationCity,
        organizationDistrict,
        organizationDescription,
        organizationEstablished,
        organizationName,
        organizationPhone,
        username,
        email,
        password,
      );
    }

    await authClient.signUp.email(
      {
        email: email,
        password: password,
        name: username,
      },
      {
        onRequest: () => {
          setIsPending(true);
        },
        onSuccess: () => {
          // const userId =
          setIsPending(false);
          router.push("/");
          router.refresh();
        },
        onError: (e) => {
          setIsPending(false);
          setErrors(e.error.message);
        },
      },
    );
  };
  return { handleSubmit, isPending, errors };
};
