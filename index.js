// Your code here
function createEmployeeRecord(array){
    let record = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
    return record
}


function createEmployeeRecords(twoRows){
    // let record2 = createEmployeeRecord(twoRows)
    return twoRows.map(record => {
       return createEmployeeRecord(record)
    })
}




function createTimeInEvent(obj, dateStamp){
    let [date, hour] = dateStamp.split(' ')

     obj.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: date
    })
    return obj;
}


function createTimeOutEvent(obj, dateStamp){
    let [date, hour] = dateStamp.split(' ')

     obj.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date: date
    })
    return obj;
}


//given a date, find number of hours between timeInEvent and timeOutEvent
function hoursWorkedOnDate(obj, dateStamp){ 
    let [date, hour] = dateStamp.split(' ')
    let timeIn = obj.timeInEvents.find((obj) => obj.date === dateStamp)
    let timeOut = obj.timeOutEvents.find((obj) => obj.date === dateStamp)
    let hours = (timeOut.hour - timeIn.hour) /100
    return hours
    
}


function wagesEarnedOnDate(obj, dateStamp){
    let rate = 27
    let hours = hoursWorkedOnDate(obj, dateStamp)
    return hours * rate
}





let allWagesFor = function(employee){
    let eligibleDates = employee.timeInEvents.map(function(e){
    return e.date
    })
    
    let payable = eligibleDates.reduce(function(memo, d){
    return memo + wagesEarnedOnDate(employee, d) //memo = accumulator, agesEarnedOnDate(employee, d) is throwing each date of employee into agesEarnedOnDate function
    }, 0)
    
    return payable //accumulating variable 
    }



function calculatePayroll(employees){

    return employees.reduce((m, e) => { 
        debugger;
        m + wagesEarnedOnDate(e)
    }, 0)

    }





