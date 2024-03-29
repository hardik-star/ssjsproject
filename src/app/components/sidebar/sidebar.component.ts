import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    // { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
     { path: '/Receipt/0/0', title: 'Receipt',  icon:'ni-planet text-blue', class: '' },
     { path: '/DisplayReceipt', title: 'Display Receipt',  icon:'ni-planet text-blue', class: '' },
    // { path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-orange', class: '' },
    // { path: '/user-profile', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '' },

  
    { path: '/user-registration/0', title: 'Add User',  icon:'ni-circle-08 text-pink', class: '' },
    { path: '/user', title: 'Display User',  icon:'ni-circle-08 text-pink', class: '' },
   
    { path: '/Entity/0', title: 'Add Entity',  icon:'ni-key-25 text-info', class: '' },
    { path: '/DisplayEntity', title: 'Display Entity',  icon:'ni-key-25 text-info', class: '' },

    { path: '/member/0', title: 'Add Member',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/Displaymember', title: 'Display Member', icon:'ni-bullet-list-67 text-red', class: '' },
  
  
];


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
