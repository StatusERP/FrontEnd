import { AngularMaterialModule } from './../angular-material-modulo';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { TreeComponent } from './components/tree/tree.component';
@NgModule({
	declarations: [HeaderComponent, FooterComponent, SidebarComponent, TreeComponent],
	imports: [
		MatListModule,
		MatMenuModule,
		CommonModule,
		MatDividerModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		MatExpansionModule,
		FlexLayoutModule,
		AngularMaterialModule
	],
	exports: [HeaderComponent, FooterComponent, SidebarComponent]
})
export class SharedModule {}
