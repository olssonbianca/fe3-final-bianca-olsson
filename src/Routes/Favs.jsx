import Card from "../Components/Card";
import { useGlobalContext } from "../Components/utils/global.context";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {  
  const {setArray} = useGlobalContext()
  const fav =  JSON.parse(localStorage.getItem("arr"))
  console.log(fav)

  const clearFav = () =>{setArray(localStorage.setItem("arr", JSON.stringify([])))}
  return (
    <div className="fav vista">
      <button onClick={clearFav} >🗑️</button>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {fav.map((fav) =>
        <Card  key={fav.id} name={fav.name} username={fav.username} id={fav.id} showButton={true}/>
        )}
      </div>
    </div>
  );
};

export default Favs;