/** @format */

import React, { useState } from "react";
import "./SearchMovie.css";
import { useNavigate } from "react-router";

const SearchMovie = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState("");

  const navigate = useNavigate();

  const getMovie = () => {
    if (value) {
      fetch(`https://omdbapi.com/?s=${value}&apikey=f6272cdd&page=8`)
        .then((response) => response.json())
        .then((res) => setData(res.Search))
        .catch((err) => {
          console.log(err);
        });
    }
  };

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
      <div className="header">
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          className="search-feild"
          placeholder="Search Movie Name here...."
        />
        <div>
          <button
            type="submit"
            onClick={() => {
              getMovie();
            }}
          >
            Search
          </button>
          <button
            type="submit"
            onClick={() => {
              navigate("/wishlist");
            }}
          >
            WishList
          </button>
        </div>
      </div>

      {!data && (
        <marquee className="beforeSearch">Search Movie Names here....</marquee>
      )}
      {data && (
        <div className="wish-card">
          {data.map((data) => {
            return (
              <div key={data.Title}>
                <div className="wish-details">
                  <img
                    src={data.Poster}
                    alt="not found"
                    height="280px"
                    width="280px"
                    className="movieimg"
                    onClick={() => {
                      navigate(`/moviedetails/${data.Title}`, {
                        state: { title: data.Title },
                      });
                    }}
                  />

                  <h3>{data.Title}</h3>
                  <h4>
                    Year: {data.Year}{" "}
                    <img
                      src="wishlist.png"
                      alt="not found"
                      height="20px"
                      width="20px"
                      className="wishlist"
                      onClick={() => {
                        favMovies();
                      }}
                    />{" "}
                  </h4>
                </div>
              </div>
            );
          })}
          ;
        </div>
      )}
    </>
  );
};

export default SearchMovie;
