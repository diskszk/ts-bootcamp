import React, { FC } from "react";
import { HotelInfo } from "../../types/hotels";
import { HotelListItem } from "../atmos";

type Props = {
  hotelInfoList: HotelInfo[];
};

const HotelList: FC<Props> = ({ hotelInfoList }) => {
  return (
    <ul>
      {hotelInfoList.map((hotelInfo, key) => {
        return <HotelListItem hotelInfo={hotelInfo} key={key} />;
      })}
    </ul>
  );
};

export default HotelList;
