<template>
    <nav class="nav_container bg-navbar h-[70px] flex justify-center items-center font-sans font-semibold">
            <!-- botones -->
        <ul class="ul-nav list-none flex gap-[50px] text-letras md:gap-[20vh] md:text-lg">
            <router-link to="/organizar">
                <div class="rounded-lg transition active:scale-90 hover:bg-buttonnavbar h-[50px] w-[150px] flex justify-center items-center">
                    Organizar
                </div>
            </router-link>
            <router-link to="/eliminar" class="transition transform active:scale-90">
                <div class="rounded-lg transition active:scale-90 hover:bg-buttonnavbar h-[50px] w-[150px] flex justify-center items-center">
                    Eliminar
                </div>
            </router-link>
            <router-link to="/añadir" class="transition transform active:scale-90">
                <div class="rounded-lg transition active:scale-90 hover:bg-buttonnavbar h-[50px] w-[150px] flex justify-center items-center">
                    Añadir
                </div>
            </router-link>
            <router-link to="/comparar" class="transition transform active:scale-90">
                <div class="rounded-lg transition active:scale-90 hover:bg-buttonnavbar h-[50px] w-[150px] flex justify-center items-center">
                    Comparar
                </div>
            </router-link>
        </ul>
    </nav>
</template>
