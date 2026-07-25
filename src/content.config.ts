import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "zod";

const contentSchema = z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
});

const posts = defineCollection({
    loader: glob({ base: "./src/content/posts", pattern: "**/*.md" }),
    schema: contentSchema,
});

const blogs = defineCollection({
    loader: glob({ base: "./src/content/blogs", pattern: "**/*.md" }),
    schema: contentSchema,
});

export const collections = {
    posts: posts,
    blogs: blogs,
};
