import React, { useState, useEffect } from "react";

const CustomCursor: React.FC = () => {
  const [cursorClass, setCursorClass] = useState("default");
  const [isHolding, setIsHolding] = useState(false);

  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor") as HTMLElement;

    const handleMouseMove = (event: MouseEvent) => {
      if (cursor) {
        cursor.style.left = `${event.pageX}px`;
        cursor.style.top = `${event.pageY}px`;
      }
    };

    const handleMouseEnter = (event: MouseEvent) => {
      if (event.target instanceof HTMLElement) {
        if (event.target.matches("a")) {
          setCursorClass("a-hover");
        } else if (event.target.matches("button")) {
          setCursorClass("button-hover");
        } else if (event.target.matches("li")) {
          setCursorClass("li-hover");
        } else if (event.target.matches("input")) {
          setCursorClass("input-hover");
        } else if (event.target.matches("textarea")) {
          setCursorClass("textarea-hover");
        } else {
          setCursorClass("default");
        }
      }
    };

    const handleMouseLeave = () => {
      setCursorClass("default");
    };

    const handleMouseDown = () => {
      setCursorClass((prev) => `${prev} click`);
      setIsHolding(true);

      setTimeout(() => {
        if (isHolding) {
          setCursorClass((prev) => `${prev} hold`);
        }
      }, 300);
    };

    const handleMouseUp = () => {
      setIsHolding(false);
      setCursorClass((prev) => prev.replace(" hold", "").replace(" click", ""));
    };

    document.body.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseenter", handleMouseEnter, true);
    document.body.addEventListener("mouseleave", handleMouseLeave, true);
    document.body.addEventListener("mousedown", handleMouseDown);
    document.body.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseenter", handleMouseEnter, true);
      document.body.removeEventListener("mouseleave", handleMouseLeave, true);
      document.body.removeEventListener("mousedown", handleMouseDown);
      document.body.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isHolding]);

  return <div className={`custom-cursor ${cursorClass}`}></div>;
};

export default CustomCursor;
