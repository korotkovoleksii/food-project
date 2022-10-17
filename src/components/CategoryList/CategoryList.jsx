import CategoryItem from "../CategoryItem/CategoryItem";
import "./CategoryList.css";

const CategoryList = ({ categories }) => {
    return (
        <div className="category-list">
            {categories
                ? categories.map((item) => (
                      <CategoryItem
                          key={item.idCategory}
                          id={item.idCategory}
                          title={item.strCategory}
                          imgUrl={item.strCategoryThumb}
                          description={item.strCategoryDescription}
                      ></CategoryItem>
                  ))
                : null}
        </div>
    );
};

export default CategoryList;
