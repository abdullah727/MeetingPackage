import { Channel, Hotel } from "./Types/global";

// Static data

const channelsList: Channel[] = [
  {
    id: 1,
    title: "Channel 1",
    visible: false,
  },
  {
    id: 2,
    title: "Channel 2",
    visible: false,
  },
  {
    id: 3,
    title: "Channel 3",
    visible: false,
  },
  {
    id: 4,
    title: "Channel 4",
    visible: false,
  },
  {
    id: 5,
    title: "Channel 5",
    visible: false,
  },
  {
    id: 6,
    title: "Channel 6",
    visible: false,
  },
  {
    id: 7,
    title: "Channel 7",
    visible: false,
  },
  {
    id: 8,
    title: "Channel 8",
    visible: false,
  },
  {
    id: 9,
    title: "Channel 9",
    visible: false,
  },
  {
    id: 10,
    title: "Channel 10",
    visible: false,
  },
];

export const HotelsData: Hotel[] = [
  {
    id: 1,
    title: "Hotel A",
    channels: channelsList,
  },
  {
    id: 2,
    title: "Hotel B",
    channels: channelsList,
  },
  {
    id: 3,
    title: "Hotel C",
    channels: channelsList,
  },
  {
    id: 4,
    title: "Hotel D",
    channels: channelsList,
  },
  {
    id: 5,
    title: "Hotel E",
    channels: channelsList,
  },
];
