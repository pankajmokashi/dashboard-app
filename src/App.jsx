import { NavbarWithSearch } from "./components/NavbarWithSearch";
import ShowCategory from "./components/ShowCategory";
import { Button, Typography } from "@material-tailwind/react";
import {
  ArrowPathIcon,
  ChevronDownIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { MenuDefault } from "./components/MenuDefault";
import React from "react";
import CategoryDrawer from "./components/CategoryDrawer";
import AddWidgetButton from "./components/AddWidgetButton";
import { useSelector } from "react-redux";

function App() {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const data = useSelector((state) => state.data);

  const filterByCategory = (category) => {
    return data.filter((item) => item.category === category);
  };

  return (
    <div className="flex justify-center">
      <div className="container-max">
        <NavbarWithSearch />
        <main className="mx-auto mb-4 px-4 py-1 lg:px-8 lg:py-2">
          <div className=" mx-auto py-2 flex flex-wrap items-center justify-between">
            <div className="mr-4 font-semibold text-sm sm:text-lg">
              CNAPP Dashboard
            </div>
            <div className="flex gap-2">
              <AddWidgetButton openDrawer={openDrawer} />

              <Button
                variant="outlined"
                className="hidden px-3 py-2 bg-white border-[#bcc0c5] gap-1.5 items-center rounded md:flex"
              >
                <ArrowPathIcon className="w-3 lg:w-4 text-[#616366]" />
              </Button>

              <MenuDefault />

              <Button
                variant="outlined"
                className="hidden px-3 py-2 bg-white border-[#bcc0c5] gap-1.5 items-center rounded md:flex"
              >
                <ClockIcon className="w-3 text-[#616366] lg:w-4" />
                <div className="h-full border-x border-[#a5a7a8]"></div>
                <Typography
                  variant="lead"
                  className="text-[9px] text-[#616366] lg:text-xs"
                >
                  Last 2 days
                </Typography>
                <ChevronDownIcon className="w-3 text-[#616366] lg:w-4" />
              </Button>
            </div>
          </div>
          <ShowCategory
            title="CSPM Executive Dashboard"
            category="CSPM"
            data={filterByCategory("CSPM")}
          />
          <ShowCategory
            title="CWPP Dashboard"
            category="CWPP"
            data={filterByCategory("CWPP")}
          />
          <ShowCategory
            title="Registry Scan"
            category="Image"
            data={filterByCategory("Image")}
          />
          <ShowCategory
            title="Ticket"
            category="Ticket"
            data={filterByCategory("Ticket")}
          />
        </main>
        <CategoryDrawer open={open} closeDrawer={closeDrawer} />
      </div>
    </div>
  );
}

export default App;
