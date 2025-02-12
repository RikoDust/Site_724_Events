import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });

});



// TESTS COMPLEMENTAIRES 
describe("When a page is created", () => {
  it("a list of events is displayed", async () => {
    render(<Home />);
    // Recherche tous les éléments ayant l'attribut data-testid="card-testid"
    const eventCards = await screen.findAllByTestId("card-testid"); 
    expect(eventCards.length).toBeGreaterThan(0); 
    // Vérifie qu'au moins une carte d'évènement est présente sur la page
  })

  it("a list a people is displayed", async () => {
    render(<Home />);
    await screen.findByText("Samira");
    // await screen.findByText("Jean-Baptiste");
    await screen.findByText("Alice");
    await screen.findByText("Luís");
    await screen.findByText("Christine");
    await screen.findByText("Isabelle");
    // Vérifie le bon affichage des noms des membres de l'équipe
  })

  it("a footer is displayed", async () => {
    render(<Home />);
    await screen.findByText("Notre derniére prestation");
    await screen.findByText("Contactez-nous");
    // Vérifie si les titres "Notre derniére prestation" et "Contactez-nous" sont bien affichés
  })

  it("an event card, with the last event, is displayed", async () => {
    render(<Home />);
    const cardElement = await screen.getByTestId("card-testid");
    expect(cardElement.classList.contains("EventCard--small")).toBe(true);
    // Vérifie si l'element affiché est bien de type "small"
  })
});
