import APIService from "./api-service";
import BaseModel from "./base-model";

export class Tweet extends BaseModel {
  tweeterId: number;
  body: string;
  hearts: number;
  replies: Tweet[];
  timeStamp: Date;
  noOfReteets: number;

  add() {
    new APIService<Tweet>().add(new Tweet());
  }
}
