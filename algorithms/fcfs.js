// This method aims to calculate the service times for each process queued up for a first-come-first-serve scheduling
const fcfc_CalcTime = (inputTable, sumExecutionTime) => {
  for (var i = 1; i < inputTable.length; i++) {
    var row = inputTable[i];
    row.children[3].textContent = sumExecutionTime;
    sumExecutionTime += parseInt(row.children[2].children[0].value);
  }
};
//This method aims to generate the Ghantts Table for the First Come First Serve Process Scheduling 
const fcfs_Draw = (inputTable, th, td) => {
  var sumExecutionTime = 0
  for (var i = 1; i < inputTable.length; i++) {
    var row = inputTable[i];
    td += "<td>" + sumExecutionTime + " sec</td>";
    arr.push(parseInt(sumExecutionTime))
    var execution_time = parseInt(row.children[2].children[0].value);
    sumExecutionTime += execution_time;
     th +=
      '<th style="height: 60px; width: ' +
      execution_time * 50 +
      'px;">P' +
      (i - 1) +
      "</th>";
  }
  arr.push(parseInt(sumExecutionTime))
  td += "<td>" + sumExecutionTime + " sec</td>";
  document.querySelector("#timeline").innerHTML = '<table id="resultTable"><tr>' + th + "</tr><tr>" + td + "</tr></table>"
  var timer = document.querySelector("#timer");
  timer.innerHTML = sumExecutionTime + "s";
  const tatCalc = (arr) => {
    var tatVals = []
    tatVals.push(arr[1])
    var k = 1;
    for (var i = 2; i < arr.length; i++) {
      tatVals.push(arr[i] - k);
      k++;
    }
    return tatVals;
  }

  const tatValues = tatCalc(arr);
  var tatCols = document.querySelectorAll('.tat')
  for (var i = 0; i < tatCols.length; i++) {
    tatCols[i].innerText = tatValues[i]
  }
};


export { fcfs_Draw, fcfc_CalcTime };
