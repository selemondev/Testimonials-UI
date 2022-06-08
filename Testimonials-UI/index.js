const rightChevronEl = document.querySelector("#rightChevron");
const leftChevronEl = document.querySelector("#leftChevron");
const workEl = document.querySelector("#work");
const imageEl = document.querySelector("#image");
const descriptionEl = document.querySelector("#description");

const testimonials = [
    {
        id:1,
        work:"Tech Consultant",
        testimonial:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore alias accusantium cumque ullam vero labore id error harum aperiam expedita. Temporibus dolorem, asperiores eos rem ipsum vitae hic perferendis dignissimos quis cupiditate!Tech Consultant",
        img:"https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&crop=entropy&cs=tinysrgb&dpr=2&fit=crop&h=50&w=50"
    },
    {
        id:2,
        work:"Software Developer",
        testimonial:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore alias accusantium cumque ullam vero labore id error harum aperiam expedita. Temporibus dolorem, asperiores eos rem ipsum vitae hic perferendis dignissimos quis cupiditate!Software Developer",
        img:"https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&crop=entropy&cs=tinysrgb&dpr=2&fit=crop&h=50&w=50"
    },
    {
        id:3,
        work:"Open Source",
        testimonial:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore alias accusantium cumque ullam vero labore id error harum aperiam expedita. Temporibus dolorem, asperiores eos rem ipsum vitae hic perferendis dignissimos quis cupiditate!Open Source",
        img:"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&crop=entropy&cs=tinysrgb&dpr=2&fit=crop&h=50&w=50"
    }
];

let itemCount = 0;

function renderTestimonials() {
    let testimonial = testimonials[itemCount];
    imageEl.src = testimonial.img;
    workEl.textContent = testimonial.work;
    descriptionEl.textContent = testimonial.testimonial;
}
renderTestimonials();

leftChevronEl.addEventListener("click", () => {
    itemCount--;
    if(itemCount < 0) {
        itemCount = testimonials.length - 1;
    }
    renderTestimonials()
});

rightChevronEl.addEventListener("click", () => {
    itemCount++;
    if(itemCount > testimonials.length - 1) {
        itemCount = 0
    };
    renderTestimonials()
});
