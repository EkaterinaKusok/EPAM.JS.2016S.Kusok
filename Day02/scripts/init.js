/* Создаем массив, состоящий из 5 элементов типа Object:
Тип каждого из элементов массива определяется случайным образом (1, 2, 3).
Каждый элемент, в зависимости от его типа, должен содержать метод:
для типа 1 метод должен называться “getCount1”, для типа 2 – “getCount2”, для типа 3 – “getCount3”.
*/
var array = [];
for (var i = 0; i < 5; i++) {	
	var type = random(1, 3);
	array[i] = {
		count: random(1, 10)
	};	
	array[i]["GetCount" + type] = function() {
		return this.count;
	}
	// Вывод в консоль информации о добавленном объекте в формате “type={0}, count={1}”.
	console.log( "type={"+ type +"}, count={"+ array[i].count +"}");
}