import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./utils/global.context";

const Card = ({ name: cardName, username, id, showButton }) => {
    const { setArray } = useGlobalContext();
    const [selectedDentist, setSelectedDentist] = useState();

    const url = `https://jsonplaceholder.typicode.com/users/${id}`;

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => setSelectedDentist(data));
    }, [url]);

    const addFav = () => {
    const array = JSON.parse(localStorage.getItem("arr")) || [];

    const existsDentist = array.find(
        (element) => element.id === selectedDentist?.id
    );
    if (!existsDentist) {
        array.push(selectedDentist);
        localStorage.setItem("arr", JSON.stringify(array));
        setArray(array);

    } else {
        console.log(
            "No se puede agregar este dentista porque ya existe, intente con otro");
    }
    };

    const deleteCard = () => {
        const array = JSON.parse(localStorage.getItem("arr"));
    
        const index = array.findIndex((elemento) => elemento.id === selectedDentist.id);
        if (index > -1) {
            array.splice(index, 1);
            localStorage.setItem("arr", JSON.stringify(array));
            if (array) {
                setArray(array);
            }
        }
    };    

    return (
    <div className="card">
        <Link key={id} to={`/dentist/${id}`}>
        <div>
            <img
            className="card-img"
            src="/images/doctor.jpg"
            alt="Doctor"
            width={200}
            />
            <h3>{cardName}</h3>
            <h2>{username}</h2>
        </div>
        </Link>

        {showButton ? (
        <button onClick={addFav} className="favButton">
            Añadir a favoritos
        </button>
        ) : (
        <button onClick={deleteCard} className="favButton">
            Eliminar de favoritos
        </button>
        )}
    </div>
    );
};

export default Card;