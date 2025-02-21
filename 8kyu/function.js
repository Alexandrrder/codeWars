function multiply(a, b){  
  return a * b;
}
//
function makeNegative(num) {
  return num < 0 ? num : -num;
}
//
function boolToWord( bool ){
  return bool ? "Yes" : "No";
}
//
function combat(health, damage) {
  const totalHealth = health - damage;
  return totalHealth < 0 ? 0 : totalHealth;
}
//
function move(position, roll) {
  if (roll >= 1 && roll <= 6) {
    return position + roll * 2;
  }
}
//
function evenOrOdd(number) {
  return number % 2 ? "Odd" : "Even";
}

  