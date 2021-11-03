import styles from './Aside.module.css';
import classNames from 'classnames';

export default function Aside({
  children,
  className,
}) {
  return (
    <div className={classNames(styles.aside, className)}>
      {children}
    </div>
  );
}
