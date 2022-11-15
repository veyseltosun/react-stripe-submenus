import React, {useState, useRef, useEffect}from 'react';
import {useGlobalContext} from "./context";

function Submenu() {
  const {isSubmenuOpen, page:{page, links}, location,} = useGlobalContext();
  const container = useRef(null);
  const [colums, setColums] = useState("col-2");
  useEffect(()=>{
    setColums("col-2")
    const submenu = container.current;
    const {center, bottom} = location;
    submenu.style.left = `${center}`;
    submenu.style.top = `${bottom}`;
    console.log("links");
    if(links.length === 3){
      setColums("col-3")
    }
    if(links.length > 3){
      setColums("col-4")
    }
    },[page, location, links])

  return (
    <div className={`${isSubmenuOpen? "submenu show": "submenu" }`}  ref={container}>
      <div>
        <h4>{page}</h4>
      </div>
    </div>
  )
}

export default Submenu