import React from 'react';
const styles = require('./LoadingView.module.scss');
export const LoadingView: React.FC = props => {
  return (
    <div className={styles.container}>
      <div className={styles.lds_roller}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
