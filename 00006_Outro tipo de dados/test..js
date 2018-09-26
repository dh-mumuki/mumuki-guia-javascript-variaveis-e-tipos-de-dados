describe("", function() {
  it("Declarada e assinada a variável saudacao", function() {
    assert.notEqual(saudacao, "undefined");
    assert.ok(saudacao === "Hello World");
  })
})