import React from "react";
import AdditionModal from './AdditionModal'
import Button from './Button'
import { dataArray } from '../global'


function Modal() { 
    const [showAddModal, setAddShowModal] = React.useState(false);
    const [showDeductModal, setDeductShowModal] = React.useState(false);

    return (
        <>
            <Button action={() => setAddShowModal(true)} title="Uusi tulo" />
            <Button action={() => setDeductShowModal(true)} title="Uusi meno" />

            {showAddModal ? (
                <>
                    <AdditionModal title="Lisää uusi tulo" type="addition" closeMenu={() => { setAddShowModal(false); setAddShowModal(false); }} />
                </>
            ) : null
            }
            {showDeductModal ? (
                <>
                    <AdditionModal title="Lisää uusi meno" type="deduct" closeMenu={() => { setAddShowModal(false); setDeductShowModal(false); }} />
                </>
            ) : null}

        </>
    );
}
export default Modal