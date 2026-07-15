async function getUserAndPosts(userId) {
  try {
    const user = await User.findById(userId);
    const posts = await Post.find({ userId });
    return { user, posts };
  } catch (error) {
    console.error('Database error:', error);
    throw error;
  }
}