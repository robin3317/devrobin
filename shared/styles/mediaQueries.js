export const mediaQueries = key => {
  switch (key) {
    case 'phone-lg':
      return style => `@media (min-width: 23.5em) and (max-width: 37.5em) { ${style} }`;

    default:
      break;
  }
}

/*
- phone-md
- phone-lg
- tab-port
- tab-land
- big-desktop
*/