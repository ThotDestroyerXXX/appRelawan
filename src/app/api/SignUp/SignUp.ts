"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { authClient } from "~/lib/auth-client";
import { api } from "~/trpc/react";
import { v4 as uuidv4 } from "uuid";

export const useSignUp = () => {
  const router = useRouter();
  const [errors, setErrors] = useState<string | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [id, setId] = useState<string>(uuidv4());
  const utils = api.useUtils();

  const { mutate } = api.organization.signUp.useMutation({
    onMutate() {
      setIsPending(true);
    },
    onSuccess: async (id, variables) => {
      setId(id[0]?.id ?? uuidv4());
      console.log(id[0]?.id);
      await utils.invalidate();
      if (!errors) {
        await handleSignUpAcc(
          variables.email,
          variables.password,
          variables.name,
          true,
          id[0]?.id,
        );
      }
      setIsPending(false);
    },
    onError(error) {
      if (error.message) {
        setIsPending(false);
        setErrors(error.message);
      }

      const fieldErrors = error.data?.zodError?.fieldErrors;
      if (fieldErrors && Object.keys(fieldErrors).length > 0) {
        const firstKey = Object.keys(fieldErrors)[0]!;
        setErrors(fieldErrors[firstKey]?.[0] ?? null);
      }
    },
  });

  const handleSignUpAcc = async (
    email: string,
    password: string,
    username: string,
    isOrganization: boolean,
    id?: string,
  ) => {
    await authClient.signUp.email(
      {
        email: email,
        password: password,
        name: username,
        organization_id: isOrganization ? id : null,
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

  const handleSubmit = async (
    isOrganization: boolean,
    e: React.FormEvent<HTMLFormElement>,
    selectedProvince?: { value: string; label: string },
    selectedRegency?: { value: string; label: string },
    selectedSubDistrict?: { value: string; label: string },
    selectedWard?: { value: string; label: string },
  ) => {
    setErrors(null);
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
      const organizationProvince = selectedProvince?.label ?? "";
      const organizationCity = selectedRegency?.label ?? "";
      const organizationDistrict = selectedSubDistrict?.label ?? "";
      const organizationWard = selectedWard?.label ?? "";
      const organizationAddress = form.get("detaillokasi") as string;
      const organizationPostalCode = form.get("kodepostal") as string;
      mutate({
        id,
        email,
        password,
        name: username,
        organizationName,
        organizationPhone,
        organizationEstablished,
        organizationDescription,
        organizationProvince,
        organizationCity,
        organizationDistrict,
        organizationWard,
        organizationAddress,
        organizationPostalCode,
      });
    } else {
      await handleSignUpAcc(email, password, username, isOrganization);
    }
  };
  return { handleSubmit, isPending, errors };
};
