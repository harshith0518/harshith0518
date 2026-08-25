import type { RefObject } from 'react'

type ScrollSpideyProps = {
  figureRef: RefObject<HTMLDivElement | null>
}

const MaskedHead = ({ transform }: { transform: string }) => (
  <g transform={transform}>
    <ellipse className="spidey-mask-outline" cx="0" cy="0" rx="32" ry="40" />
    <ellipse className="spidey-mask" cx="0" cy="0" rx="27" ry="35" />
    <g className="spidey-mask-web">
      <path d="M0-34V34M-26-11Q0-1 26-11M-27 6Q0 17 27 6M-22 21Q0 29 22 21" />
      <path d="M0-3-22-25M0-3 22-25M0-3-27 12M0-3 27 12M0-3-16 29M0-3 16 29" />
    </g>
    <path className="spidey-eye-rim" d="M-22-17Q-8-14-5 13Q-18 7-23-3Z" />
    <path className="spidey-eye" d="M-18-12Q-10-9-8 8Q-16 3-19-4Z" />
    <path className="spidey-eye-rim" d="M22-17Q8-14 5 13Q18 7 23-3Z" />
    <path className="spidey-eye" d="M18-12Q10-9 8 8Q16 3 19-4Z" />
  </g>
)

const ChestSpider = ({ transform }: { transform?: string }) => (
  <g className="spidey-chest-mark" transform={transform}>
    <ellipse cx="0" cy="0" rx="4.5" ry="9" />
    <path d="M-3-4-13-15M-4 0-16-4M-3 5-13 17M3-4 13-15M4 0 16-4M3 5 13 17" />
  </g>
)

const ScrollSpidey = ({ figureRef }: ScrollSpideyProps) => (
  <div ref={figureRef} className="scroll-spidey" data-pose="swing" aria-hidden="true">
    <svg viewBox="0 0 300 420" role="presentation" focusable="false">
      <g className="spidey-pose spidey-pose-swing">
        <path className="spidey-web-cord" d="M-42-176C29-90 82-18 120 69" />
        <path className="spidey-web-glint" d="M-26-154C38-78 84-12 118 67" />
        <path className="spidey-motion-line" d="M244 103q36 12 56 38M251 126q31 10 45 30M50 286q-30 18-42 45" />

        <path className="spidey-limb-outline" d="M128 158C113 137 106 105 120 70" />
        <path className="spidey-limb-red" d="M128 158C113 137 106 105 120 70" />
        <circle className="spidey-glove-outline" cx="120" cy="67" r="14" />
        <circle className="spidey-glove" cx="120" cy="67" r="10" />

        <path className="spidey-limb-outline" d="M170 162C202 155 222 183 260 169" />
        <path className="spidey-limb-red" d="M170 162C202 155 222 183 260 169" />
        <circle className="spidey-glove-outline" cx="263" cy="168" r="14" />
        <circle className="spidey-glove" cx="263" cy="168" r="10" />

        <path className="spidey-limb-outline" d="M139 238C116 266 91 288 82 330C78 350 70 365 58 377" />
        <path className="spidey-limb-blue" d="M139 238C116 266 91 288 82 330C78 350 70 365 58 377" />
        <path className="spidey-boot-outline" d="M83 326C79 348 70 365 57 378" />
        <path className="spidey-boot" d="M83 326C79 348 70 365 57 378" />

        <path className="spidey-limb-outline" d="M161 239C183 264 211 279 229 307C240 324 251 338 268 345" />
        <path className="spidey-limb-blue" d="M161 239C183 264 211 279 229 307C240 324 251 338 268 345" />
        <path className="spidey-boot-outline" d="M226 303C242 327 252 338 269 345" />
        <path className="spidey-boot" d="M226 303C242 327 252 338 269 345" />

        <path className="spidey-torso-outline" d="M118 145Q149 126 181 151L171 233Q150 256 126 235Z" />
        <path className="spidey-torso-red" d="M123 149Q149 134 175 154L166 227Q150 246 132 230Z" />
        <path className="spidey-torso-blue" d="M123 187Q135 205 132 230Q150 246 166 227Q163 204 175 185L171 229Q150 251 127 232Z" />
        <g className="spidey-suit-web">
          <path d="M149 143V205M126 158Q149 170 174 158M123 177Q149 190 175 177" />
          <path d="M149 159 127 146M149 159 174 148M149 176 124 187M149 176 175 187" />
        </g>
        <ChestSpider transform="translate(149 187)" />
        <MaskedHead transform="translate(145 112) rotate(-9)" />
        <path className="spidey-highlight" d="M133 89Q143 79 154 81M128 151Q140 143 150 142" />
      </g>

      <g className="spidey-pose spidey-pose-crawl">
        <path className="spidey-contact-web" d="M54 116l-30-25m30 25-39 1m39-1-25 27M246 153l30-28m-30 28 40 2m-40-2 27 27M90 336l-25 30m25-30-3 43m3-43 28 29M230 329l28 31m-28-31 2 44m-2-44-29 31" />

        <path className="spidey-limb-outline" d="M128 179C101 161 79 131 55 116" />
        <path className="spidey-limb-red" d="M128 179C101 161 79 131 55 116" />
        <circle className="spidey-glove-outline" cx="53" cy="114" r="14" />
        <circle className="spidey-glove" cx="53" cy="114" r="10" />

        <path className="spidey-limb-outline" d="M175 180C200 170 221 165 247 153" />
        <path className="spidey-limb-red" d="M175 180C200 170 221 165 247 153" />
        <circle className="spidey-glove-outline" cx="248" cy="152" r="14" />
        <circle className="spidey-glove" cx="248" cy="152" r="10" />

        <path className="spidey-limb-outline" d="M135 249C115 266 102 298 90 337" />
        <path className="spidey-limb-blue" d="M135 249C115 266 102 298 90 337" />
        <path className="spidey-boot-outline" d="M99 305 90 337" />
        <path className="spidey-boot" d="M99 305 90 337" />

        <path className="spidey-limb-outline" d="M164 250C190 269 213 294 230 330" />
        <path className="spidey-limb-blue" d="M164 250C190 269 213 294 230 330" />
        <path className="spidey-boot-outline" d="M215 298 230 330" />
        <path className="spidey-boot" d="M215 298 230 330" />

        <path className="spidey-torso-outline" d="M119 169Q150 151 181 174L173 245Q151 265 128 248Z" />
        <path className="spidey-torso-red" d="M124 173Q150 159 176 178L168 239Q151 254 133 243Z" />
        <path className="spidey-torso-blue" d="M124 204Q137 219 133 243Q151 255 168 239Q166 220 176 204L172 244Q151 262 128 247Z" />
        <g className="spidey-suit-web">
          <path d="M150 166V222M126 182Q150 193 175 182M124 199Q150 211 176 199" />
          <path d="M150 183 126 171M150 183 175 173M150 200 125 212M150 200 175 212" />
        </g>
        <ChestSpider transform="translate(150 214)" />
        <MaskedHead transform="translate(151 129) rotate(7)" />
        <path className="spidey-highlight" d="M139 103Q152 95 164 103M130 176Q143 167 154 166" />
      </g>

      <g className="spidey-pose spidey-pose-strike">
        <path className="spidey-web-shot" d="M55 157C4 141-42 113-103 79M-4 139l-35-45M-22 129l-56-5M-42 113l-22-37M-51 109l-45 4" />
        <path className="spidey-motion-line" d="M241 232q36-18 56-43M251 252q31-12 48-32M84 326Q42 342 20 374" />

        <path className="spidey-limb-outline" d="M125 171C99 161 79 153 54 157" />
        <path className="spidey-limb-red" d="M125 171C99 161 79 153 54 157" />
        <circle className="spidey-glove-outline" cx="52" cy="157" r="14" />
        <circle className="spidey-glove" cx="52" cy="157" r="10" />
        <path className="spidey-web-hand" d="M45 153l-12-8m15 16-13 3m20-2 4 12" />

        <path className="spidey-limb-outline" d="M174 167C198 157 210 137 199 110" />
        <path className="spidey-limb-red" d="M174 167C198 157 210 137 199 110" />
        <circle className="spidey-glove-outline" cx="198" cy="107" r="15" />
        <circle className="spidey-glove" cx="198" cy="107" r="11" />

        <path className="spidey-limb-outline" d="M139 244C115 267 92 290 77 326C70 342 58 354 43 362" />
        <path className="spidey-limb-blue" d="M139 244C115 267 92 290 77 326C70 342 58 354 43 362" />
        <path className="spidey-boot-outline" d="M77 326C69 343 57 355 42 362" />
        <path className="spidey-boot" d="M77 326C69 343 57 355 42 362" />

        <path className="spidey-limb-outline" d="M161 244C190 253 222 259 257 247C270 242 282 233 290 221" />
        <path className="spidey-limb-blue" d="M161 244C190 253 222 259 257 247C270 242 282 233 290 221" />
        <path className="spidey-boot-outline" d="M253 248C272 242 282 232 291 220" />
        <path className="spidey-boot" d="M253 248C272 242 282 232 291 220" />

        <path className="spidey-torso-outline" d="M118 160Q148 142 180 164L172 240Q151 261 127 243Z" />
        <path className="spidey-torso-red" d="M123 165Q149 150 175 169L167 234Q151 251 132 238Z" />
        <path className="spidey-torso-blue" d="M123 199Q136 216 132 238Q151 252 167 234Q165 215 175 198L171 239Q151 258 127 242Z" />
        <g className="spidey-suit-web">
          <path d="M149 156V219M125 171Q149 183 175 171M123 190Q149 202 176 190" />
          <path d="M149 174 126 160M149 174 174 160M149 191 123 204M149 191 175 203" />
        </g>
        <ChestSpider transform="translate(149 211)" />
        <MaskedHead transform="translate(148 118) rotate(-5)" />
        <path className="spidey-highlight" d="M138 91Q150 83 161 89M127 166Q140 157 151 156" />
      </g>

      <g className="spidey-pose spidey-pose-land">
        <path className="spidey-ground-web" d="M65 358H8m57 0-40 35m40-35-10 58m10-58 30 44M234 365h58m-58 0 40 34m-40-34 9 51m-9-51-28 42" />
        <path className="spidey-motion-line" d="M99 76Q65 47 54 13M122 66Q103 30 104-4" />

        <path className="spidey-limb-outline" d="M128 223C105 250 82 291 66 357" />
        <path className="spidey-limb-red" d="M128 223C105 250 82 291 66 357" />
        <circle className="spidey-glove-outline" cx="65" cy="359" r="15" />
        <circle className="spidey-glove" cx="65" cy="359" r="11" />

        <path className="spidey-limb-outline" d="M170 218C199 223 225 209 248 187" />
        <path className="spidey-limb-red" d="M170 218C199 223 225 209 248 187" />
        <circle className="spidey-glove-outline" cx="251" cy="184" r="14" />
        <circle className="spidey-glove" cx="251" cy="184" r="10" />

        <path className="spidey-limb-outline" d="M145 273C129 300 112 324 94 348C84 361 79 373 80 388" />
        <path className="spidey-limb-blue" d="M145 273C129 300 112 324 94 348C84 361 79 373 80 388" />
        <path className="spidey-boot-outline" d="M95 347C84 361 79 374 80 389" />
        <path className="spidey-boot" d="M95 347C84 361 79 374 80 389" />

        <path className="spidey-limb-outline" d="M166 270C192 285 216 307 234 334C244 348 258 358 278 361" />
        <path className="spidey-limb-blue" d="M166 270C192 285 216 307 234 334C244 348 258 358 278 361" />
        <path className="spidey-boot-outline" d="M231 331C244 348 258 358 278 361" />
        <path className="spidey-boot" d="M231 331C244 348 258 358 278 361" />

        <path className="spidey-torso-outline" d="M121 196Q153 176 183 203L174 268Q153 290 129 274Z" />
        <path className="spidey-torso-red" d="M126 201Q153 184 178 207L169 262Q153 280 134 269Z" />
        <path className="spidey-torso-blue" d="M126 232Q139 246 134 269Q153 281 169 262Q166 247 178 233L173 268Q153 287 129 273Z" />
        <g className="spidey-suit-web">
          <path d="M153 191V250M128 207Q153 218 178 207M126 225Q153 236 179 225" />
          <path d="M153 208 129 196M153 208 178 197M153 226 126 239M153 226 177 239" />
        </g>
        <ChestSpider transform="translate(153 245)" />
        <g transform="translate(145 154) rotate(-17)">
          <g className="spidey-sense">
            <path pathLength="1" d="M-45-36Q-68 0-47 38" />
            <path pathLength="1" d="M45-36Q68 0 47 38" />
            <path pathLength="1" d="M-28-53Q0-69 29-52" />
            <path className="spidey-sense-red" pathLength="1" d="M-62-47Q-84 0-64 49M63-49Q86 0 65 51" />
          </g>
        </g>
        <MaskedHead transform="translate(145 154) rotate(-17)" />
        <path className="spidey-highlight" d="M132 128Q143 117 157 120M131 201Q144 192 156 191" />
      </g>
    </svg>
  </div>
)

export default ScrollSpidey
