import { FC } from "react";
import useSound from "use-sound";
import styles from "../styles/farmers.module.css";

export const Voice: FC<{ src: string }> = ({ src }) => {
  const [play] = useSound(src);

  return (
    <div>
      <button className={styles.voice} onClick={() => play()}>
        <p className={styles.buttonText}>生産者の声を再生</p>
      </button>
    </div>
  );
};
