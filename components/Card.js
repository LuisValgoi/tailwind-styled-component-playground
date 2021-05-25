import React, { useMemo, useState } from "react";

import tw from "tailwind-styled-components";

const Figure = tw.figure`flex h-52 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-xl p-8 md:p-0 shadow-md`;
const ImageWrapper = tw.div`lg:content-start`;
const Image = tw.img`h-full md:20 lg:40 rounded-full p-4 object-center object-cover ${(p) => p.$isHover && "opacity-90"}`;
const InfosWrapper = tw.div`flex max-w-xs flex-col justify-center items-start flex-grow p-4`;
const InfoDescription = tw.blockquote`text-lg font-semibold`;
const InfoTitle = tw.p`text-red-600 text-lg font-medium`;
const InfoFullName = tw.p`text-gray-400 text-sm font-medium`;

export default function Card({ imgUrl, projectTitle, url, description, projectFullName }) {
  const [isHoverFigure, setIsHoverFigure] = useState(false);

  return (
    <Figure onMouseEnter={() => setIsHoverFigure(true)} onMouseLeave={() => setIsHoverFigure(false)} onClick={() => window.open(url)}>
      <ImageWrapper>
        <Image $isHover={isHoverFigure} src={imgUrl} alt="" />
      </ImageWrapper>
      <InfosWrapper>
        <InfoDescription>{description}</InfoDescription>
        <InfoTitle>{projectTitle}</InfoTitle>
        <InfoFullName>{projectFullName}</InfoFullName>
      </InfosWrapper>
    </Figure>
  );
}
