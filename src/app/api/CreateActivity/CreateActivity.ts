import { type TypeProps } from "~/app/_Components/ActivityCategoryAndType";
import { api } from "~/trpc/react";

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
