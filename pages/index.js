import styled from "styled-components";
import Card from "../components/Card/index";
import { CldImage, CldUploadButton } from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";

export default function Home({ cards, onDeleteCard }) {
  /*  const [image, setImage] = useLocalStorageState("image", {
    defaultValue: [],
  });

  const handleImageUpload = (event) => {
    if (event.event === "success") {
      setImage({
        src: event.info.secure_url,
        height: event.info.height,
        width: event.info.width,
      });
    } else {
      //Upload war nicht erfolgreich
    }
  }; */

  return (
    <main>
      {/* <CldImage
        width="960"
        height="600"
        src="https://res.cloudinary.com/dfkicjx4d/image/upload/v1667128837/samples/animals/three-dogs.jpg"
        sizes="100vw"
        alt="Three dogs looking great"
      /> */}

      {/*     <CldUploadButton uploadPreset="ceduvcvz" onUpload={handleImageUpload} />
      {image && <Image src={image.src} width={100} height={100} alt="" />} */}

      {cards.length === 0 ? (
        <StyledWelcome>
          Welcome to Tortuga app! To get started, simply tap the button with the
          (+) sign in the navigation bar to create your very first card. You can
          come back here to see your cards.
        </StyledWelcome>
      ) : null}
      <WrapperDiv>
        <CardList>
          {cards?.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              what={card.what}
              why={card.why}
              price={card.price}
              howMuch={card.howMuch}
              onDeleteCard={onDeleteCard}
              birthday={card.birthday}
              divisor={card.divisor}
            />
          ))}
        </CardList>
      </WrapperDiv>
    </main>
  );
}

const StyledWelcome = styled.p`
  justify-content: center;
  box-sizing: border-box;
  text-align: center;

  z-index: 2;
  position: relative;
  width: 340px;
  height: 184px;
  background: #d9d9d9;
  border: 1px solid #a6a6a6;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 17px;
  margin: 0 auto;
  margin-top: 80px;
`;

const CardList = styled.div`
  margin-top: 70px;
  margin-bottom: 70px;
`;

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
