import React, {useState, useRef, useEffect}from 'react';
import {useGlobalContext} from "./context";

function Submenu() {
  const {isSubmenuOpen, page:{page, links}, location,} = useGlobalContext();
  const container = useRef(null);
  const [columns, setColums] = useState("col-2");
  useEffect(()=>{
    setColums("col-2")
    const submenu = container.current;
    const {center, bottom} = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    console.log("links");
    if(links.length === 3){
      setColums("col-3")
    }
    if(links.length > 3){
      setColums("col-4")
    }
    },[page, location, links])

  return (
    <aside className={`${isSubmenuOpen ? "submenu show" : "submenu" }`}  ref={container}>
      <section>
        <h4>{page}</h4>
        <div className={`submenu-center ${columns}`}>
          {links.map((item, index) =>{
            const { url, icon, label } = item;
            return(
              <a key={index} href={url} >{icon} {label}</a>
            )
          })}
        </div>
      </section>
    </aside>
  )
}

export default Submenu