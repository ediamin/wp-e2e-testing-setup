/**
 * WordPress dependencies
 */
import initConfig from '@wordpress/env/lib/init-config';
import {
    configureWordPress,
    resetDatabase as resetWPDatabase,
} from '@wordpress/env/lib/wordpress';

async function resetDatabase() {
    const config = await initConfig( {} );

    await resetWPDatabase( 'tests', config );
    await configureWordPress( 'tests', config );
}

export default resetDatabase;
