import * as React from 'react';
const styles = require('./Card.module.scss');

interface ICardProps {
  index: number;
  name: string;
  address: string;
  imageUrl: string;
  price: number;
  type: string;
}

export const Card: React.FC<ICardProps> = props => {
  const { name, address, imageUrl, price, type } = props;
  return (
    <div className={styles.container}>
      <div className={styles['card-img']}>
        <img src={imageUrl} alt="Vehicle thumbnail"></img>
        <div className={styles['price-wrapper']}>
          <span className={styles.price}>${price}</span>
          <span className={styles.unit}>/day</span>
        </div>
      </div>
      <div className={styles['card-detail']}>
        <span className={styles.type}>{type}</span>
        <span className={styles.name}>{name}</span>
        <span className={styles.address}>{address}</span>
      </div>
    </div>
  );
};
