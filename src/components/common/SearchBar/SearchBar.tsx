import React, { ChangeEvent, useState } from 'react';
import _ from 'lodash';
import { IVehicleType } from 'components/activities/DealershipInventoryDetailActivity/dataService';
const styles = require('./SearchBar.module.scss');

interface ISearchBarProps {
  vehicleTypeData: IVehicleType[];
  onSearchHandler: any;
}

export const SearchBar: React.FC<ISearchBarProps> = ({
  vehicleTypeData,
  onSearchHandler
}) => {
  const [searchName, setSearchName] = useState('');
  const [searchInventory, setSearchInventory] = useState('');

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchName(e.target.value);
    onSearchHandler(e.target.value, searchInventory);
  };

  const onChangeVehicleType = (e: any) => {
    setSearchInventory(e.target.value);
    onSearchHandler(searchName, e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles['name-wrapper']}>
        <img
          src="/images/search.png"
          alt="Search button"
          srcSet="/images/search.png 1x, /images/search@2x.png 2x, /images/search@3x.png 3x"
        ></img>
        <input
          type="text"
          value={searchName}
          placeholder="Search by name…"
          onChange={onChangeName}
        ></input>
      </div>

      <div className={styles['type-wrapper']}>
        <div className={styles.select}>
          <div className={styles.arrow}></div>
          <select
            name="search_type"
            onChange={onChangeVehicleType}
            value={searchInventory}
          >
            {_.map(vehicleTypeData, vehicleType => (
              <option key={vehicleType.name} value={vehicleType.name}>
                {vehicleType.displayName}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
