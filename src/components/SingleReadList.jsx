import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from '@material-tailwind/react';
import { MdInsertPageBreak } from 'react-icons/md';
import { LuUsers2 } from 'react-icons/lu';
import { CiLocationOn } from 'react-icons/ci';
import { Link } from 'react-router-dom';

function SingleReadList({ item }) {
  console.log(item);
  const {
    bookId,
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
  } = item;

  const [first,second]=tags
  return (
    <Card className="w-full cursor-pointer rounded-2xl  hover:shadow-[-5px_10px_30px_rgba(0,0,0,0.1),5px_-10px_30px_rgba(0,0,0,0.1)]  transition ease-linear duration-200 delay-75   hover:-translate-y-1 shadow-[0_2px_5px_gray] flex flex-col  lg:flex-row">
      <CardHeader
        shadow={false}
        floated={false}
        className="p-8 bg-gray-20 md:mx-auto lg:mx-0  w-[300px] h-[300px]  shrink-0 rounded-lg mb-4"
      >
        <img
          src={image}
          alt="card-image"
          className=" max-w-full h-full rounded-lg mx-auto "
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="black" className="mb-4 uppercase">
          {bookName}
        </Typography>
        <Typography variant="h6" color="black" className="mb-4 ">
          By: <span className="text-gray-600"> {author}</span>
        </Typography>
        <div className="mb-2 flex gap-12">
          <div>
            <span className="text-black font-bold">Tags : </span>{' '}
            <span>#{first}</span> #<span>{second}</span> <span></span>
          </div>{' '}
          <div className="flex items-center">
            <CiLocationOn /> Year of Publishing : {yearOfPublishing}
          </div>
        </div>
        <hr className="my-4" />
        <Typography color="gray" className="mb-8 font-normal">
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-3">
              <LuUsers2 /> Publisher : {publisher}
            </div>
            <div className="flex items-center gap-3">
              <MdInsertPageBreak /> Page : {totalPages}
            </div>
          </div>
        </Typography>

        <div className="*:m-4">
          <button className="btn bg-[#328EFF26] text-[#328EFF] rounded-full ">
            Success
          </button>
          <button className="btn rounded-ful bg-[#FFAC3326] rounded-full  text-[#FFAC33]">
            Warning
          </button>
          <Link to={`/details/${bookId}`} className="inline-block">
            <Button
              variant="text"
              className="flex items-center bg-[#23BE0A] text-white hover:bg-transparent hover:border hover:border-[#23BE0A] hover:text-black gap-2"
            >
              View Details
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

export default SingleReadList