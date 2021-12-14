// assets
import IMG from '../../../assets/slider-images/1.jpg';

// styles
import styles from './Lab2Page.module.css';

export default function Lab2Page() {
  return (
    <div className={styles.page_wrapper}>
      <ul title="hello">
        <li>first</li>
        <li>second</li>
        <li>last</li>
      </ul>
      <ol>
        <li>first</li>
        <li>second</li>
        <li>last</li>
      </ol>
      <p id="float">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi aut consectetur cum
        harum id laudantium maxime modi molestiae mollitia, pariatur porro quam quis rerum tempore
        vel voluptate. Adipisci atque cumque dolor dolorem doloribus dolorum, eligendi eos est,
        facilis harum in iusto labore laborum
        <img className={styles.img} src={IMG} alt="img" />
        magni minima molestiae natus porro possimus
        praesentium quas quos saepe sequi sint soluta tempore ut vel veritatis. Architecto aut culpa
        delectus ea, enim illo nam nesciunt nihil nisi qui sequi similique totam ut. Amet corporis
        deleniti expedita neque porro. Atque dolor ducimus eveniet ex magni necessitatibus vero?
        Autem corporis cum deserunt error impedit in magnam sapiente!
      </p>
    </div>
  );
}
