<?php
/**
 * Class that handles the output for the Sessions scorecard.
 *
 * Class ExactMetrics_SiteInsights_Template_Scorecard_Sessions
 */
class ExactMetrics_SiteInsights_Template_Scorecard_Sessions extends ExactMetrics_SiteInsights_Template_DuoScorecard {

	protected $metric = 'sessions';

	protected $type = 'scorecard';

	public function output(){
		$data = $this->get_options();

		if (empty($data)) {
			return false;
		}

		$sessions = $data['sessions']['value'];
		$prev_sessions = $data['sessions']['prev'];
		$pageviews = $data['pageviews']['value'];
		$prev_pageviews = $data['pageviews']['prev'];

		$left = $this->get_card_template(
			'left',
			__('Sessions', 'google-analytics-dashboard-for-wp'),
			$sessions,
			$prev_sessions,
			__( 'vs. Previous 30 days', 'google-analytics-dashboard-for-wp' ),
			$data['withComparison']
		);

		$right = $this->get_card_template(
			'right',
			__('Pageviews', 'google-analytics-dashboard-for-wp'),
			$pageviews,
			$prev_pageviews,
			__( 'vs. Previous 30 days', 'google-analytics-dashboard-for-wp' ),
			$data['withComparison']
		);

		return sprintf(
			"<div class=\"exactmetrics-duo-scorecard\">%s</div>",
			$left . $right
		);
	}

	/**
	 * Returns data needed for this block.
	 *
	 * @return array|false
	 */
	protected function get_options() {
		if ( empty($this->data['infobox'])) {
			return false;
		}

		$primaryColor = $this->attributes['primaryColor'];
		$secondaryColor = $this->attributes['secondaryColor'];
		$withComparison = $this->attributes['withComparison'];

		$data = $this->data['infobox'];

		return array(
			'sessions' => $data['sessions'],
			'pageviews' => $data['pageviews'],
			'withComparison' => $withComparison,
		);
	}
}