import {Route, RouterModule, Routes} from '@angular/router';
import {CvComponent} from './cvTech/cv/cv.component';
import {ColorComponent} from './color/color.component';
import {DetailComponent} from './cvTech/detail/detail.component';
import {DeleteCvComponent} from './cvTech/delete-cv/delete-cv.component';
import {AddCvComponent} from './cvTech/add-cv/add-cv.component';
import {ErrorComponent} from './error/error.component';
import {LoginComponent} from './login/login.component';
import {LoginGuard} from "./guard/loginGuard";
import {LogoutGaurd} from "./guard/logoutGaurd";
import {CvUpdateComponent} from "./cvTech/cv-update/cv-update.component";


const APP_ROUTING: Routes = [
  {path: 'cv', children: [
      {path: '', component: CvComponent},
      {path: 'delete/:id', component: DeleteCvComponent, canActivate: [LoginGuard]},
      {path: 'add', component: AddCvComponent, canActivate: [LoginGuard]},
      {path: 'cvUpdate/:id', component: CvUpdateComponent},
      {path: ':id', component: DetailComponent},

    ]},
  {path: '', component: CvComponent},
  {path: 'color/:default', component: ColorComponent},
  {path: 'color', component: ColorComponent},
  {path: 'login', component: LoginComponent, canActivate: [LogoutGaurd]},
  {path: '**', component: ErrorComponent},
];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);
