import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import type { MetaFunction } from "remix";
import pico from "@picocss/pico/css/pico.min.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: pico
    }
  ];
}

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Links></Links>
      </head>
      <body>
        <header className="container">
          <nav>
            <ul>
              <li><strong>Remix Blog Tutorial By BlackBear</strong></li>
            </ul>
            <ul>
              <li><a href="/posts">Posts</a></li>
              <li><a href="/admin">Admin</a></li>
            </ul>
          </nav>
        </header>
        <main className="container">
          <Outlet />
          <ScrollRestoration />
          {process.env.NODE_ENV === "development" && <LiveReload />}
        </main>
      </body>
    </html>
  );
}
