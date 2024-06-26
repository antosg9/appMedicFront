import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../../../services/Analytics/analytics.service';
import { Analyse } from '../../../models/analyse';

@Component({
  selector: 'app-analytics-by-year',
  templateUrl: './analytics-by-year.component.html',
  styleUrl: './analytics-by-year.component.css',
})
export class AnalyticsByYearComponent implements OnInit {
  dataByYear: any;
  optionsByYear: any;

  constructor(private analyticsService: AnalyticsService) {}

  ngOnInit() {
    this.getYearlyData();
  }

  getYearlyData() {
    this.analyticsService
      .getYearlySignalements()
      .subscribe((results: Analyse[]) => {
        const dataStructure = this.prepareChartData(results);
        this.dataByYear = {
          labels: dataStructure.labels,
          datasets: dataStructure.datasets,
        };
        this.setOptions();
      });
  }

  prepareChartData(data: Analyse[]) {
    const labels = [...new Set(data.map((item) => item._id.code_cip))];
    const years = [...new Set(data.map((item) => item._id.year))];

    const datasets = years.map((year) => {
      const yearData = data.filter((item) => item._id.year === year);
      const counts = labels.map((label) => {
        const found = yearData.find((item) => item._id.code_cip === label);
        return found ? found.count : 0;
      });

      return {
        label: `Year ${year}`,
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
    this.optionsByYear = {
      indexAxis: 'y',
      plugins: {
        legend: {
          position: 'right',
        },
        title: {
          display: true,
          text: 'Analyse des Signalements par Année et Code CIP',
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
