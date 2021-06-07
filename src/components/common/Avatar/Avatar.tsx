import * as React from 'react';
const styles = require('./Avatar.module.scss');
interface IAvatarProps {
  className: string;
  image: string;
}
export const Avatar: React.FC<IAvatarProps> = ({ className, image }) => {
  return (
    <div className={className}>
      <div className={styles['img-wrapper']}>
        <img src={image} alt="Avatar logo" />
      </div>
    </div>
  );
};
