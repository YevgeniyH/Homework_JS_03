/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
    createTransaction(amount, type) {
        const transactionNew = {
            id: Date.now(),
            type,
            amount,
        };
        return transactionNew;     
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
    deposit(amount) {
        const transactionsItem = this.createTransaction(amount, Transaction.DEPOSIT);
        this.transactions.push(transactionsItem);
        this.balance += amount;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
    withdraw(amount) {
       const transactionsItem = this.createTransaction(amount, Transaction.WITHDRAW);
        this.transactions.push(transactionsItem);
        
        if (amount > this.balance) {
            console.log(`Снять ${amount} невозможно, недостаточно средств!`)
        } else {
            this.balance -= amount;
        }        
  },

  /*
   * Метод возвращает текущий баланс
   */
    getBalance() {
      console.log(`Баланс: ${this.balance}`);
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
    getTransactionDetails(id) {
        for (const transaction of this.transactions) {
            if (transaction.id === id) {
                return console.log(transaction);
            }
                console.log("Нет такой транзакции.")
        }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
    getTransactionTotal(type) {
        let SumOfTransactionType = 0;
        for (const transaction of this.transactions) {
            if (transaction.type === type) {
                SumOfTransactionType += transaction.amount;
            }
        }
        return console.log(`Сумма средств по транзакции ${type}: ${SumOfTransactionType}`);
    }
  
}

account.deposit(200);
account.deposit(300);
account.withdraw(100);

console.log(account.transactions);
account.getBalance();
account.getTransactionDetails(1);
account.getTransactionTotal('deposit');


