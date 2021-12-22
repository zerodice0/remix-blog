import { Link } from "remix";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <hgroup>
        <h1>Welcome to Remix - Developer blog tutorials</h1>
        <h3>
          This page is built by Remix, and pico.css. If you want to try, then start it from <Link to="https://remix.run/docs/en/v1/tutorials/blog">Remix Tutorials - Developer Blog</Link>.
        </h3>
      </hgroup>
      <div className="grid">
        <div>
          <article>
            <header>
              <Link to="https://picocss.com/">Pico.css - Minimal CSS Framework for semantic HTML</Link>
            </header>
            Elegant styles for all natives HTML elements without .classes and dark mode automatically enabled.
          </article>
        </div>
        <div>
          <article>
            <header>
              <Link to="https://remix.run/">Remix - Focused on web fundamentals and modern UX</Link>
            </header>
            Remix is a full stack web framework that lets you focus on the user interface and work back through web fundamentals to deliver a fast, slick, and resilient user experience.
          </article>
        </div>
        <div>
          <article>
            <header>
              <Link to="https://remix.run/docs/en/v1/tutorials/blog">Remix Tutorials - Developer Blog</Link>
            </header>
            Make a developer blog with Remix. We're going to be short on words and quick on code in this quickstart. If you're looking to see what Remix is all about in 15 minutes, this is it.
          </article>
        </div>
      </div>
    </div>
  );
}
