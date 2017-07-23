import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { AppComponent } from './app.component'; 
import { FormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http';
import { HumanComponent } from './human/human.component';
import { SupersaiyanComponent } from './supersaiyan/supersaiyan.component';
import { SupersaiyantwoComponent } from './supersaiyantwo/supersaiyantwo.component';
import { SupersaiyanthreeComponent } from './supersaiyanthree/supersaiyanthree.component';
import { SupersaiyanfourComponent } from './supersaiyanfour/supersaiyanfour.component';
import { SaiyanComponent } from './saiyan/saiyan.component';
@NgModule({ 
	declarations: [ 
		AppComponent, HumanComponent, SupersaiyanComponent, SupersaiyantwoComponent, SupersaiyanthreeComponent, SupersaiyanfourComponent, SaiyanComponent
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