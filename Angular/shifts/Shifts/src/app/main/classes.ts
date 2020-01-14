export class Worker {

  private name: string;
  private surName: string;
  private userName: string;
   Password: string;
   saterdayHourCounter: number;
   nightHourCounter: number;
   isWorkedToday: boolean;
   isWorkedNight: boolean;
   isEnableSunday1: boolean;
   isEnableSunday2: boolean;
   isEnableSunday3: boolean;
   isEnableMonday1: boolean;
   isEnableMonday2: boolean;
   isEnableMonday3: boolean;
   isEnableTusday1: boolean;
   isEnableTusday2: boolean;
   isEnableTusday3: boolean;
   isEnableWensday1: boolean;
   isEnableWensday2: boolean;
   isEnableWensday3: boolean;
   isEnableThirsday1: boolean;
   isEnableThirsday2: boolean;
   isEnableThirsday3: boolean;
   isEnableFriday1: boolean;
   isEnableFriday2: boolean;
   isEnableFriday3: boolean;
   isEnableSuterday1: boolean;
   isEnableSuterday2: boolean;
   isEnableSuterday3: boolean;





  constructor (name: string,
    surName: string,
    userName: string,
    Password: string,
    saterdayShiftCounter: number,
    nightShiftCounter: number,
    isWorkedToday: boolean,
    isWorkedNight: boolean,
    isEnableSunday1: boolean,
    isEnableSunday2: boolean,
    isEnableSunday3: boolean,
    isEnableMonday1: boolean,
    isEnableMonday2: boolean,
    isEnableMonday3: boolean,
    isEnableTusday1: boolean,
    isEnableTusday2: boolean,
    isEnableTusday3: boolean,
    isEnableWensday1: boolean,
    isEnableWensday2: boolean,
    isEnableWensday3: boolean,
    isEnableThirsday1: boolean,
    isEnableThirsday2: boolean,
    isEnableThirsday3: boolean,
    isEnableFriday1: boolean,
    isEnableFriday2: boolean,
    isEnableFriday3: boolean,
    isEnableSuterday1: boolean,
    isEnableSuterday2: boolean,
    isEnableSuterday3: boolean) {
      this.name = name;
      this.surName = surName;
      this.userName = userName;
      this.Password = Password;
      this.saterdayHourCounter = saterdayShiftCounter;
      this.nightHourCounter = nightShiftCounter;
      this.isWorkedToday = isWorkedToday;
      this.isWorkedNight = isWorkedNight;
      this.isEnableSunday1 = isEnableSunday1;
      this.isEnableSunday2 = isEnableSunday2;
      this.isEnableSunday3 = isEnableSunday3;
      this.isEnableMonday1 = isEnableMonday1;
      this.isEnableMonday2 = isEnableMonday2;
      this.isEnableMonday3 = isEnableMonday3;
      this.isEnableTusday1 = isEnableTusday1;
      this.isEnableTusday2 = isEnableTusday2;
      this.isEnableTusday3 = isEnableTusday3;
      this.isEnableWensday1 = isEnableWensday1;
      this.isEnableWensday2 = isEnableWensday2;
      this.isEnableWensday3 = isEnableWensday3;
      this.isEnableThirsday1 = isEnableThirsday1;
      this.isEnableThirsday2 = isEnableThirsday2;
      this.isEnableThirsday3 = isEnableThirsday3;
      this.isEnableFriday1 = isEnableFriday1;
      this.isEnableFriday2 = isEnableFriday2;
      this.isEnableFriday3 = isEnableFriday3;
      this.isEnableSuterday1 = isEnableSuterday1;
      this.isEnableSuterday2 = isEnableSuterday2;
      this.isEnableSuterday3 = isEnableSuterday3;
  }

  public getWorkerName(): string {
      return this.name;
  }
  public getWorkerSurName(): string {
      return this.surName;
  }

  public gerWorkerUserName(): string {
    return this.userName;
  }

  public getWorkerNumberOfSaterdayShifts(): number {
    return this.saterdayHourCounter;
  }
  public getWorkerNumberOfNightShifts(): number {
    return this.nightHourCounter;
  }
  public getIsWorkedToday(): boolean {
    return this.isWorkedToday;
  }
  public getIsWorkedNight(): boolean {
    return this.isWorkedNight;
  }
  public setIsWorkedToday(isWorkedToday: boolean): void {
    this.isWorkedToday = isWorkedToday;
  }
  public setIsWorkedNight(isWorkedNight: boolean): void {
    this.isWorkedToday = isWorkedNight;
  }



}

export class Shift {

  private gurd1: string;
  private gurd2: string;

  constructor (gurd1: string, gurd2: string) {
      this.gurd1 = gurd1;
      this.gurd2 = gurd2;
  }

  public getGurd1Name(): string {
      return this.gurd1;
  }
  public getGurd2Name(): string {
      return this.gurd2;
  }

  public setGurd1(gurd1: string): void {
    this.gurd1 = gurd1;
  }

  public setGurd2(gurd2: string): void {
    this.gurd2 = gurd2;
  }


}

export class Day {

  private shift1: Shift;
  private shift2: Shift;
  private shift3: Shift;

  constructor (shift1: Shift, shift2: Shift, shift3: Shift) {
      this.shift1 = shift1;
      this.shift2 = shift2;
      this.shift3 = shift3;
  }

  public getShift1(): Shift {
      return this.shift1 ;
  }
  public getShift2(): Shift {
      return this.shift2;
  }

  public getShift3(): Shift {
    return this.shift3;
  }


}
