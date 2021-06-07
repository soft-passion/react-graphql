import { useDealershipDetailActivityQuery as useBaseQuery } from 'generated/graphql';

export interface IVehicleType {
  id: string;
  name: string;
  displayName: string;
}

export interface IVehicle {
  id: string;
  name: string;
  address: string;
  imageUrl: string;
  priceCentsPerDay: number;
  type: IVehicleType;
}

export interface IDealership {
  id: string;
  name: string;
  address: string;
  logoUrl: string;
  vehicles: IVehicle[];
}

export interface IData {
  dealership: IDealership;
}

export function useDealershipDetailActivityQuery(id: any) {
  const tuple = useBaseQuery({ variables: { id } });

  const data: IData = {
    dealership: {}
  } as IData;

  if (tuple.data?.dealership) {
    const dealership = tuple.data?.dealership;
    data.dealership = {
      id: dealership.id,
      name: dealership.name,
      logoUrl: dealership.logoUrl,
      address: dealership.address,
      vehicles: dealership.vehicles
    };
  }

  return {
    ...tuple,
    data
  };
}
