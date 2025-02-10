
import { getMonth } from "./index";

// Test de la fonction "getMonth" et non du composant, donc pas besoin de "render"


// TESTS COMPLEMENTAIRES 
describe("Date helper", () => {
    describe("When getMonth is called", () => {
        it("the function return janvier for 2022-01-01 as date", () => {
            const date = new Date("2022-01-01"); // Création de la date
            const result = getMonth(date); // Appel de la fonction
            expect(result).toBe("janvier"); // Vérification du résultat
        });

        it("the function return juillet for 2022-07-08 as date", () => {
            const date = new Date("2022-07-08"); // Création de la date
            const result = getMonth(date); // Appel de la fonction
            expect(result).toBe("juillet"); // Vérification du résultat
        });
    });
})

