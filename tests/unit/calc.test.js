const Calculadora = require("../../models/calc.js");

test(`teste de soma`, () => {
  const resultado = Calculadora.somar(-1, 1);
  expect(resultado).toBe(0);
});

test(`teste de soma 2`, () => {
  const resultado = Calculadora.somar(17, 9);
  expect(resultado).toBe(26);
});

test(`teste de soma macaxeira + 100`, () => {
  const resultado = Calculadora.somar("macaxeira", 100);
  expect(resultado).toBe("Erro");
});

test(`teste de soma 100 + macaxeira`, () => {
  const resultado = Calculadora.somar(100, "macaxeira");
  expect(resultado).toBe("Erro");
});

test(`teste de soma nada + nada`, () => {
  const resultado = Calculadora.somar();
  expect(resultado).toBe("Erro");
});
