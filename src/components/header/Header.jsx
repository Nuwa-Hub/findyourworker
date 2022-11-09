import "./header.css";
import dp from "../../assets/back.jpg"
export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <h3 className="headerTitleSm">Easy & Quick</h3>
        <h3 className="headerTitleLg">FIND YOUR WORKER</h3>
      </div>
      <img
        className="headerImg"
        src={dp}
      />
    </div>
  );
}
