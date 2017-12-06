var selector = function () {
    var posicaoScroll = $(document).scrollTop();
    var divtwo = $('#div-two');
    var divfive = $('#div-five');
    var divseven = $('#div-seven');
    var section_quem_somos = divtwo.offset().top;
    var section_servicos = divfive.offset().top;
    var section_orcamentos = divseven.offset().top;
    if (posicaoScroll >= 0 && posicaoScroll < 10) {
        $("#button-menu-one").css({ 'backgroundColor': '#666' });
        $("#button-menu-two").css({ 'backgroundColor': '#fff' });
        $("#button-menu-three").css({ 'backgroundColor': '#fff' });
        $("#button-menu-four").css({ 'backgroundColor': '#fff' });
    }
    else
     if (posicaoScroll < section_quem_somos && posicaoScroll < section_servicos && posicaoScroll < section_orcamentos) {
            $("#button-menu-one").css({ 'backgroundColor': '#fff' });
            $("#button-menu-two").css({ 'backgroundColor': '#666' });
            $("#button-menu-three").css({ 'backgroundColor': '#fff' });
            $("#button-menu-four").css({ 'backgroundColor': '#fff' });
        } else
            if (posicaoScroll < section_servicos && posicaoScroll < section_orcamentos) {
                $("#button-menu-one").css({ 'backgroundColor': '#fff' });
                $("#button-menu-two").css({ 'backgroundColor': '#fff' });
                $("#button-menu-three").css({ 'backgroundColor': '#666' });
                $("#button-menu-four").css({ 'backgroundColor': '#fff' });
            } else
                if (posicaoScroll < section_orcamentos) {
                    $("#button-menu-one").css({ 'backgroundColor': '#fff' });
                    $("#button-menu-two").css({ 'backgroundColor': '#fff' });
                    $("#button-menu-three").css({ 'backgroundColor': '#fff' });
                    $("#button-menu-four").css({ 'backgroundColor': '#666' });
                }
}
$(document).ready(function () {
    selector();
});
$(document).scroll(selector);