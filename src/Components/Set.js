function Set(props) {
  return (
    <div className="set">
      <h2>{props.name}</h2>
      <div className="flex-container">{props.cards}</div>
    </div>
  );
}

export default Set;
