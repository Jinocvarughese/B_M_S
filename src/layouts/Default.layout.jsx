import React from "react";

const DeafaultLayout = (props) => {
    return (
        <>
            <h1 className="text-xl"> Default Layout</h1>
            {props.children}  
        </>                  //by using props.children we are accessing the child of the defaultlayout ie the component
    );
};

export default DeafaultLayout;
