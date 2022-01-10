class Story {

    constructor(title, creator) {

        this.title = title;

        this.creator = creator;

        this._comments = [];

        this._likes = [];

    }

    get likes() {

        if (!this._likes.length) {

            return `${this.title} has 0 likes`;

        } else if (this._likes.length == 1) {

            return `${this._likes[0]} likes this story!`;

        }

        return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`;

    }

    like(username) {

        if (this._likes.includes(username)) {

            throw new Error('You can\'t like the same story twice!');

        } else if (username == this.creator) {

            throw new Error('You can\'t like your own story!');

        }

        this._likes.push(username);

        return `${username} liked ${this.title}!`;

    }

    dislike(username) {

        if (!this._likes.includes(username)) {

            throw new Error('You can\'t dislike this story!');

        }

        this._likes.splice(this._likes.indexOf(username), 1);

        return `${username} disliked ${this.title}`;

    }

    comment(username, content, id) {

        const currentComment = this._comments.find(e => e.id == id);

        if (id == undefined || !currentComment) {

            this._comments.push({

                id: this._comments.length + 1,

                username,

                content,

                replies: [],

            });

            return `${username} commented on ${this.title}`;

        } else {

            currentComment.replies.push({

                id: `${id}.${currentComment.replies.length + 1}`,

                username,

                content,

            });

            return `You replied successfully`;

        }

    }

    toString(criteria) {

        const result = [`Title: ${this.title}`, `Creator: ${this.creator}`, `Likes: ${this._likes.length}`, `Comments:`];

        const sortingActions = {

            'asc': (a, b) => a.id - b.id,

            'desc': (a, b) => b.id - a.id,

            'username': (a, b) => a.username.localeCompare(b.username),

        };

        this._comments.sort(sortingActions[criteria]).forEach(e => {

            result.push(`-- ${e.id}. ${e.username}: ${e.content}`);

            e.replies.sort(sortingActions[criteria]).forEach(e => {

                result.push(`--- ${e.id}. ${e.username}: ${e.content}`);

            });

        });

        return result.join('\n');

    }

}