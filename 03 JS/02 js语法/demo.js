/*求斐波那契数列Fibonacci中第n个数是多少； 1 1 2 3 5 8 13 ......*/
function getFib(index){
	var n1 = 1;
	var n2 = 1;
	var n3;
	for (var i = 3; i <= index; i++) {
		n3 = n1 + n2;
		n1 = n2;
		n2 = n3;
	}
	return n3;
}

/*对数组排序 从小到大*/
function sortArr(array) {

	for (var i = 0; i < array.length-1; i++) {
		/*假设已排好序*/
		var isSort = true;

		for (var j = 0; j < array.length-1-i; j++) {
			if (array[j] > array[j+1]) {
				/*发生交换则未排好*/
				var isSort = false;
				var tmp = array[j];
				array[j] = array[j+1]
				array[j+1] = tmp;
			}
		}

		/*是否排好序*/
		if (isSort) {
			/*排好序结束循环*/
			break;
		}
	}

	return array;
}

/*
  普通闰年:公历年份是4的倍数的，且不是100的倍数，为普通闰年。（如2004年就是闰年）；
  世纪闰年:公历年份是整百数的，必须是400的倍数才是世纪闰年（如1900年不是世纪闰年，2000年是世纪闰年）；
  判断一个年份是否是闰年[闰年：能被4整除且不能被100整除的数，或者能被400整除的数]
 */
function isLeapYear(year){
	var isLeap = false;
	if ((year %4 === 0 && year % 100 !== 0) || year % 400 === 0) {
		isLeap = true;
	}

	return isLeap;
}

/*根据年月日判断当前日期是今年的第几天；*/
function getDeys(year,month,dey){
	var deys = dey;

	for (var i = 1; i < month; i++) {
		
		switch (i){
			case 1:
			case 3:
			case 5:
			case 7:
			case 8:
			case 10:
			case 12:
			  deys += 31;
			  break;

			case 4:
			case 6:
			case 9:
			case 11:
			  deys += 30;
			  break;

			case 2:
			   if (isLeapYear(year)) {
				deys += 29;
			   } else {
			   	deys += 28;
			   }
			   break;
		} 
	}

	return deys;
}