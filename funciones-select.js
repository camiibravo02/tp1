function elemSeleccionado() {
    // @ts-ignore
    select.value === `1` && tarjetaClick(tarjeta1)
    // @ts-ignore
    select.value === `2` && tarjetaClick(tarjeta2)
    // @ts-ignore
    select.value === `3` && tarjetaClick(tarjeta3)
}
// @ts-ignore
select.addEventListener(`change`, elemSeleccionado)