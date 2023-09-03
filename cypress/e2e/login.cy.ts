describe("Login", () => {
  it("should log in with correct credentials", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#username").type("devlouis");
    cy.get("#password").type("222222");
    cy.wait(1000);
    cy.get("button").click();
    cy.wait(2000);
  });
});
