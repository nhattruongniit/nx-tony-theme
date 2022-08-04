import styles from './themes-chau-core-configs.module.scss';

/* eslint-disable-next-line */
export interface ThemesChauCoreConfigsProps {}

export function ThemesChauCoreConfigs(props: ThemesChauCoreConfigsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ThemesChauCoreConfigs!</h1>
    </div>
  );
}

export default ThemesChauCoreConfigs;
