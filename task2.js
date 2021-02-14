//список юзеров
const users = [
  { name: "Mango", active: true },
  { name: "Poly", active: false },
  { name: "Ajax", active: true },
  { name: "Lux", active: false },
];

const toggleUserState = (allUsers, userName) => {
  //мапит список юзреов, возвращает обновленный список (если нашло совпадение с именем, тогда меняет его статус на противположный)
  return new Promise((resolve) => {
    const updatedUsers = allUsers.map((user) =>
      user.name === userName ? { ...user, active: !user.active } : user
    );
    resolve(updatedUsers);
  });
};
//получается масим и выводит его в форме таличке
const logger = (updatedUsers) => console.table(updatedUsers);
//проверка
toggleUserState(users, "Mango").then(logger);
