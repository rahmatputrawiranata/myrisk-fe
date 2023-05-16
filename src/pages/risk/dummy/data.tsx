type RiskType = {
    risk_owner: string;
    loss_events: number;
    objectives: {
        name: string;
        achievement_target: string;
        target_date: Date;
        risks: {
            name: string;
            financial_exporsure: number;
            category: string;
            hashtags: string[];
            perceived_causes: {
                name: string;
                notify_to: string;
                indicator: string;
                justification: string;
            }[],
            
        }[]
    }[]
}

const owner_data_response = {
    response: true,
    message: 'Success',
    resp_data: {
        page: 1,
        limit: 10,
        data: [
            {
                risk_owner: 'Objective 1',
                objectives: [
                    {
                        name: 'Objective 1',
                        achievement_target: '100%',
                        target_date: '2021-10-10 00:00:00',
                    }
                ]
            }
        ]
    }
}