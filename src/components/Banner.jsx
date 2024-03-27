import React from 'react'
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <div className=" bg-base-200">
      <div className="flex px-4 py-16 flex-col justify-between lg:flex-row-reverse rounded-2xl">
        <img
          src="https://i.ibb.co/6WRVhCh/book-composition-with-open-book-23-2147690555.jpg"
          className="   mb-10 rounded-lg shadow-2xl"
        />
        <div className="flex  flex-col items-center justify-center">
          <div>
            <h1 className="text-5xl font-bold pb-8">
              Books to freshen up your bookshelf
            </h1>

            <Link to={'/ListedBooks'}>
              <button className="btn  bg-[#23BE0A] text-white hover:text-[#23BE0A] hover:border hover:border-[#23BE0A] hover:bg-transparent">
                View The List
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner





