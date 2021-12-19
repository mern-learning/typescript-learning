import APIService from "./api-service";
import BaseModel from "./base-model";

export class UserProfile extends BaseModel {

  userId: number;
  noOfTweets: number;
  noOfFollowers: number;
  noOfFollows: number;
  address: string;

  add() {
    new APIService<UserProfile>().add(new UserProfile());
  }
}
