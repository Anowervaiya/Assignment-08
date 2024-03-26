import React from 'react'
import { getLocalStorageWish } from '../../LocalStorage/setLocalStorage'
import SingleReadList from '../../components/SingleReadList'

function WishList() {

  const storageValue = getLocalStorageWish()

  
  return (
    <div className="space-y-8 my-10">
      {storageValue.map(item => (
        <SingleReadList item={item}></SingleReadList>
      ))}
    </div>
  );
}

export default WishList