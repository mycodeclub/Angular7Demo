Reference
https://www.youtube.com/watch?v=5wtnKulcquA

Need NODE and Angular Command Line
Following are the commands for different tasks.
1. npn install -g @angular/cli 	-	install Angular 
2. ng new ProjectName 			-	Create New Project
3. ng serve -o 					-	Host the project. First need to navigate to the project directory.
   . Some time defaut port [4200] is used by some other application. In that scenario use different port number to host your angular application with following commands
   . ng serve -o --port 4201 or any other avilable port number.
   
4. ng generate component ComponentName	-	Create new component 
 . ng g c ComponentName  - Sort version to create new component.

When ever we add new component it add 4 files { spec.ts, .scss, .html, .ts } and update app.model.ts 

5. After creating new components you need to apply routing to load different components.
	GoTo --> src/app/app-routing.module.ts || Define Individual root in Rooths array.
/**************************************************************************************************/
	import { HomeComponent } from './home/home.component';
	import { AboutComponent } from './about/about.component';
	import { ContactComponent } from './contact/contact.component';
	const routes: Routes = 
	[
		{ path: '', component: HomeComponent },
		{ path: 'about', component: AboutComponent },
		{ path: 'contact', component: ContactComponent },
	];
/**************************************************************************************************/
And refer same keyWord part ex: 'about, contact' as 'routerLink' insted of href
<a routerLink="/about">ABOUT</a>

============================================================================================================================
*********************************************** || Services (28:45) || *****************************************************
============================================================================================================================
 Services genrate the ( code/data ) at central location which can be accessable through several components.
	-	Command: ng generate service ServiceName or ng g s ServiceName
 To use the service in any component we need to do following steps
	  i.	Import the service to the component.
			- import { DataService } from '../data.service';

	 ii.	Add it to constructor
			-	  constructor(private data: DataService) { }

	iii.	We are good to go to use the service method in component.
	
	
 
============================================================================================================================
********************************** 32:00 min - Add Http Client model to communicate with API *******************************
============================================================================================================================
Angular comes with HttpLibrary - Used to communicate with services
In order to consume any service in you angular app you need to do following changes.
in src/app/app.module.ts 
 1. One time setting in project
		- import { HttpClientModule } from '@angular/common/http';
		- Add it to import array imports: [ HttpClientModule ]
 2. For every service which you need to make a call to Service
		- import { HttpClient } from '@angular/common/http';
		- Add method ||   GetUsers() { return this.http.get('https://reqres.in/api/users') }
 3. Use the service (data) in component
	- In ngOnInit() method. || Execute when component load.
		 ngOnInit() {    this.data.GetUsers().subscribe(data => { this.users = data; }); }








 		











====================================
Basic Component Structure

------------------------------------------------
import { Component } from '@angular/core'; /* Including packages like using in c#*/

@Component({                            
  selector: 'app-root',                /*   Selector Name is used to call this component in side existing HTML  */
  templateUrl: './app.component.html', /*   HTML code or path to HTML file for this component   */
  styleUrls: ['./app.component.scss']  /*   CSS code or path to CSS file for this component     */
})
export class AppComponent { /*Component Logic */
  title = 'ng7';
}

------------------------------------------------

When you create a component from comandLine it inclued following 4 files.
 . spec.ts 	/* 	For Testing */
 . scss  	/*	For specifict style rules for the specific component HTML */
 . html 	/* 	Hold the page designe */
 . ts 		/*	file hold the component logic */
 
 
==========================================================================================================================================================================

Nornal HTML   				    VS		      Angular HTML 
 
<a href="/about">About</a>					        <a routerLink="/about">ABOUT</a>

==========================================================================================================================================================================





Add a valiable in Component
  1. WebSiteName: string = 'Angular 7 Demo By Ankit'; || Same as TypeScript
  2. JsVariable = 'This Is Java Script Variable';    || Same As Normal Java Script
Refer in HTML : {{WebSiteName}} {{JsVariable}} 