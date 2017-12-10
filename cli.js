console.log('Starting...');
const {spawnSync} = require('child_process');
let safeRequire = (() => {
    try{
        return require('extd-require');
    } catch(e){
        console.log('Installing extd-require...');
        if (spawnSync('npm', ['install', modulename.split('/')[0]], {
            cwd: mainDir,
            stdio: 'ignore'
        }).status){
            throw new ReferenceError('Cannot install extd-require');
        }
        return require('extd-require');
    }
})();

safeRequire('loading-animation').then(LoadingAnimation => {
    console.log('Required loading-animation');
    safeRequire('nodemailer').then(nodemailer => {
        console.log('Required nodemailer');
    });
});
//LoadingAnimation = safeRequire('loading-animation');
//const nodemailer = safeRequire('nodemailer');