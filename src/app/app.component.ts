import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { UserComponent } from './user/user.component';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { FormComponent } from './form/form.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterOutlet,  RouterLink, UserComponent, DashboardComponent, FormComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'admindash';
    ngOnInit(): void {
    initFlowbite();
  }
}

// import { Component } from '@angular/core';
// 
// 
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent  {
//   title = 'web-app';


// }

