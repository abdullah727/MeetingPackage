import { FC } from "react";
import Toggle from "rsuite/Toggle";

import { Channel } from "../Types/global";

interface ChannelsListProps {
  channels: Channel[];
  handleChannelToggle: (id: number) => void;
}

const ChannelsList: FC<ChannelsListProps> = (props) => {
  const { channels, handleChannelToggle } = props;

  return (
    <div className="border border-gray-200 dark:border-gray-400 rounded-lg mt-5">
      <div className="flex justify-between bg-gray-50 dark:bg-gray-500 py-3 px-4 border-b border-gray-200 dark:border-gray-400 rounded-t-lg">
        <p>Channel</p>
        <p>Visibility</p>
      </div>
      {channels.map((channel) => (
        <div
          key={channel.id}
          className="flex justify-between py-3 px-4 border-b border-gray-200 dark:border-gray-400 last:border-b-0"
        >
          <p className="font-normal text-gray-700 dark:text-gray-300">
            {channel.title}
          </p>
          <Toggle
            checked={channel.visible}
            onChange={() => handleChannelToggle(channel.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default ChannelsList;
