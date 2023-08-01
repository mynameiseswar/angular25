import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SbuttonComponent } from './sbutton/sbutton.component';
import { StableComponent } from './stable/stable.component';
import { UserListComponent } from './user-list/user-list.component';
import { ImageRenderComponent } from './image-render/image-render.component';
import { FormsModule } from '@angular/forms';
import { SqrootPipe } from './utils/sqroot.pipe';
import { PowerPipe } from './utils/power.pipe';
import { DisplayNamePipe } from './utils/display-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SbuttonComponent,
    StableComponent,
    UserListComponent,
    ImageRenderComponent,
    SqrootPipe,
    PowerPipe,
    DisplayNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
