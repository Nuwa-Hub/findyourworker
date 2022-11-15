import Post from "../post/Post";
import "./posts.css";
import dp1 from "../../assets/projects/1.jpg";
import dp2 from "../../assets/projects/2.jpg";
import dp3 from "../../assets/projects/3.jpg";
import dp4 from "../../assets/projects/4.jpg";
import dp5 from "../../assets/projects/5.jpg";
import dp6 from "../../assets/projects/6.jpg";


export default function Posts() {
  //   1.Plumbing services
  // 2.Painting services
  // 3.Cleaning services
  // 4.Repairing services
  // 5.Gardening services
  // 6.Other services
  const posts = [{ img: dp1, des: "Plumbing services" },
  { img: dp2, des: "Painting services" },
  { img: dp3, des: "Cleaning services" },
  { img: dp4, des: "Repairing services" },
  { img: dp5, des: "Gardening services" },
  { img: dp6, des: "Other services" },]
 // const posts = [1, 2, 3, 54, 6, 3, 4, 5, 6, 67];
  return (
    <div className="postmain">
      <h1>Our Services</h1>
      <div className="posts">
        {posts.map((post, index) => (
          <Post key={index} post={post}/>
        ))}
      </div>
    </div>
  );
}
