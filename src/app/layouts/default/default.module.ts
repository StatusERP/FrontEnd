import { HomePageComponent } from './../../modules/home/pages/home-page/home-page.component';
import { SharedModule } from './../../shared/shared.module';
import { AsComponent } from './../../modules/as/as.component';
import { RouterModule } from '@angular/router';

import { DefaultComponent } from './default.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
	declarations: [DefaultComponent, HomePageComponent, AsComponent],
	imports: [CommonModule, RouterModule, SharedModule, MatSidenavModule, MatDividerModule]
})
export class DefaultModule {}
