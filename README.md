# DSmart — landing de la compañía

Sitio de [dsmarts.app](https://dsmarts.app), en español (`/`, `/privacidad`) e inglés (`/en`, `/en/privacy`).

Stack: Next.js 16 (App Router, todo estático) + Tailwind CSS 4. Desplegado en Vercel (equipo `jorge-team`).

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Dónde se cambia cada cosa

- Textos en ambos idiomas: `src/lib/content.ts`
- Correo de contacto, enlaces de productos y URL del sitio: `src/lib/site.ts`
- Colores (identidad provisional, con modo oscuro): tokens al inicio de `src/app/globals.css`
- Logo: `src/components/wordmark.tsx` (wordmark de texto) y `src/app/icon.svg` (favicon)
- Iconos de productos: `public/products/`

Cada idioma tiene su propio layout raíz (`src/app/(es)` y `src/app/(en)/en`) para que `<html lang>` sea correcto; por eso el 404 vive en `src/app/global-not-found.tsx`.

## Despliegue

Vercel despliega cada push a `main`. Los commits van como `dragon708 <jorgegmdgonzalez@gmail.com>` y los merges se hacen con git en local (no desde la web de GitHub), porque si no Vercel no despliega.

No se tocan los registros DNS de los productos (`mythic`, `app.mythic`, `livekit.mythic`, `turn.mythic`, `api.calinv`) ni se usan comodines.
