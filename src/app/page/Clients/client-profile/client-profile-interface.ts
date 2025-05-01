export interface ClientProfile {
    clientId: number;
    user: {
      userId: number;
      username: string;
      emailId: string;
      role: {
        roleId: number;
        roleName: string;
      };
    };
    salesLead: {
      salesLeadId: number;
      dealName: string;
      dealStatus: string;
      proposedValue: number;
      closedValue: number;
      closedDate: string;
      lead: {
        leadId: number;
        leadStatus: string;
        leadsource: {
          leadSourceId: number;
          leadName: string;
          leadEmail: string;
          contactNo: string;
          companyName: string;
          companyAdd: string;
          sourceType: string;
          crmService: {
            serviceId: number;
            serviceName: string;
            description: string;
            price: number;
            durationInDays: number;
          };
        };
      };
    };
  }
  