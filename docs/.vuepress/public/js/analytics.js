function addTrackingToNav() {
  const links = [
    {
      els: Array.from(
        document.querySelectorAll('.navbar-items a[aria-label="Changelog"]')
      ),
      fathomEventId: "1IM3F81U",
    },
    {
      els: Array.from(
        document.querySelectorAll('.navbar-items a[aria-label="License"]')
      ),
      fathomEventId: "FLLTLBBH",
    },
    {
      els: Array.from(
        document.querySelectorAll('.navbar-items a[aria-label="GitHub"]')
      ),
      fathomEventId: "UDQTYUYT",
    },
  ];

  for (const link of links) {
    link.els.forEach((el) =>
      el.setAttribute("data-fathom-event-id", link.fathomEventId)
    );
  }
}

function trackLinks() {
  const links = document.getElementsByTagName("a");

  for (const link of links) {
    const fathomEventId = link.getAttribute("data-fathom-event-id");

    if (!fathomEventId) {
      continue;
    }

    link.addEventListener("click", () => {
      window.fathom.trackGoal(fathomEventId, 0);
    });
  }
}

function trackSearch() {
  const containerEls = document.getElementsByClassName("DocSearch-Container");
  const hitEls = document.getElementsByClassName("DocSearch-Hit");
  const openAttribute = "data-docsearch-container-open";

  function watchContainerEls() {
    /**
     * if was open and is open, do nothing
     * if was open and is closed, remove attribute
     * if was closed and is open, add attribute
     */

    const wasOpen = document.documentElement.hasAttribute(openAttribute);
    const isOpen = containerEls.length > 0;

    if (wasOpen) {
      if (!isOpen) {
        // closed
        document.documentElement.removeAttribute(openAttribute);
        window.fathom.trackGoal("OBGWG9QM", 0);
      }

      return;
    }

    if (!isOpen) {
      return;
    }

    // opened
    document.documentElement.setAttribute(openAttribute, "");
    window.fathom.trackGoal("LGQFSSLL", 0);
  }

  function watchHitEls() {
    for (const hitEl of hitEls) {
      // const text = hitEl.querySelector('.DocSearch-Hit-title').innerText || ''

      hitEl.querySelector("a").addEventListener("click", () => {
        document.documentElement.removeAttribute(openAttribute);

        window.fathom.trackGoal("ULRIYLIO", 0);
      });
    }
  }

  const observer = new MutationObserver(() => {
    watchContainerEls();
    watchHitEls();
  });

  observer.observe(document, { childList: true, subtree: true });
}

// "if not dev mode"
if (window?.fathom?.trackGoal) {
  addTrackingToNav();
  trackLinks();
  trackSearch();
}
