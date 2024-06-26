import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { FooterComponent } from "./components/footer/footer.component";
import { NavComponent } from "./components/nav/nav.component";
import { ButtonModule } from "primeng/button";
import { SidebarModule } from "primeng/sidebar";
import { AnalyticsComponent } from "./components/analytics/analytics.component";
import { ChartModule } from "primeng/chart";
import { AddSignalementComponent } from "./components/signalement/add-signalement/add-signalement.component";
import { GetListSignalementComponent } from "./components/signalement/get-list-signalement/get-list-signalement.component";
import { SignalementComponent } from "./components/signalement/signalement.component";
import { InputTextModule } from "primeng/inputtext";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TableModule } from "primeng/table";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AnalyticsByDayComponent } from "./components/analytics/analytics-by-day/analytics-by-day.component";
import { AnalyticsByWeekComponent } from "./components/analytics/analytics-by-week/analytics-by-week.component";
import { AnalyticsByMonthComponent } from "./components/analytics/analytics-by-month/analytics-by-month.component";
import { AnalyticsByYearComponent } from "./components/analytics/analytics-by-year/analytics-by-year.component";
import { AuthModule } from "@auth0/auth0-angular";
import { environment } from "../environments/environment";
import { AuthButtonComponent } from "./components/auth/auth-button/auth-button.component";
import { UserProfileComponent } from "./components/auth/user-profile/user-profile.component";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    AnalyticsComponent,
    AddSignalementComponent,
    GetListSignalementComponent,
    SignalementComponent,
    AnalyticsByDayComponent,
    AnalyticsByWeekComponent,
    AnalyticsByMonthComponent,
    AnalyticsByYearComponent,
    AuthButtonComponent,
    UserProfileComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    SidebarModule,
    ChartModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    BrowserAnimationsModule,
    AuthModule.forRoot({
      domain: environment.auth0Domain,
      clientId: environment.auth0ClientId,

      authorizationParams: {
        redirect_uri: window.location.origin,
        audience: environment.auth0Audience,
      },

      httpInterceptor: {
        allowedList: [
          {
            uri: environment.apiUrlBackend,
          },
        ],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
