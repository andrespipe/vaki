import { Injectable } from '@angular/core';
import { ICurrency } from '@vakers-data';
import { BehaviorSubject, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  currency = new BehaviorSubject<ICurrency[]>(null);
  currentCurrency = new BehaviorSubject<ICurrency>(null);

  constructor() {
    this.loadIsoCurrency();
  }

  private loadIsoCurrency(): void {
    of(currencyCodesISO4217)
      .pipe(delay(1500))
      .subscribe(this.handleCurrencyCodesISO.bind(this));
  }

  private handleCurrencyCodesISO(currencyCodesISO4217: ICurrency[]) {
    this.currency.next(currencyCodesISO4217);
  }

  public setCurrency(currencyCode: String): void {
    const currentCode = this.currentCurrency?.value?.code;
    if (currentCode !== currencyCode) {
      const currencyList = this.currency.value;
      const selected = currencyList.find(
        (currency) => currency?.code === currencyCode
      );
      this.currentCurrency.next(selected);
    }
  }
}

const currencyCodesISO4217: ICurrency[] = [
  {
    conversionFactor: 0.8,
    entity: 'AFGHANISTAN',
    currency: 'Afghani',
    code: 'AFN',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'ALBANIA',
    currency: 'Lek',
    code: 'ALL',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'ALGERIA',
    currency: 'Algerian Dinar',
    code: 'DZD',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'ANGOLA',
    currency: 'Kwanza',
    code: 'AOA',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'ANGUILLA',
    currency: 'East Caribbean Dollar',
    code: 'XCD',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'ANTARCTICA',
    currency: 'No universal currency',
    code: 'null',
    minorUnit: null,
  },
  {
    conversionFactor: 0.8,
    entity: 'ANTIGUA AND BARBUDA',
    currency: 'East Caribbean Dollar',
    code: 'XCD',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'ARGENTINA',
    currency: 'Argentine Peso',
    code: 'ARS',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'ARMENIA',
    currency: 'Armenian Dram',
    code: 'AMD',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'ARUBA',
    currency: 'Aruban Florin',
    code: 'AWG',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'AUSTRALIA',
    currency: 'Australian Dollar',
    code: 'AUD',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'AZERBAIJAN',
    currency: 'Azerbaijanian Manat',
    code: 'AZN',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'BAHAMAS',
    currency: 'Bahamian Dollar',
    code: 'BSD',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'BAHRAIN',
    currency: 'Bahraini Dinar',
    code: 'BHD',
    minorUnit: 3,
  },
  {
    conversionFactor: 0.8,
    entity: 'BANGLADESH',
    currency: 'Taka',
    code: 'BDT',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'BARBADOS',
    currency: 'Barbados Dollar',
    code: 'BBD',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'BELARUS',
    currency: 'Belarussian Ruble',
    code: 'BYR',
    minorUnit: 0,
  },
  {
    conversionFactor: 0.8,
    entity: 'BELIZE',
    currency: 'Belize Dollar',
    code: 'BZD',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'BENIN',
    currency: 'CFA Franc BCEAO',
    code: 'XOF',
    minorUnit: 0,
  },
  {
    conversionFactor: 0.8,
    entity: 'BERMUDA',
    currency: 'Bermudian Dollar',
    code: 'BMD',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'BHUTAN',
    currency: 'Ngultrum',
    code: 'BTN',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'BHUTAN',
    currency: 'Indian Rupee',
    code: 'INR',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'BOLIVIA, PLURINATIONAL STATE OF',
    currency: 'Boliviano',
    code: 'BOB',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'BOLIVIA, PLURINATIONAL STATE OF',
    currency: 'Mvdol',
    code: 'BOV',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'BOSNIA AND HERZEGOVINA',
    currency: 'Convertible Mark',
    code: 'BAM',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'BOTSWANA',
    currency: 'Pula',
    code: 'BWP',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'BOUVET ISLAND',
    currency: 'Norwegian Krone',
    code: 'NOK',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'BRAZIL',
    currency: 'Brazilian Real',
    code: 'BRL',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'BRUNEI DARUSSALAM',
    currency: 'Brunei Dollar',
    code: 'BND',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'BULGARIA',
    currency: 'Bulgarian Lev',
    code: 'BGN',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'BURKINA FASO',
    currency: 'CFA Franc BCEAO',
    code: 'XOF',
    minorUnit: 0,
  },
  {
    conversionFactor: 0.8,
    entity: 'BURUNDI',
    currency: 'Burundi Franc',
    code: 'BIF',
    minorUnit: 0,
  },
  {
    conversionFactor: 0.8,
    entity: 'CAMBODIA',
    currency: 'Riel',
    code: 'KHR',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'CAMEROON',
    currency: 'CFA Franc BEAC',
    code: 'XAF',
    minorUnit: 0,
  },
  {
    conversionFactor: 0.8,
    entity: 'CANADA',
    currency: 'Canadian Dollar',
    code: 'CAD',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'CABO VERDE',
    currency: 'Cabo Verde Escudo',
    code: 'CVE',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'CAYMAN ISLANDS',
    currency: 'Cayman Islands Dollar',
    code: 'KYD',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'CENTRAL AFRICAN REPUBLIC',
    currency: 'CFA Franc BEAC',
    code: 'XAF',
    minorUnit: 0,
  },
  {
    conversionFactor: 0.8,
    entity: 'CHAD',
    currency: 'CFA Franc BEAC',
    code: 'XAF',
    minorUnit: 0,
  },
  {
    conversionFactor: 0.8,
    entity: 'CHILE',
    currency: 'Unidad de Fomento',
    code: 'CLF',
    minorUnit: 4,
  },
  {
    conversionFactor: 0.8,
    entity: 'CHILE',
    currency: 'Chilean Peso',
    code: 'CLP',
    minorUnit: 0,
  },
  {
    conversionFactor: 0.8,
    entity: 'CHINA',
    currency: 'Yuan Renminbi',
    code: 'CNY',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'CHRISTMAS ISLAND',
    currency: 'Australian Dollar',
    code: 'AUD',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'COCOS (KEELING) ISLANDS',
    currency: 'Australian Dollar',
    code: 'AUD',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'COLOMBIA',
    currency: 'Colombian Peso',
    code: 'COP',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'COLOMBIA',
    currency: 'Unidad de Valor Real',
    code: 'COU',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'COMOROS',
    currency: 'Comoro Franc',
    code: 'KMF',
    minorUnit: 0,
  },
  {
    conversionFactor: 0.8,
    entity: 'CONGO',
    currency: 'CFA Franc BEAC',
    code: 'XAF',
    minorUnit: 0,
  },
  {
    conversionFactor: 0.8,
    entity: 'CONGO, DEMOCRATIC REPUBLIC OF THE',
    currency: 'Congolese Franc',
    code: 'CDF',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'COOK ISLANDS',
    currency: 'New Zealand Dollar',
    code: 'NZD',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'COSTA RICA',
    currency: 'Costa Rican Colon',
    code: 'CRC',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'CÔTE D`IVOIRE',
    currency: 'CFA Franc BCEAO',
    code: 'XOF',
    minorUnit: 0,
  },
  {
    conversionFactor: 0.8,
    entity: 'CROATIA',
    currency: 'Croatian Kuna',
    code: 'HRK',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'CUBA',
    currency: 'Peso Convertible',
    code: 'CUC',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'CUBA',
    currency: 'Cuban Peso',
    code: 'CUP',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'CURAÇAO',
    currency: 'Netherlands Antillean Guilder',
    code: 'ANG',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'CZECH REPUBLIC',
    currency: 'Czech Koruna',
    code: 'CZK',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'DENMARK',
    currency: 'Danish Krone',
    code: 'DKK',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'DJIBOUTI',
    currency: 'Djibouti Franc',
    code: 'DJF',
    minorUnit: 0,
  },
  {
    conversionFactor: 0.8,
    entity: 'DOMINICA',
    currency: 'East Caribbean Dollar',
    code: 'XCD',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'DOMINICAN REPUBLIC',
    currency: 'Dominican Peso',
    code: 'DOP',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'EGYPT',
    currency: 'Egyptian Pound',
    code: 'EGP',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'EL SALVADOR',
    currency: 'El Salvador Colon',
    code: 'SVC',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'EQUATORIAL GUINEA',
    currency: 'CFA Franc BEAC',
    code: 'XAF',
    minorUnit: 0,
  },
  {
    conversionFactor: 0.8,
    entity: 'ERITREA',
    currency: 'Nakfa',
    code: 'ERN',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'ETHIOPIA',
    currency: 'Ethiopian Birr',
    code: 'ETB',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'EUROPEAN UNION',
    currency: 'Euro',
    code: 'EUR',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'FALKLAND ISLANDS (MALVINAS)',
    currency: 'Falkland Islands Pound',
    code: 'FKP',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'FAROE ISLANDS',
    currency: 'Danish Krone',
    code: 'DKK',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'FIJI',
    currency: 'Fiji Dollar',
    code: 'FJD',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'FRENCH POLYNESIA',
    currency: 'CFP Franc',
    code: 'XPF',
    minorUnit: 0,
  },
  {
    conversionFactor: 0.8,
    entity: 'GABON',
    currency: 'CFA Franc BEAC',
    code: 'XAF',
    minorUnit: 0,
  },
  {
    conversionFactor: 0.8,
    entity: 'GAMBIA',
    currency: 'Dalasi',
    code: 'GMD',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'GEORGIA',
    currency: 'Lari',
    code: 'GEL',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'GHANA',
    currency: 'Ghana Cedi',
    code: 'GHS',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'GIBRALTAR',
    currency: 'Gibraltar Pound',
    code: 'GIP',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'GREENLAND',
    currency: 'Danish Krone',
    code: 'DKK',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'GRENADA',
    currency: 'East Caribbean Dollar',
    code: 'XCD',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'GUATEMALA',
    currency: 'Quetzal',
    code: 'GTQ',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'GUERNSEY',
    currency: 'Pound Sterling',
    code: 'GBP',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'GUINEA',
    currency: 'Guinea Franc',
    code: 'GNF',
    minorUnit: 0,
  },
  {
    conversionFactor: 0.8,
    entity: 'GUINEA-BISSAU',
    currency: 'CFA Franc BCEAO',
    code: 'XOF',
    minorUnit: 0,
  },
  {
    conversionFactor: 0.8,
    entity: 'GUYANA',
    currency: 'Guyana Dollar',
    code: 'GYD',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'HAITI',
    currency: 'Gourde',
    code: 'HTG',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'HEARD ISLAND AND McDONALD ISLANDS',
    currency: 'Australian Dollar',
    code: 'AUD',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'HONDURAS',
    currency: 'Lempira',
    code: 'HNL',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'HONG KONG',
    currency: 'Hong Kong Dollar',
    code: 'HKD',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'HUNGARY',
    currency: 'Forint',
    code: 'HUF',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'ICELAND',
    currency: 'Iceland Krona',
    code: 'ISK',
    minorUnit: 0,
  },
  {
    conversionFactor: 0.8,
    entity: 'INDIA',
    currency: 'Indian Rupee',
    code: 'INR',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'INDONESIA',
    currency: 'Rupiah',
    code: 'IDR',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'INTERNATIONAL MONETARY FUND (IMF)',
    currency: 'SDR (Special Drawing Right)',
    code: 'XDR',
    minorUnit: null,
  },
  {
    conversionFactor: 0.8,
    entity: 'IRAN, ISLAMIC REPUBLIC OF',
    currency: 'Iranian Rial',
    code: 'IRR',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'IRAQ',
    currency: 'Iraqi Dinar',
    code: 'IQD',
    minorUnit: 3,
  },
  {
    conversionFactor: 0.8,
    entity: 'ISLE OF MAN',
    currency: 'Pound Sterling',
    code: 'GBP',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'ISRAEL',
    currency: 'New Israeli Sheqel',
    code: 'ILS',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'JAMAICA',
    currency: 'Jamaican Dollar',
    code: 'JMD',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'JAPAN',
    currency: 'Yen',
    code: 'JPY',
    minorUnit: 0,
  },
  {
    conversionFactor: 0.8,
    entity: 'JERSEY',
    currency: 'Pound Sterling',
    code: 'GBP',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'JORDAN',
    currency: 'Jordanian Dinar',
    code: 'JOD',
    minorUnit: 3,
  },
  {
    conversionFactor: 0.8,
    entity: 'KAZAKHSTAN',
    currency: 'Tenge',
    code: 'KZT',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'KENYA',
    currency: 'Kenyan Shilling',
    code: 'KES',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'KIRIBATI',
    currency: 'Australian Dollar',
    code: 'AUD',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'KOREA, DEMOCRATIC PEOPLE’S REPUBLIC OF',
    currency: 'North Korean Won',
    code: 'KPW',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'KOREA, REPUBLIC OF',
    currency: 'Won',
    code: 'KRW',
    minorUnit: 0,
  },
  {
    conversionFactor: 0.8,
    entity: 'KUWAIT',
    currency: 'Kuwaiti Dinar',
    code: 'KWD',
    minorUnit: 3,
  },
  {
    conversionFactor: 0.8,
    entity: 'KYRGYZSTAN',
    currency: 'Som',
    code: 'KGS',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'LAO PEOPLE’S DEMOCRATIC REPUBLIC',
    currency: 'Kip',
    code: 'LAK',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'LEBANON',
    currency: 'Lebanese Pound',
    code: 'LBP',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'LESOTHO',
    currency: 'Loti',
    code: 'LSL',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'LESOTHO',
    currency: 'Rand',
    code: 'ZAR',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'LIBERIA',
    currency: 'Liberian Dollar',
    code: 'LRD',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'LIBYA',
    currency: 'Libyan Dinar',
    code: 'LYD',
    minorUnit: 3,
  },
  {
    conversionFactor: 0.8,
    entity: 'LIECHTENSTEIN',
    currency: 'Swiss Franc',
    code: 'CHF',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'MACAO',
    currency: 'Pataca',
    code: 'MOP',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF',
    currency: 'Denar',
    code: 'MKD',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'MADAGASCAR',
    currency: 'Malagasy Ariary',
    code: 'MGA',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'MALAWI',
    currency: 'Kwacha',
    code: 'MWK',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'MALAYSIA',
    currency: 'Malaysian Ringgit',
    code: 'MYR',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'MALDIVES',
    currency: 'Rufiyaa',
    code: 'MVR',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'MALI',
    currency: 'CFA Franc BCEAO',
    code: 'XOF',
    minorUnit: 0,
  },
  {
    conversionFactor: 0.8,
    entity: 'MAURITANIA',
    currency: 'Ouguiya',
    code: 'MRO',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'MAURITIUS',
    currency: 'Mauritius Rupee',
    code: 'MUR',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'MEMBER COUNTRIES OF THE AFRICAN DEVELOPMENT BANK GROUP',
    currency: 'ADB Unit of Account',
    code: 'XUA',
    minorUnit: null,
  },
  {
    conversionFactor: 0.8,
    entity: 'MEXICO',
    currency: 'Mexican Peso',
    code: 'MXN',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'MEXICO',
    currency: 'Mexican Unidad de Inversion (UDI)',
    code: 'MXV',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'MOLDOVA, REPUBLIC OF',
    currency: 'Moldovan Leu',
    code: 'MDL',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'MONGOLIA',
    currency: 'Tugrik',
    code: 'MNT',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'MONTSERRAT',
    currency: 'East Caribbean Dollar',
    code: 'XCD',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'MOROCCO',
    currency: 'Moroccan Dirham',
    code: 'MAD',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'MOZAMBIQUE',
    currency: 'Mozambique Metical',
    code: 'MZN',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'MYANMAR',
    currency: 'Kyat',
    code: 'MMK',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'NAMIBIA',
    currency: 'Namibia Dollar',
    code: 'NAD',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'NAMIBIA',
    currency: 'Rand',
    code: 'ZAR',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'NAURU',
    currency: 'Australian Dollar',
    code: 'AUD',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'NEPAL',
    currency: 'Nepalese Rupee',
    code: 'NPR',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'NEW CALEDONIA',
    currency: 'CFP Franc',
    code: 'XPF',
    minorUnit: 0,
  },
  {
    conversionFactor: 0.8,
    entity: 'NEW ZEALAND',
    currency: 'New Zealand Dollar',
    code: 'NZD',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'NICARAGUA',
    currency: 'Cordoba Oro',
    code: 'NIO',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'NIGER',
    currency: 'CFA Franc BCEAO',
    code: 'XOF',
    minorUnit: 0,
  },
  {
    conversionFactor: 0.8,
    entity: 'NIGERIA',
    currency: 'Naira',
    code: 'NGN',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'NIUE',
    currency: 'New Zealand Dollar',
    code: 'NZD',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'NORFOLK ISLAND',
    currency: 'Australian Dollar',
    code: 'AUD',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'NORWAY',
    currency: 'Norwegian Krone',
    code: 'NOK',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'OMAN',
    currency: 'Rial Omani',
    code: 'OMR',
    minorUnit: 3,
  },
  {
    conversionFactor: 0.8,
    entity: 'PAKISTAN',
    currency: 'Pakistan Rupee',
    code: 'PKR',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'PALESTINE, STATE OF',
    currency: 'No universal currency',
    code: null,
    minorUnit: null,
  },
  {
    conversionFactor: 0.8,
    entity: 'PANAMA',
    currency: 'Balboa',
    code: 'PAB',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'PAPUA NEW GUINEA',
    currency: 'Kina',
    code: 'PGK',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'PARAGUAY',
    currency: 'Guarani',
    code: 'PYG',
    minorUnit: 0,
  },
  {
    conversionFactor: 0.8,
    entity: 'PERU',
    currency: 'Nuevo Sol',
    code: 'PEN',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'PHILIPPINES',
    currency: 'Philippine Peso',
    code: 'PHP',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'PITCAIRN',
    currency: 'New Zealand Dollar',
    code: 'NZD',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'POLAND',
    currency: 'Zloty',
    code: 'PLN',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'QATAR',
    currency: 'Qatari Rial',
    code: 'QAR',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'ROMANIA',
    currency: 'New Romanian Leu',
    code: 'RON',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'RUSSIAN FEDERATION',
    currency: 'Russian Ruble',
    code: 'RUB',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'RWANDA',
    currency: 'Rwanda Franc',
    code: 'RWF',
    minorUnit: 0,
  },
  {
    conversionFactor: 0.8,
    entity: 'SAINT HELENA, ASCENSION AND TRISTAN DA CUNHA',
    currency: 'Saint Helena Pound',
    code: 'SHP',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'SAINT KITTS AND NEVIS',
    currency: 'East Caribbean Dollar',
    code: 'XCD',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'SAINT LUCIA',
    currency: 'East Caribbean Dollar',
    code: 'XCD',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'SAINT VINCENT AND THE GRENADINES',
    currency: 'East Caribbean Dollar',
    code: 'XCD',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'SAMOA',
    currency: 'Tala',
    code: 'WST',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'SAO TOME AND PRINCIPE',
    currency: 'Dobra',
    code: 'STD',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'SAUDI ARABIA',
    currency: 'Saudi Riyal',
    code: 'SAR',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'SENEGAL',
    currency: 'CFA Franc BCEAO',
    code: 'XOF',
    minorUnit: 0,
  },
  {
    conversionFactor: 0.8,
    entity: 'SERBIA',
    currency: 'Serbian Dinar',
    code: 'RSD',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'SEYCHELLES',
    currency: 'Seychelles Rupee',
    code: 'SCR',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'SIERRA LEONE',
    currency: 'Leone',
    code: 'SLL',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'SINGAPORE',
    currency: 'Singapore Dollar',
    code: 'SGD',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'SINT MAARTEN (DUTCH PART)',
    currency: 'Netherlands Antillean Guilder',
    code: 'ANG',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'SISTEMA UNITARIO DE COMPENSACION REGIONAL DE PAGOS "SUCRE"',
    currency: 'Sucre',
    code: 'XSU',
    minorUnit: null,
  },
  {
    conversionFactor: 0.8,
    entity: 'SOLOMON ISLANDS',
    currency: 'Solomon Islands Dollar',
    code: 'SBD',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'SOMALIA',
    currency: 'Somali Shilling',
    code: 'SOS',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'SOUTH AFRICA',
    currency: 'Rand',
    code: 'ZAR',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS',
    currency: 'No universal currency',
    code: 'NULL',
    minorUnit: null,
  },
  {
    conversionFactor: 0.8,
    entity: 'SOUTH SUDAN',
    currency: 'South Sudanese Pound',
    code: 'SSP',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'SRI LANKA',
    currency: 'Sri Lanka Rupee',
    code: 'LKR',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'SUDAN',
    currency: 'Sudanese Pound',
    code: 'SDG',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'SURINAME',
    currency: 'Surinam Dollar',
    code: 'SRD',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'SVALBARD AND JAN MAYEN',
    currency: 'Norwegian Krone',
    code: 'NOK',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'SWAZILAND',
    currency: 'Lilangeni',
    code: 'SZL',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'SWEDEN',
    currency: 'Swedish Krona',
    code: 'SEK',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'SWITZERLAND',
    currency: 'WIR Euro',
    code: 'CHE',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'SWITZERLAND',
    currency: 'Swiss Franc',
    code: 'CHF',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'SWITZERLAND',
    currency: 'WIR Franc',
    code: 'CHW',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'SYRIAN ARAB REPUBLIC',
    currency: 'Syrian Pound',
    code: 'SYP',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'TAIWAN, PROVINCE OF CHINA',
    currency: 'New Taiwan Dollar',
    code: 'TWD',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'TAJIKISTAN',
    currency: 'Somoni',
    code: 'TJS',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'TANZANIA, UNITED REPUBLIC OF',
    currency: 'Tanzanian Shilling',
    code: 'TZS',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'THAILAND',
    currency: 'Baht',
    code: 'THB',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'TOGO',
    currency: 'CFA Franc BCEAO',
    code: 'XOF',
    minorUnit: 0,
  },
  {
    conversionFactor: 0.8,
    entity: 'TOKELAU',
    currency: 'New Zealand Dollar',
    code: 'NZD',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'TONGA',
    currency: 'Pa’anga',
    code: 'TOP',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'TRINIDAD AND TOBAGO',
    currency: 'Trinidad and Tobago Dollar',
    code: 'TTD',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'TUNISIA',
    currency: 'Tunisian Dinar',
    code: 'TND',
    minorUnit: 3,
  },
  {
    conversionFactor: 0.8,
    entity: 'TURKEY',
    currency: 'Turkish Lira',
    code: 'TRY',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'TURKMENISTAN',
    currency: 'Turkmenistan New Manat',
    code: 'TMT',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'TUVALU',
    currency: 'Australian Dollar',
    code: 'AUD',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'UGANDA',
    currency: 'Uganda Shilling',
    code: 'UGX',
    minorUnit: 0,
  },
  {
    conversionFactor: 0.8,
    entity: 'UKRAINE',
    currency: 'Hryvnia',
    code: 'UAH',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'UNITED ARAB EMIRATES',
    currency: 'UAE Dirham',
    code: 'AED',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'UNITED KINGDOM',
    currency: 'Pound Sterling',
    code: 'GBP',
    minorUnit: 2,
  },
  {
    conversionFactor: 1,
    entity: 'UNITED STATES',
    currency: 'US Dollar',
    code: 'USD',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'UNITED STATES',
    currency: 'US Dollar (Next day)',
    code: 'USN',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'URUGUAY',
    currency: 'Uruguay Peso en Unidades Indexadas (URUIURUI)',
    code: 'UYI',
    minorUnit: 0,
  },
  {
    conversionFactor: 0.8,
    entity: 'URUGUAY',
    currency: 'Peso Uruguayo',
    code: 'UYU',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'UZBEKISTAN',
    currency: 'Uzbekistan Sum',
    code: 'UZS',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'VANUATU',
    currency: 'Vatu',
    code: 'VUV',
    minorUnit: 0,
  },
  {
    conversionFactor: 0.8,
    entity: 'VENEZUELA, BOLIVARIAN REPUBLIC OF',
    currency: 'Bolivar',
    code: 'VEF',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'VIET NAM',
    currency: 'Dong',
    code: 'VND',
    minorUnit: 0,
  },
  {
    conversionFactor: 0.8,
    entity: 'WALLIS AND FUTUNA',
    currency: 'CFP Franc',
    code: 'XPF',
    minorUnit: 0,
  },
  {
    conversionFactor: 0.8,
    entity: 'WESTERN SAHARA',
    currency: 'Moroccan Dirham',
    code: 'MAD',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'YEMEN',
    currency: 'Yemeni Rial',
    code: 'YER',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'ZAMBIA',
    currency: 'Zambian Kwacha',
    code: 'ZMW',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'ZIMBABWE',
    currency: 'Zimbabwe Dollar',
    code: 'ZWL',
    minorUnit: 2,
  },
  {
    conversionFactor: 0.8,
    entity: 'ZZ01_Bond Markets Unit European_EURCO',
    currency: 'Bond Markets Unit European Composite Unit (EURCO)',
    code: 'XBA',
    minorUnit: null,
  },
  {
    conversionFactor: 0.8,
    entity: 'ZZ02_Bond Markets Unit European_EMU-6',
    currency: 'Bond Markets Unit European Monetary Unit (E.M.U.-6)',
    code: 'XBB',
    minorUnit: null,
  },
  {
    conversionFactor: 0.8,
    entity: 'ZZ03_Bond Markets Unit European_EUA-9',
    currency: 'Bond Markets Unit European Unit of Account 9 (E.U.A.-9)',
    code: 'XBC',
    minorUnit: null,
  },
  {
    conversionFactor: 0.8,
    entity: 'ZZ04_Bond Markets Unit European_EUA-17',
    currency: 'Bond Markets Unit European Unit of Account 17 (E.U.A.-17)',
    code: 'XBD',
    minorUnit: null,
  },
  {
    conversionFactor: 0.8,
    entity: 'ZZ06_Testing_Code',
    currency: 'Codes specifically reserved for testing purposes',
    code: 'XTS',
    minorUnit: null,
  },
  {
    conversionFactor: 0.8,
    entity: 'ZZ07_No_Currency',
    currency:
      'The codes assigned for transactions where no currency is involved',
    code: 'XXX',
    minorUnit: null,
  },
  {
    conversionFactor: 0.8,
    entity: 'ZZ08_Gold',
    currency: 'Gold',
    code: 'XAU',
    minorUnit: null,
  },
  {
    conversionFactor: 0.8,
    entity: 'ZZ09_Palladium',
    currency: 'Palladium',
    code: 'XPD',
    minorUnit: null,
  },
  {
    conversionFactor: 0.8,
    entity: 'ZZ10_Platinum',
    currency: 'Platinum',
    code: 'XPT',
    minorUnit: null,
  },
  {
    conversionFactor: 0.8,
    entity: 'ZZ11_Silver',
    currency: 'Silver',
    code: 'XAG',
    minorUnit: null,
  },
];
