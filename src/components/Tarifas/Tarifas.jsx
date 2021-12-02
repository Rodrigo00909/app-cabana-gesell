import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { DatePicker, TimePicker } from '@material-ui/pickers';


const Tarifas = () => {

    const [checkIn, setCheckIn] = useState(new Date());
    const [checkOut, setCheckOut] = useState(new Date());

    console.log(checkIn);
    console.log(setCheckIn);

    return (
        <div>
            <label>Fechas</label>
            <DatePicker value={checkIn} onChange={setCheckIn} />
            <DatePicker value={checkOut} onChange={setCheckOut} />
        </div>
    )
}

export default Tarifas
