class CommentDTO {
  constructor(comment) {
    this.id = comment._id;
    this.videoId = comment.video_id;
    this.username = comment.username;
    this.commentMessage = comment.comment_message;
    this.timestamps = comment.createdAt;
  }
}

export default CommentDTO;
