export const resources = {

    search: [
        'GET https://c.go-mpulse.net/api/config.json**',
        'GET /api/geoip/**',
        'HEAD /news/**',
        'GET https://cdn.cookielaw.org/**', //кукі зникають
        'HEAD /webinars/**',
        'GET /_next/**',// - UI сторінки змінюється
       // 'GET /coveo/**' - попадали 401 помилки
       'HEAD /01andre',
       'HEAD /test-1',
       'HEAD /news-and-resources',
       'HEAD /investor-relations/reports-and-presentations',
       'HEAD /webinars',
       'HEAD /our-company/careers-at-sgs',
       'HEAD /a-test',
       'HEAD /sustainability',
       'HEAD  /test-map-embed',
       'GET https://res.leadoo.com/**',
       'POST https://v1.bot.leadoo.com/**' 
    ],
    findJob: [
        'GET https://res.leadoo.com/**'
    ],

    homePage: [
        'GET https://res.leadoo.com/**',
       'POST https://v1.bot.leadoo.com/**',
       'HEAD /webinars',
       'HEAD /our-company/careers-at-sgs',
       'HEAD /a-test',
       'HEAD /sustainability',
       'HEAD  /test-map-embed',
    ]
}