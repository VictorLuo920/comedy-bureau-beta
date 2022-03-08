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