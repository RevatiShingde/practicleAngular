import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Organization } from './organization';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  getAllOrganizationUrl = "http://122.170.12.63:90/api/Organization/getAllOrganization";
  addOrganizationUrl = " http://122.170.12.63:90//api/Organization/addOrganization";
  constructor(private http : HttpClient) { }

  getAllOrganizations():Observable<Organization[]>{
    let httpHeaders = new HttpHeaders({
      'content-type' : 'application/json',
      'Authorization' : 'JWT Token'
    })
    return this.http.get<Organization[]>(this.getAllOrganizationUrl)
  }

  addOrganization(organization : Organization):Observable<Organization>{
    return this.http.post<Organization>(`${this.addOrganizationUrl}`,organization);
  }
}
