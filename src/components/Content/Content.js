import React from "react";

function Content(props){
    return (
        <React.Fragment>
            <div>
                {props.children}
            </div>
        </React.Fragment>
    );
}

export default Content;