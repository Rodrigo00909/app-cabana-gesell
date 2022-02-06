import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Tarifas from '../../components/Tarifas/Tarifas'

import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import esLocale from 'date-fns/locale/es';


const Home = () => {

    return (
        <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
                <Header />
                <Tarifas />               
            </MuiPickersUtilsProvider>
        </div>
    )
}

export default Home
