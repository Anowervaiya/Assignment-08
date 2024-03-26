import React from 'react'
import { colors } from '../../Color/color';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import ReadBooks from './ReadBooks';
import WishList from './WishList';

function ListedBooks() {
   const [tabIndex, setTabIndex] = useState(0);
  return (
    <>
      <div className="text-2xl font-bold text-center p-4 bg-gray-200 container mx-auto my-8 rounded-lg">
        ListedBooks
      </div>

      <div className="text-center container mx-auto">
        <select
          name="cars"
          style={{ backgroundColor: colors.green, color: 'white' }}
          className="p-2 rounded-lg font-bold *:bg-gray-400 *:text-black outline-light-green-500   cursor-pointer"
        >
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>

      <div className='container mx-auto'>
        <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>
          <TabPanel>

            <ReadBooks></ReadBooks>
            

          </TabPanel>
          <TabPanel>

            <WishList></WishList>
            
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}

export default ListedBooks