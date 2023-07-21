const $html = document.querySelector ('html')
const $checkbox = document.querySelector ('#switch')

$checkbox.addEventListener('change', function(){
    $html.classList.toggle('dark-mode')

})

function toggleDarkMode() {
    if(document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
    }
    else {
        document.body.classList.add('dark-mode');

    }
}