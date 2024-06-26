<?php
/**
 * This class is used to prevent fatal errors in legacy code
 * that others have written based on testing we've done.
 *
 * @package ExactMetrics
 */

/**
 * Class ExactMetrics_License_Compat
 */
class ExactMetrics_License_Compat {

	/**
	 * ExactMetrics_License_Shim constructor.
	 */
	public function __construct() {
	}

	/**
	 * @return string
	 */
	public function get_license_type() {
		return 'lite';
	}

	/**
	 * @return string
	 */
	public function get_site_license_type() {
		return '';
	}

	/**
	 * @return string
	 */
	public function get_site_license_key() {
		return '';
	}

	/**
	 * @return string
	 */
	public function get_network_license_type() {
		return '';
	}

	/**
	 * @return string
	 */
	public function get_network_license_key() {
		return '';
	}

	/**
	 * @return string
	 */
	public function get_license_key() {
		return '';
	}

	/**
	 * Mimic the license expiration check for the lite version.
	 * On lite we don't have a license key so we can't check if it's expired.
	 *
	 * @return bool
	 */
	public function license_expired() {
		return false;
	}
}
