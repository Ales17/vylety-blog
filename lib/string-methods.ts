export function slugify(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replaceAll(' ', '-')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

export const getIdFromSlug = (slug: string): string | null => {
  return slug.match(/^\d+/)?.[0] ?? null
}
