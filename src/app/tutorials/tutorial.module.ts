import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './components/create/create.component';
import { ReadComponent } from './components/read/read.component';

import {StoreModule, Store} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {reducer} from './state/tutorial.reducer';
import {TutorialEffects} from './state/tutorial.effects';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    StoreModule.forFeature('tutorials', reducer),
    EffectsModule.forFeature(
      [ TutorialEffects ]
    )
  ],
  exports: [
    CreateComponent,
    ReadComponent
  ],
  declarations: [CreateComponent, ReadComponent]
})
export class TutorialModule { }
