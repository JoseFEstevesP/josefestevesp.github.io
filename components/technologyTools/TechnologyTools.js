class TechnologyTools extends HTMLElement {
	constructor() {
		super();
		this.titleName = this.getAttribute('titleName') || 'Herramientas';
		this.tools = JSON.parse(this.getAttribute('tools') || '[]');
	}

	static get observedAttributes() {
		return ['titleName', 'tools'];
	}

	attributeChangedCallback(name, _oldValue, newValue) {
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

	renderToolItem(tool) {
		return `
      <article class="technologyTools__item">
        <div class="technologyTools__icon">
          <svg role="img" class="icon">
            <use href="./assets/icon/p-jose-min.svg#${tool.icon}"></use>
          </svg>
        </div>
        <p class="technologyTools__text">${tool.name}</p>
      </article>
    `;
	}

	render() {
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
