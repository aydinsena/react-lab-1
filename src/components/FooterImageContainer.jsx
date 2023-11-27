import React from "react";
import FooterText from "./FooterText";
import FooterImage from "./FooterImage";
import declarativeLogo from "../assets/setting.png";
import componentLogo from "../assets/laptop.png";
import singleWayLogo from "../assets/desktop.png";
import jsxLogo from "../assets/code.png";

const imageTexts = [
  {
    imageTitle: "Declarative",
    imageText: "React makes it painless to create interactive UIs",
  },
  {
    imageTitle: "Components",
    imageText: "Build encapsulated components that manage their state",
  },
  {
    imageTitle: "Single-Way",
    imageText: "A set of immutable values are passed to the components",
  },
  {
    imageTitle: "JSX",
    imageText: "Statically-typed, designed to run on modern browsers",
  },
];

const images = [
  {
    imageSrc: declarativeLogo,
    alt: "declarative-img",
  },
  {
    imageSrc: componentLogo,
    alt: "components-img",
  },
  {
    imageSrc: singleWayLogo,
    alt: "single-way-img",
  },
  {
    imageSrc: jsxLogo,
    alt: "jsx-img",
  },
];

const FooterImageContainer = () => {
  return (
    <>
      <div className="footer-img-container">
        {images.map((image, index) => (
          <div className="img-text-container" key={index}>
            <FooterImage imageSrc={image.imageSrc} alt={image.alt} />
            <FooterText
              imageTitle={imageTexts[index].imageTitle}
              imageText={imageTexts[index].imageText}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default FooterImageContainer;
