import { RRule } from "rrule";

export const getOccurrences = (recurrence) => {
  //create the rule from text
  let rule = RRule.fromText(recurrence);
  //get today and nextYear's dates
  let today = new Date();
  let nextYear = new Date(today);
  nextYear.setFullYear(nextYear.getFullYear() + 1); //need to invoke function to add year
  //get array of dates between now and "cut off" limit: 6 months?
  let occurrences = rule.between(today, nextYear);
  //return that array of dates
  console.log(occurrences)
  return occurrences;
};

export const getAMPMTime = (date) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
};

export const getDateTimeString = (date, time) => {
  return new Date(date + "T" + time);
};
