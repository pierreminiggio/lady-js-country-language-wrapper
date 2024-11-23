import CountryLanguage from '@ladjs/country-language'

export async function getLanguageAlpha2CodeByCountryAlpha2Code(countryCode) {
    return new Promise((resolve, reject) => {

        if (countryCode.length !== 2) {
            reject('Country code is not Alpha 2')

            return
        }

        CountryLanguage.getCountry(countryCode, function (err, country) {
            if (err) {
                console.log(err);
            } else {
                if (! country) {
                    reject('No country for code ' + countryCode)

                    return
                }

                const languages = country.languages

                if (! languages) {
                    reject('No language for code ' + countryCode)

                    return
                }

                const language = languages[0]

                if (! language) {
                    reject('Empty language for code ' + countryCode)

                    return
                }

                const alpha2Code = language.iso639_1

                if (! alpha2Code) {
                    reject('Empty language code for code ' + countryCode)

                    return
                }

                resolve(alpha2Code)
            }
        });
    })
}
