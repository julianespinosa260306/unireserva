# UniReserva

Sistema web de reservación de espacios universitarios (cubículos, salas y laboratorios).

Proyecto final de **Calidad de Software (CalidadSW), grupo 8lmv, ITSON**. Equipo 6.

| Integrante | Rol Scrum |
|---|---|
| Paul Candelario Seañez Villalobos | Product Owner |
| Alejandro Erro González | Scrum Master |
| Christian Daniel Valencia Patrón | Developer |
| Ricardo Orduño Camacho | Developer |
| Julian Espinosa Llanos | Developer |

## Meta del producto

Que cualquier integrante de la comunidad universitaria pueda consultar y reservar un espacio disponible en menos de 2 minutos, sin empalmes de horario y con información de uso para quienes administran los espacios.

## Estructura

```
.github/      Plantilla de Pull Request y flujo de integración continua (CI)
backend/      API REST (Node.js + Express), pruebas con Jest y Supertest
frontend/     Interfaz web (React + Vite)
docs/         Prototipo de alta fidelidad y documentación
```

## Cómo ejecutar el backend

```bash
cd backend
npm install
npm test          # pruebas con cobertura
npm run lint      # ESLint (guía Airbnb)
npm start         # http://localhost:3000/api/v1/health
```

## Gestión del trabajo

- Tablero Kanban y Bug Tracking: Jira, proyecto **UniReserva (clave UR)**.
- Ramas: `main` (liberado) y `develop` (integración). Trabajo en `feature/UR-n-descripcion`.
- Commits: Conventional Commits con la clave de Jira, por ejemplo `feat(spaces): add search endpoint [UR-8]`.
- Ver [CONTRIBUTING.md](CONTRIBUTING.md) para la Definición de Terminado y las reglas de Pull Request.
