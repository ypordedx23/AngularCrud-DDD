import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BotEntity } from 'src/data/repositories/bot/entities/bot-entity';
import { BotRegisterUseCase } from 'src/domain/usecases/bot-register.usecas';
import { BotSearchUseCase } from 'src/domain/usecases/bot-search.usecase';
import { BotUpdateUseCase } from 'src/domain/usecases/bot-update.usecase';
import Swal from 'sweetalert2';
import { BotDetailComponent } from '../bot-detail/bot-detail.component';

@Component({
  selector: 'app-bot-edit-form',
  templateUrl: './bot-edit-form.component.html',
  styleUrls: ['./bot-edit-form.component.css']
})
export class BotEditFormComponent implements OnInit {
  bot!: BotEntity;
  auxBot!: BotEntity;
  botForm!: FormGroup;
  searchBotForm!: FormGroup;
  activeOptions: boolean[] = [true, false];


  @Input() botDetailComponent!: BotDetailComponent;

  constructor(private route: Router, 
              private botUpdateUseCase: BotUpdateUseCase,
              private BotSearchUseCase: BotSearchUseCase
    ) { }

  ngOnInit(): void {
    this.searchBotForm = new FormGroup({
      search: new FormControl('',[Validators.required])
    });
    this.botForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      active: new FormControl('', [])
    });
  }
  
  searchBot(){
    if(this.searchBotForm.valid){
      this.auxBot = {
        _id: this.searchBotForm.value.search,
        name: this.botForm.value.name,
        type: this.botForm.value.type,
        status: this.botForm.value.status,
        active: Boolean(this.botForm.value.active)
      }
      debugger
      this.BotSearchUseCase.execute( this.auxBot, this.auxBot._id!).subscribe((botInfo: BotEntity) => {
       console.log('response upd', botInfo);
       this.chargeFormValues(botInfo);
        
      })
    }
  }

  editBot() {
    if (this.botForm.valid) {
      this.bot = {
        name: this.botForm.value.name,
        type: this.botForm.value.type,
        status: this.botForm.value.status,
        active: Boolean(this.botForm.value.active)
      }
      Swal.fire({
        title: 'Do you want to save the changes?',
        showCancelButton: true,
        confirmButtonText: 'Save Bot',
      }).then((result) => {
        if (result.isConfirmed) {
          console.log(this.bot);
          this.botUpdateUseCase.execute( this.bot, this.auxBot._id!).subscribe((botInfo: BotEntity) => {
            this.route.navigateByUrl('/botDetail/botList')
            Swal.fire('Saved!', '', 'success');
          })
         
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })



      
    }
  }

  editForm(toggle: boolean, bot: BotEntity) {
    console.log(bot)
    this.chargeFormValues(bot);
  }


  chargeFormValues(bot: BotEntity) {
    this.botForm.get("name")?.setValue(bot.name);
    this.botForm.get("type")?.setValue(bot.type);
    this.botForm.get("status")?.setValue(bot.status);
    this.botForm.get("active")?.setValue(bot.active);
  }


}
