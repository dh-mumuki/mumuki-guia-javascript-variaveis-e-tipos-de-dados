describe("", function() {
  it("Declarou y atribui a variável idade", function() {
    assert.notEqual(idade, "undefined");
    assert.ok(typeof idade === "number");
  });
  it("Declarou y atribui a variável nome", function() {
    assert.notEqual(nome, "undefined");
    assert.ok(typeof nome == "number");
  });
})