import { Component, OnInit } from '@angular/core';
import { Analyse } from '../../../models/analyse';
import { AnalyticsService } from '../../../services/Analytics/analytics.service';

@Component({
  selector: 'app-analytics-by-day',
  templateUrl: './analytics-by-day.component.html',
  styleUrl: './analytics-by-day.component.css',
})
export class AnalyticsByDayComponent implements OnInit {
  dataByDay: any;
  optionsByDay: any;

  constructor(private analyticsService: AnalyticsService) {}

  ngOnInit() {
    this.getDailyData();
  }

  getDailyData() {
    this.analyticsService.getDailySignalements().subscribe((result) => {
      console.log(result);
      this.dataByDay = {
        labels: result.map((r: Analyse) => `${r._id}`),
        datasets: [
          {
            data: result.map((r) => r.count),
          },
        ],
      };
      this.setOptions();
    });
  }

  generateColor(hover = false): string {
    const baseColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return hover ? `${baseColor}B0` : baseColor;
  }

  setOptions() {
    this.optionsByDay = {
      plugins: {
        legend: {
          position: 'right',
        },
        title: {
          display: true,
          text: 'Analyse des Signalements par Jour et Code CIP',
          fontSize: 16,
        },
      },
      responsive: true,
      scales: {
        x: {
          stacked: true,
          beginAtZero: true,
        },
        y: {
          stacked: true,
        },
      },
    };
  }
}
