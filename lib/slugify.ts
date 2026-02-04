export function slugify(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replaceAll(' ', '-')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}
