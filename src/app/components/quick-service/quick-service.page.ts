import { Component, OnInit } from '@angular/core';

import { addIcons } from 'ionicons';
import { chevronForward, listCircle } from 'ionicons/icons';


@Component({
  selector: 'app-quick-service',
  templateUrl: './quick-service.page.html',
  styleUrls: ['./quick-service.page.scss'],
})
export class QuickServicePage {

  constructor() {
    addIcons({ chevronForward, listCircle });
  }

}


