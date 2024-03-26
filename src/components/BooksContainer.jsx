import React, { useEffect, useState } from 'react';
import SingleBook from './SingleBook';

function BooksContainer() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/bookData.json')
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <div className='grid  container mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {
        books.map(item => <SingleBook item={item}></SingleBook>
        )
    }
    </div>
  );
}

export default BooksContainer;
