describe("", function() {
  it("Declarada e asignada a variável numeroA", function() {
    assert.notEqual(numeroA, "undefined");
    assert.ok(typeof numeroA === "number");
  });
  it("Declarada e asignada a variável numeroB", function() {
    assert.notEqual(numeroB, "undefined");
    assert.ok(typeof numeroB == "number");
  });
  it("Declarada e asignada a variável resultadoSoma", function() {
    assert.notEqual(resultadoSoma, "undefined");
    assert.ok(typeof resultadoSoma == "number");
    assert.ok(resultadoSoma === (numeroA+numeroB));
  });
  it("Declarada e asignada a variável resultadoResto", function() {
    assert.notEqual(resultadoResto, "undefined");
    assert.ok(typeof resultadoResto == "number");
    assert.ok(resultadoResto === (numeroA-numeroB));
  });
  it("Declarada e asignada a variável resultadoMultiplicacao", function() {
    assert.notEqual(resultadoMultiplicacao, "undefined");
    assert.ok(typeof resultadoMultiplicacao == "number");
    assert.ok(resultadoMultiplicacao === (numeroA*numeroB));
  });
  it("Declarada e asignada a variável resultadoDivisao", function() {
    assert.notEqual(resultadoDivisao, "undefined");
    assert.ok(typeof resultadoDivisao == "number");
    assert.ok(resultadoDivisao === (numeroA/numeroB));
  });
})