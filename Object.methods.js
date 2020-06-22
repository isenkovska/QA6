// Клонирование и объединение объектов, Object.assign
// Если нам всё же нужно дублировать объект, то нам нужно создавать новый объект и повторять структуру дублируемого объекта, 
// перебирая его свойства и копируя их.

let user = {
    name: "John",
    age: 30
};
  let clone = {}; // новый пустой объект
  // скопируем все свойства user в него
  for (let key in user) {
    clone[key] = user[key];
  }
  // теперь в переменной clone находится абсолютно независимый клон объекта.
  clone.name = "Pete"; // изменим в нём данные
  alert( user.name ); // в оригинальном объекте значение свойства `name` осталось прежним – John.

  // Syntax Object.assign(dest, [src1, src2, src3...])
  let user = { name: "John" };
let permissions1 = { canView: true };
let permissions2 = { canEdit: true };
// копируем все свойства из permissions1 и permissions2 в user
Object.assign(user, permissions1, permissions2);
// now user = { name: "John", canView: true, canEdit: true }
// Если принимающий объект (user) уже имеет свойство с таким именем, оно будет перезаписано:
// Мы также можем использовать Object.assign для простого клонирования:
let user = {
    name: "John",
    age: 30
};
let clone = Object.assign({}, user); // Все свойства объекта user будут скопированы в пустой объект, и ссылка на этот объект будет в переменной clone.
//Существует стандартный алгоритм глубокого клонирования, Structured cloning algorithm. 
//А также мы можем использовать реализацию этого алгоритма из JavaScript-библиотеки lodash, метод _.cloneDeep(obj).