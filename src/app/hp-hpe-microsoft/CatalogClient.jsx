'use client';

import { useEffect } from 'react';

export default function CatalogClient() {
  useEffect(() => {
    const grid = document.getElementById('prod-grid');
    if (!grid) return;
    const cards = Array.from(grid.querySelectorAll('.pcard[data-cat]'));
    const cEl = document.getElementById('rcount');
    const eEl = document.getElementById('empty-state');
    let aInd = 'all', aTier = 'all', aCat = 'all';

    function run() {
      let n = 0;
      cards.forEach(c => {
        const inds = (c.dataset.industries || '').split(',');
        const show = (aCat === 'all' || c.dataset.cat === aCat) &&
                     (aTier === 'all' || c.dataset.tier === aTier) &&
                     (aInd === 'all' || inds.some(i => i.trim() === aInd));
        c.style.display = show ? '' : 'none';
        if (show) n++;
      });
      if (cEl) cEl.textContent = n;
      if (eEl) eEl.style.display = n === 0 ? 'block' : 'none';
    }

    const filterBtns = document.querySelectorAll('.fbtn');
    const filterHandler = (e) => {
      const b = e.currentTarget;
      const type = b.dataset.filter, val = b.dataset.value;
      if (type === 'industry') {
        aInd = val;
        document.querySelectorAll('.fbtn[data-filter="industry"]').forEach(x => x.classList.remove('on'));
      } else {
        if (aTier === val) {
          aTier = 'all';
          document.querySelectorAll('.fbtn[data-filter="tier"]').forEach(x => x.classList.remove('on'));
          run();
          return;
        }
        aTier = val;
        document.querySelectorAll('.fbtn[data-filter="tier"]').forEach(x => x.classList.remove('on'));
      }
      b.classList.add('on');
      run();
    };

    filterBtns.forEach(b => {
      b.addEventListener('click', filterHandler);
    });

    const tabs = document.querySelectorAll('.ctab');
    const tabHandler = (e) => {
      const t = e.currentTarget;
      aCat = t.dataset.cat;
      document.querySelectorAll('.ctab').forEach(x => {
        x.classList.remove('on');
        x.setAttribute('aria-selected', 'false');
      });
      t.classList.add('on');
      t.setAttribute('aria-selected', 'true');
      run();
    };

    tabs.forEach(t => {
      t.addEventListener('click', tabHandler);
    });

    run();

    return () => {
      filterBtns.forEach(b => b.removeEventListener('click', filterHandler));
      tabs.forEach(t => t.removeEventListener('click', tabHandler));
    };
  }, []);

  return null;
}
