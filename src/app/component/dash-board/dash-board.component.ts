import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { JobService } from '../../services/job.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';
@Component({
  selector: 'app-dash-board',
  imports: [MatCardModule, MatButtonModule, CommonModule, MatDialogModule,MatTooltipModule,
    MatTabsModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.css'
})
export class DashBoardComponent {
jobs: any = [];
readonly dialog = inject(MatDialog);
  constructor(private jobService: JobService, private router: Router,private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.jobService.getJobs().subscribe({
      next: (data: any) => {
        this.jobs = data;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error fetching jobs:', err); // Log the error
      }
    });
  }
  applyJob(job: any) {
    this.router.navigate([job]);
  }

  openDialog(job:any) {
    const dialogRef = this.dialog.open(DashBoardComponentJobDialog,{
      data: job});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
@Component({
  selector: 'app-dash-board-job-dialog',
  imports: [MatCardModule, MatButtonModule, CommonModule, MatDialogModule],
  templateUrl: './dash-board-job-dialog.component.html',
  styleUrl: './dash-board.component.css'
})
export class DashBoardComponentJobDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}