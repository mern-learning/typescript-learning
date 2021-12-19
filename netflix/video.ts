import { Genre } from "./genre";
import { VideoType } from "./video-type";

export class Video {
  title: String;
  description: Text;
  video: Text; // should a link to video stored in db on with api
  type: VideoType;
  genre: Genre[];
}
