import { addDays, differenceInDays, eachDayOfInterval, endOfMonth, format, formatDistanceToNow, getDay, isWeekend, parse, startOfMonth } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export class DateUtils {
  static formatDate(date: Date | string, outputFormat: string): string {
    if (!date) {
      return '';
    }

    let dateObj: Date;

    if (typeof date === 'string') {
      dateObj = parse(date, 'yyyy-MM-dd', new Date());
    } else {
      dateObj = date;
    }

    return format(dateObj, outputFormat);
  }

  static getMonthName(month: number): string {
    const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return monthNames[month - 1];
  }

  static dateDiff(date1: string, date2: string = new Date().toISOString().split('T')[0]): string {
    if (!date1 || date1 === '0000-00-00' || !date2 || date2 === '0000-00-00') {
      return '';
    }

    const dt1 = parse(date1, 'yyyy-MM-dd', new Date());
    const dt2 = parse(date2, 'yyyy-MM-dd', new Date());

    return differenceInDays(dt1, dt2).toString();
  }

  static timeAgo(date: Date | string): string {
    if (typeof date === 'string') {
      date = parse(date, 'yyyy-MM-dd', new Date());
    }

    return formatDistanceToNow(date, { addSuffix: true, locale: ptBR });
  }

  static getDateObject(date: string, formatString = 'yyyy-MM-dd'): Date | null {
    const formattedDate = DateUtils.formatDate(date, formatString);
    return formattedDate ? parse(formattedDate, formatString, new Date()) : null;
  }

  static getShortMonthName(month: number): string {
    const shortMonthNames = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    return shortMonthNames[month - 1];
  }

  static getMonths(): { [key: string]: string } {
    return {
      '01': 'Janeiro',
      '02': 'Fevereiro',
      '03': 'Março',
      '04': 'Abril',
      '05': 'Maio',
      '06': 'Junho',
      '07': 'Julho',
      '08': 'Agosto',
      '09': 'Setembro',
      '10': 'Outubro',
      '11': 'Novembro',
      '12': 'Dezembro',
    };
  }

  static getDayOfWeek(date: string, full = false): string {
    const dayOfWeek = getDay(parse(date, 'yyyy-MM-dd', new Date()));
    const days = full ? ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'] : ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
    return days[dayOfWeek];
  }

  static getNextBusinessDay(date: string, daysToAdd: number, ignoredDays: string[] = []): string {
    let dateObj = parse(date, 'yyyy-MM-dd', new Date());
    let addedDays = 0;
    while (addedDays < daysToAdd) {
      dateObj = addDays(dateObj, 1);
      if (!isWeekend(dateObj) && !ignoredDays.includes(format(dateObj, 'yyyyMMdd'))) {
        addedDays++;
      }
    }
    return format(dateObj, 'yyyy-MM-dd');
  }

  static getDaysOfMonth(year: number, month: number, holidays: string[]): any[] {
    const start = startOfMonth(new Date(year, month - 1));
    const end = endOfMonth(new Date(year, month - 1));
    const days = eachDayOfInterval({ start, end });
    return days.map((day) => {
      const formattedDate = format(day, 'yyyy-MM-dd');
      const isHoliday = holidays.includes(formattedDate);
      return {
        date: formattedDate,
        isHoliday,
        dayOfWeek: DateUtils.getDayOfWeek(formattedDate),
      };
    });
  }
}
