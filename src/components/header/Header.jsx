import "./header.css";
import dp from "../../assets/back.jpg"
export default function Header() {
  return (
    <div className="header">
    <div className="heddev">
      <div className="headerTitles">
        {/* <h3 className="headerTitleSm">Easy & Quick</h3> */}
        <h3 className="headerTitleLg">FINDYOUR WORKER</h3>
      </div>
      <div className="help">
      </div>
      </div>
      <img
        className="headerImg"
        src={dp}
      />
    </div>
  );
}
