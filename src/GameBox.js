//changing val requires hook
export function GameBox({ val, onPlayerClick }) {
  //const val = "X";
  //const [val, setVal] = useState(null);
  const styles = {
    color: val === "X" ? "green" : "red",
  };
  return (
    <div
      style={styles}
      onClick={() => onPlayerClick()}
      className="game-box">{val}</div>
  );
}
