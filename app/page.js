'use client';

import { useEffect, useRef, useState } from 'react';
import Desk from '../components/Desk';

const panels = {
  projects: { title: 'IT Projects', description: 'Applications, experiments and system design studies.', note: 'Your project cards, GitHub links and live demos will go here.' },
  design: { title: 'Design', description: 'Visual ideas, interfaces and creative explorations.', note: 'Your design gallery and case studies will go here.' },
  about: { title: 'Hello, I’m Sankari.', description: 'A little logic. A little imagination.', note: 'Add your biography and contact details here.' },
};

export default function Home() {
  const [active, setActive] = useState(null);
  const [paused, setPaused] = useState(false);
  const dialog = useRef(null);
  const trigger = useRef(null);
  function openPanel(key) { trigger.current = document.activeElement; setActive(key); }
  function closePanel() { setActive(null); }
  useEffect(() => {
    if (active) dialog.current?.showModal();
    else { dialog.current?.close(); trigger.current?.focus(); }
  }, [active]);
  const panel = active ? panels[active] : null;
  return (
    <main className={`portfolio ${paused ? 'paused' : ''}`}>
      <a className="skip" href="#navigation">Skip to navigation</a>
      <h1 className="sr-only">Sankari Pillai — IT and Design Portfolio</h1>
      <header className="topbar">
        <a className="brand" href="/" aria-label="Sankari Pillai home">sp<span>✳</span></a>
        <span className="desk-caption">a desk full of possibilities</span>
        <button className="motion-toggle" onClick={() => setPaused(!paused)} aria-pressed={paused}>{paused ? '▷ Motion off' : 'Ⅱ Motion on'}</button>
      </header>
      <div className="desk-wrap"><Desk onOpen={openPanel} /></div>
      <nav id="navigation" className="navigation" aria-label="Portfolio sections">
        <button className="nav-note projects-note" onClick={() => openPanel('projects')}><small>01 / BUILD</small>IT Projects <span>↗</span></button>
        <button className="nav-note design-note" onClick={() => openPanel('design')}><small>02 / CREATE</small>Design <span>↗</span></button>
        <button className="nav-note about-note" onClick={() => openPanel('about')}><small>03 / HELLO</small>About me <span>↗</span></button>
      </nav>
      <p className="interaction-hint">Hover, tap & explore the desk <span>✦</span></p>
      <dialog ref={dialog} className="content-dialog" onCancel={closePanel} onClick={(event) => { if (event.target === dialog.current) { const box = dialog.current.getBoundingClientRect(); if(event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) closePanel(); } }} aria-labelledby="panel-title">
        <button className="close" onClick={closePanel} aria-label="Close panel">×</button>
        <p className="panel-eyebrow">SANKARI’S WORKSPACE</p>
        <h2 id="panel-title">{panel?.title}</h2>
        <p>{panel?.description}</p>
        <p className="placeholder-note">{panel?.note}</p>
      </dialog>
    </main>
  );
}
