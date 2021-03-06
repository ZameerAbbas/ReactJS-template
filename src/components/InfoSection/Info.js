import React from "react";
import { Button } from "../ButtonElements";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopoLine,
  Heading, 
  Subtitle,
  BtnWrapper,
  Column2,
  Img,
  ImgWrap,
} from "./InfoElements";

const Info = ({
  LightBg,
  id,
  imgStart,
  Topline,
  headline,
  darkText,
  LightText,
  description,
  buttonLabel,
  img, 
  alt,
  primary,
  dark,
  dark2,
}) => {
  return (
    <>
      <InfoContainer LightBg={LightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopoLine>{Topline}</TopoLine>
                <Heading LightText={LightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrapper>
                  <Button to="home" 
                  smooth={true}
                  duration={500}
                  spy={true}
                   exact="true"
                   offset={-80}
                   primary={primary ? 1 :0 }
                   dark={dark ? 1 :0}
                   dark2={dark2 ? 1:0}
                    
                  >{buttonLabel}</Button>
                </BtnWrapper>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Info;
