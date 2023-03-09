/** @format */

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

const MovieDetails = () => {
  const [data, setData] = useState();
  const { state } = useLocation();
  useEffect(() => {
    fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=f6272cdd&t=${state.title}`
    )
      .then((response) => response.json())
      .then((res) => setData(res))
      .catch((err) => {
        console.log(err);
      });
  }, [state]);
  const favMovies = () => {
    if (localStorage.getItem("data") == null) {
      localStorage.setItem("data", "[]");
    }
    var old_data = JSON.parse(localStorage.getItem("data"));
    old_data.push(data);
    localStorage.setItem("data", JSON.stringify(old_data));
  };

  return (
    <>
      {data && (
        <>
          <div className="details">
            <div className="card-title">
              <h1>{data.Title}</h1>
              <img
                src="/wishlist.png"
                alt="not found"
                height="45px"
                width="45px"
                className="wishlist"
                onClick={() => {
                  favMovies();
                }}
              />
            </div>
            <div className="imgdetails">
              <img
                src={data.Poster}
                alt="not found"
                height="550px"
                width="600px"
              />
              <div className="moredetails">
                <p>Plot :&ensp; {data.Plot}</p>
                <p> Director : &ensp;{data.Director}</p>
                <p>Actors :&ensp; {data.Actors}</p>
                <p> Writer : &ensp; {data.Writer}</p>
                <p>Released Year :&ensp; {data.Year}</p>
                <p> ImdbRating : &ensp; {data.imdbRating}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MovieDetails;
