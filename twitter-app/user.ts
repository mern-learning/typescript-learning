import BaseModel from "./base-model";
import { ITweet } from "./iTweet";
import { Tweet } from "./tweet";
import { UserProfile } from "./user-profile";
import UserService from "./user-service";

export class User extends BaseModel {
  name: string;
  profilePic: string;
  handle: string;
  profile: UserProfile;

  tweetSender: ITweet;

  add() {
    new UserService().add(new User());
  }

  tweet() {
    var tweet = new Tweet();
    tweet.body = "this is something";
    this.tweetSender.postTweet();
  }
}
