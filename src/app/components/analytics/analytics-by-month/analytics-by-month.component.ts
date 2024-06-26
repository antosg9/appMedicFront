import { Component, OnInit } from '@angular/core';
import { Analyse } from '../../../models/analyse';
import { AnalyticsService } from '../../../services/Analytics/analytics.service';

@Component({
  selector: 'app-analytics-by-month',
  templateUrl: './analytics-by-month.component.html',
  styleUrl: './analytics-by-month.component.css',
})
export class AnalyticsByMonthComponent implements OnInit {
  dataByMonth: any;
  optionsByMonth: any;

  constructor(private analyticsService: AnalyticsService) {}

  ngOnInit() {
    this.getMonthlyData();
  }

  getMonthlyData() {
    this.analyticsService
      .getMonthlySignalements()
      .subscribe((results: Analyse[]) => {
        const dataStructure = this.prepareChartData(results);
        this.dataByMonth = {
          labels: dataStructure.labels,
          datasets: dataStructure.datasets,
        };
        this.setOptions();
      });
  }

  prepareChartData(data: Analyse[]) {
    const labels = [...new Set(data.map((item) => item._id.code_cip))]; // Unique code_cip
    const months = [
      ...new Set(data.map((item) => `${item._id.month}-${item._id.year}`)),
    ];

    const datasets = months.map((month) => {
      const monthData = data.filter(
        (item) => `${item._id.month}-${item._id.year}` === month,
      );
      const counts = labels.map((label) => {
        const found = monthData.find((item) => item._id.code_cip === label);
        return found ? found.count : 0;
      });

      return {
        label: month,
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
    this.optionsByMonth = {
      plugins: {
        legend: {
          position: 'right',
        },
        title: {
          display: true,
          text: 'Analyse des Signalements par Mois et Code CIP',
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
