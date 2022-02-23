import { useState } from "react";

export function AddColor() {
  const [color, setColor] = useState("pink");
  const styles = {
    backgroundColor: color,
    margin: "10px"
  };
  //const colorList = ["red", "orange", "blue", "yellow"];
  const [colorList, setColorList] = useState(["red", "orange", "blue", "yellow"]);
  return (
    <div>
      <input
        value={color}
        style={styles}
        placeholder="Enter a color"
        onChange={(event) => setColor(event.target.value)}></input>
      {/* copy the colorList and add new color to it */}
      <button onClick={() => setColorList([...colorList, color])}>Add Color</button>
      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}
    </div>
  );
}

export function ColorBox({ color }) {
  const styles = {
    backgroundColor: color,
    height: "25px",
    width: "200px",
    margin: "10px"
  };
  return (
    <div style={styles}></div>
  );
}
