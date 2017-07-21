import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { AppComponent } from './app.component'; 
import { FormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { MainComponentComponent } from './main-component/main-component.component';
@NgModule({ 
	declarations: [ 
		AppComponent, HeaderComponentComponent, NavComponentComponent, MainComponentComponent
	], 
	imports: [
		BrowserModule,
		FormsModule, 
		HttpModule
	], 
	providers: [], 
	bootstrap: [AppComponent] 
}) 
export class AppModule { }