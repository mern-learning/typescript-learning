import { ITweet } from "./iTweet";

export class TweetSender implements ITweet {
  postTweet() {
    console.log("Tweet posted");
  }
}
