import * as React from 'react';

const styles = require('./TopBar.module.scss');

export const TopBar: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles['bg-overlay']}></div>
      <div className={styles['bg-image']}></div>
    </div>
  );
};
