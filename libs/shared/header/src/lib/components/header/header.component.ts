import { Component} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'chat-app-fe-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  items!: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Chats',
        icon: 'pi pi-fw pi-comments',
        routerLink: 'chat'

      },
      {
        label:'Friends',
        icon:'pi pi-fw pi-users',
        routerLink: 'friends'

      },

      {
        label:'Profile',
        icon:'pi pi-fw pi-user',
        routerLink: 'profile'

      },
      {
        label:'Logout',
        icon:'pi pi-fw pi-power-off',
        routerLink: 'auth'
      }
    ];
  }
}
