import './app2.css';
import $ from 'jquery'

const $tabBer = $('#app2 .tab-ber')
const $tabContent = $('#app2 .tab-content')

$tabBer.on('click', 'li', (e) => {
    const $li = $(e.currentTarget)
    $li.addClass("selected")
        .siblings()
    .removeClass("selected")
    const index = $li.index()
    $tabContent.children()
        .eq(index).addClass('active')
    .siblings().removeClass('active')
})
$tabBer.children().eq(0).trigger('click')