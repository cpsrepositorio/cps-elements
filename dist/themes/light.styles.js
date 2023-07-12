import { css } from "lit";

export default css`
  :root,
  :host,
  .cps-theme-light {
    color-scheme: light;
    accent-color: var(--cps-fill-accent-primary);

    --cps-color-neutral-0: 255 255 255;
    --cps-color-neutral-1000: 0 0 0;

    --cps-color-slate-50: 248 250 252;
    --cps-color-slate-100: 241 245 249;
    --cps-color-slate-200: 226 232 240;
    --cps-color-slate-300: 203 213 225;
    --cps-color-slate-400: 148 163 184;
    --cps-color-slate-500: 100 116 139;
    --cps-color-slate-600: 71 85 105;
    --cps-color-slate-700: 51 65 85;
    --cps-color-slate-800: 30 41 59;
    --cps-color-slate-900: 15 23 42;
    --cps-color-slate-950: 11 16 30;

    --cps-color-gray-50: 249 250 251;
    --cps-color-gray-100: 243 244 246;
    --cps-color-gray-200: 229 231 235;
    --cps-color-gray-300: 209 213 219;
    --cps-color-gray-400: 156 163 175;
    --cps-color-gray-500: 107 114 128;
    --cps-color-gray-600: 75 85 99;
    --cps-color-gray-700: 55 65 81;
    --cps-color-gray-800: 31 41 55;
    --cps-color-gray-900: 17 24 39;
    --cps-color-gray-950: 12 16 27;

    --cps-color-zinc-50: 250 250 250;
    --cps-color-zinc-100: 244 244 245;
    --cps-color-zinc-200: 228 228 231;
    --cps-color-zinc-300: 212 212 216;
    --cps-color-zinc-400: 161 161 170;
    --cps-color-zinc-500: 113 113 122;
    --cps-color-zinc-600: 82 82 91;
    --cps-color-zinc-700: 63 63 70;
    --cps-color-zinc-800: 39 39 42;
    --cps-color-zinc-900: 24 24 27;
    --cps-color-zinc-950: 13 13 15;

    --cps-color-neutral-50: 250 250 250;
    --cps-color-neutral-100: 245 245 245;
    --cps-color-neutral-200: 229 229 229;
    --cps-color-neutral-300: 212 212 212;
    --cps-color-neutral-400: 163 163 163;
    --cps-color-neutral-500: 115 115 115;
    --cps-color-neutral-600: 82 82 82;
    --cps-color-neutral-700: 64 64 64;
    --cps-color-neutral-800: 38 38 38;
    --cps-color-neutral-900: 23 23 23;
    --cps-color-neutral-950: 11 11 11;

    --cps-color-stone-50: 250 250 249;
    --cps-color-stone-100: 245 245 244;
    --cps-color-stone-200: 231 229 228;
    --cps-color-stone-300: 214 211 209;
    --cps-color-stone-400: 168 162 158;
    --cps-color-stone-500: 120 113 108;
    --cps-color-stone-600: 87 83 78;
    --cps-color-stone-700: 68 64 60;
    --cps-color-stone-800: 41 37 36;
    --cps-color-stone-900: 28 25 23;
    --cps-color-stone-950: 16 14 13;

    --cps-color-scarlet-50: 255 241 230;
    --cps-color-scarlet-100: 255 220 204;
    --cps-color-scarlet-200: 255 179 158;
    --cps-color-scarlet-300: 255 121 97;
    --cps-color-scarlet-400: 248 73 53;
    --cps-color-scarlet-500: 230 16 15;
    --cps-color-scarlet-600: 206 2 2;
    --cps-color-scarlet-700: 178 0 0;
    --cps-color-scarlet-800: 139 1 1;
    --cps-color-scarlet-900: 114 3 3;
    --cps-color-scarlet-950: 83 4 4;

    --cps-color-red-50: 254 242 242;
    --cps-color-red-100: 254 226 226;
    --cps-color-red-200: 254 202 202;
    --cps-color-red-300: 252 165 165;
    --cps-color-red-400: 248 113 113;
    --cps-color-red-500: 239 68 68;
    --cps-color-red-600: 220 38 38;
    --cps-color-red-700: 185 28 28;
    --cps-color-red-800: 153 27 27;
    --cps-color-red-900: 127 29 29;
    --cps-color-red-950: 97 22 22;

    --cps-color-orange-50: 255 247 237;
    --cps-color-orange-100: 255 237 213;
    --cps-color-orange-200: 254 215 170;
    --cps-color-orange-300: 253 186 116;
    --cps-color-orange-400: 251 146 60;
    --cps-color-orange-500: 249 115 22;
    --cps-color-orange-600: 234 88 12;
    --cps-color-orange-700: 194 65 12;
    --cps-color-orange-800: 154 52 18;
    --cps-color-orange-900: 124 45 18;
    --cps-color-orange-950: 94 34 14;

    --cps-color-amber-50: 255 251 235;
    --cps-color-amber-100: 254 243 199;
    --cps-color-amber-200: 253 230 138;
    --cps-color-amber-300: 252 211 77;
    --cps-color-amber-400: 251 191 36;
    --cps-color-amber-500: 245 158 11;
    --cps-color-amber-600: 217 119 6;
    --cps-color-amber-700: 180 83 9;
    --cps-color-amber-800: 146 64 14;
    --cps-color-amber-900: 120 53 15;
    --cps-color-amber-950: 90 40 11;

    --cps-color-yellow-50: 254 252 232;
    --cps-color-yellow-100: 254 249 195;
    --cps-color-yellow-200: 254 240 138;
    --cps-color-yellow-300: 253 224 71;
    --cps-color-yellow-400: 250 204 21;
    --cps-color-yellow-500: 234 179 8;
    --cps-color-yellow-600: 202 138 4;
    --cps-color-yellow-700: 161 98 7;
    --cps-color-yellow-800: 133 77 14;
    --cps-color-yellow-900: 113 63 18;
    --cps-color-yellow-950: 83 46 13;

    --cps-color-lime-50: 247 254 231;
    --cps-color-lime-100: 236 252 203;
    --cps-color-lime-200: 217 249 157;
    --cps-color-lime-300: 190 242 100;
    --cps-color-lime-400: 163 230 53;
    --cps-color-lime-500: 132 204 22;
    --cps-color-lime-600: 101 163 13;
    --cps-color-lime-700: 77 124 15;
    --cps-color-lime-800: 63 98 18;
    --cps-color-lime-900: 54 83 20;
    --cps-color-lime-950: 34 53 13;

    --cps-color-green-50: 240 253 244;
    --cps-color-green-100: 220 252 231;
    --cps-color-green-200: 187 247 208;
    --cps-color-green-300: 134 239 172;
    --cps-color-green-400: 74 222 128;
    --cps-color-green-500: 34 197 94;
    --cps-color-green-600: 22 163 74;
    --cps-color-green-700: 21 128 61;
    --cps-color-green-800: 22 101 52;
    --cps-color-green-900: 20 83 45;
    --cps-color-green-950: 13 53 28;

    --cps-color-emerald-50: 236 253 245;
    --cps-color-emerald-100: 209 250 229;
    --cps-color-emerald-200: 167 243 208;
    --cps-color-emerald-300: 110 231 183;
    --cps-color-emerald-400: 52 211 153;
    --cps-color-emerald-500: 16 185 129;
    --cps-color-emerald-600: 5 150 105;
    --cps-color-emerald-700: 4 120 87;
    --cps-color-emerald-800: 6 95 70;
    --cps-color-emerald-900: 6 78 59;
    --cps-color-emerald-950: 4 48 36;

    --cps-color-teal-50: 240 253 250;
    --cps-color-teal-100: 204 251 241;
    --cps-color-teal-200: 153 246 228;
    --cps-color-teal-300: 94 234 212;
    --cps-color-teal-400: 45 212 191;
    --cps-color-teal-500: 20 184 166;
    --cps-color-teal-600: 13 148 136;
    --cps-color-teal-700: 15 118 110;
    --cps-color-teal-800: 17 94 89;
    --cps-color-teal-900: 19 78 74;
    --cps-color-teal-950: 12 48 45;

    --cps-color-petrol-50: 235 255 255;
    --cps-color-petrol-100: 200 250 254;
    --cps-color-petrol-200: 165 243 253;
    --cps-color-petrol-300: 126 231 251;
    --cps-color-petrol-400: 71 212 240;
    --cps-color-petrol-500: 11 169 208;
    --cps-color-petrol-600: 4 133 169;
    --cps-color-petrol-700: 6 110 142;
    --cps-color-petrol-800: 8 91 110;
    --cps-color-petrol-900: 9 71 87;
    --cps-color-petrol-950: 9 50 60;

    --cps-color-cyan-50: 236 254 255;
    --cps-color-cyan-100: 207 250 254;
    --cps-color-cyan-200: 165 243 252;
    --cps-color-cyan-300: 103 232 249;
    --cps-color-cyan-400: 34 211 238;
    --cps-color-cyan-500: 6 182 212;
    --cps-color-cyan-600: 8 145 178;
    --cps-color-cyan-700: 14 116 144;
    --cps-color-cyan-800: 21 94 117;
    --cps-color-cyan-900: 22 78 99;
    --cps-color-cyan-950: 15 54 69;

    --cps-color-sky-50: 240 249 255;
    --cps-color-sky-100: 224 242 254;
    --cps-color-sky-200: 186 230 253;
    --cps-color-sky-300: 125 211 252;
    --cps-color-sky-400: 56 189 248;
    --cps-color-sky-500: 14 165 233;
    --cps-color-sky-600: 2 132 199;
    --cps-color-sky-700: 3 105 161;
    --cps-color-sky-800: 7 89 133;
    --cps-color-sky-900: 12 74 110;
    --cps-color-sky-950: 9 53 80;

    --cps-color-blue-50: 239 246 255;
    --cps-color-blue-100: 219 234 254;
    --cps-color-blue-200: 191 219 254;
    --cps-color-blue-300: 147 197 253;
    --cps-color-blue-400: 96 165 250;
    --cps-color-blue-500: 59 130 246;
    --cps-color-blue-600: 37 99 235;
    --cps-color-blue-700: 29 78 216;
    --cps-color-blue-800: 30 64 175;
    --cps-color-blue-900: 30 58 138;
    --cps-color-blue-950: 23 45 108;

    --cps-color-indigo-50: 238 242 255;
    --cps-color-indigo-100: 224 231 255;
    --cps-color-indigo-200: 199 210 254;
    --cps-color-indigo-300: 165 180 252;
    --cps-color-indigo-400: 129 140 248;
    --cps-color-indigo-500: 99 102 241;
    --cps-color-indigo-600: 79 70 229;
    --cps-color-indigo-700: 67 56 202;
    --cps-color-indigo-800: 55 48 163;
    --cps-color-indigo-900: 49 46 129;
    --cps-color-indigo-950: 37 35 99;

    --cps-color-violet-50: 245 243 255;
    --cps-color-violet-100: 237 233 254;
    --cps-color-violet-200: 221 214 254;
    --cps-color-violet-300: 196 181 253;
    --cps-color-violet-400: 167 139 250;
    --cps-color-violet-500: 139 92 246;
    --cps-color-violet-600: 124 58 237;
    --cps-color-violet-700: 109 40 217;
    --cps-color-violet-800: 91 33 182;
    --cps-color-violet-900: 76 29 149;
    --cps-color-violet-950: 60 23 119;

    --cps-color-purple-50: 250 245 255;
    --cps-color-purple-100: 243 232 255;
    --cps-color-purple-200: 233 213 255;
    --cps-color-purple-300: 216 180 254;
    --cps-color-purple-400: 192 132 252;
    --cps-color-purple-500: 168 85 247;
    --cps-color-purple-600: 147 51 234;
    --cps-color-purple-700: 126 34 206;
    --cps-color-purple-800: 107 33 168;
    --cps-color-purple-900: 88 28 135;
    --cps-color-purple-950: 68 22 105;

    --cps-color-fuchsia-50: 253 244 255;
    --cps-color-fuchsia-100: 250 232 255;
    --cps-color-fuchsia-200: 245 208 254;
    --cps-color-fuchsia-300: 240 171 252;
    --cps-color-fuchsia-400: 232 121 249;
    --cps-color-fuchsia-500: 217 70 239;
    --cps-color-fuchsia-600: 192 38 211;
    --cps-color-fuchsia-700: 162 28 175;
    --cps-color-fuchsia-800: 134 25 143;
    --cps-color-fuchsia-900: 112 26 117;
    --cps-color-fuchsia-950: 83 19 87;

    --cps-color-pink-50: 253 242 248;
    --cps-color-pink-100: 252 231 243;
    --cps-color-pink-200: 251 207 232;
    --cps-color-pink-300: 249 168 212;
    --cps-color-pink-400: 244 114 182;
    --cps-color-pink-500: 236 72 153;
    --cps-color-pink-600: 219 39 119;
    --cps-color-pink-700: 190 24 93;
    --cps-color-pink-800: 157 23 77;
    --cps-color-pink-900: 131 24 67;
    --cps-color-pink-950: 101 18 51;

    --cps-color-rose-50: 255 241 242;
    --cps-color-rose-100: 255 228 230;
    --cps-color-rose-200: 254 205 211;
    --cps-color-rose-300: 253 164 175;
    --cps-color-rose-400: 251 113 133;
    --cps-color-rose-500: 244 63 94;
    --cps-color-rose-600: 225 29 72;
    --cps-color-rose-700: 190 18 60;
    --cps-color-rose-800: 159 18 57;
    --cps-color-rose-900: 136 19 55;
    --cps-color-rose-950: 106 15 43;

    --cps-color-brand-50: var(--cps-color-scarlet-50);
    --cps-color-brand-100: var(--cps-color-scarlet-100);
    --cps-color-brand-200: var(--cps-color-scarlet-200);
    --cps-color-brand-300: var(--cps-color-scarlet-300);
    --cps-color-brand-400: var(--cps-color-scarlet-400);
    --cps-color-brand-500: var(--cps-color-scarlet-500);
    --cps-color-brand-600: var(--cps-color-scarlet-600);
    --cps-color-brand-700: var(--cps-color-scarlet-700);
    --cps-color-brand-800: var(--cps-color-scarlet-800);
    --cps-color-brand-900: var(--cps-color-scarlet-900);
    --cps-color-brand-950: var(--cps-color-scarlet-950);

    --cps-color-accent-50: var(--cps-color-petrol-50);
    --cps-color-accent-100: var(--cps-color-petrol-100);
    --cps-color-accent-200: var(--cps-color-petrol-200);
    --cps-color-accent-300: var(--cps-color-petrol-300);
    --cps-color-accent-400: var(--cps-color-petrol-400);
    --cps-color-accent-500: var(--cps-color-petrol-500);
    --cps-color-accent-600: var(--cps-color-petrol-600);
    --cps-color-accent-700: var(--cps-color-petrol-700);
    --cps-color-accent-800: var(--cps-color-petrol-800);
    --cps-color-accent-900: var(--cps-color-petrol-900);
    --cps-color-accent-950: var(--cps-color-petrol-950);

    --cps-fill-system-neutral: rgb(138 138 138);
    --cps-fill-system-transparent-neutral: rgb(0 0 0 / 44.58%);
    --cps-fill-system-subtle-neutral: rgb(0 0 0 / 2.41%);

    --cps-fill-system-informative: rgb(0 95 183);
    --cps-fill-system-subtle-informative: rgba(246 246 246 / 50%);

    --cps-fill-system-warning: rgb(157 93 0);
    --cps-fill-system-subtle-warning: rgb(255 244 206);

    --cps-fill-system-critical: rgb(196 43 28);
    --cps-fill-system-subtle-critical: rgb(253 231 233);

    --cps-fill-system-success: rgb(15 123 15);
    --cps-fill-system-subtle-success: rgb(113 201 105);

    --cps-fill-solid-primary: rgb(243 243 243);
    --cps-fill-solid-secondary: rgb(238 238 238);
    --cps-fill-solid-tertiary: rgb(249 249 249);
    --cps-fill-solid-quaternary: rgb(254 254 254);

    --cps-fill-acrylic-texture: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect opacity='0.2' width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
    --cps-fill-acrylic: linear-gradient(
        rgb(252 252 252 / 85%),
        rgb(252 252 252 / 85%)
      ),
      var(--cps-fill-acrylic-texture);
    --cps-fill-acrylic-base: linear-gradient(
        rgb(243 243 243 / 90%),
        rgb(243 243 243 / 90%)
      ),
      var(--cps-fill-acrylic-texture);

    --cps-fill-control-primary: rgb(var(--cps-color-neutral-0) / 70%);
    --cps-fill-control-secondary: rgb(var(--cps-color-neutral-100) / 50%);
    --cps-fill-control-tertiary: rgb(var(--cps-color-neutral-100) / 30%);
    --cps-fill-control-disabled: rgb(var(--cps-color-neutral-100) / 30%);

    --cps-fill-control-alt-secondary: rgb(
      var(--cps-color-neutral-1000) / 2.41%
    );
    --cps-fill-control-alt-tertiary: rgb(var(--cps-color-neutral-1000) / 5.78%);
    --cps-fill-control-alt-quaternary: rgb(
      var(--cps-color-neutral-1000) / 9.24%
    );

    --cps-fill-control-subtle-secondary: rgb(
      var(--cps-color-neutral-1000) / 3.73%
    );
    --cps-fill-control-subtle-tertiary: rgb(
      var(--cps-color-neutral-1000) / 2.41%
    );

    --cps-fill-accent-primary: rgb(var(--cps-color-accent-800));
    --cps-fill-accent-secondary: rgb(var(--cps-color-accent-950) / 90%);
    --cps-fill-accent-tertiary: rgb(var(--cps-color-accent-950) / 80%);
    --cps-fill-accent-disabled: rgb(var(--cps-color-neutral-1000) / 21.69%);

    --cps-foreground-primary: rgb(var(--cps-color-neutral-1000) / 89.56%);
    --cps-foreground-secondary: rgb(var(--cps-color-neutral-1000) / 60.63%);
    --cps-foreground-tertiary: rgb(var(--cps-color-neutral-1000) / 44.58%);
    --cps-foreground-disabled: rgb(var(--cps-color-neutral-1000) / 36.14%);

    --cps-foreground-brand-primary: rgb(var(--cps-color-brand-500));
    --cps-foreground-brand-secondary: rgb(var(--cps-color-brand-800));
    --cps-foreground-brand-tertiary: rgb(var(--cps-color-brand-700));

    --cps-foreground-inverted-primary: rgb(var(--cps-color-neutral-0));
    --cps-foreground-inverted-secondary: rgb(var(--cps-color-neutral-0) / 70%);
    --cps-foreground-inverted-disabled: rgb(var(--cps-color-neutral-0));

    --cps-stroke-control-primary: rgb(var(--cps-color-neutral-1000) / 5.78%);
    --cps-stroke-control-secondary: rgb(var(--cps-color-neutral-1000) / 16.22%);

    --cps-stroke-control-inverted-primary: rgb(var(--cps-color-neutral-0) / 8%);
    --cps-stroke-control-inverted-secondary: rgb(
      var(--cps-color-neutral-1000) / 40%
    );
    --cps-stroke-control-inverted-tertiary: rgb(
      var(--cps-color-neutral-1000) / 21.69%
    );
    --cps-stroke-control-inverted-disabled: rgb(
      var(--cps-color-neutral-1000) / 5.78%
    );

    --cps-stroke-card-primary: rgb(var(--cps-color-neutral-1000) / 5.78%);
    --cps-stroke-card-secondary: rgb(var(--cps-color-neutral-1000) / 11.56%);

    --cps-stroke-divider: rgb(var(--cps-color-neutral-1000) / 8.03%);

    --cps-stroke-surface: rgb(117 117 117 / 40%);

    --cps-color-elevation-top-control: var(--cps-stroke-control-primary);
    --cps-color-elevation-bottom-control: var(--cps-stroke-control-secondary);
    --cps-color-elevation-top-accent-control: var(
      --cps-stroke-control-inverted-primary
    );
    --cps-color-elevation-bottom-accent-control: var(
      --cps-stroke-control-inverted-secondary
    );

    --cps-border-radius-small: 0.125rem;
    --cps-border-radius-medium: 0.25rem;
    --cps-border-radius-large: 0.5rem;
    --cps-border-radius-x-large: 1rem;
    --cps-border-radius-full: 50%;
    --cps-border-radius-pill: 9999px;

    --cps-shadow-inset: inset 0 -1px 0 -0.5px
      rgb(var(--cps-color-neutral-1000) / 16.22%);
    --cps-shadow: 0 2px 4px rgb(var(--cps-color-neutral-1000) / 4%);
    --cps-shadow-md: 0 2px 4px rgb(var(--cps-color-neutral-1000) / 10%);
    --cps-shadow-lg: 0 4px 8px rgb(var(--cps-color-neutral-1000) / 14%);
    --cps-shadow-xl: 0 8px 16px rgb(var(--cps-color-neutral-1000) / 14%);
    --cps-shadow-2xl: 0 2px 21px rgb(var(--cps-color-neutral-1000) / 14.74%),
      0 32px 64px rgb(var(--cps-color-neutral-1000) / 18.76%);

    --cps-spacing-px: 1px;
    --cps-spacing-0-5: 0.125rem;
    --cps-spacing-1: 0.25rem;
    --cps-spacing-1-5: 0.375rem;
    --cps-spacing-2: 0.5rem;
    --cps-spacing-2-5: 0.625rem;
    --cps-spacing-3: 0.75rem;
    --cps-spacing-3-5: 0.875rem;
    --cps-spacing-4: 1rem;
    --cps-spacing-4-5: 1.125rem;
    --cps-spacing-5: 1.25rem;
    --cps-spacing-6: 1.5rem;
    --cps-spacing-7: 1.75rem;
    --cps-spacing-8: 2rem;
    --cps-spacing-9: 2.25rem;
    --cps-spacing-10: 2.5rem;
    --cps-spacing-11: 2.75rem;
    --cps-spacing-12: 3rem;
    --cps-spacing-14: 3.5rem;
    --cps-spacing-16: 4rem;
    --cps-spacing-18: 4.5rem;
    --cps-spacing-20: 5rem;

    --cps-transition-x-slow: 1000ms;
    --cps-transition-slow: 500ms;
    --cps-transition-medium: 250ms;
    --cps-transition-fast: 150ms;
    --cps-transition-x-fast: 50ms;

    --cps-font-sans: "Roboto Flex", "Segoe UI", Verdana, sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    --cps-font-serif: Georgia, "Times New Roman", serif;
    --cps-font-mono: SFMono-Regular, Consolas, "Liberation Mono", Menlo,
      monospace;

    --cps-font-size-3xs: 0.5rem;
    --cps-font-size-2xs: 0.625rem;
    --cps-font-size-xs: 0.75rem;
    --cps-font-size-sm: 0.875rem;
    --cps-font-size-lt: 0.9375rem;
    --cps-font-size-base: 1rem;
    --cps-font-size-lg: 1.125rem;
    --cps-font-size-xl: 1.25rem;
    --cps-font-size-2xl: 1.5rem;
    --cps-font-size-3xl: 1.875rem;
    --cps-font-size-4xl: 2.5rem;
    --cps-font-size-5xl: 3rem;
    --cps-font-size-6xl: 3.625rem;
    --cps-font-size-7xl: 4.25rem;
    --cps-font-size-8xl: 5.75rem;

    --cps-font-weight-normal: 400;
    --cps-font-weight-semibold: 600;
    --cps-font-weight-bold: 700;

    --cps-text-stamp: var(--cps-font-size-3xs) / var(--cps-font-size-2xs)
      var(--cps-font-sans);
    --cps-text-caption: var(--cps-font-size-2xs) / var(--cps-font-size-xs)
      var(--cps-font-sans);
    --cps-text-label: var(--cps-font-size-xs) / var(--cps-font-size-sm)
      var(--cps-font-sans);
    --cps-text-body: var(--cps-font-size-sm) / var(--cps-font-size-base)
      var(--cps-font-sans);
    --cps-text-body-em: var(--cps-font-size-lt) / var(--cps-font-size-base)
      var(--cps-font-sans);
    --cps-text-body-strong: var(--cps-font-weight-semibold)
      var(--cps-font-size-lt) / var(--cps-font-size-base) var(--cps-font-sans);
    --cps-text-body-large: var(--cps-font-size-base) / var(--cps-font-size-lg)
      var(--cps-font-sans);
    --cps-text-subtitle: var(--cps-font-weight-semibold) var(--cps-font-size-lg) /
      var(--cps-font-size-xl) var(--cps-font-sans);
    --cps-text-title: var(--cps-font-weight-semibold) var(--cps-font-size-xl) /
      var(--cps-font-size-2xl) var(--cps-font-sans);
    --cps-text-heading: var(--cps-font-weight-bold) var(--cps-font-size-4xl) /
      var(--cps-font-size-5xl) var(--cps-font-sans);
    --cps-text-display: var(--cps-font-weight-bold) var(--cps-font-size-7xl) /
      var(--cps-font-size-8xl) var(--cps-font-sans);

    --cps-leading-none: 1;
    --cps-leading-tight: 1.25;
    --cps-leading-snug: 1.375;
    --cps-leading-normal: 1.5;
    --cps-leading-relaxed: 1.625;
    --cps-leading-loose: 2;

    --cps-tracking-tighter: -0.05em;
    --cps-tracking-tight: -0.025em;
    --cps-tracking-normal: 0em;
    --cps-tracking-wide: 0.025em;
    --cps-tracking-wider: 0.05em;
    --cps-tracking-widest: 0.1em;

    --cps-focus-ring-color: rgb(var(--cps-color-neutral-1000));
    --cps-focus-ring-style: solid;
    --cps-focus-ring-width: 1px;
    --cps-focus-ring: var(--cps-focus-ring-style) var(--cps-focus-ring-width)
      var(--cps-focus-ring-color);
    --cps-focus-ring-offset: 1px;
    --cps-focus-ring-inset: -1px;

    --cps-button-font-size-small: var(--cps-font-size-xs);
    --cps-button-font-size-medium: var(--cps-font-size-sm);
    --cps-button-font-size-large: var(--cps-font-size-base);

    --cps-button-height-small: 1.5rem;
    --cps-button-height-medium: 2rem;
    --cps-button-height-large: 2.5rem;

    --cps-button-border-width: 1px;

    --cps-icon-button-height-small: 1rem;
    --cps-icon-button-height-medium: 1.375rem;
    --cps-icon-button-height-large: 2.375rem;

    --cps-input-height-small: 1.5rem;
    --cps-input-height-medium: 2rem;
    --cps-input-height-large: 2.5rem;

    --cps-input-spacing-small: var(--cps-spacing-2);
    --cps-input-spacing-medium: calc(var(--cps-spacing-3) - 1px);
    --cps-input-spacing-large: var(--cps-spacing-3-5);

    --cps-input-border-width: 1px;
    --cps-input-border-color: var(--cps-fill-control-alt-tertiary);
    --cps-input-border-bottom-width: 2px;
    --cps-input-border-bottom-color: var(--cps-foreground-tertiary);

    --cps-input-background: var(--cps-fill-control-primary);
    --cps-input-background-hover: var(--cps-fill-control-secondary);
    --cps-input-background-active: rgb(var(--cps-color-neutral-0));
    --cps-input-background-disabled: rgb(249 249 249 / 30%);

    --cps-input-required-content: "*";
    --cps-input-required-content-offset: -2px;
    --cps-input-required-content-color: var(--cps-fill-system-critical);

    --cps-toggle-size-small: 1rem;
    --cps-toggle-size-medium: 1.25rem;
    --cps-toggle-size-large: 1.5rem;

    --cps-overlay-background-color: rgba(113, 113, 122, 0.33);

    --cps-tooltip-arrow-size: 7px;

    --cps-z-index-drawer: 700;
    --cps-z-index-dialog: 800;
    --cps-z-index-dropdown: 900;
    --cps-z-index-toast: 950;
    --cps-z-index-tooltip: 1000;
  }

  .cps-scroll-lock {
    padding-right: var(--cps-scroll-lock-size) !important;
    overflow: hidden !important;
  }

  .cps-toast-stack {
    position: fixed;
    top: 0;
    inset-inline-end: 0;
    z-index: var(--cps-z-index-toast);
    width: 28rem;
    max-width: 100%;
    max-height: 100%;
    overflow: auto;
  }

  .cps-toast-stack cps-alert {
    margin: var(--cps-spacing-4);
  }

  .cps-toast-stack cps-alert::part(base) {
    box-shadow: var(--cps-shadow-lg);
  }
`;
