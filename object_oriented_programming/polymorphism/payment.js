// Base Class: Payment
class Payment {
  processPayment(amount) {
    console.log(`Processing payment of $${amount}`);
  }
}

//  CreditCardPayment
class CreditCardPayment extends Payment {
  processPayment(amount) {
    console.log(`Processing credit card payment of $${amount}`);
  }
}

// PayPalPayment

class PayPalPayment extends Payment {
  processPayment(amount) {
    console.log(`Processing PayPal payment of $${amount}`);
  }
}

//  BitcoinPayment
class BitcoinPayment extends Payment {
  processPayment(amount) {
    console.log(`Processing Bitcoin payment of $${amount}`);
  }
}

// Example usage
const payments = [
  new CreditCardPayment(),
  new PayPalPayment(),
  new BitcoinPayment(),
];

payments.forEach((payment) => {
  payment.processPayment(100);
});
