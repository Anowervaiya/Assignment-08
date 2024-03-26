import React from 'react'
import {
  getLocalStorage,
  setLocalStorage,
  setLocalStorageWishList,
} from '../../LocalStorage/setLocalStorage';
import SingleReadList from '../../components/SingleReadList';

import { Link } from 'react-router-dom';
function ReadBooks() {

  const localStorageValue = getLocalStorage()
  
  
  return (
    <>
      <div className='space-y-8 my-10'>

     
        {
          localStorageValue.length>0 ?
          localStorageValue.map(item => (
          <SingleReadList item={item}></SingleReadList>
          )):<Link to={'/'} className='btn '>Go to Home</Link>
      }
      </div>
    </>
  );
}

export default ReadBooks