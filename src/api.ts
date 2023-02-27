import { IFormValues, IOpenStreetMapsValues, IOSMData } from './types';
import { OpenStreetMapEnum } from './helpers/locationUtils';
import { prepareBoundingBoxParameters, queryParametersFromBBox } from './helpers/boundingBoxTools';
import axios from 'axios';

export const getOpenStreetMapsData = async (values: IFormValues): Promise<IOSMData | undefined> => {
  const bboxValues = prepareBoundingBoxParameters(values);
  console.log('getOpenStreetMapsData', values, bboxValues);
  const parameters = queryParametersFromBBox(bboxValues);
  try {
    const rawData = await axios(`${OpenStreetMapEnum.URL}?bbox=${parameters}`);
    console.log('rawData', rawData);
    if (rawData.status === 200) {
      return rawData.data;
    }
  } catch (e) {
    console.error('following error has occurred in OSM data', e);
  }
};
