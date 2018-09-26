describe("", function() {
  it("Declarada e atribuida a variável numeroA", function() {
    assert.notEqual(numeroA, "undefined");
    assert.ok(typeof numeroA === "number");
  });
  it("Declarada e atribuida a variável numeroB", function() {
    assert.notEqual(numeroB, "undefined");
    assert.ok(typeof numeroB == "number");
  });
  it("Declarada e atribuida a variável resultadoSoma", function() {
    assert.notEqual(resultadoSoma, "undefined");
    assert.ok(typeof resultadoSoma == "number");
    assert.ok(resultadoSoma === (numeroA+numeroB));
  });
  it("Declarada e atribuida a variável resultadoSubtracao", function() {
    assert.notEqual(resultadoSubtracao, "undefined");
    assert.ok(typeof resultadoSubtracao == "number");
    assert.ok(resultadoSubtracao === (numeroA-numeroB));
  });
  it("Declarada e atribuida a variável resultadoMultiplicacao", function() {
    assert.notEqual(resultadoMultiplicacao, "undefined");
    assert.ok(typeof resultadoMultiplicacao == "number");
    assert.ok(resultadoMultiplicacao === (numeroA*numeroB));
  });
  it("Declarada e atribuida a variável resultadoDivisao", function() {
    assert.notEqual(resultadoDivisao, "undefined");
    assert.ok(typeof resultadoDivisao == "number");
    assert.ok(resultadoDivisao === (numeroA/numeroB));
  });
})