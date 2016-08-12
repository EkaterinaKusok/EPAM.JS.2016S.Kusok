/*Файл “log.js” должен посчитать общую сумму значений свойства “count” для каждого из типов 
и вывести в консоль браузера три строки в формате “count{0}={1}”, где {0} – тип объекта, 
{1} – сумма значений свойства “count” для данного типа. 
*/
var sum = [];
sum[1] = 0;
sum[2] = 0;
sum[3] = 0;

// Считаем общую сумму значений свойства “count” для каждого из типов
for (var i = 0; i < array.length; i++) {
	// sum[1] += (array[i].GetCount1 ? array[i].GetCount1() : 0);
	sum[1] += (array[i].GetCount1 || zeroFunction).call(array[i]);	
	sum[2] += (array[i].GetCount2 || zeroFunction).call(array[i]);	
	sum[3] += (array[i].GetCount3 || zeroFunction).call(array[i]);
}

for (var i = 1; i < 4; i++) {
	console.log("count"+ i + "=" + sum[i]);
}

function zeroFunction(){
	return 0;
}