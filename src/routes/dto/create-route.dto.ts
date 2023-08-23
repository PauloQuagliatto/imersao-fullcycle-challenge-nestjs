export class CreateRouteDto {
  id: string;
  name: string;
  source: {
    lat: number;
    lng: number;
  };
  destination: {
    lat: number;
    lng: number;
  };
}
