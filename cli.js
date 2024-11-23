import { getLanguageAlpha2CodeByCountryAlpha2Code } from './index.js';

const args = process.argv

if (args.length !== 4) {
    console.log('Use like this : npm start [command] [alpha 2 country code]')
    process.exit(1)
}

const command = args[2]

if (command === 'getLanguageAlpha2CodeByCountryAlpha2Code') {
    getLanguageAlpha2CodeByCountryAlpha2Code(args[3]).then(console.log).catch(console.log)
} else {
    console.log('Unknow command')
    process.exit(1)
}
