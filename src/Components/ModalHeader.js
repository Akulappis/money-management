import React from "react";

function ModalHeader(props) {
    return (
        <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
            <h3 className="text-3xl font-semibold">
                {props.title}
            </h3>
        </div>
    )
}

export default ModalHeader