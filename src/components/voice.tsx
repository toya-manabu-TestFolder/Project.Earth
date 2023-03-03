import React from "react";
import useSound from "use-sound";
// import Voice from "";

export const Voice: React.FC = () => {
  const [play, { stop, pause }] = useSound("");

  return (
    <>
      <button onClick={() => play()}>音を鳴らす</button>
      <button onClick={() => stop()}>停止</button>
      <button onClick={() => pause()}>ポーズ</button>
    </>
  );
};
