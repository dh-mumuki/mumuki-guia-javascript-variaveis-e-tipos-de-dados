describe("Descripción del grupo", function() {
  it("Declarada e asignada a variável saudacao", function() {
    assert.notEqual(saudacao, "undefined");
    assert.ok(saudacao === "Hello World");
  })
})