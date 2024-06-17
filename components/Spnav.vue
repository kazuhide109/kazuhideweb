<template>
<div>
    <ul class="sp-nav">
    <li>
        <nuxt-link active-class="link-active" to="/" exact>Works</nuxt-link>
    </li>
    <li>
        <nuxt-link active-class="link-active" to="/projects">Projects</nuxt-link>
    </li>
    <li>
        <nuxt-link active-class="link-active" to="/jobworks">JobWorks</nuxt-link>
    </li>
    <li>
        <nuxt-link active-class="link-active" to="/about">ABOUT</nuxt-link>
    </li>
    </ul>
</div>
</template>

<style scoped>
    .sp-nav {
        transform: translate(0, 80px);
        position: fixed;
        width: 100%;
        z-index: 9999;
        text-align: right;
        align-content: center;
        background: rgba(161, 161, 161, 0.9);
    }
    li {
        height: 50px;
        line-height: 50px;
        list-style-type: none;
    }
    a {
        display: flex;
        color: #fff;
        text-decoration: none;
        display: flex; /* フレックスボックスを使用 */
        justify-content: end; /* 右寄せ */
        padding-right: 80px; /* 右に余白を追加 */
        }
    li{
        border-bottom: 1px dotted #fff;
    }
</style>
  