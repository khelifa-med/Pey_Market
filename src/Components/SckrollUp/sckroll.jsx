
import React from 'react'
import './sckroll.css'
import { useEffect, useState } from "react";
import 'remixicon/fonts/remixicon.css';
export default function () {

    useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setshowScrollBTN(true);
      } else {
        setshowScrollBTN(false);
      }
    });
  }, []);
  const [showScrollBTN, setshowScrollBTN] = useState(false);
  return (
    <div>
        <a style={{ opacity: showScrollBTN? 1 : 0, transition: "1s" }} href="#up">
        <button className="ri-arrow-up-s-line scroll2Top"></button>
      </a>
    </div>
  )
}
