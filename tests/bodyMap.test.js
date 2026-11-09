import assert from 'node:assert/strict';
import test from 'node:test';

import { BodyMap } from '../js/components/bodyMap.js';

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
  assert.doesNotMatch(markup, /class="back-anatomy"/);
  assert.match(markup, /Interactive Human Body Anatomy - front view/);
  assertSvgGroupsAreBalanced(markup);
});

test('back view renders posterior spine regions without anterior torso hotspots', () => {
  const markup = renderBodyMap('back');

  assert.match(markup, /aria-pressed="false"[^>]*>[\s\S]*?Front View/);
  assert.match(markup, /aria-pressed="true"[^>]*>[\s\S]*?Back View/);
  assert.match(markup, /class="back-anatomy"/);
  assert.match(markup, /data-region="spine"/);
  assert.match(markup, /Upper back/);
  assert.match(markup, /Lower back/);
  assert.doesNotMatch(markup, /data-region="chest"/);
  assert.doesNotMatch(markup, /data-region="abdomen"/);
  assert.doesNotMatch(markup, /data-region="pelvis"/);
  assert.match(markup, /Interactive Human Body Anatomy - back view/);
  assertSvgGroupsAreBalanced(markup);
});
