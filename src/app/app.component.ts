import { Component } from '@angular/core';
import { DailyBasisService } from './daily-basis.service';
import { HourBasisService } from './hour-basis.service';
import { MonthlyBasisService } from './monthly-basis.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dailyData: any; 

  constructor( private daily: DailyBasisService,
    private hour: HourBasisService, 
    private monthly: MonthlyBasisService ) {}

  ngOnInit() {
    //GoogleCharts.load(this.drawCharts);
    
  }

  btnHandlerDaily() {
    let data = ['Date', 'Occurrences'];
    this.daily.search().subscribe((response: any) => {
      console.log(response);
      var result = response.rows.map(e => {
        //console.log(e);
        return [e.dateTime.split(' ')[0], e.occurrences ]
      });
 
      this.dailyData = [data, ...result];
    });
  }

  btnHandlerHour() {
    this.hour.search().subscribe((res: any) => {
      //console.log(res);
      
      this.dailyData = res.rows;
    });
  }

  btnHandlerMonthly() {
    this.monthly.search().subscribe((res: any) => {
      this.dailyData = res.rows;
    });
  }
}
