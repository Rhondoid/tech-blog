// Manages data and business logic.
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

Post.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: "CASCADE",
});
User.hasMany(Comment, {
  foreignKey: "postId",
});
Comment.belongsTo(User,{
  foreignKey:"postId",
})

module.exports = { User, Post, Comment };