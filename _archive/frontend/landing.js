const scenes = Array.from(document.querySelectorAll('[data-scene]'));
const motionEnabled = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;

if (scenes.length && motionEnabled) {
    let pointerX = 0;
    let pointerY = 0;
    let framePending = false;

    const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

    const updateScene = (scene, index) => {
        const rect = scene.getBoundingClientRect();
        const viewportCenter = window.innerHeight * 0.52;
        const progress = clamp((viewportCenter - rect.top) / rect.height, 0, 1);
        const parallax = (progress - 0.5) * 28;
        const xShift = parallax + pointerX * 0.12 + (index % 2 === 0 ? -4 : 4);
        const yShift = parallax * 0.2 + pointerY * 0.08;

        scene.style.setProperty('--scene-opacity', '1');
        scene.style.setProperty('--scene-y', `${yShift.toFixed(2)}px`);
        scene.style.setProperty('--parallax-x', `${xShift.toFixed(2)}px`);
        scene.style.setProperty('--parallax-y', `${(yShift * 0.55).toFixed(2)}px`);

        const art = scene.querySelector('.scene__art');
        if (art) {
            const focusX = clamp(50 + xShift * 0.7, 18, 82);
            const focusY = clamp(44 + yShift * 0.6, 18, 82);
            art.style.setProperty('--focus-x', `${focusX.toFixed(2)}%`);
            art.style.setProperty('--focus-y', `${focusY.toFixed(2)}%`);
        }
    };

    const updateAll = () => {
        framePending = false;
        scenes.forEach((scene, index) => updateScene(scene, index));
    };

    const requestUpdate = () => {
        if (!framePending) {
            framePending = true;
            window.requestAnimationFrame(updateAll);
        }
    };

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate, { passive: true });
    window.addEventListener('pointermove', (event) => {
        pointerX = (event.clientX / window.innerWidth - 0.5) * 18;
        pointerY = (event.clientY / window.innerHeight - 0.5) * 18;
        requestUpdate();
    }, { passive: true });

    updateAll();
}