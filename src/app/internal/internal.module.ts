import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternalRoutingModule } from './internal-routing.module';
import { UsersComponent } from './users/users.component';
import { InterceptorService } from '../core/services/interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { PartnersComponent } from './partners/partners.component';
import { TherapistsComponent } from './therapists/therapists.component';
import { NewsComponent } from './news/news.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { EditTherapistComponent } from './edit-therapist/edit-therapist.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { TherapistDetailsComponent } from './therapist-details/therapist-details.component';
import { AddPartnerComponent } from './add-partner/add-partner.component';
import { AddSponsorComponent } from './add-sponsor/add-sponsor.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { InternalComponent } from './internal.component';

@NgModule({
  declarations: [UsersComponent, InternalComponent, PartnersComponent, TherapistsComponent, NewsComponent, AddNewsComponent, EditTherapistComponent, EditUserComponent, SponsorComponent, UserDetailsComponent, TherapistDetailsComponent, AddPartnerComponent, AddSponsorComponent, DashboardComponent, SidebarComponent],
  imports: [
    CommonModule,
    InternalRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  exports: []
})
export class InternalModule { }
