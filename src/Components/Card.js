import Checkbox from "@mui/material/Checkbox";

function Card(props) {
  return (
    <div className="card">
      <img
        className="image"
        src={props.path}
        style={{ display: "block" }}
        alt="A pokemon card"
      />
      <p style={{ display: "inline-block" }}>I have this</p>
      <Checkbox style={{ display: "inline-block" }} />
    </div>
  );
}

export default Card;
