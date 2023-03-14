/**
 * Saldo Bancario
 * El Tech Leader nos informa que debemos efectuar un código que permita calcular el saldo de la cuenta de un cliente de la Institución Financiera.
 * Tu responsabilidad será ir ejecutando cada una de las siguientes consignas para lograr el objetivo:
 * 1. Crear un array que contenga las operaciones bancarias realizadas por el cliente, tomando en cuenta que los depósitos serán representados por valores
 * positivos y los retiros por valores negativos.
 * 2. Crear una función (Callback) que reciba como parámetro el array creado. La función tendrá la responsabilidad:
 * de calcular y devolver el saldo total de depósitos, el saldo actual de retiros y el saldo actual del cliente.
 * 3. Crear otra función que reciba como parámetros el nombre y el apellido del cliente así  como el array que contiene las operaciones bancarias.
 *  Esta función tendrá la responsabilidad de retornar el nombre y apellido del cliente y el saldo total de depósitos, el saldo actual de retiros,
 * y el saldo actual.
 */

/* array[+1,-1] -> User operations

function getUserBalances(operations) {
  operations equal to an array of negative and positive numbers  


  totalDeposits equal to sum all the positive numbers
  totalWithdrawals equal to sum all the negative numbers
  currentBalance equal to totalDeposits subtract totalWithdrawals
  return (totalDeposits, totalWithdrawals, currentBalance)
}

function showUserBalances(name, surname, operations, getUserBalances) {
  Print a message to show balances to the user. We need to use the getUserBalances() function to achieve this.
  Example: Mr Putito Perez, these are your balances: Deposits = totalDeposits, Withdrawals = totalWithdrawals, and your current balance = currentBalance;
  return (name, surname, totalDeposits, totalWithdrawals, currentBalance)
} */

// Without callback
/* function showUserBalances(name, surname, operations) {
  let totalDeposits = 0;
  let totalWithdrawals = 0;
  let currentBalance = 0;

  for (let i = 0; i < operations.length; i++) {
    if (operations[i] > 0) {
      totalDeposits += operations[i];
    }
    if (operations[i] < 0) {
      totalWithdrawals -= operations[i];
    }
  }

  currentBalance = totalDeposits - totalWithdrawals;

  return `Dear ${name} ${surname}: 
  The total of deposits is: $${totalDeposits}.
  The total of withdrawals is: $${totalWithdrawals}.
  Your current balance is: $${currentBalance}.`;
}

const userOperations = [50, -200, 100, -300, 50];

console.log(showUserBalances("Ed", "Pitudin", userOperations)); */

// With callback

function getUserBalances(operations) {
  let totalDeposits = 0;
  let totalWithdrawals = 0;
  let currentBalance = 0;

  for (let i = 0; i < operations.length; i++) {
    if (operations[i] > 0) {
      totalDeposits += operations[i];
    }
    if (operations[i] < 0) {
      totalWithdrawals -= operations[i];
    }
  }

  currentBalance = totalDeposits - totalWithdrawals;

  return `The total of deposits is: $${totalDeposits}.
  The total of withdrawals is: $${totalWithdrawals}.
  Your current balance is: $${currentBalance}.`;
}

function showUserBalances(name, surname, operations, callback) {
  return `Dear ${name} ${surname}: 
  ${callback(operations)}`;
}

const userOperations = [50, -200, 100, -300, 50];

console.log(showUserBalances("Ed", "Pitudin", userOperations, getUserBalances));
