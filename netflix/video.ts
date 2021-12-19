import APIService from "./api-service";
import BaseModel from "./base-model";
import { Genre } from "./genre";
import IVideo from "./iVideo";
import { VideoType } from "./video-type";

export class Video extends BaseModel {
  title: String;
  description: Text;
  video: Text; // should a link to video stored in db on with api
  type: VideoType;
  genre: Genre[];

  contentProvider: IVideo;

  getVideo() {
    return "MOVIE";
  }

  play() {
    const video = this.getVideo();
    console.log(this.contentProvider.streamVideo(video));
  }

  add() {
    new APIService<Video>().add(new Video());
  }
  list() {
    new APIService<Video>().list(new Video());
  }
  show() {
    new APIService<Video>().show(new Video());
  }
  update() {
    new APIService<Video>().update(new Video());
  }
  delete() {
    new APIService<Video>().add(new Video());
  }
}
