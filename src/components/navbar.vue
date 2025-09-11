<template>
  <div class="navbar bg-red-600/70 backdrop-blur-sm shadow-md text-white px-6">
    <!-- Brand -->
    <div class="flex-1">
      <a
        href="#"
        class="text-2xl font-bold tracking-wide hover:text-gray-200 transition"
      >
        Rizki Alfian
      </a>
    </div>

    <!-- Menu Desktop -->
    <div class="hidden md:flex font-medium">
      <ul class="menu menu-horizontal px-1 space-x-4">
        <li>
          <a href="/" class="hover:text-gray-200 transition">Home</a>
        </li>
        <li>
          <a href="#projects" class="hover:text-gray-200 transition"
            >Projects</a
          >
        </li>
        <li>
          <a href="#contact" class="hover:text-gray-200 transition">Contact</a>
        </li>
      </ul>
    </div>

    <!-- Mobile Menu -->
    <div class="dropdown dropdown-end md:hidden">
      <label tabindex="0" class="btn btn-ghost text-white"> ☰ </label>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-red-600 rounded-box w-40"
      >
        <li><a href="/">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </div>
</template>
