var J_Blog = [
    {
        title: "blog 1",
        date: "wed oct 23",
        description: "first blog",
        image: "https://media.licdn.com/dms/image/v2/C560BAQGDbdhpmxRmrg/company-logo_200_200/company-logo_200_200/0/1633548685050/hack4impact_logo?e=2147483647&v=beta&t=Cgni3x2P5I8nwhyAaHkblCo0OP6yx857PLG7O5Zw_W4",
        imageAlt: "random image",
        slug: "./blog/blog1.html"
    },
    {
        title: "blog 2",
        date: "wed oct 24",
        description: "working on my bootcamp project",
        image: "https://media.licdn.com/dms/image/v2/C560BAQGDbdhpmxRmrg/company-logo_200_200/company-logo_200_200/0/1633548685050/hack4impact_logo?e=2147483647&v=beta&t=Cgni3x2P5I8nwhyAaHkblCo0OP6yx857PLG7O5Zw_W4",
        imageAlt: "random image",
        slug: "./blog/blog2.html"
    }
];
var blogContainer = document.getElementById('j-blog-container');
var blogContainer1 = document.getElementById('j-blog-container-1');
var blogContainer2 = document.getElementById('j-blog-container-2');
J_Blog.forEach(function (blog, index) {
    var blogElement = document.createElement('div');
    blogElement.classList.add('blog');
    var blog_title = document.createElement('h1');
    blog_title.textContent = blog.title;
    var blog_date = document.createElement('p');
    blog_date.textContent = blog.date;
    var blog_description = document.createElement('p');
    blog_description.textContent = blog.description;
    var blog_img = document.createElement('img');
    blog_img.src = blog.image;
    blog_img.alt = blog.imageAlt;
    var blog_slug = document.createElement('a');
    blog_slug.text = blog.slug;
    blog_slug.href = blog.slug;
    blogElement.appendChild(blog_title);
    blogElement.appendChild(blog_date);
    blogElement.appendChild(blog_description);
    blogElement.appendChild(blog_img);
    // Append each blog to its respective container
    if (index === 0 && blogContainer1) {
        blogContainer1.appendChild(blogElement);
    }
    else if (index === 1 && blogContainer2) {
        blogContainer2.appendChild(blogElement);
    }
    else if (blogContainer) {
        // Fallback if blogContainer1 or blogContainer2 are missing
        blogContainer.appendChild(blogElement);
        blogElement.appendChild(blog_slug);
    }
});
