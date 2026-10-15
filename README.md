# Marita Asesoría — Web

Sitio web estático (HTML/CSS/JS, sin build) para Marita Asesoría, el despacho de asesoría contable y fiscal de Maria Eugenia Alcázar Grain en Sant Cugat del Vallès.

## Estructura

- `index.html` — página única con las 5 secciones: héroe, sobre mí, servicios, por qué elegirnos y contacto.
- `css/style.css` — estilos.
- `js/script.js` — menú móvil y envío del formulario de contacto (vía `mailto:`).
- `favicon.svg`, `og-image.png` — identidad visual e imagen para redes sociales.
- `robots.txt`, `sitemap.xml` — SEO técnico.
- `vercel.json` — configuración de despliegue (cabeceras de seguridad, URLs limpias).

## Desarrollo local

No requiere build. Basta con abrir `index.html` en el navegador o servirlo con cualquier servidor estático:

```bash
npx serve .
```

## Despliegue en Vercel

```bash
npx vercel --prod
```

## Pendiente antes de publicar

- Sustituir `maritaasesoria.com` por el dominio real en `index.html`, `robots.txt` y `sitemap.xml` una vez esté registrado.
- Confirmar el email de contacto `hola@maritaasesoria.com` (o sustituirlo por el que se vaya a usar).
- Añadir una fotografía real de Maria Eugenia en sustitución del marcador de iniciales.
