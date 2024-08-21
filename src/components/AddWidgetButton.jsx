import { PlusIcon } from "@heroicons/react/24/outline";
import { Button, Typography } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { openDrawer } from "../redux/slices/drawerSlice";
import PropTypes from "prop-types";
import { setActiveTab } from "../redux/slices/tabSlice";

function AddWidgetButton({ category }) {
  const dispatch = useDispatch();

  // onclick open drawer with clicked addwidget button category
  const handleClick = () => {
    if (category) {
      dispatch(setActiveTab(category)); // update active tab
    }
    dispatch(openDrawer());
  };

  return (
    <Button
      variant="outlined"
      className="flex px-3 py-2 bg-white border-[#bcc0c5] gap-1.5 items-center rounded"
      onClick={handleClick}
    >
      <Typography
        variant="lead"
        className="text-[9px] text-[#616366] xl:text-xs"
      >
        Add Widget
      </Typography>
      <PlusIcon className="w-3 text-[#616366] sm:w-4" />
    </Button>
  );
}

AddWidgetButton.propTypes = {
  category: PropTypes.string,
};

export default AddWidgetButton;
