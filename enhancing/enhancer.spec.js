const enhancer = require('./enhancer.js');

describe("enhancer.js", () => {
	describe("succeed()", () => {
		it("should increase enhancement by one", () => {
			expect(
				enhancer.succeed({ name: "axe", durability: 100, enhancement: 15 })
			).toEqual({ name: "axe", durability: 100, enhancement: 16 });
		});

		it("should not increase enhancement if it is already 20", () => {
			expect(
				enhancer.succeed({ name: "axe", durability: 100, enhancement: 20 })
			).toEqual({ name: "axe", durability: 100, enhancement: 20 });
		});
	});

	describe("fail()", () => {
		it("should decrease durability by 5 if enhancement < 15", () => {
			expect(
				enhancer.fail({ name: "axe", durability: 100, enhancement: 10 })
			).toEqual({ name: "axe", durability: 95, enhancement: 10 });
		});

		it("should decrease durability by 10 if enhancement = 15", () => {
			expect(
				enhancer.fail({ name: "axe", durability: 100, enhancement: 15 })
			).toEqual({ name: "axe", durability: 90, enhancement: 15 });
		});

		it("should decrease durability by 10 if enhancement > 15", () => {
			expect(
				enhancer.fail({ name: "axe", durability: 100, enhancement: 16 })
			).toEqual({ name: "axe", durability: 90, enhancement: 16 });
		});

		it("should decrease durability by 10 and enhancement by 1 if enhancement > 16", () => {
			expect(
				enhancer.fail({ name: "axe", durability: 100, enhancement: 17 })
			).toEqual({ name: "axe", durability: 90, enhancement: 16 });
		});
	});

	describe("repair()", () => {
		it("should set durability to 100", () => {
			expect(
				enhancer.repair({ name: "axe", durability: 90, enhancement: 16 })
			).toEqual({ name: "axe", durability: 100, enhancement: 16 });
		});

		it("durability should stay at 100 if already there", () => {
			expect(
				enhancer.repair({ name: "axe", durability: 100, enhancement: 16 })
			).toEqual({ name: "axe", durability: 100, enhancement: 16 });
		});
    });
    
});
