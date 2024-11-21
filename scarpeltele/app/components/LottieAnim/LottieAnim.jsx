import React from "react";
import Lottie, { useLottie } from "lottie-react";

import animationData from "./aim.json";

const LottieAnimation = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,

    animationData: animationData, // Your animation data
  };
  const { View } = useLottie(lottieOptions);

  return <div>{View}</div>;
};

export default LottieAnimation;
