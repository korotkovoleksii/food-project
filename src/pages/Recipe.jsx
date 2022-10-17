import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMealById } from "../api";
const Recipe = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [dataRecipe, setDataRecipe] = useState({});

    useEffect(() => {
        getMealById(id).then((data) => {
            console.log(data.meals[0]);
            setDataRecipe(data.meals[0]);
        });
    }, [id]);
    return (
        <>
            {!dataRecipe.idMeal ? null : (
                <div>
                    <img
                        style={{ wight: "100%" }}
                        src={dataRecipe.strMealThumb}
                        alt={dataRecipe.strMeal}
                    />
                    <h2>{dataRecipe.strMeal}</h2>
                    <p>Category: {dataRecipe.strCategory}</p>
                    {dataRecipe.strArea ? (
                        <p>Area: {dataRecipe.strArea}</p>
                    ) : null}

                    <p>{dataRecipe.strInstructions}</p>
                    <table>
                        <thead>
                            <tr>
                                <th>Ingredient</th>
                                <th>Measure</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(dataRecipe).map((item) => {
                                if (
                                    item.includes("Ingredient") &&
                                    dataRecipe[item]
                                ) {
                                    return (
                                        <tr key={item}>
                                            <td>{dataRecipe[item]}</td>
                                            <td>
                                                {
                                                    dataRecipe[
                                                        "strMeasure" +
                                                            item.slice(13)
                                                    ]
                                                }
                                            </td>
                                        </tr>
                                    );
                                }
                                return null;
                            })}
                        </tbody>
                    </table>
                    {dataRecipe.strYoutube ? (
                        <iframe
                            title={id}
                            src={`https://www.youtube.com/embed/${dataRecipe.strYoutube.slice(
                                -11
                            )}`}
                            allowFullScreen
                        ></iframe>
                    ) : null}

                    <button
                        className="btn"
                        onClick={() => {
                            navigate(-1);
                        }}
                    >
                        {" "}
                        back
                    </button>
                </div>
            )}
        </>
    );
};
export default Recipe;
