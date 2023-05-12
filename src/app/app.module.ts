import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { FormularioModule } from './formulario/formulario.module';
import { UserstblComponent } from './tables/userstbl/userstbl.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { UpdateComponent } from './update/update.component';
import { UpdateModule } from './update/update.module';
import { FormgroupComponent } from './formulario/formgroup/formgroup.component';
import { GroupstblComponent } from './groupstbl/groupstbl.component';

registerLocaleData(en);

const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: 'userstbl',
    component: UserstblComponent,
  },
  {
    path: 'form',
    component: FormularioComponent,
  },
  {
    path: 'edituser/:userId',
    component: UpdateComponent,
  },
  {
    path: 'grupos',
    component: FormgroupComponent,
  },
  {
    path: 'groupstbl',
    component: GroupstblComponent,
  },
];

@NgModule({
  declarations: [AppComponent, UserstblComponent, GroupstblComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormularioModule,
    CommonModule,
    RouterModule.forRoot(routes),
    NzTableModule,
    UpdateModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
