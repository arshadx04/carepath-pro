/** CarePath Pro interactive anterior and lateral skull artwork. */
export function renderSkullSVG(selectedRegion = 'head', view = 'front') {
  const active = selectedRegion === 'head' ? ' selected' : '';
  const bone = (name, path, extra = '') => `<path class="skull-bone ${extra}${active}" data-region="head" tabindex="0" role="button" aria-label="Select head: ${name}" d="${path}"/>`;
  if (view === 'side') return `
    <g class="skull-illustration skull-side-view" aria-label="Anime-inspired lateral skull anatomy">
      ${bone('frontal bone','M148 23 C132 24 120 34 119 48 Q116 60 123 70 L136 66 Q145 56 151 48Z','skull-frontal')}
      ${bone('parietal bones','M148 23 Q166 18 177 32 Q185 43 178 58 L161 67 L150 49Z','skull-parietal')}
      ${bone('temporal bones','M151 51 Q166 54 174 65 Q176 76 163 84 L145 76 L139 63Z','skull-temporal')}
      ${bone('zygomatic bones','M151 65 Q168 61 181 69 L188 77 L178 83 L159 78Z','skull-zygomatic')}
      ${bone('maxilla','M161 76 Q175 74 190 80 L185 92 Q172 96 159 88Z','skull-maxilla')}
      ${bone('nasal bones','M176 60 Q185 61 194 70 L190 77 L180 72Z','skull-nasal')}
      ${bone('mandible','M145 75 Q151 88 161 94 Q176 101 188 91 L192 86 L197 91 Q188 108 169 108 Q150 105 139 91 L136 78Z','skull-mandible')}
      <path class="skull-cavity" d="M143 57 Q153 48 165 55 Q172 62 164 70 Q153 75 145 67Z"/>
      <path class="skull-cavity nasal" d="M184 72 Q191 70 195 76 L189 81Z"/>
      <path class="skull-line" d="M128 43 Q138 29 151 27 M155 26 Q174 26 179 42 M137 69 Q147 76 158 76 M162 84 Q176 88 187 82"/>
      <path class="skull-teeth" d="M165 91 L166 96 M170 92 L171 98 M175 92 L176 97 M180 91 L181 95"/>
      <path class="skull-highlight" d="M128 44 Q137 31 148 30 M158 29 Q170 29 176 39 M145 82 Q151 96 164 101"/>
      <text class="skull-caption" x="158" y="119" text-anchor="middle">SKULL · LATERAL</text>
    </g>`;
  return `
    <g class="skull-illustration" aria-label="Anime-inspired anterior skull anatomy">
      ${bone('frontal bone','M150 20 C133 20 120 32 119 50 Q117 62 124 70 L132 61 Q137 51 150 52 Q163 51 168 61 L176 70 Q183 62 181 50 C180 32 167 20 150 20Z','skull-frontal')}
      ${bone('parietal bones','M121 39 Q126 23 145 22 L145 48 Q134 48 128 59 L122 62 Q118 51 121 39Z M179 39 Q174 23 155 22 L155 48 Q166 48 172 59 L178 62 Q182 51 179 39Z','skull-parietal')}
      ${bone('temporal bones','M120 51 Q116 64 126 77 L134 72 L132 58 L126 49Z M180 51 Q184 64 174 77 L166 72 L168 58 L174 49Z','skull-temporal')}
      ${bone('zygomatic bones','M124 66 Q132 61 143 68 L145 77 Q136 82 128 76Z M176 66 Q168 61 157 68 L155 77 Q164 82 172 76Z','skull-zygomatic')}
      ${bone('maxilla','M137 72 Q143 68 150 73 Q157 68 163 72 L161 88 Q150 94 139 88Z','skull-maxilla')}
      ${bone('nasal bones','M147 54 Q150 51 153 54 L155 70 L150 75 L145 70Z','skull-nasal')}
      ${bone('mandible','M130 77 Q132 88 136 96 Q142 105 150 105 Q158 105 164 96 Q168 88 170 77 L164 82 Q163 91 158 96 Q150 101 142 96 Q137 91 136 82Z','skull-mandible')}
      <path class="skull-cavity" d="M127 58 Q136 49 144 57 Q149 65 142 72 Q134 77 128 68Z M173 58 Q164 49 156 57 Q151 65 158 72 Q166 77 172 68Z"/>
      <path class="skull-cavity nasal" d="M150 70 Q144 72 143 81 Q146 86 150 83 Q154 86 157 81 Q156 72 150 70Z"/>
      <path class="skull-line" d="M150 24 Q146 35 150 47 Q154 35 150 24 M124 43 Q128 47 131 50 M176 43 Q172 47 169 50 M123 64 Q132 77 143 77 M177 64 Q168 77 157 77"/>
      <path class="skull-teeth" d="M140 87 L140 92 M144 88 L144 94 M148 89 L148 95 M152 89 L152 95 M156 88 L156 94 M160 87 L160 92"/>
      <path class="skull-highlight" d="M130 34 Q139 24 148 25 M152 25 Q164 24 170 34 M132 79 Q136 84 138 91 M162 91 Q164 84 168 79"/>
      <text class="skull-caption" x="150" y="115" text-anchor="middle">SKULL · ANTERIOR</text>
    </g>`;
}
export default renderSkullSVG;
