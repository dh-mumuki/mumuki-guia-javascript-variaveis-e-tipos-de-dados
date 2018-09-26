describe("", function() {
  it("Declarada e atribuída a variável umNumeroPequeno", function() {
    assert.notEqual(umNumeroPequeno, "undefined");
    assert.ok(typeof umNumeroPequeno === "number");
  });
    it("Variável declarada e atribuída umNumeroGrande", function() {
    assert.notEqual(umNumeroGrande, "undefined");
    assert.ok(typeof unNumeroGrande === "number");
  });
    it("Declarada e atribuída a variável eMenor", function() {
    assert.notEqual(eMenor, "undefined");
    assert.ok(eMenor === umNumeroPequeno < unNumeroGrande);
  });
    it("Declarada y asignada la variable esMayor", function() {
    assert.notEqual(esMayor, "undefined");
    assert.ok(esMayor === umNumeroPequeno > unNumeroGrande);
  });
})