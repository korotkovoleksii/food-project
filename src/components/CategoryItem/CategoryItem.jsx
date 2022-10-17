import { Link } from "react-router-dom";
import "./CategoryItem.css";

const CategoryItem = ({ id, title, imgUrl, description }) => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={imgUrl} alt={title} />
            </div>

            <div className="card-content">
                <span className="card-title">{title}</span>
                <p>{description.slice(0, 60)}...</p>
            </div>
            <div className="card-action">
                <Link
                    to={`/category/${id}`}
                    className="waves-effect waves-light btn"
                >
                    watch category
                </Link>
            </div>
        </div>
    );
};
export default CategoryItem;
