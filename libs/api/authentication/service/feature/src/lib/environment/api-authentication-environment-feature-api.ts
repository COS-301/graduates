export const Environment = {
    clientId: '${{ secrets.GoogleID }}',
    clientSecret: '${{ secrets.GoogleAPI }}',
    callbackURL: 'string',
    scope: ['email', 'profile']
};