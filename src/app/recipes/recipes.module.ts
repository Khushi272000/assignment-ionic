import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RecipesPage } from './recipes.page';
import { RecipesPageRoutingModule } from './recipes-routing.module';

const routes: Routes = [
  {
    path: '',
    component: RecipesPage
  }
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipesPageRoutingModule
  ],
  declarations: [RecipesPage]
})
export class RecipesPageModule {}