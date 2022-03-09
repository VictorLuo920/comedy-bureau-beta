import { RRule } from "rrule";

export const getOccurrences = (recurrence) => {
    //create the rule from text
    let rule = RRule.fromText(recurrence)
    //get today and nextYear's dates
    let today = new Date()
    let nextYear = new Date()
    nextYear.setFullYear(nextYear.getFullYear() + 1) //need to invoke function to add year
    //get array of dates between now and "cut off" limit: 6 months?
    let occurences = rule.between(today, nextYear)
    //return that array of dates
    return occurences
}

export const getAMPMTime = (date) => {
    var hours = date.getUTCHours();
    var minutes = date.getUTCMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

export const getUTCTimeString = (date, time) => {
    return new Date(date + "T" + time + "Z")
}
 