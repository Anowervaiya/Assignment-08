import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

import {
  getLocalStorage,
} from '../../LocalStorage/setLocalStorage';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];





const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;



  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

function PagesToRead() {

  const LocalStorageValue = getLocalStorage()


  const filteredBookName = LocalStorageValue.map(item => item.bookName);

  const filterBookPages= LocalStorageValue.map(item=>item.totalPages)

  

  const [bookPages1, bookPages2, bookPages3, bookPages4, bookPages5, bookPages6, bookPages7, bookPages8, bookPages9] = filterBookPages;

  const [book1, book2, book3, book4, book5, book6, book7, book8, book9] = filteredBookName;



  const data = [
    {
      name: book1,
      uv: bookPages1,
      pv: 2400,
      amt: 2400,
    },
    book2 && {
      name: book2,
      uv: bookPages2,
      pv: 1398,
      amt: 2210,
    },
    book3 && {
      name: book3,
      uv: bookPages3,
      pv: 9800,
      amt: 2290,
    },
    book4 && {
      name: book4,
      uv: bookPages4,
      pv: 2400,
      amt: 2400,
    },
    book5 && {
      name: book5,
      uv: bookPages5,
      pv: 1398,
      amt: 2210,
    },
    book6 && {
      name: book6,
      uv: bookPages6,
      pv: 9800,
      amt: 2290,
    },
    book7 && {
      name: book7,
      uv: bookPages7,
      pv: 2400,
      amt: 2400,
    },
    book8 && {
      name: book8,
      uv: bookPages8,
      pv: 1398,
      amt: 2210,
    },
    book9 && {
      name: book9,
      uv: bookPages9,
      pv: 9800,
      amt: 2290,
    },
  ];
  return (
    <div className='container mx-auto'>
      <BarChart
        width={2500}
        height={500}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar
          dataKey="uv"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: 'top' }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
}

export default PagesToRead










