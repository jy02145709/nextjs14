import { Metadata } from "next";
import Navigation from "./components/navigation";
import "./styles/global.css";

export const metadata: Metadata = {
  title: {
    template: "%s|Next Movie",
    default: "Next Movies",
  },
  description: "The best movies on bests framework",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
