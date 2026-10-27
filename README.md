# Jean-Paul Kiwan | Software Engineering Portfolio

Software engineer working on engineering applications, parametric modeling, graphical interfaces, and software integration. My programming background includes Lisp, C/C++, Python, and web development.

This repository is the entry point to my implementation projects and technical work. Project pages distinguish available source code from written overviews and identify setup and validation work still needed.

## Published source archives

These repositories contain reviewed source snapshots, with private configuration, datasets and generated artifacts excluded. **Source publication does not mean the applications were tested, deployed or shown to work.** Each README records the limits of the snapshot.

| Project | Source | Current status |
| --- | --- | --- |
| Java media library | [cnam-media-library](https://github.com/Jean-paul-Kiwan/cnam-media-library) | Owner-reported CNAM coursework; synthetic student fixture; run not verified |
| Driver drowsiness detection | [driver-drowsiness-detection](https://github.com/Jean-paul-Kiwan/driver-drowsiness-detection) | Educational vision/ML source; data and weights omitted; feature mismatch and evaluation limitations documented; efficacy not verified |
| F1 Race Management | [f1-race-management](https://github.com/Jean-paul-Kiwan/f1-race-management) | Original backend/web/mobile source; environment and destructive seed excluded; complete run not verified |
| NGO Charity Flow Analytics | [ngo-charity-flow-analytics](https://github.com/Jean-paul-Kiwan/ngo-charity-flow-analytics) | API/EJS snapshot plus separately recovered Flutter client; combined run and exact academic program not verified |
| Taskboard | [taskboard-app](https://github.com/Jean-paul-Kiwan/taskboard-app) | Clean source snapshot without the legacy database/config/history; run not verified; outbound email paths remain |
| AR frame viewer | [ar-frame-viewer](https://github.com/Jean-paul-Kiwan/ar-frame-viewer) | Personal HTML/JavaScript experiment; model absent; device behavior not verified |

**Legacy Taskboard safety issue remains unresolved.** The existing Taskboard folder and repository history contain an account database and historically disclosed credential-bearing configuration. Whether the accounts are real or credentials remain valid has not been verified. The new source snapshot does not remove those older copies or resolve exposure. Do not reuse their configuration or account data; a separate owner-approved response is required. No credential values or records are repeated here.

CARD-GENERATOR source remains withheld because the recovered compiled app's source/privacy/asset boundary is unresolved. Its relationship to the internship JPK Card overview below is not established. AML-AI and the compiler package remain private or unavailable pending location and publication-rights confirmation.

## Legacy application paths (preserved)

The following original paths remain to avoid breaking existing links. They are legacy snapshots, not the preferred clean source archives. Their existing READMEs do not override the safety and validation limits above.

| Project | What it explores | Main technologies | Explore |
| --- | --- | --- | --- |
| **Taskboard — legacy** | Individual Lebanese University project: collaborative task management with accounts, workspaces, task assignments, and notifications | JavaScript, Node.js, Express, EJS, MongoDB/Mongoose, AWS Lambda integration | [Project and setup notes](taskboard-app/README.md) · [Source](taskboard-app/) |
| **NGO Charity Flow Analytics — legacy** | Individual Lebanese University project: NGO/donation records, API endpoints, and analytics-oriented views | JavaScript, Node.js, Express, MongoDB/Mongoose, EJS | [Project and setup notes](ngo-charity-flow-analytics/README.md) · [Source](ngo-charity-flow-analytics/) |

These are development projects. The documentation identifies known limitations; a production deployment or passing test suite is not implied.

## Additional technical work

**[Compiler Design and Development](case-studies/compiler-design.md)** — A course project implementing a C++ compiler for a simplified subset of AML, producing x86-64 assembly and supporting Windows executable generation. Written overview; source is not included here yet.

**[JPK Card](case-studies/jpk-card.md)** — A React/JavaScript digital business-card project incorporating browser-based augmented reality, developed during a web-development internship. The overview includes an external demo link; its source is not included in this repository.

## Academic work and practice

- [CNAM computer engineering](https://github.com/Jean-paul-Kiwan/cnam-computer-engineering): an index for original study projects and technical implementations.
- [Lebanese University computer science](https://github.com/Jean-paul-Kiwan/computer-science-license): a collection for original bachelor's coursework and projects.
- [Programming practice](https://github.com/Jean-paul-Kiwan/Exercism): a separate home for exercise solutions.

The academic collections are being organized; their own READMEs indicate what source material is currently available.

## Engineering focus

My professional work involves configurable engineering components, geometric calculations, user interfaces, component integration, debugging, and maintainable implementations. Company source code and internal materials are not part of this public portfolio.

## Repository organization

```text
projects-portfolio/
├── README.md                       # Portfolio entry point
├── taskboard-app/                  # Existing application and project README
├── ngo-charity-flow-analytics/     # Existing application and project README
├── case-studies/                   # Public technical overviews
└── CONTRIBUTING.md                 # Documentation and contribution guidelines
```

Dedicated source snapshots are linked above. Existing source folders, case-study links and original repository history are preserved; no deployment or runtime certification is implied.

## Attribution and use

Respect the notices and attribution in individual projects. No blanket license is assigned to all repository contents. A written overview does not grant rights to company, course, or third-party source material.
