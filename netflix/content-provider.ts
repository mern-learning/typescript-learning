import IVideo from "./iVideo";

export default class ContentProvider implements IVideo {
  streamVideo(url: String) {
    console.log("Currently " + url + " is streamed.");
  }
}
