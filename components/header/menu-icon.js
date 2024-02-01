import styles from "./menu-icon.module.css";
import { forwardRef } from "react";

const MenuIcon = forwardRef(function MenuIcon(props, ref) {
  const { animation } = props;
  return (
    <div className={styles.container} onClick={animation}>
      <div className={styles.menu} ref={ref}>
        <div>
          <span className={styles.line__1}></span>
          <span className={styles.line__2}></span>
          <span className={styles.line__3}></span>
        </div>
      </div>
    </div>
  );
});

export default MenuIcon;
