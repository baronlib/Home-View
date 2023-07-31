export class Camera{
    public Id  : number;
    public Description : string;
    public FeedUrl : string;

    constructor(id: number, description: string, feedUrl: string)
    {
        this.Id = id;
        this.Description = description;
        this.FeedUrl = feedUrl;
    }
}