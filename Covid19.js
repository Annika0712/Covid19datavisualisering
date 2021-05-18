let table1;
let table2;
let count=4;
let c = color(255, 0, 0);
/*
Starter ved fire da det er den fjerde kolonne
*/

function preload() {
  table1 = loadTable('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv','csv','header');
  table2 = loadTable('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv','csv','header');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(220,220,220);
  Italy = table1.findRow('Italy','Country/Region');
  ItalyD = table2.findRow('Italy','Country/Region');
  Spain = table1.findRow('Spain','Country/Region');
  SpainD = table2.findRow('Spain','Country/Region');
  Denmark = table1.getRow(106);
  DenmarkD = table2.getRow(106);
  Sweden = table1.findRow('Sweden','Country/Region');
  SwedenD = table2.findRow('Sweden','Country/Region');
  China = sumChina();
  ChinaD = sumChinaD();
  US = table1.findRow('US','Country/Region');
  USD = table2.findRow('US','Country/Region');
  head = table1.columns;
  textSize(22);
}

function draw(){
  frameRate(100/count);
  background(220,220,220);

  fill(255,255,255);
  rect(299,57,(Italy.arr[count]/2500),26);
  rect(299,147,(Spain.arr[count]/2500),26);
  rect(299,237,(Denmark.arr[count]/2500),26);
  rect(299,327,(Sweden.arr[count]/2500),26);
  rect(299,417,(China[count-4]/2500),26);
  rect(299,507,(US.arr[count]/2500),26);

  fill(255,0,0);
  rect(299,97,(ItalyD.arr[count]/2500),26);
  rect(299,187,(SpainD.arr[count]/2500),26);
  rect(299,277,(DenmarkD.arr[count]/2500),26);
  rect(299,367,(SwedenD.arr[count]/2500),26);
  rect(299,457,(ChinaD[count-4]/2500),26);
  rect(299,547,(USD.arr[count]/2500),26);

  fill(0,0,0);
  text(Italy.arr[count],300,80);
  text(ItalyD.arr[count],300,120);
  text('Italy:',70,80);
  text('Infected:',185,80);
  text('Deaths:',185,120);

  text(Spain.arr[count],300,170);
  text(SpainD.arr[count],300,210);
  text('Spain:',70,170);
  text('Infected:',185,170);
  text('Deaths:',185,210);

  text(Denmark.arr[count],300,260);
  text(DenmarkD.arr[count],300,300);
  text('Denmark:',70,260);
  text('Infected:',185,260);
  text('Deaths:',185,300);

  text(Sweden.arr[count],300,350);
  text(SwedenD.arr[count],300,390);
  text('Sweden:',70,350);
  text('Infected:',185,350);
  text('Deaths:',185,390);

  text(China[count-4],300,440);
  text(ChinaD[count-4],300,480);
  text('China:',70,440);
  text('Infected:',185,440);
  text('Deaths:',185,480);

  text(US.arr[count],300,530);
  text(USD.arr[count],300,570);
  text('US:',70,530);
  text('Infected:',185,530);
  text('Deaths:',185,570);

  text(head[count],600,40);

  count +=1;
  if (count>table1.getColumnCount()-1){
    count = 4;
  }
}

function sumChina(){
  China = [];
  for (let j = 4; j<table1.getColumnCount();j++){
    ChinaSum = 0
    for (let i=60; i<94; i++){
    ChinaSum += parseInt(table1.getRow(i).arr[j]);
    }
  China.push(ChinaSum);
  }
  return China;
}

function sumChinaD(){
ChinaD = [];
for (let j = 4; j<table2.getColumnCount();j++){
  ChinaSumD = 0
  for (let i=60; i<94; i++){
  ChinaSumD += parseInt(table2.getRow(i).arr[j]);
  }
ChinaD.push(ChinaSumD);
}
return ChinaD;
}
