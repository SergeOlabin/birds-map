export interface IBird {
  image:    string;
  location: ILocation;
  name:     string;
  sound:    string;
}

export interface ILocation {
  lat: number;
  lng: number;
}
