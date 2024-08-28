import { useState, useEffect } from "react";
import { LAPTOP, MOBILE, TABLE } from "shared/lib/Container/screenSize";

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    width,
    height,
    // isMobileVerySmall: width >= MOBILE_VERYSMALL,
    // isMobileSmall: width <= MOBILE_SMALL,
    // isMobileMedium: width <= MOBILE_MEDIUM,
    // isMobileLarge: width <= MOBILE_LARGE,
    isLaptop: width <= LAPTOP,
    isTable: width <= TABLE,
    isMobile: width <= MOBILE,
    // isDescktopMedium: width <= DESCKTOP_MEDIUM,
    // isDescktopLarge: width <= DESCKTOP_LARGE,
  };
};
