import MealItem from "../MealItem/MealItem";
import "./MealList.css";

const MealList = ({ meals }) => {
    return (
        <div className="meal-list">
            {!meals.length
                ? null
                : meals.map((item) => <MealItem key={item.idMeal} {...item} />)}
        </div>
    );
};
export default MealList;
