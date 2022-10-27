import './app2.css';
import $ from 'jquery'

const html =   ` <section id="app2">
        <ol class="tab-ber">
            <li>1</li>
        <li>2</li>
        </ol>
        <ol class="tab-content">
            <li>内容1</li>
            <li>内容2</li>
        </ol>
    </section>`

    const $element = $(html).appendTo($('body>.page')) 
const $tabBer = $('#app2 .tab-ber')
const $tabContent = $('#app2 .tab-content')
const localKey = 'app2.index'
const index = localStorage.getItem(localKey) || 0

$tabBer.on('click', 'li', (e) => {
    const $li = $(e.currentTarget)
    $li.addClass("selected")
        .siblings()
    .removeClass("selected")
    const index = $li.index()
    localStorage.setItem(localKey,index)
    $tabContent.children()
        .eq(index).addClass('active')
    .siblings().removeClass('active')
})
$tabBer.children().eq(index).trigger('click')