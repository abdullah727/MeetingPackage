import { FC } from "react";
import Dropdown from "rsuite/Dropdown";

import { Hotel } from "../Types/global";

interface HotelsDropdownProps {
  hotels: Hotel[];
  selectedHotel: number;
  handleHotelChange: (id: number) => void;
}

const HotelsDropdown: FC<HotelsDropdownProps> = (props) => {
  const { hotels, selectedHotel, handleHotelChange } = props;

  const value =
    hotels.find((hotel) => hotel.id === selectedHotel)?.title || "Hotel A";

  return (
    <div>
      <h6 className="text-sm mt-3">Hotel</h6>
      <Dropdown title={value} value={value} data-testid="dropdown">
        {hotels.map((hotel) => (
          <Dropdown.Item
            key={hotel.id}
            value={hotel.id}
            onSelect={() => handleHotelChange(hotel.id)}
          >
            {hotel.title}
          </Dropdown.Item>
        ))}
      </Dropdown>
    </div>
  );
};

export default HotelsDropdown;
