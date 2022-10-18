import { useState } from "react";

const Search = ({ cb = Function.prototype }) => {
    const [value, setValue] = useState("");
    const handleKey = (e) => {
        if (e.key === "Enter") {
            handleSubmit();
        }
    };
    const handleSubmit = () => {
        console.log("qqqq");
        cb(value);
    };

    return (
        <div className="row">
            <div className="input-field col s12">
                <input
                    type="search"
                    id="search-field"
                    value={value}
                    placeholder="search"
                    onKeyDown={handleKey}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                />
            </div>
            <button className="btn" onClick={handleSubmit}>
                search
            </button>
        </div>
    );
};
export default Search;
