import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { BrowserModule } from "@angular/platform-browser";
import { HeaderComponent } from "./header/header.component";
import { UserInputModule } from "./user-input/user.input.module";
import { UserInputComponent } from "./user-input/user-input.component";

@NgModule({
    declarations: [AppComponent,
        HeaderComponent,
        InvestmentResultsComponent],
    imports: [BrowserModule, UserInputModule],
    bootstrap: [AppComponent],

})

export class AppModule { }