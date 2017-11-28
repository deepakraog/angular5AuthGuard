import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService{
	private isUserLoggedIn;
	private username;
	constructor(private http: Http){
        this.isUserLoggedIn = false;
	}
	getCustomerData(){
		return this.http.get('/api/data')
		.map(res=> res.json());
	}

      setUserLoggedIn(){
      	this.isUserLoggedIn = true;
      }
      getUserLoggedIn(){
      	return this.isUserLoggedIn;
      }
      setUser(user){
      	this.username = user;
      }
      getUser(){
      	return this.username;
      }

}
