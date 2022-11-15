import "./post.css";
import dp from "../../assets/1.jpeg";
export default function Post({post}) {
  
  return (
    <div className="post">
      <img className="postImg" src={post.img} alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">{post.des}</span>
          <span className="postDesc">
         {""}


          </span>
        </div>
        <span className="postDate">{""}</span>
      </div>
    </div>
  );
}
