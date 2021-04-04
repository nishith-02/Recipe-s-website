import React, { useEffect, useState } from "react";
import './CSS/Home.css'
import Loading from "./Loading";
function App() {
  const YOUR_APP_ID = "136b5edf";
  const YOUR_APP_KEY = "35bd2a44cf5f5a8685bdc262894e9e5b";
  const [all, setall] = useState([]);
  const [loading, setloading] = useState(true);
  const [search,setsearch]=useState("")
  const Receipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
    );
    const data = await response.json();
    setall(data.hits);
    setloading(false);
  };
  useEffect(() => {
    Receipe();
  }, []);
  if (loading === true) {
    return <Loading />
  }
  const fileteredItems=all.filter(palli=>{
    return palli.recipe.label.toLowerCase().includes(search.toLocaleLowerCase())
  })
  return (
    <div className="home">
      {console.log(all)}
      <input className="input" type="text" placeholder="Search by name" value={search} onChange={e=>setsearch(e.target.value)} />
      <div className="items">
        {fileteredItems.map((item) => {
          return (
            <div className="box">
              <h3 className="label">{item.recipe.label}</h3>
              <ol>
                {item.recipe.ingredients.map((ingredients)=>{
                  return(
                    <li>{ingredients.text}</li>
                  )
                })}
              </ol>
              <h6 className="calories">{item.recipe.calories}</h6>
              <img className="image" src={item.recipe.image} alt="img"/>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
