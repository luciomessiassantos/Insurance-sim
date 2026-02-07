import { Component, Input } from '@angular/core';
import { ZardCardComponent } from "../card";
import { ZardIcon, ZardIconComponent } from '../icon';

export type UpdateStatus = {
  status: 'positive' | 'neutral' | 'negative'
  data: string
  details: string
}

@Component({
  selector: 'app-info-card',
  imports: [ZardCardComponent, ZardIconComponent],
  templateUrl: './info-card.html',
  styleUrl: './info-card.css',
})
export class InfoCard {

  @Input() label: string | undefined;
  @Input() data: string | undefined;
  @Input() statusData: UpdateStatus | undefined;
  @Input() icon: ZardIcon | undefined;


}
