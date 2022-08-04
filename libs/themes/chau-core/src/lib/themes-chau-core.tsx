import styles from './themes-chau-core.module.scss';

/* eslint-disable-next-line */
export interface ThemesChauCoreProps {}

export function ThemesChauCore(props: ThemesChauCoreProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ThemesChauCore!</h1>
    </div>
  );
}

export default ThemesChauCore;
