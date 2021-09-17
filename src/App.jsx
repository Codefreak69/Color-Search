
import "./App.css";

import colorList from "./colorList";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const SearchStyle = {
    width: "30rem",
    background: " #F2F1F9",
    padding: "1.3rem",
    border: "none",
    borderRadius: "12px",
    fontSize: "1.5rem",
  };
  const searchRes = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <div className="container">
        <input
          type="text"
          placeholder="Search Color"
          style={SearchStyle}
          value={search}
          onChange={searchRes}
        />
      </div>
      {colorList.filter((val)=>{
        if(search === ""){
          return val;
        }else if(val.name.toLowerCase().includes(search.toLowerCase())){
          return val;
        }
      }).map((val, key) => {
        return (
          <div className="colorContainer" key={key}>
            <div
              style={{
                backgroundColor: val.color,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100px",
              }}
            >
              <p>{val.name}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default App;
