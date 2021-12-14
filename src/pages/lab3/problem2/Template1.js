// styles
import styles from './Template1.module.css';

export default function Template1() {
  return (
    <table className={styles.table}>
      <tr className={styles.header}>
        <td><input type="text" /></td>
        <td></td>
        <td></td>
        <td>1</td>
      </tr>
      <tr className={styles.main}>
        <td style={{background: "blue"}}>2</td>
        <td style={{background: "red"}}>3</td>
        <td style={{background: "white"}}>4</td>
        <td style={{background: "red"}}>5</td>
      </tr>
      <tr className={styles.footer}>
        <td>6</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>
  );
}
