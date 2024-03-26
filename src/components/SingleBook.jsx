import React from 'react'
import { CiStar } from 'react-icons/ci';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';
function SingleBook({ item }) {
  
  const { bookId, bookName,author, category, image, publisher, rating, review, tags, totalPages, yearOfPublishing } = item;
  
  const [first,second] = tags;
   return (
     <Link to={`/details/${bookId}`}>
       <Card className=" overflow-hidden p-4 border">
         <CardHeader
           floated={false}
           shadow={false}
           color="transparent"
           className="m-0 rounded-lg py-4 h-1/2 bg-gray-200"
         >
           <img
             src={image}
             className="mx-auto h-full  rounded-lg"
             alt="ui/ux review check"
           />
         </CardHeader>
         <CardBody>
           <Typography
             variant="h6"
             color="blue-gray"
             className=" *:text-[#23BE0A] *:bg-[#23BE0A29] *:px-3 *:py-2 *:rounded-full flex flex-wrap gap-4"
           >
             <span>{first}</span>
             <span>{second}</span>
           </Typography>
           <Typography
             className="mt-8  flex flex-col 
            "
           >
             <h1 className="text-3xl text-black font-bold ">{bookName}</h1>
             <p className="font-bold text-xl mt-4 ">By : {author}</p>

             <div className="border-b-4 mt-4 border-dashed"></div>
           </Typography>
         </CardBody>
         <div className="flex mx-6 items-center justify-between flex-grow pb-4">
           <div className="flex font-bold  items-center">{category}</div>
           <Typography className="font-bold text-xl justify-center flex  items-center gap-4">
             {rating} <CiStar className="text-3xl" />
           </Typography>
         </div>
       </Card>
     </Link>
   );
}

export default SingleBook