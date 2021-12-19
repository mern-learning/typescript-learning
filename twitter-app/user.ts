import { ITweet } from "./iTweet";
import { Tweet } from "./tweet";
import { UserProfile } from "./user-profile";

export class User {
  id: number;
  name: string;
  profilePic: string;
  handle: string;
  profile: UserProfile;

  tweetSender: ITweet;

  tweet() {
    var tweet = new Tweet();
    tweet.body = "this is something";
    this.tweetSender.postTweet();;
  }
}
