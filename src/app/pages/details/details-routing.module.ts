import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailsComponent } from "./details.component";

const routes: Routes = [
    {
        path: '',
        component: DetailsComponent,
        data: {title: 'Details - ServiceRequest'}
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DetailsRoutingModule {

}