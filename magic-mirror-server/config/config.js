/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "0.0.0.0",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 80,
	basePath: "/",	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
								// you must set the sub path here. basePath must end with a /
	ipWhitelist: [],// Set [] to allow all IP addresses
								// or add a specific IPv4 of 192.168.1.5 :
								// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
								// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
								// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false,			// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "",	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "",	// HTTPS Certificate path, only require when useHttps is true

	language: "ja",
	locale: "ja-JP",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left",
			config: {
				timeFormat: 24,
				dateFormat: "YYYY/MM/DD dddd"
			}
		},
		{
			module: "weather",
			position: "top_left",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				weatherEndpoint: '/weather',
				showHumidity: true,
				showFeelsLike: true,
				units: "metric",
				degreeLabel: true,
				lang: "ja",
				location: "${OPEN_WEATHER_MAP_LOCATION}",
				locationID: "${OPEN_WEATHER_MAP_LOCATION_ID}", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "${OPEN_WEATHER_MAP_API_KEY}"
			}
		},
		{
                        module: "calendar",
                        header: "Next event is...",
                        position: "top_left",
                        config: {
			    fetchInterval: 100000,
			    displaySymbol: false,
			    maxTitleLength: 10,
			    maximumEntries: 3,
			    timeClass: true,
			    fade: true,
			    fadePoint: 0.15,
			    tableClass: "small",
			    timeFormat: "absolute",
                            flipDateHeaderTitle: true,
			    limitDaysNeverSkip: true,
                            calendars: [
                                {
				    url: "${CALENDAR_ICS_URL_PATH}",
                                }
                        ]
                    }
                },
		{
                        module: "calendar",
                        header: "EVENT LIST",
                        position: "top_right",
                        config: {
			    fetchInterval: 100000,
			    displaySymbol: false,
			    maxTitleLength: 50,
			    maximumEntries: 19,
			    timeClass: true,
			    fade: false,
			    tableClass: "xsmall",
			    timeFormat: "absolute",
                            flipDateHeaderTitle: true,
			    limitDaysNeverSkip: true,
                            calendars: [
                                {
				    url: "${CALENDAR_ICS_URL_PATH}",
                                }
                        ]
                    }
                }
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
