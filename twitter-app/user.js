"use strict";
exports.__esModule = true;
exports.User = void 0;
var tweet_1 = require("./tweet");
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.tweet = function () {
        var tweet = new tweet_1.Tweet();
        tweet.body = "this is something";
        this.tweetSender.postTweet();
        ;
    };
    return User;
}());
exports.User = User;
