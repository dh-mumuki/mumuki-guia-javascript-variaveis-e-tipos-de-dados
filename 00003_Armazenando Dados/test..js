describe("", function() {
  it("Declarada e atribuida a variável idade", function() {
    assert.notEqual(idade, "undefined");
    assert.ok(typeof idade === "number");
  });
  it("Declarada e atribuida a variável peso", function() {
    assert.notEqual(peso, "undefined");
    assert.ok(typeof peso == "number");
  });
})