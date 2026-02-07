import { Component } from '@angular/core';
import { LayoutComponent, HeaderComponent, ContentComponent, FooterComponent, SidebarComponent, SidebarGroupComponent, SidebarGroupLabelComponent } from "@/shared/components/layout";
import { ZardIcon, ZardIconComponent } from "@/shared/components/icon";
import { NavigationEnd, Router, RouterOutlet, RouterLinkWithHref } from "@angular/router";
import { SidebarSection } from '../types/app';
import { ZardButtonComponent } from "@/shared/components/button";
import { ZardDropdownImports, ZardDropdownMenuContentComponent, ZardDropdownMenuItemComponent } from "@/shared/components/dropdown";
import { ZardMenuImports, ZardMenuLabelComponent, ZardMenuShortcutComponent } from "@/shared/components/menu";
import { filter } from 'rxjs';

@Component({
  selector: 'app-layout',
  imports: [LayoutComponent, HeaderComponent, ZardIconComponent, ContentComponent, FooterComponent, RouterOutlet, SidebarComponent, SidebarGroupComponent, SidebarGroupLabelComponent, ZardButtonComponent, ZardDropdownImports, ZardMenuImports, RouterLinkWithHref],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

  currentRouteUrl: string = '';

  data: SidebarSection[] = [
    {
      id: 's1',
      menuTitle: 'Menu',
      items: [
        {
          id: 'i1',
          icon: "layout-dashboard" as ZardIcon,
          label: "Dashboard",
          path: "/dashboard"
        },
        {
          id: 'i2',
          icon: "users" as ZardIcon,
          label: "Customers",
          path: "/customers"
        },
        {
          id: 'i3',
          icon: "dollar-sign" as ZardIcon,
          label: "Finance",
          path: "/finance"
        }
      ]
    }
  ]


  constructor(private router: Router) {
    
    this.currentRouteUrl = this.router.url;
    console.log('Initial URL:', this.currentRouteUrl);

   
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentRouteUrl = event.url;
      console.log('Updated URL:', this.currentRouteUrl);
    });
  }

}
