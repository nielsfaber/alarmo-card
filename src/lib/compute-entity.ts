export function computeEntity(entityId: string): string {
  return entityId.substring(entityId.indexOf(".") + 1);
}