import { API_URL } from "./config";

const getMealById = async (mealId) => {
    const response = await fetch(API_URL + "lookup.php?i=" + mealId);
    return await response.json();
};

const getAllCategories = async () => {
    console.log();
    const response = await fetch(API_URL + "categories.php");

    return await response.json();
};

const getFilteredCategory = async (catName) => {
    const res = await fetch(API_URL + "filter.php?c=" + catName);
    return await res.json();
};

export { getMealById, getAllCategories, getFilteredCategory };
