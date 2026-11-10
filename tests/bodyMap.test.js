import assert from 'node:assert/strict';
import test from 'node:test';

import { BodyMap } from '../js/components/bodyMap.js';
import { renderSkullSVG } from '../js/components/skullArtwork.js';

function renderBodyMap(view) {
  const container = {
    innerHTML: '',
    querySelectorAll: () => [],
    querySelector: () => null
  };

  Object.defineProperty(globalThis, 'document', {
    configurable: true,
    value: { getElementById: () => container }
  });

  try {
    const bodyMap = new BodyMap('body-map');
    bodyMap.view = view;
    bodyMap.render();
    return container.innerHTML;
  } finally {
    delete globalThis.document;
  }
}

function assertSvgGroupsAreBalanced(markup) {
  const openingGroups = (markup.match(/<g(?:\s|>)/g) || []).length;
  const closingGroups = (markup.match(/<\/g>/g) || []).length;
  assert.equal(openingGroups, closingGroups, 'SVG group elements should be balanced');
}

test('front view renders anterior regions and exposes the selected toggle state', () => {
  const markup = renderBodyMap('front');

  assert.match(markup, /aria-pressed="true"[^>]*>[\s\S]*?Front View/);
  assert.match(markup, /aria-pressed="false"[^>]*>[\s\S]*?Back View/);
  assert.match(markup, /data-region="chest"/);
  assert.match(markup, /data-region="abdomen"/);
  assert.match(markup, /data-region="pelvis"/);
  assert.match(markup, /class="skull-illustration"/, 'front view should render the skull illustration');
  assert.match(markup, /class="skull-bone skull-frontal"/, 'frontal bone hotspot should render');
  assert.match(markup, /class="skull-bone skull-parietal"/, 'parietal bone hotspot should render');
  assert.match(markup, /class="skull-bone skull-zygomatic"/, 'cheekbone hotspot should render');
  assert.match(markup, /class="skull-cavity"/, 'eye sockets should render');
  assert.match(markup, /class="skull-teeth"/, 'teeth should render');
  assert.match(markup, /aria-label="Select head: mandible"/, 'mandible should be accessible');
  assert.equal((markup.match(/class="skull-bone/g) || []).length, 7);
  assert.match(markup, /SKULL · ANTERIOR/);
  assert.doesNotMatch(markup, /class="back-anatomy"/);
  assert.match(markup, /Interactive Human Body Anatomy - front view/);
  assertSvgGroupsAreBalanced(markup);
});

test('back view renders posterior spine regions without anterior torso hotspots', () => {
  const markup = renderBodyMap('back');
  const svgStart = markup.indexOf('<svg');
  const svgEnd = markup.indexOf('</svg>', svgStart);
  const svg = svgStart >= 0 && svgEnd >= 0 ? markup.slice(svgStart, svgEnd + 6) : '';

  assert.match(markup, /aria-pressed="false"[^>]*>[\s\S]*?Front View/);
  assert.match(markup, /aria-pressed="true"[^>]*>[\s\S]*?Back View/);
  assert.match(markup, /class="anatomy-figure back-anatomy"/);
  assert.match(svg, /class="posterior-body"/, "back view should include a full posterior torso silhouette");  assert.match(markup, /class="anatomical-zone shoulder-zone/);
  assert.equal((markup.match(/class="anatomical-zone shoulder-zone/g) || []).length, 2, "both shoulder caps should render");
  assert.equal((markup.match(/class="anatomical-zone scapula-zone/g) || []).length, 2, "both shoulder blades should render");
  assert.match(markup, /data-region="shoulder"/, "shoulder anatomy should remain selectable");
  assert.match(markup, /class="anatomical-zone back-zone/);
  assert.match(markup, /class="vertebral-column"/);
  assert.equal((markup.match(/class="anatomical-zone vertebra/g) || []).length, 18, "the spinal column should show individual vertebrae");
  assert.match(markup, /class="rib-cage"/);
  assert.match(markup, /class="[^"]*anatomy-illustration[^"]*"/);
  assert.match(markup, /class="[^"]*hand-zone/);
  assert.match(markup, /class="[^"]*foot-zone/);
  assert.match(markup, /class="[^"]*leg-zone/);
  assert.match(markup, /data-region="shoulder"/);
  assert.match(markup, /data-region="back"/);
  assert.match(markup, /data-region="spine"/);
  assert.match(markup, />Back</);
  assert.match(markup, />Spine</);
  assert.doesNotMatch(svg, /data-region="chest"/);
  assert.doesNotMatch(svg, /data-region="abdomen"/);
  assert.doesNotMatch(svg, /data-region="pelvis"/);
  assert.match(markup, /Interactive Human Body Anatomy - back view/);
  assertSvgGroupsAreBalanced(markup);
});

test('skull bone hotspots map to the shared head assessment region', () => { const svg=renderSkullSVG('head'); assert.equal((svg.match(/data-region="head"/g)||[]).length,7); assert.match(svg,/aria-label="Select head: frontal bone"/); assert.match(svg,/aria-label="Select head: mandible"/); assert.match(svg,/class="skull-bone skull-mandible selected"/); assert.doesNotMatch(renderSkullSVG('chest'),/skull-bone skull-frontal selected/); });

test('side skull view renders accessible lateral bone hotspots', () => {
  const svg = renderSkullSVG('head', 'side');
  assert.match(svg, /skull-side-view/);
  assert.match(svg, /aria-label="Anime-inspired lateral skull anatomy"/);
  assert.match(svg, /SKULL · LATERAL/);
  assert.equal((svg.match(/data-region="head"/g) || []).length, 7);
  assert.match(svg, /aria-label="Select head: temporal bones"/);
  assert.match(svg, /aria-label="Select head: mandible"/);
});
