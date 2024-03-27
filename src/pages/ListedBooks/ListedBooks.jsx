import { colors } from '../../Color/color';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';

import React, { useEffect } from 'react';
import { getLocalStorage, getLocalStorageWish } from '../../LocalStorage/setLocalStorage';
import SingleReadList from '../../components/SingleReadList';

import { Link } from 'react-router-dom';

function ListedBooks() {
  const [tabIndex, setTabIndex] = useState(0);
  const [displayBooks, setDisplayBooks] = useState([]);
  const [displayWish, setDisplayWish] = useState([]);


  const localStorageValue = getLocalStorage();

  const wishLocalStorageValue = getLocalStorageWish();
  // console.log(localStorageValue);

  useEffect(() => {
    setDisplayBooks(localStorageValue);
    setDisplayWish(wishLocalStorageValue);
  }, []);

  const handleSortByRating = (event) => {
    const selectedSortBy = event.target.value;



     let sortedData = [];
     if (selectedSortBy === 'Rating') {
       sortedData = [...displayBooks].sort((a, b) => b.rating - a.rating);
     } else if (selectedSortBy === 'Numberofpages') {
       sortedData = [...displayBooks].sort(
         (a, b) => b.totalPages - a.totalPages
       );
     } else if (selectedSortBy === 'Published') {
       sortedData = [...displayBooks].sort(
         (a, b) => b.yearOfPublishing - a.yearOfPublishing
       );
     } else {
       sortedData = [...displayBooks];
     }

     setDisplayBooks(sortedData);









     if (selectedSortBy === 'Rating') {
       sortedData = [...displayWish].sort((a, b) => b.rating - a.rating);
     } else if (selectedSortBy === 'Numberofpages') {
       sortedData = [...displayWish].sort(
         (a, b) => b.totalPages - a.totalPages
       );
     }
     else if (selectedSortBy === 'Published') {
       sortedData = [...displayWish].sort(
         (a, b) => b.yearOfPublishing - a.yearOfPublishing
       );
     }
     
     else {
       sortedData = [...displayWish];
     }

     setDisplayWish(sortedData);
  };

  return (
    <>
      <div className="text-2xl font-bold text-center p-4 bg-gray-200 container mx-auto my-8 rounded-lg">
        Listed Books
      </div>

      <div className="text-center container mx-auto">
        <select
          onChange={handleSortByRating}
          name="cars"
          style={{ backgroundColor: colors.green, color: 'white' }}
          className="p-2 rounded-lg font-bold *:bg-gray-400 *:text-black outline-light-green-500   cursor-pointer"
        >
          <option value="Sort by" className="text-center">
            Sort By
          </option>
          <option value="Rating">Rating</option>
          <option value="Numberofpages">Number of pages</option>
          <option value="Published">Published Year</option>
        </select>
      </div>

      <div className="container mx-auto">
        <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>
          <TabPanel>
            <div className="space-y-8 my-10">
              {displayBooks.length > 0 ? (
                displayBooks.map((item, index) => (
                  <SingleReadList key={index} item={item}></SingleReadList>
                ))
              ) : (
                <Link to={'/'} className="btn ">
                  Go to Home
                </Link>
              )}
            </div>
          </TabPanel>
          <TabPanel>
            {' '}
            <div className="space-y-8 my-10">
              {displayBooks.length > 0 ? (
                displayBooks.map((item, index) => (
                  <SingleReadList key={index} item={item}></SingleReadList>
                ))
              ) : (
                <Link to={'/'} className="btn ">
                  Go to Home
                </Link>
              )}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}

export default ListedBooks;
