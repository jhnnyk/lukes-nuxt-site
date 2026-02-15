import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    // warren tech development log pages
    wtdevlog: defineCollection({
      type: 'page',
      source: 'wtdevlog/*.md',
      // Define custom schema for docs collection
      schema: z.object({
        tags: z.array(z.string()),
        image: z.string(),
        date: z.date()
      })
    }),
    // video game pages
    games: defineCollection({
      type: 'page',
      source: 'games/*.md',
      // Define custom schema for docs collection
      schema: z.object({
        tags: z.array(z.string()),
        image: z.string(),
        date: z.date()
      })
    }),
    // pages for codes and languages
    langscodes: defineCollection({
      type: 'page',
      source: 'langscodes/*.md',
      // Define custom schema for docs collection
      schema: z.object({
        tags: z.array(z.string()),
        image: z.string(),
        date: z.date()
      })
    })
  }
})