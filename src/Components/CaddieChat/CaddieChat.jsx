import "./CaddieChat.css";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Caddie from "../Caddie/Caddie";
import { DESTINATIONS, findDestination, randomMiss } from "./caddieSearch";

const GREETING = "What do you want to search for?";
const GREETING_MS = 700;
// fake "thinking" time so the typing dots have a moment to show
const THINKING_MS = 1200;
// time to read the reply before moving to the page
const NAVIGATE_MS = 1500;

// Clicking the caddie opens an iMessage-style chat. Queries are matched to a
// page by keyword (see caddieSearch.js); misses get a golf joke.
const CaddieChat = ({ className }) => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);
  const [draft, setDraft] = useState("");
  const navigate = useNavigate();
  const timers = useRef([]);
  const buttonRef = useRef(null);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  useEffect(() => {
    if (open && !typing) inputRef.current?.focus();
  }, [open, typing]);

  useEffect(() => {
    const list = listRef.current;
    if (list) list.scrollTop = list.scrollHeight;
  }, [messages, typing, open]);

  const later = (fn, ms) => timers.current.push(setTimeout(fn, ms));

  const caddieSays = (message, delay) => {
    setTyping(true);
    later(() => {
      setTyping(false);
      setMessages((current) => [...current, { from: "caddie", ...message }]);
    }, delay);
  };

  const toggle = () => {
    if (!open && messages.length === 0 && !typing)
      caddieSays({ text: GREETING }, GREETING_MS);
    setOpen(!open);
  };

  const close = () => {
    setOpen(false);
    buttonRef.current?.focus();
  };

  const ask = (query) => {
    const text = query.trim();
    if (!text || typing) return;

    setDraft("");
    setMessages((current) => [...current, { from: "user", text }]);

    const match = findDestination(text);
    if (!match) {
      caddieSays({ text: randomMiss() }, THINKING_MS);
      return;
    }

    caddieSays({ text: match.reply, links: match.links }, THINKING_MS);
    if (match.path)
      later(() => navigate(match.path), THINKING_MS + NAVIGATE_MS);
  };

  return (
    <div className={`caddie-chat ${className || ""}`}>
      {open && (
        <section
          className="chat-panel"
          role="dialog"
          aria-label="Ask the caddie"
          onKeyDown={(e) => e.key === "Escape" && close()}
        >
          <header className="chat-header">
            <span className="chat-title">Your Caddie</span>
            <button
              type="button"
              className="chat-close"
              onClick={close}
              aria-label="Close chat"
            >
              ×
            </button>
          </header>

          <ol className="chat-messages" ref={listRef} aria-live="polite">
            {messages.map((message, i) => (
              <li key={i} className={`chat-bubble chat-bubble-${message.from}`}>
                {message.text}
                {message.links && (
                  <span className="chat-links">
                    {message.links.map(({ label, href }) => (
                      <a
                        key={label}
                        href={href}
                        {...(href.startsWith("http") && {
                          target: "_blank",
                          rel: "noreferrer",
                        })}
                      >
                        {label}
                      </a>
                    ))}
                  </span>
                )}
              </li>
            ))}
            {typing && (
              <li
                className="chat-bubble chat-bubble-caddie chat-typing"
                aria-label="Caddie is typing"
              >
                <span />
                <span />
                <span />
              </li>
            )}
          </ol>

          <div className="chat-suggestions">
            {DESTINATIONS.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => ask(label)}
                disabled={typing}
              >
                {label}
              </button>
            ))}
          </div>

          <form
            className="chat-input"
            onSubmit={(e) => {
              e.preventDefault();
              ask(draft);
            }}
          >
            <input
              ref={inputRef}
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Ask your caddie…"
              aria-label="What do you want to search for?"
              maxLength={120}
            />
            <button
              type="submit"
              aria-label="Send"
              disabled={!draft.trim() || typing}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M12 19V5M5 12l7-7 7 7"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>
        </section>
      )}

      {!open && <span className="chat-hint">Ask your caddie</span>}

      <button
        ref={buttonRef}
        type="button"
        className="caddie-button"
        onClick={toggle}
        aria-expanded={open}
        aria-label={open ? "Close caddie chat" : "Ask the caddie"}
      >
        <Caddie className="home-caddie" />
      </button>
    </div>
  );
};

export default CaddieChat;
