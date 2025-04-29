import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SalesLeadInterface } from '../../page/Deals/salesleads/sales-lead-interface'; // Adjust path if needed

@Injectable({
  providedIn: 'root'
})
export class SalesLeadsService {

  private apiUrl = 'http://localhost:8080/salesLeads/qualified'; // Adjust the base URL as per your environment settings
  private negotiationsUrl = 'http://localhost:8080/salesLeads/getNego'; // URL for fetching negotiations

  constructor(private http: HttpClient) {}

  // Change the return type to Observable<SalesLeadInterface[]>
  getQualifiedLeads(): Observable<SalesLeadInterface[]> {
    return this.http.get<SalesLeadInterface[]>(this.apiUrl);  // Fetch qualified leads from the API
  }

  sendEmailToLead(id: number, emailData: any): Observable<any> {
    return this.http.post(`http://localhost:8080/salesLeads/sendmail/${id}`, emailData);
  }


  getNegotiations(): Observable<SalesLeadInterface[]> {
    return this.http.get<SalesLeadInterface[]>(this.negotiationsUrl); // Fetch negotiations data from the new API
  }

  updateNegotiation(id: number, updatedData: SalesLeadInterface | any): Observable<any> {
    return this.http.put(`http://localhost:8080/salesLeads/updateNego/${id}`, updatedData);
  }

  getWonDeals(): Observable<SalesLeadInterface[]> {
    return this.http.get<SalesLeadInterface[]>('http://localhost:8080/salesLeads/wins');
  }


  
}

// 'http://localhost:8080/salesLeads/getNego


// @GetMapping("/getNego")
// public List<SalesLead> getNegotiations() {
//     return salesLeadService.getall().stream()
//             .filter(salesLead -> salesLead.getLead().getLeadStatus().equals(SalesLeadStatus.PROPOSED))  // Compare directly with the enum
//             .collect(Collectors.toList());  // Use collect() if you're on Java 8 or earlier
// }




// 'http://localhost:8080/salesLeads/updateNego/{id}

// @PutMapping("/updateNego/{id}")
// public ResponseEntity<String> update(@RequestBody SalesLead salesLead, @PathVariable int id) {
//     // Fetch the existing SalesLead from the database by id
//     Optional<SalesLead> existingSalesLead = salesLeadService.findbyId(id);

//     if (existingSalesLead.isPresent()) {
//         SalesLead l1 = existingSalesLead.get();

//         // Update fields
//         //deal name //
//         l1.setDealName(salesLead.getDealName());
//         l1.setClosedDate(salesLead.getClosedDate());
//         l1.setClosedValue(salesLead.getClosedValue());
//         l1.getLead().setLeadStatus(salesLead.getLead().getLeadStatus());

//         // Call service to save the updated SalesLead
//         salesLeadService.update(l1);

//         return ResponseEntity.ok("Sales Lead updated successfully!");
//     } else {
//         return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Sales Lead not found!");
//     }
// }


//http://localhost:8080/salesLeads/wins

// @GetMapping("/wins")
// public List<SalesLead> getDeals(){
//     return salesLeadService.getall().stream().filter(
//             salesLead -> salesLead.getDealStatus().equals(SalesLeadStatus.WON)
//     ).toList();
// }



