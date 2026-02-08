import { Component, inject, Inject } from '@angular/core';
import { LayoutComponent, HeaderComponent, ContentComponent, FooterComponent, SidebarComponent, SidebarGroupComponent, SidebarGroupLabelComponent } from "@/shared/components/layout";
import { ZardIcon, ZardIconComponent } from "@/shared/components/icon";
import { NavigationEnd, Router, RouterOutlet, RouterLinkWithHref } from "@angular/router";
import { SidebarSection } from '../types/app';
import { ZardButtonComponent } from "@/shared/components/button";
import { ZardDropdownImports, ZardDropdownMenuContentComponent, ZardDropdownMenuItemComponent } from "@/shared/components/dropdown";
import { ZardMenuImports, ZardMenuLabelComponent, ZardMenuShortcutComponent } from "@/shared/components/menu";
import { filter } from 'rxjs';
import { ClipboardClock, DollarSign, FolderOpen, LayoutDashboard, LucideAngularComponent, LucideAngularModule, Users } from 'lucide-angular';
import { AuthStore } from '../auth/auth-store';

@Component({
  selector: 'app-layout',
  imports: [LayoutComponent, HeaderComponent, ZardIconComponent, ContentComponent, FooterComponent, RouterOutlet, SidebarComponent, SidebarGroupComponent, SidebarGroupLabelComponent, ZardButtonComponent, ZardDropdownImports, ZardMenuImports, RouterLinkWithHref, LucideAngularModule],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

  currentRouteUrl: string = '';
  authStore = inject(AuthStore);


  
  data: SidebarSection[] = [
    {
      id: 's1',
      menuTitle: 'Menu',
      items: [
        {
          id: 'i1',
          icon: LayoutDashboard,
          label: "Dashboard",
          path: "/dashboard"
        },
        {
          id: 'i2',
          icon: Users,
          label: "Customers",
          path: "/customers"
        },
        {
          id: 'i5',
          icon: ClipboardClock,
          label: "Policies",
          path: "/policies"
        },
        {
          id: 'i3',
          icon: DollarSign,
          label: "Finance",
          path: "/finance"
        },
        {
          id: 'i4',
          icon: FolderOpen,
          label: "Files",
          path: "/files"
        },
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
