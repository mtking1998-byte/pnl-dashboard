<?php
/**
 * NetLink theme functions.
 */
if ( ! defined( 'ABSPATH' ) ) { exit; }

function netlink_setup() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'custom-logo' );
	add_theme_support( 'html5', array( 'search-form', 'gallery', 'caption', 'style', 'script' ) );
}
add_action( 'after_setup_theme', 'netlink_setup' );

function netlink_assets() {
	wp_enqueue_style( 'netlink-style', get_stylesheet_uri(), array(), '1.0.0' );
	wp_enqueue_script( 'netlink-app', get_template_directory_uri() . '/assets/js/app.js', array(), '1.0.0', true );
}
add_action( 'wp_enqueue_scripts', 'netlink_assets' );
