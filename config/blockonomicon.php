<?php
/**
 * Blockonomicon Configuration
 *
 * Configuration specific to the Blockonomicon plugin. Referenced from
 * vendor/charliedev/blockonomicon/config-example.php.
 */

return [

	// Like other Craft config files, this file supports environment-specific
	// configurations. Any values stored within the `*` array are defaults
	// And additional arrays can be added to provide overrides per environment.
	'*' => [

		// Explicit user IDs allowed to access Blockonomicon.
		// If any user is allowed here, then other users, even full administrators
		// will not be allowed access to the Blockonomicon panel.
//		'allowedUsers' => [1, 2, 3],

		// User-defined block storage location.
		// Allows the path that block resources are stored to be changed from the
		// default location (/storage/blockonomicon/blocks). If this is updated, any
		// existing resources will need to be moved manually.
//		'blockStorage' => '/var/www/storage/blockonomicon/blocks',
	],
];
