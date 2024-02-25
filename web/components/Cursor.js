import styles from "./Cursor.module.scss";

export function mouseEffect() {
  var e = window.event;

  var posX = e.clientX;
  var posY = e.clientY;

  // Might use to make it more of a grid effect instead of slug effect
  //
  // var gridSize = 40;
  // var boundsX = document.documentElement.clientWidth;
  // var boundsY = document.documentElement.clientHeight;

  // var cellsX = boundsX / gridSize;
  // var cellsY = boundsY / gridSize;

  // console.error(cellsX, cellsY);

  var overlay = document.querySelector(".cursor-overlay");
  var tile = document.createElement("div");

  tile.classList.add("cursor-tile");

  tile.style.setProperty("--x", posX + "px");
  tile.style.setProperty("--y", posY + "px");

  window.setTimeout(() => {
    tile.remove();
  }, 200);

  overlay.append(tile);
}

export default function Cursor({}) {
  return <section className={styles.overlay + ` cursor-overlay`}></section>;
}
