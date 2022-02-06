import React, { useState } from 'react'
import './Reservas.css';
import Calendar from 'rc-year-calendar';
import MyCalendar from './Calendario';
const currentYear = new Date().getFullYear();

const Reservas = () => {

    const dataSource = [
        {
          startDate: new Date(currentYear, 2, 3),
          endDate: new Date(currentYear, 3, 3) },

        {
          startDate: new Date(currentYear, 3, 5),
          endDate: new Date(currentYear, 5, 15) }] 

    return (
        <div>
             <Calendar     
                dataSource = { dataSource }    
                />
        </div>
    )
}

export default Reservas;
