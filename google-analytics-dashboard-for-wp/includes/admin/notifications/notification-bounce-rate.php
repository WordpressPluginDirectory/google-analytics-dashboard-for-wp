<?php

/**
 * Add notification when bounce rate is higher than 70%
 * Recurrence: Once weekly
 *
 * @since 7.12.3
 */
final class ExactMetrics_Notification_Bounce_Rate extends ExactMetrics_Notification_Event {

	public $notification_id       = 'exactmetrics_notification_bounce_rate';
	public $notification_interval = 30; // In days.
	public $notification_type     = array( 'basic', 'lite', 'master', 'plus', 'pro' );
	public $notification_category = 'insight';
	public $notification_priority = 2;

	/**
	 * Build Notification data.
	 *
	 * @param array $notification The notification data array to filter.
	 *
	 * @return array|bool $notification notification is ready to add or false if no data.
	 *
	 * @since 7.12.3
	 */
	public function prepare_notification_data( $notification ) {
		$report      = $this->get_report( 'overview' );
		$bounce_rate = isset( $report['data']['infobox']['bounce']['value'] ) ? $report['data']['infobox']['bounce']['value'] : 0;

		if ( $bounce_rate ) {
			$is_em = function_exists( 'ExactMetrics' );

			$learn_more_url = 'https://www.exactmetrics.com/how-to-reduce-bounce-rate/';

			$notification['title'] = sprintf(
				/* translators: Bounce rate. */
				__( 'Your Website Bounce Rate is Higher Than %s', 'google-analytics-dashboard-for-wp' ),
				$bounce_rate
			);
			// Translators: Bounce rate notification content.
			$notification['content'] = sprintf( __( 'Your site\'s bounce rate is %1$s. Double check your site is working properly and be sure it loads quickly.  %2$sHere%3$s are some points to remember and steps to follow to get your bounce rates back to manageable levels.', 'google-analytics-dashboard-for-wp' ), $bounce_rate, '<a href="' . $this->build_external_link( 'https://www.exactmetrics.com/how-to-reduce-bounce-rate/' ) . '" target="_blank">', '</a>' );
			$notification['btns']    = array(
				'view_report' => array(
					'url'  => $this->get_view_url( 'exactmetrics-report-infobox-bounce-rate', 'exactmetrics_reports' ),
					'text' => __( 'View Report', 'google-analytics-dashboard-for-wp' ),
				),
			);

			if ( ! $is_em ) {
				$notification['btns']['learn_more'] = array(
					'url'         => $this->build_external_link( $learn_more_url ),
					'text'        => __( 'Learn More', 'google-analytics-dashboard-for-wp' ),
					'is_external' => true,
				);
			}

			return $notification;
		}

		return false;
	}

}

// initialize the class
new ExactMetrics_Notification_Bounce_Rate();