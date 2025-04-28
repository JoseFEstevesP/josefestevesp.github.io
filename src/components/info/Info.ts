import './info.css';

class InfoComponent extends HTMLElement {
	private email: string;
	private location: string;
	private githubUrl: string;
	private cvPath: string;
	private profileImage: string;

	constructor() {
		super();
		this.email = this.getAttribute('email') || 'josefestevesp@gmail.com';
		this.location = this.getAttribute('location') || 'Caracas, Venezuela';
		this.githubUrl =
			this.getAttribute('github-url') || 'https://github.com/josefestevesp';
		this.cvPath =
			this.getAttribute('cv-path') ||
			'/src/assets/cv/JoseEsteves-Curriculum.pdf';
		this.profileImage =
			this.getAttribute('profile-image') || '/src/assets/img/profile.jpg';
	}

	static get observedAttributes() {
		return ['email', 'location', 'github-url', 'cv-path', 'profile-image'];
	}

	attributeChangedCallback(name: string, oldValue: string, newValue: string) {
		if (oldValue !== newValue) {
			switch (name) {
				case 'email':
					this.email = newValue;
					break;
				case 'location':
					this.location = newValue;
					break;
				case 'github-url':
					this.githubUrl = newValue;
					break;
				case 'cv-path':
					this.cvPath = newValue;
					break;
				case 'profile-image':
					this.profileImage = newValue;
					break;
			}
			this.render();
		}
	}

	connectedCallback() {
		this.render();
	}

	private render() {
		this.innerHTML = `
		<section class="info">
      <div class="info__content-img">
        <img class="info__img" src="${this.profileImage}" alt="Profile" />
      </div>

      <p class="info__contact">
        <span class="info__user">
          <span class="info__icon">
            <svg role="img" class="icon info__icon">
              <use href="/src/assets/icon/p-jose-min.svg#email"></use>
            </svg>
          </span>
          ${this.email}
        </span>
        <span class="info__user">
          <span class="info__icon">
            <svg role="img" class="icon info__icon">
              <use href="/src/assets/icon/p-jose-min.svg#location"></use>
            </svg>
          </span>
          ${this.location}
        </span>
        <a class="info__user info__link" target="_blank" href="${this.githubUrl}">
          <span class="info__icon">
            <svg role="img" class="icon info__icon">
              <use href="/src/assets/icon/p-jose-min.svg#github"></use>
            </svg>
          </span>
          GitHub
        </a>
      </p>
      <a href="${this.cvPath}" class="info__button" download>
        <span class="info__button-text">
          <span class="">
            <svg role="img" class="icon">
              <use href="/src/assets/icon/p-jose-min.svg#downloader"></use>
            </svg>
          </span>
          Descargar CV
        </span>
      </a>
			</section>
    `;
	}
}

customElements.define('info-component', InfoComponent);

export default InfoComponent;
