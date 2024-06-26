import { Component, OnInit } from '@angular/core';
import { Signalement } from '../../../models/signalement';
import { SignalementService } from '../../../services/Signalement/signalement.service';

@Component({
  selector: 'app-get-list-signalement',
  templateUrl: './get-list-signalement.component.html',
  styleUrls: ['./get-list-signalement.component.css'],
})
export class GetListSignalementComponent implements OnInit {
  signalements!: Signalement[];

  constructor(private signalementService: SignalementService) {}

  ngOnInit() {
    this.signalementService.getSignalements().subscribe(
      (data: Signalement[]) => {
        this.signalements = data.map((signalement) => ({
          ...signalement,
          date_created: signalement.date_created
            ? new Date(signalement.date_created)
            : undefined,
        }));
      },
      (error) => {
        console.error('Error fetching signalements:', error);
      },
    );
  }
}
