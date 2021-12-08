import { http } from "../instances/http";

const Lab6Api = {
  async getPosts() {
    return await http.get('/posts');
  },
  async addPost(post) {
    return await http.post('/posts', post);
  },
  async deletePost(id) {
    return await http.delete(`/posts/${id}`);
  }
};

export default Lab6Api
