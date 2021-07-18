module.exports = {
    appPort: 3000,
    jwt: {
        tokens: {
            access: {
                type: 'access',
                expiresIn: '30d'
            },
            refresh: {
                type: 'refresh',
                expiresIn: '60d'
            }
        },
    }
}
