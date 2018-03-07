export class PhotonGeo {
  type: string;
  features: {
    type: string,
    geometry: {
      coordinates: number[],
      type: string
    },
    properties: {
      city: string,
      country: string,
      name: string,
      postcode: number
    }
  }[]
}
