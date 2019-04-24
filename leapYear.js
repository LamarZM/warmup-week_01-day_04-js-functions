const isLeapYear= function(year){
if(year % 4 === 0 && year % 100 !== 0){
if(year % 400 === 0){
return true
}
else{
return false
}

}else{
return(false)
	}
}
undefined
isLeapYear(1997)
false
isLeapYear(1996)
false
isLeapYear(1900)
false
isLeapYear(2000)
false
