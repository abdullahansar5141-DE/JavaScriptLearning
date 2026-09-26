// const new1=Temporal.Now.zonedDateTimeISO()
// console.log(new1.toString())
// const new2=Temporal.Now.plainTimeISO()
// console.log(new2.toString())
// const new3=Temporal.Now.plainDateISO()
// console.log(new3.toString())


// THE OLD WAY: 
// JavaScript assumes you meant 3 days after Feb 28th and silently gives you March 3rd.
const oldDate = new Date(2026, 1, 31); //considering 0 as Jan 1 as Feb when exceeded feb 28 it took to march
console.log(oldDate.toLocaleDateString())

// THE NEW WAY WITH .from(): 
// It instantly throws a RangeError: "value out of range". 
// const newDate=Temporal.PlainDate.from(
//     {
//         year:2026,
//         month:2,
//         day:31,
//     }
// )

const newDate=Temporal.PlainDate.from(
    {
        year:2026,
        month:3,
        day:31,
    }
)

console.log(newDate.toString())



const today=Temporal.Now.plainDateISO()
const nextWeek=today.add({days:7})
const nextYear=today.add({years:1,months:2})
// Subtract duration
const yesterday = today.subtract({ days: 1 });

// Find the difference between two dates
const difference = today.until(nextYear, { largestUnit: 'months' });
console.log(difference.months); // 14


const date1 = Temporal.PlainDate.from('2026-10-01');
const date2 = Temporal.PlainDate.from('2026-12-25');


const result = Temporal.PlainDate.compare(date1, date2);
// Returns -1 (date1 is before date2)
// Returns 0 (dates are equal)
// Returns 1 (date1 is after date2)

console.log(result)

const date = Temporal.Now.plainDateISO();

// Standard localized formatting works natively with Temporal
const formatter = new Intl.DateTimeFormat('en-US', { dateStyle: 'full' });
console.log(formatter.format(date)); 
// "Thursday, September 3, 2026"