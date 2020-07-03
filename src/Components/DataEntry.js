import React, { useState } from "react";
import { dataArray } from '../global'
import { faBars } from '@fortawesome/free-solid-svg-icons'


function DataEntry(props) { //Used to display data on history view
    const [showData, setShowData] = useState(true)

    const [amount, setAmount] = useState(props.data.amount)
    const [reason, setReason] = useState(props.data.reason)
    

    return (
        <>
            {showData ? (
                <>
                    <div className="text-center bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 mt-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 flex flex-col">
                        <input type="text" onChange={event => setAmount(event.target.value)} defaultValue={props.data.amount} className="bg-blue-500 p-6"></input>
                        <input type="text" onChange={event => setReason(event.target.value)} defaultValue={props.data.reason} className="bg-blue-500 p-6"></input>
                        <input type="text" defaultValue={props.data.type} className="bg-blue-500 p-6"></input>
                        <p onClick={() => { dataArray.splice(props.index, 1); setShowData(false) }}>Poista</p>
                        <p onClick={() => { dataArray[props.index].amount = amount; dataArray[props.index].reason=reason;}}>Tallenna</p>
                    </div>
                </>
            ) : null
            }
        </>
    );
}

export default DataEntry