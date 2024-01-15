import React from "react";
import {useState, useEffect} from 'react';
import '../../mirandushub/mirandushub.css'
import { useRef } from "react";
import { setProperty } from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';


export default function Assets () {
  const [index, setIndex] = useState(null);
  const [scroll, setScroll] = useState(false);
  
  const menu = document.getElementById("menu");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 400);
    });
  }, []);

      Array.from(document.getElementsByClassName("menu-item"))
        .forEach((item, index) => {
          item.onmouseover = () => {
            menu.dataset.activeIndex = index;
          }
        });

    return (
        <section>
          <div id="menu">
              <div id="menu-items">
                  <Link to="/estates" class='menu-item one' onMouseEnter={() => setIndex(1)}>ESTATES</Link>
                  <Link to="/arena" class="menu-item two" onMouseEnter={() => setIndex(2)}>ARENA</Link>
                  <Link class="menu-item three" to="/mayhem" onMouseEnter={() => setIndex(3)}>MAYHEM</Link>
                  <Link to="/campaign" class='menu-item four' onMouseEnter={() => setIndex(4)}>CAMPAIGN</Link>
                  <Link to="/tower-of-trials" class='menu-item five' onMouseEnter={() => setIndex(4)}>TOWER OF TRIALS</Link>
              </div>
              <div className="menu-background-pattern"></div>
              <div id="menu-background-imageAssets"></div>
            </div>
        </section>
    )
}
