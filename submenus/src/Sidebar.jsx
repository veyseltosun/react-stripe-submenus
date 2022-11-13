import React from 'react'
import {FaTimes} from "react-icons/fa";
import sublinks from "./Data";


function Sidebar() {
  return (
    <div className='sidebar-wrapper show'>
     <aside className='sidebar'>
      <button className='close-btn'>
        <FaTimes></FaTimes>
      </button>
      <div className='sidebar-links'>
        {sublinks.map((item,index)=>{
           const{page, links} = item;
           return(
             <article key={index}>
               <h4 >{page}</h4>
               <div className='sidebar-sublinks'>
                 {links.map((link, index)=>{
                   const{url, icon, label} = link;
                   return(
                     <a key={index} href={url}>
                       {icon}
                       {label}
                     </a>
                   )
                 })}
               </div>
             </article>
        )})}
      </div>
     </aside>

    </div>
  )
}

export default Sidebar