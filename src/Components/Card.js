import Checkbox from "@mui/material/Checkbox";

function Card(props) {
  return (
    <div className="card">
      <img className="image" src={props.path} style={{ display: "block" }} />
      <p style={{ display: "inline-block" }}>I have this</p>
      <Checkbox onClick={props.save} style={{ display: "inline-block" }} />
    </div>
  );
}

export default Card;
