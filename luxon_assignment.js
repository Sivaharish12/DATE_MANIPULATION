const { DateTime } = require("luxon");

// get the date object
const local=DateTime.fromMillis(1706603382000)
const utc=local.setZone('UTC')
// convert the timezone to pacific
const pacific=utc.setZone('America/Los_Angeles');

console.log('utc->pacific');
const utc_to_pacific={
    'given_time':utc.toFormat('yyyy MM dd HH:MM:ss'),
    'converted_time':pacific.toFormat('yyyy MM dd HH:MM:ss'),
};
console.log(utc_to_pacific);


console.log();


const pacific_with_ms=DateTime.fromMillis(1706603382000).setZone('America/Los_Angeles');
console.log('pacific->utc');
const pacific_to_utc={
    "given_time":pacific_with_ms.toFormat('yyyy MM dd HH:MM:ss'),
    'converted_time':pacific_with_ms.setZone('UTC').toFormat('yyyy MM dd HH:MM:ss'),
};
console.log(pacific_to_utc);


console.log();
tx=pacific_with_ms.setZone('UTC')
console.log('pacific->india');
const pacific_to_india={
    'given_time':tx.toFormat('yyyy MM dd HH:MM:ss'),
    'converted_time':tx.setZone('Asia/Kolkata').toFormat('yyyy MM dd HH:MM:ss'),
};
console.log(pacific_to_india,'\n');


const dst_pacific=DateTime.fromISO('2024-06-15T12:00:00').setZone('America/Los_Angeles')
console.log(`is the following date is dst : ${dst_pacific.isInDST} \n`);
console.log('dst_pacific->ust');
const dst_pacific_to_ust={
    'given_time':dst_pacific.toFormat('yyyy MM dd HH:MM:ss'),
    'converted_time':dst_pacific.setZone('UTC').toFormat('yyyy MM dd HH:MM:ss'),
};
console.log(dst_pacific_to_ust);
