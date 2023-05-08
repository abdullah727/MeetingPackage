import { FC, useCallback, useEffect, useState } from "react";

import Header from "./Components/Header";
import HotelsDropdown from "./Components/HotelsDropdown";
import ChannelsList from "./Components/ChannelsList";
import { HotelsData } from "./data";
import { Hotel } from "./Types/global";
import DarkMode from "./Components/DarkMode";

import "./index.css";

const MainApp: FC = () => {
  const [selectedHotel, setSelectedHotel] = useState(1); // Selecting Hotel A by default always
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [darkMode, setDarkMode] = useState(false);

  const hotelChannels =
    hotels.find((hotel) => hotel.id === selectedHotel)?.channels || [];

  useEffect(() => {
    // Assuming some data fetching api call being made here
    setHotels(HotelsData);
  }, []);

  // Using useCallback as this function is passing down as prop so to avoid re render on child component
  const handleHotelChange = useCallback((id: number) => {
    setSelectedHotel(id);
  }, []);

  const handleChannelToggle = useCallback(
    (id: number) => {
      setHotels((prevHotelState) =>
        prevHotelState.map((hotel) =>
          hotel.id === selectedHotel // Updating the selected hotel state
            ? {
                ...hotel,
                channels: hotel.channels.map((channel) =>
                  channel.id === id
                    ? { ...channel, visible: !channel.visible } // Only toggling the value of the selected channel
                    : channel
                ),
              }
            : hotel
        )
      );
    },
    [selectedHotel]
  );

  const handleDarkModeToggle = useCallback((value: boolean) => {
    setDarkMode(value);
  }, []);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <Header />
      <div className="m-6">
        <h3>Channel manager</h3>
        <div className="flex justify-between items-end">
          <HotelsDropdown
            hotels={hotels}
            selectedHotel={selectedHotel}
            handleHotelChange={handleHotelChange}
          />
          <DarkMode
            darkMode={darkMode}
            handleDarkModeToggle={handleDarkModeToggle}
          />
        </div>
        <ChannelsList
          channels={hotelChannels}
          handleChannelToggle={handleChannelToggle}
        />
      </div>
    </div>
  );
};

export default MainApp;
