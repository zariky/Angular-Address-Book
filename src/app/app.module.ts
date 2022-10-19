import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { AvatarModule } from 'primeng/avatar';
import { SkeletonModule } from 'primeng/skeleton';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { DividerModule } from 'primeng/divider';
import { TooltipModule } from 'primeng/tooltip';

import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';

import { NamePipe } from './pipes/name.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserListSkeletonComponent } from './components/user-list-skeleton/user-list-skeleton.component';
import { UserDetailsSkeletonComponent } from './components/user-details-skeleton/user-details-skeleton.component';
import { AddressPipe } from './pipes/address.pipe';
import { MapComponent } from './components/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailsComponent,
    NamePipe,
    UserListSkeletonComponent,
    UserDetailsSkeletonComponent,
    AddressPipe,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    TableModule,
    AvatarModule,
    SkeletonModule,
    CardModule,
    InputTextModule,
    ToastModule,
    MessageModule,
    MessagesModule,
    DividerModule,
    TooltipModule,
  ],
  providers: [MessageService, NamePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
