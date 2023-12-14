const UserPosts = async ({ promise }) => {
  const posts = await promise;
  return (
    <div>
      <ul>
        {posts.map((post) => {
          return (
            <p className='text-3xl mt-10' key={post.id}>
              {post.title}
            </p>
          );
        })}
      </ul>
    </div>
  );
};

export default UserPosts;
