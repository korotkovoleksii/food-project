import { Link } from "react-router-dom";
import "./MealItem.css";

const MealItem = ({ strMeal, strMealThumb, idMeal }) => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={strMealThumb} alt={strMeal} />
            </div>

            <div className="card-content">
                <span className="card-title">{strMeal}</span>
            </div>
            <div className="card-action">
                <Link
                    to={`/meal/${idMeal}`}
                    className="waves-effect waves-light btn"
                >
                    watch script
                </Link>
            </div>
        </div>
    );
};

export default MealItem;
