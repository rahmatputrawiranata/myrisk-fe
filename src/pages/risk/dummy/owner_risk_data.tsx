import { RiskOwnerType } from "../type";

export const owner_risk_data: RiskOwnerType = {
    risk_owner: 'Objective 1',
    num_of_loss_events: 2,
    objectives: [
        {
            name: 'Objective 1',
            achievement_target: '100%',
            target_date: new Date(),
            risks: [
                {
                    name: 'Risk 1',
                    risk_indicator: {
                        color: '#FF0000',
                        name: 'HIGH',
                        label: 'High',
                        font_color: '#FFFFFF',
                    },
                    risk_severity: {
                        color: '#FF0000',
                        font_color: '#FFFFFF',
                        name: 'HIGH',
                        label: 'High',
                    },
                    treatment: 'Mitigate',
                    treatment_percentage: 50,
                    status: 'Finalized',
                    status_updated_at: new Date('2021-10-10 10:10:10'),
                },
                {
                    name: 'Risk 2',
                    risk_indicator: {
                        color: '#FF0000',
                        name: 'HIGH',
                        label: 'High',
                        font_color: '#FFFFFF',
                    },
                    risk_severity: {
                        color: '#FF0000',
                        font_color: '#FFFFFF',
                        name: 'HIGH',
                        label: 'High',
                    },
                    treatment: 'Mitigate',
                    treatment_percentage: 50,
                    status: 'Finalized',
                    status_updated_at: new Date('2021-10-10 10:10:10'),
                }
            ]
        }
    ]
}