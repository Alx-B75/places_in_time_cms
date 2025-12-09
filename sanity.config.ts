import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { resolveProductionUrl } from "./src/lib/resolveProductionUrl";
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
  name: "default",
  title: "Places in Time CMS",

  projectId: "g3z4q74p",
  dataset: "production",

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },

  document: {
    productionUrl: async (prev, context) => {
      const { schemaType, document } = context;
      if (schemaType === "homepage") {
        return resolveProductionUrl(document);
      }
      return prev;
    },
  },
});
