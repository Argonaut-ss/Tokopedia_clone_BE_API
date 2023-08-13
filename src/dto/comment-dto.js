class CommentDTO {
  constructor(comment) {
    this.id = comment._id;
    this.username = comment.username;
    this.commentMessage = comment.comment_message;
    this.timestamps = comment.createdAt;
  }
}

export default CommentDTO;
