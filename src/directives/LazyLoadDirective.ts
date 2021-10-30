export default {
  inserted: (el: HTMLElement): void => {
    function loadImage() {
      const thumbElement = Array.from(el.children).find(
        (el) => el.nodeName === 'IMG'
      ) as HTMLImageElement;
      const pictureElement = Array.from(el.children).find(
        (el) => el.nodeName === 'PICTURE'
      ) as HTMLPictureElement;
      const sourceElement = Array.from(
        pictureElement.children
      )[0] as HTMLSourceElement;
      const sourceElement2 = Array.from(
        pictureElement.children
      )[1] as HTMLSourceElement;
      const imageElement = Array.from(pictureElement.children).find(
        (el) => el.nodeName === 'IMG'
      ) as HTMLImageElement;
      if (imageElement && thumbElement && sourceElement && sourceElement2) {
        thumbElement.addEventListener('error', () =>
          console.log(`Error: ${thumbElement.dataset.src} failed to load`)
        );
        sourceElement.addEventListener('error', () =>
          console.log(`Error: ${sourceElement.dataset.srcset} failed to load`)
        );
        sourceElement2.addEventListener('error', () =>
          console.log(`Error: ${sourceElement2.dataset.srcset} failed to load`)
        );
        imageElement.addEventListener('error', () =>
          console.log(`Error: ${imageElement.dataset.src} failed to load`)
        );
        thumbElement.src = thumbElement.dataset.src!;
        sourceElement.srcset = sourceElement.dataset.srcset!;
        sourceElement2.srcset = sourceElement2.dataset.srcset!;
        imageElement.src = imageElement.dataset.src!;
      }
    }

    function handleIntersect(
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ): void {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImage();
          observer.unobserve(el);
        }
      });
    }

    function createObserver() {
      const options = {
        root: null,
        threshold: 0,
      };
      const observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(el);
    }
    if (window['IntersectionObserver']) {
      createObserver();
    } else {
      loadImage();
    }
  },
};
