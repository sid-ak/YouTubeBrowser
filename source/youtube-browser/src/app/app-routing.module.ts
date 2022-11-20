import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { VideoListComponent } from './components/video-list/video-list.component';
import { VideoComponent } from './components/video/video.component';

const routes: Routes = [
    { path: "", redirectTo: "video-list", pathMatch: "full" },
    { path: "video-list", component: VideoListComponent },
    { path: "video", component: VideoComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
