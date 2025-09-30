import { any } from "astro:schema";

// Tell TypeScript that Isotope is a global variable
const Isotope = any;

  document.addEventListener('DOMContentLoaded', () => {
    const certGallery = document.getElementById('certificate-gallery');
    if (!certGallery) return;

    const isoContainer = certGallery.querySelector('.isotope-container');
    const filters = certGallery.querySelector('.isotope-filters');
    const toggleButton = certGallery.querySelector('#show-more-items');

    if (!isoContainer) return;

    // Initialize Isotope
    const iso = new Isotope(isoContainer, {
      itemSelector: '.isotope-item',
      layoutMode: 'masonry'
    });

    // Handle filter clicks
    if (filters) {
      filters.addEventListener('click', (e) => {
        if (!(e.target instanceof HTMLElement) || !e.target.matches('li')) return;
        const target = e.target;
        
        const filterValue = target.getAttribute('data-filter');
        if (filterValue) {
          iso.arrange({ filter: filterValue });
        }

        const currentActive = filters.querySelector('.filter-active');
        if (currentActive) currentActive.classList.remove('filter-active');
        target.classList.add('filter-active');
      });
    }

    // "Show More" logic
    if (toggleButton instanceof HTMLElement) {
      toggleButton.addEventListener('click', () => {
        // Find all hidden items and reveal them
        const hiddenItems = certGallery.querySelectorAll('.hidden-item');
        hiddenItems.forEach(item => {
          item.classList.remove('hidden-item');
        });
        
        // --- THIS IS THE FIX ---
        // Find the currently active filter button
        const activeFilterButton = filters?.querySelector('.filter-active');
        const currentFilter = activeFilterButton?.getAttribute('data-filter') || '*';

        // Tell Isotope to re-layout the items using the CURRENT filter
        iso.arrange({ filter: currentFilter });
        // --- END OF FIX ---
        
        // Hide the "Show More" button
        toggleButton.style.display = 'none';
      });
    }
  });