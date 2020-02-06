import React from 'react'
import ScoreCard from '@pxblue/react-components/core/ScoreCard'
import EmptyState from '@pxblue/react-components/core/EmptyState'
import { Hero, HeroBanner, InfoListItem } from '@pxblue/react-components/core/'

import {
    Box,
    List,
    ListItem,
    ListItemText,
    Icon,
    Grid,
    ListItemSecondaryAction,
} from '@material-ui/core'
import * as Colors from '@pxblue/colors'
import DevicesIcon from '@material-ui/icons/Devices'
import AllIcons from '../../constants/IconConst'
import top from '../../assets/farm.jpg'
import TextConst from '../../constants/TextConst'

const substationList = props => {
    const iconStyle = {
        temperature: {
            color: Colors.black[500],
            fontSize: 'inherit',
        },
        humidity: {
            color: Colors.blue[200],
            fontSize: 'inherit',
        },
        volume: {
            color: Colors.black[500],
            fontSize: 'inherit',
        },
        flow: {
            color: Colors.gray[200],
            fontSize: 'inherit',
        },
    }
    const heroIcons = val => {
        let eachSubstationValuesKeys = Object.keys(val)
        //This following code will loop through the eachSubstationValuesKeys array and give the hero component array
        return (
            <>
                {eachSubstationValuesKeys.map(iconKey => {
                    return (
                        <Hero
                            key={iconKey}
                            icon={
                                <i
                                    className={AllIcons[iconKey]}
                                    style={iconStyle[iconKey]}
                                ></i>
                            }
                            label={TextConst.texts[iconKey]}
                            value={val[iconKey]}
                            iconSize={48}
                            units={TextConst.units[iconKey]}
                            fontSize={'normal'}
                        ></Hero>
                    )
                })}
            </>
        )
    }
    const allCards = props.substations.map((eachSubstation, index) => {
        return (
            <Grid item key={index.toString()}>
                <ScoreCard
                    //this style is used instead of grid is to make the resposive code unbrekable for all devices
                    style={{
                        width: '405px',
                        height: '100%',
                    }}
                    headerBackgroundImage={top}
                    headerColor={
                        eachSubstation.alarmCount > 0
                            ? Colors.red[700]
                            : Colors.blue[700]
                    }
                    headerTitle={eachSubstation.title}
                    headerSubtitle={eachSubstation.subtitle}
                    headerInfo={
                        eachSubstation.deviceCount ? (
                            <>{eachSubstation.deviceCount} Devices</>
                        ) : (
                            <>0 Device</>
                        )
                    }
                    headerFontColor={Colors.white[50]}
                    actionItems={[
                        <Icon onClick={() => alert('something did')}>
                            {AllIcons.vertIcon}
                        </Icon>,
                    ]}
                    badge={
                        <React.Fragment>
                            {eachSubstation.subtitle.toLowerCase() !==
                            'disconnected' ? (
                                <HeroBanner style={{ width: '220px' }}>
                                    {heroIcons(eachSubstation.values)}
                                </HeroBanner>
                            ) : (
                                <span></span>
                            )}
                        </React.Fragment>
                    }
                    actionRow={
                        eachSubstation.subtitle.toLowerCase() !==
                        'disconnected' ? (
                            <List>
                                <ListItem>
                                    <ListItemText primary="View Location" />
                                    <ListItemSecondaryAction>
                                        <Icon>{AllIcons.rightArrow}</Icon>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            </List>
                        ) : null
                    }
                >
                    {eachSubstation.subtitle.toLowerCase() !==
                    'disconnected' ? (
                        //The top margin for LIST below is used to align the list items with badge label of the score card
                        <List style={{ marginTop: '7px', maxWidth: '170px' }}>
                            <InfoListItem
                                title={`${
                                    eachSubstation.alarmCount > 0
                                        ? eachSubstation.alarmCount +
                                          TextConst.texts.multipleAlarm
                                        : TextConst.texts.oneAlarm
                                } `}
                                icon={
                                    eachSubstation.alarmCount > 0 ? (
                                        <Icon>
                                            {AllIcons.notificationActive}
                                        </Icon>
                                    ) : (
                                        <Icon>{AllIcons.notification}</Icon>
                                    )
                                }
                                fontColor={
                                    eachSubstation.alarmCount > 0
                                        ? Colors.red[500]
                                        : Colors.black[400]
                                }
                                iconColor={
                                    eachSubstation.alarmCount > 0
                                        ? Colors.red[500]
                                        : Colors.black[400]
                                }
                                style={{ height: '35px', overflow: 'hidden' }}
                            />
                            <InfoListItem
                                title={`${
                                    eachSubstation.eventCount > 0
                                        ? eachSubstation.eventCount +
                                          TextConst.texts.multipleEvent
                                        : TextConst.texts.oneEvent
                                } `}
                                icon={<Icon>{AllIcons.info}</Icon>}
                                fontColor={
                                    eachSubstation.eventCount > 0
                                        ? Colors.blue[500]
                                        : Colors.black[400]
                                }
                                iconColor={
                                    eachSubstation.eventCount > 0
                                        ? Colors.blue[500]
                                        : Colors.black[400]
                                }
                                style={{ height: '35px', overflow: 'hidden' }}
                            />
                            <InfoListItem
                                title={eachSubstation.commStatus}
                                icon={<Icon>{AllIcons.cloud}</Icon>}
                                dense
                                style={{ height: '35px' }}
                            />
                        </List>
                    ) : (
                        //This empty state is used for disconnected devices.
                        <Box mx="auto">
                            <EmptyState
                                title="No Data"
                                icon={
                                    <DevicesIcon
                                        style={{
                                            fontSize: '30px',
                                            margin: '10px 0 5px 0',
                                        }}
                                    />
                                }
                            />
                        </Box>
                    )}
                </ScoreCard>
            </Grid>
        )
    })
    return (
        <Grid container direction="row" spacing={1}>
            {allCards}
        </Grid>
    )
}

export default substationList
