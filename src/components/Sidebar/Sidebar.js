import React from 'react';
import "./Sidebar.css";
import {SidebarData} from './SidebarData'
import { Link } from 'react-router-dom';

function Sidebar(){
    return (
        <div className="Sidebar">
            <ul className="Sidebarlist">
            {SidebarData.map((val,key) => {
                return (
                    // <React.Fragment>
                    //     <li className='row' id={window.location.pathname === val.link ? "active" : ""}>
                    //         <div id="title">
                    //             <Link to={val.link} key={key} style={{textDecoration: 'none'}}>{val.title}</Link>
                    //         </div>
                    //     </li>
                    // </React.Fragment>
                    
                    <li 
                    key={key} 
                    className="row"
                    id={window.location.pathname === val.link ? "active" : ""}
                    onClick={()=>{window.location.pathname = val.link}}
                    >
                        <div id="title">{val.title}</div>
                    </li>
                );
            })}
            </ul>
        </div>
    )
}

export default Sidebar