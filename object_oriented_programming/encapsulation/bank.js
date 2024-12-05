class BankAccount {
  #balance;
  constructor(accountOwnerName, intialAmount = 0) {
    this.#balance = intialAmount;
    this.accountOwnerName = accountOwnerName;
  }
  checkBalance() {
    console.log(`The Account Have Balance '$${this.#balance}'`);
    return;
  }
  getAccountOwner() {
    console.log(`The Accpunt Is Owned By '${this.accountOwnerName}'`);
    return;
  }
  deposit(amount) {
    if (amount <= 0) {
      console.log(` Deposite Have To Greater Than Zero (> 0)`);
      return;
    }
    this.#balance += amount;
    console.log(`Account Deposited With '$${amount}' `);
  }
  withdraw(amount) {
    if (amount > this.#balance) {
      console.log(`Account Has Not The Asked Amount '$${amount}'`);
      return;
    }
    this.#balance -= amount;
    console.log(`Account With Draw '$${amount}'`);
  }
}

const nureAccount = new BankAccount("Nuredin Bedru", 1000);

nureAccount.getAccountOwner();
nureAccount.checkBalance();
nureAccount.deposit(5000);
nureAccount.checkBalance();
nureAccount.withdraw(2000);
nureAccount.checkBalance();
