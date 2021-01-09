export type HotelBasicInfo = {
  access?: string;
  address1?: string;
  address2?: string;
  dpPlanListUrl?: string;
  faxNo?: string;
  hotelImageUrl?: string;
  hotelInformationUrl?: string;
  hotelKanaName?: null | string;
  hotelMapImageUrl?: string;
  hotelMinCharge?: number;
  hotelName: string;
  hotelNo: number;
  hotelSpecial?: string;
  hotelThumbnailUrl?: string;
  latitude?: number;
  longitude?: number;
  nearestStation?: string;
  parkingInformation?: string;
  planListUrl?: string;
  postalCode?: string;
  reviewAverage?: null | string;
  reviewCount?: number;
  reviewUrl?: string;
  roomImageUrl?: null | string;
  roomThumbnailUrl?: null | string;
  telephoneNo?: string;
  userReview?: null | string;
};

export type HotelRatingInfo = {
  bathAverage?: null | number;
  equipmentAverage?: null | number;
  locationAverage?: null | number;
  mealAverage?: null | number;
  roomAverage?: null | number;
  serviceAverage?: null | number;
};
export type Hotel = [HotelBasicInfo, HotelRatingInfo];
export type Hotels = Hotel[];

export type HotelInfo = {
  hotelName: string | null;
  hotelNo: number | null;
  reviewUrl: string | undefined;
};
