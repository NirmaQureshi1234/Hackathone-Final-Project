import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: "57dexdgi",
  dataset: "production",
  useCdn: false,
  apiVersion: '2021-08-31',
});
 
