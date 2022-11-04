import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentServiceService {

  readonly API_URL = 'http://192.168.1.207:8089/ConsomiTN/rayon';

  constructor(private httpClient: HttpClient) { }

  getAllRayons() {
    return this.httpClient.get(`${this.API_URL}/retrieve-all-rayons`);
  }
  allProducts() {
    return this.httpClient.get(`${this.API_URL}/retrieve-all-products`);
  }
}
