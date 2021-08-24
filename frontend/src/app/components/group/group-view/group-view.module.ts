import { DragDropModule } from "@angular/cdk/drag-drop";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { GroupNameChipModule } from "../../group-name-chip/group-name-chip.module";
import { ItemCardModule } from "../../item-card/item-card.module";
import { GroupViewComponent } from "./group-view.component";

@NgModule({
  declarations: [GroupViewComponent],
  exports: [GroupViewComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    DragDropModule,
    MatButtonModule,
    MatDialogModule,
    GroupNameChipModule,
    ItemCardModule,
  ],
})
export class GroupViewModule {}