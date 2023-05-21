import React from "react";
import { Box, Button, ButtonBase, Container, Divider, Grid, Icon, Input, MenuItem, Select, SxProps, TextField, Theme, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import CardListComponent from "./components/CardListComponent";
import { KeyboardArrowDown } from "@mui/icons-material";
import ObjectiveWrapperComponent from "./components/ObjectiveWrapperComponent";
import LabelComponent from "./components/LabelComponent";
import { FormText } from "../../components";
import { ObjectiveForm } from "./ObjectiveForm";
import { owner_risk_data } from "./dummy/owner_risk_data";
import RiskOwner from "./RiskOwner";
const TabComponent = ({
    label,
    onClick,
    isActive
}: {
    label: string;
    onClick?: () => void;
    isActive?: boolean;
}) => {

    isActive = isActive || false;

    return (
        <Box
            sx={{
                backgroundColor: isActive ? '#ff0000' : '#d9d9d9',
                color: '#ffffff',
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
                fontWeight: 'bold',
                padding: 1,
                width: '180px',
                textAlign: 'center',
                cursor: 'pointer',
                maxHeight: '30px'
            }}
        >
            {label}
        </Box>
    )
}

const master_data = [
    {
        risk_owner: '7116753 - Jhon Doe',
        objectives: [
            {
                name: 'Objective 1',
                risks: [
                    {
                        name: 'Risk 1',
                        risk_indicator: {
                            name: 'DANGER',
                            label: 'DANGER',
                            color: 'red',
                            font_color: '#000000'
                        },
                        risk_severity: {
                            name: 'MEDIUM-HIGH',
                            label: 'Medium-High',
                            color: '#FF5C00',
                            font_color: '#FFF'
                        },
                        treatment: 'Mitigate',
                        treatment_percentage: 50,
                        status: 'Finalized',
                        status_updated_at: '2021-09-01 00:00:00'
                    }
                ]
            }
        ],
        status: '',
        is_owner: true,
        category: 'OWNER'
    }
]

const owner_data = [
    {
        risk_owner: '7116753 - Jhon B',
        objectives: [
            {
                name: 'Objective 1',
                risks: [
                    {
                        name: 'Risk 1',
                        risk_indicator: {
                            name: 'DANGER',
                            label: 'DANGER',
                            color: '#FF0000',
                            font_color: '#000000'
                        },
                        risk_severity: {
                            name: 'MEDIUM',
                            label: 'Medium-High',
                            color: '#FF9900',
                            font_color: '#000'
                        },
                        treatment: 'Mitigate',
                        treatment_percentage: 50,
                        status: 'Finalized',
                        status_updated_at: '2021-09-01 00:00:00'
                    }
                ]
            }
        ],
        status: '',
        is_owner: false,
        category: 'SUBORDINATE'
    },
    {
        risk_owner: '7116753 - Jhon B',
        objectives: [
            {
                name: 'Objective 1',
                risks: [
                    {
                        name: 'Risk 1',
                        risk_indicator: {
                            name: 'DANGER',
                            label: 'DANGER',
                            color: '#FF0000',
                            font_color: '#000000'
                        },
                        risk_severity: {
                            name: 'MEDIUM-HIGH',
                            label: 'Medium-High',
                            color: '#FFCB05',
                            font_color: '#FFF'
                        },
                        treatment: 'Mitigate',
                        treatment_percentage: 50,
                        status: 'Finalized',
                        status_updated_at: '2021-09-01 00:00:00'
                    }
                ]
            }
        ],
        status: '',
        is_owner: false,
        category: 'SUBORDINATE'
    },
    {
        risk_owner: '7116753 - Jhon D',
        objectives: [
            {
                name: 'Objective 1',
                risks: [
                    {
                        name: 'Risk 1',
                        risk_indicator: {
                            name: 'DANGER',
                            label: 'DANGER',
                            color: '#FF0000',
                            font_color: '#000000'
                        },
                        risk_severity: {
                            name: 'MEDIUM-HIGH',
                            label: 'Medium-High',
                            color: '#FFCB05',
                            font_color: '#FFF'
                        },
                        treatment: 'Mitigate',
                        treatment_percentage: 50,
                        status: 'Finalized',
                        status_updated_at: '2021-09-01 00:00:00'
                    }
                ]
            }
        ],
        status: '',
        is_owner: false,
        category: 'REFFERENCE'
    },
]

const subordinate_data = [
]

const refference_data = [
]

export default function Risk() {

    const selectedYear = 2021;
    const selectedPeriodId = 1;

    return (
        <Box>
            {/* <Box
                sx={{
                    marginY: 1
                }}
            >
                <Box
                    flex={1}
                    flexDirection={'row'}
                    display={'flex'}
                    justifyContent={'space-between'}
                >
                    <Box
                        flex={1}
                        flexDirection={'row'}
                        display={'flex'}
                        justifyContent={'flex-start'}
                        gap={1}
                    >
                        <TabComponent
                            label="Risk"
                            isActive={true}
                        />
                        <TabComponent
                            label="Risk Champion View"
                        />
                        <TabComponent
                            label="Other Risk Register"
                        />
                    </Box>
                    <Box
                        flex={1}
                        display={'flex'}
                        justifyContent={'flex-end'}
                        flexDirection={'row'}
                    >
                        <Box>
                            Year :
                            <Select
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                            </Select>
                        </Box>
                        <Box>
                            Period:
                            <ToggleButtonGroup
                                value={0}
                            >
                                <ToggleButton value="Q1">Q1</ToggleButton>
                            </ToggleButtonGroup>
                        </Box>
                    </Box>
                </Box>
            </Box> */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1
                }}
            >
             
                {
                    // master_data.map((item, index) => {
                    //     return (
                    //         <CardListComponent
                    //             outline={item.category === 'OWNER' ? true : false}
                    //             sx={{
                    //                 backgroundColor: item.category === 'SUBORDINATE' ? '#32BCAD' : item.category === 'REFFERENCE' ? '#FFCB05' : '#FFFFFF'
                    //             }}>
                    //             <Grid item key={index}>
                    //                 <Typography
                    //                     sx={{
                    //                         fontWeight: 'bold',
                    //                         color: '#555555'
                    //                     }}
                    //                 >
                    //                     Risk Owner : {item.risk_owner}
                    //                 </Typography>
                    //                 {
                    //                     /* if is_owner is true then add card component */
                    //                     item.is_owner && (
                    //                         <ObjectiveWrapperComponent>
                    //                             <Grid container item xs={4} alignItems="center">
                    //                                 <FormText
                    //                                     label="Objective"
                    //                                     value="Objective 1"
                    //                                     labelPosition="left"
                    //                                 />
                    //                             </Grid>
                    //                             <Grid item xs={1} textAlign="center" alignItems="center">
                    //                                 <KeyboardArrowDown
                    //                                     sx={{
                    //                                         borderRadius: '50%',
                    //                                         backgroundColor: '#CCCCCC',
                    //                                         fontSize: '40px',
                    //                                         padding: 1
                    //                                     }}
                    //                                 />
                    //                             </Grid>
                    //                             <Grid container item xs={5}>
                    //                                 <Grid item xs={3}>
                    //                                     <Typography
                    //                                         sx={{
                    //                                             fontWeight: 'bold',
                    //                                             textAlign: 'center'
                    //                                         }}
                    //                                     >
                    //                                         Risk Indicator
                    //                                     </Typography>
                    //                                 </Grid>
                    //                                 <Grid item xs={3}>
                    //                                     <Typography
                    //                                         sx={{
                    //                                             fontWeight: 'bold',
                    //                                             textAlign: 'center'
                    //                                         }}
                    //                                     >
                    //                                         Risk Severity
                    //                                     </Typography>
                    //                                 </Grid>
                    //                                 <Grid item xs={3}>
                    //                                     <Typography
                    //                                         sx={{
                    //                                             fontWeight: 'bold',
                    //                                             textAlign: 'center'
                    //                                         }}
                    //                                     >
                    //                                         Treatment
                    //                                     </Typography>
                    //                                 </Grid>
                    //                                 <Grid item xs={3}>
                    //                                     <Typography
                    //                                         sx={{
                    //                                             fontWeight: 'bold',
                    //                                             textAlign: 'center'
                    //                                         }}
                    //                                     >
                    //                                         Status
                    //                                     </Typography>
                    //                                 </Grid>
                    //                             </Grid>
                    //                         </ObjectiveWrapperComponent>
                    //                     )
                    //                 }
                    //                 {
                    //                     // Map objectives
                    //                     item.objectives.map((objective, objectiveIndex) => {
                    //                         return (
                    //                             <ObjectiveWrapperComponent
                    //                                 showLineDivider={objectiveIndex === item.objectives.length - 1 ? false : true}
                    //                             >
                    //                                 {/* Header of Objective's Header */}
                    //                                 <Grid container item xs={12} sm={12} md={12} lg={12}>
                    //                                     <Grid container item xs={4} sx={{ paddingTop: '12px' }}>
                    //                                         <Grid item xs={3}>
                    //                                             Objective :
                    //                                         </Grid>
                    //                                         <Grid item xs={6}>
                    //                                             {objective.name}
                    //                                         </Grid>
                    //                                     </Grid>
                    //                                     <Grid item xs={1} textAlign="center" alignItems="center">
                    //                                         <KeyboardArrowDown
                    //                                             sx={{
                    //                                                 borderRadius: '50%',
                    //                                                 backgroundColor: '#CCCCCC',
                    //                                                 fontSize: '40px',
                    //                                                 padding: 1
                    //                                             }}
                    //                                         />
                    //                                     </Grid>
                    //                                     <Grid container item xs={5} sx={{ paddingTop: '12px' }}>
                    //                                         <Grid item xs={3}>
                    //                                             <Typography
                    //                                                 sx={{
                    //                                                     fontWeight: 'bold',
                    //                                                     textAlign: 'center'
                    //                                                 }}
                    //                                             >
                    //                                                 Risk Indicator
                    //                                             </Typography>
                    //                                         </Grid>
                    //                                         <Grid item xs={3}>
                    //                                             <Typography
                    //                                                 sx={{
                    //                                                     fontWeight: 'bold',
                    //                                                     textAlign: 'center'
                    //                                                 }}
                    //                                             >
                    //                                                 Risk Severity
                    //                                             </Typography>
                    //                                         </Grid>
                    //                                         <Grid item xs={3}>
                    //                                             <Typography
                    //                                                 sx={{
                    //                                                     fontWeight: 'bold',
                    //                                                     textAlign: 'center'
                    //                                                 }}
                    //                                             >
                    //                                                 Treatment
                    //                                             </Typography>
                    //                                         </Grid>
                    //                                         <Grid item xs={3}>
                    //                                             <Typography
                    //                                                 sx={{
                    //                                                     fontWeight: 'bold',
                    //                                                     textAlign: 'center'
                    //                                                 }}
                    //                                             >
                    //                                                 Status
                    //                                             </Typography>
                    //                                         </Grid>
                    //                                     </Grid>
                    //                                     <Grid container item xs={2}>
                    //                                     </Grid>
                    //                                 </Grid>
                    //                                 {/* End of Objective's Header */}
                    //                                 {/* Start of Risk */}
                    //                                 <>
                    //                                     {objective.risks.map((risk, index) => {
                    //                                         return (
                    //                                             <Grid container item xs={12} sm={12} md={12} lg={12} sx={{ paddingTop: '12px' }}>
                    //                                                 <Grid container item xs={4}>
                    //                                                     <Grid item xs={3}>
                    //                                                         Risk :
                    //                                                     </Grid>
                    //                                                     <Grid item xs={6}>
                    //                                                         {risk.name}
                    //                                                     </Grid>

                    //                                                     <Grid item xs={3} 
                    //                                                         sx={{
                    //                                                             display: 'flex',
                    //                                                             flexDirection: 'column',
                    //                                                             justifyItems: 'flex-end',
                    //                                                         }}
                    //                                                     >
                    //                                                         <ButtonBase
                    //                                                             sx={{
                    //                                                                 borderRadius: '100px',
                    //                                                                 paddingY: '5px',
                    //                                                                 paddingX: '10px',
                    //                                                                 borderWidth: '2px',
                    //                                                                 borderStyle: 'solid',
                    //                                                                 borderColor: item.is_owner ? '#000000' : '#FFFFFF',
                    //                                                                 color: item.is_owner ? '#000000' : '#FFFFFF',
                    //                                                                 fontWeight:  'bold'
                    //                                                             }}
                    //                                                         >COPY</ButtonBase>
                    //                                                         <ButtonBase
                    //                                                             sx={{
                    //                                                                 borderRadius: '100px',
                    //                                                                 paddingY: '5px',
                    //                                                                 paddingX: '10px',
                    //                                                                 borderWidth: '2px',
                    //                                                                 borderStyle: 'solid',
                    //                                                                 borderColor: item.is_owner ? '#000000' : '#FFFFFF',
                    //                                                                 color: item.is_owner ? '#000000' : '#FFFFFF',
                    //                                                                 fontWeight:  'bold',
                    //                                                                 marginTop: '5px'
                    //                                                             }}
                    //                                                         >MIGRATE</ButtonBase>
                    //                                                     </Grid>
                    //                                                 </Grid>
                    //                                                 <Grid item xs={1} textAlign="center" alignItems="center">
                    //                                                     -Risk
                    //                                                 </Grid>
                    //                                                 <Grid container item xs={5}>
                    //                                                     <Grid item xs={3}>
                    //                                                         <LabelComponent
                    //                                                             color={risk.risk_indicator.color}
                    //                                                             filled={false}
                    //                                                             font_color={risk.risk_indicator.font_color}
                    //                                                         >
                    //                                                             {risk.risk_indicator.label}
                    //                                                         </LabelComponent>
                    //                                                     </Grid>
                    //                                                     <Grid item xs={3}>
                    //                                                         <LabelComponent
                    //                                                             color={risk.risk_severity.color}
                    //                                                             filled={true}
                    //                                                             font_color={risk.risk_severity.font_color}
                    //                                                         >
                    //                                                             {risk.risk_severity.label}
                    //                                                         </LabelComponent>
                    //                                                     </Grid>
                    //                                                     <Grid item xs={3} justifyContent='center'>
                    //                                                         <Typography
                    //                                                             sx={{
                    //                                                                 fontWeight: 'bold',
                    //                                                                 textAlign: 'center'
                    //                                                             }}
                    //                                                         >
                    //                                                             {risk.treatment}
                    //                                                         </Typography>
                    //                                                         <Typography
                    //                                                             sx={{
                    //                                                                 fontSize: '12px',
                    //                                                                 fontWeight: 'bold',
                    //                                                                 textAlign: 'center'
                    //                                                             }}
                    //                                                         >
                    //                                                             {risk.treatment_percentage}%
                    //                                                         </Typography>
                    //                                                     </Grid>
                    //                                                     <Grid item xs={3}>
                    //                                                         <Typography
                    //                                                             sx={{
                    //                                                                 fontWeight: 'bold',
                    //                                                                 textAlign: 'center'
                    //                                                             }}
                    //                                                         >
                    //                                                             {risk.status}
                    //                                                         </Typography>
                    //                                                         {
                    //                                                             risk.status_updated_at && (
                    //                                                                 <Typography
                    //                                                                     sx={{
                    //                                                                         fontSize: '12px',
                    //                                                                         fontWeight: 'bold',
                    //                                                                         textAlign: 'center'
                    //                                                                     }}
                    //                                                                 >
                    //                                                                     {risk.status_updated_at}
                    //                                                                 </Typography>
                    //                                                             )
                    //                                                         }
                    //                                                     </Grid>
                    //                                                 </Grid>
                    //                                                 <Grid container item xs={2}>
                    //                                                     <Grid container>
                    //                                                         <Grid item xs={5}>
                    //                                                             <Button
                    //                                                                 variant="outlined"
                    //                                                                 sx={{
                    //                                                                     borderRadius: '100px',
                    //                                                                     maxHeight: '30px',
                    //                                                                     width: '100%',
                    //                                                                     color: item.is_owner ? '#000000' : '#FFFFFF',
                    //                                                                     borderColor: item.is_owner ? '#000000' : '#FFFFFF',
                    //                                                                 }}
                    //                                                             >Approve</Button>
                    //                                                         </Grid>
                    //                                                         <Grid item xs={2}/>
                    //                                                         <Grid item xs={5}>
                    //                                                             <Button
                    //                                                                 sx={{
                    //                                                                     borderRadius: '100px',
                    //                                                                     maxHeight: '30px',
                    //                                                                     width: '100%',
                    //                                                                     color: item.is_owner ? '#000000' : '#FFFFFF'
                    //                                                                 }}
                    //                                                             >Reject</Button>
                    //                                                         </Grid>
                    //                                                     </Grid>
                    //                                                     <Grid  container sx={{paddingTop: '5px'}}>
                    //                                                         <Grid item xs={12}>
                    //                                                             <Button
                    //                                                                 variant="outlined"
                    //                                                                 sx={{
                    //                                                                     borderRadius: '100px',
                    //                                                                     maxHeight: '30px',
                    //                                                                     width: '100%',
                    //                                                                     color: item.is_owner ? '#000000' : '#FFFFFF',
                    //                                                                     borderColor: item.is_owner ? '#000000' : '#FFFFFF',
                    //                                                                 }}
                    //                                                             >Unapprove</Button>
                    //                                                         </Grid>
                    //                                                     </Grid>

                    //                                                 </Grid>
                    //                                             </Grid>
                    //                                         )
                    //                                     })}
                    //                                 </>
                    //                                 {/* End of Risk */}
                    //                             </ObjectiveWrapperComponent>
                    //                         )
                    //                     })
                    //                 }
                    //             </Grid>
                    //         </CardListComponent>
                    //     )
                        
                    // })
                }

                {
                    // master_data.map((item, index) => {
                    //     return(
                    //         <ObjectiveForm
                    //             risk_owner={item.risk_owner}
                    //         />
                    //     )
                    // })

                    // <ObjectiveForm
                    //     risk_owner={owner_risk_data.risk_owner}
                    //     can_create={true}
                    //     objectives={owner_risk_data.objectives}
                    // />

                    
                    
                }

                <RiskOwner
                    risk_owner={owner_risk_data.risk_owner}
                    can_create={true}
                    objectives={owner_risk_data.objectives}
                    num_of_loss_events={owner_risk_data.num_of_loss_events}
                />

            </Box>
        </Box>
    )
}