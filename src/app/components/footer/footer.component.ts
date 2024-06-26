import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  iutWebSiteUrl: string = 'https://iutparis-seine.u-paris.fr/';

  gitHubRaafetURL: string = 'https://github.com/BRK-Raafet';
  gitHubAntoineURL: string = 'https://github.com/antosg9';
  gitHubPaulURL: string = 'https://github.com/paulpp78';
  gitHubViDavidURL: string = 'https://github.com/Kitsulfr';

  linkedInRaafetURL: string = 'https://www.linkedin.com/in/raafet-boukessassa/';
  linkedInAntoineURL: string =
    'https://www.linkedin.com/in/antoine-gautreau-b8723b264/';
  linkedInPaulURL: string = 'https://www.linkedin.com/in/paul-perigault/';
  linkedInViDavidURL: string =
    'https://www.linkedin.com/in/vi-david-phan-3b011a26b/';
}
