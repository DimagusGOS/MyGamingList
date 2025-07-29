export default function NoResults({ gameName }) {
    return (
        <div>
            <h2>No Results</h2>
            <p>Sorry, we couldn't find any games with {gameName}.</p>
        </div>
    );
}