const Comment = require("../../models/comment.js");

describe("Comment", () => {
    it("should create and return a valid Comment object", async () => {
        const newComment = new Comment({
            comment: "This is a comment",
        });

        expect(newComment).toHaveProperty("comment");
        expect(newComment.comment).toEqual("This is a comment");

        expect(newComment).toHaveProperty("_id");
        expect(newComment._id).not.toBeFalsy();
    });
});
