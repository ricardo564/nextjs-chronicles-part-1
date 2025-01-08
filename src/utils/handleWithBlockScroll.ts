
const blockDocumentScroll = () => {
  document.body.style.overflow = "hidden";
};

const unblockDocumentScroll = () => {
  document.body.style.overflow = "auto";
};

export const blockScroll = (hideScroll: boolean) => {
  if (hideScroll) {
    unblockDocumentScroll();
    return;
  }

  blockDocumentScroll();
};
