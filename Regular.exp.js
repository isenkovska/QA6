//I - Проверка на соответствия (test)
//Mетод test - позволяет проверить, соответствует ли 
//данная строка данному выражению. 

console.log('-----1------');
//1) содержит ли строка определенную последовательность символов,
// например, слово "dog" 
let str = "I have a dog and a cat"
// console.log(str.includes('dog'));
// console.log(str.indexOf('dog'));
console.log(/dog/.test(str));

console.log('-----2------');
//Содержит ли строка символ из определенного набора?
//2) содержит ли строка число?
str = "in 1992";
str1 = "I am a student of QA6"
str2 = "I am a student of QA automation"
console.log(/[0123456789]/.test(str)); // true
console.log(/[0-9]/.test(str1)); // true
console.log(/\d/.test(str2));  //false

console.log('--3---------');
//3)запишите шаблон для проверки наличия в строке "55+"
str = 'community 55+';
console.log(/55\+/.test(str)); //true


console.log('--4---------');
//4)запишите шаблон для проверки наличия в строке "how?"
str = 'The question is: How?'
console.log(/how\?/i.test(str)); // true


console.log('--5---------');
//5) Запишите шаблон для проверки наличия в строке
// даты в формате 06/05/2020
str = "today is 01/30/2020"
str2 = "today is /3/2020"

let dateTime = /\d\d\/\d\d\/\d\d\d\d/;
console.log(dateTime.test(str));  // true
console.log(dateTime.test(str2)); // false
console.log(/\d*\d\/\d*\d\/\d\d\d\d/.test(str2)); 
console.log(/\d*\d\/\d*\d\/\d\d\d\d/.test(str));

console.log('--6---------');
//6)Запишите шаблон для проверки наличия в строке даты и времени
// в формате "01-30-2020 15:20"
str = "01-30-2020 15:20"
str1 = "30-jan-2020 15:20"
dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test(str));  // true
console.log(dateTime.test(str1)); //false


//Повторяющиеся части шаблона:
console.log('--7---------');
//7) содержит ли строка минимум 1 цифру: 
str = 'a123';
str1 = 'a+sgh';
console.log(/\d+/.test(str)); //true
console.log(/\d+/.test(str1)); //false
console.log(/\+/.test(str1));


console.log('--8---------');
//8) содержит ли строка 0 и более цифр: 
str = '123';
str1 = 'asgh';
console.log(/\d*/.test(str1)); //true


//Символ, не входящий в данный набор
console.log('--9---------');
//9) Содержит ли строка что-то кроме двоичных цифр?
str =  "101001010101";
str1 = "1010014010101"
let notBinary = /[^01]/;
console.log(notBinary.test(str));
console.log(notBinary.test(str1));

console.log('--10---------');

//? - необязательная часть шаблона

console.log(/QA?auto/.test('QAautomation'));   //true
console.log(/QA?auto/.test('Qautomation'));   //true


//Элемент встречается определенное число раз.

console.log('--11---------');
//11) Улучшенный формат даты: Запишите шаблон даты,
// с указанием количества повторений элементов
str = "01-30-2020 15:20"
str1 = "3-2-2020 1:20"

dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime.test(str));  //true
console.log(dateTime.test(str1)); //true

//открытый диапазон - элемент повторяется 2 и более раз: {2,}

console.log('--12---------');
//12. Удалим в строке str восклицательные знаки
//если они встречаются 2 и более раз подряд

str = 'hello!!!! hi! hello!!!!!!!! ola!'
str = str.replace(/!{2,}/g, '');
//str = str.replace(/!{2,}/g, '!');
console.log(str);
  

//Группировка подвыражений

console.log('--13---------');

let crying = /(hoo+)+/i;
console.log(crying.test('Hoohooohooo'));  //true
console.log(crying.test('Hoo'));  //true


//Границы слов: \b означает границу слова

console.log('--14---------');
//14) удалить все буквы с в конце каждого слова, 
//  буквы с в начале и середине слова не удалять
 
str = "abcc abcdcc abcdc caac"
str = str.replace(/c+\b/g, '')
console.log(str);

console.log('--15---------');
//15 удалить буквы a в начале каждого слова 
str = "abаccа abcdcc abаcdc"
str = str.replace(/\ba+/g,'')
console.log(str);  //"bаccа bcdcc bаcdc"


console.log('--16---------');
//16 удалить группы букв а, являющиеся отдельными словами
str = "a rosa aa mimosa a good aaa"
str = str.replace(/\ba+\b/g, '')
console.log(str);


console.log('--17---------');
//17) заменить все сочетания 'every' на '*'
str = "Everything every everywhere "
str = str.replace(/every/ig, '*')
console.log(str);

console.log('--18---------');

//18) заменить отдельно стоящие слова 'every' на '*'
str = "everything every everywhere "
str = str.replace(/\bevery\b/ig, '*')
console.log(str);

console.log('--19---------');
//19) Удалить буквы "s" в конце слов

function remove(s){
 return s.replace(/s\b/g, '');  
}
console.log(remove("Cookies bananas cakes slices roses"));


// Границы строки:   ^ начало строки  $ конец строки
console.log('---20-----------------');
//20) Удалить слово "hello" в начале строки
str = 'hello Good morning hello good day hello to all hello';
console.log(str.replace(/^hello/, ''));

console.log('---21-----------------');
//21)Удалить слово "hello" в конце строки
console.log(str.replace(/hello$/, ''));

// Выбор шаблонов

console.log('--22----------');
//22)  есть ли в строке число, за которым следует одно из слов: 
// "pig", "cow", "chicken" или эти слова во множественном числе

let animalCount = /\d+ (pig|cow|chicken)s?/
str1 = "15 pig"
str2 = "I see 1 cow and sheep"
str3 = "I see 12 chickens and sheep"
str4 = "I see many cows "
console.log(animalCount.test(str1));
console.log(animalCount.test(str2));
console.log(animalCount.test(str3));
console.log(animalCount.test(str4));

console.log('---23----------');
//23) Запишите шаблон, соответствующий адресу email

let email = /\w+@[\w-]+\.[a-zA-Z]{2,10}/
str = "olga@gmail.com"
console.log(email.test(str));

//II - Метод match() возвращает получившиеся
//совпадения при сопоставлении строки с регулярным выражением.

console.log('--24---------');
//24) найти в тексте все слова саt, can 
let text = 'cat car can  cat cab ca  can';
let arr = text.match(/ca[tnbr]/g);
console.log(arr);

console.log('--25---------');
//25) В строке text найти все слова, начинающиеся на "h".

text = 'Hello people of 1974. I come from the future! In 2020 we have laser guns and a lot of huge problems ';
let m = text.match(/\bh\w*/ig)
console.log(m);

console.log('--26---------');
//26) В строке text найти все слова от 4 до 6 символов
text = 'Hello people of 1974. I come from the future! In 2020 we have laser guns and a lot of huge problems ';
console.log( 'Words between 4 and 6 chars: ')
arr = text.match(/\b[a-zA-Z]{4,6}\b/g);
console.log(arr);

console.log('--27---------');
//27) В строке text найти слова длиной 5 символов и более
text = 'Hello people of 1974. I come from the future! In 2020 we have laser guns and a lot of huge problems ';
console.log( 'Words 5 chars or longer: ')
arr = text.match(/[a-zA-Z]{5,}/g);
console.log(arr);


console.log('--28---------');
//28) В строке text слова точно 6 символов длиной
text = 'Hello people of 1974. I come from the future!';
console.log( 'Words exactly 6 chars long: ')
arr = text.match(/[a-zA-Z]{6}/g);
console.log(arr);


console.log('--29---------');
//29) Найдите количество cочетаний "Java" в предложении
str = "I like JavaScript and java"
str2 = "I like"

let matches = str.match(/Java/gi) || 0;
console.log(matches.length);

 matches = str2.match(/Java/gi) || 0;
console.log(matches);
if (!matches) console.log(0);

console.log('--30---------');
//30) Измените "John Smith"  на "Smith, John"
// Каждая группа (\w+) совпадает с одним словом. Каждой группе
// присваивается индекс, начинающийся с $1

let name = 'John Smith';
name = name.replace(/(\w+) (\w+)/, '$2, $1')
console.log(name);

console.log('--31---------');
//удалите все восклицательные знаки кроме восклиц.знаков в конце строки
str = 'hello!!! hi!!! !hi!!! hiii!!!'
let ar = str.match(/!+$/)
console.log(ar);
let n = ar[0].length;
str = str.replace(/!/g,'')
console.log(str + '!'.repeat(n));

// Exclamation marks series #2: Remove all exclamation marks from the end of sentence
// const remove = s => s.replace(/!+$/g,'');
// console.log(remove('Hi! Hi!!');  //Output 'Hi! Hi'


