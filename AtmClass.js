class ATM {
  constructor() {}
}
class TransactionType {
  static BALANCE_INQUIRY = 1;
  static DEPOSIT_CASH = 2;
  static DEPOSIT_CHECK = 3;
  static WITHDRAW = 4;
  static TRANSFER = 5;
}
class TransactionStatus {
  static SUCCESS = 1;
  static FAILURE = 2;
  static BLOCKED = 3;
  static FULL = 4;
  static PARTIAL = 5;
  static NONE = 6;
}
class CustomerStatus {
  static ACTIVE = 1;
  static BLOCKED = 2;
  static BANNED = 3;
  static COMPROMISED = 4;
  static ARCHIVED = 5;
  static CLOSED = 6;
  static UNKNOWN = 7;
}
class Address {
  constructor(street, city, state, zipCode, country) {
    this.streeAddress = street;
    this.city = city;
    this.state = state;
    this.zipCode = zipCode;
    this.country = country;
  }
}

class Customer {
  constructor(name, address, email, phone, status) {
    this.name = name;
    this.address = address;
    this.email = email;
    this.phone = phone;
    this.status = status;
  }
  makeTransaction(transaction) {}
  getBillingAddress() {}
}
class Card {
  constructor(number, customerName, expiry, pin) {
    this.cardNumber = number;
    this.customerName = customerName;
    this.expiry = expiry;
    this.pin = pin;
  }
  getBillingAddress() {}
}
class Account {
  constructor(accountNumber) {
    this.accountNumber = accountNumber;
  }
  getAvailableBalance() {}
}
class SavingsAccount extends Account {
  constructor(withdrawLimit) {
    this.withdrawLimit = withdrawLimit;
  }
}

class CheckingsAccount extends Account {
  constructor(debitCardNumber) {
    this.debitCardNumber = debitCardNumber;
  }
}
