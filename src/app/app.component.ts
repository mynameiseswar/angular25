import { Component, ElementRef, ViewChild } from "@angular/core";
import { IButton } from "./sbutton/sbutton.component";
import { UserList } from "./user-list/user-list.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  boxStaus: boolean = false;

  showBox() {
    this.boxStaus = true;
  }
  hideBox() {
    this.boxStaus = false;
  }

  showBox1() {
    this.boxStaus = !this.boxStaus;
  }

  userList: Array<UserList> = [
    {
      name: "Raju",
      address: "HYD"
    },
    {
      name: 'Siva',
      address: "Vizag"
    },
    {
      name: 'Venkat',
      address : "HYD"
    },
  ];

  selectedTargetBox: string = '';

  showSwitchBox(targetBox: string){
    console.log(targetBox);
    this.selectedTargetBox = targetBox;
  }
}
