
const blockDocumentScroll = () => {
  document.body.style.overflow = "hidden";
};

const unblockDocumentScroll = () => {
  document.body.style.overflow = "auto";
};

export const handleWithBlockScroll = (hideScroll: boolean) => {
  if (hideScroll) {
    unblockDocumentScroll();
    return;
  }

  blockDocumentScroll();
};
