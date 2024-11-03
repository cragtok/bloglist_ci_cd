const Blog = require("../../models/blog.js");

describe("Blog", () => {
    it("should create and return a valid Blog object", async () => {
        const newBlog = new Blog({
            title: "Example",
            url: "www.example.org",
            author: "example",
        });

        expect(newBlog).toHaveProperty("title");
        expect(newBlog.title).toEqual("Example");

        expect(newBlog).toHaveProperty("author");
        expect(newBlog.author).toEqual("example");

        expect(newBlog).toHaveProperty("url");
        expect(newBlog.url).toEqual("www.example.org");

        expect(newBlog).toHaveProperty("likes");
        expect(newBlog.likes).toEqual(0);

        expect(newBlog).toHaveProperty("comments");
        expect(newBlog.comments).toHaveLength(0);

        expect(newBlog).toHaveProperty("userLikes");
        expect(newBlog.userLikes).toHaveLength(0);

        expect(newBlog).toHaveProperty("_id");
        expect(newBlog._id).not.toBeFalsy();
    });
});
