import BaseModel from "./base-model";
import APIService from "./api-service";

export default class TVShows extends BaseModel { 
season: Number;
title: String;

add() {
    new APIService<TVShows>().add(new TVShows());
  }
  list() {
    new APIService<TVShows>().list(new TVShows());
  }
  show() {
    new APIService<TVShows>().show(new TVShows());
  }
  update() {
    new APIService<TVShows>().update(new TVShows());
  }
  delete() {
    new APIService<TVShows>().add(new TVShows());
  }
}