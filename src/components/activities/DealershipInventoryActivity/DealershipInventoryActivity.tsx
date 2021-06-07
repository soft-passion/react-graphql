import * as React from 'react';
import _ from 'lodash';

import * as dataService from './dataService';

const styles = require('./DealershipInventoryActivity.module.css');

export const DealershipInventoryActivity: React.FC = props => {
  const queryTuple = dataService.useDealershipInventoryActivityQuery();

  return (
    <div className={styles.container}>
      Dealership Inventory Activity
      {!queryTuple.loading &&
        _.map(queryTuple.data.dealerships, dealership => (
          <div className={styles.dealership}>
            <a
              href={`/dealership/${dealership.id}`}
              target="blank"
              key={dealership.id}
            >
              {dealership.name}
            </a>
          </div>
        ))}
    </div>
  );
};
