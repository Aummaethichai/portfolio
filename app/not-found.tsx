"use client";
import { useEffect, useState } from "react";
import FuzzyText from "./components/FuzzyText/FuzzyText";

const NotFound = () => {
    const [isLightTheme, setIsLightTheme] = useState(true);

    useEffect(() => {
      // เช็คธีมจาก localStorage ทุกครั้งที่ component ถูก mount
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark") {
        setIsLightTheme(false);
      } else {
        document.documentElement.classList.remove("dark");
        setIsLightTheme(true);
      }
  
      // ฟังการเปลี่ยนแปลงของ localStorage
      const interval = setInterval(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark" && isLightTheme) {
          setIsLightTheme(false);
        } else if (savedTheme !== "dark" && !isLightTheme) {
          setIsLightTheme(true);
        }
      }, 0);
  
      return () => clearInterval(interval);
    }, [isLightTheme]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <FuzzyText
        baseIntensity={0.2}
        hoverIntensity={0.5}
        enableHover={true}
        fontSize={100}
        color={isLightTheme ? '#' : '#FFFFFF'}
      >
        404
      </FuzzyText>
      <FuzzyText
        baseIntensity={0.2}
        hoverIntensity={0.5}
        enableHover={true}
        fontSize={70}
        color={isLightTheme ? '#00000' : '#FFFFFF'}
      >
        Not Found
      </FuzzyText>
    </div>
  );
};

export default NotFound;
