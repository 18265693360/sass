var layout = {
    template:`
<!--又搞错了 多了一个字母 'a'-->
    <!--<div class="contaianer">-->
    <div class="container">
        <header>
            <slot name="header"></slot>
        </header>
    <div class="content">
        <div class="aside">
            <slot name="aside"></slot>
        </div>
        <div class="main">
            <slot name="main"></slot>
        </div>
        <div class="article">
            <slot name="default"></slot>
        </div>
    </div>
    <div class="footer">
         <slot name="footer"></slot>
    </div>
    </div>
    `
    }
