const calculateTreats = require("./treats");

test("Calculate the total number of kitty treats", () => {
	const kitties = 5;
	const treatsPerKitty = 10;
	const expectedTotalTreats = 50;

	expect(calculateTreats(kitties, treatsPerKitty)).toBe(expectedTotalTreats);
});
