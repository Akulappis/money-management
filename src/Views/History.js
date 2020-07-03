import React from 'react';
import Wrapper from '../Components/Wrapper'
import { dataArray } from '../global'
import DataEntry from '../Components/DataEntry'

function History() {
    const listItems = dataArray.map((d, index) => <ul key={d.amount}><DataEntry index={index} da={dataArray} data={d}/></ul>);
    return (
        <Wrapper>
          {listItems}
        </Wrapper>
    )
}

export default History