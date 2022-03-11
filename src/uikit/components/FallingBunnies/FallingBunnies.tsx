import React from "react";
import styled, { keyframes } from "styled-components";
// import BunnyIcon from "../Svg/Icons/Logo";
import { BunnyProps, FallingBunniesProps } from "./types";

const bunnyFall = keyframes`
  0% {
    opacity: 1;
    transform: translate(0, -100%) rotateZ(0deg);
  }

  75% {
    opacity: 1;
    transform: translate(100px, 75vh) rotateZ(270deg);
  }

  100% {
    opacity: 0;
    transform: translate(150px, 100vh) rotateZ(360deg);
  }
`;

const FallingBunnies: React.FC<FallingBunniesProps> = () => {
  const bunnies = <div/>

  return <div>{bunnies}</div>;
};

export default FallingBunnies;
