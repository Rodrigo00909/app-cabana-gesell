import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import esLocale from 'date-fns/locale/es';

const Home = () => {

    return (
        <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
                <Header />
            </MuiPickersUtilsProvider>
        </div>
    )
}

export default Home
