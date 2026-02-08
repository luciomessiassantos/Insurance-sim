import { ZardButtonComponent } from '@/shared/components/button';
import { ZardCardComponent } from '@/shared/components/card';
import { ZardIdDirective } from '@/shared/core';
import { Component, Inject } from '@angular/core';
import { InfoCard } from "@/shared/components/info-card/info-card";
import { ActionCard } from "@/shared/components/action-card/action-card";
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [ZardCardComponent, ZardButtonComponent, ZardIdDirective, InfoCard, ActionCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  private router = Inject(Router);


  
}
