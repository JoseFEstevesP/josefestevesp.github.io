import './technologyTools.css';

class TechnologyTools extends HTMLElement {
	private titleName: string;
	private tools: Array<{ name: string; icon: string }> = [];

	constructor() {
		super();
		this.titleName = this.getAttribute('titleName') || 'Herramientas';
		this.tools = JSON.parse(this.getAttribute('tools') || '[]');
	}

	static get observedAttributes() {
		return ['titleName', 'tools'];
	}

	attributeChangedCallback(name: string, _oldValue: string, newValue: string) {
		if (name === 'titleName') {
			this.titleName = newValue;
		} else if (name === 'tools') {
			this.tools = JSON.parse(newValue);
		}
		this.render();
	}

	connectedCallback() {
		this.render();
	}

	private renderToolItem(tool: { name: string; icon: string }) {
		return `
      <article class="technologyTools__item">
        <div class="technologyTools__icon">
          <svg role="img" class="icon">
            <use href="/src/assets/icon/p-jose-min.svg#${tool.icon}"></use>
          </svg>
        </div>
        <p class="technologyTools__text">${tool.name}</p>
      </article>
    `;
	}

	private render() {
		this.innerHTML = `
		<section class="technologyTools">
      <h2 class="technologyTools__title">${this.titleName}</h2>
      <div class="technologyTools__content">
        ${this.tools.map(tool => this.renderToolItem(tool)).join('')}
      </div>
			</section>
    `;
	}
}

customElements.define('technology-tools', TechnologyTools);

export default TechnologyTools;
