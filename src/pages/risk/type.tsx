export type RiskType = {
    name: string;
    risk_indicator?: RiskIndicatorType;
    risk_severity?: RiskSeverityType;
    treatment: string;
    treatment_percentage: number;
    status: string;
    status_updated_at: Date | null;
}

export type RiskIndicatorType = {
    color: string;
    name: string;
    label: string;
}

export type RiskSeverityType = {
    color: string;
    name: string;
    label: string;
}

export type ObjectiveType = {
    name?: string;
    achievement_target?: string;
    target_date?: Date | null;
    risks: RiskType[];
}

export type RiskOwnerType = {
    risk_owner: string;
    num_of_loss_events: number;
    objectives: ObjectiveType[]
}

export type ResponseApiType = {
    status: boolean;
    message: string;
    resp_data: unknown;
}