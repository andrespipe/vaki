import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vaki-challenge-ui-toolbar',
  templateUrl: './ui-toolbar.component.html',
  styleUrls: ['./ui-toolbar.component.scss'],
})
export class UiToolbarComponent implements OnInit {
  selectedCountryCurrency = 'COP';
  countries = [
    { CountryName: 'Argentina', Name: 'Argentine peso', ISO4217: 'ARS' },
    { CountryName: 'Bolivia', Name: 'Bolivian boliviano', ISO4217: 'BOB' },
    { CountryName: 'Brazil', Name: 'Brazilian real', ISO4217: 'BRL' },
    { CountryName: 'Chile', Name: 'Chilean peso', ISO4217: 'CLP' },
    { CountryName: 'Colombia', Name: 'Colombian peso', ISO4217: 'COP' },
    { CountryName: 'Ecuador', Name: 'United States dollar', ISO4217: 'USD' },
    {
      CountryName: 'Falkland',
      Name: 'Islands (UK)	Falkland Islands pound',
      ISO4217: 'FKP',
    },
    {
      CountryName: 'French',
      Name: 'Guiana (France)	European euro',
      ISO4217: 'EUR',
    },
    { CountryName: 'Guyana', Name: 'Guyanese dollar', ISO4217: 'GYD' },
    { CountryName: 'Paraguay', Name: 'Paraguayan guarani', ISO4217: 'PYG' },
    { CountryName: 'Peru', Name: 'Peruvian sol', ISO4217: 'PEN' },
    {
      CountryName: 'South',
      Name: 'Georgia Island (UK)	Pound sterling',
      ISO4217: 'GBP',
    },
    { CountryName: 'Suriname', Name: 'Surinamese dollar', ISO4217: 'SRD' },
    { CountryName: 'Uruguay', Name: 'Uruguayan peso', ISO4217: 'UYU' },
    { CountryName: 'Venezuela', Name: 'Venezuelan bolivar', ISO4217: 'VES' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
