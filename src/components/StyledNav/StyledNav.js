import styles from './StyledNav.module.css';
import {NavLink} from 'react-router-dom';
import classNames from 'classnames';

export default function StyledNav({
  children,
  className,
  activeClassName,
  to,
}) {
  return (
    <NavLink
      to={to}
      className={classNames(styles.tab, className)}
      activeClassName={styles.active_nav}
    >
      {children}
    </NavLink>
  );
}
