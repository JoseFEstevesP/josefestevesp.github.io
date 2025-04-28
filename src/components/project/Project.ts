import './project.css';

interface Project {
	title: string;
	description: string;
	image: string;
	tags: string[];
	link?: string;
}

class ProjectComponent extends HTMLElement {
	private projects: Project[] = [];
	private sectionTitle: string = 'Proyectos';

	constructor() {
		super();
		this.projects = JSON.parse(this.getAttribute('projects') || '[]');
		this.sectionTitle = this.getAttribute('section-title') || 'Proyectos';
	}

	static get observedAttributes() {
		return ['projects', 'section-title'];
	}

	attributeChangedCallback(name: string, _oldValue: string, newValue: string) {
		if (name === 'projects') {
			this.projects = JSON.parse(newValue);
		} else if (name === 'section-title') {
			this.sectionTitle = newValue;
		}
		this.render();
	}

	connectedCallback() {
		this.render();
	}

	private renderProjectCard(project: Project) {
		return `
      <article class="cardProject">
        <div class="cardProject__contentImg">
          <img
            src="${project.image}"
            alt="${project.title}"
            class="cardProject__img"
            loading="lazy"
          />
        </div>
        <h3 class="cardProject__title">${project.title}</h3>
        <p class="cardProject__description">${project.description}</p>
        <div class="cardProject__tags">
          ${project.tags
						.map(tag => `<span class="cardProject__tag">${tag}</span>`)
						.join('')}
        </div>
        ${
					project.link
						? `
					<div class="cardProject__contentFooter">
          <a
					href="${project.link}"
					target="_blank"
					rel="noopener noreferrer"
					class="cardProject__link"
          >
					<span class="cardProject__icon">
					<svg role="img" class="icon">
					<use href="/src/assets/icon/p-jose-min.svg#link"></use>
					</svg>
					</span>
					Ver proyecto
          </a>
					</div>
					`
						: ''
				}
      </article>
    `;
	}

	private render() {
		this.innerHTML = `
		<section class="project">
      <h2 class="project__title">${this.sectionTitle}</h2>
      <div class="project__content">
        ${this.projects
					.map(project => this.renderProjectCard(project))
					.join('')}
      </div>
		</section>
    `;
	}
}

customElements.define('project-component', ProjectComponent);

export default ProjectComponent;
