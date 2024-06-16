<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'cfiovndy_wp147' );

/** Database username */
define( 'DB_USER', 'cfiovndy_wp147' );

/** Database password */
define( 'DB_PASSWORD', 'OS9]bp[15y' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'r0znkrbf6zhocm3dh1n1wi7afqk7wu873v2usswnx9ftrms47zfcsmnoeybbczdt' );
define( 'SECURE_AUTH_KEY',  'of9rycyvqjpaxvcxwjamxlg4bl1itbyu0xive4bt2stsllvep6hwhmwl4kxweury' );
define( 'LOGGED_IN_KEY',    'f1rxfjfrcxpy55q030z5oh0rishqonwgccwrqziaktjpe3uoy7eizgal7ukk3jwb' );
define( 'NONCE_KEY',        '5dhxka0f54ssfi16ayjacoopwqhlkxf8uc7nxrwsoxzkecnvangc1qkrmf5cih9b' );
define( 'AUTH_SALT',        'cogfskwgfup70bofi4rlcdzlwbrapiv8gvt5xcxvvij3agvraejjejdnsmj1r308' );
define( 'SECURE_AUTH_SALT', 'ghaahnmkaulkwfitfkrkofozrfrfvcqc6mh2qoijrlxiqirotw3bkkhgf8zvbglz' );
define( 'LOGGED_IN_SALT',   'zaqm7ddv9f25ohw55h7iygc1nkvqktuansinll7gw0gvl83yxr3mpxgdzjcr1is4' );
define( 'NONCE_SALT',       'vb7ssckhy8nhirlvof4yamtdkc5aeclqkcbgn8yfoy5byvbur4erbnjeeie6erdf' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wpfp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
