import "./post.css";
import dp from "../../assets/1.jpeg";
export default function Post() {
  
  return (
    <div className="post">
      <img className="postImg" src={dp} alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Test Project</span>
          <span className="postDesc">
          In descriptive writing, the author does not just tell the reader what was seen, felt, tested, smelled, or heard. Rather, the author describes something from their own experience and, through careful choice of words and phrasing, makes it seem real. Descriptive writing is vivid, colorful, and detailed.


          </span>
        </div>
        <span className="postDate">sdfds</span>
      </div>
    </div>
  );
}
