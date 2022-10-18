import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SubmissionsComponent } from './submissions.component';
import { SubmissionsRoutingModule } from './submissions-routing.module';
import { TableComponent } from 'src/app/shared/components/table/table.component';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { FormsModule } from '@angular/forms';

import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { MapComponent } from 'src/app/shared/components/map/map.component';
import { ConvertDatePipe } from 'src/app/shared/pipes/convert-date.pipe';

@NgModule({
    declarations: [
        SubmissionsComponent,
        TableComponent,
        CardComponent,
        MapComponent,
        ConvertDatePipe
    ],
    imports: [
        CommonModule,
        RouterModule,
        SubmissionsRoutingModule,
        GoogleMapsModule,
        HttpClientModule,
        HttpClientJsonpModule,
        FormsModule
    ],
    exports: [
        ConvertDatePipe
    ]
})
export class SubmissionsModule { }