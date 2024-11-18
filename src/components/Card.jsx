import React from 'react'
import seriesData from "../api/seriesData";
const Card = () => {
  return (
    <>
      <div className="container mx-auto mt-20">
        <h2 className="mb-10 text-white text-4xl font-bold pb-4">
          <span className="text-white">
            <i className="fa-solid fa-video mr-4"></i>
          </span>
          Movies
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3">
          {seriesData.map((currEle) => {
            return (
              <a href={currEle.watch_url} target="_blank">
                <div className="card">
                  <figure className="bg-base-100 h-100 w-100 shadow-xl">
                    <img src={currEle.img_url} alt="Shoes" />
                  </figure>
                  <div className="card-body px-0">
                    <h3 className="card-title text-white">{currEle.name}</h3>
                    <p>
                      2023
                      <span className="ml-8">
                        <i class="fas fa-heart"></i>
                      </span>
                      <span className="ml-3">
                        <i className="fas fa-eye"></i>
                      </span>
                      <span className="text-warning ml-5">
                        <i className="fas fa-star"></i> 8.5
                      </span>
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card;

