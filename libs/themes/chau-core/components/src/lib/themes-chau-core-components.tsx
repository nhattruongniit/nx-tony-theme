import styles from './themes-chau-core-components.module.scss';

/* eslint-disable-next-line */
export interface ThemesChauCoreComponentsProps {}

export function ThemesChauCoreComponents(props: ThemesChauCoreComponentsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ThemesChauCoreComponents!</h1>
    </div>
  );
}

export default ThemesChauCoreComponents;
