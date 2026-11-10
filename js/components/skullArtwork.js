/** CarePath Pro interactive skull artwork.
 * Detailed educational SVG landmarks; not a diagnostic or surgical reference.
 */
export function renderSkullSVG(selectedRegion = 'head', view = 'front') {
  const active = selectedRegion === 'head' ? ' selected' : '';
  const bone = (name, path, extra = '') => `<path class="skull-bone ${extra}${active}" data-region="head" tabindex="0" role="button" aria-label="Select head: ${name}" d="${path}"/>`;
  const details = view === 'side' ? `
    <g class="skull-detail" aria-hidden="true">
      <!-- Cranial sutures and temporal landmarks -->
      <path d="M119 46 Q132 40 145 47 M145 47 Q157 42 174 49 M145 47 Q143 58 148 67
        M127 63 Q137 69 145 72 M159 56 Q168 58 174 66"/>
      <path d="M155 71 Q163 73 168 81 M148 82 Q159 89 171 88"/>
      <!-- External acoustic meatus, mastoid and styloid processes -->
      <ellipse cx="151" cy="69" rx="3.8" ry="4.8"/>
      <path d="M148 80 Q143 85 145 91 L141 99 M151 82 Q154 91 151 97"/>
      <!-- Orbital rim, nasal aperture and maxillary sinus -->
      <path class="orbital-cavity" d="M164 53 Q173 50 178 58 Q180 65 173 69 L165 65Z"/>
      <path class="nasal-cavity" d="M181 62 L194 70 L188 78 L179 72Z"/>
      <path d="M177 78 Q184 77 188 82 M173 84 Q181 88 187 85"/>
      <!-- Dental roots and individual teeth -->
      <path class="teeth" d="M169 91 L169 98 M173 91 L174 99 M178 90 L179 97 M183 88 L184 94
        M169 98 L171 101 M174 99 L176 101 M179 97 L181 99"/>
      <!-- Mandibular condyle and coronoid process -->
      <path d="M143 79 Q138 76 136 80 M139 89 Q144 96 151 100 Q169 106 187 92"/>
      <!-- Fine cortical highlights -->
      <path class="highlight" d="M121 47 Q128 30 145 27 Q163 23 176 39 M151 29 Q166 29 172 38
        M158 75 Q167 78 174 84 M147 91 Q160 103 177 98"/>
      <circle cx="151" cy="69" r="1.3"/>
    </g>` : `
    <g class="skull-detail" aria-hidden="true">
      <!-- Coronal, sagittal and lambdoid suture traces -->
      <path d="M150 22 Q146 31 150 39 Q154 31 150 22 M121 39 Q130 34 139 39
        M161 39 Q170 34 179 39 M150 23 L150 47"/>
      <path d="M126 47 Q135 43 143 49 M174 47 Q165 43 157 49
        M128 63 Q137 69 145 68 M172 63 Q163 69 155 68"/>
      <!-- Supraorbital margins and orbital rims -->
      <path class="orbital-cavity" d="M124 54 Q133 46 143 54 Q148 62 141 70 Q132 74 126 66Z
        M176 54 Q167 46 157 54 Q152 62 159 70 Q168 74 174 66Z"/>
      <path d="M125 54 Q135 47 144 54 M175 54 Q165 47 156 54"/>
      <!-- Nasal septum, conchae and piriform aperture -->
      <path class="nasal-cavity" d="M150 64 Q143 68 143 79 Q146 87 150 83 Q154 87 157 79 Q157 68 150 64Z"/>
      <path d="M150 67 L150 82 M145 77 Q150 74 155 77"/>
      <!-- Infraorbital foramina and zygomatic sutures -->
      <circle cx="137" cy="79" r="1.5"/><circle cx="163" cy="79" r="1.5"/>
      <path d="M126 70 Q135 81 145 81 M174 70 Q165 81 155 81"/>
      <!-- Maxillary alveolar ridge and individual teeth -->
      <path class="teeth" d="M138 87 L138 94 M142 88 L142 96 M146 89 L146 97
        M150 89 L150 97 M154 89 L154 97 M158 88 L158 96 M162 87 L162 94"/>
      <path d="M137 87 Q150 92 163 87"/>
      <!-- Mandibular symphysis and mental foramina -->
      <path d="M150 94 L150 104 M141 99 Q150 107 159 99"/>
      <circle cx="140" cy="98" r="1.2"/><circle cx="160" cy="98" r="1.2"/>
      <path class="highlight" d="M130 31 Q139 23 148 24 M152 24 Q164 23 170 31
        M128 74 Q133 83 136 90 M172 74 Q167 83 164 90"/>
    </g>`;

  if (view === 'side') return `
    <g class="skull-illustration skull-side-view" aria-label="Detailed lateral skull anatomy">
      ${bone('frontal bone','M148 23 C132 23 120 34 119 48 Q116 60 123 70 L136 68 Q144 58 151 49Z','skull-frontal')}
      ${bone('parietal bones','M148 23 Q166 18 177 32 Q185 43 178 58 L161 68 L150 49Z','skull-parietal')}
      ${bone('temporal bones','M151 50 Q166 52 176 65 Q178 78 163 87 L145 80 L139 63Z','skull-temporal')}
      ${bone('zygomatic bones','M157 64 Q171 59 182 69 L190 78 L180 84 L159 79Z','skull-zygomatic')}
      ${bone('maxilla','M164 76 Q178 74 191 81 L187 94 Q174 98 159 88Z','skull-maxilla')}
      ${bone('nasal bones','M178 59 Q188 61 196 70 L191 78 L181 72Z','skull-nasal')}
      ${bone('mandible','M145 76 Q151 89 162 96 Q177 102 189 91 L194 86 L198 91 Q189 109 169 109 Q149 106 138 92 L136 79Z','skull-mandible')}
      <path class="skull-cavity" d="M164 53 Q173 50 178 58 Q180 65 173 69 L165 65Z"/>
      <path class="skull-cavity nasal" d="M184 70 Q191 70 196 76 L190 81Z"/>
      ${details}
      <text class="skull-caption" x="158" y="119" text-anchor="middle">SKULL · LATERAL</text>
    </g>`;
  return `
    <g class="skull-illustration" aria-label="Detailed anterior skull anatomy">
      ${bone('frontal bone','M150 20 C133 20 120 32 119 50 Q117 62 124 70 L132 62 Q137 51 150 52 Q163 51 168 62 L176 70 Q183 62 181 50 C180 32 167 20 150 20Z','skull-frontal')}
      ${bone('parietal bones','M121 39 Q126 23 145 22 L145 48 Q134 48 128 59 L122 62 Q118 51 121 39Z M179 39 Q174 23 155 22 L155 48 Q166 48 172 59 L178 62 Q182 51 179 39Z','skull-parietal')}
      ${bone('temporal bones','M120 51 Q116 64 126 79 L136 75 L132 58 L126 49Z M180 51 Q184 64 174 79 L164 75 L168 58 L174 49Z','skull-temporal')}
      ${bone('zygomatic bones','M124 66 Q132 61 143 68 L146 78 Q136 83 128 76Z M176 66 Q168 61 157 68 L154 78 Q164 83 172 76Z','skull-zygomatic')}
      ${bone('maxilla','M137 72 Q143 68 150 73 Q157 68 163 72 L164 89 Q150 96 136 89Z','skull-maxilla')}
      ${bone('nasal bones','M147 53 Q150 50 153 53 L156 70 L150 76 L144 70Z','skull-nasal')}
      ${bone('mandible','M130 78 Q132 89 136 98 Q142 107 150 107 Q158 107 164 98 Q168 89 170 78 L164 83 Q163 93 158 98 Q150 103 142 98 Q137 93 136 83Z','skull-mandible')}
      <path class="skull-cavity" d="M127 58 Q136 49 144 57 Q149 65 142 72 Q134 77 128 68Z M173 58 Q164 49 156 57 Q151 65 158 72 Q166 77 172 68Z"/>
      <path class="skull-cavity nasal" d="M150 70 Q144 72 143 81 Q146 86 150 83 Q154 86 157 81 Q156 72 150 70Z"/>
      ${details}
      <text class="skull-caption" x="150" y="119" text-anchor="middle">SKULL · ANTERIOR</text>
    </g>`;
}
export default renderSkullSVG;
