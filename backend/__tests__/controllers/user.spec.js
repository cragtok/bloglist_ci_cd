const User = require("../../models/user.js");

describe("User", () => {
    it("should create and return a valid User object", async () => {
        const newUser = new User({
            username: "jackson_123",
            password: "password",
            name: "jackson",
        });

        expect(newUser).toHaveProperty("username");
        expect(newUser.username).toEqual("jackson_123");

        expect(newUser).toHaveProperty("name");
        expect(newUser.name).toEqual("jackson");

        expect(newUser).not.toHaveProperty("password");

        expect(newUser).toHaveProperty("_id");
        expect(newUser._id).not.toBeFalsy();

        expect(newUser).toHaveProperty("blogs");
        expect(newUser.blogs).toHaveLength(0);
    });
});
