// Just To add Global Wrapper
import GlobaStyles from "../src/components/particles/GlobalStyles.jsx"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  
  //1)  USE TO SORTING STORIES
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
};


