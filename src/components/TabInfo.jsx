import { Button, Checkbox, Input } from "@material-tailwind/react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, addItem } from "../redux/slices/dataSlice";

function TabInfo({ data }) {
  const [checkedItems, setCheckedItems] = useState(new Set());
  const [initialChecked, setInitialChecked] = useState(new Set());
  const [newName, setNewName] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.tabs.activeTab);

  useEffect(() => {
    // Initialize checked state based on the initial data
    const initialCheckedState = new Set(data.map((item) => item.id));
    setCheckedItems(initialCheckedState);
    setInitialChecked(initialCheckedState);
  }, [data]);

  // add or remove uncheked checkbox
  const handleCheckboxChange = (id) => {
    setCheckedItems((prev) => {
      const updated = new Set(prev);
      if (updated.has(id)) {
        updated.delete(id);
      } else {
        updated.add(id);
      }
      return updated;
    });
  };

  const handleConfirm = () => {
    const uncheckedItems = [...initialChecked].filter(
      (id) => !checkedItems.has(id)
    );
    uncheckedItems.forEach((id) => dispatch(removeItem(id))); // remove unchecked widgets

    if (newName) {
      const newItem = {
        id: Date.now(), // Generate a unique ID (consider using UUID for production)
        name: newName,
        desc: newDesc,
        category: activeTab, // Ensure `activeTab` is correctly passed or managed
      };

      dispatch(addItem(newItem)); // add new widget
    }

    // Reset to initial state
    setInitialChecked(checkedItems);
    setNewName("");
    setNewDesc("");
  };

  const handleCancel = () => {
    setCheckedItems(initialChecked); // Reset checkboxes to initial state
    setNewName(""); // Clear input fields
    setNewDesc("");
  };

  return (
    <>
      <div className="mt-4">
        {data.map(({ id, name }) => (
          <div key={id} className="flex items-center border-2 mb-1">
            <div>
              <Checkbox
                checked={checkedItems.has(id)}
                onChange={() => handleCheckboxChange(id)}
                className=""
              />
            </div>
            <div className="text-sm sm:text-base">{name}</div>
          </div>
        ))}
      </div>

      <div className="px-2 mt-4 text-sm sm:text-base">Craete New Widget</div>
      <div className="my-2 px-2 flex flex-col gap-2 md:flex-row">
        <Input
          type="text"
          label="Enter name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <Input
          type="text"
          label="Enter description"
          value={newDesc}
          onChange={(e) => setNewDesc(e.target.value)}
        />
      </div>

      <div className="absolute bottom-0 right-0">
        <div className="px-4 flex gap-2">
          <Button
            size="sm"
            variant="outlined"
            className="border-sky-50 text-sky-50"
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button
            size="sm"
            variant="outlined"
            className="bg-sky-50 text-white"
            onClick={handleConfirm}
          >
            Confirm
          </Button>
        </div>
      </div>
    </>
  );
}

TabInfo.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      desc: PropTypes.string,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TabInfo;
