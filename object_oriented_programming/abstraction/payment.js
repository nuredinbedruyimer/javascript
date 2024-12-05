class Payment {
  constructor(amount) {
    if (this.constructor === Payment) {
      throw new Error(
        "Can Not Instantiate This Class Because it Is Abstruct Class"
      );
    }
    this.amount = amount;
  }

  receipt() {
    console.log(`Payment Processed Successfully And Paid '$${this.amount}'`);
  }
  processPayment() {
    throw new Error(
      "Drive Class (Payment Method Should Process This Part) And Do Payment !!!"
    );
  }
}

class CreditCardPayment extends Payment {
  constructor(amount, creditCardNumber) {
    super(amount);
    this.creditCardNumber = creditCardNumber;
  }
  processPayment() {
    console.log(
      `Payment Processed Successfully !!! And An  Amount Of '$${this.amount}' With Credit Card Number '${this.creditCardNumber}'`
    );
    this.receipt();
  }
}

class PaypalPayment extends Payment {
  constructor(amount, email) {
    super(amount);
    this.email = email;
  }
  processPayment() {
    console.log(
      `Payment Processed Successfully !!! And An  Amount Of '$${this.amount}' With  E-mail '${this.email}'`
    );
    this.receipt();
  }
}

const errorPayment = new Payment(1200);
errorPayment.processPayment();

const nureCreditCard = new CreditCardPayment(1200, "1234-4345-4567-5678");
const nurePaypal = new PaypalPayment(1500, "nuredin.bedru@paypal.paymet");

nureCreditCard.processPayment();
nurePaypal.processPayment();
