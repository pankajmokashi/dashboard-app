import PropTypes from "prop-types";
import AddWidgetButton from "./AddWidgetButton";
import { IconButton } from "@material-tailwind/react";
import { removeItem } from "../redux/slices/dataSlice";
import { useDispatch } from "react-redux";

function ShowCategory({ title, category, data }) {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div>
      <div className="px-4 mx-auto mt-4">
        <div className="font-semibold text-sm sm:test-base">{title}</div>
        <div className="bg-[#e4ebee] p-2 grid grid-cols-1 gap-4 rounded-lg sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {data.map(({ id, name, desc }) => (
            <div
              key={id}
              className="bg-white p-1 w-full max-w-full rounded-lg "
            >
              <div className="h-40 w-full max-w-full flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-semibold pl-1">{name}</div>
                  <IconButton variant="text" onClick={() => handleRemove(id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </IconButton>
                </div>
                <div className="flex-grow text-xs flex items-center justify-center">
                  <ul>
                    {desc ? (
                      desc.split(",").map((item) => <li key={item}>{item}</li>)
                    ) : (
                      <p>No data available</p>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          ))}
          <div className="bg-[#f6f6f6] p-1 w-full max-w-full rounded-lg ">
            <div className="h-40 w-full max-w-full flex items-center justify-center">
              <AddWidgetButton category={category} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ShowCategory.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ShowCategory;
