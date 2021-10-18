import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, #__next {
    height: 100vh;
    width: 100vw;
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    font-family: system-ui, sans-serif;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    touch-action: manipulation;
    background-image: url("/assets/images/background/medical.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
  body {
    position: relative;
    min-height: 100%;
    font-feature-settings: 'kern';
  }
  *,
  *::before,
  *::after {
    border-width: 0;
    border-style: solid;
    box-sizing: border-box;
  }
  main {
    display: block;
  }
  hr {
    border-top-width: 1px;
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }
  pre,
  code,
  kbd,
  samp {
    font-family: SFMono-Regular,  Menlo, Monaco, Consolas, monospace;
    font-size: 1em;
  }
  a {
    background-color: transparent;
    color: inherit;
    text-decoration: inherit;
  }
  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }
  b,
  strong {
    font-weight: bold;
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  img {
    border-style: none;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }
  button,
  input {
    overflow: visible;
  }
  button,
  select {
    text-transform: none;
  }
  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }
  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }
  progress {
    vertical-align: baseline;
  }
  textarea {
    overflow: auto;
  }
  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none !important;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
  [type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none !important;
  }
  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }
  details {
    display: block;
  }
  summary {
    display: list-item;
  }
  template {
    display: none;
  }
  [hidden] {
    display: none !important;
  }
  body,
  blockquote,
  dl,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  figure,
  p,
  pre {
    margin: 0;
  }
  button {
    background: transparent;
    padding: 0;
  }
  fieldset {
    margin: 0;
    padding: 0;
  }
  ol,
  ul {
    margin: 0;
    padding: 0;
  }
  textarea {
    resize: vertical;
  }
  button,
  [role="button"] {
    cursor: pointer;
  }
  button::-moz-focus-inner {
    border: 0 !important;
  }
  table {
    border-collapse: collapse;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    padding: 0;
    line-height: inherit;
    color: inherit;
  }
  img,
  svg,
  video,
  canvas,
  audio,
  iframe,
  embed,
  object {
    display: block;
  }
  img,
  video {
    max-width: 100%;
    height: auto;
  }
  [data-js-focus-visible] :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }
  select::-ms-expand {
    display: none;
  }

  :root {
    --primary: lightblue;
    --secondary: #2f3136;
    --tertiary: rgb(32,34,37);
    --quaternary: #292b2f;
    --quinary: #393d42;
    --senary: #828386;
    --bg-white-glass-primary: linear-gradient(to right bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.5));
    --bg-white-glass-secondary: linear-gradient(to right bottom, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.3));
    --bg: linear-gradient(to right top, #65dfc9, #6cdbeb);

    --text: 1rem;
    --margin: margin: 0.5rem auto 0;
    --box-shadow: rgba(0, 0, 0, 0.15) 1px 1px 2px;
    --box-shadow-up: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    --border-radius: 0.5rem;
    --transition-duration: 0.2s;

    --input-padding: 1rem;
    --input-height: 3.5rem;
    --input-border: 1px solid var(--primary);
    --input-border-hover: 1px solid var(--secondary);
    --input-border-radius: 0.5rem;
    --input-focus: var(--primary);
    --input-transition-duration: var(--transition-duration);
    --input-box-shadow-focus: var(--box-shadow-up);

    --white: #fff;
    --gray: #8a8c90;

    --xs: 0.75rem;
    --sm: 0.875rem;
    --md: 1rem;
    --lg: 1.125rem;
    --xl: 1.25rem;
    --x2l: 1.5rem;
    --x3l: 1.875rem;
    --x4l: 2.25rem;
    --x5l: 3rem;
    --x6l: 3.75rem;
    --x7l: 4.5rem;
    --x8l: 6rem;
    --x9l: 8rem;
  }
`;
