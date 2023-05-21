import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        tags: z.array(z.string()),
        imagesrc: z.string(),
        imagealt: z.string(),
        publishDate: z.date(),
        authorContact: z.string().email(),
        draft : z.boolean(),
    })
});


const newsletterCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()),
        publishDate: z.date(),
        authorContact: z.string().email(),
        draft : z.boolean(),
    })
});


const projectCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()),
        github: z.string().url(),
        authorContact: z.string().email(),
    })
});

const publicationCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        type: z.string(),
        venue: z.string(),
        tags: z.array(z.string()),
    })
});

export const collections = {
    'blog': blogCollection,
    'newsletter': newsletterCollection,
    'projects': projectCollection,
    'publications': publicationCollection,
}
