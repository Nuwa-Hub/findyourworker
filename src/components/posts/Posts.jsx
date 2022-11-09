import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  const posts = [1, 2, 3, 54, 6, 3, 4, 5, 6, 67];
  return (
    <div className="posts">
      {posts.map((p,index) => (
        <Post key={index}/>
      ))}
    </div>
  );
}
