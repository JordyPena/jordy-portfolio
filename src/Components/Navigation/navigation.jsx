import SideNav from "../SideNav/sideNav";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";
import { RiAliensFill } from "react-icons/ri";
import "../Navigation/navigation.css";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [width, setWidth] = useState({
    dynamicWidth: window.innerWidth,
  });

  const setDimension = () => {
    setWidth({
      dynamicWidth: window.innerWidth,
    });
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

  const menuSelected = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      {isMobile ? (
        <nav>
          <div className="icon-container">
            <RiAliensFill color="black" size="4rem" />
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
          </div>
          <SideNav />
        </nav>
      )}
    </>
  );
};

export default Navigation;
