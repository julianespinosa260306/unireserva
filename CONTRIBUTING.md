# Guía de contribución

## Ramas

- `main`: código liberado. Protegida.
- `develop`: integración del sprint. Protegida y rama por defecto.
- `feature/UR-n-descripcion-corta`, `bugfix/UR-n-descripcion` y `hotfix/UR-n-descripcion`, donde `UR-n` es la clave de Jira.

No se hacen commits directos a `main` ni a `develop`: todo entra por Pull Request.

## Commits

Formato Conventional Commits con la clave de Jira al final:

```
tipo(alcance): descripción en inglés [UR-n]
```

Tipos: `feat`, `fix`, `test`, `docs`, `refactor`, `chore`.

## Convenciones de código

- JavaScript ES2022, guía de estilo de Airbnb (ESLint) y Prettier (2 espacios, comillas simples, punto y coma, 100 caracteres).
- Variables y funciones en lowerCamelCase; clases y componentes en PascalCase; constantes en MAYÚSCULAS_CON_GUION_BAJO; archivos en kebab-case.
- Código y comentarios en inglés; textos de la interfaz en español.
- Tablas y columnas de la base de datos en snake_case.

## Pull Requests

1. El título incluye la clave `UR-n`.
2. Se llena el checklist de la plantilla (Definición de Terminado).
3. El CI debe estar en verde.
4. Se necesita al menos 1 aprobación de otro integrante; quien abre el PR no lo aprueba.
5. Se integra con squash merge.

## Definición de Terminado (resumen)

- Cumple las convenciones; ESLint y Prettier sin errores.
- Pruebas unitarias e integración aprobadas; cobertura ≥ 70 % en `services/`.
- Integrado en `develop` por PR aprobado con CI en verde.
- La interfaz coincide con el prototipo aprobado.
- Sin bugs Críticos ni Altos abiertos.
- Aceptado por el Product Owner en la Sprint Review.
