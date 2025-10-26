import "./globals.css";

export const metadata = {
    title: "The BluePrint Series - Rich Tu",
    description: "A Fireside Chat with Rich Tu",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link
                    href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono:400|IBM+Plex+Sans:500,400"
                    rel="stylesheet"
                />
            </head>
            <body>{children}</body>
        </html>
    );
}
