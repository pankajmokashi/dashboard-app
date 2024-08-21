import React from "react";
import {
  Navbar,
  Typography,
  Input,
  Collapse,
  Avatar,
  Button,
} from "@material-tailwind/react";

import { BellAlertIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { onSearch } from "../redux/slices/dataSlice";

export function NavbarWithSearch() {
  const [openNav, setOpenNav] = React.useState(false);
  const [searchVal, setSearchVal] = React.useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(onSearch(searchVal));
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 720 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto px-4 py-1 lg:px-8 lg:py-2 rounded-none sticky top-0 max-w-[1536px] z-50">
      <div className=" mx-auto flex flex-wrap items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium text-sm sm:text-base"
        >
          Dashboard V2
        </Typography>
        <div className="hidden items-center gap-x-2 flex-grow justify-center md:flex">
          <div className="relative flex w-full gap-2 md:w-max">
            <Input
              type="search"
              placeholder="Search anything..."
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              containerProps={{
                className: "min-w-[288px]",
              }}
              className=" !border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 focus:!border-blue-gray-300"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <div
              className="!absolute left-3 top-[13px] cursor-pointer"
              onClick={handleSearch}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.97811 7.95252C10.2126 7.38634 10.3333 6.7795 10.3333 6.16667C10.3333 4.92899 9.84167 3.742 8.9665 2.86683C8.09133 1.99167 6.90434 1.5 5.66667 1.5C4.42899 1.5 3.242 1.99167 2.36683 2.86683C1.49167 3.742 1 4.92899 1 6.16667C1 6.7795 1.12071 7.38634 1.35523 7.95252C1.58975 8.51871 1.93349 9.03316 2.36683 9.4665C2.80018 9.89984 3.31462 10.2436 3.88081 10.4781C4.447 10.7126 5.05383 10.8333 5.66667 10.8333C6.2795 10.8333 6.88634 10.7126 7.45252 10.4781C8.01871 10.2436 8.53316 9.89984 8.9665 9.4665C9.39984 9.03316 9.74358 8.51871 9.97811 7.95252Z" />
                <path
                  d="M13 13.5L9 9.5M10.3333 6.16667C10.3333 6.7795 10.2126 7.38634 9.97811 7.95252C9.74358 8.51871 9.39984 9.03316 8.9665 9.4665C8.53316 9.89984 8.01871 10.2436 7.45252 10.4781C6.88634 10.7126 6.2795 10.8333 5.66667 10.8333C5.05383 10.8333 4.447 10.7126 3.88081 10.4781C3.31462 10.2436 2.80018 9.89984 2.36683 9.4665C1.93349 9.03316 1.58975 8.51871 1.35523 7.95252C1.12071 7.38634 1 6.7795 1 6.16667C1 4.92899 1.49167 3.742 2.36683 2.86683C3.242 1.99167 4.42899 1.5 5.66667 1.5C6.90434 1.5 8.09133 1.99167 8.9665 2.86683C9.84167 3.742 10.3333 4.92899 10.3333 6.16667Z"
                  stroke="#CFD8DC"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <Button
              variant="outlined"
              className="border-blue-gray-300 text-blue-gray-600"
              onClick={handleSearch}
            >
              Search
            </Button>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <BellAlertIcon className="h-6 w-6 hover:text-blue-gray-300 cursor-pointer" />
          <Avatar
            src="https://docs.material-tailwind.com/img/face-2.jpg"
            alt="avatar"
            className="w-6 h-6"
          />
          <Bars3Icon
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:text-blue-gray-300 cursor-pointer md:hidden "
            strokeWidth={1.5}
            onClick={() => setOpenNav(!openNav)}
          />
        </div>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          <div className="flex flex-col gap-x-2 sm:flex-row sm:items-center">
            <div className="relative flex w-full gap-2">
              <Input
                type="search"
                placeholder="Search anything..."
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                containerProps={{
                  className: "min-w-[180px]",
                }}
                className=" !border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 focus:!border-blue-gray-300"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <div
                className="!absolute left-3 top-[13px] cursor-pointer"
                onClick={handleSearch}
              >
                <svg
                  width="13"
                  height="14"
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.97811 7.95252C10.2126 7.38634 10.3333 6.7795 10.3333 6.16667C10.3333 4.92899 9.84167 3.742 8.9665 2.86683C8.09133 1.99167 6.90434 1.5 5.66667 1.5C4.42899 1.5 3.242 1.99167 2.36683 2.86683C1.49167 3.742 1 4.92899 1 6.16667C1 6.7795 1.12071 7.38634 1.35523 7.95252C1.58975 8.51871 1.93349 9.03316 2.36683 9.4665C2.80018 9.89984 3.31462 10.2436 3.88081 10.4781C4.447 10.7126 5.05383 10.8333 5.66667 10.8333C6.2795 10.8333 6.88634 10.7126 7.45252 10.4781C8.01871 10.2436 8.53316 9.89984 8.9665 9.4665C9.39984 9.03316 9.74358 8.51871 9.97811 7.95252Z" />
                  <path
                    d="M13 13.5L9 9.5M10.3333 6.16667C10.3333 6.7795 10.2126 7.38634 9.97811 7.95252C9.74358 8.51871 9.39984 9.03316 8.9665 9.4665C8.53316 9.89984 8.01871 10.2436 7.45252 10.4781C6.88634 10.7126 6.2795 10.8333 5.66667 10.8333C5.05383 10.8333 4.447 10.7126 3.88081 10.4781C3.31462 10.2436 2.80018 9.89984 2.36683 9.4665C1.93349 9.03316 1.58975 8.51871 1.35523 7.95252C1.12071 7.38634 1 6.7795 1 6.16667C1 4.92899 1.49167 3.742 2.36683 2.86683C3.242 1.99167 4.42899 1.5 5.66667 1.5C6.90434 1.5 8.09133 1.99167 8.9665 2.86683C9.84167 3.742 10.3333 4.92899 10.3333 6.16667Z"
                    stroke="#CFD8DC"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
}
