import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'projects', component: ProjectsComponent },
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'notfound', component: NotfoundComponent },
  { path: '**', redirectTo: '/notfound', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
