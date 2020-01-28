import React, { useState } from 'react'
import SubstationsList from './Components/SubstationList/SubstationList'
import { Box } from '@material-ui/core'
import classes from './App.module.css'

function App() {
    const [substations, setSubstations] = useState([
        {
            title: 'Substation 1',
            subtitle: 'High Humidity Alarm',
            deviceCount: 5,
            alarmCount: 1114,
            eventCount: 18189999999,
            commStatus: 'Online',
            values: {
                temperature: 69,
                humidity: 78,
            },
        },
        {
            title: 'Substation 11 ',
            subtitle: 'High Humidity Alarm',
            deviceCount: 5,
            alarmCount: 10,
            eventCount: 0,
            commStatus: 'Online',
            values: {
                temperature: 69,
                humidity: 78,
            },
        },
        {
            title: 'Substation 10 ',
            subtitle: 'High Humidity Alarm',
            deviceCount: 5,
            alarmCount: 0,
            eventCount: 0,
            commStatus: 'Online',
            values: {
                temperature: 69,
                humidity: 78,
            },
        },
        {
            title: 'Substation 2',
            subtitle: 'Normal',
            deviceCount: 3,
            alarmCount: 0,
            eventCount: 3,
            commStatus: 'Online',
            values: {
                volume: 3000,
                flow: 2.1,
            },
        },
        {
            title: 'Substation 3',
            subtitle: '5 Alarms',
            deviceCount: 13,
            alarmCount: 5,
            eventCount: 23,
            commStatus: 'Online',
            values: {
                temperature: 112,
                flow: 0.1,
            },
        },
        {
            title: 'Substation 4',
            subtitle: 'Disconnected',
            deviceCount: null,
            alarmCount: null,
            eventCount: null,
            commStatus: 'Offline',
            values: {
                temperature: null,
                humidity: null,
            },
        },
        {
            title: 'Substation 5',
            subtitle: 'Normal',
            deviceCount: 1,
            alarmCount: 0,
            eventCount: 1,
            commStatus: 'Online',
            values: {
                temperature: 68,
                humidity: 74,
            },
        },
        {
            title: 'Substation 5',
            subtitle: 'Normal',
            deviceCount: 1,
            alarmCount: 0,
            eventCount: 1,
            commStatus: 'Online',
            values: {
                temperature: 68,
                humidity: 74,
            },
        },
    ])
    return (
        <Box className={classes.App} mx="auto">
            <SubstationsList substations={substations} />
        </Box>
    )
}

export default App
