export interface IFormValues {
  Longitude: number;
  Latitude: number;
  boxSide: number;
}

export interface IOpenStreetMapsValues {
  min_lon: number; // left
  min_lat: number; // bottom
  max_lon: number; // right
  max_lat: number; // top
}

export interface IOSMBounds {
  minlat: number;
  minlon: number;
  maxlat: number;
  maxlon: number;
}

export interface IOSMElements {
  type: string;
  id: number;
  lat: number;
  lon: number;
  timestamp: string;
  version: string;
  changeset: number;
  user: string;
  uid: string;
  nodes?: number[];
  tags?: { [key: string]: string };
}

export interface IOSMData {
  version: string;
  generator: string;
  copyright: string;
  attribution: string;
  license: string;
  bounds: IOSMBounds;
  elements: IOSMElements[];
}
