import React from "react";
import { Link } from "react-router-dom";
import "./CardPokemon.css";

export default function CardPokemon({ pokemon }) {
  const imgPokemon = require(`../../iconos/${pokemon.nombre.toLowerCase()}.png`);
  return (
    <Link style={{ textDecoration: "none" }} to={`tarjeta/${pokemon.nombre}`}>
      <div
        className="padrePokemones"
        style={{
          fontWeight: "900",
          width: "300px",
          border: "solid 4px",
          borderColor: pokemon.color,
          borderRadius: "25px",
        }}
        key={pokemon.numero.toString()}
      >
        <div className="elementosPokemones">
          {pokemon.elemento.map((el) => (
            <div key={el} className={`elemento1 ${el.toLowerCase()}`}>
              <h4>{el}</h4>
            </div>
          ))}
        </div>
        <img className="imagenPokemon" src={imgPokemon} alt={imgPokemon} />
        <div className="numeroPokemon" style={{ color: pokemon.color }}>
          #{pokemon.numero}
        </div>{" "}
        <div
          className="cardBorder"
          style={{
            backgroundColor: pokemon.color,
            borderRadius: " 0 0 15px 15px",
            color: "white",
            fontSize: "25px",
            padding: "10px",
          }}
        >
          {pokemon.nombre}
        </div>
      </div>
    </Link>
  );
}
