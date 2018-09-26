describe("", function() {
  it("Declarada e atribuída a variável umNumeroPequeno", function() {
    assert.notEqual(umNumeroPequeno, "undefined");
    assert.ok(typeof umNumeroPequeno === "number");
  });
    it("Declarada e atribuída a variável umNumeroGrande", function() {
    assert.notEqual(umNumeroGrande, "undefined");
    assert.ok(typeof umNumeroGrande === "number");
  });
    it("Declarada e atribuída a variável eMenor", function() {
    assert.notEqual(eMenor, "undefined");
    assert.ok(eMenor === umNumeroPequeno < umNumeroGrande);
  });
    it("Declarada e atribuída a variável eMaior", function() {
    assert.notEqual(eMaior, "undefined");
    assert.ok(eMaior === umNumeroPequeno > umNumeroGrande);
  });
})