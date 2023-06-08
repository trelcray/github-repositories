import { FC, useContext } from "react";

import { DropdownMenuItemIndicator } from "@radix-ui/react-dropdown-menu";
import { ArrowDown } from "phosphor-react";

import { SearchContext } from "../contexts";
import { Button } from "./ui/Button";
import {
  DropdownMenu,
  DropdownMenuArrow,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/DropdownMenu";

export const Filters: FC = () => {
  const { searchData, setSearchData, isSort, setIsSort, setIsType, isType } =
    useContext(SearchContext);

  const types = ["ALL", "PUBLIC", "PRIVATE"];
  const orders = ["NAME", "UPDATE"];

  return (
    <div className="mt-1 flex flex-row gap-2 border-b-[1px] pb-8">
      <div className="w-full">
        <input
          type="search"
          id="Search"
          value={searchData}
          className="w-full rounded-md border border-gray-400 bg-inherit px-2 
          py-1 focus:border-blue-500 focus:outline focus:ring-1 
          focus:ring-blue-500"
          placeholder="Find a repository..."
          onChange={(e) => setSearchData(e.target.value)}
        />
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            Type <ArrowDown className="h-4 w-4 text-white" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuPortal>
          <DropdownMenuContent className="w-56" sideOffset={5}>
            <DropdownMenuLabel>
              <h2>Select Type</h2>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {types.map((item, i) => (
                <DropdownMenuCheckboxItem
                  checked={isType === item}
                  onClick={() => setIsType(item)}
                  key={i}
                >
                  <DropdownMenuItemIndicator />
                  <span>{item}</span>
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuGroup>
            <DropdownMenuArrow className="fill-gray-200" />
          </DropdownMenuContent>
        </DropdownMenuPortal>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            Sort <ArrowDown className="h-4 w-4 text-white" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuPortal>
          <DropdownMenuContent className="w-56" sideOffset={5}>
            <DropdownMenuLabel>
              <h2>Select Order</h2>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {orders.map((item, i) => (
                <DropdownMenuCheckboxItem
                  checked={isSort === item}
                  key={i}
                  onClick={() => setIsSort(item)}
                >
                  <DropdownMenuItemIndicator />
                  <span>{item}</span>
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuGroup>
            <DropdownMenuArrow className="fill-gray-200" />
          </DropdownMenuContent>
        </DropdownMenuPortal>
      </DropdownMenu>
    </div>
  );
};
