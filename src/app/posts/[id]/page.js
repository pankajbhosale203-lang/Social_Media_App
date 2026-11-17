export default async function PostDetailPage({ params }) {
    const { id } = await params;

    // You can fetch or look up the post details using this id
    return (
        <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
            <h1>Post Detail Page</h1>
            <p>You are viewing post ID: <strong>{id}</strong></p>
        </main>
    );
}