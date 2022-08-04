import styles from './themes-core.module.scss';

/* eslint-disable-next-line */
export interface ThemesCoreProps {}

export function ThemesCore(props: ThemesCoreProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ThemesCore!</h1>
    </div>
  );
}

export default ThemesCore;
