function dividir(num1, num2) {
  let divisao = num1 / num2;
  if (num1 === 0 || num2 === 0) {
    return "Não se pode dividir por zero";
  }
  return divisao;
}

export default dividir;
