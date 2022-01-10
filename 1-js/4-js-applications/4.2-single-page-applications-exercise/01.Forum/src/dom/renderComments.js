export function renderComments(post, parentEl) {

    parentEl.innerHTML = `
    <div class="container">
    <div class="theme-content">
        <div class="theme-title">
            <div class="theme-name-wrapper">
                <div class="theme-name">
                    <h2>${post.title}</h2>
                </div>
                <div class="comment">
                    <div class="header">
                        <img src="./static/profile.png" alt="avatar">
                        <p><span>${post.username}</span> posted on <time>${post.time}</time></p>

                        <p class="post-content">${post.description}</p>
                    </div>
                </div>

            </div>
        </div>
        <div class="comment">

        </div>
        <div class="answer-comment">
            <p><span>currentUser</span> comment:</p>
            <div class="answer">
                <form>
                    <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
                    <div>
                        <label for="username">Username <span class="red">*</span></label>
                        <input type="text" name="username" id="username">
                    </div>
                    <button>Post</button>
                </form>
            </div>
        </div>
    </div>
</div>`

}