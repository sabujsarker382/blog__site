export default function PostCard({ post }) {
    return (
      <div className="border p-4 rounded shadow my-4">
        <h2 className="text-xl font-semibold">{post.title}</h2>
        <p className="text-gray-700">{post.content.slice(0, 150)}...</p>
      </div>
    );
  }
  