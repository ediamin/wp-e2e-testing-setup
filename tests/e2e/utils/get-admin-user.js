/**
 * WordPress dependencies
 */
import {
    WP_USERNAME,
    WP_PASSWORD,
} from '@wordpress/e2e-test-utils/build/shared/config';

function getAdminUser() {
    return {
        username: WP_USERNAME,
        password: WP_PASSWORD,
    };
}

export default getAdminUser;
