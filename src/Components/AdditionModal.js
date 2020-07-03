import React, { useState } from "react";
import ModalHeader from './ModalHeader'
import { dataArray } from '../global'
import Button from './Button'



function Modal(props) {
    const [amount, setAmount] = useState('')
    const [reason, setReason] = useState('')
    let transaction = {
        amount: 0,
        reason: null,
        type: props.type,
    }

    return (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <ModalHeader title={props.title} />
                        {/*body*/}
                        <div className="border-b p-3 flex justify-between flex-col items-center">
                            <p>Määrä</p>
                            <input type="number" onChange={event => setAmount(event.target.value)} className="bg-gray-200 p-3 mb-8"></input>
                            <p>Syy</p>
                            <input type="text" onChange={event => setReason(event.target.value)} className="bg-gray-200 p-6"></input>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                            <Button action={() => {
                                transaction.amount = amount;
                                transaction.reason = reason;
                                props.closeMenu()
                            }}
                                title="Sulje"
                            />
                            <Button action={() => { transaction.amount = (amount); transaction.reason = reason; dataArray.push(transaction); props.closeMenu() }} title="Tallenna muutokset" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default Modal