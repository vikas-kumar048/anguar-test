import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as HighCharts from 'highcharts';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  form:any;
  isSubmit:boolean=true;
  highCharts = HighCharts;
  chartOptions : any;
  constructor(
    private _fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.form= this._fb.group({
      input1:['',[Validators.required,Validators.pattern('^[0-9]*[1-9][0-9]*$')]],
      input2:['',[Validators.required,Validators.pattern('^[0-9]*[1-9][0-9]*$')]],
      input3:['',[Validators.required,Validators.pattern('^[0-9]*[1-9][0-9]*$')]],
      input4:['',[Validators.required,Validators.pattern('^[0-9]*[1-9][0-9]*$')]],
      input5:['',[Validators.required,Validators.pattern('^[0-9]*[1-9][0-9]*$')]]
    });
    console.log(this.form)

  }
  goBack(){
    this.form.reset();
    this.isSubmit=true;
  }
  submit(){
    this.isSubmit=false;
    console.log(this.form.value)
    let temp:any=[];
    for(let key in this.form.value){
      temp.push(this.form.value[key]);
    }
    this.createChart(temp);
  }
  createChart(arr:[]){
    this.chartOptions={
      title:{
        text:'Form Values Graph'
      },
      xAxis:{
        categories:['input1','input2','input3','input4','input5'],
        title:{
          text:'Inputs'
        }
      },
      yAxis:{
        title:{
          text:'Entered Values'
        }
      },
      series:[{
        name:'integer numbers',
        type:'line',
        data: arr
      }]
    }
  }

}
