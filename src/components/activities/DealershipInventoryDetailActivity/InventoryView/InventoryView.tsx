import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { IVehicle, IVehicleType, IDealership } from '../dataService';
import { SearchBar } from 'components/common/SearchBar/SearchBar';
import { Avatar } from 'components/common/Avatar/Avatar';
import { Card } from 'components/common/Card/Card';

const styles = require('./InventoryView.module.scss');

interface IInventoryData {
  data: IDealership;
}

export const InventoryView: React.FC<IInventoryData> = ({ data }) => {
  const { name, address, logoUrl, vehicles } = data;
  const [filteredVehicles, setFilteredVehicles] = useState<IVehicle[]>(
    vehicles
  );
  const [vehicleTypes, setVehicleTypes] = useState<IVehicleType[]>([]);

  const initVehicleTypes = () => {
    const vehicleTypes: IVehicleType[] = [
      { id: '', name: '', displayName: 'All Inventory' }
    ];

    vehicles.forEach(vehicle => {
      if (vehicleTypes.indexOf(vehicle.type) < 0) {
        vehicleTypes.push(vehicle.type);
      }
    });
    setVehicleTypes(vehicleTypes);
  };

  const onSearch = (searchName: string, searchType: string) => {
    let result: IVehicle[] = vehicles;

    if (searchName.length > 0) {
      result = result.filter(vehicle => vehicle.name.includes(searchName));
    }

    if (searchType.length > 0) {
      result = result.filter(vehicle => vehicle.type.name === searchType);
    }

    setFilteredVehicles(result);
  };

  useEffect(() => {
    initVehicleTypes();
  }, []);

  return (
    <div className={styles.container}>
      <Avatar className={styles['dealership-logo']} image={logoUrl}></Avatar>

      <h2 className={styles['dealership-name']}>{name}</h2>
      <h3 className={styles['dealership-address']}>{address}</h3>

      <SearchBar vehicleTypeData={vehicleTypes} onSearchHandler={onSearch} />

      <div className={styles['vehicle-container']}>
        {_.map(filteredVehicles, (vehicle, i) => (
          <Card
            index={i}
            name={vehicle.name}
            address={vehicle.address}
            imageUrl={vehicle.imageUrl}
            price={vehicle.priceCentsPerDay}
            type={vehicle.type.displayName}
            key={vehicle.id}
          />
        ))}
      </div>
    </div>
  );
};
