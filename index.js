// Performing the date Manipulation using the Moment

const moment=require('moment-timezone')
const date=moment.tz(1706603382000,"UTC")
const ds= date;
console.log("utc->pacific");
const utc_to_pacific={
    'given_data':ds.format('YYYY-MM-DD HH:mm:ss'),
    'converted_data':date.tz("America/Los_Angeles").format('YYYY-MM-DD HH:mm:ss')
};

console.log(utc_to_pacific);
console.log();




// direct convertion of the milliseconds to the US
console.log("pacific->utc");
const date1 = moment.tz(1706603382000, 'America/Los_Angeles');
const pacific_to_utc = {
    'given_data': date1.format('YYYY-MM-DD HH:mm:ss '), 
    'converted_data': date1.clone().tz('UTC').format('YYYY-MM-DD HH:mm:ss ') 
};
console.log(pacific_to_utc);



const date2=moment.tz(1706603382000,'America/Los_Angeles');
const pacific_to_indian=date2.tz('Asia/Kolkata')
console.log("pacific->india");
pac_to_ind={
    'given_data':date1.format('YYYY-MM-DD HH:mm:ss'),
    'converted_data':pacific_to_indian.format('YYYY-MM-DD HH:mm:ss')
}
console.log(pac_to_ind);
console.log();


console.log(date1.isDST());


// Trying the timestamp which falls on the DST
const dstpacific = moment.tz('2024-06-15T12:00:00', 'America/Los_Angeles');
console.log(dstpacific.isDST());
console.log("\nDST pacific->india");
DST_pac_to_ind={
    'given_data':dstpacific.format('YYYY-MM-DD HH:mm:ss'),
    'converted_data':dstpacific.tz('Asia/Kolkata').format('YYYY-MM-DD HH:mm:ss')
}
console.log(DST_pac_to_ind);


