// https://github.com/AsadujjamanMridul/CWD-Assignment-03


// Problem - 01
function kilometerToMeter(kilometer) {
    if (isNaN(kilometer)) {
        return "You must enter a NUMERIC VALUE!"
    }
    else if (!Number.isFinite(kilometer)) {
        return "You must enter FINITE INTEGER VALUE!"
    }
    else if (kilometer < 0) {
        return "Distant can't be negative!"
    }
    else {
        const meter = kilometer * 1000;
        return meter;
    }
}





// Problem - 02
function budgetCalculator(watch, mobile, laptop) {
    if (isNaN(watch) || isNaN(mobile) || isNaN(laptop)) {
        return "You must enter NUMERIC VALUES for every single item!"
    }

    else if (!Number.isFinite(watch * mobile * laptop)) {
        return "You must enter FINITE INTEGER VALUE!"
    }

    else if (!Number.isInteger(watch) ||
        !Number.isInteger(mobile) ||
        !Number.isInteger(laptop) ||
        (watch * mobile * laptop) < 0) {
        return "You must enter POSITIVE INTEGER VALUES for every single item!"
    }

    else {
        const watchPrice = watch * 50;
        const mobilePrice = mobile * 100;
        const laptopPrice = laptop * 500;

        const totalPrice = watchPrice + mobilePrice + laptopPrice;

        return totalPrice;
    }
}





// Problem - 03
function hotelCost(days) {

    if (isNaN(days)) {
        return "Number of day(s) must be a NUMERIC VALUE!"
    }

    else if (!Number.isFinite(days)) {
        return "Number of day(s) must be a FINITE INTEGER VALUE!"
    }

    else if ((!Number.isInteger(days)) || (days < 0)) {
        return "Number of day(s) must be a POSITIVE INTEGER VALUE!"
    }

    else {
        let totalCost = 0;

        if (days <= 10) {
            totalCost = days * 100;
        }

        else if (days <= 20) {
            totalCost = (10 * 100) + (days - 10) * 80;
        }

        else {
            totalCost = (10 * 100) + (10 * 80) + ((days - 20) * 50);
        }

        return totalCost;
    }
}





// Problem - 04
function megaFriend(friend) {

    if (Array.isArray(friend)) {
        if (friend.length <= 0) {
            return "You have entered an EMPTY ARRAY!";
        }

        else {
            let megaName = "";
            let megaNameIndex = 0;

            for (let i = 0; i < friend.length; i++) {

                if (typeof friend[i] != 'string' || !isNaN(friend[i])) {
                    return "You must enter VALID STRING VALUE for every name(s)!"
                }

                if (friend[i].length >= megaName.length) {
                    megaName = friend[i];
                }

            }

            megaNameIndex = friend.indexOf(megaName);
            return friend[megaNameIndex];
        }
    }
    else {
        return "You must enter a ARRAY of STRING(s)"
    }
    
}

