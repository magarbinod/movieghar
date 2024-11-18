import React from 'react'

const Card = () => {
  return (
    <>
      <div className="container mx-auto mt-40">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-6">
          <a href="http://">
            <div className="card">
              <figure className="bg-base-100 h-100 w-100 shadow-xl">
                <img src="Hate-Store.jpg" alt="Shoes" />
              </figure>
              <div className="card-body px-0">
                <h3 className="card-title text-white">Hate Store IV</h3>
                <p>
                  2023
                  <span className="ml-8">
                    <i class="fas fa-heart"></i>
                  </span>
                  <span className='ml-3'>
                    <i class="fas fa-eye"></i>
                  </span>
                  <span className="text-warning ml-5">
                    <i class="fas fa-star"></i> 8.5
                  </span>
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Card