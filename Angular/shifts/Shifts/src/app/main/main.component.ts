import { Component, OnInit } from '@angular/core';
import {Worker, Shift, Day} from './classes';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  loginPage = true;
  mainPage = false;
  masterPage = false;

  UserPage = false;
  loadedWorker: Worker;

  enterLogin: string;
  enterPassword: string;


Anton = new Worker('אנטון', 'ברוסר', '000', '000', 0, 0, false , false, true, true, true, true, true,
true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true);
Leo = new Worker('לאו', 'קוגן', '111', '111', 0, 0, false , false, true, true, true, true, true,
true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true);
Lee = new Worker('לי', 'פלמרי', '222', '222',  0, 0, false , false, true, true, true, true, true,
true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true);
Yossi = new Worker('יוסי', 'יוסי', '333', '333', 0, 0, false , false, true, true, true, true, true,
true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true);
David = new Worker('דוד', 'דוד', '444', '444', 0, 0, false , false, true, true, true, true, true,
true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true);
Victor = new Worker('ויקטור', 'ויקטור', '555', '555', 0, 0, false , false, true, true, true, true, true,
true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true);
Ilan = new Worker('אילן', 'רבינוביץ', '666', '666', 0, 0, false , false, true, true, true, true, true,
true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true);
Edi = new Worker('אדי', 'בלדר', '777', '777', 0, 0, false , false, true, true, true, true, true,
true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true);
IdoA = new Worker('עידו.א', 'אטיאס', '888', '888', 0, 0, false , false, true, true, true, true, true,
true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true);
IdoB = new Worker('עידו.ב', 'בן עמי', '999', '999', 0, 0, false , false, true, true, true, true, true,
true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true);

arryOfAllWorkers: Worker[] = [
  this.Anton,
  this.Leo,
  this.Lee,
  this.Yossi,
  this.David,
  this.Victor,
  this.Ilan,
  this.Edi,
  this.IdoA,
  this.IdoB];



// ****************sunday Workers Data*****************
  sundayWorkers: Worker[];
  sundayBokerArr: Worker[];
  sundayErevArr: Worker[];
  sundayLaylarArr: Worker[];

sundayWorker1: string;
sundayWorker2: string;
sundayWorker3: string;
sundayWorker4: string;
sundayWorker5: string;
sundayWorker6: string;

// *******************Monday Workers Data**************
  mondayWorkers: Worker[];
  mondayBokerArr: Worker[];
  mondayErevArr: Worker[];
  mondayLaylarArr: Worker[];

mondayWorker1: string;
mondayWorker2: string;
mondayWorker3: string;
mondayWorker4: string;
mondayWorker5: string;
mondayWorker6: string;

// ********************Tusday Worker Data***************
  tusdayWorkers: Worker[];
  tusdayBokerArr: Worker[];
  tusdayErevArr: Worker[];
  tusdayLaylarArr: Worker[];

tusdayWorker1: string;
tusdayWorker2: string;
tusdayWorker3: string;
tusdayWorker4: string;
tusdayWorker5: string;
tusdayWorker6: string;

// ********************Wensday Worker Data***************
wensdayWorkers: Worker[];
wensdayBokerArr: Worker[];
wensdayErevArr: Worker[];
wensdayLaylarArr: Worker[];

wensdayWorker1: string;
wensdayWorker2: string;
wensdayWorker3: string;
wensdayWorker4: string;
wensdayWorker5: string;
wensdayWorker6: string;

// ********************Thirsday Worker Data***************
thirsdayWorkers: Worker[];
thirsdayBokerArr: Worker[];
thirsdayErevArr: Worker[];
thirsdayLaylarArr: Worker[];

thirsdayWorker1: string;
thirsdayWorker2: string;
thirsdayWorker3: string;
thirsdayWorker4: string;
thirsdayWorker5: string;
thirsdayWorker6: string;

// ********************Friday Worker Data***************
fridayWorkers: Worker[];
fridayBokerArr: Worker[];
fridayErevArr: Worker[];
fridayLaylarArr: Worker[];

fridayWorker1: string;
fridayWorker2: string;
fridayWorker3: string;
fridayWorker4: string;
fridayWorker5: string;
fridayWorker6: string;

// ********************Suterday Worker Data***************
suterdayWorkers: Worker[];
suterdayBokerArr: Worker[];
suterdayErevArr: Worker[];
suterdayLaylarArr: Worker[];

suterdayWorker1: string;
suterdayWorker2: string;
suterdayWorker3: string;
suterdayWorker4: string;
suterdayWorker5: string;
suterdayWorker6: string;



nightWorker1 = 'יוסי';
nightWorker2 =  'אנטון';


sundayBoker = new Shift(this.sundayWorker1, this.sundayWorker2);
sundayErev = new Shift(this.sundayWorker3, this.sundayWorker4);
sundayLayla = new Shift(this.sundayWorker5, this.sundayWorker6);

sunday = new Day(this.sundayBoker, this.sundayErev, this.sundayLayla);




// *************************Can Or Canot*******************************

canSundayBoker = true;
canSundayErev = true;
canSundayLayla = true;
canMondayBoker = true;
canMondayErev = true;
canMondayLayla = true;
canTusdayBoker = true;
canTusdayErev = true;
canTusdayLayla = true;
canWensdayBoker = true;
canWensdayErev = true;
canWensdayLayla = true;
canThirsdayBoker = true;
canThirsdayErev = true;
canThirsdayLayla = true;
canFridayBoker = true;
canFridayErev = true;
canFridayLayla = true;
canSuterdayBoker = true;
canSuterdayErev = true;
canSuterdayLayla = true;




  ngOnInit() {
   this.fillTheWeak();
  }

  fillTheWeak() {
    this.fillSunday();
    this.fillMonday();
    this.fillTusday();
    this.fillWensday();
    this.fillThirsday();
    this.fillFriday();
    this.fillSuterday();
  }



  onLoginClick() {
    for (let i = 0; i < this.arryOfAllWorkers.length; i++) {
      if (this.arryOfAllWorkers[i].gerWorkerUserName() === this.enterLogin &&
          this.arryOfAllWorkers[i].Password === this.enterPassword) {
            this.loadedWorker = this.arryOfAllWorkers[i];
            this.loginPage = false;
            this.UserPage = true;
          }
    }
    console.log(this.loadedWorker);
    console.log(this.canFridayBoker);
    if (this.enterLogin === 'master' && this.enterPassword === 'master') {
      this.loginPage = false;
      this.masterPage = true;
    }
  }

  logout () {
    this.UserPage = false;
    this.masterPage = false;
    this.mainPage = false;
    this.loginPage = true;
    this.loadedWorker = undefined;
  }


  sendShifts() {
    for (let i = 0; i < this.arryOfAllWorkers.length; i++) {
      this.arryOfAllWorkers[i].isWorkedToday = false;
    }
    this.fillTheWeak();
    this.UserPage = false;
    this.mainPage = true;
  }


  randomWorker (arr, workedArr) {
    const y = Math.floor(Math.random() * (arr.length)) + 0;
    const randWorker = arr[y];
    arr.splice(y, 1);
      return randWorker;
  }

  getWorkerDetailsByName(Workername) {
    for (let i = 0; i < this.arryOfAllWorkers.length; i++) {
      if (this.arryOfAllWorkers[i].getWorkerName() === Workername) {
        return this.arryOfAllWorkers[i];
      }
    }
  }

  WorkedToday(WorkerName, arrOfDay) {
    for (let i = 0; i < arrOfDay.length; i++) {
      if (arrOfDay[i].getWorkerName() === WorkerName) {
        arrOfDay[i].isWorkedToday = true;
      }
    }
  }

  WorkedAtNight(WorkerName, arrOfDay) {
    for (let i = 0; i < arrOfDay.length; i++) {
      if (arrOfDay[i].getWorkerName() === WorkerName) {
        this.arryOfAllWorkers[i].nightHourCounter ++ ;
      }
    }
  }


// *******************************fill Sunday*****************************
  fillSunday() {
    this.fillSundayBoker();
    this.fillSundayErev();
    this.fillSundayLayla();
  }

  fillSundayBoker() {
    this.sundayBokerArr = [];
    this.sundayWorkers = this.arryOfAllWorkers;
    for (let i = 0 ; i < this.sundayWorkers.length; i++) {
      if (this.sundayWorkers[i].getIsWorkedNight() === false)  {
        if (this.sundayWorkers[i].getIsWorkedToday() === false) {
          if (this.sundayWorkers[i].isEnableSunday1 ===  true) {
            if (this.sundayWorkers[i].getWorkerName() !== this.nightWorker1 &&
                this.sundayWorkers[i].getWorkerName() !== this.nightWorker2 ) {
              this.sundayBokerArr.push(this.sundayWorkers[i]);
            }
          }
        }
      }
    }
    this.sundayWorker1 = this.randomWorker(this.sundayBokerArr, this.sundayWorkers).getWorkerName();
    this.WorkedToday(this.sundayWorker1, this.sundayWorkers);
    this.sundayWorker2 = this.randomWorker(this.sundayBokerArr, this.sundayWorkers).getWorkerName();
    this.WorkedToday(this.sundayWorker2, this.sundayWorkers);
  }

  fillSundayErev() {
    this.sundayErevArr = [];
    for (let i = 0 ; i < this.sundayWorkers.length; i++) {
      if (this.sundayWorkers[i].getIsWorkedNight() === false)  {
        if (this.sundayWorkers[i].getIsWorkedToday() === false) {
          if (this.sundayWorkers[i].isEnableSunday2 ===  true) {
            this.sundayErevArr.push(this.sundayWorkers[i]);
          }
        }
      }
    }
    this.sundayWorker3 = this.randomWorker(this.sundayErevArr, this.sundayWorkers).getWorkerName();
    this.WorkedToday(this.sundayWorker3, this.sundayWorkers);
    this.sundayWorker4 = this.randomWorker(this.sundayErevArr, this.sundayWorkers).getWorkerName();
    this.WorkedToday(this.sundayWorker4, this.sundayWorkers);
  }

  fillSundayLayla() {
    this.sundayLaylarArr = [];
    for (let i = 0 ; i < this.sundayWorkers.length; i++) {
      if (this.sundayWorkers[i].getIsWorkedNight() === false)  {
        if (this.sundayWorkers[i].getIsWorkedToday() === false) {
          if (this.sundayWorkers[i].isEnableSunday3 ===  true) {
            if (this.sundayWorkers[i].nightHourCounter < 5) {
              this.sundayLaylarArr.push(this.sundayWorkers[i]);
            }
          }
        }
      }
    }
    this.sundayWorker5 = this.randomWorker(this.sundayLaylarArr, this.sundayWorkers).getWorkerName();
    this.WorkedToday(this.sundayWorker5, this.sundayWorkers);
    this.WorkedAtNight(this.sundayWorker5, this.sundayWorkers);
    this.sundayWorker6 = this.randomWorker(this.sundayLaylarArr, this.sundayWorkers).getWorkerName();
    this.WorkedToday(this.sundayWorker6, this.sundayWorkers);
    this.WorkedAtNight(this.sundayWorker6, this.sundayWorkers);
  }


// *******************************fill Monday*****************************

fillMonday() {
  this.fillMondayBoker();
  this.fillMondayErev();
  this.fillMondayLayla();
}

  fillMondayBoker() {
    this.mondayBokerArr = [];
    this.mondayWorkers = this.arryOfAllWorkers;
    this.getWorkerDetailsByName(this.sundayWorker1).isWorkedToday = false;
    this.getWorkerDetailsByName(this.sundayWorker2).isWorkedToday = false;
    this.getWorkerDetailsByName(this.sundayWorker3).isWorkedToday = false;
    this.getWorkerDetailsByName(this.sundayWorker4).isWorkedToday = false;
    this.getWorkerDetailsByName(this.sundayWorker5).isWorkedToday = false;
    this.getWorkerDetailsByName(this.sundayWorker6).isWorkedToday = false;
    for (let i = 0 ; i < (this.mondayWorkers.length); i++) {
      if (this.mondayWorkers[i].getIsWorkedNight() === false)  {
        if (this.mondayWorkers[i].getIsWorkedToday() === false) {
          if (this.mondayWorkers[i].isEnableMonday1 ===  true) {
            if (this.mondayWorkers[i].getWorkerName() !== this.sundayWorker5 &&
                this.mondayWorkers[i].getWorkerName() !== this.sundayWorker6 ) {
              this.mondayBokerArr.push(this.mondayWorkers[i]);
            }
          }
        }
      }
    }
    this.mondayWorker1 = this.randomWorker(this.mondayBokerArr, this.mondayWorkers).getWorkerName();
    this.WorkedToday(this.mondayWorker1, this.mondayWorkers);
    this.mondayWorker2 = this.randomWorker(this.mondayBokerArr, this.mondayWorkers).getWorkerName();
    this.WorkedToday(this.mondayWorker2, this.mondayWorkers);
  }

  fillMondayErev() {
    this.mondayErevArr = [];
    for (let i = 0 ; i < (this.mondayWorkers.length ); i++) {
      if (this.mondayWorkers[i].getIsWorkedNight() === false)  {
        if (this.mondayWorkers[i].getIsWorkedToday() === false) {
          if (this.mondayWorkers[i].isEnableMonday2 ===  true) {
            this.mondayErevArr.push(this.mondayWorkers[i]);
          }
        }
      }
    }
    this.mondayWorker3 = this.randomWorker(this.mondayErevArr, this.mondayWorkers).getWorkerName();
    this.WorkedToday(this.mondayWorker3, this.mondayWorkers);
    this.mondayWorker4 = this.randomWorker(this.mondayErevArr, this.mondayWorkers).getWorkerName();
    this.WorkedToday(this.mondayWorker4, this.mondayWorkers);
  }

  fillMondayLayla() {
    this.mondayLaylarArr = [];
    for (let i = 0 ; i < (this.mondayWorkers.length ); i++) {
      if (this.mondayWorkers[i].getIsWorkedNight() === false)  {
        if (this.mondayWorkers[i].getIsWorkedToday() === false) {
          if (this.mondayWorkers[i].isEnableMonday3 ===  true) {
            if (this.mondayWorkers[i].nightHourCounter < 5) {
              this.mondayLaylarArr.push(this.mondayWorkers[i]);
            }
          }
        }
      }
    }
    this.mondayWorker5 = this.randomWorker(this.mondayLaylarArr, this.mondayWorkers).getWorkerName();
    this.WorkedToday(this.sundayWorker5, this.mondayWorkers);
    this.WorkedAtNight(this.sundayWorker5, this.mondayWorkers);
    this.mondayWorker6 = this.randomWorker(this.mondayLaylarArr, this.mondayWorkers).getWorkerName();
    this.WorkedToday(this.mondayWorker6, this.mondayWorkers);
    this.WorkedAtNight(this.mondayWorker6, this.mondayWorkers);
  }

// *******************************fill Tusday*****************************


fillTusday() {
  this.fillTusdayBoker();
  this.fillTusdayErev();
  this.fillTusdayLayla();
}

  fillTusdayBoker() {
    this.tusdayBokerArr = [];
    this.tusdayWorkers = this.arryOfAllWorkers;
    this.getWorkerDetailsByName(this.mondayWorker1).isWorkedToday = false;
    this.getWorkerDetailsByName(this.mondayWorker2).isWorkedToday = false;
    this.getWorkerDetailsByName(this.mondayWorker3).isWorkedToday = false;
    this.getWorkerDetailsByName(this.mondayWorker4).isWorkedToday = false;
    this.getWorkerDetailsByName(this.mondayWorker5).isWorkedToday = false;
    this.getWorkerDetailsByName(this.mondayWorker6).isWorkedToday = false;
    for (let i = 0 ; i < (this.tusdayWorkers.length ); i++) {
      if (this.tusdayWorkers[i].getIsWorkedNight() === false)  {
        if (this.tusdayWorkers[i].getIsWorkedToday() === false) {
          if (this.tusdayWorkers[i].isEnableTusday1 ===  true) {
            if (this.tusdayWorkers[i].getWorkerName() !== this.mondayWorker5 &&
                this.tusdayWorkers[i].getWorkerName() !== this.mondayWorker6 ) {
              this.tusdayBokerArr.push(this.tusdayWorkers[i]);
            }
          }
        }
      }
    }
    this.tusdayWorker1 = this.randomWorker(this.tusdayBokerArr, this.tusdayWorkers).getWorkerName();
    this.WorkedToday(this.tusdayWorker1, this.tusdayWorkers);
    this.tusdayWorker2 = this.randomWorker(this.tusdayBokerArr, this.tusdayWorkers).getWorkerName();
    this.WorkedToday(this.tusdayWorker2, this.tusdayWorkers);
  }

  fillTusdayErev() {
    this.tusdayErevArr = [];
    for (let i = 0 ; i < (this.tusdayWorkers.length ); i++) {
      if (this.tusdayWorkers[i].getIsWorkedNight() === false)  {
        if (this.tusdayWorkers[i].getIsWorkedToday() === false) {
          if (this.tusdayWorkers[i].isEnableTusday2 ===  true) {
            this.tusdayErevArr.push(this.tusdayWorkers[i]);
          }
        }
      }
    }
    this.tusdayWorker3 = this.randomWorker(this.tusdayErevArr, this.tusdayWorkers).getWorkerName();
    this.WorkedToday(this.tusdayWorker3, this.tusdayWorkers);
    this.tusdayWorker4 = this.randomWorker(this.tusdayErevArr, this.tusdayWorkers).getWorkerName();
    this.WorkedToday(this.tusdayWorker4, this.tusdayWorkers);
  }

  fillTusdayLayla() {
    this.tusdayLaylarArr = [];
    for (let i = 0 ; i < (this.tusdayWorkers.length); i++) {
      if (this.tusdayWorkers[i].getIsWorkedNight() === false)  {
        if (this.tusdayWorkers[i].getIsWorkedToday() === false) {
          if (this.tusdayWorkers[i].isEnableTusday3 ===  true) {
            if (this.tusdayWorkers[i].nightHourCounter < 5) {
              this.tusdayLaylarArr.push(this.tusdayWorkers[i]);
            }
          }
        }
      }
    }
    this.tusdayWorker5 = this.randomWorker(this.tusdayLaylarArr, this.tusdayWorkers).getWorkerName();
    this.WorkedToday(this.tusdayWorker5, this.tusdayWorkers);
    this.WorkedAtNight(this.tusdayWorker5, this.tusdayWorkers);
    this.tusdayWorker6 = this.randomWorker(this.tusdayLaylarArr, this.tusdayWorkers).getWorkerName();
    this.WorkedToday(this.tusdayWorker6, this.tusdayWorkers);
    this.WorkedAtNight(this.tusdayWorker6, this.tusdayWorkers);
  }


// // *******************************fill Wensday*****************************


fillWensday() {
  this.fillWensdayBoker();
  this.fillWensdayErev();
  this.fillWensdayLayla();
}

  fillWensdayBoker() {
    this.wensdayBokerArr = [];
    this.wensdayWorkers = this.arryOfAllWorkers;
    this.getWorkerDetailsByName(this.tusdayWorker1).isWorkedToday = false;
    this.getWorkerDetailsByName(this.tusdayWorker2).isWorkedToday = false;
    this.getWorkerDetailsByName(this.tusdayWorker3).isWorkedToday = false;
    this.getWorkerDetailsByName(this.tusdayWorker4).isWorkedToday = false;
    this.getWorkerDetailsByName(this.tusdayWorker5).isWorkedToday = false;
    this.getWorkerDetailsByName(this.tusdayWorker6).isWorkedToday = false;
    for (let i = 0 ; i < (this.wensdayWorkers.length); i++) {
      if (this.wensdayWorkers[i].getIsWorkedNight() === false)  {
        if (this.wensdayWorkers[i].getIsWorkedToday() === false) {
          if (this.wensdayWorkers[i].isEnableWensday1 ===  true) {
            if (this.wensdayWorkers[i].getWorkerName() !== this.tusdayWorker5 &&
                this.wensdayWorkers[i].getWorkerName() !== this.tusdayWorker6 ) {
              this.wensdayBokerArr.push(this.wensdayWorkers[i]);
            }
          }
        }
      }
    }
    this.wensdayWorker1 = this.randomWorker(this.wensdayBokerArr, this.wensdayWorkers).getWorkerName();
    this.WorkedToday(this.wensdayWorker1, this.wensdayWorkers);
    this.wensdayWorker2 = this.randomWorker(this.wensdayBokerArr, this.wensdayWorkers).getWorkerName();
    this.WorkedToday(this.wensdayWorker2, this.wensdayWorkers);
  }

  fillWensdayErev() {
    this.wensdayErevArr = [];
    for (let i = 0 ; i < (this.wensdayWorkers.length ); i++) {
      if (this.wensdayWorkers[i].getIsWorkedNight() === false)  {
        if (this.wensdayWorkers[i].getIsWorkedToday() === false) {
          if (this.wensdayWorkers[i].isEnableWensday2 ===  true) {
            this.wensdayErevArr.push(this.wensdayWorkers[i]);
          }
        }
      }
    }
    this.wensdayWorker3 = this.randomWorker(this.wensdayErevArr, this.wensdayWorkers).getWorkerName();
    this.WorkedToday(this.wensdayWorker3, this.wensdayWorkers);
    this.wensdayWorker4 = this.randomWorker(this.wensdayErevArr, this.wensdayWorkers).getWorkerName();
    this.WorkedToday(this.wensdayWorker4, this.wensdayWorkers);
  }

  fillWensdayLayla() {
    this.wensdayLaylarArr = [];
    for (let i = 0 ; i < (this.wensdayWorkers.length ); i++) {
      if (this.wensdayWorkers[i].getIsWorkedNight() === false)  {
        if (this.wensdayWorkers[i].getIsWorkedToday() === false) {
          if (this.wensdayWorkers[i].isEnableWensday3 ===  true) {
            if (this.wensdayWorkers[i].nightHourCounter < 5) {
              this.wensdayLaylarArr.push(this.wensdayWorkers[i]);
            }
          }
        }
      }
    }
    this.wensdayWorker5 = this.randomWorker(this.wensdayLaylarArr, this.wensdayWorkers).getWorkerName();
    this.WorkedToday(this.wensdayWorker5, this.wensdayWorkers);
    this.WorkedAtNight(this.wensdayWorker5, this.wensdayWorkers);
    this.wensdayWorker6 = this.randomWorker(this.wensdayLaylarArr, this.wensdayWorkers).getWorkerName();
    this.WorkedToday(this.wensdayWorker6, this.wensdayWorkers);
    this.WorkedAtNight(this.wensdayWorker6, this.wensdayWorkers);
  }

// // *******************************fill Thirsday*****************************


fillThirsday() {
  this.fillThirsdayBoker();
  this.fillThirsdayErev();
  this.fillThirsdayLayla();
}

  fillThirsdayBoker() {
    this.thirsdayBokerArr = [];
    this.thirsdayWorkers = this.arryOfAllWorkers;
    this.getWorkerDetailsByName(this.wensdayWorker1).isWorkedToday = false;
    this.getWorkerDetailsByName(this.wensdayWorker2).isWorkedToday = false;
    this.getWorkerDetailsByName(this.wensdayWorker3).isWorkedToday = false;
    this.getWorkerDetailsByName(this.wensdayWorker4).isWorkedToday = false;
    this.getWorkerDetailsByName(this.wensdayWorker5).isWorkedToday = false;
    this.getWorkerDetailsByName(this.wensdayWorker6).isWorkedToday = false;
    for (let i = 0 ; i < (this.thirsdayWorkers.length); i++) {
      if (this.thirsdayWorkers[i].getIsWorkedNight() === false)  {
        if (this.thirsdayWorkers[i].getIsWorkedToday() === false) {
          if (this.thirsdayWorkers[i].isEnableThirsday1 ===  true) {
            if (this.thirsdayWorkers[i].getWorkerName() !== this.wensdayWorker5 &&
                this.thirsdayWorkers[i].getWorkerName() !== this.wensdayWorker6 ) {
              this.thirsdayBokerArr.push(this.thirsdayWorkers[i]);
            }
          }
        }
      }
    }
    this.thirsdayWorker1 = this.randomWorker(this.thirsdayBokerArr, this.thirsdayWorkers).getWorkerName();
    this.WorkedToday(this.thirsdayWorker1, this.thirsdayWorkers);
    this.thirsdayWorker2 = this.randomWorker(this.thirsdayBokerArr, this.thirsdayWorkers).getWorkerName();
    this.WorkedToday(this.thirsdayWorker2, this.thirsdayWorkers);
  }

  fillThirsdayErev() {
    this.thirsdayErevArr = [];
    for (let i = 0 ; i < (this.thirsdayWorkers.length); i++) {
      if (this.thirsdayWorkers[i].getIsWorkedNight() === false)  {
        if (this.thirsdayWorkers[i].getIsWorkedToday() === false) {
          if (this.thirsdayWorkers[i].isEnableThirsday2 ===  true) {
            this.thirsdayErevArr.push(this.thirsdayWorkers[i]);
          }
        }
      }
    }
    this.thirsdayWorker3 = this.randomWorker(this.thirsdayErevArr, this.thirsdayWorkers).getWorkerName();
    this.WorkedToday(this.thirsdayWorker3, this.thirsdayWorkers);
    this.thirsdayWorker4 = this.randomWorker(this.thirsdayErevArr, this.thirsdayWorkers).getWorkerName();
    this.WorkedToday(this.thirsdayWorker4, this.thirsdayWorkers);
  }

  fillThirsdayLayla() {
    this.thirsdayLaylarArr = [];
    for (let i = 0 ; i < (this.thirsdayWorkers.length ); i++) {
      if (this.thirsdayWorkers[i].getIsWorkedNight() === false)  {
        if (this.thirsdayWorkers[i].getIsWorkedToday() === false) {
          if (this.thirsdayWorkers[i].isEnableThirsday3 ===  true) {
            if (this.thirsdayWorkers[i].nightHourCounter < 5) {
              this.thirsdayLaylarArr.push(this.thirsdayWorkers[i]);
            }
          }
        }
      }
    }
    this.thirsdayWorker5 = this.randomWorker(this.thirsdayLaylarArr, this.thirsdayWorkers).getWorkerName();
    this.WorkedToday(this.thirsdayWorker5, this.thirsdayWorkers);
    this.WorkedAtNight(this.thirsdayWorker5, this.thirsdayWorkers);
    this.thirsdayWorker6 = this.randomWorker(this.thirsdayLaylarArr, this.thirsdayWorkers).getWorkerName();
    this.WorkedToday(this.thirsdayWorker6, this.thirsdayWorkers);
    this.WorkedAtNight(this.thirsdayWorker6, this.thirsdayWorkers);
  }


// // *******************************fill Friday*****************************


fillFriday() {
  this.fillFridayBoker();
  this.fillFridayErev();
  this.fillFridayLayla();
}

  fillFridayBoker() {
    this.fridayBokerArr = [];
    this.fridayWorkers = this.arryOfAllWorkers;
    this.getWorkerDetailsByName(this.thirsdayWorker1).isWorkedToday = false;
    this.getWorkerDetailsByName(this.thirsdayWorker2).isWorkedToday = false;
    this.getWorkerDetailsByName(this.thirsdayWorker3).isWorkedToday = false;
    this.getWorkerDetailsByName(this.thirsdayWorker4).isWorkedToday = false;
    this.getWorkerDetailsByName(this.thirsdayWorker5).isWorkedToday = false;
    this.getWorkerDetailsByName(this.thirsdayWorker6).isWorkedToday = false;
    for (let i = 0 ; i < (this.fridayWorkers.length); i++) {
      if (this.fridayWorkers[i].getIsWorkedNight() === false)  {
        if (this.fridayWorkers[i].getIsWorkedToday() === false) {
          if (this.fridayWorkers[i].isEnableFriday1 ===  true) {
            if (this.fridayWorkers[i].getWorkerName() !== this.thirsdayWorker5 &&
                this.fridayWorkers[i].getWorkerName() !== this.thirsdayWorker6 ) {
              this.fridayBokerArr.push(this.fridayWorkers[i]);
            }
          }
        }
      }
    }
    this.fridayWorker1 = this.randomWorker(this.fridayBokerArr, this.fridayWorkers).getWorkerName();
    this.WorkedToday(this.fridayWorker1, this.fridayWorkers);
    this.fridayWorker2 = this.randomWorker(this.fridayBokerArr, this.fridayWorkers).getWorkerName();
    this.WorkedToday(this.fridayWorker2, this.fridayWorkers);
  }

  fillFridayErev() {
    this.fridayErevArr = [];
    for (let i = 0 ; i < (this.fridayWorkers.length); i++) {
      if (this.fridayWorkers[i].getIsWorkedNight() === false)  {
        if (this.fridayWorkers[i].getIsWorkedToday() === false) {
          if (this.fridayWorkers[i].isEnableFriday2 ===  true) {
            this.fridayErevArr.push(this.fridayWorkers[i]);
          }
        }
      }
    }
    this.fridayWorker3 = this.randomWorker(this.fridayErevArr, this.fridayWorkers).getWorkerName();
    this.WorkedToday(this.fridayWorker3, this.fridayWorkers);
    this.getWorkerDetailsByName(this.fridayWorker3).saterdayHourCounter ++ ;
    this.fridayWorker4 = this.randomWorker(this.fridayErevArr, this.thirsdayWorkers).getWorkerName();
    this.WorkedToday(this.fridayWorker4, this.fridayWorkers);
    this.getWorkerDetailsByName(this.fridayWorker4).saterdayHourCounter ++ ;
  }

  fillFridayLayla() {
    this.fridayLaylarArr = [];
    for (let i = 0 ; i < (this.fridayWorkers.length ); i++) {
      if (this.fridayWorkers[i].getIsWorkedNight() === false)  {
        if (this.fridayWorkers[i].getIsWorkedToday() === false) {
          if (this.fridayWorkers[i].isEnableFriday3 ===  true) {
            if (this.fridayWorkers[i].nightHourCounter < 5) {
              this.fridayLaylarArr.push(this.fridayWorkers[i]);
            }
          }
        }
      }
    }
    this.fridayWorker5 = this.randomWorker(this.fridayLaylarArr, this.fridayWorkers).getWorkerName();
    this.WorkedToday(this.fridayWorker5, this.fridayWorkers);
    this.WorkedAtNight(this.fridayWorker5, this.fridayWorkers);
    this.getWorkerDetailsByName(this.fridayWorker5).saterdayHourCounter ++ ;
    this.fridayWorker6 = this.randomWorker(this.fridayLaylarArr, this.fridayWorkers).getWorkerName();
    this.WorkedToday(this.fridayWorker6, this.fridayWorkers);
    this.WorkedAtNight(this.fridayWorker6, this.fridayWorkers);
    this.getWorkerDetailsByName(this.fridayWorker6).saterdayHourCounter ++ ;
  }


// // *******************************fill Saterday*****************************


fillSuterday() {
  this.fillSuterdayBoker();
  this.fillSuterdayErev();
  this.fillSuterdayLayla();
}

  fillSuterdayBoker() {
    this.suterdayBokerArr = [];
    this.suterdayWorkers = this.arryOfAllWorkers;
    this.getWorkerDetailsByName(this.fridayWorker1).isWorkedToday = false;
    this.getWorkerDetailsByName(this.fridayWorker2).isWorkedToday = false;
    this.getWorkerDetailsByName(this.fridayWorker3).isWorkedToday = false;
    this.getWorkerDetailsByName(this.fridayWorker4).isWorkedToday = false;
    this.getWorkerDetailsByName(this.fridayWorker5).isWorkedToday = false;
    this.getWorkerDetailsByName(this.fridayWorker6).isWorkedToday = false;
    for (let i = 0 ; i < (this.suterdayWorkers.length); i++) {
      if (this.suterdayWorkers[i].getIsWorkedNight() === false)  {
        if (this.suterdayWorkers[i].getIsWorkedToday() === false) {
          if (this.suterdayWorkers[i].isEnableSunday1 ===  true) {
            if (this.suterdayWorkers[i].getWorkerName() !== this.fridayWorker5 &&
                this.suterdayWorkers[i].getWorkerName() !== this.fridayWorker6 ) {
              this.suterdayBokerArr.push(this.thirsdayWorkers[i]);
            }
          }
        }
      }
    }
    this.suterdayWorker1 = this.randomWorker(this.suterdayBokerArr, this.suterdayWorkers).getWorkerName();
    this.WorkedToday(this.suterdayWorker1, this.suterdayWorkers);
    this.getWorkerDetailsByName(this.suterdayWorker1).saterdayHourCounter ++ ;
    this.suterdayWorker2 = this.randomWorker(this.suterdayBokerArr, this.suterdayWorkers).getWorkerName();
    this.WorkedToday(this.suterdayWorker2, this.suterdayWorkers);
    this.getWorkerDetailsByName(this.suterdayWorker2).saterdayHourCounter ++ ;

  }

  fillSuterdayErev() {
    this.suterdayErevArr = [];
    for (let i = 0 ; i < (this.suterdayWorkers.length); i++) {
      if (this.suterdayWorkers[i].getIsWorkedNight() === false)  {
        if (this.suterdayWorkers[i].getIsWorkedToday() === false) {
          if (this.suterdayWorkers[i].isEnableSunday2 ===  true) {
            this.suterdayErevArr.push(this.suterdayWorkers[i]);
          }
        }
      }
    }
    this.suterdayWorker3 = this.randomWorker(this.suterdayErevArr, this.suterdayWorkers).getWorkerName();
    this.WorkedToday(this.suterdayWorker3, this.suterdayWorkers);
    this.getWorkerDetailsByName(this.suterdayWorker3).saterdayHourCounter ++ ;

    this.suterdayWorker4 = this.randomWorker(this.suterdayErevArr, this.suterdayWorkers).getWorkerName();
    this.WorkedToday(this.suterdayWorker4, this.suterdayWorkers);
    this.getWorkerDetailsByName(this.suterdayWorker4).saterdayHourCounter ++ ;

  }

  fillSuterdayLayla() {
    this.suterdayLaylarArr = [];
    for (let i = 0 ; i < (this.suterdayWorkers.length ); i++) {
      if (this.suterdayWorkers[i].getIsWorkedNight() === false)  {
        if (this.suterdayWorkers[i].getIsWorkedToday() === false) {
          if (this.suterdayWorkers[i].isEnableSunday3 ===  true) {
            if (this.suterdayWorkers[i].nightHourCounter < 5) {
              this.suterdayLaylarArr.push(this.suterdayWorkers[i]);
            }
          }
        }
      }
    }
    this.suterdayWorker5 = this.randomWorker(this.suterdayLaylarArr, this.suterdayWorkers).getWorkerName();
    this.WorkedToday(this.suterdayWorker5, this.suterdayWorkers);
    this.WorkedAtNight(this.suterdayWorker5, this.suterdayWorkers);
    this.nightWorker1 = this.suterdayWorker5;
    this.suterdayWorker6 = this.randomWorker(this.suterdayLaylarArr, this.suterdayWorkers).getWorkerName();
    this.WorkedToday(this.suterdayWorker6, this.suterdayWorkers);
    this.WorkedAtNight(this.suterdayWorker6, this.suterdayWorkers);
    this.nightWorker2 = this.suterdayWorker6;
  }




  // ********************************Can Or Canot Do Shifts Functions************************************


 // **********Sunday*************
    block11() {
      this.canSundayBoker = !this.canSundayBoker;
      if (this.canSundayBoker === false) {
        this.loadedWorker.isEnableSunday1 = false;
      } else {
        this.loadedWorker.isEnableSunday1 = true;
      }
    }

    block12() {
      this.canSundayErev = !this.canSundayErev;
      if (this.canSundayErev === false) {
        this.loadedWorker.isEnableSunday2 = false;
      } else {
        this.loadedWorker.isEnableSunday2 = true;
      }
    }

    block13() {
      this.canSundayLayla = !this.canSundayLayla;
      if (this.canSundayLayla === false) {
        this.loadedWorker.isEnableSuterday3 = false;
      } else {
        this.loadedWorker.isEnableSunday3 = true;
      }
    }


    // **********Monday*************
    block21() {
      this.canMondayBoker = !this.canMondayBoker;
      if (this.canMondayBoker === false) {
        this.loadedWorker.isEnableMonday1 = false;
      } else {
        this.loadedWorker.isEnableMonday1 = true;
      }
    }

    block22() {
      this.canMondayErev = !this.canMondayErev;
      if (this.canMondayErev === false) {
        this.loadedWorker.isEnableMonday2 = false;
      } else {
        this.loadedWorker.isEnableMonday2 = true;
      }
    }

    block23() {
      this.canMondayLayla = !this.canMondayLayla;
      if (this.canMondayLayla === false) {
        this.loadedWorker.isEnableMonday3 = false;
      } else {
        this.loadedWorker.isEnableMonday3 = true;
      }
    }


  // **********Tusday*************
    block31() {
      this.canTusdayBoker = !this.canTusdayBoker;
      if (this.canTusdayBoker === false) {
        this.loadedWorker.isEnableTusday1 = false;
      } else {
        this.loadedWorker.isEnableTusday1 = true;
      }
    }

    block32() {
      this.canTusdayErev = !this.canTusdayErev;
      if (this.canTusdayErev === false) {
        this.loadedWorker.isEnableTusday2 = false;
      } else {
        this.loadedWorker.isEnableTusday2 = true;
      }
    }

    block33() {
      this.canTusdayLayla = !this.canTusdayLayla;
      if (this.canTusdayLayla === false) {
        this.loadedWorker.isEnableTusday3 = false;
      } else {
        this.loadedWorker.isEnableTusday3 = true;
      }
    }


  // **********Wensday*************
    block41() {
      this.canWensdayBoker = !this.canWensdayBoker;
      if (this.canWensdayBoker === false) {
        this.loadedWorker.isEnableWensday1 = false;
      } else {
        this.loadedWorker.isEnableWensday1 = true;
      }
    }

    block42() {
      this.canWensdayErev = !this.canWensdayErev;
      if (this.canWensdayErev === false) {
        this.loadedWorker.isEnableWensday2 = false;
      } else {
        this.loadedWorker.isEnableWensday2 = true;
      }
    }

    block43() {
      this.canWensdayLayla = !this.canWensdayLayla;
      if (this.canWensdayLayla === false) {
        this.loadedWorker.isEnableWensday3 = false;
      } else {
        this.loadedWorker.isEnableWensday3 = true;
      }
    }


  // **********Thirsday*************
    block51() {
      this.canThirsdayBoker = !this.canThirsdayBoker;
      if (this.canThirsdayBoker === false) {
        this.loadedWorker.isEnableThirsday1 = false;
      } else {
        this.loadedWorker.isEnableThirsday1 = true;
      }
    }

    block52() {
      this.canThirsdayErev = !this.canThirsdayErev;
      if (this.canThirsdayErev === false) {
        this.loadedWorker.isEnableThirsday2 = false;
      } else {
        this.loadedWorker.isEnableThirsday2 = true;
      }
    }

    block53() {
      this.canThirsdayLayla = !this.canThirsdayLayla;
      if (this.canThirsdayLayla === false) {
        this.loadedWorker.isEnableThirsday3 = false;
      } else {
        this.loadedWorker.isEnableThirsday3 = true;
      }
    }

  // **********Friday*************
    block61() {
      this.canFridayBoker = !this.canFridayBoker;
      if (this.canFridayBoker === false) {
        this.loadedWorker.isEnableFriday1 = false;
      } else {
        this.loadedWorker.isEnableFriday1 = true;
      }
    }

    block62() {
      this.canFridayErev = !this.canFridayErev;
      if (this.canFridayErev === false) {
        this.loadedWorker.isEnableFriday2 = false;
      } else {
        this.loadedWorker.isEnableFriday2 = true;
      }
    }

    block63() {
      this.canFridayLayla = !this.canFridayLayla;
      if (this.canFridayLayla === false) {
        this.loadedWorker.isEnableFriday3 = false;
      } else {
        this.loadedWorker.isEnableFriday3 = true;
      }
    }


  // **********Suterday***********
    block71() {
      this.canSuterdayBoker = !this.canSuterdayBoker;
      if (this.canSuterdayBoker === false) {
        this.loadedWorker.isEnableSuterday1 = false;
      } else {
        this.loadedWorker.isEnableSuterday1 = true;
      }
    }

    block72() {
      this.canSuterdayErev = !this.canSuterdayErev;
      if (this.canSuterdayErev === false) {
        this.loadedWorker.isEnableSuterday2 = false;
      } else {
        this.loadedWorker.isEnableSuterday2 = true;
      }
    }

    block73() {
      this.canSuterdayLayla = !this.canSuterdayLayla;
      if (this.canSuterdayLayla === false) {
        this.loadedWorker.isEnableSuterday3 = false;
      } else {
        this.loadedWorker.isEnableSuterday3 = true;
      }


    }

}
