import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TimeAgoPipe} from 'time-ago-pipe';

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
  ],
  declarations: [
      LayoutComponent,
      HeaderComponent,
      SidebarComponent,
      ContentComponent,
      TimeAgoPipe
  ],
  exports: [
      LayoutComponent
  ]
})
export class UiModule { }
