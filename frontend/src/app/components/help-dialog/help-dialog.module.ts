import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { HelpPageDirective } from "src/app/directives/help-page.directive";
import { HelpDialogComponent } from "./help-dialog.component";

@NgModule({
  declarations: [HelpDialogComponent, HelpPageDirective],
  exports: [HelpDialogComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class HelpDialogModule {}