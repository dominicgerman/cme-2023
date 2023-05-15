<?php


function load_assets()
{
    wp_enqueue_script('mainjs', get_theme_file_uri('/build/index.js'), array('wp-element'), '1.0', true);
    wp_enqueue_style('googlefonts', 'https://fonts.googleapis.com/css2?family=Forum&family=Rubik:wght@400;500&display=swap', array(), null);
    wp_enqueue_style('maincss', get_theme_file_uri('/build/index.css'));
}

add_action('wp_enqueue_scripts', 'load_assets');

function add_support()
{
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    //   add_theme_support('editor-styles');
    add_editor_style(array('https://fonts.googleapis.com/css2?family=Forum&family=Rubik:wght@400;500&display=swap', 'build/index.css'));
}

add_action('after_setup_theme', 'add_support');


add_filter('ai1wm_exclude_content_from_export', 'ignoreFiles');
function ignoreFiles($exclude_filters)
{
    $exclude_filters[] = 'themes/cme-2023/node_modules';
    return $exclude_filters;
}


// function cme_files()
// {
//     wp_enqueue_script('cme_main_js', get_theme_file_uri('/script.js'), NULL, '1.0', true);
//     wp_enqueue_style('custom-fonts', 'https://fonts.googleapis.com/css2?family=Marcellus&family=Montserrat:wght@400;600&display=swap', array(), null);
//     wp_enqueue_style('cme_main_styles', get_theme_file_uri('/styles/style.css'));
// }
// add_action('wp_enqueue_scripts', 'cme_files');


// function cme_features()
// {
//     add_theme_support('title-tag');
//     add_theme_support('post-thumbnails');
// }
// add_action('after_setup_theme', 'cme_features');


// function my_editor_content($content, $post)
// {
    
    //     switch ($post->post_type) {
        //         case 'service':
            //             $content = 'We offer two options for worship every Sunday at 10:30 am (CT). Those who wish to worship in person are welcome to join us a few minutes before, and masks are optional if you are vaccinated. We also livestream the service at live.npcovenant.org at the same time, and we would love to have you join us! Childcare is available for those who come in person, following the Word for the Children. And we invite you join us in the parlors for refreshments following the service each week. Come on down and say hi!';
            //             break;
            //         case 'event':
                //             $content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula nunc ex, ultrices interdum nunc sollicitudin eu. Nam et auctor elit. Praesent mollis massa id metus vehicula bibendum. Sed feugiat volutpat gravida. Mauris non massa elit. Morbi vehicula maximus est, nec feugiat mauris mattis eu. Duis non purus egestas, luctus massa eu, porttitor mi.';
                //         default:
                //             $content = '';
                //             break;
                //     }
                
                //     return $content;
                // }
                // add_filter('default_content', 'my_editor_content', 10, 2);
