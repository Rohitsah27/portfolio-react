import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingEffect = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["coder", "web Developer", "designer", "app developer"],
      typeSpeed: 150,
      backSpeed: 90,
      backDelay: 2000,
      loop: true,
      showCursor: false, 
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <span className="multiText" ref={typedElement}></span>
    </div>
  );
};

export default TypingEffect;
