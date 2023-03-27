import { css } from "lit";

export default css`
  :host,
  .cps-theme-dark {
    color-scheme: dark;

    --cps-color-neutral-0: 0 0 0;
    --cps-color-neutral-1000: 255 255 255;

    --cps-color-slate-50: 11 16 30;
    --cps-color-slate-100: 15 23 42;
    --cps-color-slate-200: 30 41 59;
    --cps-color-slate-300: 51 65 85;
    --cps-color-slate-400: 71 85 105;
    --cps-color-slate-500: 100 116 139;
    --cps-color-slate-600: 148 163 184;
    --cps-color-slate-700: 203 213 225;
    --cps-color-slate-800: 226 232 240;
    --cps-color-slate-900: 241 245 249;
    --cps-color-slate-950: 248 250 252;

    --cps-color-gray-50: 12 16 27;
    --cps-color-gray-100: 17 24 39;
    --cps-color-gray-200: 31 41 55;
    --cps-color-gray-300: 55 65 81;
    --cps-color-gray-400: 75 85 99;
    --cps-color-gray-500: 107 114 128;
    --cps-color-gray-600: 156 163 175;
    --cps-color-gray-700: 209 213 219;
    --cps-color-gray-800: 229 231 235;
    --cps-color-gray-900: 243 244 246;
    --cps-color-gray-950: 249 250 251;

    --cps-color-zinc-50: 13 13 15;
    --cps-color-zinc-100: 24 24 27;
    --cps-color-zinc-200: 39 39 42;
    --cps-color-zinc-300: 63 63 70;
    --cps-color-zinc-400: 82 82 91;
    --cps-color-zinc-500: 113 113 122;
    --cps-color-zinc-600: 161 161 170;
    --cps-color-zinc-700: 212 212 216;
    --cps-color-zinc-800: 228 228 231;
    --cps-color-zinc-900: 244 244 245;
    --cps-color-zinc-950: 250 250 250;

    --cps-color-neutral-50: 11 11 11;
    --cps-color-neutral-100: 23 23 23;
    --cps-color-neutral-200: 38 38 38;
    --cps-color-neutral-300: 64 64 64;
    --cps-color-neutral-400: 82 82 82;
    --cps-color-neutral-500: 115 115 115;
    --cps-color-neutral-600: 163 163 163;
    --cps-color-neutral-700: 212 212 212;
    --cps-color-neutral-800: 229 229 229;
    --cps-color-neutral-900: 245 245 245;
    --cps-color-neutral-950: 250 250 250;

    --cps-color-stone-50: 16 14 13;
    --cps-color-stone-100: 28 25 23;
    --cps-color-stone-200: 41 37 36;
    --cps-color-stone-300: 68 64 60;
    --cps-color-stone-400: 87 83 78;
    --cps-color-stone-500: 120 113 108;
    --cps-color-stone-600: 168 162 158;
    --cps-color-stone-700: 214 211 209;
    --cps-color-stone-800: 231 229 228;
    --cps-color-stone-900: 245 245 244;
    --cps-color-stone-950: 250 250 249;

    --cps-color-scarlet-50: 83 4 4;
    --cps-color-scarlet-100: 114 3 3;
    --cps-color-scarlet-200: 139 1 1;
    --cps-color-scarlet-300: 178 0 0;
    --cps-color-scarlet-400: 206 2 2;
    --cps-color-scarlet-500: 230 16 15;
    --cps-color-scarlet-600: 248 73 53;
    --cps-color-scarlet-700: 255 121 97;
    --cps-color-scarlet-800: 255 179 158;
    --cps-color-scarlet-900: 255 220 204;
    --cps-color-scarlet-950: 255 241 230;

    --cps-color-red-50: 97 22 22;
    --cps-color-red-100: 127 29 29;
    --cps-color-red-200: 153 27 27;
    --cps-color-red-300: 185 28 28;
    --cps-color-red-400: 220 38 38;
    --cps-color-red-500: 239 68 68;
    --cps-color-red-600: 248 113 113;
    --cps-color-red-700: 252 165 165;
    --cps-color-red-800: 254 202 202;
    --cps-color-red-900: 254 226 226;
    --cps-color-red-950: 254 242 242;

    --cps-color-orange-50: 94 34 14;
    --cps-color-orange-100: 124 45 18;
    --cps-color-orange-200: 154 52 18;
    --cps-color-orange-300: 194 65 12;
    --cps-color-orange-400: 234 88 12;
    --cps-color-orange-500: 249 115 22;
    --cps-color-orange-600: 251 146 60;
    --cps-color-orange-700: 253 186 116;
    --cps-color-orange-800: 254 215 170;
    --cps-color-orange-900: 255 237 213;
    --cps-color-orange-950: 255 247 237;

    --cps-color-amber-50: 90 40 11;
    --cps-color-amber-100: 120 53 15;
    --cps-color-amber-200: 146 64 14;
    --cps-color-amber-300: 180 83 9;
    --cps-color-amber-400: 217 119 6;
    --cps-color-amber-500: 245 158 11;
    --cps-color-amber-600: 251 191 36;
    --cps-color-amber-700: 252 211 77;
    --cps-color-amber-800: 253 230 138;
    --cps-color-amber-900: 254 243 199;
    --cps-color-amber-950: 255 251 235;

    --cps-color-yellow-50: 83 46 13;
    --cps-color-yellow-100: 113 63 18;
    --cps-color-yellow-200: 133 77 14;
    --cps-color-yellow-300: 161 98 7;
    --cps-color-yellow-400: 202 138 4;
    --cps-color-yellow-500: 234 179 8;
    --cps-color-yellow-600: 250 204 21;
    --cps-color-yellow-700: 253 224 71;
    --cps-color-yellow-800: 254 240 138;
    --cps-color-yellow-900: 254 249 195;
    --cps-color-yellow-950: 254 252 232;

    --cps-color-lime-50: 34 53 13;
    --cps-color-lime-100: 54 83 20;
    --cps-color-lime-200: 63 98 18;
    --cps-color-lime-300: 77 124 15;
    --cps-color-lime-400: 101 163 13;
    --cps-color-lime-500: 132 204 22;
    --cps-color-lime-600: 163 230 53;
    --cps-color-lime-700: 190 242 100;
    --cps-color-lime-800: 217 249 157;
    --cps-color-lime-900: 236 252 203;
    --cps-color-lime-950: 247 254 231;

    --cps-color-green-50: 13 53 28;
    --cps-color-green-100: 20 83 45;
    --cps-color-green-200: 22 101 52;
    --cps-color-green-300: 21 128 61;
    --cps-color-green-400: 22 163 74;
    --cps-color-green-500: 34 197 94;
    --cps-color-green-600: 74 222 128;
    --cps-color-green-700: 134 239 172;
    --cps-color-green-800: 187 247 208;
    --cps-color-green-900: 220 252 231;
    --cps-color-green-950: 240 253 244;

    --cps-color-emerald-50: 4 48 36;
    --cps-color-emerald-100: 6 78 59;
    --cps-color-emerald-200: 6 95 70;
    --cps-color-emerald-300: 4 120 87;
    --cps-color-emerald-400: 5 150 105;
    --cps-color-emerald-500: 16 185 129;
    --cps-color-emerald-600: 52 211 153;
    --cps-color-emerald-700: 110 231 183;
    --cps-color-emerald-800: 167 243 208;
    --cps-color-emerald-900: 209 250 229;
    --cps-color-emerald-950: 236 253 245;

    --cps-color-teal-50: 12 48 45;
    --cps-color-teal-100: 19 78 74;
    --cps-color-teal-200: 17 94 89;
    --cps-color-teal-300: 15 118 110;
    --cps-color-teal-400: 13 148 136;
    --cps-color-teal-500: 20 184 166;
    --cps-color-teal-600: 45 212 191;
    --cps-color-teal-700: 94 234 212;
    --cps-color-teal-800: 153 246 228;
    --cps-color-teal-900: 204 251 241;
    --cps-color-teal-950: 240 253 250;

    --cps-color-petrol-50: 9 50 60;
    --cps-color-petrol-100: 9 71 87;
    --cps-color-petrol-200: 8 91 110;
    --cps-color-petrol-300: 6 110 142;
    --cps-color-petrol-400: 4 133 169;
    --cps-color-petrol-500: 11 169 208;
    --cps-color-petrol-600: 71 212 240;
    --cps-color-petrol-700: 126 231 251;
    --cps-color-petrol-800: 165 243 253;
    --cps-color-petrol-900: 200 250 254;
    --cps-color-petrol-950: 235 255 255;

    --cps-color-cyan-50: 15 54 69;
    --cps-color-cyan-100: 22 78 99;
    --cps-color-cyan-200: 21 94 117;
    --cps-color-cyan-300: 14 116 144;
    --cps-color-cyan-400: 8 145 178;
    --cps-color-cyan-500: 6 182 212;
    --cps-color-cyan-600: 34 211 238;
    --cps-color-cyan-700: 103 232 249;
    --cps-color-cyan-800: 165 243 252;
    --cps-color-cyan-900: 207 250 254;
    --cps-color-cyan-950: 236 254 255;

    --cps-color-sky-50: 9 53 80;
    --cps-color-sky-100: 12 74 110;
    --cps-color-sky-200: 7 89 133;
    --cps-color-sky-300: 3 105 161;
    --cps-color-sky-400: 2 132 199;
    --cps-color-sky-500: 14 165 233;
    --cps-color-sky-600: 56 189 248;
    --cps-color-sky-700: 125 211 252;
    --cps-color-sky-800: 186 230 253;
    --cps-color-sky-900: 224 242 254;
    --cps-color-sky-950: 240 249 255;

    --cps-color-blue-50: 23 45 108;
    --cps-color-blue-100: 30 58 138;
    --cps-color-blue-200: 30 64 175;
    --cps-color-blue-300: 29 78 216;
    --cps-color-blue-400: 37 99 235;
    --cps-color-blue-500: 59 130 246;
    --cps-color-blue-600: 96 165 250;
    --cps-color-blue-700: 147 197 253;
    --cps-color-blue-800: 191 219 254;
    --cps-color-blue-900: 219 234 254;
    --cps-color-blue-950: 239 246 255;

    --cps-color-indigo-50: 37 35 99;
    --cps-color-indigo-100: 49 46 129;
    --cps-color-indigo-200: 55 48 163;
    --cps-color-indigo-300: 67 56 202;
    --cps-color-indigo-400: 79 70 229;
    --cps-color-indigo-500: 99 102 241;
    --cps-color-indigo-600: 129 140 248;
    --cps-color-indigo-700: 165 180 252;
    --cps-color-indigo-800: 199 210 254;
    --cps-color-indigo-900: 224 231 255;
    --cps-color-indigo-950: 238 242 255;

    --cps-color-violet-50: 60 23 119;
    --cps-color-violet-100: 76 29 149;
    --cps-color-violet-200: 91 33 182;
    --cps-color-violet-300: 109 40 217;
    --cps-color-violet-400: 124 58 237;
    --cps-color-violet-500: 139 92 246;
    --cps-color-violet-600: 167 139 250;
    --cps-color-violet-700: 196 181 253;
    --cps-color-violet-800: 221 214 254;
    --cps-color-violet-900: 237 233 254;
    --cps-color-violet-950: 245 243 255;

    --cps-color-purple-50: 68 22 105;
    --cps-color-purple-100: 88 28 135;
    --cps-color-purple-200: 107 33 168;
    --cps-color-purple-300: 126 34 206;
    --cps-color-purple-400: 147 51 234;
    --cps-color-purple-500: 168 85 247;
    --cps-color-purple-600: 192 132 252;
    --cps-color-purple-700: 216 180 254;
    --cps-color-purple-800: 233 213 255;
    --cps-color-purple-900: 243 232 255;
    --cps-color-purple-950: 250 245 255;

    --cps-color-fuchsia-50: 83 19 87;
    --cps-color-fuchsia-100: 112 26 117;
    --cps-color-fuchsia-200: 134 25 143;
    --cps-color-fuchsia-300: 162 28 175;
    --cps-color-fuchsia-400: 192 38 211;
    --cps-color-fuchsia-500: 217 70 239;
    --cps-color-fuchsia-600: 232 121 249;
    --cps-color-fuchsia-700: 240 171 252;
    --cps-color-fuchsia-800: 245 208 254;
    --cps-color-fuchsia-900: 250 232 255;
    --cps-color-fuchsia-950: 253 244 255;

    --cps-color-pink-50: 101 18 51;
    --cps-color-pink-100: 131 24 67;
    --cps-color-pink-200: 157 23 77;
    --cps-color-pink-300: 190 24 93;
    --cps-color-pink-400: 219 39 119;
    --cps-color-pink-500: 236 72 153;
    --cps-color-pink-600: 244 114 182;
    --cps-color-pink-700: 249 168 212;
    --cps-color-pink-800: 251 207 232;
    --cps-color-pink-900: 252 231 243;
    --cps-color-pink-950: 253 242 248;

    --cps-color-rose-50: 106 15 43;
    --cps-color-rose-100: 136 19 55;
    --cps-color-rose-200: 159 18 57;
    --cps-color-rose-300: 190 18 60;
    --cps-color-rose-400: 225 29 72;
    --cps-color-rose-500: 244 63 94;
    --cps-color-rose-600: 251 113 133;
    --cps-color-rose-700: 253 164 175;
    --cps-color-rose-800: 254 205 211;
    --cps-color-rose-900: 255 228 230;
    --cps-color-rose-950: 255 241 242;

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

    --cps-color-success-50: var(--cps-color-green-50);
    --cps-color-success-100: var(--cps-color-green-100);
    --cps-color-success-200: var(--cps-color-green-200);
    --cps-color-success-300: var(--cps-color-green-300);
    --cps-color-success-400: var(--cps-color-green-400);
    --cps-color-success-500: var(--cps-color-green-500);
    --cps-color-success-600: var(--cps-color-green-600);
    --cps-color-success-700: var(--cps-color-green-700);
    --cps-color-success-800: var(--cps-color-green-800);
    --cps-color-success-900: var(--cps-color-green-900);
    --cps-color-success-950: var(--cps-color-green-950);

    --cps-color-warning-50: var(--cps-color-amber-50);
    --cps-color-warning-100: var(--cps-color-amber-100);
    --cps-color-warning-200: var(--cps-color-amber-200);
    --cps-color-warning-300: var(--cps-color-amber-300);
    --cps-color-warning-400: var(--cps-color-amber-400);
    --cps-color-warning-500: var(--cps-color-amber-500);
    --cps-color-warning-600: var(--cps-color-amber-600);
    --cps-color-warning-700: var(--cps-color-amber-700);
    --cps-color-warning-800: var(--cps-color-amber-800);
    --cps-color-warning-900: var(--cps-color-amber-900);
    --cps-color-warning-950: var(--cps-color-amber-950);

    --cps-color-danger-50: var(--cps-color-red-50);
    --cps-color-danger-100: var(--cps-color-red-100);
    --cps-color-danger-200: var(--cps-color-red-200);
    --cps-color-danger-300: var(--cps-color-red-300);
    --cps-color-danger-400: var(--cps-color-red-400);
    --cps-color-danger-500: var(--cps-color-red-500);
    --cps-color-danger-600: var(--cps-color-red-600);
    --cps-color-danger-700: var(--cps-color-red-700);
    --cps-color-danger-800: var(--cps-color-red-800);
    --cps-color-danger-900: var(--cps-color-red-900);
    --cps-color-danger-950: var(--cps-color-red-950);

    --cps-fill-solid-primary: rgb(32 32 32);
    --cps-fill-solid-secondary: rgb(28 28 28);
    --cps-fill-solid-tertiary: rgb(40 40 40);
    --cps-fill-solid-quarternary: rgb(44 44 44);

    --cps-fill-control-primary: rgb(var(--cps-color-neutral-1000) / 6.05%);
    --cps-fill-control-secondary: rgb(var(--cps-color-neutral-1000) / 8.37%);
    --cps-fill-control-tertiary: rgb(var(--cps-color-neutral-1000) / 3.26%);
    --cps-fill-control-disabled: rgb(var(--cps-color-neutral-1000) / 4.19%);

    --cps-fill-control-alt-secondary: rgb(var(--cps-color-neutral-0) / 10%);
    --cps-fill-control-alt-tertiary: rgb(var(--cps-color-neutral-1000) / 5.78%);
    --cps-fill-control-alt-quarternary: rgb(
      var(--cps-color-neutral-1000) / 6.98%
    );

    --cps-fill-control-subtle-secondary: rgb(
      var(--cps-color-neutral-1000) / 6.05%
    );
    --cps-fill-control-subtle-tertiary: rgb(
      var(--cps-color-neutral-1000) / 4.19%
    );

    --cps-fill-accent-primary: rgb(var(--cps-color-accent-700));
    --cps-fill-accent-secondary: rgb(var(--cps-color-accent-600) / 90%);
    --cps-fill-accent-tertiary: rgb(var(--cps-color-accent-500) / 80%);
    --cps-fill-accent-disabled: rgb(var(--cps-color-neutral-1000) / 15.81%);

    --cps-foreground-primary: rgb(var(--cps-color-neutral-1000));
    --cps-foreground-secondary: rgb(var(--cps-color-neutral-1000) / 78.6%);
    --cps-foreground-tertiary: rgb(var(--cps-color-neutral-1000) / 54.42%);
    --cps-foreground-disabled: rgb(var(--cps-color-neutral-1000) / 36.28%);

    --cps-foreground-brand-primary: rgb(var(--cps-color-brand-800));
    --cps-foreground-brand-secondary: rgb(var(--cps-color-brand-700));
    --cps-foreground-brand-tertiary: rgb(var(--cps-color-brand-600));

    --cps-foreground-inverted-primary: rgb(var(--cps-color-neutral-0));
    --cps-foreground-inverted-secondary: rgb(var(--cps-color-neutral-0) / 70%);
    --cps-foreground-inverted-disabled: rgb(
      var(--cps-color-neutral-1000) / 53.02%
    );

    --cps-stroke-control-primary: rgb(var(--cps-color-neutral-1000) / 6.98%);
    --cps-stroke-control-secondary: rgb(var(--cps-color-neutral-1000) / 9.3%);

    --cps-stroke-control-inverted-primary: rgb(
      var(--cps-color-neutral-1000) / 8%
    );
    --cps-stroke-control-inverted-secondary: rgb(
      var(--cps-color-neutral-0) / 14%
    );
    --cps-stroke-control-inverted-tertiary: rgb(
      var(--cps-color-neutral-0) / 21.69%
    );
    --cps-stroke-control-inverted-disabled: rgb(
      var(--cps-color-neutral-0) / 20%
    );

    --cps-stroke-card-primary: rgb(var(--cps-color-neutral-0) / 10%);
    --cps-stroke-card-secondary: rgb(var(--cps-color-neutral-0) / 36.28%);

    --cps-stroke-divider: rgb(var(--cps-color-neutral-1000) / 8.37%);

    --cps-color-elevation-top-control: var(--cps-stroke-control-secondary);
    --cps-color-elevation-bottom-control: var(--cps-stroke-control-primary);
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

    --cps-shadow-inset: inset 0 1px 0 -0.5px rgb(var(--cps-color-neutral-1000) /
          9.3%);
    --cps-shadow: 0 2px 4px rgb(var(--cps-color-neutral-0) / 13%);
    --cps-shadow-md: 0 2px 4px rgb(var(--cps-color-neutral-0) / 26%);
    --cps-shadow-lg: 0 4px 8px rgb(var(--cps-color-neutral-0) / 26%);
    --cps-shadow-xl: 0 8px 16px rgb(var(--cps-color-neutral-0) / 26%);
    --cps-shadow-2xl: 0 2px 21px rgb(var(--cps-color-neutral-0) / 37%),
      0 32px 64px rgb(var(--cps-color-neutral-0) / 37%);

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

    --cps-font-sans: "Open Sans", "Segoe UI", Verdana, sans-serif,
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
    --cps-text-body-little: var(--cps-font-size-lt) / var(--cps-font-size-base)
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
    --cps-tracking-wider: 0.025em;
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

    --cps-input-height-small: 1.5rem;
    --cps-input-height-medium: 2rem;
    --cps-input-height-large: 2.5rem;

    --cps-input-required-content: "*";
    --cps-input-required-content-offset: -2px;
    --cps-input-required-content-color: inherit;

    --cps-overlay-background-color: rgba(0, 0, 0, 0.43);

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
