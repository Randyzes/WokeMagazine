function loadMoreBlogs() {
    const main = document.querySelector('main');
    const newBlog = document.createElement('section');
    newBlog.classList.add('blog-post');
    newBlog.innerHTML = `
        <h2>New Blog Post</h2>
        <p>This is a dynamically loaded blog post using JavaScript.</p>
    `;
    main.appendChild(newBlog);
}
