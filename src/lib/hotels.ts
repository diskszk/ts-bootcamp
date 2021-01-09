import axios from "axios";
import { APP_ID, BASE_URL } from "../rakuten/config";
import { HotelBasicInfo, HotelInfo } from "../types/hotels";

export async function searchHotels(keyword: string): Promise<HotelInfo[]> {
  try {
    const res = await axios.get(
      BASE_URL + `&applicationId=${APP_ID}&keyword=${keyword}`
    );
    const hotels = res.data.hotels;
    const hotelInfoList: HotelInfo[] = hotels.map((hotel: any) => {
      const hotelBasicInfo: HotelBasicInfo = hotel.hotel[0].hotelBasicInfo;

      // hotelName, hotelNoのみを抽出
      const hotelInfo: HotelInfo = {
        hotelName: hotelBasicInfo.hotelName,
        hotelNo: hotelBasicInfo.hotelNo,
        reviewUrl: hotelBasicInfo.reviewUrl,
      };

      return hotelInfo;
    });

    console.dir(hotelInfoList);
    return hotelInfoList;
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
}
