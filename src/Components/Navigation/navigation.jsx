import SideNav from "../SideNav/sideNav";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";
import { RiAliensFill } from "react-icons/ri";
import "../Navigation/navigation.css";
import { useState, useEffect } from "react";
import { ReactComponent as Egg } from "../../image/egg.svg";
import { ReactComponent as Cracked } from "../../image/cracked_egg.svg";
const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [width, setWidth] = useState({
    dynamicWidth: window.innerWidth,
  });

  const setDimension = () => {
    setWidth({
      dynamicWidth: window.innerWidth,
    });
  };

  const menuSelected = () => {
    setOpenMenu(!openMenu);
  };

  //Grabs window width and calls setDimension method to
  //Set our width state to dynamically keep track of screenSize
  useEffect(() => {
    window.addEventListener("resize", setDimension);
    return () => window.removeEventListener("resize", setDimension);
  }, []);

  //Keeps track of the width state to dynamically update our isMobile state
  //To conditionally show/hide elements
  useEffect(() => {
    return width.dynamicWidth < 600 ? setIsMobile(true) : setIsMobile(false);
  }, [width]);

  //Trigger my animation and easter egg if on larger screens
  useEffect(() => {
    const egg = document.querySelector(".egg");
    if (width.dynamicWidth > 1900) {
      egg?.classList.add("egg-active")
      setShowEasterEgg(true);
    } else {
      egg?.classList.remove("egg-active")
      setShowEasterEgg(false);
    }
  }, [width]);

  return (
    <>
      {isMobile ? (
        <nav>
          <div className="icon-container">
            <RiAliensFill color="black" size="4rem" />
            <Egg width="4rem" height="4rem" />
            {openMenu ? (
              <button className="menu-btn" onClick={() => menuSelected()}>
                <CgClose color="black" size="4rem" />
              </button>
            ) : (
              <button className="menu-btn" onClick={() => menuSelected()}>
                <CgMenuRightAlt color="black" size="4rem" />
              </button>
            )}
          </div>
          {openMenu && <SideNav />}
        </nav>
      ) : (
        <nav>
          <div className="icon-container">
            <RiAliensFill color="black" size="4rem" />
            <div className="easter-egg-container">
            {showEasterEgg ? (<Cracked width="4rem" height="4rem"/>) : (<Egg width="4rem" height="4rem" />)}
            {showEasterEgg && (
              <p className="easter-egg-text">WOW you have a big monitor!</p>
            )}
            </div>
          </div>
          <SideNav />
        </nav>
      )}
    </>
  );
};

export default Navigation;
