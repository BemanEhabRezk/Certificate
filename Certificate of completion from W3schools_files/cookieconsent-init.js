function getCookie(c_name) {
	var c_value = document.cookie,
		c_start = c_value.indexOf(' ' + c_name + '=');
	if (c_start == -1) c_start = c_value.indexOf(c_name + '=');
	if (c_start == -1) {
		c_value = null;
	} else {
		c_start = c_value.indexOf('=', c_start) + 1;
		var c_end = c_value.indexOf(';', c_start);
		if (c_end == -1) {
			c_end = c_value.length;
		}
		c_value = unescape(c_value.substring(c_start, c_end));
	}
	return c_value;
}
var cc = initCookieConsent();
cc.run({
	current_lang: 'en',
	autoclear_cookies: true,
	page_scripts: true,
	gui_options: {
		consent_modal: {
			layout: 'cloud',
			position: 'bottom center',
			transition: 'slide',
			swap_buttons: false,
		},
		settings_modal: {},
	},
	delay: 0,
	autorun: true,
	hide_from_bots: true,
	cookie_name: 'certsCookieConsent',
	cookie_expiration: 182,
	cookie_necessary_only_expiration: 1,
	languages: {
		en: {
			consent_modal: {
				title: 'We use cookies!',
				description:
					'This site uses cookies for performance, analytics, and personalization which helps us improve our site. This will be set only after consent. For more details relative to cookies and other sensitive data, please read the full <a target="_blank" rel="noopener noreferrer" href="https://www.w3schools.com/about/about_privacy.asp" class="cc-link">privacy policy</a>.',
				primary_btn: {
					text: 'Accept',
					role: 'accept_all',
				},
				secondary_btn: {
					text: 'Reject',
					role: 'accept_necessary',
				},
			},
			settings_modal: {
				title: 'Cookie preferences',
				save_settings_btn: 'Save settings',
				accept_all_btn: 'Accept all',
				reject_all_btn: 'Reject all',
				cookie_table_headers: [{ col1: 'Name' }, { col2: 'Domain' }, { col3: 'Expiration' }, { col4: 'Description' }, { col5: 'Type' }],
				blocks: [
					{
						title: 'Analytics cookies',
						description:
							'These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you.',
						toggle: {
							value: 'analytics',
							enabled: true,
							readonly: false,
						},
					},
				],
			},
		},
	},
});
/*if (!(getCookie('snconsent') && getCookie('euconsent-v2'))) {
	cc.show();
}*/
