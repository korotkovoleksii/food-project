import { useEffect, useState } from "react";
import { getAllCategories } from "../api";
import CategoryList from "../components/CategoryList/CategoryList";

const Home = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getAllCategories().then((data) => {
            setCategories(data.categories);
        });
    }, []);
    return (
        <div>
            Home
            {categories.length !== 0 ? (
                <CategoryList categories={categories}></CategoryList>
            ) : null}
        </div>
    );
};
export default Home;
