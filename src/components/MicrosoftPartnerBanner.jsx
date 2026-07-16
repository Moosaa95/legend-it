'use client';

import { useEffect } from 'react';

export default function MicrosoftPartnerBanner() {
  useEffect(() => {
    const scriptId = 'fb1437c3-c568-42b6-81da-1a0eea4f9bc3';
    const bannerHeight = 80;
    const bannerWidth = 720;
    const embedType = 'banner';

    const script = document.createElement('script');
    script.defer = true;
    script.src = `https://dmc.partner.microsoft.com/dccn/api/embedded-campaigns/js?id=${scriptId}&height=${bannerHeight}&width=${bannerWidth}&embedType=${embedType}`;
    document.body.appendChild(script);

    return () => {
      // Clean up script when page unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div id="dccn-fb1437c3-c568-42b6-81da-1a0eea4f9bc3"></div>
  );
}
