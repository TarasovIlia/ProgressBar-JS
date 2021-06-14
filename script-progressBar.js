let ProgreeBarIndicator = document.querySelector('.ProgressBar_indicator');
let FullHeight, InnerHeight;

window.addEventListener('scroll', ProgressBar);
window.addEventListener('', ProgressBar);

function ProgressBar () {
    let FullHeight = document.body.scrollHeight;
    let InnerHeight = window.innerHeight;
    ProgreeBarIndicator.style.width = (pageYOffset*100 / (FullHeight-InnerHeight)
    ) + '%'
};
ProgressBar ();
