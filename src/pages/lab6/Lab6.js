import { useEffect, useState } from "react";

// styles
import styles from './Lab6.module.css';
import Lab6Api from "../../api/lab6.api";
import Post from "./Post/Post";

export default function Lab6() {
  const [posts, setPosts] = useState([]);
  const [postText, setPostText] = useState('');

  useEffect(() => {
    requestPosts().then(resp => {
      setPosts(resp.data)
    });
  }, []);

  function wrapPosts() {
    return posts.map(el => (
      <Post key={el.id} data={el.post} handleDelete={handleDelete.bind(this, el.id)}/>
    ));
  }

  function handleChange(ev) {
    setPostText(ev.target.value);
  }

  async function handleDelete(id) {
    await Lab6Api.deletePost(id);
    const resp = await requestPosts();
    setPosts(resp.data);
  }

  async function addPost() {
    if (!postText.length) {
      alert('write something');
      return;
    }
    await Lab6Api.addPost({data: postText});
    const resp = await requestPosts();
    setPosts(resp.data);
    setPostText('');
  }

  async function requestPosts() {
    return await Lab6Api.getPosts();
  }

  return (
    <div className={styles.content_wrapper}>
      <div className={styles.input_wrapper}>
        <textarea
          name="text"
          id="text"
          placeholder="Add new post"
          value={postText}
          onChange={handleChange}
        />
        <button
          onClick={addPost}
        >
          send
        </button>
      </div>
      <div className={styles.posts_block}>
        {wrapPosts()}
      </div>
    </div>
  );
}
