import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppGastosRegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { AppGastosCountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { AppGastosLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { AppGastosDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { AppGastosTaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { AppGastosEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { AppGastosJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { AppGastosJobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        AppGastosRegionMySuffixModule,
        AppGastosCountryMySuffixModule,
        AppGastosLocationMySuffixModule,
        AppGastosDepartmentMySuffixModule,
        AppGastosTaskMySuffixModule,
        AppGastosEmployeeMySuffixModule,
        AppGastosJobMySuffixModule,
        AppGastosJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppGastosEntityModule {}
