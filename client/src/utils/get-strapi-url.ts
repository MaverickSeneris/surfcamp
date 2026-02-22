export function getStrapiUrl(): string {
    return process.env.STRAPI_URL || "http://localhost:1338";
}