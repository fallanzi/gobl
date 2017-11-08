<template>
  <header>
    <div class="block">
      <div class="line">
        <div class="name">
          <router-link to="/"> Hodonou Sounton </router-link>
        </div>
        <div class="menu">
          <ul>
            <router-link to="/about"> A PROPOS </router-link>
            <router-link to="/realisations">REALISATIONS</router-link>
            <router-link to="/contacts">CONTACT</router-link>
          </ul>
        </div>

        <div class="research">
          <form action="#">
            <input type="search" name="" placeholder="rechercher">
            <button>Go</button>
          </form>
        </div>
      </div>
    </div>
  </header>
</template>
