var d=Object.defineProperty;var g=(r,s,e)=>s in r?d(r,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[s]=e;var i=(r,s,e)=>g(r,typeof s!="symbol"?s+"":s,e);(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();class h extends HTMLElement{constructor(){super();i(this,"email");i(this,"location");i(this,"githubUrl");i(this,"cvPath");i(this,"profileImage");this.email=this.getAttribute("email")||"josefestevesp@gmail.com",this.location=this.getAttribute("location")||"Caracas, Venezuela",this.githubUrl=this.getAttribute("github-url")||"https://github.com/josefestevesp",this.cvPath=this.getAttribute("cv-path")||"/src/assets/cv/JoseEsteves-Curriculum.pdf",this.profileImage=this.getAttribute("profile-image")||"/src/assets/img/profile.jpg"}static get observedAttributes(){return["email","location","github-url","cv-path","profile-image"]}attributeChangedCallback(e,c,t){if(c!==t){switch(e){case"email":this.email=t;break;case"location":this.location=t;break;case"github-url":this.githubUrl=t;break;case"cv-path":this.cvPath=t;break;case"profile-image":this.profileImage=t;break}this.render()}}connectedCallback(){this.render()}render(){this.innerHTML=`
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
    `}}customElements.define("info-component",h);class m extends HTMLElement{constructor(){super();i(this,"projects",[]);i(this,"sectionTitle","Proyectos");this.projects=JSON.parse(this.getAttribute("projects")||"[]"),this.sectionTitle=this.getAttribute("section-title")||"Proyectos"}static get observedAttributes(){return["projects","section-title"]}attributeChangedCallback(e,c,t){e==="projects"?this.projects=JSON.parse(t):e==="section-title"&&(this.sectionTitle=t),this.render()}connectedCallback(){this.render()}renderProjectCard(e){return`
      <article class="cardProject">
        <div class="cardProject__contentImg">
          <img
            src="${e.image}"
            alt="${e.title}"
            class="cardProject__img"
            loading="lazy"
          />
        </div>
        <h3 class="cardProject__title">${e.title}</h3>
        <p class="cardProject__description">${e.description}</p>
        <div class="cardProject__tags">
          ${e.tags.map(c=>`<span class="cardProject__tag">${c}</span>`).join("")}
        </div>
        ${e.link?`
					<div class="cardProject__contentFooter">
          <a
					href="${e.link}"
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
					`:""}
      </article>
    `}render(){this.innerHTML=`
		<section class="project">
      <h2 class="project__title">${this.sectionTitle}</h2>
      <div class="project__content">
        ${this.projects.map(e=>this.renderProjectCard(e)).join("")}
      </div>
		</section>
    `}}customElements.define("project-component",m);class u extends HTMLElement{constructor(){super();i(this,"titleName");i(this,"tools",[]);this.titleName=this.getAttribute("titleName")||"Herramientas",this.tools=JSON.parse(this.getAttribute("tools")||"[]")}static get observedAttributes(){return["titleName","tools"]}attributeChangedCallback(e,c,t){e==="titleName"?this.titleName=t:e==="tools"&&(this.tools=JSON.parse(t)),this.render()}connectedCallback(){this.render()}renderToolItem(e){return`
      <article class="technologyTools__item">
        <div class="technologyTools__icon">
          <svg role="img" class="icon">
            <use href="/src/assets/icon/p-jose-min.svg#${e.icon}"></use>
          </svg>
        </div>
        <p class="technologyTools__text">${e.name}</p>
      </article>
    `}render(){this.innerHTML=`
		<section class="technologyTools">
      <h2 class="technologyTools__title">${this.titleName}</h2>
      <div class="technologyTools__content">
        ${this.tools.map(e=>this.renderToolItem(e)).join("")}
      </div>
			</section>
    `}}customElements.define("technology-tools",u);class f extends HTMLElement{constructor(){super();i(this,"name");i(this,"roleDev");i(this,"description");i(this,"specialty");this.name=this.getAttribute("name")||"Desarrollador",this.roleDev=this.getAttribute("roleDev")||"Full Stack Developer",this.description=this.getAttribute("description")||"Programador web con experiencia en desarrollo Frontend y Backend",this.specialty=this.getAttribute("specialty")||"JavaScript"}static get observedAttributes(){return["name","roleDev","description","specialty"]}attributeChangedCallback(e,c,t){e==="name"&&(this.name=t),e==="roleDev"&&(this.roleDev=t),e==="description"&&(this.description=t),e==="specialty"&&(this.specialty=t),this.render()}connectedCallback(){this.render()}render(){this.innerHTML=`
      <div class="welcome">
        <h1 class="welcome__title">¡Hola, soy <span class="welcome__name">${this.name}</span>!</h1>
        <h2 class="welcome__subTitle"><span class="welcome__roleDev">${this.roleDev}</span> | Especializado en <span class="welcome__specialty">${this.specialty}</span></h2>
        <p class="welcome__description">${this.description}</p>
      </div>
    `}}customElements.define("welcome-banner",f);const _=[{title:"Programas salud - Farmapatria",description:"Aplicación para gestionar la entrega de medicamentos a pacientes",image:"/src/assets/img/fp.png",tags:["React","Typescript","SCSS","NestJS","PostgreSQL","Docker","Nginx"]},{title:"Balanceador de carga",description:"Aplicación para gestionar el balanceador de carga de un servidor",image:"/src/assets/img/wb.png",tags:["Docker","Nginx","shell"],link:"https://github.com/JoseFEstevesP/web-balancer"},{title:"Generador de pack de iconos",description:"Aplicación para generar pack de iconos a partir de svg",image:"/src/assets/img/gp.png",tags:["JavaScript","NodeJS"],link:"https://github.com/JoseFEstevesP/generate-pack-svg-icons"}],b=[{name:"HTML",icon:"html"},{name:"CSS",icon:"css"},{name:"SCSS",icon:"scss"},{name:"JavaScript",icon:"js"},{name:"React",icon:"react"},{name:"NodeJs",icon:"nodejs"},{name:"Express",icon:"express"},{name:"NestJS",icon:"nestjs"},{name:"PostgreSQL",icon:"postgresql"}],v=[{name:"Git",icon:"git"},{name:"GitHub",icon:"github"},{name:"Figma",icon:"figma"},{name:"Docker",icon:"docker"},{name:"Nginx",icon:"nginx"}],n=document.querySelector("#projects");n==null||n.setAttribute("projects",JSON.stringify(_));const l=document.querySelector("#tools");l==null||l.setAttribute("tools",JSON.stringify(v));const p=document.querySelector("#technologies");p==null||p.setAttribute("tools",JSON.stringify(b));
