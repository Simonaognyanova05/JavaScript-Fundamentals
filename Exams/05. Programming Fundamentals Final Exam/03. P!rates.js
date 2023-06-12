function pirates(input) {
    let obj = {}

    for (const element of input) {
        let [city, population, gold] = element.split(`||`);

        if (element == `Sail`) {
            let indexSail = input.indexOf(`Sail`)
            input.splice(0, indexSail + 1)
            break;
        }
        if (!obj.hasOwnProperty(city)) {
            obj[city] = []
            obj[city].push(Number(population))
            obj[city].push(Number(gold))

        } else {
            obj[city][0] += Number(population)
            obj[city][1] += Number(gold)
        }
    }

    for (const element of input) {
        if (element == `End`) {
            break
        }
        let [action, city, population, gold] = element.split(`=>`)

        if (!obj.hasOwnProperty(city)) {
            continue;
        }

        if (action == `Plunder`) {
            console.log(`${city} plundered! ${gold} gold stolen, ${population} citizens killed.`)
            obj[city][0] -= Number(population)
            obj[city][1] -= Number(gold)

            if (obj[city][0] == 0 || obj[city][1] == 0) {
                console.log(`${city} has been wiped off the map!`)
                delete obj[city]
            }

        } else if (action == `Prosper`) {
            gold = Number(population)
            if (gold >= 0) {
                obj[city][1] += Number(gold)
                console.log(`${gold} gold added to the city treasury. ${city} now has ${obj[city][1]} gold.`)
            } else if (gold < 0) {
                console.log(`Gold added cannot be a negative number!`)
            }
        }
    }

    let onlyCity = Object.keys(obj);

    const sortedTowns = Object.entries(obj);


    if (onlyCity.length >= 1) {
        console.log(`Ahoy, Captain! There are ${onlyCity.length} wealthy settlements to go to:`)

        for (const [name, data] of sortedTowns) {
            console.log(`${name} -> Population: ${data[0]} citizens, Gold: ${data[1]} kg`);
        }
    } else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`)
    }
}
