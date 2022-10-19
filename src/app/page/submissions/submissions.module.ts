import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SubmissionsRoutingModule } from './submissions-routing.module';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgxPaginationModule } from 'ngx-pagination';

import { SubmissionsComponent } from './submissions.component';
import { TableComponent } from 'src/app/shared/components/table/table.component';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { MapComponent } from 'src/app/shared/components/map/map.component';
import { StatusComponent } from 'src/app/shared/components/status/status.component';

import { ConvertDatePipe } from 'src/app/shared/pipes/convert-date.pipe';

@NgModule({
    declarations: [
        SubmissionsComponent,
        TableComponent,
        CardComponent,
        MapComponent,
        StatusComponent,
        ConvertDatePipe
    ],
    imports: [
        CommonModule,
        RouterModule,
        SubmissionsRoutingModule,
        GoogleMapsModule,
        HttpClientModule,
        HttpClientJsonpModule,
        FormsModule,
        MatTableModule,
        MatCheckboxModule,
        NgxPaginationModule
    ],
    exports: [
        ConvertDatePipe
    ]
})
export class SubmissionsModule { }