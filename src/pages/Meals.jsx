import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MealList from "../components/MealList/MealList";
import { getFilteredCategory } from "../api";

const Meals = () => {
    const { name } = useParams();
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        getFilteredCategory(name).then((data) => {
            console.log(data);
            setMeals(data.meals);
        });
    }, [name]);

    return (
        <div>
            Meals
            {!meals.length ? null : <MealList meals={meals}></MealList>}
        </div>
    );
};
export default Meals;
