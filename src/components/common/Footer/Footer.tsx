import * as React from 'react';

const styles = require('./Footer.module.scss');

export const Footer: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles['appstore-img']}></div>
      <div className={styles['legal-container']}>
        <div className={styles['rr-wrapper']}>
          <img
            src="/images/rrlogotransparent.png"
            alt="rr log"
            srcSet="/images/rrlogotransparent.png 1x, /images/rrlogotransparent@2x.png 2x, /images/rrlogotransparent@3x.png 3x"
          ></img>
          <span aria-label="Powered by Recreatio">Powered by Recreatio</span>
        </div>
        <div className={styles['terms-wrapper']}>
          <a
            className={styles.terms}
            href="https://www.ironforge.co/"
            aria-label="Terms of Use"
          >
            Terms of Use
          </a>
          <a
            className={styles.privacy}
            href="https://www.ironforge.co/"
            aria-label="Private Policy"
          >
            Privacy Policy
          </a>
        </div>
        <div className={styles['map-wrapper']}>
          <a
            className={styles.maps}
            href="https://www.ironforge.co/"
            aria-label="Maps powered by Google"
          >
            Maps powered by
          </a>
          <img
            src="/images/google.png"
            alt="google icon"
            srcSet="/images/google.png 1x, /images/google@2x.png 2x, /images/google@3x.png 3x"
          ></img>
        </div>
      </div>
    </div>
  );
};
