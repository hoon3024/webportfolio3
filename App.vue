<template>
    <div id="app">
        <TopNavOne></TopNavOne>
        <Home></Home>
        <About></About>
        <Skill></Skill>
        <port></port>
        <Contact></Contact>
        <scroll-top></scroll-top>    
        <footer-area></footer-area>
    </div> 
</template>

<script>
import Home from './components/Home.vue'
import About from './components/About.vue'
import TopNavOne from './components/TopNavOne.vue'
import Skill from './components/Skill.vue'
import port from './components/port.vue'
import Contact from './components/Contact.vue'
import ScrollTop from './components/ScrollTop.vue'
import FooterArea from './components/FooterArea.vue'

export default {
   
	components: {
       Home,
       TopNavOne,
       About,
        Skill,
        port,
       Contact,
		FooterArea,
        ScrollTop
        
        
		
	}

}
</script>

<style>
</style>