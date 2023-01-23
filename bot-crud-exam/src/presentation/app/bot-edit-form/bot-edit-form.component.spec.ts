import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotEditFormComponent } from './bot-edit-form.component';

describe('BotEditFormComponent', () => {
  let component: BotEditFormComponent;
  let fixture: ComponentFixture<BotEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
