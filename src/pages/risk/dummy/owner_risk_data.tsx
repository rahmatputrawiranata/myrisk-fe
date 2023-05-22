import { RiskOwnerType } from "../type";
import { hash_tags } from "./hash_tags";
import { risk_indicators } from "./risk_indicator";
import { risk_severities } from "./risk_severity";

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
                    name: 'Risk 1 Objective 1',
                    risk_indicator: risk_indicators.find((item) => item.name === 'DANGER'),
                    risk_severity: risk_severities.find((item) => item.name === 'HIGH'),
                    treatment: 'Mitigate',
                    treatment_percentage: 50,
                    status: 'Finalized',
                    status_updated_at: new Date('2021-10-10 10:10:10'),
                    hash_tags: hash_tags
                },
                {
                    name: 'Risk 2 Objective 1',
                    risk_indicator: risk_indicators.find((item) => item.name === 'NEUTRAL'),
                    risk_severity: risk_severities.find((item) => item.name === 'MEDIUM-HIGH'),
                    treatment: 'Mitigate',
                    treatment_percentage: 50,
                    status: 'Finalized',
                    status_updated_at: new Date('2021-10-10 10:10:10'),
                    hash_tags: hash_tags
                },
                {
                    name: 'Risk 3 Objective 1',
                    risk_indicator: risk_indicators.find((item) => item.name === 'SAFE'),
                    risk_severity: risk_severities.find((item) => item.name === 'MEDIUM'),
                    treatment: 'Mitigate',
                    treatment_percentage: 50,
                    status: 'Finalized',
                    status_updated_at: new Date('2021-10-10 10:10:10'),
                    hash_tags: hash_tags
                },
                {
                    name: 'Risk 4 Objective 1',
                    risk_indicator: risk_indicators.find((item) => item.name === 'SAFE'),
                    risk_severity: risk_severities.find((item) => item.name === 'MEDIUM-LOW'),
                    treatment: 'Mitigate',
                    treatment_percentage: 50,
                    status: 'Finalized',
                    status_updated_at: new Date('2021-10-10 10:10:10'),
                },
                {
                    name: 'Risk 4 Objective 1',
                    risk_indicator: risk_indicators.find((item) => item.name === 'SAFE'),
                    risk_severity: risk_severities.find((item) => item.name === 'LOW'),
                    treatment: 'Mitigate',
                    treatment_percentage: 50,
                    status: 'Finalized',
                    status_updated_at: new Date('2021-10-10 10:10:10'),
                    hash_tags: hash_tags
                },
            ]
        }
    ]
}