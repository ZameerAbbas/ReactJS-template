import React, { useState } from "react";
import video from "../../Videos/video.mp4";
import { Button } from "../ButtonElements";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>WelCome to Dot Austere</HeroH1>
        <HeroP>
          Sign up for learning modren skill from remote
        </HeroP>
      </HeroContent>
      <HeroBtnWrapper>
        <Button
          to="signup"
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          parimary="true"
          dark="true"
        >
          Get started {hover ? <ArrowForward /> : <ArrowRight />}
        </Button>
      </HeroBtnWrapper>
    </HeroContainer>
  );
};

export default HeroSection;
