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
import { Router } from '@angular/router';

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

  constructor(private botRegisterUseCase: BotRegisterUseCase,
     private botUpdateUseCase: BotUpdateUseCase,
     private route: Router) { }

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
              this.route.navigateByUrl('/botDetail/botList')
              Swal.fire('Saved!', '', 'success');
            };
          })
         
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
    }
  }


  chargeFormValues(bot: BotEntity) {
    this.botForm.get("name")?.setValue(bot.name);
    this.botForm.get("type")?.setValue(bot.type);
    this.botForm.get("status")?.setValue(bot.status);
    this.botForm.get("active")?.setValue(bot.active);
  }



}
