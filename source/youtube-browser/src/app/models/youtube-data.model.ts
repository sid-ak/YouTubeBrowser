import { IThumbnail, IThumbnails, IYoutubeVideo } from "../interfaces/youtube-data.interface";

/**
 * Represents a YouTube search result.
 */
export class YoutubeSearchList {
    readonly query: string
    nextPageToken: string;
    videos: IYoutubeVideo[];

    constructor(query?: string, nextPageToken?: string, videos?: IYoutubeVideo[]) {
        this.query = query ?? "";
        this.nextPageToken = nextPageToken ?? "";
        this.videos = videos ?? [];
    }
}

/**
 * Represents a YouTube video.
 */
export class YoutubeVideo {
    readonly title: string;
    readonly description: string;
    readonly channelTitle: string;
    readonly thumbnails: IThumbnails;

    constructor(video: IYoutubeVideo) {
        this.title = video.title;
        this.description = video.description;
        this.channelTitle = video.channelTitle;
        this.thumbnails = video.thumbnails;
    }
}
