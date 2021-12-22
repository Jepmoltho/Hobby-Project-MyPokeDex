function Header(props) {
  return (
    <div className="header">
      <h1 style={{ margin: 0 }}>{props.headline}</h1>
      <h2 style={{ fontStyle: "italic" }}>Keep track of your collection</h2>
    </div>
  );
}

export default Header;
