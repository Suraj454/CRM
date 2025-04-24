export interface Lead {
    leadId: number,
    leadName:string,
    sourceType:string,
    // description:string,
    crmService:{
        serviceName:string | any
    },
    contactNo: string,
    companyName: string,
    companyAdd: string,
    leadEmail: string,
    leadStatus: string,
    leadSourceId: number,
    timeDate: string,
}
