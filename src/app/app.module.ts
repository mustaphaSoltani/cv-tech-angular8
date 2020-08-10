import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ColorComponent} from './color/color.component';
import {FilsComponent} from './fils/fils.component';
import {CvComponent} from './cvTech/cv/cv.component';
import {ListeCvComponent} from './cvTech/liste-cv/liste-cv.component';
import {ItemCvComponent} from './cvTech/item-cv/item-cv.component';
import {DetailCvComponent} from './cvTech/detail-cv/detail-cv.component';
import {StyleComponent} from './directive/style/style.component';
import {ClassComponent} from './directive/class/class.component';
import {HighlightDirective} from './directive/highlight.directive';
import {RainbowDirective} from './directive/rainbow.directive';
import {FormsModule} from '@angular/forms';
import {PremierService} from './premier.service';
import {EmbaucheComponent} from './cvTech/embauche/embauche.component';
import {ROUTING} from './app.routing';
import {HeaderComponent} from './header/header.component';
import {DetailComponent} from './cvTech/detail/detail.component';
import {AddCvComponent} from './cvTech/add-cv/add-cv.component';
import {DeleteCvComponent} from './cvTech/delete-cv/delete-cv.component';
import {ErrorComponent} from './error/error.component';
import {LoginComponent} from './login/login.component';
import {DefaultImagePipe} from './cvTech/default-image.pipe';
import {ObservableComponent} from './observable/observable.component';
import {HttpClientModule} from "@angular/common/http";
import {LoginInterceptorProvider} from "./loginInterceptor";
import {LoginGuard} from "./guard/loginGuard";
import {LogoutGaurd} from "./guard/logoutGaurd";
import { CvUpdateComponent } from './cvTech/cv-update/cv-update.component';
import {SearchComponent} from "./cvTech/search/search.component";

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    FilsComponent,
    CvComponent,
    ListeCvComponent,
    ItemCvComponent,
    DetailCvComponent,
    StyleComponent,
    ClassComponent,
    HighlightDirective,
    RainbowDirective,
    EmbaucheComponent,
    HeaderComponent,
    DetailComponent,
    AddCvComponent,
    DeleteCvComponent,
    ErrorComponent,
    LoginComponent,
    DefaultImagePipe,
    ObservableComponent,
    CvUpdateComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ROUTING
  ],
  providers: [PremierService,
    LoginInterceptorProvider,
    LoginGuard,
    LogoutGaurd
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
