import React, { useState } from "react";
import { dataArray } from '../global'

function DataEntry(props) {
    const [showData, setShowData] = useState(true)

    return (
        <>
            {showData ? (
                <>
                    <div onClick={() => { dataArray.splice(props.index, 1); setShowData(false) }} className="text-center bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 mt-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ">
                        <p>Määrä:{props.data.amount}</p>
                        <p>Syy:{props.data.reason}</p>
                        <p>Tulo/meno:{props.data.type}</p>
                    </div>
                </>
            ) : null
            }
        </>
    );
}

export default DataEntry