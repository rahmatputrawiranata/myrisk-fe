import React, { useState } from "react";
import {
    Box,
    Button,
    ButtonBase,
    FormControl,
    FormControlLabel,
    Grid,
    Radio,
    RadioGroup,
    Typography,
} from "@mui/material";
import ObjectiveWrapperComponent from "./components/ObjectiveWrapperComponent";
import { FormText } from "../../components";
import {
    Delete,
    KeyboardArrowDownRounded,
    KeyboardArrowUpRounded,
} from "@mui/icons-material";
import FormSelect from "../../components/FormSelect";
import FormAutoComplete from "../../components/FormAutoComplete";
import { DatePicker } from "@mui/x-date-pickers";
import { ObjectiveType } from "./type";
import FormDatePicker from "../../components/FormDatePicker";
import dayjs, { Dayjs } from "dayjs";
import LabelComponent from "./components/LabelComponent";
import { risk_indicators } from "./dummy/risk_indicator";

interface ObjectiveFormProp {
    risk_owner?: string;
    can_create?: boolean;
    mode: 'CREATE' | 'UPDATE' | 'VIEW';
    category?: 'OWNER' | 'SUBORDINATE' | 'NOTIFIED';
    can_edit?: boolean;
    objective?: ObjectiveType;
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
        borderLeft: "1px solid #CCCCCC",
        minHeight: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

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
                        ...sxQ1,
                    }}
                >
                    {q1}
                </Grid>
                <Grid
                    item
                    xs={3}
                    sx={{
                        ...defaultSxQ,
                        ...sxQ2,
                    }}
                >
                    {q2}
                </Grid>
                <Grid
                    item
                    xs={3}
                    sx={{
                        ...defaultSxQ,
                        ...sxQ3,
                    }}
                >
                    {q3}
                </Grid>
                <Grid
                    item
                    xs={3}
                    sx={{
                        ...defaultSxQ,
                        ...sxQ4,
                    }}
                >
                    {q4}
                </Grid>
            </Grid>
        </Grid>
    );
};

const RiskDetailLayout = ({
    children,
}: {
    children?: React.ReactNode;
}): JSX.Element => {
    return (
        <Box
            sx={{
                border: "1px solid #CCCCCC",
                borderRadius: "5px",
            }}
        >
            {children}
        </Box>
    );
};

export const ObjectiveForm = ({
    mode = 'CREATE',
    objective,
    category = "OWNER",
}: ObjectiveFormProp) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [objectiveData, setObjectiveData] = useState<ObjectiveType>(objective ?? {} as ObjectiveType)
    const [targetDate, setTargetDate] = useState<Dayjs | null>(dayjs(objectiveData.target_date))
    const riskIndicatorItems = [
        { label: "High", value: "high" },
        { label: "Medium", value: "medium" },
        { label: "Low", value: "low" },
    ];

    const perceivedCauses = [];

    const hashTags = [
        {
            label: "#OperatinalRisk",
            value: "operational_risk",
        },
        {
            label: "#Risk",
            value: "risk",
        },
        {
            label: "#RiskManagement",
            value: "risk_management",
        },
    ];

    // create member data with const subordinates with type array of object with value is number and label is  value - name
    const subordinates = [
        {
            label: "1 - John",
            value: 1,
        },
        {
            label: "2 - Doe",
            value: 2,
        },
        {
            label: "3 - Jane",
            value: 3,
        },
    ];

    const [riskIndicator, setRiskIndicator] = useState<string>("high");
    return (
        <ObjectiveWrapperComponent>

            {(() => {
                switch (mode) {
                    case 'CREATE':
                        return (
                            <>
                                <Grid container item xs={10} sm={9} md={4} alignItems="center">
                                    <Grid item xs={3} sx={{ paddingRight: '10px' }}>
                                        <Typography
                                            fontWeight="bold"
                                            color="#000"
                                            fontSize="14px"
                                            textAlign="right"
                                        >
                                            Objective :
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormText
                                            value={objectiveData?.name ?? ""}
                                            labelPosition="none"
                                            onChange={(val) => setObjectiveData({ ...objectiveData, name: val.target.value })}
                                        />
                                    </Grid>

                                </Grid>
                                <Grid
                                    container
                                    item
                                    xs={2}
                                    sm={3}
                                    md={1}
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <ButtonBase onClick={() => setIsOpen(!isOpen)}>
                                        {isOpen ? (
                                            <KeyboardArrowUpRounded
                                                sx={{
                                                    borderRadius: "50%",
                                                    backgroundColor: "#CCCCCC",
                                                    fontSize: "40px",
                                                    padding: 1,
                                                }}
                                            />
                                        ) : (
                                            <KeyboardArrowDownRounded
                                                sx={{
                                                    borderRadius: "50%",
                                                    backgroundColor: "#CCCCCC",
                                                    fontSize: "40px",
                                                    padding: 1,
                                                }}
                                            />
                                        )}
                                    </ButtonBase>
                                </Grid>
                            </>
                        )
                    default:
                        return (
                            <>
                                <Grid container item xs={10} sm={9} md={4} alignItems="center">
                                    {
                                        isOpen ? (
                                            <>
                                                <Grid item xs={3} sx={{ paddingRight: '10px' }}>
                                                    <Typography
                                                        fontWeight="bold"
                                                        color="#000"
                                                        fontSize="14px"
                                                        textAlign="right"
                                                    >
                                                        Objective :
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <FormText
                                                        value={objectiveData?.name ?? ""}
                                                        labelPosition="none"
                                                        onChange={(val) => setObjectiveData({ ...objectiveData, name: val.target.value })}
                                                    />
                                                </Grid>
                                            </>
                                        ) : (
                                            <>
                                                <Grid item xs={3} sx={{ paddingRight: '10px' }}>
                                                    <Typography
                                                        fontWeight="bold"
                                                        color="#000"
                                                        fontSize="14px"
                                                        textAlign="right"
                                                    >
                                                        Objective :
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Typography
                                                        fontWeight="bold"
                                                        color="#000"
                                                        fontSize="14px"
                                                        textAlign="left"
                                                    >
                                                        {objectiveData?.name ?? "-"}
                                                    </Typography>
                                                </Grid>
                                            </>
                                        )
                                    }
                                </Grid>
                                <Grid
                                    container
                                    item
                                    xs={2}
                                    sm={3}
                                    md={1}
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <ButtonBase onClick={() => setIsOpen(!isOpen)}>
                                        {isOpen ? (
                                            <KeyboardArrowUpRounded
                                                sx={{
                                                    borderRadius: "50%",
                                                    backgroundColor: "#CCCCCC",
                                                    fontSize: "40px",
                                                    padding: 1,
                                                }}
                                            />
                                        ) : (
                                            <KeyboardArrowDownRounded
                                                sx={{
                                                    borderRadius: "50%",
                                                    backgroundColor: "#CCCCCC",
                                                    fontSize: "40px",
                                                    padding: 1,
                                                }}
                                            />
                                        )}
                                    </ButtonBase>
                                </Grid>
                            </>
                        )
                }
            })()}
            {isOpen ? (
                <Grid container item xs={12} sm={12} md={7}>
                    <Grid item xs={5}>
                        <FormText
                            label="Achievement Target"
                            value={objectiveData.achievement_target}
                            onChange={(val) => setObjectiveData({ ...objectiveData, achievement_target: val.target.value })}
                            labelPosition="left"
                        />
                    </Grid>
                    <Grid item xs={5} sx={{ paddingLeft: '10px' }}>
                        <FormDatePicker
                            value={objectiveData.target_date ? dayjs(objectiveData.target_date) : null}
                            labelPosition="left"
                            label="Target Date"
                            onChange={(val) => setObjectiveData({ ...objectiveData, target_date: val?.toDate() ?? null })}
                        />
                    </Grid>
                    {
                        mode !== 'CREATE' && (
                            <Grid item xs={2} sx={{ paddingLeft: '10px' }}>
                                <ButtonBase>
                                    <Delete />
                                </ButtonBase>
                            </Grid>
                        )
                    }
                </Grid>
            ) : (
                <>
                    <Grid container item xs={12} sm={12} md={5}>
                        <Grid item xs={3}>
                            <Typography
                                sx={{
                                    fontWeight: "bold",
                                    textAlign: "center",
                                    fontSize: "14px",
                                }}
                            >
                                Risk Indicator
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography
                                sx={{
                                    fontWeight: "bold",
                                    textAlign: "center",
                                    fontSize: "14px",
                                }}
                            >
                                Risk Severity
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography
                                sx={{
                                    fontWeight: "bold",
                                    textAlign: "center",
                                    fontSize: "14px",
                                }}
                            >
                                Treatment
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography
                                sx={{
                                    fontWeight: "bold",
                                    textAlign: "center",
                                    fontSize: "14px",
                                }}
                            >
                                Status
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} sm={12} md={2}>
                        {/*  */}
                    </Grid>
                </>
            )}
            {/* Form */}
            {isOpen && (
                <Grid
                    item
                    xs={12}
                    sx={{
                        border: "1px solid #cacaca",
                        borderRadius: "5px",
                        padding: "10px",
                        marginY: "10px",
                    }}
                >
                    <Grid container marginY={1}>
                        <Grid container item xs={8} paddingRight="10px">
                            <Grid container item xs={12} sx={{ paddingBottom: "10px" }}>
                                <Grid item xs={8} paddingRight="10px">
                                    <FormText label="Risk" value="" labelPosition="left" />
                                </Grid>
                                <Grid item xs={4}>
                                    <FormSelect
                                        label="+/-"
                                        value={riskIndicator}
                                        labelPosition="left"
                                        items={riskIndicatorItems}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container item xs={12}>
                                <Grid item xs={8} paddingRight="10px">
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
                                                label: "Category 1",
                                                value: "category_1",
                                            },
                                            {
                                                label: "Category 2",
                                                value: "category_2",
                                            },
                                        ]}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            item
                            xs={3}
                            sx={{
                                alignContent: "flex-start",
                            }}
                        >
                            <FormAutoComplete
                                label="Risk Owner"
                                value=""
                                labelPosition="left"
                                items={hashTags}
                            />
                        </Grid>
                        <Grid
                            container
                            item
                            xs={1}
                            alignItems="flex-start"
                            justifyContent="flex-end"
                        >
                            {false && (
                                <ButtonBase>
                                    <Delete fontSize="large" />
                                </ButtonBase>
                            )}
                        </Grid>
                    </Grid>
                    <RiskDetailLayout>
                        {/* Perceived Cause Section */}
                        <>
                            {/* Header */}
                            <RiskDetailRow
                                component={
                                    <>
                                        <Grid container alignItems="center">
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
                                    borderBottom: "1px solid #CCCCCC",
                                }}
                                sxQ2={{
                                    borderBottom: "1px solid #CCCCCC",
                                }}
                                sxQ3={{
                                    borderBottom: "1px solid #CCCCCC",
                                }}
                                sxQ4={{
                                    borderBottom: "1px solid #CCCCCC",
                                }}
                            />
                            {/* Body Data */}
                            <RiskDetailRow
                                component={
                                    <>
                                        <Grid
                                            container
                                            alignItems="center"
                                            sx={{ padding: "10px" }}
                                        >
                                            <Grid
                                                item
                                                xs={5}
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    alignItems: "center",
                                                    paddingRight: "10px",
                                                }}
                                            >
                                                <FormText labelPosition="none" />
                                                <Box
                                                    sx={{
                                                        padding: "2px",
                                                        paddingLeft: "15px",
                                                    }}
                                                >
                                                    {false && (
                                                        <ButtonBase>
                                                            <Delete
                                                                sx={{
                                                                    color: "#FF0000",
                                                                }}
                                                            />
                                                        </ButtonBase>
                                                    )}
                                                </Box>
                                            </Grid>
                                            <Grid item xs={3} sx={{ paddingRight: "10px" }}>
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
                                            <Grid item xs={2} sx={{ paddingRight: "10px" }}>
                                                <FormSelect
                                                    items={risk_indicators.map((item) => ({ 
                                                        label: item.label,
                                                        value: item.name
                                                    }))}
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
                                            borderRadius: "100px",
                                            backgroundColor: "red",
                                            width: "20px",
                                            height: "20px",
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
                                    borderTop: "1px solid #CCCCCC",
                                }}
                                component={
                                    <Grid container sx={{ padding: "10px" }}>
                                        <Grid container item xs={12}>
                                            <Grid item xs={8}></Grid>
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
                                            <Grid
                                                item
                                                xs={8}
                                                sx={{
                                                    paddingRight: "10px",
                                                    alignItems: "center",
                                                    display: "flex",
                                                    justifyContent: "flex-end",
                                                }}
                                            >
                                                <Typography
                                                    fontWeight="bold"
                                                    color="#000"
                                                    fontSize="12px"
                                                >
                                                    Inherent Risk Score :
                                                </Typography>
                                            </Grid>
                                            <Grid container item xs={4}>
                                                <Grid item xs={4} sx={{ paddingRight: "10px" }}>
                                                    <FormText />
                                                </Grid>
                                                <Grid item xs={4} sx={{ paddingRight: "10px" }}>
                                                    <FormText />
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <FormText />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                }
                            />
                        </>
                        {/* End Inherent Risk Score Section */}
                        {/* Existing Mitigation Section */}
                        <>
                            {/* Header */}
                            <RiskDetailRow
                                sxComponent={{
                                    borderTop: "1px solid #CCCCCC",
                                }}
                                component={
                                    <>
                                        <Grid container alignItems="center">
                                            <Grid item xs={5}>
                                                <Typography
                                                    fontWeight="bold"
                                                    color="#000"
                                                    fontSize="12px"
                                                    textAlign="center"
                                                >
                                                    Existing Mitigation
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
                                            <Grid item xs={3}>
                                                <Typography
                                                    fontWeight="bold"
                                                    color="#000"
                                                    fontSize="12px"
                                                    textAlign="center"
                                                >
                                                    Effectiveness
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </>
                                }
                                sxQ1={{
                                    borderTop: "1px solid #CCCCCC",
                                }}
                                sxQ2={{
                                    borderTop: "1px solid #CCCCCC",
                                }}
                                sxQ3={{
                                    borderTop: "1px solid #CCCCCC",
                                }}
                                sxQ4={{
                                    borderTop: "1px solid #CCCCCC",
                                }}
                            />
                            {/* Body Data */}
                            <RiskDetailRow
                                component={
                                    <>
                                        <Grid
                                            container
                                            alignItems="center"
                                            sx={{ padding: "10px" }}
                                        >
                                            <Grid
                                                item
                                                xs={5}
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    alignItems: "center",
                                                    paddingRight: "10px",
                                                }}
                                            >
                                                <FormText labelPosition="none" />
                                                <Box
                                                    sx={{
                                                        padding: "2px",
                                                        paddingLeft: "15px",
                                                    }}
                                                >
                                                    {false && (
                                                        <ButtonBase>
                                                            <Delete
                                                                sx={{
                                                                    color: "#FF0000",
                                                                }}
                                                            />
                                                        </ButtonBase>
                                                    )}
                                                </Box>
                                            </Grid>
                                            <Grid item xs={2} sx={{ paddingRight: "10px" }}>
                                                <FormText value="" labelPosition="none" />
                                            </Grid>
                                            <Grid item xs={1} sx={{ paddingRight: "10px" }}>
                                                <FormSelect
                                                    items={[
                                                        {
                                                            value: true,
                                                            label: "YES",
                                                        },
                                                        {
                                                            value: false,
                                                            label: "NO",
                                                        },
                                                    ]}
                                                />
                                            </Grid>
                                            <Grid item xs={1} sx={{ paddingRight: "10px" }}>
                                                <FormSelect
                                                    items={[
                                                        {
                                                            value: true,
                                                            label: "YES",
                                                        },
                                                        {
                                                            value: false,
                                                            label: "NO",
                                                        },
                                                    ]}
                                                />
                                            </Grid>
                                            <Grid item xs={3} sx={{ paddingRight: "10px" }}>
                                                <FormText value="" labelPosition="none" />
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
                                    borderTop: "1px solid #CCCCCC",
                                }}
                                component={
                                    <>
                                        <Grid
                                            container
                                            alignItems="center"
                                            justifyContent="right"
                                        >
                                            <Grid container item xs={8} justifyContent="flex-end">
                                                <Grid item>
                                                    <Box>
                                                        Select Treatment :
                                                        <Box
                                                            sx={{
                                                                display: "inline-block",
                                                            }}
                                                        >
                                                            <FormControl>
                                                                <RadioGroup row name="treatment">
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
                                                                <Grid item xs={3}></Grid>
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
                                                            <Grid
                                                                container
                                                                item
                                                                alignItems="center"
                                                                sx={{ paddingY: "10px" }}
                                                            >
                                                                <Grid
                                                                    item
                                                                    xs={3}
                                                                    sx={{ paddingRight: "10px" }}
                                                                >
                                                                    <Typography
                                                                        fontWeight="bold"
                                                                        color="#000"
                                                                        fontSize="12px"
                                                                        textAlign="right"
                                                                    >
                                                                        Target Risk Score :
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid
                                                                    item
                                                                    xs={3}
                                                                    sx={{ paddingRight: "10px" }}
                                                                >
                                                                    <FormText />
                                                                </Grid>
                                                                <Grid
                                                                    item
                                                                    xs={3}
                                                                    sx={{ paddingRight: "10px" }}
                                                                >
                                                                    <FormText />
                                                                </Grid>
                                                                <Grid
                                                                    item
                                                                    xs={3}
                                                                    sx={{ paddingRight: "10px" }}
                                                                >
                                                                    <FormText />
                                                                </Grid>
                                                            </Grid>
                                                            <Grid
                                                                container
                                                                item
                                                                alignItems="center"
                                                                sx={{ paddingY: "10px" }}
                                                            >
                                                                <Grid
                                                                    item
                                                                    xs={3}
                                                                    sx={{ paddingRight: "10px" }}
                                                                >
                                                                    <Typography
                                                                        fontWeight="bold"
                                                                        color="#000"
                                                                        fontSize="12px"
                                                                        textAlign="right"
                                                                    >
                                                                        Current Risk Score :
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid
                                                                    item
                                                                    xs={3}
                                                                    sx={{ paddingRight: "10px" }}
                                                                >
                                                                    <FormText />
                                                                </Grid>
                                                                <Grid
                                                                    item
                                                                    xs={3}
                                                                    sx={{ paddingRight: "10px" }}
                                                                >
                                                                    <FormText />
                                                                </Grid>
                                                                <Grid
                                                                    item
                                                                    xs={3}
                                                                    sx={{ paddingRight: "10px" }}
                                                                >
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
                                    borderTop: "1px solid #CCCCCC",
                                }}
                                component={
                                    <>
                                        <Grid container alignItems="center">
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
                                    borderTop: "1px solid #CCCCCC",
                                }}
                                sxQ2={{
                                    borderTop: "1px solid #CCCCCC",
                                }}
                                sxQ3={{
                                    borderTop: "1px solid #CCCCCC",
                                }}
                                sxQ4={{
                                    borderTop: "1px solid #CCCCCC",
                                }}
                            />
                            {/* Body Data */}
                            <RiskDetailRow
                                component={
                                    <>
                                        <Grid
                                            container
                                            alignItems="center"
                                            sx={{ padding: "10px" }}
                                        >
                                            <Grid
                                                item
                                                xs={3}
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    alignItems: "center",
                                                    paddingRight: "10px",
                                                }}
                                            >
                                                <FormText labelPosition="none" />
                                                <Box
                                                    sx={{
                                                        padding: "2px",
                                                        paddingLeft: "15px",
                                                    }}
                                                >
                                                    {false && (
                                                        <ButtonBase>
                                                            <Delete
                                                                sx={{
                                                                    color: "#FF0000",
                                                                }}
                                                            />
                                                        </ButtonBase>
                                                    )}
                                                </Box>
                                            </Grid>
                                            <Grid item xs={2} sx={{ paddingRight: "10px" }}>
                                                <FormText value="" labelPosition="none" />
                                            </Grid>
                                            <Grid item xs={1} sx={{ paddingRight: "10px" }}>
                                                <FormText value="" labelPosition="none" />
                                            </Grid>
                                            <Grid item xs={2} sx={{ paddingRight: "10px" }}>
                                                <FormText value="" labelPosition="none" />
                                            </Grid>
                                            <Grid item xs={1} sx={{ paddingRight: "10px" }}>
                                                <FormSelect
                                                    items={[
                                                        {
                                                            value: true,
                                                            label: "YES",
                                                        },
                                                        {
                                                            value: false,
                                                            label: "NO",
                                                        },
                                                    ]}
                                                />
                                            </Grid>
                                            <Grid item xs={1} sx={{ paddingRight: "10px" }}>
                                                <FormSelect
                                                    items={[
                                                        {
                                                            value: true,
                                                            label: "YES",
                                                        },
                                                        {
                                                            value: false,
                                                            label: "NO",
                                                        },
                                                    ]}
                                                />
                                            </Grid>
                                            <Grid item xs={1} sx={{ paddingRight: "10px" }}>
                                                <DatePicker
                                                    slotProps={{
                                                        textField: { size: "small" },
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
                                                            paddingRight: "5px",
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
            )}

            {
                !isOpen && (
                    objectiveData?.risks?.map((risk, index) => {
                        return (
                            <Grid key={index} container item xs={12} sm={12} md={12} lg={12} sx={{ paddingTop: '12px' }}>
                                <Grid container item xs={4}>
                                    <Grid item xs={3} sx={{paddingRight: '10px'}}>
                                    <Typography
                                            fontWeight="bold"
                                            color="#000"
                                            fontSize="14px"
                                            textAlign="right"
                                        >
                                            Risk :
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        {risk.name}
                                    </Grid>
                                    <Grid item xs={3}
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyItems: 'flex-end',
                                        }}
                                    >
                                        <ButtonBase
                                            sx={{
                                                borderRadius: '100px',
                                                paddingY: '5px',
                                                paddingX: '10px',
                                                borderWidth: '2px',
                                                borderStyle: 'solid',
                                                borderColor: category === 'OWNER' ? '#000000' : '#FFFFFF',
                                                color: category === 'OWNER' ? '#000000' : '#FFFFFF',
                                                fontWeight: 'bold'
                                            }}
                                        >COPY</ButtonBase>
                                        <ButtonBase
                                            sx={{
                                                borderRadius: '100px',
                                                paddingY: '5px',
                                                paddingX: '10px',
                                                borderWidth: '2px',
                                                borderStyle: 'solid',
                                                borderColor: category === 'OWNER' ? '#000000' : '#FFFFFF',
                                                color: category === 'OWNER' ? '#000000' : '#FFFFFF',
                                                fontWeight: 'bold',
                                                marginTop: '5px'
                                            }}
                                        >MIGRATE</ButtonBase>
                                    </Grid>
                                </Grid>
                                <Grid item xs={1} textAlign="center" alignItems="center">
                                    -Risk
                                </Grid>
                                <Grid container item xs={5}>
                                    <Grid item xs={3}>
                                        {
                                            risk.risk_indicator && (
                                                <LabelComponent
                                                    color={risk.risk_indicator.color}
                                                    filled={false}
                                                    font_color={'#000'}
                                                >
                                                    {risk.risk_indicator.label}
                                                </LabelComponent>
                                            )
                                        }
                                    </Grid>
                                    <Grid item xs={3}>
                                        {
                                            risk.risk_severity && (
                                                <LabelComponent
                                                    color={risk.risk_severity.color}
                                                    filled={true}
                                                    font_color={'#FFF'}
                                                >
                                                    {risk.risk_severity.label}
                                                </LabelComponent>
                                            )
                                        }
                                    </Grid>
                                    <Grid item xs={3} justifyContent='center'>
                                        <Typography
                                            sx={{
                                                fontWeight: 'bold',
                                                textAlign: 'center'
                                            }}
                                        >
                                            {risk.treatment}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: '12px',
                                                fontWeight: 'bold',
                                                textAlign: 'center'
                                            }}
                                        >
                                            {risk.treatment_percentage}%
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography
                                            sx={{
                                                fontWeight: 'bold',
                                                textAlign: 'center'
                                            }}
                                        >
                                            {risk.status}
                                        </Typography>
                                        {
                                            risk.status_updated_at && (
                                                <Typography
                                                    sx={{
                                                        fontSize: '12px',
                                                        fontWeight: 'bold',
                                                        textAlign: 'center'
                                                    }}
                                                >
                                                    {dayjs(risk.status_updated_at).format('DD MMM YYYY')}
                                                </Typography>
                                            )
                                        }
                                    </Grid>
                                </Grid>
                                <Grid container item xs={2}>
                                    <Grid container>
                                        <Grid item xs={5}>
                                            <Button
                                                variant="outlined"
                                                sx={{
                                                    borderRadius: '100px',
                                                    maxHeight: '30px',
                                                    width: '100%',
                                                    color: category === 'OWNER' ? '#000000' : '#FFFFFF',
                                                    borderColor: category === 'OWNER' ? '#000000' : '#FFFFFF',
                                                }}
                                            >Approve</Button>
                                        </Grid>
                                        <Grid item xs={2} />
                                        <Grid item xs={5}>
                                            <Button
                                                sx={{
                                                    borderRadius: '100px',
                                                    maxHeight: '30px',
                                                    width: '100%',
                                                    color: category === 'OWNER' ? '#000000' : '#FFFFFF'
                                                }}
                                            >Reject</Button>
                                        </Grid>
                                    </Grid>
                                    <Grid container sx={{ paddingTop: '5px' }}>
                                        <Grid item xs={12}>
                                            <Button
                                                variant="outlined"
                                                sx={{
                                                    borderRadius: '100px',
                                                    maxHeight: '30px',
                                                    width: '100%',
                                                    color: category === 'OWNER' ? '#000000' : '#FFFFFF',
                                                    borderColor: category === 'OWNER' ? '#000000' : '#FFFFFF',
                                                }}
                                            >Unapprove</Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        )
                    })
                )
            }
        </ObjectiveWrapperComponent>
    );
};
