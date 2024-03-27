import React, { useEffect, useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from '@material-tailwind/react';
import { Link, useParams } from 'react-router-dom';
import {
  setLocalStorage,
  setLocalStorageWishList,
} from '../../LocalStorage/setLocalStorage';


function Details() {

   

  const { bookId } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    const fnc = async () => {
      const res = await fetch('/bookData.json');
      const jsonData = await res.json();

      const singleData = jsonData.find(item => item.bookId == bookId);

      setDetails(singleData);
    };
    fnc();
  }, [bookId]);
  // console.log(details);
 const {
   bookName,
   author,
   category,
   image,
   publisher,
   rating,
   review,
   tags,
   

   totalPages,
   yearOfPublishing,
  } = details;

  // console.log(details);
  

  // const [first, second] = tags;
  

  const TABLE_ROWS = [
    {
      name: 'Number of Pages:',
      job: totalPages,
    },
    {
      name: 'Publisher:',
      job: publisher,
    },
    {
      name: 'Year of Publishing:',
      job: yearOfPublishing,
    },
    {
      name: 'Rating:',
      job: rating
    },
  
  ];
  

  

  return (
    <Card className=" my-10 flex flex-col container mx-auto  md:flex-row">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 md:w-2/5 shrink-0 md:rounded-r-none"
      >
        <img
          src={image}
          alt="card-image"
          className="h-[600px] w-full rounded-lg rounded-r-none "
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray" className="mb-4 uppercase">
          {bookName}
        </Typography>
        <hr />

        <Typography variant="h6" color="gray" className="mb-2">
          By : {author}
        </Typography>
        <hr />
        <Typography variant="h6" color="gray" className="mb-2">
          {category}
        </Typography>
        <hr />

        <Typography color="black" className="mb-8 font-normal">
          <span className="text-xl font-bold">Review:</span> {review}
        </Typography>
        {/* <Typography color="black" className="mb-8 font-normal space-x-2">
         <div>
          <span className="text-black font-bold">Tags : </span>{' '}
          <span>#{first}</span> #<span>{second}</span> <span></span>
        </div>
        </Typography> */}

        
        <hr />

        {/* table er khela  */}
        <table className="w-full min-w-max table-auto text-left">
          <tbody>
            {TABLE_ROWS.map(({ name, job }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast ? 'py-4' : 'py-4 ';

              return (
                <tr key={name}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {job}
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <hr />

        <div className="space-x-4 space-y-4">
          <Link
            href="#"
            onClick={() => setLocalStorage(details)}
            className="inline-block"
          >
            <Button
              variant="text"
              className="flex items-center gap-2 bg-[#23BE0A] text-white hover:text-[#23BE0A] border border-[#23BE0A] hover:bg-transparent"
            >
              Read
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </Link>
          <Link
            href="#"
            onClick={() => setLocalStorageWishList(details)}
            className="inline-block"
          >
            <Button
              variant="text"
              className="flex items-center gap-2 bg-[#50B1C9] text-white hover:text-[#50B1C9] border border-[#50B1C9] hover:bg-transparent"
            >
              WishLists
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </Link>
        </div>
      </CardBody>
    </Card>
  );
}

export default Details;
