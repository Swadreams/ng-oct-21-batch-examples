import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './components/binding/binding.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { CardComponent } from './components/card/card.component';
import { DateComponent } from './components/date/date.component';
import { ContainerComponent } from './components/container/container.component';

@NgModule({
  declarations: [AppComponent, BindingComponent, ParentComponent, ChildComponent, CardComponent, DateComponent, ContainerComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
