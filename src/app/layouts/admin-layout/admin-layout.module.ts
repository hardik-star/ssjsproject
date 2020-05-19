import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserRegistrationComponent } from 'src/app/pages/user-registration/user-registration.component';
import { RequestComponent } from 'src/app/pages/request/request.component';
import { ReceiptComponent } from 'src/app/pages/receipt/receipt.component';
import { EntityMasterComponent } from 'src/app/pages/entity-master/entity-master.component';
import { MemberComponent } from 'src/app/pages/member/member.component';
import { NumberDirective } from '../../numbers-only.directive';
import { AlphabetDirective } from '../../alphabets-only.directive';
import { AlphaNumericDirective } from '../../alphaNumerics-only.directive';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UserDisplayComponent } from 'src/app/pages/user-display/user-display.component';
import { DisplayEntityComponent } from 'src/app/pages/display-entity/display-entity.component';
import { DisplayMemberComponent } from 'src/app/pages/display-member/display-member.component';
import { DisplayReceiptComponent } from 'src/app/pages/display-receipt/display-receipt.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    AutocompleteLibModule,
    
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    RequestComponent,
    ReceiptComponent,
    EntityMasterComponent,
    MemberComponent,
    NumberDirective,
    AlphabetDirective,
    AlphaNumericDirective,
    UserDisplayComponent,
    DisplayEntityComponent,
    DisplayMemberComponent,
    DisplayReceiptComponent,
    UserRegistrationComponent,
    
    

  ]
})

export class AdminLayoutModule {}
