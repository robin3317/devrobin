export const mediaQueries = (key) => {
  switch (key) {
    case "phone-lg": // 376px to 600px
      return (style) =>
        `@media (min-width: 23.5em) and (max-width: 37.5em) { ${style} }`;

    case "phone-md": // 375px
      return (style) => `@media (max-width: 23.4375em) { ${style} }`;

    case "phone-md-lg": // 0px to 600px
      return (style) =>
        `@media (min-width: 0em) and (max-width: 37.5em) { ${style} }`;

    case "tab-port": // 601px to 900px
      return (style) =>
        `@media (min-width: 37.5625em) and (max-width: 56.25em) { ${style} }`;

    case "tab-land": // 901px to 1200px
      return (style) =>
        `@media (min-width: 56.3125em) and (max-width: 75em) { ${style} }`;

    case "all-desktop": // 1201px to upper
      return (style) =>
        `@media (min-width: 75.0625em) and (max-width: 250em) { ${style} }`;

    default:
      break;
  }
};
