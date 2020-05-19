import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { UserRegistrationComponent } from 'src/app/pages/user-registration/user-registration.component';
import { RequestComponent } from 'src/app/pages/request/request.component';
import { ReceiptComponent } from 'src/app/pages/receipt/receipt.component';
import { EntityMasterComponent } from 'src/app/pages/entity-master/entity-master.component';
import { MemberComponent } from 'src/app/pages/member/member.component';
import { UserDisplayComponent } from 'src/app/pages/user-display/user-display.component';
import { DisplayEntityComponent } from 'src/app/pages/display-entity/display-entity.component';
import { DisplayMemberComponent } from 'src/app/pages/display-member/display-member.component';
import { DisplayReceiptComponent } from 'src/app/pages/display-receipt/display-receipt.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'user-registration/:id',  component: UserRegistrationComponent },
    { path: 'request',  component: RequestComponent },
    { path: 'Receipt/:id/:amount',  component: ReceiptComponent },
    { path: 'Entity/:id',  component: EntityMasterComponent },
    { path: 'member/:id',  component: MemberComponent },
    { path: 'user',  component: UserDisplayComponent },
    { path: 'DisplayEntity',  component: DisplayEntityComponent },
    { path: 'Displaymember',  component: DisplayMemberComponent },
    { path: 'DisplayReceipt',  component: DisplayReceiptComponent },

];
