/**
 * Represents a YouTube video.
 */
export interface IYoutubeVideo {
    readonly title: string;
    readonly description: string;
    readonly channelTitle: string;
    readonly thumbnails: IThumbnail[];
}

/**
 * Represents the thumbnail for a video.
 */
export interface IThumbnail {
    readonly url: string;
    readonly width: number;
    readonly height: number;
}
