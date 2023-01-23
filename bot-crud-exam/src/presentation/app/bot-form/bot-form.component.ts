import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BotModel } from 'src/domain/models/bot.model';
import { BotImplementationRepository } from 'src/data/repositories/bot/bot-implementation.repository';
import { BotEntity } from 'src/data/repositories/bot/entities/bot-entity';
import { BotDetailComponent } from '../bot-detail/bot-detail.component';
import { throws } from 'assert';
import { debug } from 'console';
import Swal from 'sweetalert2';
import { BotRegisterUseCase } from 'src/domain/usecases/bot-register.usecas';
import { BotUpdateUseCase } from 'src/domain/usecases/bot-update.usecase';

@Component({
  selector: 'app-bot-form',
  templateUrl: './bot-form.component.html',
  styleUrls: ['./bot-form.component.css']
})
export class BotFormComponent implements OnInit {

  bot!: BotEntity;
  editToggle: boolean = false;
  botForm!: FormGroup;
  activeOptions: boolean[] = [true, false];
  isActive: boolean = false;
  botId: string = '';


  @Input() botDetailComponent!: BotDetailComponent;

  constructor(private botRegisterUseCase: BotRegisterUseCase, private botUpdateUseCase: BotUpdateUseCase) { }

  ngOnInit(): void {
    this.editToggle = false;
    this.botId ="";
    this.botForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      active: new FormControl('', [])
    });
  }



  onSubmit() {
    if (this.botForm.valid) {
      this.bot = {
        name: this.botForm.value.name,
        type: this.botForm.value.type,
        status: this.botForm.value.status,
      }
      Swal.fire({
        title: 'Do you want to save the changes?',
        showCancelButton: true,
        confirmButtonText: 'Save Bot',
      }).then((result) => {
        if (result.isConfirmed) {
          console.log(this.bot);
          this.botRegisterUseCase.execute(this.bot).subscribe((botInfo: BotEntity) => {
            console.log('response', botInfo);
            if (botInfo) {
              this.botDetailComponent.botList.botDetails.push(botInfo);
              Swal.fire('Saved!', '', 'success');
            };
          })
         
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
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
      debugger
      this.botUpdateUseCase.execute( this.bot, this.botId).subscribe((botInfo: BotEntity) => {
        debugger
        console.log('response upd', botInfo);
        this.botDetailComponent.botList.updateBotList();
        this.editForm(false, {
          name: '',
          type: '',
          status: ''
        })
      })
    }
  }

  editForm(toggle: boolean, bot: BotEntity) {
    console.log(bot)
    this.editToggle = toggle;
    this.botId = bot._id!;
    this.chargeFormValues(bot);
  }


  chargeFormValues(bot: BotEntity) {
    this.botForm.get("name")?.setValue(bot.name);
    this.botForm.get("type")?.setValue(bot.type);
    this.botForm.get("status")?.setValue(bot.status);
    this.botForm.get("active")?.setValue(bot.active);
  }



}
