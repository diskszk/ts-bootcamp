import React, { FC } from "react";
import { HotelInfo } from "../../types/hotels";
import styled from "styled-components";

const ImageArea = styled.div`
  width: 400px;
  height: 400px;
`;

type Props = {
  hotelInfo: HotelInfo;
};

const HotelListItem: FC<Props> = ({ hotelInfo }) => {
  return (
    <li>
      <p>No. :{hotelInfo.hotelNo}</p>
      <p>名前: {hotelInfo.hotelName}</p>
    </li>
  );
};

export default HotelListItem;
