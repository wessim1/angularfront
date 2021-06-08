import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private headers = new HttpHeaders();
  private apiServerUrl=environment.apiBaseUrl;

  constructor(private httpClient: HttpClient) {
    this.headers.set('Content-Type', 'application/json; charset=utf-8');
  }

  /**
   * Creates a charge from a Stripe.js token
   * @param cardToken Token provided by Stripe.js
   * @param price The price of the item(s) you are selling
   * @param currency The currency
   * @param description A description of the item(s)
   */
  public createCharge(cardToken, price, currency, description) {
    const chargeRequest = {
      token: cardToken.id,
      price,
      description,
      currency
    };
    return this.httpClient.post(`${this.apiServerUrl}/charges`, chargeRequest, { headers: this.headers });
  }
}
