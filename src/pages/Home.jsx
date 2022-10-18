import { useEffect, useState } from "react";
import { getAllCategories } from "../api";
import CategoryList from "../components/CategoryList/CategoryList";
import Search from "../components/Search/Search";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
    const [categories, setCategories] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([]);
    const { pathname, search } = useLocation();
    const navigate = useNavigate();
    console.log(search);

    const handleSearch = (str) => {
        setFilteredCatalog(
            categories.filter((item) =>
                item.strCategory.toLowerCase().includes(str.toLowerCase())
            )
        );
        navigate({
            pathname,
            search: `?search=${str}`,
        });
    };

    useEffect(() => {
        getAllCategories().then((data) => {
            setCategories(data.categories);
            setFilteredCatalog(
                search
                    ? data.categories.filter((item) =>
                          item.strCategory
                              .toLowerCase()
                              .includes(search.split("=")[1].toLowerCase())
                      )
                    : data.categories
            );
        });
    }, [search]);

    return (
        <div>
            Home
            <Search cb={handleSearch}></Search>
            {categories.length !== 0 ? (
                <CategoryList categories={filteredCatalog}></CategoryList>
            ) : null}
        </div>
    );
};
export default Home;
