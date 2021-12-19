import { Genre } from "./genre";
import IVideo from "./iVideo";
import { VideoType } from "./video-type";

export class Video {
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
}
