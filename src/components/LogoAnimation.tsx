import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import Image from "next/image";
import { CONTACT_DETAILS } from "../data/data";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50%)
  }
  to {
    opacity: 1;
    transform: translateX(0%)
  }
`;

const FadeInImage = styled(Image)`
  animation: ${fadeIn} 1s ease-in-out;
`;

const LogoAnimation = ({ width, height, logo }: { width: number; height: number; logo: any }) => {

  const [isFadeIn, setIsFadeIn] = useState(false);

  useEffect(() => {
    setIsFadeIn(true);
  }, []);

  return (
    <div>
      {isFadeIn ? (
        <FadeInImage
          src={logo}
          alt={CONTACT_DETAILS.contact_name}
          width={width}
          height={height}
          priority={true}
          className=""
        />
      ) : null}
    </div>
  );
};

export default LogoAnimation;