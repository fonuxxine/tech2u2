var arrow = document.getElementById('arrow');
var blankForm = document.getElementById('tap');
arrow.addEventListener('click', e => {
    if (blankForm.style.display === 'none') {
        blankForm.style.display = 'block';
        arrow.src = '/image/contact/Vector-3.svg';
    } else {
        blankForm.style.display = 'none';
        arrow.src = '/image/contact/Vector-2.svg';
    }
})

function Hello() {
    useEffect(() => {
        var arrow = document.getElementById('arrow');
        var blankForm = document.getElementById('tap');

    arrow.addEventListener("click", e => {
        if (blankForm.style.display === 'none') {
            blankForm.style.display = 'block';
            arrow.src = '/image/contact/Vector-3.svg';
        } else {
            blankForm.style.display = 'none';
            arrow.src = '/image/contact/Vector-2.svg';
        }
    });
    return () => {
        window.removeEventListener("scroll", doSomething);
    };
    }, []);
}