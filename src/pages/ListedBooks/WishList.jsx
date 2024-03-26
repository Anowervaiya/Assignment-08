import React from 'react'
import { getLocalStorageWish } from '../../LocalStorage/setLocalStorage'
import SingleReadList from '../../components/SingleReadList'
import { Link } from 'react-router-dom';

function WishList() {

  const storageValue = getLocalStorageWish()

  
  return (
    <div className="space-y-8 my-10">
      {
        storageValue.length>0? 
        storageValue.map(item => (
        <SingleReadList item={item}></SingleReadList>
        )):<Link to={'/'} className='btn'>Go to Home</Link>
    }
    </div>
  );
}

export default WishList