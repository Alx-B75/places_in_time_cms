import { defineField, defineType } from "sanity";

export default defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({ name: "heroTitle", title: "Hero title", type: "string" }),
    defineField({ name: "heroSubtitle", title: "Hero subtitle", type: "text" }),
    defineField({
      name: "heroCtaPrimaryLabel",
      title: "Hero primary CTA label",
      type: "string",
    }),
    defineField({
      name: "heroCtaSecondaryLabel",
      title: "Hero secondary CTA label",
      type: "string",
    }),

    defineField({
      name: "heroVisual",
      title: "Hero visual metadata",
      type: "object",
      fields: [
        defineField({ name: "kicker", title: "Kicker label", type: "string" }),
        defineField({ name: "quote", title: "Quote", type: "text" }),
        defineField({
          name: "body",
          title: "Body text",
          type: "array",
          of: [{ type: "block" }],
        }),
        defineField({ name: "footnote", title: "Footnote", type: "string" }),
      ],
    }),

    defineField({
      name: "placesTitle",
      title: "Places section title",
      type: "string",
    }),
    defineField({
      name: "placesBody",
      title: "Places section body",
      type: "text",
    }),

    defineField({
      name: "peopleTitle",
      title: "People section title",
      type: "string",
    }),
    defineField({
      name: "peopleBody",
      title: "People section body",
      type: "text",
    }),

    defineField({
      name: "quothaTitle",
      title: "Quotha section title",
      type: "string",
    }),
    defineField({
      name: "quothaBody",
      title: "Quotha section body",
      type: "text",
    }),
    defineField({
      name: "quothaCtaLabel",
      title: "Quotha CTA label",
      type: "string",
    }),

    defineField({
      name: "newsTitle",
      title: "News section title",
      type: "string",
    }),
    defineField({
      name: "newsBody",
      title: "News section body",
      type: "text",
    }),
    defineField({
      name: "newsCtaLabel",
      title: "News CTA label",
      type: "string",
    }),

    defineField({
      name: "shopTitle",
      title: "Shop section title",
      type: "string",
    }),
    defineField({
      name: "shopBody",
      title: "Shop section body",
      type: "text",
    }),
    defineField({
      name: "shopCtaLabel",
      title: "Shop CTA label",
      type: "string",
    }),

    defineField({
      name: "closingCta",
      title: "Closing CTA",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "headline", title: "Headline", type: "string" }),
        defineField({
          name: "body",
          title: "Body text",
          type: "array",
          of: [{ type: "block" }],
        }),
        defineField({
          name: "buttons",
          title: "Buttons",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "label", title: "Label", type: "string" },
                { name: "href", title: "Link URL", type: "string" },
                {
                  name: "variant",
                  title: "Variant",
                  type: "string",
                  options: { list: ["primary", "secondary"] },
                },
              ],
            },
          ],
        }),
      ],
    }),
  ],
});
