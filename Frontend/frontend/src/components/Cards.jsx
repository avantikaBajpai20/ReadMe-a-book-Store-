import React from 'react';

function Cards({ item }) {
  // Function to generate stars based on the rating
  const renderStars = (rating) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<span key={i} className="text-yellow-500">★</span>);
      } else {
        stars.push(<span key={i} className="text-gray-300">★</span>);
      }
    }
    return stars;
  }

  return (
    <div className='mt-4 my-3 p-3'>
      <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white">
        <figure>
          <img
            src={item.image}
            alt="Books"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="flex items-center mb-2">
            {renderStars(item.rating)}
            <span className="ml-2 text-gray-600 dark:text-gray-400">{item.rating}/5</span>
          </div>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">Rs.{item.price}</div>
            <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
