
import {Component, ViewChild} from "@angular/core";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.component.html',

    styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent{
    @ViewChild('f') contactUsForm: NgForm;
    onSubmit(){
        console.log(this.contactUsForm);
    }

}