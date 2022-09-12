class card extends HTMLElement {
	constructor() {
		super();
		this.url;
		this.titleCard;
	}
	static get observedAttributes() {
		return ['url', 'titleCard'];
	}
	attributeChangedCallback(nameAtr, oldValue, newValue) {
		this.render();
	}
	connectedCallback() {
		this.render();
	}
	render() {
		this.url = this.getAttribute('url');
		this.titleCard = this.getAttribute('titleCard');
		this.innerHTML = `
    <div class="technology__item" tabindex="0">
      <div class="technology__itemTechnology neo">
      <img src="${this.url}" alt="${this.titleCard}"> 
      </div>
      <h3 class="technology__titleItem">${this.titleCard}</h3>
    </div>`;
	}
}
window.customElements.define('technology-card', card);
