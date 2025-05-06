import { type TypeProps } from "~/app/Components/ActivityCategoryAndType";
import { authenticator } from "~/hooks/authenticator";
import { api } from "~/trpc/react";
import { upload } from "@imagekit/next";
import { type TerritoryProps } from "~/app/Components/territoryForm";

export const days: TypeProps[] = [
  { id: 1, name: "Senin" },
  { id: 2, name: "Selasa" },
  { id: 3, name: "Rabu" },
  { id: 4, name: "Kamis" },
  { id: 5, name: "Jumat" },
  { id: 6, name: "Sabtu" },
  { id: 7, name: "Minggu" },
];

export const fetchAllCategory = () => {
  const {
    data: categoryList,
    isLoading: isLoadingCategory,
    error: categoryError,
  } = api.activity.getActivityCategory.useQuery();
  return { categoryList, isLoadingCategory, categoryError };
};
export const fetchAllActivityType = () => {
  const {
    data: ActivityTypeList,
    isLoading: isLoadingActivityType,
    error: ActivityTypeError,
  } = api.activity.getActivityType.useQuery();
  return { ActivityTypeList, isLoadingActivityType, ActivityTypeError };
};
export const fetchAllLocationType = () => {
  const {
    data: LocationTypeList,
    isLoading: isLoadingLocationType,
    error: LocationTypeError,
  } = api.activity.getLocationType.useQuery();
  return { LocationTypeList, isLoadingLocationType, LocationTypeError };
};

export const getTypeData = () => {
  try {
    const categoryData = fetchAllCategory();

    const activityTypeData = fetchAllActivityType();

    const locationTypeData = fetchAllLocationType();

    return { categoryData, activityTypeData, locationTypeData };
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
};

export const createActivity = (
  setLoading: (loading: boolean) => void,
  setError: (e: string | null) => void,
) => {
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    galleryImages: File[] | null,
    thumbnailImages: File | null,
    selectedProvince: TerritoryProps | null,
    selectedRegency: TerritoryProps | null,
    selectedSubDistrict: TerritoryProps | null,
    selectedWard: TerritoryProps | null,
    selectedCategory1: TypeProps | null,
    selectedCategory2: TypeProps | null,
    selectedActivityType: TypeProps | null,
    selectedLocationType: TypeProps | null,
    timeFields: { id: string; value: string }[],
    dayInputNumber: (TypeProps | null)[],
    finishFields: { id: string; value: string }[],
  ) => {
    setLoading(true);
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("namaaktivitas") as string;
    const limit = form.get("limitorang") as string;
    const startDate = form.get("tanggalmulai") as string;
    const endDate = form.get("tanggalselesai") as string;
    const registrationDeadline = form.get("deadlineregistrasi") as string;
    const locationDetail = form.get("detaillokasi") as string;
    const activityDescription = form.get("deskripsiAktivitas") as string;
    const activityDetail = form.get("detailAktivitas") as string;
    const jobDetail = form.get("detailPekerjaan") as string;
    const binusianOnly = form.get("binusianOnly") as string;
    const requireConfirmation = form.get("requireConfirmation") as string;

    console.log(
      name,
      limit,
      startDate,
      endDate,
      registrationDeadline,
      locationDetail,
      activityDescription,
      activityDetail,
      jobDetail,
      binusianOnly,
      requireConfirmation,
      selectedProvince,
      selectedRegency,
      selectedSubDistrict,
      selectedWard,
      selectedCategory1,
      selectedCategory2,
      selectedActivityType,
      selectedLocationType,
      timeFields,
      dayInputNumber,
      finishFields,
    );
    setLoading(false);
    // if (galleryImages) {
    //   console.log(galleryImages);
    //   for (const image of galleryImages) {
    //     try {
    //       const authParams = await authenticator();
    //       const { signature, expire, token, publicKey } = authParams;
    //       const uploadResponse = await upload({
    //         // Authentication parameters
    //         expire: expire,
    //         token,
    //         signature,
    //         publicKey,
    //         file: image,
    //         fileName: image.name, // Optionally set a custom file name
    //         folder: "/AppRelawan",
    //         useUniqueFileName: true,
    //         overwriteFile: true,
    //       });
    //       console.log(uploadResponse.url);
    //     } catch (e) {
    //       console.log(e);
    //     }
    //   }
    // }

    // await api.activity.createActivity.mutateAsync({
    //   name,
    //   limit: Number(limit),
    //   startDate,
    //   endDate,
    //   registrationDeadline,
    //   locationDetail,
    //   selectedCategory1,
    //   selectedCategory2,
    //   selectedActivityType,
    //   selectedLocationType,
    //   selectedProvince,
    //   selectedRegency,
    //   selectedSubDistrict,
    //   selectedWard,
    // });
  };
  return { handleSubmit };
};
