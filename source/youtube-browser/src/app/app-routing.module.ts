import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { VideoComponent } from './components/video/video.component';

const routes: Routes = [];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
