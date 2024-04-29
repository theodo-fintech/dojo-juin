import { Component, OnInit } from '@angular/core';
import {UserService} from "../home/services/user.service";
import {of} from "rxjs";

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.scss']
})
export class InstructionComponent implements OnInit {

  userLevel = 1;
  isLoading = true;

  templateMap = new Map<number,string>();

  constructor(private userService: UserService) {
    this.templateMap.set(1, "<p>Je suis la consigne du niveau 1.</p>");
    this.templateMap.set(2, "<p>Je suis la consigne du niveau 2.</p>");
    this.templateMap.set(3, "<p>Je suis la consigne du niveau 3.</p>");
  }

  ngOnInit(): void {
    this.userService.getUserLevel().subscribe(userL => {
      this.userLevel = userL;
      this.isLoading = false;
    })
  }

}
