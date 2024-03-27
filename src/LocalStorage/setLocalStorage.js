import { toast } from 'react-toastify';

const getLocalStorage = () => {
  const getStorageValue = localStorage.getItem('book');
  if (getStorageValue) {
    return JSON.parse(getStorageValue);
  }

  return [];
};

const getLocalStorageWish = () => {
  const getStorageValue = localStorage.getItem('wishlist');
  if (getStorageValue) {
    return JSON.parse(getStorageValue);
  }

  return [];
};

const setLocalStorage = details => {
  const localStorageValue = getLocalStorage();

  //  const LocalStorageWish = getLocalStorageWish();

  // console.log(LocalStorageWish);

  const findedData = localStorageValue.find(
    item => item.bookId == details.bookId
  );

  //  const wishlistfindedData = LocalStorageWish.find(
  //    item => item.bookId == details.bookId
  //  );

  //  const filterWishValue = LocalStorageWish.filter(
  //    item => item.bookId != wishlistfindedData.bookId
  //  );

  if (!findedData) {
    localStorageValue.push(details);
    localStorage.setItem('book', JSON.stringify(localStorageValue));

    toast.success('Book has added successfully in readlist');
  } else {
    toast.warning('this book  has been read');
  }
};

const setLocalStorageWishList = details => {
  const localStorageValue = getLocalStorage();

  const LocalStorageWish = getLocalStorageWish();

  const findedData = localStorageValue.find(
    item => item.bookId == details.bookId
  );

  const wishlistFindedData = LocalStorageWish.find(
    item => item.bookId == details.bookId
  );

  if (findedData) {
    toast.warning('you already read this book so you can not add in wishlist');
    return;
  } else if (!findedData && !wishlistFindedData) {
    LocalStorageWish.push(details);
    localStorage.setItem('wishlist', JSON.stringify(LocalStorageWish));

    toast.success('Book has added successfully in wishlist');
  } else {
    toast.warning("you can't add a book for two time in wishlist");
  }
};

export {
  setLocalStorage,
  getLocalStorage,
  getLocalStorageWish,
  setLocalStorageWishList,
};
