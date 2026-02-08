import { Component, Input } from '@angular/core';
import { ZardCardComponent } from "../card";
import { ZardIcon, ZardIconComponent } from "../icon";

@Component({
  selector: 'app-action-card',
  imports: [ZardCardComponent, ZardIconComponent],
  templateUrl: './action-card.html',
  styleUrl: './action-card.css',
})
export class ActionCard {

  @Input() data: string | undefined;
  @Input() details: string | undefined
  @Input() icon: ZardIcon | undefined;
  @Input() action: () => void | undefined = () => { }

}
