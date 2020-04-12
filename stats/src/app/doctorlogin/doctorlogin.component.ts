import { Component, OnInit } from "@angular/core";
import { DataServiceService } from "../services/data-service.service";
import { Router } from "@angular/router";
@Component({
    selector: "app-doctorlogin",
    templateUrl: "./doctorlogin.component.html",
    styleUrls: ["./doctorlogin.component.css"],
})
export class DoctorloginComponent implements OnInit {
    public email: string;
    public password: string;
    public errormessage;
    constructor(
        private dataservice: DataServiceService,
        private _router: Router
    ) {}

    ngOnInit() {}
    login(form) {
        console.log(form.value); // 1. Goes to AuthService function LoginUser
        this.dataservice.loginUser(form.value).subscribe(
            (res) => {
                console.log("Loggedin Sucessfully", res);
                localStorage.setItem("token", res.token);
                this._router.navigate(["/admin"]);
            },
            (error) =>
                console.log("Error while Logging in from adminlogin: ", error)
        );
    }
}
