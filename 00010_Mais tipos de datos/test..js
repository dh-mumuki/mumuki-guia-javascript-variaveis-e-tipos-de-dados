describe("Descripción del grupo", function() {
  it("Variável declarada e atribuída gostoDeGelado", function() {
    assert.notEqual(gostoDeGelado, "undefined");
    assert.ok(typeof gostoDeGelado === "boolean");
  });
})