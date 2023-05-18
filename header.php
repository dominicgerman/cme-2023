<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>

<body class="bg-white font-rubik [&_h1]:font-forum [&_h2]:font-forum [&_h3]:font-forum [&_h4]:font-forum [&_figcaption]:font-forum" <?php body_class(); ?>>

    <?php
    $parentId = wp_get_post_parent_id(get_the_ID());
    $navActive = 'font-medium underline underline-offset-8 decoration-lightBlue decoration-4'
    ?>

    <div class="relative flex items-center shadow-sm h-16 lg:h-20 justify-between lg:max-w-[1280px] lg:px-10 mx-auto">
        <a href="<?php echo get_home_url(); ?>">
            <div class="flex items-center gap-2 lg:gap-4 pl-4 lg:pl-0">
                <img src="<?php echo get_theme_file_uri('/images/logo.png') ?>" alt="Constellation men's Ensemble logo" class="h-10 w-10 lg:h-14 lg:w-14">
                <span class="text-black font-forum font-normal text-xl lg:text-3xl">Constellation Men's Ensemble</span>
            </div>
        </a>
        <input type="checkbox" class="opacity-0 peer absolute right-4 h-10 w-10 lg:hidden z-50" />
        <svg class="peer-checked:hidden absolute right-4 z-40 lg:hidden" width="40" height="16" viewBox="0 0 40 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="2" fill="black" />
            <rect y="7" width="40" height="2" fill="black" />
            <rect y="14" width="40" height="2" fill="black" />
        </svg>
        <svg class="hidden peer-checked:block absolute right-4 z-40 lg:hidden" width="40" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.443848" y="30.1421" width="42" height="2" transform="rotate(-45 0.443848 30.1421)" fill="black" />
            <rect x="1.85791" y="0.443604" width="42" height="2" transform="rotate(45 1.85791 0.443604)" fill="black" />
        </svg>
        <nav class="hidden peer-checked:flex flex-col items-center justify-center gap-16 fixed top-0 left-1/2 -translate-x-1/2 text-2xl bg-white h-screen w-screen z-30 lg:flex lg:flex-row lg:static lg:text-lg lg:gap-12 lg:bg-opacity-0 lg:h-auto lg:w-auto lg:translate-x-0">
            <a href="/season" class="<?php if (is_page('season') || is_front_page()) echo $navActive ?>">Season</a>
            <a href="/about" class="<?php if (is_page('about')) echo $navActive ?>">About</a>
            <a href="/listen" class="<?php if (is_page('listen')) echo $navActive ?>">Listen</a>
            <a href="/support" class="<?php if (is_page('support')) echo $navActive ?>">Support</a>
            <button class="bg-darkBlue text-white px-6 py-2 rounded-full">
                <a href="https://interland3.donorperfect.net/weblink/WebLink.aspx?name=E353170&id=3">Give</a>
            </button>
        </nav>
        <!-- <div class="h-screen w-screen bg-gray peer-checked:bg-lightBlue fixed z-20 top-1/2 -translate-y-1/2"></div> -->
    </div>