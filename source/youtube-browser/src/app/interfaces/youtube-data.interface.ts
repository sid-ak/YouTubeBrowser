/**
 * Represents a YouTube video.
 */
export interface IYoutubeVideo {
    readonly id: string;
    readonly title: string;
    readonly description: string;
    readonly channelTitle: string;
    readonly thumbnails: IThumbnails;
}

/**
 * Represents a collection of thumbnails.
 */
export interface IThumbnails {
    readonly default: IThumbnail;
    readonly medium: IThumbnail;
    readonly high: IThumbnail;
}

/**
 * Represents a single thumbnail.
 */
export interface IThumbnail {
    readonly url: string;
    readonly width: number;
    readonly height: number;
}
