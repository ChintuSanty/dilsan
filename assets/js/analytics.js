(function () {
  const body = document.body;
  const pageName = body?.dataset?.pageName || document.title;
  const pageType = body?.dataset?.pageType || "content";
  const currency = body?.dataset?.currency || "USD";
  const orderValue = parseFloat(body?.dataset?.orderValue || "0") || null;

  window.dataLayer = window.dataLayer || [];

  const basePayload = {
    event: "page_view",
    page: {
      name: pageName,
      type: pageType,
      url: window.location.pathname,
      title: document.title,
    },
  };

  if (orderValue) {
    basePayload.ecommerce = {
      currency,
      value: orderValue,
    };
  }

  window.dataLayer.push(basePayload);

  window.trackAnalyticsEvent = function trackAnalyticsEvent(event, detail) {
    window.dataLayer.push({ event, detail });
  };
})();
