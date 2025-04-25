import { Lead } from "../../Leads/leads/lead-interface";

export interface SalesLeadInterface {
    salesLeadId: number;
    lead: Lead;  // This will be the source lead data
    leadStatus: string;
    timeStamp: string;
    proposedValue: number;
    proposedDate: string | null;
}
