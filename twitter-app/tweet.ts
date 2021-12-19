export class Tweet {
  id: number;
  tweeterId: number;
  body: string;
  hearts: number;
  replies: Tweet[];
  timeStamp: Date;
  noOfReteets: number;

 
}
