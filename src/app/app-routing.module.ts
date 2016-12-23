import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversationComponent } from './conversation/conversation.component';
const routes: Routes = [
    { path: '', redirectTo: '/conversation', pathMatch: 'full' },
    { path: 'conversation', component: ConversationComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }