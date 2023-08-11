import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';
import { AboutUsRoutingModule } from './about-us-routing.module';



@NgModule({
  declarations: [
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule
  ],
  exports:[
    AboutUsComponent
  ]
})
export class AboutUsModule { }
