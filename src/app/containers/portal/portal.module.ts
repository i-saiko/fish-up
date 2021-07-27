import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PortalComponent} from './portal.component';
import {ComponentsModule} from '../../components/components.module';
import {PortalRouting} from './portal.routing';
import {FormsModule} from '@angular/forms';
import {UsersService} from '../../modules/services/users.service';
import {MatIconModule} from '@angular/material/icon';
import {GoodsService} from '../../rest/goods.service';

@NgModule({
  declarations: [PortalComponent],
    imports: [
        CommonModule,
        ComponentsModule,
        PortalRouting,
        FormsModule,
        MatIconModule
    ],
  providers: [
    UsersService,
    GoodsService,
  ],
  exports: [PortalComponent],
})
export class PortalModule {}
