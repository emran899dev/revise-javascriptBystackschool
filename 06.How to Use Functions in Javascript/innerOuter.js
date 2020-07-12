function data(fName,lName) {
    function data1() {
        //console.log(fName,lName);
        if (lName) {
            return lName.split(' ')[0]
        } else {
            return ''
        }
    }
    var message = fName + ' ' + data1()
    console.log(message);
    // data1()
}
data('emran', 'nazir emon')