import { FC } from "react";
import useSound from "use-sound";

export const Voice: FC<{ src: string }> = ({ src }) => {
  const [play] = useSound(src);

  return (
    <>
      <button onClick={() => play()}>音を鳴らす</button>
    </>
  );
};
