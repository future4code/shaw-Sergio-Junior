export class FollowersModel {
    constructor(
        public id: number,
        public userId: string,
        public followerId: string
    ) { }

    public getUserId() {
        return this.userId
    }
    public getFollowerId() {
        return this.followerId
    }
}