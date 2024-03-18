import styles from "./Cursor.module.scss";

export function mouseEffect() {
  var e = window.event;

  var posX = e.clientX;
  var posY = e.clientY;

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
