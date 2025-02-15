import React from 'react';
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
} from '@material-tailwind/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, NavLink } from 'react-router-dom';

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <NavLink
        as="a"
        to={'/'}
        variant="small"
        className={({ isActive, isPending }) =>
          isPending
            ? 'pending'
            : isActive
            ? 'border border-green-300 rounded-lg text-green-300 font-bold'
            : ''
        }
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">Home</ListItem>
      </NavLink>

      <NavLink
        as="a"
        to={'/ListedBooks'}
        variant="small"
        className={({ isActive, isPending }) =>
          isPending
            ? 'pending'
            : isActive
            ? 'border border-green-300 rounded-lg text-green-300 font-bold'
            : ''
        }
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Listed Books
        </ListItem>
      </NavLink>
      <NavLink
        to={'/PagesToRead'}
        as="a"
        href="#"
        variant="small"
        className={({ isActive, isPending }) =>
          isPending
            ? 'pending'
            : isActive
            ? 'border border-green-300 rounded-lg text-green-300  font-bold'
            : ''
        }
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Read to pages
        </ListItem>
      </NavLink>
      <NavLink
        to={'/contactUs'}
        as="a"
        href="#"
        variant="small"
        className={({ isActive, isPending }) =>
          isPending
            ? 'pending'
            : isActive
            ? 'border border-green-300 rounded-lg text-green-300  font-bold'
            : ''
        }
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
         Contact Us
        </ListItem>
      </NavLink>
      <NavLink
        to={'/aboutUs'}
        as="a"
        href="#"
        variant="small"
        className={({ isActive, isPending }) =>
          isPending
            ? 'pending'
            : isActive
            ? 'border border-green-300 rounded-lg text-green-300  font-bold'
            : ''
        }
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
        About Us
        </ListItem>
      </NavLink>
    </List>
  );
}

export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="max-w-full py-2">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link to={'/'}
          as="a"
       
          variant="h1"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2 font-extrabold text-xl md:text-2xl"
        >
          BookShop
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <Button variant="text" size="sm" color="blue-gray">
            Log In
          </Button>
          <Button variant="gradient" size="sm">
            Sign In
          </Button>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
            Log In
          </Button>
          <Button variant="gradient" size="sm" fullWidth>
            Sign In
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}
