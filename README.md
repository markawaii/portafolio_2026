# Portafolio profesional — Ignacio Veliz

Portafolio web interactivo inspirado en la interfaz de *Cyberpunk 2077*. Presenta mi trayectoria profesional, proyectos empresariales y personales, stack técnico y una sección opcional `/blackwall/` con desafíos de desencriptación.

[Ver portafolio publicado](https://markawaii.github.io/portafolio_2026/)

## Propuesta profesional

Desarrollo y lidero soluciones empresariales full-stack, integraciones y automatizaciones, con especialización en Laravel, React, Docker y CI/CD. El contenido público del portafolio describe responsabilidades y resultados sin exponer información confidencial de clientes o empresas.

## Funcionalidades

- Perfil profesional y trayectoria desde trainee hasta liderazgo técnico.
- Proyectos presentados como historias técnicas con contexto, desafío, resultado, aportes y tecnologías.
- Tres visualizaciones de proyectos: carpetas, tarjetas y timeline.
- Vista de carpetas como experiencia predeterminada.
- Stack técnico organizado por capacidades independientes.
- Tema Cyberpunk predeterminado y modo visual profesional.
- Detección automática del idioma del navegador, con español e inglés.
- Navegación mediante teclado y soporte para movimiento reducido.
- Herramientas de desarrollo ocultas como *easter egg* mediante la tecla `7`.
- Archivos opcionales en `/blackwall/` con desencriptación manual y automática.
- Diseño responsive para escritorio, tablet y dispositivos móviles.

## Navegación

| Tecla | Sección |
| --- | --- |
| `1` | Perfil |
| `2` | Trayectoria |
| `3` | Proyectos |
| `4` | Stack |
| `5` | `/blackwall/` |
| `6` | Contacto |
| `7` | Herramientas ocultas |
| `M` | Activar o desactivar audio |

La introducción puede omitirse inmediatamente y no vuelve a mostrarse durante la misma sesión del navegador.

## Tecnologías

- HTML5 semántico.
- CSS responsivo, variables de diseño y animaciones accesibles.
- JavaScript sin dependencias de ejecución.
- Web Crypto API para las utilidades locales.
- GitHub Pages para publicación.

## Arquitectura

```text
.
├── index.html              # Estructura, vistas y modales
├── styles.css              # Sistema visual, responsive y animaciones
├── app.js                  # Datos, navegación, renderizado e interacciones
├── Ignacio_Veliz_CV.pdf    # Currículum público
└── README.md               # Documentación del proyecto
```

Los datos editables del portafolio se encuentran centralizados en `PORTFOLIO_DATA`, dentro de `app.js`.

## Ejecución local

El proyecto es completamente estático. Puede abrirse con cualquier servidor HTTP local:

```bash
python3 -m http.server 8090
```

Luego visita:

```text
http://127.0.0.1:8090/
```

No requiere instalación de paquetes ni proceso de compilación.

## Publicación en GitHub Pages

1. Publica el contenido en la rama `main`.
2. Abre **Settings → Pages** en el repositorio.
3. Selecciona **Deploy from a branch**.
4. Configura la rama `main` y la carpeta `/ (root)`.
5. Guarda la configuración y espera a que finalice el despliegue.

## Accesibilidad y experiencia

- Controles navegables por teclado.
- Roles y atributos ARIA en pestañas, modales y estados interactivos.
- Gestión de foco al abrir y cerrar detalles.
- Compatibilidad con `prefers-reduced-motion`.
- Textos alternativos para imágenes.
- Contraste diferenciado para modos oscuro y profesional.

## Privacidad

Los proyectos empresariales contienen únicamente información profesional pública y descripciones generales. No se publican credenciales, código privado, datos personales de terceros ni detalles confidenciales de clientes.

## Autor

**Ignacio Andrés Veliz Seguel**  
Full-Stack Developer · Technical Lead  
[GitHub](https://github.com/markawaii) · [LinkedIn](https://www.linkedin.com/in/ingveliz/)
