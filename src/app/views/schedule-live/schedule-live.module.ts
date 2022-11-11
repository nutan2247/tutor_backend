import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleLiveRoutingModule } from './schedule-live-routing.module';
import { ScheduleLivesComponent } from './schedule-lives/schedule-lives.component';
import {
  AccordionModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonModule,
  CardModule,
  CarouselModule,
  CollapseModule,
  DropdownModule,
  FormModule,
  GridModule,
  ListGroupModule,
  NavModule,
  PaginationModule,
  PlaceholderModule,
  PopoverModule,
  ProgressModule,
  SharedModule,
  SpinnerModule,
  TableModule,
  TabsModule,
  TooltipModule,
  UtilitiesModule,

  AlertModule,
  ModalModule,
  ToastModule,
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ScheduleLivesComponent
  ],
  imports: [
    CommonModule,
    ScheduleLiveRoutingModule,
    AccordionModule,
    BadgeModule,
    BreadcrumbModule,
    ButtonModule,
    CardModule,
    CollapseModule,
    GridModule,
    UtilitiesModule,
    SharedModule,
    ListGroupModule,
    IconModule,
    ListGroupModule,
    PlaceholderModule,
    ProgressModule,
    SpinnerModule,
    TabsModule,
    NavModule,
    TooltipModule,
    CarouselModule,
    FormModule,
    ReactiveFormsModule,
    DropdownModule,
    PaginationModule,
    PopoverModule,
    TableModule,
    // DocsComponentsModule,
    AlertModule,
    ModalModule,
    ToastModule,
  ]
})
export class ScheduleLiveModule { }
