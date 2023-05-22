import React from "react"
import CardListComponent from "./components/CardListComponent"
import { Button, Grid, Typography } from "@mui/material"
import { RiskOwnerType } from "./type"
import { ObjectiveForm } from "./ObjectiveForm"

const RiskOwner = (data: RiskOwnerType & {can_create: boolean}) => {

    const {
        risk_owner,
        num_of_loss_events,
        objectives,
        can_create
    } = data

    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <CardListComponent
            outline={true}
        >
            <Grid container item xs={12}>
                <Grid item xs={12} sm={6}>
                    <Typography
                        sx={{
                            fontWeight: "bold",
                            color: "#555555",
                        }}
                    >
                        Risk Owner : {risk_owner ? risk_owner : "-"}
                    </Typography>
                </Grid>
                {isOpen && (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                        }}
                    >
                        <Typography
                            sx={{
                                fontWeight: "bold",
                                color: "#FF0000",
                            }}
                        >
                            You have {num_of_loss_events} loss events
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: "#FF0000",
                                color: "#FFFFFF",
                                fontWeight: "bold",
                                fontSize: "12px",
                                borderRadius: "100px",
                            }}
                        >
                            View
                        </Button>
                    </Grid>
                )}
            </Grid>
            <Grid container item xs={12}>
                <ObjectiveForm
                    mode="CREATE"
                />
                {
                    objectives.map((objective, index) => (
                        <ObjectiveForm
                            key={index}
                            mode="UPDATE"
                            objective={objective}
                        />
                            
                    ))
                }
            </Grid>
        </CardListComponent>
    )
}

export default RiskOwner