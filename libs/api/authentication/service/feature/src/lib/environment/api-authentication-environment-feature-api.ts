export const Environment = {
    clientId: '${{ secrets.GOOGLEID }}',
    clientSecret: '${{ secrets.GOOGLESECRET }}',
    callbackURL: 'string',
    scope: ['email', 'profile']
};