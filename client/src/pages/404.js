export default function Custom404() {
    return (
        <div style={{ textAlign: "center", padding: "50px" }}>
            <h1>404 - Page Not Found</h1>
            <p>Looks like you've followed a broken link or entered a URL that doesn't exist on this site.</p>
            <a href="/" style={{ textDecoration: "underline", color: "blue" }}>Back to our site</a>
        </div>
    );
}
