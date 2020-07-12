var date = new Date()
var today = date.getDay()
var todayDate = date.getDate()

switch (today) {
    case 0:
        console.log('Today is Sunday Date ' + todayDate)
        break
    case 1:
        console.log('Today is Monday Date ' + todayDate)
        break
     case 2:
        console.log('Today is Tuesday Date ' + todayDate)
         break
         case 3:
            console.log('Today is Wednesday Date ' + todayDate)
             break
             case 4:
                console.log('Today is Thursday Date ' + todayDate)
                 break
                 case 5:
                    console.log('Today is Firday Date ' + todayDate)
                     break
                     case 6:
                        console.log('Today is Saturday Date ' + todayDate)
                         break
                         default: console.log('Not a number valid');
                                                                
}      