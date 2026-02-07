import { ZardButtonComponent } from '@/shared/components/button';
import { ZardCardComponent } from '@/shared/components/card';
import { ZardIdDirective } from '@/shared/core';
import { Component } from '@angular/core';
import { InfoCard } from "@/shared/components/info-card/info-card";

@Component({
  selector: 'app-dashboard',
  imports: [ZardCardComponent, ZardButtonComponent, ZardIdDirective, InfoCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

}
