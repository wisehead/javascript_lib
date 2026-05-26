import { UserService } from "./userService";

describe("UserService", () => {
    let service: UserService;

    beforeEach(() => {
        service = new UserService();
    });

    describe("createUser", () => {
        it("should create a user with id", () => {
            const user = service.createUser("Alice");
            expect(user.id).toBe(1);
            expect(user.name).toBe("Alice");
        });

        it("should increment id for each user", () => {
            const user1 = service.createUser("Alice");
            const user2 = service.createUser("Bob");
            expect(user2.id).toBe(user1.id + 1);
        });
    });

    describe("getUser", () => {
        it("should return user by id", () => {
            const created = service.createUser("Alice");
            const found = service.getUser(created.id);
            // 使用可选链和 toBe
            expect(found?.name).toBe("Alice");
        });

        it("should return undefined for non-existent id", () => {
            const found = service.getUser(999);
            expect(found).toBeUndefined();
        });
    });
});