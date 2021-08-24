import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { GroupNameChipModule } from "../../group-name-chip/group-name-chip.module";
import { GroupToolbarComponent } from "./group-toolbar.component";

@NgModule({
  declarations: [GroupToolbarComponent],
  exports: [GroupToolbarComponent],
  imports: [
    CommonModule,
    GroupNameChipModule,
    MatIconModule,
    MatDialogModule,
    MatDividerModule,
    MatButtonModule,
  ]
})
export class GroupToolbarModule {}