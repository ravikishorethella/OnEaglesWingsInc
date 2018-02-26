import {ContactUsModel} from "./contact-us.model";
import {Component, Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ContactUsService{
    constructor(private http: HttpClient){

    }

    postContactUSForm(contactUSModel: ContactUsModel){
        const headers = new Headers({'Content-Type':'text/plain'});
        return this.http.post('http://localhost:3000/contact-us',contactUSModel,
            {headers:headers,responseType:'text'})
            .map((response: Response) => {
            return response;
            })
            .catch((error: Response) => {
            console.log(error);
            Observable.throw(error.json())
            });
    }
}