import { Pipe, PipeTransform } from '@angular/core';
import { ICurrency } from '@vakers-data';

@Pipe({
  name: 'vakiCurrency',
})
export class VakiCurrencyPipe implements PipeTransform {
  transform(value: ICurrency, ...args: unknown[]): string {
    const currentCode = value?.code;
    if (currentCode) {
      const { conversionFactor, code } = value;
      return this.formatCurrency(args[0] as number, code, conversionFactor);
    }
    return this.formatCurrency(args[0] as number);
  }

  private formatCurrency(
    value: number,
    code: string = '',
    factor: number = 1
  ): string {
    return `${code} ${value * factor}`;
  }
}
