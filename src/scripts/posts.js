document.addEventListener('DOMContentLoaded', () => {
    loadPosts()
});

function loadPosts() {
    fetch('data.json')
    .then(reply => {
        return reply.json()
    })
    .then(data => {
        let html = '';
        data.cards_container.forEach(post => {
            const sizes = "(min-width: 768px) 350px, 100vw";
            const path = "https://said-alrove.github.io/cards-component/public/assets";
            // Creates the template
            html += `
                <article class="cards-post">
                    <picture>
                        <source 
                            type="image/webp" 
                            sizes="${sizes}"
                            srcset="
                                ${path}/webp/${post.id.x1}.webp 200w,
                                ${path}/webp/${post.id.x2}.webp 400w,
                                ${path}/webp/${post.id.x3}.webp 800w">
                        <img 
                            src="${path}/img/${post.id.x1}.jpg" 
                            srcset="
                                ${path}/img/${post.id.x1}.jpg 200w,
                                ${path}/img/${post.id.x2}.jpg 400w,
                                ${path}/img/${post.id.x3}.jpg 800w"
                            sizes="${sizes}"
                            class="cards-post__thumbnail"
                            alt="">
                    </picture>
                    <div class="post-content">
                        <header class="post-content__header">
                            <h2 class="post-content__title">
                                ${post.title}
                            </h2>
                        </header>
                        <p class="post-content__postedDate"> 
                            Posted on: <span class="post-content__data">${post.postedDate}</span> 
                        </p>
                        <p class="post-content__postAuthor"> 
                            By: <span class="post-content__data">${post.postAuthor}</span> 
                        </p>
                        <a href="#" class="btn-post">Read more</a>
                    </div>
                </article>
            `;
        });
        // Injects the HTML
        document.querySelector('#cards-container').innerHTML = html;
    });
}