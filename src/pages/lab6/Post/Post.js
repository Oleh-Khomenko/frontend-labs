import styles from './Post.module.css';

export default function Post({data, handleDelete}) {
  return (
    <div className={styles.post_wrapper}>
      <p>{data}</p>
      <button onClick={handleDelete}>delete</button>
    </div>
  );
}
