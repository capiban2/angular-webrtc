import { Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { AccountInterface } from "./auth.interface";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css",
})
export class LoginComponent {
  accountLoginForm: FormGroup = new FormGroup({
    name: new FormControl(""),
    password: new FormControl(""),
  });

  currentUser: AccountInterface;
  failed: boolean;
  constructor() {
    this.currentUser = {
      operator_name: "",
      key: "",
      uri: "",
      token: "",
      token_fire: "",
      access: 0,
    };
    this.failed = false;
  }
}
