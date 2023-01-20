// Declaraciones
const
    d = document,
    cN = 'active',
    // Menu Hamburguesa
    menuBtn = d.querySelector('nav .btn'),
    menuList = d.querySelector('nav .menu')

;
// Funciones
function toggle(object){
    const { btn, target, val, className } = object;
    target.classList.toggle(className) ?
    btn.classList.replace(val[0], val[1]) :
    btn.classList.replace(val[1], val[0])
}
// Eventos
menuBtn.addEventListener('click', (e) => toggle({
    btn: e.target,
    target: menuList,
    className: cN,
    val: ['icon-open','icon-close']
} ) )