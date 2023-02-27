import { IFormValues, IOpenStreetMapsValues } from '../types';

export const prepareBoundingBoxParameters = (values: IFormValues): IOpenStreetMapsValues => {
  const { Longitude, Latitude, boxSide } = values;

  const side = boxSide / 10000;

  return {
    min_lon: Longitude,
    min_lat: Latitude,
    max_lon: Longitude + side,
    max_lat: Latitude + side,
  };
};

export const queryParametersFromBBox = ({ min_lon, min_lat, max_lon, max_lat }: IOpenStreetMapsValues): string =>
  `${min_lon},${min_lat},${max_lon},${max_lat}`;
