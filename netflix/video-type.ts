import APIService from "./api-service";
import BaseModel from "./base-model";

export class VideoType extends BaseModel {
  type: String;

  add() {
    new APIService<VideoType>().add(new VideoType());
  }
  list() {
    new APIService<VideoType>().list(new VideoType());
  }
  show() {
    new APIService<VideoType>().show(new VideoType());
  }
  update() {
    new APIService<VideoType>().update(new VideoType());
  }
  delete() {
    new APIService<VideoType>().add(new VideoType());
  }
}
