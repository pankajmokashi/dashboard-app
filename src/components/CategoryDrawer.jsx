import { Drawer, IconButton, Typography } from "@material-tailwind/react";
import { CategoryTabs } from "./CategoryTabs";
import { useDispatch, useSelector } from "react-redux";
import { closeDrawer } from "../redux/slices/drawerSlice";

function CategoryDrawer() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.drawer.isOpen);

  const handleClose = () => {
    dispatch(closeDrawer());
  };

  return (
    <Drawer
      size={640}
      open={isOpen}
      onClose={handleClose}
      className="pb-4 flex flex-col"
      placement="right"
    >
      <div className="px-4 mb-4 flex items-center justify-between bg-sky-50">
        <Typography variant="h6" color="white">
          Add Widget
        </Typography>
        <IconButton variant="text" color="white" onClick={handleClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </IconButton>
      </div>
      <Typography
        color="gray"
        className="mb-8 px-4 font-normal text-sm sm:text-base"
      >
        Personalize your dashboard by adding the following widget
      </Typography>
      <CategoryTabs />
    </Drawer>
  );
}

export default CategoryDrawer;
