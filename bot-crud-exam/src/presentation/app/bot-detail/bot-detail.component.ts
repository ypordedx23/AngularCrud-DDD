import { Component, ViewChild, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BotModel } from 'src/domain/models/bot.model';
import { BotImplementationRepository } from 'src/data/repositories/bot/bot-implementation.repository';
import { Observable } from 'rxjs';
import { BotFormComponent } from '../bot-form/bot-form.component';
import { BotListComponent } from '../bot-list/bot-list.component';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';



@Component({
  selector: 'app-bot-detail',
  templateUrl: './bot-detail.component.html',
  styleUrls: ['./bot-detail.component.css']
})
export class BotDetailComponent implements OnInit {
  
  @ViewChild("botForm") botForm!: BotFormComponent;
  @ViewChild("botList") botList!: BotListComponent;

  @ViewChild(MatSidenav)
 sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver, private route: Router) {}

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }


  async ngOnInit() {
   
   
  }


  onLogout(){
    this.route.navigateByUrl('');
  }
}
