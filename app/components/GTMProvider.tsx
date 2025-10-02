'use client';

import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

// Google Tag Manager ID - Eric Moreira
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-WBV8BLX7';

export default function GTMProvider() {
  useEffect(() => {
    // Inicializa GTM apenas no cliente
    if (typeof window !== 'undefined') {
      try {
        TagManager.initialize({ 
          gtmId: GTM_ID 
        });
        
        if (process.env.NODE_ENV === 'development') {
          console.log('[GTM] Inicializado com sucesso:', GTM_ID);
        }
      } catch (e) {
        if (process.env.NODE_ENV === 'development') {
          console.error('[GTM] Falha ao inicializar:', e);
        }
      }
    }
  }, []);

  return null;
}
