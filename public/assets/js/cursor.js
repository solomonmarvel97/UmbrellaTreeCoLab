
const cursor = document.querySelector('.cursors');

document.addEventListener('mousemove', e => {
cursor.setAttribute("style", "top: "+(e.pageY - 15)+"px; left: "+(e.pageX - 15)+"px;")
})

document.addEventListener('click', () => {
cursor.classList.add("expand");

setTimeout(() => {
    cursor.classList.remove("expand");
}, 500)
})