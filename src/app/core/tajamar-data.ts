import { Injectable } from '@angular/core';
import { Highlight, Oferta, NewsItem, Stat, Program, SecretariaItem } from './models';

@Injectable({ providedIn: 'root' })
export class TajamarData {

  readonly highlights: Highlight[] = [
    { id: 'h1', icon: '★', title: 'Tajamar #libresypunto',       desc: 'Conoce nuestro proyecto educativo y los valores que nos definen.', href: '/proyecto-educativo', colorClass: 'highlight-card--blue' },
    { id: 'h2', icon: '📅', title: 'Calendario Curso 25/26',      desc: 'Consulta todas las fechas clave del año escolar.',               href: '/calendario',          colorClass: 'highlight-card--red' },
    { id: 'h3', icon: '🎓', title: 'Proceso de Admisiones',       desc: 'Solicita información y reserva tu visita al colegio.',           href: '/admisiones',          colorClass: 'highlight-card--dark' },
    { id: 'h4', icon: '💼', title: 'Formación Profesional FP+',   desc: 'Ciclos con alta inserción laboral y formación dual.',            href: '/fp',                  colorClass: 'highlight-card--accent' }
  ];

  readonly oferta: Oferta[] = [
    { id: 'infantil',     title: 'Educación Infantil', ages: '3 – 6 años',        desc: 'Aprendizaje activo, bilingüismo y desarrollo emocional desde los 3 años.', href: '/infantil' },
    { id: 'primaria',     title: 'Educación Primaria', ages: '6 – 12 años',       desc: 'Rigor académico, metodología activa y certificaciones Cambridge.',          href: '/primaria' },
    { id: 'secundaria',   title: 'Secundaria (ESO)',   ages: '12 – 16 años',      desc: 'Orientación personal y excelencia académica para el futuro del alumno.',    href: '/secundaria' },
    { id: 'bachillerato', title: 'Bachillerato',       ages: '16 – 18 años',      desc: 'Preparación EVAU y orientación universitaria con resultados líderes.',      href: '/bachillerato' },
    { id: 'fp',           title: 'Formación Profesional', ages: '+16 años',       desc: 'Ciclos de Grado Medio y Superior con 95% de inserción laboral.',            href: '/fp' }
  ];

  readonly news: NewsItem[] = [
    { id: 'n1', title: 'Tajamar, mejor colegio de FP TIC de Madrid en 2026', category: 'fp', date: '2026-02-18',
      excerpt: 'El Colegio Tajamar ha recibido el reconocimiento como mejor centro de FP TIC de la Comunidad de Madrid.',
      href: '/noticia-alumni-lab',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80' },
    { id: 'n2', title: 'Nuevas instalaciones: laboratorio de alta tecnología inaugurado', category: 'institucional', date: '2026-01-30',
      excerpt: 'El nuevo laboratorio de electrónica y robótica del edificio de FP+ ha sido inaugurado.',
      href: '/noticia-alumni-lab',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80' },
    { id: 'n3', title: 'Alumnos de Tajamar ganan el Hackathon Madrid Educa 2024', category: 'logros', date: '2024-11-10',
      excerpt: 'El equipo de DAW del Colegio Tajamar se alzó con el primer puesto en la categoría «Aplicaciones Web Responsivas».',
      href: '/noticias',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80' },
    { id: 'n4', title: 'Tajamar renueva el certificado de excelencia Cambridge English Assessment', category: 'logros', date: '2024-10-05',
      excerpt: 'El colegio supera con éxito la auditoria anual de Cambridge Assessment y mantiene el reconocimiento como Cambridge English School.',
      href: '/bilinguismo',
      image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&q=80' },
    { id: 'n5', title: 'Jornada de puertas abiertas – 15 de febrero de 2025', category: 'admisiones', date: '2025-01-20',
      excerpt: 'Ven a conocer Tajamar por dentro. El 15 de febrero abrimos las puertas con guía personal.',
      href: '/noticia-admisiones',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80' },
    { id: 'n6', title: 'Proyecto solidario: alumnos de Secundaria recaudan más de 4.000 € para Cáritas', category: 'actividades', date: '2024-09-30',
      excerpt: 'El mercadillo solidario organizado por 3.º y 4.º de ESO reunió más de 4.000 euros en beneficio de Cáritas Madrid.',
      href: '/noticias',
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&q=80' },
    { id: 'n7', title: 'Reflejos literarios: publicación del anuario Tajamar 2024', category: 'actividades', date: '2024-11-22',
      excerpt: 'El anuario literario del colegio, con relatos, poemas y ensayos de alumnos, ya está disponible.',
      href: '/noticia-reflejos',
      image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=600&q=80' }
  ];

  readonly stats: Stat[] = [
    { id: 's1', value: 55,    suffix: '+', label: 'Años de historia educativa' },
    { id: 's2', value: 15653, suffix: '',  label: 'Antiguos alumnos (Alumni)' },
    { id: 's3', value: 1800,  suffix: '+', label: 'Alumnos actualmente' },
    { id: 's4', value: 98,    suffix: '%', label: 'Tasa de inserción laboral FP' }
  ];

  readonly program: Program[] = [
    { id: 'prog-1', icon: '🎯', title: 'Proyecto Educativo',   desc: '¿Quieres saber cuál es nuestra clave? La confianza plena entre padres, profesores y alumnos.', href: '/proyecto-educativo', cta: 'Leer más' },
    { id: 'prog-2', icon: '⚖️', title: 'Single Sex Education', desc: 'Defendemos la enseñanza diferenciada por sexos. We\'re for anyone, not for everyone.',         href: '/single-sex',        cta: 'Leer más' },
    { id: 'prog-3', icon: '📱', title: 'iPad Tajamar',         desc: 'En Tajamar apostamos por las nuevas tecnologías y te enseñamos a navegar con seguridad.',    href: '/ipad',              cta: 'Leer más' },
    { id: 'prog-4', icon: '🎓', title: 'Becas y Ayudas',       desc: 'Queremos que la economía no sea un problema en la formación de tu hijo.',                   href: '/becas',             cta: 'Leer más' },
    { id: 'prog-5', icon: '🤝', title: 'Alumni',               desc: '15.653 antiguos alumnos son 15.653 razones para estudiar en Tajamar.',                       href: '/alumni',            cta: 'Leer más' },
    { id: 'prog-6', icon: '👨‍👩‍👧', title: 'AMPA',                 desc: 'Las madres y padres son el corazón del colegio. Forma parte de él.',                         href: '/ampa',              cta: 'Leer más' }
  ];

  readonly secretaria: SecretariaItem[] = [
    { id: 'sec-1', title: 'Comedor y menú del mes', desc: 'Consulta el menú semanal y gestiona el servicio de comedor.',  link: 'Ver información', href: '/comedor' },
    { id: 'sec-2', title: 'Uniforme Tajamar',        desc: 'Prendas del uniforme, tallas y cómo adquirirlas.',            link: 'Ver uniforme',     href: '/uniforme' },
    { id: 'sec-3', title: 'Calendario escolar',      desc: 'Fechas clave del curso: vacaciones y días festivos.',         link: 'Ver calendario',   href: '/calendario' },
    { id: 'sec-4', title: 'Servicios y precios',     desc: 'Toda la información sobre servicios del colegio y tarifas.',   link: 'Ver servicios',    href: '/servicios' }
  ];

  readonly partners: { name: string; abbr: string }[] = [
    { name: 'CECE', abbr: 'CECE' },
    { name: 'Fundación Bertelsmann', abbr: 'Bertelsmann' },
    { name: 'IBSC', abbr: 'IBSC' },
    { name: 'EASSE', abbr: 'EASSE' },
    { name: 'Oxford University Press', abbr: 'Oxford' },
    { name: 'Cambridge Assessment', abbr: 'Cambridge' },
    { name: 'Goethe Institut', abbr: 'Goethe' },
    { name: 'Be-Diff', abbr: 'Be-Diff' },
    { name: 'AESECE', abbr: 'AESECE' },
    { name: 'HAZ Fundación', abbr: 'HAZ' },
    { name: 'FP Empresa', abbr: 'FP Empresa' },
    { name: 'Universidad de Navarra', abbr: 'UNAV' },
    { name: 'Snappet', abbr: 'Snappet' },
    { name: 'Fundación ONCE', abbr: 'ONCE' },
    { name: 'Academica School', abbr: 'Academica' }
  ];

  readonly highlightColors = [
    'linear-gradient(135deg, #1e3b5c 0%, #2d5789 100%)',
    'linear-gradient(135deg, #C8102E 0%, #a30d25 100%)',
    'linear-gradient(135deg, #112438 0%, #1e3b5c 100%)',
    'linear-gradient(135deg, #2a4a6b 0%, #c97d22 100%)'
  ];
}

