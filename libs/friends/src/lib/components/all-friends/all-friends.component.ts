import {Component, OnInit} from '@angular/core';
import {FriendsApiService} from "../../services/friends-api..service";
import {User} from "@chat-app-fe/shared/services";

@Component({
  selector: 'chat-app-fe-all-friends',
  templateUrl: './all-friends.component.html',
  styleUrls: ['./all-friends.component.css'],
})
export class AllFriendsComponent implements OnInit {

  activeState: boolean[] = [true, false, false];
  users!: User[];

  constructor(private friendsService: FriendsApiService) {
  }

  ngOnInit() {
    this.friendsService.fetchAllFirends().subscribe(value => {
      console.log(value)
      this.users = value.users

    })
  }




// onTabClose(event) {
//   this.messageService.add({severity:'info', summary:'Tab Closed', detail: 'Index: ' + event.index})
// }
//
// onTabOpen(event) {
//   this.messageService.add({severity:'info', summary:'Tab Expanded', detail: 'Index: ' + event.index});
// }

}
