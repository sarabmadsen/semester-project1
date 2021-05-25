/* Hover effect on boxes */

// const box1 = document.querySelector(".box1");
// const box2 = document.querySelector(".box2");
// const box3 = document.querySelector(".box3");

// box1.addEventListener("mouseover", function () {
//     box1.innerHTML = 
//     `<h2 class="yellow" class="mouseover"><a href="explore/kids.html">Kids</a></h2>`;
// })

// box1.addEventListener("mouseout", function () {
//     box1.innerHTML = `<h2 class="yellow"><a href="explore/kids.html">Kids</a></h2>
//     <a href="explore/kids.html"><img src="images/kids.jpg" alt="Kid with VR glasses"></a>`;
// })



/* Scroll to top */

const upIcon = document.querySelector(".up i");

upIcon.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
})

