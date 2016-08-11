/*Файл “log.js” должен посчитать общую сумму значений свойства “count” для каждого из типов 
и вывести в консоль браузера три строки в формате “count{0}={1}”, где {0} – тип объекта, 
{1} – сумма значений свойства “count” для данного типа. 
*/
var count = [];
count[1] = 0;
count[2] = 0;
count[3] = 0;

// Считаем общую сумму значений свойства “count” для каждого из типов
for (var i = 0; i < array.length; i++) {
	count[1] += (array[i].GetCount1 ?  array[i].GetCount1() : 0);
	count[2] += (array[i].GetCount2 ?  array[i].GetCount2() : 0);
	count[3] += (array[i].GetCount3 ?  array[i].GetCount3() : 0);
}

for (var i = 1; i < 4; i++) {
	console.log("count"+ i + "=" + count[i]);
}