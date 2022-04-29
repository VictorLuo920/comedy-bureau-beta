import { RRule } from "rrule";

export const getOccurrences = (recurrence) => {
  //create the rule from text
  let rule = RRule.fromText(recurrence);
  //get range of yesterday and nextYear's dates, need yesterday to work with RRule's UTC weirdness, to include "today's" range
  let today = new Date();
  let yesterday = new Date(today) 
  let nextYear = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1)
  nextYear.setFullYear(nextYear.getFullYear() + 1)
  //get array of dates between now and "cut off" limit: 6 months?
  let occurrences = rule.between(yesterday, nextYear);
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
