/** @format */

import React, { useEffect, useState } from "react";

const WishList = () => {
  const [details, setDetails] = useState();

  useEffect(() => {
    setDetails(JSON.parse(localStorage.getItem("data")));
  }, []);
  const favMovies = (title) => {
    const contentItem = details.filter((item) => {
      return item.Title !== title;
    });
    setDetails(contentItem);
    localStorage.setItem("data", JSON.stringify(contentItem));
  };

  return (
    <>
      <div className="wish-card">
        {details &&
          details.map((data) => {
            return (
              <div key={data.Title}>
                <div className="wish-details">
                  <img
                    src={data.Poster}
                    alt="not found"
                    height="280px"
                    width="280px"
                    className="movieimg"
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
                        favMovies(data.Title);
                      }}
                    />{" "}
                  </h4>
                </div>
              </div>
            );
          })}
        ;
      </div>
    </>
  );
};

export default WishList;
