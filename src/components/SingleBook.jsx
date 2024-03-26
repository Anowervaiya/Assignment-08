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
function SingleBook({ item }) {
  console.log(item);
  const { bookId, bookName,author, category, image, publisher, rating, review, tags, totalPages, yearOfPublishing } = item;
  
  const [first,second] = tags;
   return (
     <Card className=" overflow-hidden">
       <CardHeader
         floated={false}
         shadow={false}
         color="transparent"
         className="m-0 rounded-none"
       >
         <img
           src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
           alt="ui/ux review check"
         />
       </CardHeader>
       <CardBody>
         <Typography
           variant="h6"
           color="blue-gray"
           className="*:mr-6 *:text-[#23BE0A] *:bg-[#23BE0A29] *:p-3 *:rounded-full"
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
   );
}

export default SingleBook