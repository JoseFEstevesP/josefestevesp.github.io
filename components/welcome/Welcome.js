class WelcomeBanner extends HTMLElement {
	constructor() {
		super();
		this.name = this.getAttribute('name') || 'Desarrollador';
		this.roleDev = this.getAttribute('roleDev') || 'Full Stack Developer';
		this.description =
			this.getAttribute('description') ||
			'Programador web con experiencia en desarrollo Frontend y Backend';
		this.specialty = this.getAttribute('specialty') || 'JavaScript';
	}

	static get observedAttributes() {
		return ['name', 'roleDev', 'description', 'specialty'];
	}

	attributeChangedCallback(name, _oldValue, newValue) {
		if (name === 'name') this.name = newValue;
		if (name === 'roleDev') this.roleDev = newValue;
		if (name === 'description') this.description = newValue;
		if (name === 'specialty') this.specialty = newValue;
		this.render();
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
      <div class="welcome">
        <h1 class="welcome__title">¡Hola, soy <span class="welcome__name">${this.name}</span>!</h1>
        <h2 class="welcome__subTitle"><span class="welcome__roleDev">${this.roleDev}</span> | Especializado en <span class="welcome__specialty">${this.specialty}</span></h2>
        <p class="welcome__description">${this.description}</p>
      </div>
    `;
	}
}

customElements.define('welcome-banner', WelcomeBanner);

export default WelcomeBanner;
