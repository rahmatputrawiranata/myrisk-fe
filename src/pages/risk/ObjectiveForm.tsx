import React, { useState } from "react"
import CardListComponent from "./components/CardListComponent"
import { Box, Button, ButtonBase, Container, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Typography } from "@mui/material"
import ObjectiveWrapperComponent from "./components/ObjectiveWrapperComponent";
import { FormText } from "../../components";
import { Delete, KeyboardArrowDownRounded, KeyboardArrowUpRounded } from "@mui/icons-material";
import FormSelect from "../../components/FormSelect";
import FormTextArea from "../../components/FormTextArea";
import FormAutoComplete from "../../components/FormAutoComplete";
import { DatePicker } from "@mui/x-date-pickers";
import Form from "../../components/Form";

interface ObjectiveFormProp {
    risk_owner?: string;
    category?: string;
}

const RiskDetailRow = ({
    component,
    q1,
    q2,
    q3,
    q4,
    sxComponent,
    sxQ1,
    sxQ2,
    sxQ3,
    sxQ4,
}: {
    component?: React.ReactNode;
    q1?: React.ReactNode;
    q2?: React.ReactNode;
    q3?: React.ReactNode;
    q4?: React.ReactNode;
    sxComponent?: React.CSSProperties;
    sxQ1?: React.CSSProperties;
    sxQ2?: React.CSSProperties;
    sxQ3?: React.CSSProperties;
    sxQ4?: React.CSSProperties;
}): JSX.Element => {

    const defaultSxQ = {
        borderLeft: '1px solid #CCCCCC',
        minHeight: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    return (
        <Grid container>
            <Grid container item xs={10} sx={{ ...sxComponent }}>
                {component}
            </Grid>
            <Grid container item xs={2}>
                <Grid
                    item
                    xs={3}
                    sx={{
                        ...defaultSxQ,
                        ...sxQ1
                    }}>
                    {q1}
                </Grid>
                <Grid
                    item
                    xs={3}
                    sx={{
                        ...defaultSxQ,
                        ...sxQ2
                    }}>
                    {q2}
                </Grid>
                <Grid
                    item
                    xs={3}
                    sx={{
                        ...defaultSxQ,
                        ...sxQ3
                    }}>
                    {q3}
                </Grid>
                <Grid
                    item
                    xs={3}
                    sx={{
                        ...defaultSxQ,
                        ...sxQ4
                    }}>
                    {q4}
                </Grid>
            </Grid>
        </Grid>
    )
}

const RiskDetailLayout = ({
    children
}: { children?: React.ReactNode }): JSX.Element => {

    return (
        <Box
            sx={{
                border: '1px solid #CCCCCC',
                borderRadius: '5px',
            }}
        >
            {children}
        </Box>
    )

}

export const ObjectiveForm = ({
    risk_owner,
    category = 'OWNER'
}: ObjectiveFormProp) => {

    const [isOpen, setIsOpen] = useState<boolean>(true)
    const riskIndicatorItems = [
        { label: 'High', value: 'high' },
        { label: 'Medium', value: 'medium' },
        { label: 'Low', value: 'low' },
    ]

    const perceivedCauses = []

    const hashTags = [
        {
            label: '#OperatinalRisk',
            value: 'operational_risk'
        },
        {
            label: '#Risk',
            value: 'risk'
        },
        {
            label: '#RiskManagement',
            value: 'risk_management'
        },
    ]

    // create member data with const subordinates with type array of object with value is number and label is  value - name
    const subordinates = [
        {
            label: '1 - John',
            value: 1
        },
        {
            label: '2 - Doe',
            value: 2
        },
        {
            label: '3 - Jane',
            value: 3
        },
    ]

    const [riskIndicator, setRiskIndicator] = useState<string>('high')
    return (
        <CardListComponent
            outline={true}
            sx={{
                backgroundColor: '#FFF'
            }}
        >
            <Grid container item xs={12}>
                <Grid item xs={12} sm={6}>
                    <Typography
                        sx={{
                            fontWeight: 'bold',
                            color: '#555555',
                        }}
                    >
                        Risk Owner : {risk_owner ? risk_owner : '-'}
                    </Typography>
                </Grid>
                {
                    isOpen && (
                        <Grid item xs={12} sm={6}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                            }}
                        >
                            <Typography
                                sx={{
                                    fontWeight: 'bold',
                                    color: '#FF0000'
                                }}
                            >
                                You have {2} loss  events
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: '#FF0000',
                                    color: '#FFFFFF',
                                    fontWeight: 'bold',
                                    fontSize: '12px',
                                    borderRadius: '100px',
                                }}
                            >
                                View
                            </Button>
                        </Grid>
                    )
                }

            </Grid>
            <ObjectiveWrapperComponent>
                <Grid container item xs={10} sm={9} md={4} alignItems='center'>
                    <FormText
                        label="Objective"
                        value=""
                        labelPosition="left"
                    />
                </Grid>
                <Grid container item xs={2} sm={3} md={1} alignItems="center" justifyContent="center">
                    <ButtonBase
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {
                            isOpen ? (
                                <KeyboardArrowUpRounded
                                    sx={{
                                        borderRadius: '50%',
                                        backgroundColor: '#CCCCCC',
                                        fontSize: '40px',
                                        padding: 1
                                    }}
                                />) : (
                                <KeyboardArrowDownRounded
                                    sx={{
                                        borderRadius: '50%',
                                        backgroundColor: '#CCCCCC',
                                        fontSize: '40px',
                                        padding: 1
                                    }}
                                />
                            )
                        }
                    </ButtonBase>
                </Grid>
                {
                    isOpen ? (
                        <Grid
                            container
                            item
                            xs={12}
                            sm={12}
                            md={7}
                        >
                            <Grid item xs={6}>
                                <FormText
                                    label="Achievement Target"
                                    value=""
                                    labelPosition="left"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <FormText
                                    label="Target Date"
                                    value=""
                                    labelPosition="left"
                                />
                            </Grid>
                        </Grid>
                    ) : (
                        <>
                            <Grid
                                container
                                item
                                xs={12}
                                sm={12}
                                md={5}
                            >
                                <Grid item xs={3}>
                                    <Typography
                                        sx={{
                                            fontWeight: 'bold',
                                            textAlign: 'center'
                                        }}
                                    >
                                        Risk Indicator
                                    </Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography
                                        sx={{
                                            fontWeight: 'bold',
                                            textAlign: 'center'
                                        }}
                                    >
                                        Risk Severity
                                    </Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography
                                        sx={{
                                            fontWeight: 'bold',
                                            textAlign: 'center'
                                        }}
                                    >
                                        Treatment
                                    </Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography
                                        sx={{
                                            fontWeight: 'bold',
                                            textAlign: 'center'
                                        }}
                                    >
                                        Status
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                item
                                xs={12}
                                sm={12}
                                md={2}
                            >
                            </Grid>
                        </>
                    )
                }
                {
                    isOpen && (
                        <Grid item xs={12}
                            sx={{
                                border: '1px solid #cacaca',
                                borderRadius: '5px',
                                padding: '10px',
                                marginY: '10px'
                            }}
                        >
                            <Grid container marginY={1}>
                                <Grid container item xs={8} paddingRight='10px'>
                                    <Grid container item xs={12} sx={{ paddingBottom: '10px' }}>
                                        <Grid
                                            item
                                            xs={8}
                                            paddingRight="10px">
                                            <FormText
                                                label="Risk"
                                                value=""
                                                labelPosition="left"

                                            />
                                        </Grid>
                                        <Grid item xs={4}
                                        >
                                            <FormSelect
                                                label="+/-"
                                                value={riskIndicator}
                                                labelPosition="left"
                                                items={riskIndicatorItems}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid container item xs={12}>
                                        <Grid item xs={8} paddingRight='10px'>
                                            <FormText
                                                label="Financial Exposure"
                                                value=""
                                                labelPosition="left"
                                            />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <FormSelect
                                                label="Category"
                                                value=""
                                                labelPosition="left"
                                                items={[
                                                    {
                                                        label: 'Category 1',
                                                        value: 'category_1'
                                                    },
                                                    {
                                                        label: 'Category 2',
                                                        value: 'category_2'
                                                    }
                                                ]}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid container item xs={3} sx={{
                                    alignContent: 'flex-start'
                                }}>
                                    <FormAutoComplete
                                        label="Risk Owner"
                                        value=""
                                        labelPosition="left"
                                        items={hashTags}
                                    />
                                </Grid>
                                <Grid container item xs={1} alignItems='flex-start' justifyContent='flex-end'>
                                    {
                                        false && (
                                            <ButtonBase>
                                                <Delete
                                                    fontSize="large"
                                                />
                                            </ButtonBase>
                                        )
                                    }
                                </Grid>
                            </Grid>
                            <RiskDetailLayout>
                                {/* Perceived Cause Section */}
                                <>
                                    {/* Header */}
                                    <RiskDetailRow
                                        component={
                                            <>
                                                <Grid container alignItems='center'>
                                                    <Grid item xs={5}>
                                                        <Typography
                                                            fontWeight="bold"
                                                            color="#000"
                                                            fontSize="12px"
                                                            textAlign="center"
                                                        >
                                                            Perceived Cause (PIC)
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Typography
                                                            fontWeight="bold"
                                                            color="#000"
                                                            fontSize="12px"
                                                            textAlign="center"
                                                        >
                                                            Notify To
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={1}>
                                                        <Typography
                                                            fontWeight="bold"
                                                            color="#000"
                                                            fontSize="12px"
                                                            textAlign="center"
                                                        >
                                                            Indicator
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Typography
                                                            fontWeight="bold"
                                                            color="#000"
                                                            fontSize="12px"
                                                            textAlign="center"
                                                        >
                                                            Justification
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </>
                                        }
                                        q1="Q1"
                                        q2="Q2"
                                        q3="Q3"
                                        q4="Q4"
                                        sxQ1={{

                                            borderBottom: '1px solid #CCCCCC',
                                        }}
                                        sxQ2={{

                                            borderBottom: '1px solid #CCCCCC',
                                        }}
                                        sxQ3={{

                                            borderBottom: '1px solid #CCCCCC',
                                        }}
                                        sxQ4={{

                                            borderBottom: '1px solid #CCCCCC',
                                        }}
                                    />
                                    {/* Body Data */}
                                    <RiskDetailRow
                                        component={
                                            <>
                                                <Grid container alignItems='center' sx={{ padding: '10px' }}>
                                                    <Grid item
                                                        xs={5}
                                                        sx={{
                                                            display: 'flex',
                                                            flexDirection: 'row',
                                                            alignItems: 'center',
                                                            paddingRight: '10px'
                                                        }}>
                                                        <FormText
                                                            labelPosition="none"
                                                        />
                                                        <Box
                                                            sx={{
                                                                padding: '2px',
                                                                paddingLeft: '15px'
                                                            }}
                                                        >
                                                            {
                                                                false && (
                                                                    <ButtonBase>
                                                                        <Delete
                                                                            sx={{
                                                                                color: '#FF0000'
                                                                            }}
                                                                        />
                                                                    </ButtonBase>
                                                                )
                                                            }
                                                        </Box>

                                                    </Grid>
                                                    <Grid item xs={3} sx={{ paddingRight: '10px' }}>
                                                        <Typography
                                                            fontWeight="bold"
                                                            color="#000"
                                                            fontSize="12px"
                                                            textAlign="center"
                                                        >
                                                            <FormAutoComplete
                                                                value=""
                                                                labelPosition="none"
                                                                items={subordinates}
                                                            />
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={2} sx={{ paddingRight: '10px' }}>
                                                        <FormSelect
                                                            items={
                                                                [
                                                                    {
                                                                        value: 'danger',
                                                                        label: 'Danger'
                                                                    },
                                                                    {
                                                                        value: 'neutral',
                                                                        label: 'Neutral'
                                                                    },
                                                                    {
                                                                        value: 'safe',
                                                                        label: 'Safe'
                                                                    }
                                                                ]
                                                            }
                                                        />
                                                    </Grid>
                                                    <Grid item xs={2}>
                                                        <FormText />
                                                    </Grid>
                                                </Grid>
                                            </>
                                        }
                                        q1={
                                            <Box
                                                sx={{
                                                    borderRadius: '100px',
                                                    backgroundColor: 'red',
                                                    width: '20px',
                                                    height: '20px',
                                                }}
                                            />
                                        }
                                        q2=""
                                        q3=""
                                        q4=""
                                    />
                                </>
                                {/* Inherent RIsk Score */}
                                <>
                                    <RiskDetailRow
                                        sxComponent={{
                                            borderTop: '1px solid #CCCCCC'
                                        }}
                                        component={
                                            <Grid container sx={{ padding: '10px' }}>
                                                <Grid container item xs={12}>
                                                    <Grid item xs={8}>
                                                    </Grid>
                                                    <Grid container item xs={4}>
                                                        <Grid item xs={4}>
                                                            <Typography
                                                                fontWeight="bold"
                                                                color="#000"
                                                                fontSize="12px"
                                                                textAlign="center"
                                                            >
                                                                Likelihood
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <Typography
                                                                fontWeight="bold"
                                                                color="#000"
                                                                fontSize="12px"
                                                                textAlign="center"
                                                            >
                                                                Impact
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <Typography
                                                                fontWeight="bold"
                                                                color="#000"
                                                                fontSize="12px"
                                                                textAlign="center"
                                                            >
                                                                Severity
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid container item xs={12}>
                                                    <Grid item xs={8} sx={{
                                                        paddingRight: '10px',
                                                        alignItems: 'center',
                                                        display: 'flex',
                                                        justifyContent: 'flex-end'
                                                    }}>
                                                        <Typography
                                                            fontWeight="bold"
                                                            color="#000"
                                                            fontSize="12px"
                                                        >
                                                            Inherent Risk Score :
                                                        </Typography>
                                                    </Grid>
                                                    <Grid container item xs={4}>
                                                        <Grid item xs={4} sx={{ paddingRight: '10px' }}>
                                                            <FormText />
                                                        </Grid>
                                                        <Grid item xs={4} sx={{ paddingRight: '10px' }}>
                                                            <FormText />
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <FormText />
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>}

                                    />
                                </>
                                {/* End Inherent Risk Score Section */}
                                {/* Existing Mitigation Section */}
                                <>
                                    {/* Header */}
                                    <RiskDetailRow
                                        sxComponent={{
                                            borderTop: '1px solid #CCCCCC'
                                        }}
                                        component={
                                            <>
                                                <Grid container alignItems='center'>
                                                    <Grid item xs={5}>
                                                        <Typography
                                                            fontWeight="bold"
                                                            color="#000"
                                                            fontSize="12px"
                                                            textAlign="center"
                                                        >Existing Mitigation</Typography>
                                                    </Grid>
                                                    <Grid item xs={2}>
                                                        <Typography
                                                            fontWeight="bold"
                                                            color="#000"
                                                            fontSize="12px"
                                                            textAlign="center"
                                                        >Related PC</Typography>
                                                    </Grid>
                                                    <Grid item xs={1}>
                                                        <Typography
                                                            fontWeight="bold"
                                                            color="#000"
                                                            fontSize="12px"
                                                            textAlign="center"
                                                        >Preventive</Typography>
                                                    </Grid>
                                                    <Grid item xs={1}>
                                                        <Typography
                                                            fontWeight="bold"
                                                            color="#000"
                                                            fontSize="12px"
                                                            textAlign="center"
                                                        >Corrective</Typography>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Typography
                                                            fontWeight="bold"
                                                            color="#000"
                                                            fontSize="12px"
                                                            textAlign="center"
                                                        >Effectiveness</Typography>
                                                    </Grid>
                                                </Grid>
                                            </>
                                        }
                                        sxQ1={{

                                            borderTop: '1px solid #CCCCCC',
                                        }}
                                        sxQ2={{

                                            borderTop: '1px solid #CCCCCC',
                                        }}
                                        sxQ3={{

                                            borderTop: '1px solid #CCCCCC',
                                        }}
                                        sxQ4={{

                                            borderTop: '1px solid #CCCCCC',
                                        }}
                                    />
                                    {/* Body Data */}
                                    <RiskDetailRow
                                        component={
                                            <>
                                                <Grid container alignItems='center' sx={{ padding: '10px' }}>
                                                    <Grid item
                                                        xs={5}
                                                        sx={{
                                                            display: 'flex',
                                                            flexDirection: 'row',
                                                            alignItems: 'center',
                                                            paddingRight: '10px'
                                                        }}>
                                                        <FormText
                                                            labelPosition="none"
                                                        />
                                                        <Box
                                                            sx={{
                                                                padding: '2px',
                                                                paddingLeft: '15px'
                                                            }}
                                                        >
                                                            {
                                                                false && (
                                                                    <ButtonBase>
                                                                        <Delete
                                                                            sx={{
                                                                                color: '#FF0000'
                                                                            }}
                                                                        />
                                                                    </ButtonBase>
                                                                )
                                                            }
                                                        </Box>
                                                    </Grid>
                                                    <Grid item xs={2} sx={{ paddingRight: '10px' }}>
                                                        <FormText
                                                            value=""
                                                            labelPosition="none"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={1} sx={{ paddingRight: '10px' }}>
                                                        <FormSelect
                                                            items={[
                                                                {
                                                                    value: true,
                                                                    label: 'YES'
                                                                },
                                                                {
                                                                    value: false,
                                                                    label: 'NO'
                                                                }
                                                            ]}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={1} sx={{ paddingRight: '10px' }}>
                                                        <FormSelect
                                                            items={[
                                                                {
                                                                    value: true,
                                                                    label: 'YES'
                                                                },
                                                                {
                                                                    value: false,
                                                                    label: 'NO'
                                                                }
                                                            ]}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={3} sx={{ paddingRight: '10px' }}>
                                                        <FormText
                                                            value=""
                                                            labelPosition="none"
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </>
                                        }
                                    />
                                </>
                                {/* End Existing Mitigation Section */}
                                {/* Start Of Teatment Section */}
                                <>
                                    <RiskDetailRow
                                        sxComponent={{
                                            borderTop: '1px solid #CCCCCC'
                                        }}
                                        component={
                                            <>
                                                <Grid container alignItems='center' justifyContent='right'>
                                                    <Grid container item xs={8} justifyContent='flex-end'>
                                                        <Grid item>
                                                            <Box>
                                                                Select Treatment :
                                                                <Box
                                                                    sx={{
                                                                        display: 'inline-block',
                                                                    }}
                                                                >
                                                                    <FormControl>
                                                                        <RadioGroup
                                                                            row
                                                                            name="treatment"
                                                                        >
                                                                            <FormControlLabel
                                                                                value="mitigate"
                                                                                label="Mitigate"
                                                                                control={<Radio />}
                                                                            />
                                                                            <FormControlLabel
                                                                                value="transfer"
                                                                                label="Transfer"
                                                                                control={<Radio />}
                                                                            />
                                                                            <FormControlLabel
                                                                                value="accept"
                                                                                label="Accept"
                                                                                control={<Radio />}
                                                                            />
                                                                            <FormControlLabel
                                                                                value="avoid"
                                                                                label="Avoid"
                                                                                control={<Radio />}
                                                                            />
                                                                        </RadioGroup>
                                                                    </FormControl>
                                                                </Box>
                                                            </Box>
                                                            <Box>
                                                                <Grid container>
                                                                    {/* Header */}
                                                                    <Grid container item>
                                                                        <Grid item xs={3}>
                                                                        </Grid>
                                                                        <Grid item xs={3}>
                                                                            <Typography
                                                                                fontWeight="bold"
                                                                                color="#000"
                                                                                fontSize="12px"
                                                                                textAlign="center"
                                                                            >
                                                                                Likelihood
                                                                            </Typography>
                                                                        </Grid>
                                                                        <Grid item xs={3}>
                                                                            <Typography
                                                                                fontWeight="bold"
                                                                                color="#000"
                                                                                fontSize="12px"
                                                                                textAlign="center"
                                                                            >
                                                                                Impact
                                                                            </Typography>
                                                                        </Grid>
                                                                        <Grid item xs={3}>
                                                                            <Typography
                                                                                fontWeight="bold"
                                                                                color="#000"
                                                                                fontSize="12px"
                                                                                textAlign="center"
                                                                            >
                                                                                Severity
                                                                            </Typography>
                                                                        </Grid>
                                                                    </Grid>
                                                                    <Grid container item alignItems='center' sx={{ paddingY: '10px' }}>
                                                                        <Grid item xs={3} sx={{ paddingRight: '10px' }}>
                                                                            <Typography
                                                                                fontWeight="bold"
                                                                                color="#000"
                                                                                fontSize="12px"
                                                                                textAlign="right"
                                                                            >
                                                                                Target Risk Score :
                                                                            </Typography>
                                                                        </Grid>
                                                                        <Grid item xs={3} sx={{ paddingRight: '10px' }}>
                                                                            <FormText />
                                                                        </Grid>
                                                                        <Grid item xs={3} sx={{ paddingRight: '10px' }}>
                                                                            <FormText />
                                                                        </Grid>
                                                                        <Grid item xs={3} sx={{ paddingRight: '10px' }}>
                                                                            <FormText />
                                                                        </Grid>
                                                                    </Grid>
                                                                    <Grid container item alignItems='center' sx={{ paddingY: '10px' }}>
                                                                        <Grid item xs={3} sx={{ paddingRight: '10px' }}>
                                                                            <Typography
                                                                                fontWeight="bold"
                                                                                color="#000"
                                                                                fontSize="12px"
                                                                                textAlign='right'
                                                                            >
                                                                                Current Risk Score :
                                                                            </Typography>
                                                                        </Grid>
                                                                        <Grid item xs={3} sx={{ paddingRight: '10px' }}>
                                                                            <FormText />
                                                                        </Grid>
                                                                        <Grid item xs={3} sx={{ paddingRight: '10px' }}>
                                                                            <FormText />
                                                                        </Grid>
                                                                        <Grid item xs={3} sx={{ paddingRight: '10px' }}>
                                                                            <FormText />
                                                                        </Grid>
                                                                    </Grid>
                                                                </Grid>
                                                            </Box>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </>
                                        }
                                    />
                                </>
                                {/* End Of Treatment Section */}
                                {/* Mitigation Plan Section */}
                                <>
                                    {/* Header */}
                                    <RiskDetailRow
                                        sxComponent={{
                                            borderTop: '1px solid #CCCCCC'
                                        }}
                                        component={
                                            <>
                                                <Grid container alignItems='center'>
                                                    <Grid item xs={3}>
                                                        <Typography
                                                            fontWeight="bold"
                                                            color="#000"
                                                            fontSize="12px"
                                                            textAlign="center"
                                                        >
                                                            Mitigation Plan
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={2}>
                                                        <Typography
                                                            fontWeight="bold"
                                                            color="#000"
                                                            fontSize="12px"
                                                            textAlign="center"
                                                        >
                                                            Cost (IDR)
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={1}>
                                                        <Typography
                                                            fontWeight="bold"
                                                            color="#000"
                                                            fontSize="12px"
                                                            textAlign="center"
                                                        >
                                                            PIC
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={2}>
                                                        <Typography
                                                            fontWeight="bold"
                                                            color="#000"
                                                            fontSize="12px"
                                                            textAlign="center"
                                                        >
                                                            Related PC
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={1}>
                                                        <Typography
                                                            fontWeight="bold"
                                                            color="#000"
                                                            fontSize="12px"
                                                            textAlign="center"
                                                        >
                                                            Preventive
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={1}>
                                                        <Typography
                                                            fontWeight="bold"
                                                            color="#000"
                                                            fontSize="12px"
                                                            textAlign="center"
                                                        >
                                                            Corrective
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={1}>
                                                        <Typography
                                                            fontWeight="bold"
                                                            color="#000"
                                                            fontSize="12px"
                                                            textAlign="center"
                                                        >
                                                            Target Date
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={1}>
                                                        <Typography
                                                            fontWeight="bold"
                                                            color="#000"
                                                            fontSize="12px"
                                                            textAlign="center"
                                                        >
                                                            Progress
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </>
                                        }
                                        sxQ1={{

                                            borderTop: '1px solid #CCCCCC',
                                        }}
                                        sxQ2={{

                                            borderTop: '1px solid #CCCCCC',
                                        }}
                                        sxQ3={{

                                            borderTop: '1px solid #CCCCCC',
                                        }}
                                        sxQ4={{

                                            borderTop: '1px solid #CCCCCC',
                                        }}
                                    />
                                    {/* Body Data */}
                                    <RiskDetailRow
                                        component={
                                            <>
                                                <Grid container alignItems='center' sx={{ padding: '10px' }}>
                                                    <Grid item
                                                        xs={3}
                                                        sx={{
                                                            display: 'flex',
                                                            flexDirection: 'row',
                                                            alignItems: 'center',
                                                            paddingRight: '10px'
                                                        }}>
                                                        <FormText
                                                            labelPosition="none"
                                                        />
                                                        <Box
                                                            sx={{
                                                                padding: '2px',
                                                                paddingLeft: '15px'
                                                            }}
                                                        >
                                                            {
                                                                false && (
                                                                    <ButtonBase>
                                                                        <Delete
                                                                            sx={{
                                                                                color: '#FF0000'
                                                                            }}
                                                                        />
                                                                    </ButtonBase>
                                                                )
                                                            }
                                                        </Box>

                                                    </Grid>
                                                    <Grid item xs={2} sx={{ paddingRight: '10px' }}>
                                                        <FormText
                                                            value=""
                                                            labelPosition="none"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={1} sx={{ paddingRight: '10px' }}>
                                                        <FormText
                                                            value=""
                                                            labelPosition="none"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={2} sx={{ paddingRight: '10px' }}>
                                                        <FormText
                                                            value=""
                                                            labelPosition="none"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={1} sx={{ paddingRight: '10px' }}>
                                                        <FormSelect
                                                            items={[
                                                                {
                                                                    value: true,
                                                                    label: 'YES'
                                                                },
                                                                {
                                                                    value: false,
                                                                    label: 'NO'
                                                                }
                                                            ]}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={1} sx={{ paddingRight: '10px' }}>
                                                        <FormSelect
                                                            items={[
                                                                {
                                                                    value: true,
                                                                    label: 'YES'
                                                                },
                                                                {
                                                                    value: false,
                                                                    label: 'NO'
                                                                }
                                                            ]}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={1} sx={{ paddingRight: '10px' }}>
                                                        <DatePicker
                                                            slotProps={{
                                                                textField: { size: 'small' }
                                                            }}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={1}>
                                                        <Box
                                                            display="flex"
                                                            flexDirection="row"
                                                            alignItems="center"
                                                        >
                                                            <FormText
                                                                sx={{
                                                                    paddingRight: '5px'
                                                                }}
                                                            />
                                                            %
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </>
                                        }
                                        q1=""
                                        q2=""
                                        q3=""
                                        q4=""
                                    />
                                </>
                                {/* End Mitigation Plan Section */}
                            </RiskDetailLayout>
                        </Grid>
                    )
                }
            </ObjectiveWrapperComponent>

        </CardListComponent>
    )

}