import { SharedModule } from './../../shared/shared.module';
import { AsComponent } from './../../modules/as/as.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './../../modules/dashboard/dashboard.component';
import { DefaultComponent } from './default.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
	declarations: [DefaultComponent, DashboardComponent, AsComponent],
	imports: [CommonModule, RouterModule, SharedModule, MatSidenavModule, MatDividerModule]
})
export class DefaultModule {}
