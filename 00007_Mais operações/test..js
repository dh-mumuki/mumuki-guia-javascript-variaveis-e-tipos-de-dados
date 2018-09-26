describe("", function() {
  it("Declarada e asignada a variável nome", function() {
    assert.notEqual(nome, "undefined");
    assert.ok(typeof nome === "string");
  });
  it("Declarada e asignada a variável sobrenome", function() {
    assert.notEqual(sobrenome, "undefined");
    assert.ok(typeof sobrenome == "string");
  });
  it("Declarada e asignada a variável nomeCompleto", function() {
    assert.notEqual(nomeCompleto, "undefined");
    assert.ok(typeof nomeCompleto == "string");
    assert.ok(nomeCompleto === nombre + " " + apellido)
  });
})