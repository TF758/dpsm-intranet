import { createDirectus, rest } from "@directus/sdk";

const directus = createDirectus("https://directus.example.com").with(rest());

export default directus;
