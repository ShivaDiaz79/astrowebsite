import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedText = ({
  title,
  paragraph,
  titleStyle = "",
  paragraphStyle = "",
  h1Color = "",
  paragraphColor = ""
}) => {
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  let titleTyped;
  let paragraphTyped;

  useEffect(() => {
    const titleOptions = {
      strings: Array.isArray(title) ? title : [title],
      typeSpeed: 100,
      backSpeed: 80,
      loop: true
    };

    const paragraphOptions = {
      strings: Array.isArray(paragraph) ? paragraph : [paragraph],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    };

    if (titleRef.current) {
      titleTyped = new Typed(titleRef.current, titleOptions);
    }

    if (paragraphRef.current) {
      paragraphTyped = new Typed(paragraphRef.current, paragraphOptions);
    }

    return () => {
      if (titleTyped) {
        titleTyped.destroy();
      }

      if (paragraphTyped) {
        paragraphTyped.destroy();
      }
    };
  }, [title, paragraph]);

  return (
    <div className="relative flex justify-center py-80 mx-4 sm:mx-10">
      <h1
        ref={titleRef}
        className={`${titleStyle} ${h1Color}`}
      ></h1>
      <p
        ref={paragraphRef}
        className={`${paragraphStyle} ${paragraphColor}`}
      ></p>
    </div>
  );
};

export default TypedText;
