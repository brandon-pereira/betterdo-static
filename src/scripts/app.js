export default dependencies => {
    // Define Dependencies Locally
    const ScrollText = dependencies.get('scroll-text');
    const ServiceWorkerRegistrar = dependencies.get('sw-registrar');

    // Instantiate ScrollText
    Array.from(document.querySelectorAll('[data-scroll-text]')).map(
        el => new ScrollText(el)
    );

    // Instantiate Service Worker Callbacks
    ServiceWorkerRegistrar.onUpdateAvailable(() => {
        console.log('Update Available');
        const fab = document.querySelector('.fab');
        fab.classList.add('visible');
        fab.addEventListener('click', function() {
            ServiceWorkerRegistrar.applyUpdates();
        });
    });
};
