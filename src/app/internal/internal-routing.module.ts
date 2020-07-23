import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { INTERNAL_PATHS } from '../constants';
import { InternalComponent } from './internal.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { TherapistsComponent } from './therapists/therapists.component';
import { TherapistDetailsComponent } from './therapist-details/therapist-details.component';
import { EditTherapistComponent } from './edit-therapist/edit-therapist.component';
import { PartnersComponent } from './partners/partners.component';
import { AddPartnerComponent } from './add-partner/add-partner.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { AddSponsorComponent } from './add-sponsor/add-sponsor.component';
import { NewsComponent } from './news/news.component';
import { AddNewsComponent } from './add-news/add-news.component';

const routes: Routes = [
  {
    path: '', component: InternalComponent, children: [
      { path: '', redirectTo: INTERNAL_PATHS.DASHBOARD, pathMatch: 'full' },

      { path: INTERNAL_PATHS.DASHBOARD, component: DashboardComponent },

      // user routes
      { path: INTERNAL_PATHS.USERS, component: UsersComponent },
      { path: INTERNAL_PATHS.USER_BY_ID, component: UserDetailsComponent },
      { path: INTERNAL_PATHS.EDIT_USER, component: EditUserComponent },

      // therapist routes
      { path: INTERNAL_PATHS.THERAPISTS, component: TherapistsComponent },
      { path: INTERNAL_PATHS.THERAPIST_BY_ID, component: TherapistDetailsComponent },
      { path: INTERNAL_PATHS.EDIT_THERAPIST, component: EditTherapistComponent },

      // partner routes
      { path: INTERNAL_PATHS.PARTNERS, component: PartnersComponent },
      { path: INTERNAL_PATHS.ADD_PARTNER, component: AddPartnerComponent },

      // sponsor routes
      { path: INTERNAL_PATHS.SPONSORS, component: SponsorComponent },
      { path: INTERNAL_PATHS.ADD_SPONSOR, component: AddSponsorComponent },

      // news routes
      { path: INTERNAL_PATHS.NEWS, component: NewsComponent },
      { path: INTERNAL_PATHS.ADD_NEWS, component: AddNewsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternalRoutingModule { }
