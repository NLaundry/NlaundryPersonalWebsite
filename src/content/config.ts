import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        subtitle: z.string().optional(),
        source: z.string().optional(),
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
        img_source: z.string().optional(),
        github: z.string().url(),
        link: z.string().url().optional(),
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
