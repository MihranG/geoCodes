import { GeoEnums } from './locationUtils';

export enum GeoInputsEnum {
  LONGITUDE = 'Longitude',
  LATITUDE = 'Latitude',
}

type TValidationInput = GeoInputsEnum.LONGITUDE | GeoInputsEnum.LATITUDE;

export const validationRules = (inputType: TValidationInput) => {
  const isLatitude = inputType === GeoInputsEnum.LATITUDE;
  const maxValue = isLatitude ? GeoEnums.LatitudeMax : GeoEnums.LongitudeMax;
  const minValue = isLatitude ? GeoEnums.LatitudeMin : GeoEnums.LongitudeMin;
  const label = isLatitude ? GeoInputsEnum.LATITUDE : GeoInputsEnum.LONGITUDE;
  return [
    { required: true, message: `Please provide a ${label}` },
    () => ({
      validator(_: any, value: number) {
        if (value > maxValue || value < minValue) {
          return Promise.reject(new Error(`The value must be between ${minValue} and ${maxValue}`));
        }
        return Promise.resolve();
      },
    }),
  ];
};
