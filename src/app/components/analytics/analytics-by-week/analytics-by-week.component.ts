import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../../../services/Analytics/analytics.service';
import { Analyse } from '../../../models/analyse';

@Component({
  selector: 'app-analytics-by-week',
  templateUrl: './analytics-by-week.component.html',
  styleUrl: './analytics-by-week.component.css',
})
export class AnalyticsByWeekComponent implements OnInit {
  data: any;
  optionsByWeek: any;

  constructor(private analyticsService: AnalyticsService) {}

  ngOnInit() {
    this.getWeeklyData();
  }

  getWeeklyData() {
    this.analyticsService
      .getWeeklySignalements()
      .subscribe((results: Analyse[]) => {
        const dataStructure = this.prepareChartData(results);
        this.data = {
          labels: dataStructure.labels,
          datasets: dataStructure.datasets,
        };
        this.setOptions();
      });
  }

  prepareChartData(data: Analyse[]) {
    const labels = [...new Set(data.map((item) => item._id.code_cip))]; // Unique code_cip
    const weeks = [
      ...new Set(
        data.map((item) => `Week ${item._id.week} - ${item._id.year}`),
      ),
    ];

    const datasets = weeks.map((week) => {
      const weekData = data.filter(
        (item) => `Week ${item._id.week} - ${item._id.year}` === week,
      );
      const counts = labels.map((label) => {
        const found = weekData.find((item) => item._id.code_cip === label);
        return found ? found.count : 0;
      });

      return {
        label: week,
        data: counts,
        backgroundColor: this.generateColor(),
        hoverBackgroundColor: this.generateColor(true),
      };
    });

    return { labels, datasets };
  }

  generateColor(hover = false): string {
    const baseColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return hover ? `${baseColor}B0` : baseColor;
  }

  setOptions() {
    this.optionsByWeek = {
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
        },
        title: {
          display: true,
          text: 'Analyse des Signalements par Semaine et Code CIP',
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
      interaction: {
        mode: 'index',
        intersect: false,
      },
    };
  }
}
