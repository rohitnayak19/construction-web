gsap.from(".logo", {
  opacity:0,
  y:-10,
  duration:0.9,
  delay:0.6,
})

// gsap.from(".nav-links", {
//   opacity:0,
//   y:-10,
//   duration:0.9,
//   delay:0.6,
// })

gsap.from("#home", {
  opacity:0,
  y:-10,
  duration:0.9,
  delay:0.6,
})


gsap.fromTo(".card", 
  { 
      opacity:0,
      y:100 
  }, 
  { 
      opacity:1,
      y: 0, 
      duration: 0.5, 
      stagger: 0.3, 
      scrollTrigger:".card",
      scrub:2
  }
);


gsap.fromTo(".projectImage img", 
  { 
      opacity:0,
      y:30 
  }, 
  { 
      opacity:1,
      y: 0, 
      duration: 0.3, 
      stagger: 0.2, 
      scrollTrigger:".projectImage img",
      scrub:2
  }
);


gsap.fromTo(".contact-container", 
  { 
      opacity:0,
      y:200
  }, 
  { 
      opacity:1,
      y: 0, 
      duration: 0.6, 
      scrollTrigger:".contact-container",
      scrub:2
  }
);



gsap.fromTo(".about", 
  { 
      opacity:0,
      y:200
  }, 
  { 
      opacity:1,
      y: 0, 
      duration: 1, 
      delay:0.2,
      stagger: 0.3, 
      scrollTrigger:".about",
      scrub:2
  }
);


const tl = gsap.timeline();
tl.to('.nav-links',{
  x:0,
  duration:0.4,
})

tl.pause();
const open = document.getElementById('open');
const close = document.getElementById('close');

// open.addEventListener('click', () => {
//   tl.play();
//   open.style.display = "none";
//   close.style.display = "block";
// });

// close.addEventListener('click', () => {
//   tl.reverse();
//   open.style.display = "block";
//   close.style.display = "none";
// });



const buttons = document.querySelectorAll('.projectBtn button');
buttons.forEach((button) =>{
  button.addEventListener('click',(e) =>{
    const value = e.target.innerText

    fetch('./project.json').then(response => response.json()).then(data => {
      const project = data.projects;
      const projectImage = document.querySelector('.projectImage')
      
      const projectImageContainer = document.querySelector('.projectImage')
      projectImageContainer.innerHTML = "";

      if(value === "All"){
        project.forEach((projects) =>{
          const img = document.createElement('img');
          img.src = projects.image
          img.alt = projects.name
          projectImage.appendChild(img)
        })
      }else{
        const matchingProjects = project.filter((project) => project.name === value);
        matchingProjects.forEach((projects) =>{
          const img = document.createElement('img');
          img.src = projects.image
          img.alt = projects.name
          projectImage.appendChild(img)
        })
      }
      matchingProjects.forEach((project) =>{
        const img = document.createElement('img');
        img.src = project.image;
        img.alt = project.name;
        projectImageContainer.appendChild(img)
      })
    }).catch(error => console.error('Error fetching JSON:', error));
  })
})

document.getElementById("custom-open").addEventListener("click", function () {
  document.getElementById("customSideMenu").classList.add("open");
  document.getElementById("custom-open").style.display = "none";
  document.getElementById("custom-close").style.display = "block";
});

document.getElementById("custom-close").addEventListener("click", function () {
  document.getElementById("customSideMenu").classList.remove("open");
  document.getElementById("custom-open").style.display = "block";
  document.getElementById("custom-close").style.display = "none";
});

