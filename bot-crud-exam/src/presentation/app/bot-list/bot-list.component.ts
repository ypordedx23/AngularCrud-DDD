import { Component, Inject, Input, OnInit } from '@angular/core';
import { BotEntity } from 'src/data/repositories/bot/entities/bot-entity';
import { BotDeleteUseCase } from 'src/domain/usecases/bot-delete.usecase';
import { BotListUseCase } from 'src/domain/usecases/bot-list.usecase';
import { BotDetailComponent } from '../bot-detail/bot-detail.component';


@Component({
  selector: 'app-bot-list',
  templateUrl: './bot-list.component.html',
  styleUrls: ['./bot-list.component.css']
})
export class BotListComponent implements OnInit {
  botDetails!: BotEntity[] ;
  displayedColumns: string[] = ['ID', 'NAME', 'TYPE', 'STATUS', 'CREATED AT', 'OPTIONS'];
  index!: number;

  @Input() botDetailComponent!: BotDetailComponent;
  
  constructor(private botListUseCase: BotListUseCase, 
              private botDeleteUseCase: BotDeleteUseCase,) {

   }

  ngOnInit(): void {
    this.updateBotList();
  }

  
  updateBotList(){
    this.botListUseCase.execute().subscribe((botsInfo: BotEntity[])=>{
      console.log('response',botsInfo);
      this.botDetails = botsInfo;
      console.log(this.botDetails)
    })
  }

  deleteBot(bot:BotEntity){
    this.index = this.botDetails.indexOf(bot);
    this.botDeleteUseCase.execute(bot._id!).subscribe((botsInfo: BotEntity)=>{
      console.log('response',botsInfo);
      this.updateBotList();
    })
  }

}
