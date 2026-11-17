import Link from 'next/link';

export default function PostsPage() {
    const posts = [
        { id: '1', title: 'First Post' },
        { id: '2', title: 'Second Post' },
        { id: '3', title: 'Third Post' },
    ];

    return (
        <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
            <h1>Posts List</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id} style={{ margin: '0.5rem 0' }}>
                        <Link href={`/posts/${post.id}`} style={{ color: '#0070f3' }}>
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}