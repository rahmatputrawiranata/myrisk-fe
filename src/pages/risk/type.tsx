export type RiskType = {
    name: string;
}

export type ObjectiveType = {
    name: string;
    achievement_target: string;
    target_date: Date;
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