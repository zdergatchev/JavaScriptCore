function posts() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}
Content: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let baseStr = super.toString();
            let rating = this.likes - this.dislikes;
            let comments = '';
            for (let comment of this.comments) {
                comments += `\n * ${comment}`;
            }

            if (this.comments.length == 0) {
                return `${baseStr}
Rating: ${rating}`;
            }
            else {
                return `${baseStr}
Rating: ${rating}
Comments:${comments}`;
            }
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            return super.toString() + `\nViews: ${this.views}`;
            // let baseStr = super.toString();
            // return baseStr + `\nViews: ${this.views}`;
        }
    }
    return {Post, SocialMediaPost, BlogPost}
}

let Post = posts().Post;
let post = new Post("Post", "Content");
console.log(post.toString());
let SocialMediaPost = posts().SocialMediaPost;
let scm = new SocialMediaPost("TestTitle", "TestContent", 25, 30);
scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");
console.log(scm.toString());
let BlogPost = posts().BlogPost;
let blogPost = new BlogPost("BlogTitle", "Blog test content", 5);
for (let i = 0; i < 10; i++)
    blogPost.view();
console.log(blogPost.toString());
