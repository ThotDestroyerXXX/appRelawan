import { type TypeProps } from "~/app/Components/ActivityCategoryAndType";
import { authenticator } from "~/hooks/authenticator";
import { api } from "~/trpc/react";
import { upload } from "@imagekit/next";
import { type TerritoryProps } from "~/app/Components/territoryForm";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { formatTime } from "~/lib/utils";

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

export const CreateOneActivity = (
  setLoading: (loading: boolean) => void,
  setError: (e: string | null) => void,
) => {
  const utils = api.useUtils();
  const router = useRouter();

  const { mutateAsync: mutateTimeDetail } =
    api.activity.createActivityTimeDetail.useMutation({
      onMutate() {
        setLoading(true);
      },
      onSuccess: async () => {
        await utils.invalidate();
      },
      onError(error) {
        if (error.message) {
          setLoading(false);
          setError(error.message);
        }

        const fieldErrors = error.data?.zodError?.fieldErrors;
        if (fieldErrors && Object.keys(fieldErrors).length > 0) {
          const firstKey = Object.keys(fieldErrors)[0]!;
          setError(fieldErrors[firstKey]?.[0] ?? null);
        }
      },
    });

  const { mutateAsync } = api.activity.createActivity.useMutation({
    onMutate() {
      setLoading(true);
    },
    onError(error) {
      if (error.message) {
        setLoading(false);
        setError(error.message);
      }

      const fieldErrors = error.data?.zodError?.fieldErrors;
      if (fieldErrors && Object.keys(fieldErrors).length > 0) {
        const firstKey = Object.keys(fieldErrors)[0]!;
        setError(fieldErrors[firstKey]?.[0] ?? null);
      }
    },
  });

  const { mutateAsync: mutateActivityDetail } =
    api.activity.createActivityDetail.useMutation({
      onMutate() {
        setLoading(true);
      },
      onError(error) {
        if (error.message) {
          setLoading(false);
          setError(error.message);
        }

        const fieldErrors = error.data?.zodError?.fieldErrors;
        if (fieldErrors && Object.keys(fieldErrors).length > 0) {
          const firstKey = Object.keys(fieldErrors)[0]!;
          setError(fieldErrors[firstKey]?.[0] ?? null);
        }
      },
    });

  const { mutateAsync: mutateImageGallery } =
    api.activity.createActivityGallery.useMutation({
      onMutate() {
        setLoading(true);
      },
      onError(error) {
        if (error.message) {
          setLoading(false);
          setError(error.message);
        }

        const fieldErrors = error.data?.zodError?.fieldErrors;
        if (fieldErrors && Object.keys(fieldErrors).length > 0) {
          const firstKey = Object.keys(fieldErrors)[0]!;
          setError(fieldErrors[firstKey]?.[0] ?? null);
        }
      },
    });

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
    organization_id: string,
  ) => {
    e.preventDefault();
    setLoading(true);
    const galleryUrls: string[] = [];

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

    setError(null);

    if (!thumbnailImages || thumbnailImages.size === 0) {
      setError("Thumbnail image is required");
      setLoading(false);
      return;
    }

    if (!galleryImages || galleryImages.length === 0) {
      setError("Gallery images are required");
      setLoading(false);
      return;
    }

    for (const element of dayInputNumber) {
      if (!element?.name || element.name.trim() === "") {
        setError("All days are required and must have valid names");
        setLoading(false);
        return;
      }
    }
    for (const element of timeFields) {
      if (element.value === "" || element.value === null) {
        setError("All start time is required");
        setLoading(false);
        return;
      }
    }
    for (const element of finishFields) {
      if (element.value === "" || element.value === null) {
        setError("All end time is required");
        setLoading(false);
        return;
      }
    }

    const activitySchema = z.object({
      name: z
        .string()
        .min(1, "Nama aktivitas harus diisi")
        .max(255, "Nama aktivitas harus kurang dari 255 karakter"),
      start_date: z.date().min(new Date(), "Tanggal mulai harus di masa depan"),
      end_date: z.date().min(new Date(), "Tanggal selesai harus di masa depan"),
      province: z.string().nonempty("Provinsi harus diisi"),
      city: z.string().nonempty("Kota harus diisi"),
      subdistrict: z.string().nonempty("Kecamatan harus diisi"),
      ward: z.string().nonempty("Kelurahan harus diisi"),
      address: z
        .string()
        .nonempty("Alamat harus diisi")
        .max(255, "Alamat harus kurang dari 255 karakter"),
      registration_deadline_date: z
        .date()
        .min(new Date(), "Deadline registrasi harus di masa depan"),
      activity_person_limit: z
        .number()
        .min(1, "limit orang harus minimal 1")
        .max(2000, "limit orang harus kurang dari 2000"),
      binusian_only: z.boolean(),
      require_confirmation: z.boolean(),
      description: z
        .string()
        .nonempty("Description is required")
        .min(20, "Deskripsi Aktivitas harus lebih dari 20 karakter")
        .max(1000, "Deskripsi Aktivitas harus kurang dari 1000 karakter"),
      activity_detail: z
        .string()
        .nonempty("Activity detail is required")
        .min(20, "Detail aktivitas harus lebih dari 20 karakter")
        .max(1000, "Detail aktivitas harus kurang dari 1000 karakter"),
      job_detail: z
        .string()
        .nonempty("Detail pekerjaan harus diisi")
        .min(20, "Detail pekerjaan harus lebih dari 20 karakter")
        .max(1000, "Detail pekerjaan harus kurang dari 1000 karakter"),
    });

    try {
      const binusianValidate = binusianOnly !== null && binusianOnly === "on";
      const requireConfirmationValidate =
        binusianOnly !== null && requireConfirmation === "on";
      const activityData = {
        name,
        start_date: new Date(startDate),
        end_date: new Date(endDate),
        province: selectedProvince?.label ?? "",
        city: selectedRegency?.label ?? "",
        subdistrict: selectedSubDistrict?.label ?? "",
        ward: selectedWard?.label ?? "",
        address: locationDetail,
        registration_deadline_date: new Date(registrationDeadline),
        activity_person_limit: parseInt(limit),
        binusian_only: binusianValidate,
        require_confirmation: requireConfirmationValidate,
        description: activityDescription,
        activity_detail: activityDetail,
        job_detail: jobDetail,
      };

      // Validate the data using zod
      activitySchema.parse(activityData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = error.flatten().fieldErrors;
        if (fieldErrors && Object.keys(fieldErrors).length > 0) {
          const firstKey = Object.keys(fieldErrors)[0]!;
          setError(fieldErrors[firstKey]?.[0] ?? null);
        }
      } else {
        setError("An unexpected error occurred");
      }
      setLoading(false);
      return;
    }

    try {
      const authParams = await authenticator();
      const { signature, expire, token, publicKey } = authParams;
      const uploadResponse = await upload({
        // Authentication parameters
        expire: expire,
        token,
        signature,
        publicKey,
        file: thumbnailImages,
        fileName: thumbnailImages.name, // Optionally set a custom file name
        folder: "/AppRelawan",
        useUniqueFileName: true,
        overwriteFile: true,
      });
      for (const image of galleryImages) {
        const authParamGallery = await authenticator();
        const { signature, expire, token, publicKey } = authParamGallery;
        try {
          const uploadResponseGallery = await upload({
            // Authentication parameters
            expire: expire,
            token,
            signature,
            publicKey,
            file: image,
            fileName: image.name, // Optionally set a custom file name
            folder: "/AppRelawan",
            useUniqueFileName: true,
            overwriteFile: true,
          });
          galleryUrls.push(uploadResponseGallery.url ?? "");
        } catch (e) {
          setError(
            e instanceof Error ? e.message : "An unexpected error occurred",
          );
          setLoading(false);
          return;
        }
      }

      const activityId = await mutateAsync({
        name,
        start_date: new Date(startDate),
        end_date: new Date(endDate),
        province: selectedProvince?.label ?? "",
        city: selectedRegency?.label ?? "",
        subdistrict: selectedSubDistrict?.label ?? "",
        ward: selectedWard?.label ?? "",
        address: locationDetail,
        registration_deadline_date: new Date(registrationDeadline),
        thumbnail_url: uploadResponse.url ?? "",
        activity_person_limit: parseInt(limit),
        binusian_only: binusianOnly === "on",
        require_confirmation: requireConfirmation === "on",
        location_type_id: selectedLocationType?.id ?? 0,
        organization_id: organization_id,
        activity_category_id_1: selectedCategory1?.id ?? 0,
        activity_category_id_2: selectedCategory2?.id ?? 0,
        activity_type_id: selectedActivityType?.id ?? 0,
      });

      await utils.invalidate();

      if (activityId) {
        for (let i = 0; i < dayInputNumber.length; i++) {
          const day = dayInputNumber[i]?.name;
          const startTime = timeFields[i]?.value ?? "";
          const endTime = finishFields[i]?.value ?? "";

          if (!startTime || !endTime) {
            setError("Start time and end time are required for all days");
            setLoading(false);
            return;
          }

          await mutateTimeDetail({
            activity_id: activityId[0]?.id ?? uuidv4(),
            start_time: formatTime(startTime), // Format the start time
            end_time: formatTime(endTime), // Format the end time
            day: day ?? "",
          });
        }
      }

      await utils.invalidate();

      if (activityId) {
        const activityDetailId = await mutateActivityDetail({
          activity_id: activityId[0]?.id ?? uuidv4(),
          description: activityDescription,
          activity_detail: activityDetail,
          job_detail: jobDetail,
        });

        await utils.invalidate();

        for (const image of galleryUrls) {
          await mutateImageGallery({
            activity_detail_id: activityDetailId[0]?.id ?? uuidv4(),
            image_url: image ?? "",
          });
        }
      }
      await utils.invalidate();
      router.push("/Pages/Organization/Dashboard");
      router.refresh();
      setLoading(false);
    } catch (e) {
      setError(e instanceof Error ? e.message : "An unexpected error occurred");
      setLoading(false);
      return;
    }
  };
  return { handleSubmit };
};
