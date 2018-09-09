describe("", function() {
  it("Declarada e asignada a variável idade", function() {
    assert.notEqual(idade, "undefined");
    assert.ok(typeof idade === "number");
  });
  it("Declarada e asignada a variável nome", function() {
    assert.notEqual(nome, "undefined");
    assert.ok(typeof nome == "number");
  });
})