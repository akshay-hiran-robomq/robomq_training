function first(data, cb1, cb2, cb3){
    console.log("first()", data);
    cb1(data,cb2, cb3);
}
function second(data, cb1, cb2) {
    console.log("second()",data);
    cb1(data, cb2);
}
function third(data, cb) {
    console.log("third()",data);
    cb(data);
}
function last(data) {
    console.log("last() ", data);
}
// first("THEDATA", second, third, last);  // This work OK
// first("THEDATA2", second, last);        // This works OK
first("THEDATA3", second);              // This doesn't work as second tries to pass on a callback that doesn't exit.