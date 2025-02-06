import { useFetch } from "../hooks/useFetch";

const Posts = () => {
  const { data: posts } = useFetch("https://jsonplaceholder.org/posts");
  return (
    <div>
      <h1>Posteos</h1>
      {posts.map((post) => {
        return <h2 key={post.id}>{post.title}</h2>;
      })}
    </div>
  );
};

export default Posts;
