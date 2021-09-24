import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs-page';
import { TabsPageRoutingModule } from './tabs-page-routing.module';

import { AboutModule } from '../about/about.module';
import { MapModule } from '../map/map.module';
import { ScheduleModule } from '../schedule/schedule.module';
import { SessionDetailModule } from '../session-detail/session-detail.module';
import { SpeakerDetailModule } from '../speaker-detail/speaker-detail.module';
import { SpeakerListModule } from '../speaker-list/speaker-list.module';
import { VifiNotifyPageModule } from '../../vifi/vifi.module';
import { MapTechniciansPageModule } from '../map-technicians/map-technicians.module';
import { DailyActivitiesPageModule } from '../daily-activities/daily-activities.module';


@NgModule({
  imports: [
    AboutModule,
    CommonModule,
    IonicModule,
    MapModule,
    ScheduleModule,
    DailyActivitiesPageModule,
    SessionDetailModule,
    SpeakerDetailModule,
    SpeakerListModule,
    VifiNotifyPageModule,
    MapTechniciansPageModule,
    TabsPageRoutingModule
  ],
  declarations: [
    TabsPage,
  ]
})
export class TabsModule { }