import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/slices/tabSlice";
import TabInfo from "./TabInfo";

export function CategoryTabs() {
  const dispatch = useDispatch();
  const categories = ["CSPM", "CWPP", "Image", "Ticket"];
  const activeTab = useSelector((state) => state.tabs.activeTab);
  const data = useSelector((state) => state.data);

  // filter data by active tab
  const filteredData = data.filter((item) => item.category === activeTab);

  return (
    <div className="flex flex-col flex-grow px-1">
      <div className="rounded-none bg-transparent">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => dispatch(setActiveTab(category))}
            className={
              activeTab === category
                ? "px-3.5 py-2 bg-transparent shadow-none rounded-none text-sm text-gray-900 border-b-2 border-gray-900 sm:px-8"
                : "px-3.5 py-2 bg-transparent shadow-none rounded-none text-sm text-gray-600 border-b border-blue-gray-100 sm:px-8"
            }
          >
            {category}
          </button>
        ))}
      </div>
      <div className="relative tab-content flex-grow">
        <TabInfo data={filteredData} />
      </div>
    </div>
  );
}
