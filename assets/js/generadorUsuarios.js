let arrayUsuarios = [];

for (let i = 0; i < 10; i++) {
  var obj = {};

  obj.userName = faker.internet.userName();
  obj.email = faker.internet.email();
  obj.firstName = faker.name.firstName();
  obj.lastName = faker.name.lastName();
  obj.jobTitle = faker.name.jobTitle();
  obj.phoneNumber = faker.phone.phoneNumber();
  obj.city = faker.address.city();
  obj.age = parseInt(Math.random() * (70 - 15) + 15);
  obj.wageAspiration = parseInt(Math.random() * (5000000 - 1000000) + 1000000);
  obj.currency = "COP";
  obj.address = faker.address.streetAddress();

  arrayUsuarios.push(obj);
}

console.log(JSON.stringify(arrayUsuarios));