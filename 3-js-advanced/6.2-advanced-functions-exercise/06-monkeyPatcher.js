function solution(command) {

    const actions = {

        upvote: () => this.upvotes++,

        downvote: () => this.downvotes++,

        score: () => {

            const totalVotes = this.upvotes + this.downvotes;

            const totalScore = this.upvotes - this.downvotes;

            const tempVal = Math.ceil(Math.max(this.upvotes, this.downvotes) * 0.25);

            const reportedUpvotes = totalVotes > 50 ? this.upvotes + tempVal : this.upvotes;

            const reportedDownvotes = totalVotes > 50 ? this.downvotes + tempVal : this.downvotes;

            let rating = 'new';

            if (totalVotes < 10) {

                rating = 'new';

            } else if (this.upvotes / totalVotes > 0.66) {

                rating = 'hot';

            } else if (this.downvotes <= this.upvotes && totalVotes > 100) {

                rating = 'controversial'

            } else if (this.downvotes > this.upvotes) {

                rating = 'unpopular';

            }

            return [reportedUpvotes, reportedDownvotes, totalScore, rating];

        }


    };

    return actions[command]();

}