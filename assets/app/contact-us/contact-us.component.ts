
import {Component, ViewChild} from "@angular/core";
import {NgForm} from "@angular/forms";
import {ContactUsService} from "./contact-us.service";
import {ContactUsModel} from "./contact-us.model";
import {AlertsService} from "angular-alert-module";

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.component.html',

    styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent{
    @ViewChild('f') contactUsForm: NgForm;

    constructor(private contactUsService: ContactUsService, private alerts: AlertsService){}

    onSubmit(){
        const contactUsModel = new ContactUsModel(
            this.contactUsForm.value.name,
            this.contactUsForm.value.email,
            this.contactUsForm.value.subject,
            this.contactUsForm.value.message);
        this.contactUsService.postContactUSForm(contactUsModel)
            .subscribe(
                data => this.alerts.setMessage(data,'success'),
                error => this.alerts.setMessage('Error occured!!!','error')
            );
        this.contactUsForm.resetForm();

    }

}