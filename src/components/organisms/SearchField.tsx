import React, { FC, useCallback, useState } from "react";
import { TextInput, SearchButton } from "../atmos";
import { HotelList } from "./";
import styles from "../../styles/utility/flex.module.scss";
import { useStringChangeEvent } from "../../lib/costumedHooks";
import { searchHotels } from "../../lib/hotels";
import { HotelInfo } from "../../types/hotels";

const SearchField: FC = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [hotelInfoList, setHotelInfoList] = useState<HotelInfo[]>([]);

  const handleKeyword = useStringChangeEvent(setKeyword);

  const handleClickSearchButton = useCallback(
    async (_ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const hotelInfoList: HotelInfo[] = await searchHotels(keyword);
      setHotelInfoList(hotelInfoList);
    },
    [keyword, setHotelInfoList]
  );

  return (
    <div className={styles.flex__row_center}>
      <TextInput onChange={handleKeyword} value={keyword} type={"text"} />
      <SearchButton label="search" onClick={handleClickSearchButton} />
      <HotelList hotelInfoList={hotelInfoList} />
    </div>
  );
};

export default SearchField;
