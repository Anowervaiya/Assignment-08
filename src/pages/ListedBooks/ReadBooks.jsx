import React, { useEffect } from 'react';
import { getLocalStorage } from '../../LocalStorage/setLocalStorage';
import SingleReadList from '../../components/SingleReadList';

import { Link } from 'react-router-dom';
import { useState } from 'react';
function ReadBooks() {
  //
  // console.log(sortview);
  const [storageFinalValue, setStorageFinalValue] = useState(null);
  const localStorageValue = getLocalStorage();

  // programmin hero er vai dice

  // const [displayBooks, setDisplayBooks] = useState([]);
  const handleSortByRating = () => {
    console.log('kaj hbe jodi ase');
    // const sortedBooksByRating = [...displayBooks].sort(
    //   (firstBook, secondBook) => secondBook.rating - firstBook.rating
    // );
    // setDisplayBooks(sortedBooksByRating);
  };

  return (
    <>
      <div className="space-y-8 my-10">
        {localStorageValue.length > 0 ? (
          localStorageValue.map((item, index) => (
            <SingleReadList key={index} item={item}></SingleReadList>
          ))
        ) : (
          <Link to={'/'} className="btn ">
            Go to Home
          </Link>
        )}
        <h1>hii</h1>
      </div>
    </>
  );
}

export default ReadBooks;
