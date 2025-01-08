export function isClickOutsideElement(elementTarget: HTMLElement | null, event: MouseEvent): boolean {
  if (!elementTarget) {
    return true;
  }

  const elementRect = elementTarget.getBoundingClientRect();
  const { clientX, clientY } = event;

  return (
    clientX < elementRect.left ||
    clientX > elementRect.right ||
    clientY < elementRect.top ||
    clientY > elementRect.bottom
  );
}
