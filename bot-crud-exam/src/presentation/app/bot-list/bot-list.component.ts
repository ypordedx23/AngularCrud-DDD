import { Component, Input, OnInit } from '@angular/core';
import { BotImplementationRepository } from 'src/data/repositories/bot/bot-implementation.repository';
import { BotEntity } from 'src/data/repositories/bot/entities/bot-entity';
import { BotModel } from 'src/domain/models/bot.model';
import { BotDetailComponent } from '../bot-detail/bot-detail.component';

@Component({
  selector: 'app-bot-list',
  templateUrl: './bot-list.component.html',
  styleUrls: ['./bot-list.component.css']
})
export class BotListComponent implements OnInit {
  botDetails!: BotEntity[] ;
  displayedColumns: string[] = ['id', 'name', 'type', 'status', 'created at', 'options'];
  index!: number;

  @Input() botDetailComponent!: BotDetailComponent;
  
  constructor(private botService: BotImplementationRepository) { }

  ngOnInit(): void {
    this.updateBotList();
  }

  enableEditMode(bot: BotEntity){
    this.botDetailComponent.botForm.editForm(true,bot);
  }

  updateBotList(){
    this.botService.getBots().subscribe((botsInfo: BotEntity[])=>{
      console.log('response',botsInfo);
      this.botDetails = botsInfo;
      console.log(this.botDetails)
    })
  }

  deleteBot(bot:BotEntity){
    this.index = this.botDetails.indexOf(bot);
    this.botService.deleteBotById(bot._id!).subscribe((botsInfo: BotEntity)=>{
      console.log('response',botsInfo);
      this.updateBotList();
    })
  }

}
