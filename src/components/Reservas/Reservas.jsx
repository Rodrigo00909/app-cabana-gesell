import React, { useState } from 'react'
import './Reservas.css';

import Calendar from 'rc-year-calendar';
import 'js-year-calendar/locales/js-year-calendar.es';

import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { es } from "date-fns/locale";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import frLocale from 'date-fns/locale/fr';

const currentYear = new Date().getFullYear();

const Reservas = () => {

    const [fechaInicio, setFechaInicio] = useState([]);
    const [fechaFin, setFechaFin] = useState([]);
    const [fechaInicioDatePick, setFechaInicioDatePick] = useState(null);
    const [fechaFinDatePick, setFechaFinDatePick] = useState(null);
    const [dataSource, setdataSource] = useState([]);
    const [Lenguage, setLenguage] = useState('es')
    
    
    const AgregarFecha = () => {
        if(fechaInicio != null && fechaFin != null){       
          debugger
          setdataSource( Fecha => [
            {
              startDate: new Date(Number(fechaInicio.split('/')[2]), Number(fechaInicio.split('/')[1])-1, Number(fechaInicio.split('/')[0])),
              endDate: new Date(Number(fechaInicio.split('/')[2]), Number(fechaFin.split('/')[1])-1, Number(fechaFin.split('/')[0])) ,            
              color: "#FF0000"             
            }
            ,...Fecha])
        }
    } 

    /*const dataSource = [
        {
          startDate: new Date(currentYear, 2, 3),
          endDate: new Date(currentYear, 3, 3) 
        },

        {
          startDate: new Date(currentYear, 3, 5),
          endDate: new Date(currentYear, 5, 15) 
        }
      ]*/


    return (
        <div>
          <div className="container">
              <Card className="card" >
                <div className="selectorFechas">      
                        <div className="lblTittle">
                            <label>Fechas</label>
                        </div>                        
                        <div className="fechaDesde">
                              <LocalizationProvider dateAdapter={AdapterDateFns}>
                                  <DatePicker
                                    label="Fecha Entrada"
                                    value={ fechaInicioDatePick }
                                    onChange={(newValue) => {                              
                                      setFechaInicio(newValue.toLocaleDateString());
                                      setFechaInicioDatePick(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                  />
                            </LocalizationProvider>
                        </div>
                        <br/>
                        <div className="fechaHasta">
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                  label="Fecha Salida"
                                  value={ fechaFinDatePick }
                                  onChange={(newValue) => {
                                    setFechaFin(newValue.toLocaleDateString());
                                    setFechaFinDatePick(newValue);
                                  }}
                                  renderInput={(params) => <TextField {...params} />}
                                />
                          </LocalizationProvider>
                        </div>
                        <div className="botonConfirmar">
                          <Button variant="contained" onClick={ AgregarFecha }> Confirmar </Button>
                        </div>
                  </div>
              </Card>
          </div>

  

             <Calendar    
                language= { Lenguage }
                dataSource = { dataSource }    
                />
        </div>
    )
}

export default Reservas;
