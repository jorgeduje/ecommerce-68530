import { useFetch } from "../hooks/useFetch";

const Comments = () => {
  const { data: comments } = useFetch("https://jsonplaceholder.org/comments");
  return (
    <div>
      <h1>Comentarios</h1>
      {comments.map((element) => {
        return <h2 key={element.id}>{element.comment}</h2>;
      })}
    </div>
  );
};

export default Comments;
