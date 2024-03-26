import React from 'react'
import {
  getLocalStorage,
  setLocalStorage,
  setLocalStorageWishList,
} from '../../LocalStorage/setLocalStorage';
import SingleReadList from '../../components/SingleReadList';
function ReadBooks() {

  const localStorageValue = getLocalStorage()
  
  
  return (
    <>
      <div className='space-y-8 my-10'>
        {localStorageValue.map(item => (
          <SingleReadList item={item}></SingleReadList>
        ))}
      </div>
    </>
  );
}

export default ReadBooks