const testRoute = {
    routePrefix: '/api',
    routes: [
        {
            endPoint: '/test',
            method: 'GET',
            controllers: [
                'logger',
                'populateObject',
                'serveResults'
            ],
            description: 'Tests App'
        }
    ]
}

module.exports = testRoute;