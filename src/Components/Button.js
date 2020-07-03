import React from "react";

function Button(props) {
  return (
    <button
      className="text-center bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 "
      type="button"
      style={{ transition: "all .85s ease" }}
      onClick={props.action}
    >
      {props.title}
    </button>
  )
}
export default Button;