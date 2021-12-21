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
          <hgroup>
            <h1>Pico!</h1>
          </hgroup>
        </header>
        <main className="container">
          <Outlet />
          <ScrollRestoration />
          <button>Sample Button</button>
          {process.env.NODE_ENV === "development" && <LiveReload />}
        </main>
      </body>
    </html>
  );
}
