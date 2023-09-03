describe("Contacts Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/dashboard"); // Assuming the URL is "/contacts"
  });

  it("should filter characters by name", () => {
    const searchQuery = "Morty Smith"; // Search for characters with "Rick" in the name

    cy.get("input[type='text']").type(searchQuery);
    // Ensure that the displayed data matches the filtered characters
    cy.contains("Morty Smith");
  });
});
