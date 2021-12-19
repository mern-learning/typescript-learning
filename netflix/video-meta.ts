import APIService from "./api-service";
import BaseModel from "./base-model";
import { Video } from "./Video";

export class VideoMeta extends BaseModel {
  video: Video;
  watchCount: Number;
  lenght: Number;

  add() {
    new APIService<VideoMeta>().add(new VideoMeta());
  }
  list() {
    new APIService<VideoMeta>().list(new VideoMeta());
  }
  show() {
    new APIService<VideoMeta>().show(new VideoMeta());
  }
  update() {
    new APIService<VideoMeta>().update(new VideoMeta());
  }
  delete() {
    new APIService<VideoMeta>().add(new VideoMeta());
  }
}
