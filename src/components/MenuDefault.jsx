import { ClockIcon, EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Typography,
} from "@material-tailwind/react";

export function MenuDefault() {
  return (
    <Menu>
      <MenuHandler>
        <Button
          variant="outlined"
          className="px-3 py-2 bg-white border-[#bcc0c5] flex gap-1.5 items-center rounded"
        >
          <EllipsisVerticalIcon className="w-3 text-[#616366] lg:w-4" />
        </Button>
      </MenuHandler>
      <MenuList>
        <MenuItem>
          <Button
            variant="outlined"
            className="w-full px-3 py-2 bg-white border-[#bcc0c5] flex gap-1.5 items-center justify-center md:backdrop:justify-start rounded md:hidden"
          >
            <ClockIcon className="w-3 text-[#616366]" />
            <Typography
              variant="lead"
              className="text-[10px] sm:text-xs text-[#616366]"
            >
              Last 2 days
            </Typography>
          </Button>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
