<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>

<body class="bg-white font-rubik" <?php body_class(); ?>>

    <?php
    $parentId = wp_get_post_parent_id(get_the_ID());
    $navActive = 'font-medium underline underline-offset-8 decoration-lightBlue decoration-4'
    ?>

    <div class="flex items-center shadow-sm h-20 px-20 justify-between">
        <a href="<?php echo get_home_url(); ?>" class="font-forum text-3xl">
            <div class="flex items-center gap-4">
                <img src="<?php echo get_theme_file_uri('/images/logo.png') ?>" alt="Constellation men's Ensemble logo" height="60px" width="60px">
                <span class="text-black font-normal">Constellation Men's Ensemble</span>
            </div>
        </a>
        <nav class="flex gap-12 items-center">
            <a href="/season" class="<?php if (is_page('season') || is_front_page()) echo $navActive ?>">Season</a>
            <a href="/about" class="<?php if (is_page('about')) echo $navActive ?>">About</a>
            <a href="/listen" class="<?php if (is_page('listen')) echo $navActive ?>">Listen</a>
            <a href="/support" class="<?php if (is_page('support')) echo $navActive ?>">Support</a>
            <button class="bg-darkBlue text-white px-6 py-2 rounded-full">
                <a href="https://interland3.donorperfect.net/weblink/WebLink.aspx?name=E353170&id=3">Give</a>
            </button>
        </nav>
    </div>