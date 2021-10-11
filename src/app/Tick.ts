export class Tick
{
  date: Date;
  volume: number;
  high: number;
  low: number;
  close: number;
  open: number;

  constructor(date: Date, volume:number, high:number,  low:number, close:number,open:number) {

    this.date = date;
    this.open = open;
    this.high = high;
    this.low = low;
    this.close  = close;
    this.volume = volume;
  }


}
