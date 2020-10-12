import React, { useState } from "react";
import "../Scss/Home.scss";
import item1Img from "../Assets/1.png";
import item2Img from "../Assets/2.png";
import item3Img from "../Assets/3.png";
import item4Img from "../Assets/4.png";
import item5Img from "../Assets/5.png";
import item6Img from "../Assets/6.png";
import Cursor from "../Components/Cursor";

const Home = () => {
  const [scrollCount, setScrollCount] = useState(0);

  const [items, setItems] = useState([
    {
      id: 0,
      url: item1Img,
      tx: -2,
      ty: 50,
      deg: 40
    },
    {
      id: 1,
      url: item2Img,
      tx: -32,
      ty: 10,
      deg: 20
    },
    {
      id: 2,
      url: item3Img,
      tx: -62,
      ty: 0,
      deg: 0
    },
    {
      id: 3,
      url: item4Img,
      tx: -92,
      ty: 10,
      deg: -20
    },
    {
      id: 4,
      url: item5Img,
      tx: -122,
      ty: 50,
      deg: -40
    },
    {
      id: 5,
      url: item6Img,
      tx: -152,
      ty: 90,
      deg: -60
    }
  ]);

  const handleScroll = (event) => {
    const arrayItems = [...items];
    var j = 0;
    var k = 0;
    var l = 0;
    var m = 0;
    if (event.deltaY === -100 && scrollCount > -1) {
      setScrollCount(scrollCount - 1);
      for (let i = 0; i < arrayItems.length; i++) {
        arrayItems[i].tx = arrayItems[i].tx - 30;
        if (arrayItems[i].ty === 0) {
          j = i;
          k = i - 2;
          l = i - 1;
          m = i - 3;
        } else {
          arrayItems[i].ty = arrayItems[i].ty + 40;
        }
        arrayItems[i].deg = arrayItems[i].deg - 20;
      }
      if (m >= 0) {
        arrayItems[m].ty = 50;
      }
      arrayItems[j].ty = 10;
      arrayItems[k].ty = 10;
      arrayItems[l].ty = 0;

      setItems(arrayItems);
      console.log();
    } else if (event.deltaY === 100 && scrollCount < 2) {
      setScrollCount(scrollCount + 1);
      for (let i = 0; i < arrayItems.length; i++) {
        arrayItems[i].tx = arrayItems[i].tx + 30;
        if (arrayItems[i].ty === 0) {
          j = i;
          k = i + 2;
          l = i + 1;
          m = i + 3;
        } else {
          arrayItems[i].ty = arrayItems[i].ty + 40;
        }
        arrayItems[i].deg = arrayItems[i].deg + 20;
      }
      if (m <= items.length - 1) {
        arrayItems[m].ty = 50;
      }
      arrayItems[j].ty = 10;
      arrayItems[k].ty = 10;
      arrayItems[l].ty = 0;
      setItems(arrayItems);
    }
  };

  const handleMove = (e) => {
    const cursor = document.getElementsByClassName("cursor");
    cursor[0].style.left = "" + e.pageX + "px";
    cursor[0].style.top = "" + e.pageY + "px";
  };

  return (
    <>
      <div className="content" onWheel={handleScroll} onMouseMove={handleMove}>
        <Cursor />
        <div className="content-product">
          {items.map((item) => (
            <div
              key={item.id}
              className="item"
              id={"item" + item.id}
              style={{
                transform:
                  "translate3d(" +
                  item.tx +
                  "vw, " +
                  item.ty +
                  "% ,0) rotate(" +
                  item.deg +
                  "deg)"
              }}
            >
              <img src={item.url} alt="" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
