import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeToEnd',
})
export class TimeToEnd implements PipeTransform {
  currentTime: number = new Date().getTime();
  dayMillis: number = 60 * 60 * 24 * 1000;
  months = [
    'Ene',
    'Feb',
    'Mar',
    'Abr',
    'May',
    'Jun',
    'Jul',
    'Ago',
    'Sep',
    'Oct',
    'Nov',
    'Dic',
  ];

  transform(value: number, ...args: unknown[]): string {
    const { currentTime, months } = this;

    if (currentTime >= args[0]) {
      const time = value - currentTime;
      const days = this.getDaysFromMillis(time);
      if (days > 0) {
        const finalDate = new Date(value);
        const txt = this.getText(days, finalDate, months);
        return txt;
      }
      return this.getCLoseText();
    }
    return this.getNotOpenText();
  }

  private getNotOpenText(): string {
    return 'Vaki sin abrir';
  }

  private getDaysFromMillis(millis: number): number {
    const days = millis / this.dayMillis;
    return Math.round(days);
  }

  private getCLoseText(): string {
    return 'Vaki cerrada';
  }

  private getText(days: number, date: Date, months: string[]) {
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    const txt = `${days} días antes del cierre ${month} ${day}, ${year}`;
    return txt;
  }
}
