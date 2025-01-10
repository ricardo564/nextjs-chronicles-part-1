type WindowWithDataLayer = Window & {
  dataLayer: Array<{
    event?: string;
    page?: string;
    [key: string]: unknown;
  }>;
}

declare const window: WindowWithDataLayer

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || ''

export const pageview = (url: string) => {
  if (typeof window.dataLayer !== 'undefined') {
    window.dataLayer.push({
      event: 'pageview',
      page: url,
    })
  }
}
