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
                    name: 'Risk 1'
                },
                {
                    name: 'Risk 2'
                }
            ]
        }
    ]
}