/*рандомит в заданом диапазоне*/

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/*забирает транзу, создает рандом дилей, выставляет таймаут"по дилею", "проверка успеха" транзы, УСПЕХ = вернуть транзу и время обработки, ФЕЙЛ =  вернуть данные транзы */
const makeTransaction = (transaction) => {
  //выставляет случайный дилей по функции выше

  return new Promise((resolve, reject) => {
    const delay = randomIntegerFromInterval(200, 500);
    setTimeout(() => {
      const canProcess = Math.random() > 0.3;
      if (canProcess) {
        const resultTransaction = { id: transaction.id, time: delay };
        resolve(resultTransaction);
      }
      reject(transaction.id);
    }, delay);
  });
};

//функция отображения успеха
const logSuccess = ({ id, time }) => {
  console.log(`Transaction ${id} processed in ${time}ms`);
};
//функция отображения фейла
const logError = (id) => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};
// проверка
makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);

makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);

makeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logError);

makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError);
